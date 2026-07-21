---
id: paid-search.bid-strategy-selection
name: Bid Strategy Selection
version: 1.0.0
status: stable
description: Select the right paid-search bidding strategy (manual, target CPA/ROAS, maximise conversions/value) based on goals, data volume and constraints.
category: paid-search
sub_category: bidding
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [hit-efficiency-targets, scale-conversions]
risk_level: medium
execution_mode: recommendation
human_approval_required: false
estimated_duration: hours
required_inputs: [campaign-goal, conversion-data-volume]
optional_inputs: [target-cpa-or-roas, budget, seasonality]
outputs: [recommended-bid-strategy, rationale, guardrails]
related_skills: [paid-search.campaign-architecture, paid-search.keyword-planning, budgeting.channel-budget-allocation]
resources: [marketing://policies/google-ads/policies]
mcp_prompts: [plan_google_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-search, bidding, strategy]
---

## Overview

Recommends a bidding strategy matched to the campaign objective, available conversion data, and
constraints — balancing control, efficiency and scale — with guardrails and a transition plan.

## Business purpose

The bid strategy governs efficiency and volume; the wrong choice wastes budget or caps growth.

## When to use / when not to use

- **Use** to choose/change bidding at launch or optimisation.
- **Do not use** smart bidding without adequate, accurate conversion tracking; live changes need
  human approval.

## Inputs

### Required
- Campaign goal, conversion data volume.

### Optional
- Target CPA/ROAS, budget, seasonality.

## Outputs

- A **recommended bid strategy** with rationale.
- **Guardrails** (targets, ramp, learning period).
- A **transition plan** from current bidding.

## Methodology

1. Clarify the objective (conversions, value/ROAS, traffic, awareness).
2. Assess conversion volume and tracking accuracy (smart bidding needs data).
3. Match strategy: manual/eCPC for control or thin data; tCPA/tROAS/maximise for volume+data.
4. Set targets from historical performance; define learning-period expectations.
5. Plan monitoring and safe transition (avoid frequent target swings).

## Decision rules

- Smart bidding requires reliable conversion tracking + sufficient volume.
- Set targets from evidence, not aspiration.
- Allow learning periods; avoid over-adjusting.

## Quality checklist

- [ ] Strategy matches goal + data.
- [ ] Targets evidence-based.
- [ ] Guardrails/monitoring defined.

## Compliance checklist

- [ ] Conversion data lawfully collected (consent).
- [ ] Platform policies respected.

## Failure conditions and escalation

- Missing goal/conversion data → `insufficient_data`.
- Live bidding changes → human approval.

## Examples

- **SaaS:** tCPA once lead volume is sufficient.
- **E-commerce:** tROAS with value tracking.
- **Real estate:** maximise conversions for lead volume.
- **Retail:** tROAS/store-visit-aware bidding.

## KPIs and metrics

CPA/ROAS vs target, conversion volume, impression share, volatility.

## Related skills

`paid-search.campaign-architecture`, `paid-search.keyword-planning`,
`budgeting.channel-budget-allocation`.

## MCP mappings

- Resources: `marketing://policies/google-ads/policies`
- Prompts: `plan_google_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
