---
id: content.content-strategy
name: Content Strategy
version: 1.0.0
status: stable
description: Define a content strategy with pillars, formats, funnel coverage, distribution and measurement tied to business objectives.
category: content-marketing
sub_category: strategy
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [build-demand, support-conversion]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: 1-2 weeks
required_inputs: [audience, business-objective, topic-area]
optional_inputs: [existing-content, keyword-data, brand-voice]
outputs: [content-strategy, pillars, distribution-plan, measurement]
related_skills: [content.content-pillar-development, seo.topic-cluster-planning, content.editorial-calendar, content.content-distribution-plan]
resources: []
mcp_prompts: [create_content_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [content, strategy, pillars]
---

## Overview

A strategy that decides what content to create, for whom, why, where to distribute it, and how
to measure it — anchored to objectives, not output volume.

## Business purpose

Content compounds when strategic; without a strategy it becomes expensive noise.

## When to use / when not to use

- **Use** to set content direction and priorities.
- **Do not use** as a substitute for a channel or SEO plan (integrates with them).

## Inputs

### Required
- Audience, business objective, topic area.

### Optional
- Existing content, keyword data, brand voice.

## Outputs

- A **content strategy** (goals, audience, pillars, formats, funnel coverage).
- **Pillars** and priority topics.
- A **distribution plan** and **measurement** approach.

## Methodology

1. Tie content goals to the marketing objective and funnel stages.
2. Define 3–5 pillars from audience jobs/pains and business relevance.
3. Map formats to stages (awareness vs decision content).
4. Audit existing content: keep/update/consolidate/retire.
5. Plan distribution (owned/earned/paid) — creation is 20%, distribution 80%.
6. Define measurement: leading (engagement) and lagging (pipeline/revenue) metrics.

## Decision rules

- Prioritise topics with audience demand and business relevance, not just search volume.
- Fund distribution, not only creation.
- Fewer, better assets beat high-volume thin content.

## Quality checklist

- [ ] Pillars tied to audience and objectives.
- [ ] Funnel coverage balanced.
- [ ] Distribution plan explicit.
- [ ] Measurement includes business outcomes.

## Compliance checklist

- [ ] Sources cited; claims fact-checked.
- [ ] Accessibility and inclusive language considered.
- [ ] AI-assisted content flagged for human review.

## Failure conditions and escalation

- Missing audience/objective → `insufficient_data`.

## Examples

- **SaaS:** pillars around the core job; comparison/alternative pages for decision stage.
- **E-commerce:** buying guides, UGC, and category education.
- **Real estate:** area guides, process explainers, market updates.
- **Retail:** local, seasonal and product-education content.

## KPIs and metrics

Engaged sessions, assisted conversions, pipeline/revenue influenced, organic growth.

## Related skills

`content.content-pillar-development`, `seo.topic-cluster-planning`,
`content.editorial-calendar`, `content.content-distribution-plan`.

## MCP mappings

- Prompts: `create_content_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
