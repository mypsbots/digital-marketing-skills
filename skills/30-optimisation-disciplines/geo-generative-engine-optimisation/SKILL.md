---
id: optimisation.geo-generative-engine-optimisation
name: GEO (Generative Engine Optimisation)
version: 1.0.0
status: stable
description: Structure and format content so generative search engines (Google AI Overviews, Perplexity, ChatGPT Search, Bing Copilot) extract, synthesise and cite it in AI-generated answers.
category: optimisation-disciplines
sub_category: geo
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [earn-ai-citations, grow-ai-visibility]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [target-questions, content-or-topic, website]
optional_inputs: [competitors, current-citations]
outputs: [geo-content-plan, formatting-guidance, citation-targets]
related_skills: [optimisation.aio-ai-optimisation, seo.structured-data-planning, content-production.blog-post-writing]
resources: [marketing://skills/catalogue]
mcp_prompts: [create_seo_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [geo, generative-search, ai-overviews, citations, optimisation]
---

## Overview

**Generative Engine Optimisation (GEO)** structures and formats content so generative search engines
— Google AI Overviews, Perplexity, ChatGPT Search, Bing Copilot — can extract, synthesise and
**cite** it. Where classic SEO targets ranked links, GEO targets being the *source the AI quotes*.

> **Note:** GEO and AIO overlap: AIO is the broader "be present and accurate across AI assistants"
> discipline; GEO is the content-craft of being citation-worthy in generated answers.

## Business purpose

As AI Overviews and answer engines absorb informational queries, citation inside the generated answer
becomes the new "position one". GEO protects visibility as click-through from summaries declines.

## When to use / when not to use

- **Use** for informational/comparison content that AI answers are likely to summarise.
- **Do not use** to keyword-stuff or fabricate statistics/quotes to bait citations.

## Inputs

### Required
- Target questions, content or topic, website.

### Optional
- Competitors, current citations.

## Outputs

- A **GEO content plan** (question-led topics + angles likely to be cited).
- **Formatting guidance** (structure, extractability, evidence).
- **Citation targets** (which answers/engines to earn).

## Methodology

1. **Map answerable questions:** cluster the real questions users ask AI engines for the topic.
2. **Answer-first structure:** lead with a direct, concise answer; use clear headings, short
   self-contained passages, lists, tables, and Q&A the model can lift cleanly.
3. **Evidence & citeability:** add specific data, sources, dates, expert quotes and original
   research — generative engines favour concrete, attributable content.
4. **Authority signals:** author expertise, citations, structured data (`seo.structured-data-planning`).
5. **Measure:** track appearance/citation in AI Overviews and answer engines; iterate on gaps.

## Decision rules

- Put the answer first; make passages extractable and self-contained.
- Back claims with specific, verifiable evidence and dates.
- Favour original data/statistics — these get cited disproportionately.

## Quality checklist

- [ ] Answer-first, extractable structure.
- [ ] Concrete evidence + attribution.
- [ ] Authority/structured-data signals.

## Compliance checklist

- [ ] No fabricated data/quotes.
- [ ] Claims substantiated and dated.

## Failure conditions and escalation

- Missing questions/topic/website → `insufficient_data`.
- Unverifiable claims → block until substantiated.

## Examples

- **SaaS:** "best X for Y" comparison content with data tables.
- **E-commerce:** buying-guide answers with specs.
- **Real estate:** market-stat answers with dated sources.
- **Retail:** how-to / "how to choose" answers with steps.

## KPIs and metrics

AI-Overview/answer-engine citation frequency, share of cited sources vs competitors, AI-referral
traffic, assisted conversions.

## Related skills

`optimisation.aio-ai-optimisation`, `seo.structured-data-planning`,
`content-production.blog-post-writing`.

## MCP mappings

- Resources: `marketing://skills/catalogue`
- Prompts: `create_seo_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
