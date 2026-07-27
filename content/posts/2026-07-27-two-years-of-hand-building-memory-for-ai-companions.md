---
title: Two years of hand-building memory for AI companions
tags: [ai, memory, agents]
published: true
---

I never bought a memory layer. From mid-2024 to now I hand-coded the whole thing: retrieval, embeddings, reranking, rolling profiles, context-window assembly, proactive follow-ups. Three products, one continuous line of thinking:

- **Persocoms** (Jun 2024 to Mar 2025). Personal AI companions over chat, voice, and iMessage. My most complete RAG stack. Everything in Postgres with pgvector, no external vector DB, no framework.
- **Ama** (Nov 2024 to Dec 2025). An astrology companion on WhatsApp and Telegram. Started naive, then I pushed the memory engine out of the bot and into its own backend.
- **Orage** (Mar 2026 to now). A multi-tenant companion platform with memory as a core primitive. I threw out background extraction and bet on agent-first memory tools on Cloudflare.

The honest one-line verdict up front: most of the individual techniques were already known when I built them, but I was consistently early on the practices that only got names later (context engineering, agentic memory, proactive memory), and I hand-built in 2024 the exact thing startups raised eight figures to sell in 2025.

Every date below is a real first-appearance date pulled from git history. Industry dates are cited so the comparison is checkable.

## My timeline at a glance

| Date       | What I shipped                                                           | Product   |
| ---------- | ------------------------------------------------------------------------ | --------- |
| 2024-07-31 | Persistent companion + emotional state engine                            | Persocoms |
| 2024-08-03 | Time-awareness context, history module                                   | Persocoms |
| 2024-08-07 | Per-message embeddings + pgvector search; LLM-maintained user profile    | Persocoms |
| 2024-08-10 | Conversation-boundary history picker                                     | Persocoms |
| 2024-08-19 | Scheduled proactive memory via cron re-entering the agent loop           | Persocoms |
| 2024-09-13 | Profile updates as string-replace patches (reasoned diffs)               | Persocoms |
| 2024-09-23 | Contextual retrieval summaries (dual context vector)                     | Persocoms |
| 2024-10-01 | LLM-orchestrated hybrid RAG (query planner) + Cohere rerank + web search | Persocoms |
| 2024-12-09 | Ama v1: full history + astrology reports as durable memory               | Ama       |
| 2024-12-16 | Memory engine extracted into its own backend                             | Ama       |
| 2025-04-17 | Per-message summary + dual embeddings pipeline                           | Ama       |
| 2025-05-29 | Structured profile via RFC 6902 JSON Patch                               | Ama       |
| 2025-06-02 | Proactive follow-up cron using profile + history + astro state           | Ama       |
| 2026-03-17 | Agent-first memory: read_profile / update_profile / search_memory tools  | Orage     |
| 2026-07-10 | Multi-tenant profile memory, loop-owned                                  | Orage     |
| 2026-07-15 | Loop-owned durable history, keyword recall, memory skills                | Orage     |
| 2026-07-17 | Char-budgeted window, people-in-profile, fake-save guardrail             | Orage     |

## The six layers of memory

I built memory in six recurring layers. Each layer got rebuilt every product as my thinking changed.

### 1. The recent window

The least glamorous layer, and the one I iterated on most.

Persocoms (Aug 2024) used a token-budgeted window: fetch 25 messages, filter by a 2 or 7 day timeframe, count tokens, cap at 8k, force the window to start on a user turn. I also built a boundary picker that sorted the largest timestamp gaps between messages and sliced the history at a natural conversation boundary. I have not seen anyone else do boundary-aware history selection by time gaps. It was clever and I abandoned it for something simpler.

Ama (Apr 2025) used a plain "stop at a user turn" rule: grab the 66 newest messages, walk backward, stop once you have more than 33 and you are on a user message. Good enough at WhatsApp volumes.

Orage (Jul 2026) uses a count cap plus a character budget. One 59k-char runaway reply had eaten a whole 30-message window (about 41k input tokens), so I now clamp each message to 4k chars and keep the newest messages that fit a 20k budget. The newest message always survives.

