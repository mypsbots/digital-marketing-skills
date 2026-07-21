---
id: content.content-pillar-development
name: Content Pillar Development
version: 1.0.0
status: stable
description: Define content pillars that connect audience needs, business relevance and topical authority.
category: content-marketing
sub_category: pillars
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [build-authority, organise-content]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [audience, business-focus]
optional_inputs: [keyword-data, existing-content]
outputs: [pillars, sub-topics, authority-map]
related_skills: [content.content-strategy, seo.topic-cluster-planning, content.editorial-calendar]
resources: []
mcp_prompts: [create_content_strategy, seo_content_cluster]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [pillars, content, authority]
---

## Overview

Establishes the few core themes the brand will own, each expandable into clusters, to build
topical authority and coherent messaging.

## Business purpose

Pillars focus effort and compound authority instead of scattering across unrelated topics.

## When to use / when not to use

- **Use** when structuring a content programme.
- **Do not use** to chase unrelated trending topics.

## Inputs

### Required
- Audience, business focus.

### Optional
- Keyword data, existing content.

## Outputs

- 3–5 **pillars** with definitions.
- **Sub-topics** per pillar.
- An **authority map** (current strength vs target).

## Methodology

1. Derive candidate pillars from audience jobs/pains and commercial relevance.
2. Validate demand and competition (directionally) per pillar.
3. Select 3–5 that the brand can credibly own.
4. Break each into sub-topics/clusters.
5. Map current authority and gaps to sequence work.

## Decision rules

- A pillar must be both valued by the audience and commercially relevant.
- Prefer depth in few pillars over breadth across many.

## Quality checklist

- [ ] Pillars audience- and business-relevant.
- [ ] Sub-topics defined.
- [ ] Authority gaps identified.

## Compliance checklist

- [ ] Topics avoid making unsupported claims.
- [ ] Sensitive/regulated topics flagged.

## Failure conditions and escalation

- Missing audience/focus → `insufficient_data`.

## Examples

- **SaaS:** pillar = the core workflow the product improves.
- **E-commerce:** pillar = category expertise + use-cases.
- **Real estate:** pillar = local area authority.
- **Retail:** pillar = seasonal/occasion guidance.

## KPIs and metrics

Topical coverage, organic visibility per pillar, engagement, assisted conversions.

## Related skills

`content.content-strategy`, `seo.topic-cluster-planning`, `content.editorial-calendar`.

## MCP mappings

- Prompts: `create_content_strategy`, `seo_content_cluster`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
