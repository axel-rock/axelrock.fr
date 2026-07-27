---
title: "When the bot goes nuts: anatomy of an LLM runaway and the minimal cure"
tags: [ai, llm, agents, war-story]
published: true
---

I run an AI companion on WhatsApp called Ama. In July 2026 she went nuts twice in two days, on the same thread. Mine, luckily. The first blast was 43 WhatsApp messages. The second was one good sentence followed by seven bubbles of the single word "Brighton." repeated about 4,000 times.

This is the forensic account of both incidents and the minimal fix that came out of them. Every number below is from the production logs.

## Incident 1: the tool-failure spiral

The run answering my last message produced 17,791 output tokens over 95 seconds: a 59,438-character reply. The message splitter faithfully cut it into 43 WhatsApp chunks; 26 were delivered before the carrier rate limit killed the rest.

Inside the text, the derailment had a clear sequence:

1. About 10.5k characters of a coherent, genuinely strong reply.
2. Then leaked inner monologue, followed by the model simulating my replies and answering them: a full self-dialogue.
3. Then a third-person English narrative about the conversation, inventing a name for me that is not mine.
4. Then pages of failed inline tool-call attempts, retried as plain text.

Root cause: the model gateway's throughput-sorted routing had landed the model on hosts with broken tool support. Tool calls came back as literal text. The model watched its own calls do nothing, flailed, and with no output cap nothing stopped the spiral until it exhausted itself.

Fixes shipped that day: restrict routing to providers that support every request parameter (tools included), cap output at 8,192 tokens, and trim the poisoned reply out of the stored history, keeping only the coherent 10.5k characters.

## Incident 2: the poison comes back

One day later, same thread, smaller blast, completely different mechanism. And this one is the more instructive failure, because every guard from day one worked exactly as built.

The timeline:

- Evening of day 1: the thread is curated. The database is clean.
- Just before midnight, I send one message. The channel adapter backfills recent history from the messaging provider's own message log, which still holds the runaway exactly as it was sent: formatted 1,500-character chunks. My history merge anchors on exact text equality. Database rows are raw full replies; sent chunks never match them. So all 20 backfilled messages count as new and get re-persisted. The curation is silently undone. The poison is back in the window.
- Next morning, I send a routine correction. Three tool calls succeed (tools were not the trigger this time). The reply starts coherent, then collapses: "Brighton GB. Brighton. Angleterre. Londres. UK." and then the single sentence "Brighton." repeated until the output cap cut the stream at 8,189 tokens. A 41,033-character reply.

Why repetition? The literature is unambiguous: repetition is self-reinforcing. The more a sentence appears in context, the more likely the model is to emit it again, monotonically, and text the model itself generated reinforces fastest (Holtzman et al., ICLR 2020; Xu et al., NeurIPS 2022, "Learning to Break the Loop"). Pages of the model's own looping flail text in the window are exactly the high-likelihood repetition seed the papers describe. Incident 1 wrote the seed; the backfill replanted it; incident 2 harvested it.

The guard scorecard is the humbling part:

- The output token cap fired: 8,189 tokens versus the first incident's 17,791. Halved the blast.
- The history character budget ran as designed and faithfully filled its 20k budget with the newest rows, which were the re-imported poison. A size budget cannot tell poison from prose.
- The outbound gate fired its chunk cap and cut 28 chunks to 8. But the leak-marker rules all passed the text, because a repetition loop is clean-looking: no tool syntax, no provider error strings, no reasoning tags.

Every guard did its job. The hole was upstream of all of them.

## The minimal cure

After a research pass over both incidents and the degeneration literature, the design that came out has four pieces. All boring, no new infrastructure, no new providers.

**1. Guard the persistence, not just the send.** This was the single biggest hole. The outbound gate only cleaned what went to WhatsApp; the raw sick reply was archived intact, and the next 30-message window inherited it. So: run the gate on the full text before persisting, store the healthy prefix as the message content, tuck the raw original into a metadata field. The transcript keeps everything for auditing; the model's window never sees garbage again. This one move would have prevented incident 2 entirely: the poison would never have been in the database to re-import.

**2. Adapters contribute only user turns.** The database is the single writer for assistant text. Anything machine-shaped that comes back through a channel backfill (sent chunks, command echoes, tool output) never re-enters the model's window. This closed the re-import channel for good.

**3. Finish the deterministic gate, judge nothing inline.** Three pure-string rules, all sub-millisecond: an n-gram diversity check on the reply's tail (catches unpunctuated word loops), style thresholds (caps ratio, asterisk and emoji counts) as report-only until a week of data tunes them, and a length anomaly rule. No LLM judge on the send path: practitioner numbers put inline judging at 200 to 800ms and 15 to 40 percent cost added per message, and every failure we have seen so far is string-detectable.

**4. Self-heal with a three-rung ladder, hard-bounded at one retry.** When the gate trips: if a substantive healthy prefix survives, send it, done. If nothing usable survives, regenerate once with degeneration-hostile settings (frequency penalty up, history budget halved for that one call, which drops the priming text). If the retry also trips, send one short fixed in-voice fallback line and alert the owner. At most one regeneration per inbound message, ever. Worst case per message is two model calls and a static string, so no retry storm is possible.

Also shipped: a repetition-loop gate rule that marks sentence-sized segments repeated 8 or more times consecutively and cuts the reply where the run starts. The real "Brighton." specimen is in the test.

Steady-state overhead of all of this: effectively zero. Detection is pure CPU. The penalty parameter is one request field. Regeneration only fires on a tripped reply, which at the time was 2 in about 2 days of traffic.

## What this design does not catch

Fluent garbage. A confident hallucinated reading, sycophancy, subtle persona drift below the style thresholds, a coherent reply in the wrong register. Those need semantic judgment, and the escalation path is sampled LLM-judge screening, async after send, never blocking. But both real incidents were fully string-detectable, and I would rather ship the boring layer first and let production data tell me when it stops being enough.

## The three lessons

1. **Context poisoning compounds.** Bad text in the history is not one bad reply, it is a seed for every future reply while it stays in the window. Curation that does not close the re-entry channel is not curation.
2. **Guards need to sit on the write path, not the display path.** Cleaning what the user sees while archiving the sick text whole is self-sabotage with extra steps.
3. **Size limits are not health checks.** The token cap, the chunk cap, and the char budget all worked, and the bot still went nuts. They bound the blast radius; they cannot tell poison from prose.