Industry context: LangChain shipped windowed memory in early-to-mid 2023, so windowing itself was old news. But the umbrella discipline for carefully assembling exactly what goes in the window only got its name, context engineering, in June 2025 (Tobi Lutke's tweet on 2025-06-19, Harrison Chase's "Rise of Context Engineering" on 2025-06-23, Karpathy's endorsement two days later). I had been doing token budgets, char budgets, boundary selection, and window merging by hand since 2024. Standard mechanics, but I was practising the named discipline a year before it had a name.

### 2. RAG: embeddings and semantic recall

This is where Persocoms was strongest and where I later, deliberately, walked away.

Persocoms (Aug to Oct 2024) was the full pipeline, all hand-rolled on pgvector. Every message embedded on ingest. A custom vector search RPC. Then, crucially, a dual index: alongside the raw content vector I stored a second embedding of a 20-to-30-word LLM summary situating each message. At query time an LLM query planner decided whether to search memory and/or the web and wrote the query strings, I ran the vector searches in parallel across both indexes, deduped anything already in the recent window, and reranked the survivors with Cohere. Web retrieval was Perplexity Sonar.

Ama (2025): I ported the embedding pipeline and the dual-vector schema, but I never wired retrieval back in. The embeddings were written and then never read. I had quietly decided that for an astrology bot, a dense profile plus a recent window "felt remembered" enough, and RAG was not worth the cost and latency. Storage without a read path is just cost. That is a mistake I name explicitly below.

Orage (2026): recall is a keyword search tool over SQLite, recency-ordered. Semantic recall is designed but not shipped, on purpose, until the platform supports it.

Industry context: RAG was coined by Lewis et al. in May 2020 and was the default pattern by mid-2023. The interesting date is the dual-index move. Anthropic published "Introducing Contextual Retrieval" on 2024-09-19. My contextual-vector backfill landed 2024-09-23 and was wired into the live pipeline 2024-10-01. I read their post and had it in production within days. A genuine fast-follow at the frontier, not a lag.

### 3. The durable profile

The part I am proudest of conceptually, because I kept circling the same question: how does the model edit a long-lived record of the person without rewriting it every time?

Persocoms (Aug to Sep 2024): a markdown profile injected every turn, updated after each user message by an LLM that emitted reasoning plus a list of original/replacement pairs, applied with `string.replace()`. Patch-based editing, not full regeneration. Cheap, and fragile once the anchor text drifted.

Ama (Apr to May 2025): a switch to structured RFC 6902 JSON Patch against a JSON insights object. A background LLM read the last 6 messages and emitted patch ops. The guiding prompt line I still like: "remember only what a smart attentive person would remember long-term." An empty patch array was a valid no-op, which stopped profile drift.

Orage (2026): back to markdown, but now the model owns it through tools. `update_profile` takes add/update/delete string ops anchored on exact text. The tools are closure-bound to one (bot, user) pair so the model physically cannot touch another user's memory. A "People" section holds third parties so a synastry reading checks the profile before re-asking birth data.

Industry context: ChatGPT's consumer Memory feature began rolling out February 2024 and hit GA September 2024. Mem0 launched January 2024 selling automatic fact extraction. I was doing LLM-authored patch edits to a persistent profile in August 2024, concurrent with ChatGPT Memory's own rollout, and I oscillated between the two industry camps (background extraction versus the model editing its own memory) before the industry settled the debate.

### 4. Agent-first memory as tools

The throughline from Persocoms' string patches to Orage's `update_profile` tool is one idea maturing: let the model manage its own memory.

Persocoms (2024) had the model author profile edits, but I applied them in code behind the scenes. Ama (2025) went the other way: a hidden background job extracted insights. Orage (2026) is fully agent-first: memory is a set of low-level tools the model calls, and short memory skills teach it when to call them, kept separate from the bot's persona.

My favourite bug-driven design decision lives here. A production probe found the model saying "noted" without calling the tool, so the profile stayed empty while a short window faked recall. I turned that into an explicit contract in the tool description: this call is the only thing that persists memory; acknowledging a fact without calling it means the fact is lost. I call it the fake-save guardrail.

Industry context: function calling shipped June 2023, MemGPT framed self-managed memory in October 2023, and Anthropic shipped a first-class memory tool on 2025-09-29. This is the one area where I am aligned with, and slightly trailing, the 2025 state of the art: the concept I had in 2024, the clean tool-based framing I adopted in 2026, right when the whole industry converged on it.

### 5. Affective and temporal state

Memory is not only facts. Two of my most distinctive pieces live here.

Emotion resistance physics (Persocoms, Jul 2024). The companion had mood axes (sadness-joy, platonic-romantic, and character-defined ones). Each message nudged them by -5 to +5, but through a resistance function so it was harder to push a mood away from neutral: `resistance = 1 / (1 + abs(value)/50)`. Persistent relational state, not prompt flavour. I have not seen this as an industry technique. Honest postscript from a 2026 code archaeology session: the shipped code never ran as designed. The state write was dead for most of the product's life (an un-awaited database call), the negative bias was sign-inverted, and truncation pinned values in the neutral band. The idea stands, the implementation did not.

Time awareness (Persocoms, Aug 2024; Ama, May 2025). Persocoms injected "first interaction / continuous / same-day / long gap" context and the user's local time. Ama, if the last user message was over 12 hours old, prepended an instruction to acknowledge the gap and prefixed every message with a date and relative time. Cheap temporal grounding with no summarization. Temporal knowledge graphs (Zep's Graphiti, 2024-09-04) are a heavier, later take on the same need.

