---
id: retail.local-promotion
name: Local Retail Promotion
version: 1.0.0
status: stable
description: Plan a location-based retail promotion that drives footfall and omnichannel sales with clear offer rules, inventory safeguards and measurement.
category: retail-marketing
sub_category: promotion
industries: [retail, ecommerce]
business_models: [b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [drive-footfall, increase-sales]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [store-or-location, offer, objective, dates]
optional_inputs: [inventory, margins, loyalty-base]
outputs: [audiences, offer-rules, channel-plan, measurement]
related_skills: [retail.seasonal-retail-campaign, retail.loyalty-programme, budgeting.channel-budget-allocation]
resources: [marketing://channels, marketing://metrics]
mcp_prompts: [retail_promotion_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [retail, local, promotion]
---

## Overview

Plans a local/omnichannel promotion — audiences, offer rules, channels (local search/social,
email/SMS, in-store) — with inventory safeguards and clear incremental-sales measurement.

## Business purpose

Local promotions drive footfall and sales but must protect margin and stock.

## When to use / when not to use

- **Use** to plan a store/omnichannel promotion.
- **Do not use** to promote without stock/margin safeguards.

## Inputs

### Required
- Store(s)/location, offer, objective, dates.

### Optional
- Inventory, margins, loyalty base.

## Outputs

- **Audiences** (local radius, loyalty, lapsed).
- **Offer and rules** (eligibility, limits, terms).
- A **channel plan** and **measurement** (incremental sales).

## Methodology

1. Define objective and offer with clear, honest terms.
2. Target local radius + loyalty/lapsed segments (consent-based digital).
3. Coordinate channels: local search/social, email/SMS, in-store, GBP.
4. Add inventory safeguards (stock checks, caps) and margin guardrails.
5. Measure incremental sales, footfall, redemption, margin.

## Decision rules

- Honest offer terms; no misleading claims.
- Ensure stock supports demand; cap if needed.
- Measure incrementality, not just gross sales.

## Quality checklist

- [ ] Offer/terms clear.
- [ ] Channels coordinated.
- [ ] Inventory/margin safeguards.

## Compliance checklist

- [ ] Promotion terms compliant and transparent.
- [ ] Consent for email/SMS.

## Failure conditions and escalation

- Missing store/offer/objective/dates → `insufficient_data`.
- Spend/publishing → requires approval.

## Examples

- **Grand opening:** local reach + intro offer.
- **Clearance:** margin-aware markdown + local ads.
- **BOPIS push:** online offer redeemed in store.

## KPIs and metrics

Footfall, incremental sales, redemption rate, margin, ROAS.

## Related skills

`retail.seasonal-retail-campaign`, `retail.loyalty-programme`,
`budgeting.channel-budget-allocation`.

## MCP mappings

- Resources: `marketing://channels`, `marketing://metrics`
- Prompts: `retail_promotion_plan`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
