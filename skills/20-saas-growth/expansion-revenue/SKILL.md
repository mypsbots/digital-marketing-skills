---
id: saas.expansion-revenue
name: Expansion Revenue
version: 1.0.0
status: stable
description: Design expansion-revenue motions (upsell, cross-sell, seat and usage growth) that lift net revenue retention without harming customer value.
category: saas-growth
sub_category: retention-expansion
industries: [saas]
business_models: [b2b, b2c, b2b2c]
funnel_stages: [retention, advocacy]
objectives: [expand-revenue, improve-nrr]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [product, pricing-model, customer-segments]
optional_inputs: [usage-data, nrr, expansion-history]
outputs: [expansion-plays, triggers, measurement]
related_skills: [saas.saas-go-to-market, crm.lifecycle-stage-design, analytics.kpi-framework]
resources: [marketing://metrics]
mcp_prompts: [saas_growth_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [saas, expansion, nrr]
---

## Overview

Defines value-aligned expansion plays (upsell tiers, cross-sell, seats, usage) triggered by
customer success signals, to grow NRR while genuinely serving the customer.

## Business purpose

Expansion is the most efficient SaaS growth lever; NRR compounds enterprise value.

## When to use / when not to use

- **Use** to design expansion motions.
- **Do not use** to push upsells that don't fit customer need.

## Inputs

### Required
- Product, pricing model, customer segments.

### Optional
- Usage data, NRR, expansion history.

## Outputs

- **Expansion plays** (upsell/cross-sell/seat/usage).
- **Triggers** (usage thresholds, milestones).
- **Measurement** (NRR, expansion MRR).

## Methodology

1. Map value milestones and natural expansion points.
2. Define plays per segment aligned to realised value.
3. Set behavioural triggers (usage limits, success events).
4. Coordinate with CS; avoid pressure that harms retention.
5. Measure NRR, expansion MRR, and downgrade/churn guardrails.

## Decision rules

- Expansion must follow delivered value.
- Guardrail on churn/satisfaction.
- Trigger on genuine signals, not arbitrary timing.

## Quality checklist

- [ ] Plays tied to value.
- [ ] Triggers defined.
- [ ] NRR/guardrails measured.

## Compliance checklist

- [ ] Transparent pricing/terms.
- [ ] Contact respects consent.

## Failure conditions and escalation

- Missing product/pricing/segments → `insufficient_data`.

## Examples

- **B2B SaaS:** seat expansion on team growth.
- **Usage-based:** tier upgrade at usage thresholds.
- **Platform:** cross-sell adjacent modules.

## KPIs and metrics

NRR, expansion MRR, upsell rate, downgrade rate.

## Related skills

`saas.saas-go-to-market`, `crm.lifecycle-stage-design`, `analytics.kpi-framework`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `saas_growth_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
