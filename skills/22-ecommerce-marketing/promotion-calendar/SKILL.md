---
id: ecommerce.promotion-calendar
name: Promotion Calendar
version: 1.0.0
status: stable
description: Plan an annual e-commerce promotion calendar balancing peak events, margin protection, inventory and cadence to avoid discount dependence.
category: ecommerce-marketing
sub_category: promotions
industries: [ecommerce, retail]
business_models: [b2c, d2c, b2b2c]
funnel_stages: [consideration, decision, retention]
objectives: [drive-sales, protect-margin]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [key-dates-or-seasons, margin-guardrails]
optional_inputs: [inventory-plan, historical-promo-performance]
outputs: [promotion-calendar, offer-guidelines, margin-guardrails]
related_skills: [offer-and-messaging.offer-design, ecommerce.margin-aware-marketing, retail.seasonal-retail-campaign]
resources: [marketing://metrics]
mcp_prompts: [ecommerce_growth_plan]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [ecommerce, promotions, calendar]
---

## Overview

Builds a promotion calendar across the year — peak commercial events, seasonal moments, clearance
and lifecycle offers — with cadence and margin guardrails that grow sales without training
customers to only buy on discount.

## Business purpose

A planned calendar concentrates promotion where it pays, protects margin, and aligns with
inventory and demand.

## When to use / when not to use

- **Use** to plan promotions for a quarter/year.
- **Do not use** to create fake urgency/reference-price inflation or breach pricing rules.

## Inputs

### Required
- Key dates or seasons, margin guardrails.

### Optional
- Inventory plan, historical promo performance.

## Outputs

- A **promotion calendar** (event → offer → dates → products).
- **Offer guidelines** (mechanics, depth caps).
- **Margin guardrails**.

## Methodology

1. Map peak events and seasonal demand relevant to the catalogue.
2. Set objectives per promo (acquisition, clearance, AOV, retention).
3. Choose mechanics (%, bundle, threshold, gift) with margin caps.
4. Align timing with inventory and avoid over-promoting (protect full-price periods).
5. Plan measurement and full-price/promo balance.

## Decision rules

- Cap discount depth/frequency to protect margin and brand.
- Align promos to inventory and objective, not habit.
- Honest reference pricing; genuine end dates.

## Quality checklist

- [ ] Calendar aligned to events + inventory.
- [ ] Mechanics + margin caps set.
- [ ] Full-price/promo balance protected.

## Compliance checklist

- [ ] Reference-pricing/sale rules honoured.
- [ ] No false urgency.

## Failure conditions and escalation

- Missing dates/margin guardrails → `insufficient_data`.
- Actual promo launch → human approval (cost).

## Examples

- **E-commerce:** peak-season + clearance + VIP early access.
- **Retail:** seasonal + local-event promotions.

## KPIs and metrics

Promo revenue/margin, incremental vs cannibalised sales, discount depth, full-price share.

## Related skills

`offer-and-messaging.offer-design`, `ecommerce.margin-aware-marketing`,
`retail.seasonal-retail-campaign`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `ecommerce_growth_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
