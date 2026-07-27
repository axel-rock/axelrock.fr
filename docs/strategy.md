# Personal brand strategy, axelrock.fr

Context doc for agent sessions in this repo. Read this before doing SEO, content, or copy work.

## Positioning

Axel Rock, CTO of Cobl (cobl.ai), based in Nantes. AI practitioner, not commentator: builds AI agents, LLM evals, autonomous RFP generation, and AI memory systems in production. Teaches "IA Stratégie et Pratique" in the ECV Nantes master's program. Previously creative developer at Bannerboy (animated ads for Airbnb, Spotify, Google, Netflix, Amazon).

## Canonical domain

axelrock.fr is canonical. axelrock.com and rock.bzh must 301 to it (DNS/Vercel work pending, Axel's task). www.axelrock.fr currently serves 200 and must also redirect. All meta tags, sitemap, RSS, and JSON-LD in this repo point to https://axelrock.fr.

## Two-language content split

- FR track: own "expert IA Nantes" and adjacent local queries. Teaching at ECV, local ecosystem, practical AI for French businesses.
- EN track: own the "autonomous RFP generation" category (Cobl's space) and build investor-facing visibility. Deep technical posts on agents, evals, memory.

Posts are standalone per language, not translated pairs. UI chrome is translated via wuchale (.po files in src/locales).

## Content pipeline

1. Axel records voice notes.
2. Agent cleans them into drafts in Axel's voice (plain, direct, first person, no corporate filler).
3. Axel approves every draft, nothing publishes without his sign-off.
4. Publish on axelrock.fr first (canonical), then repost as a LinkedIn article linking back.

## Flagship draft topics

Five identified from orage/docs/notes:

1. Memory retrospective (memory-retrospective.md): what building an AI memory system taught us.
2. Drift war story (drift-research.md): how a production persona drifted and how we caught it.
3. Model bakeoff (persona-eval.md, persona-eval-moonshotai-kimi-k3.md): comparing models on a real persona workload.
4. Memory selection, theory plus eval (memory-selection-study.md, memory-capture-eval.md): choosing what an agent remembers.
5. Conversation-health forensics (conversation-health.md): measuring whether chats are going well.

## Key GEO facts (why we do what we do)

Baseline keyword, SERP, backlink, and on-page numbers live in [docs/seo-audit-2026-07.md](./seo-audit-2026-07.md) (DataForSEO audit, July 26, 2026).

- LinkedIn articles are among the top-cited sources by AI assistants for B2B topics: publish there second, but always with a canonical link home.
- Web mentions correlate with AI citations about 3x more than backlinks: prioritize being quoted and named over link building.
- Content with stats and quotable passages lifts AI citation likelihood by roughly 40%: every post should contain at least one concrete number or quotable claim.
- llms.txt: deliberately skipped, low observed value.
- robots.txt explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Bingbot.

## What needs Axel (manual, outside this repo)

- [ ] Vercel/DNS: 301 redirects from axelrock.com, rock.bzh, and www.axelrock.fr to https://axelrock.fr
- [ ] Bing Webmaster Tools: verify site, submit sitemap
- [ ] Google Search Console: verify site, submit sitemap
- [ ] DataForSEO account (optional, unlocks live data in the .cursor/skills/seo-\* skills)
