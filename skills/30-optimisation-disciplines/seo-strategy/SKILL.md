---
id: optimisation.seo-strategy
name: SEO Strategy (Search Engine Optimisation)
version: 1.0.0
status: stable
description: Define an end-to-end organic-search optimisation strategy - technical, on-page, content and off-page - that ties the tactical SEO skills into one prioritised roadmap.
category: optimisation-disciplines
sub_category: seo
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [grow-organic-traffic, improve-rankings, grow-qualified-pipeline]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [website, business-goals, target-audience]
optional_inputs: [current-rankings, analytics, competitors]
outputs: [seo-strategy, prioritised-roadmap, kpi-targets]
related_skills: [seo.seo-audit, seo.keyword-prioritisation, seo.topic-cluster-planning, optimisation.geo-generative-engine-optimisation]
resources: [marketing://skills/catalogue, marketing://channels/catalogue]
mcp_prompts: [create_seo_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, organic-search, strategy, optimisation]
---

## Overview

Sets the overarching **SEO strategy** — how organic search will drive qualified traffic and revenue —
and sequences the tactical SEO skills (audits, keyword work, content, internal linking, structured
data) into a prioritised roadmap aligned to business goals. This is the umbrella that connects the
detailed `seo.*` skills.

## Business purpose

Organic search is a compounding, low-marginal-cost channel. A coherent strategy prevents scattered
tactics and focuses effort on the pages and topics that move revenue.

## When to use / when not to use

- **Use** to set or reset organic-search direction, or before a large content/site investment.
- **Do not use** for a single-page fix (use the specific `seo.*` tactical skill).

## Inputs

### Required
- Website, business goals, target audience.

### Optional
- Current rankings, analytics, competitors.

## Outputs

- An **SEO strategy** (pillars, target topics, technical priorities).
- A **prioritised roadmap** (impact × effort).
- **KPI targets** (traffic, rankings, conversions, revenue).

## Methodology

1. **Foundations:** run/collect `seo.technical-seo-audit` + `seo.crawlability-assessment` to ensure
   the site can be crawled and indexed.
2. **Demand & intent:** use `seo.keyword-discovery` → `seo.search-intent-analysis` →
   `seo.keyword-prioritisation` to map the opportunity.
3. **Content architecture:** design `seo.topic-cluster-planning` + `seo.internal-linking-plan`.
4. **On-page & structured data:** apply `seo.on-page-seo-audit` and `seo.structured-data-planning`.
5. **Authority & measurement:** plan off-page/authority building, set KPIs, and sequence into a
   quarter-by-quarter roadmap (impact × effort). Coordinate with GEO/AIO for AI-surface visibility.

## Decision rules

- Fix crawl/index blockers before investing in content.
- Prioritise clusters that match commercial intent and business goals.
- Balance quick wins (existing page optimisation) with compounding bets (new clusters).

## Quality checklist

- [ ] Technical foundation assessed first.
- [ ] Priorities tied to business goals + intent.
- [ ] Roadmap sequenced by impact × effort.

## Compliance checklist

- [ ] No manipulative/black-hat tactics (cloaking, link schemes).
- [ ] Accessibility + honest metadata.

## Failure conditions and escalation

- Missing website/goals/audience → `insufficient_data`.
- Systemic technical debt → escalate to engineering.

## Examples

- **SaaS:** bottom-funnel comparison + use-case clusters.
- **E-commerce:** category/PLP + buying-guide clusters.
- **Real estate:** location + intent clusters.
- **Retail:** local + seasonal search.

## KPIs and metrics

Organic sessions, non-brand rankings, indexed/quality pages, organic conversions and revenue.

## Related skills

`seo.seo-audit`, `seo.keyword-prioritisation`, `seo.topic-cluster-planning`,
`optimisation.geo-generative-engine-optimisation`.

## MCP mappings

- Resources: `marketing://skills/catalogue`, `marketing://channels/catalogue`
- Prompts: `create_seo_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
