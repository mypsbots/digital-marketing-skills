---
id: strategy.pricing-strategy
name: Pricing Strategy
version: 1.0.0
status: stable
description: Design a value-based pricing and packaging strategy (model, tiers, price metric and promotions) aligned to willingness-to-pay, positioning and margin.
category: marketing-strategy
sub_category: pricing
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision, retention]
objectives: [maximise-value-capture, protect-margin]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [offer, costs-or-margin, target-segment]
optional_inputs: [willingness-to-pay, competitor-pricing, current-pricing]
outputs: [pricing-model, packaging-tiers, price-metric, promotion-guidelines]
related_skills: [offer-and-messaging.offer-design, strategy.positioning-strategy, saas.expansion-revenue]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [pricing, packaging, strategy]
---

## Overview

Designs how the offer is priced and packaged — model (subscription/usage/one-off), the price
metric (what scales), tiers, and promotion guardrails — anchored to customer value, positioning
and margin rather than cost-plus guesswork.

## Business purpose

Pricing is the strongest profit lever; value-based pricing and clear packaging lift conversion,
expansion and margin without eroding brand.

## When to use / when not to use

- **Use** to set or revise pricing/packaging and promotion policy.
- **Do not use** to justify deceptive pricing, drip pricing or unfair comparisons; final pricing
  decisions should involve finance/leadership sign-off.

## Inputs

### Required
- Offer, costs or margin, target segment.

### Optional
- Willingness-to-pay, competitor pricing, current pricing.

## Outputs

- A **pricing model** and **price metric** (the unit that scales with value).
- **Packaging tiers** (good/better/best or usage).
- **Promotion guidelines** (depth/frequency guardrails).

## Methodology

1. Establish value drivers and (where possible) willingness-to-pay by segment.
2. Choose a price metric that scales with realised customer value.
3. Design tiers/packaging aligned to segments and upgrade paths.
4. Set price levels consistent with positioning and margin targets.
5. Define promotion guardrails to protect margin and avoid discount dependence.

## Decision rules

- Price to value, not cost-plus, where evidence allows.
- Transparent, honest pricing; surface all fees.
- Protect margin; cap promotional depth/frequency.

## Quality checklist

- [ ] Price metric tied to value.
- [ ] Tiers/upgrade paths coherent.
- [ ] Promotion guardrails set.

## Compliance checklist

- [ ] No deceptive/drip pricing; fees disclosed.
- [ ] Comparative price claims substantiated.
- [ ] Finance/leadership sign-off noted for final prices.

## Failure conditions and escalation

- Missing offer/margin/segment → `insufficient_data`.
- Regulated pricing/claims → legal/finance review.

## Examples

- **SaaS:** seat + usage hybrid with good/better/best tiers.
- **E-commerce:** value-based bundles; margin-safe promo calendar.
- **Real estate:** transparent fee structure vs commission norms.
- **Retail:** member pricing + controlled promotional depth.

## KPIs and metrics

Conversion by tier, ARPU/AOV, margin, discount depth, expansion/NRR.

## Related skills

`offer-and-messaging.offer-design`, `strategy.positioning-strategy`,
`saas.expansion-revenue`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
