---
id: retail.seasonal-retail-campaign
name: Seasonal Retail Campaign
version: 1.0.0
status: stable
description: Plan a seasonal/peak retail campaign (e.g. holiday) with a phased calendar, inventory-aware offers, omnichannel execution and post-peak analysis.
category: retail-marketing
sub_category: seasonal
industries: [retail, ecommerce]
business_models: [b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [maximise-peak-sales, protect-margin]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [season-or-event, products, objective, dates]
optional_inputs: [inventory, margins, historical-performance]
outputs: [phased-calendar, offers, channel-plan, measurement]
related_skills: [retail.local-promotion, retail.loyalty-programme, content.editorial-calendar]
resources: [marketing://channels, marketing://metrics]
mcp_prompts: [retail_promotion_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [retail, seasonal, campaign]
---

## Overview

Plans a phased seasonal campaign (pre-season warm-up → peak → last-chance → post-peak retention)
with inventory-aware offers and omnichannel execution, followed by structured analysis.

## Business purpose

Peaks concentrate revenue; disciplined planning protects margin and stock while maximising sales.

## When to use / when not to use

- **Use** to plan for a seasonal peak/event.
- **Do not use** to over-promise stock or erode margin blindly.

## Inputs

### Required
- Season/event, products, objective, dates.

### Optional
- Inventory, margins, historical performance.

## Outputs

- A **phased calendar** with key dates.
- **Offers** (inventory/margin-aware).
- A **channel plan** and **measurement** + post-peak analysis.

## Methodology

1. Map the season into phases with goals per phase.
2. Plan inventory-aware offers and hero products.
3. Build omnichannel plan (paid, email/SMS, social, in-store) with pacing.
4. Prepare contingencies for stockouts/overstock.
5. Define measurement and a post-peak review.

## Decision rules

- Align offers to stock and margin.
- Warm up demand before peak; retain after.
- Plan stockout/overstock contingencies.

## Quality checklist

- [ ] Phased calendar.
- [ ] Inventory/margin-aware offers.
- [ ] Omnichannel pacing + contingencies.

## Compliance checklist

- [ ] Promotion terms transparent.
- [ ] Consent for email/SMS.

## Failure conditions and escalation

- Missing season/products/objective/dates → `insufficient_data`.
- Spend/publishing → requires approval.

## Examples

- **Holiday:** gifting-led phased calendar.
- **Back-to-school:** bundles + local push.
- **End-of-season:** clearance + retention capture.

## KPIs and metrics

Peak revenue, margin, sell-through, ROAS/MER, new-vs-returning.

## Related skills

`retail.local-promotion`, `retail.loyalty-programme`, `content.editorial-calendar`.

## MCP mappings

- Resources: `marketing://channels`, `marketing://metrics`
- Prompts: `retail_promotion_plan`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