### 6. Proactive and scheduled memory

Persocoms (Aug 2024): the companion could schedule a future follow-up with stored context. A cron fired due items and re-entered the agent loop, rather than sending a fixed push notification. Ama (Jun 2025): a follow-up cron built outreach per user from the profile, the recent history, and the astrology state, then sent it over WhatsApp.

Proactive agents only became a real industry theme in 2025. Treating a scheduled event as re-entering the same agent loop, in August 2024, was ahead of the common pattern.

## Me versus the industry, dated

| Technique                                  | My first build           | Industry milestone                              | Verdict                                  |
| ------------------------------------------ | ------------------------ | ----------------------------------------------- | ---------------------------------------- |
| RAG (embed + vector store + retrieve)      | Aug 2024, by hand        | Coined 2020, standard by mid-2023               | On-time, done solo                       |
| Contextual retrieval (dual context vector) | Sep 23 to Oct 1, 2024    | Anthropic post 2024-09-19                       | Fast-follow within ~2 weeks              |
| Reranking                                  | Oct 2024                 | Cohere Rerank v3, 2024                          | On-time                                  |
| Token/char budgeting + window assembly     | Aug 2024 onward          | "Context engineering" named Jun 2025            | ~1 year before the name                  |
| Conversation-boundary history              | Aug 2024                 | No common equivalent                            | Original (later abandoned)               |
| LLM-maintained profile (patch edits)       | Aug to Sep 2024          | ChatGPT Memory GA Sep 2024; Mem0 Jan 2024       | Concurrent, hand-built                   |
| Agentic memory as tools                    | Concept 2024, tools 2026 | MemGPT Oct 2023; Anthropic memory tool Sep 2025 | Aligned with 2025 SOTA                   |
| Proactive memory (loop re-entry)           | Aug 2024                 | Proactive agents a 2025 theme                   | Early                                    |
| Emotion state with resistance physics      | Jul 2024                 | No industry standard                            | Original                                 |
| Buy-vs-build a memory layer                | Always built             | Mem0 raised $24M Oct 28, 2025                   | Hand-built what became a funded category |

## What I would not repeat

- **The build-but-never-wire trap.** In Ama I wrote embeddings and dual vectors, kept a README promising RAG, and never connected retrieval. Ship the query side or do not pay for the embeddings.
- **String-replace profile patches** were fragile once the anchor text drifted. JSON Patch was the right correction, later.
- **Flip-flopping between background extraction and agent-first tools.** The industry landed on agent-first in 2025; I had that instinct in 2024 and detoured through a background extractor in between.
- **Too many half-built features left commented out.** Good for velocity, bad as a record of what actually runs.
- I never built memory consolidation (periodic offline synthesis across many conversations) or time-decay (rewriting stored facts as they go stale). Both still interest me.

The meta-pattern: each product simplified the last. Persocoms was the maximalist RAG system. Ama cut it down to profile-plus-window. Orage cut it further to agent-owned tools and is only now adding vectors back, on purpose. I have been converging, not accreting.

## Closing

I did not invent RAG or summarization or memory. Nobody who shipped in 2024 did. What the record shows is a builder who, working alone and by hand, stayed within days-to-months of the frontier on the known techniques, was measurably early on the practices that only got names in 2025, invented a few things nobody standardised, and hand-built in 2024 the memory layer that became a venture-funded product category in 2025. The strongest signal is not any single technique. It is the two-year arc of deliberately simplifying toward agent-owned memory, arriving where the whole industry converged, having reasoned my way there from scratch.

---

_Sources for industry dates: Lewis et al. arXiv 2005.11401 (2020-05-22); pgvector CHANGELOG (HNSW 2023-08-28); LangChain memory docs (2023); Packer et al. MemGPT arXiv 2310.08560 (2023-10-12); OpenAI function calling (2023-06-13) and ChatGPT Memory (test 2024-02-13, GA 2024-09-05); Anthropic Contextual Retrieval (2024-09-19) and memory tool (2025-09-29); Mem0 launch (2024-01) and $24M raise (2025-10-28); Zep Graphiti (2024-09-04); the context-engineering naming wave (2025-06). My dates are first-appearance dates from git history._
