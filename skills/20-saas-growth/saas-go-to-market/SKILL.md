---
id: saas.saas-go-to-market
name: SaaS Go-To-Market
version: 1.0.0
status: stable
description: Design a SaaS GTM across acquisition, activation, retention and expansion, aligned to the motion (PLG/SLG) and sound unit economics.
category: saas-growth
sub_category: gtm
industries: [saas]
business_models: [b2b, b2c, b2b2c]
funnel_stages: [awareness, consideration, decision, retention, advocacy]
objectives: [acquire, activate, retain, expand]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [product, icp, motion, current-metrics]
optional_inputs: [pricing, funnel-data]
outputs: [north-star, aarrr-plan, experiments, roadmap]
related_skills: [plg.activation-metric-definition, saas.expansion-revenue, strategy.go-to-market-strategy]
resources: [marketing://metrics, marketing://industries]
mcp_prompts: [saas_growth_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [saas, gtm, growth]
---

## Overview

Builds a SaaS growth plan tied to a north-star metric and the AARRR funnel, matched to the motion
(product-led vs sales-led vs hybrid) and grounded in unit economics (CAC, payback, LTV:CAC, NRR).

## Business purpose

SaaS value compounds through retention and expansion, not just acquisition; GTM must reflect that.

## When to use / when not to use

- **Use** to plan/refresh SaaS growth.
- **Do not use** to promise growth rates or ignore unit economics.

## Inputs

### Required
- Product, ICP, motion (PLG/SLG), current metrics.

### Optional
- Pricing, funnel data.

## Outputs

- A **north-star metric** and **AARRR plan**.
- Prioritised **experiments**.
- A **measurement** approach and **roadmap**.

## Methodology

1. Choose motion (PLG/SLG/hybrid) from ACV, complexity, buyer.
2. Define north-star and activation metric.
3. Plan each AARRR stage with owners and metrics.
4. Prioritise experiments by ICE/impact.
5. Ground in unit economics; set guardrails (CAC payback, NRR).

## Decision rules

- Motion must fit ACV/buyer/complexity.
- Retention/expansion first when churn is high.
- Respect unit-economics guardrails.

## Quality checklist

- [ ] Motion justified.
- [ ] AARRR plan with metrics.
- [ ] Unit economics guardrails.

## Compliance checklist

- [ ] Outreach respects consent/region.
- [ ] No guaranteed-growth claims.

## Failure conditions and escalation

- Missing product/ICP/motion/metrics → `insufficient_data`.

## Examples

- **PLG:** free trial → activation → self-serve upgrade → expansion.
- **SLG:** MQL→SQL pipeline with sales-assist.
- **Hybrid:** PLG bottom-up + sales for enterprise.

## KPIs and metrics

North-star, activation, CAC, payback, NRR, LTV:CAC.

## Related skills

`plg.activation-metric-definition`, `saas.expansion-revenue`,
`strategy.go-to-market-strategy`.

## MCP mappings

- Resources: `marketing://metrics`, `marketing://industries`
- Prompts: `saas_growth_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
