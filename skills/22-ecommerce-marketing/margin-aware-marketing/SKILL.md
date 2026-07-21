---
id: ecommerce.margin-aware-marketing
name: Margin-Aware Marketing
version: 1.0.0
status: stable
description: Optimise e-commerce marketing on profit not just revenue — using margin, returns and contribution to set targets, bids and product priorities.
category: ecommerce-marketing
sub_category: profitability
industries: [ecommerce, retail]
business_models: [b2c, d2c, b2b2c]
funnel_stages: [consideration, decision, retention]
objectives: [maximise-profit, protect-margin]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [product-margins-or-costs, marketing-costs]
optional_inputs: [return-rates, shipping-costs, ltv-data]
outputs: [contribution-analysis, margin-aware-targets, product-priorities]
related_skills: [ecommerce.product-feed-optimisation, ecommerce.repeat-purchase, budgeting.channel-budget-allocation]
resources: [marketing://metrics]
mcp_prompts: [ecommerce_growth_plan]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [ecommerce, margin, profitability]
---

## Overview

Shifts optimisation from revenue/ROAS to contribution profit — factoring product margin, returns,
shipping and discounts — to set profit-aware targets, prioritise products, and guide bidding and
promotions.

## Business purpose

Revenue-maximising marketing can lose money; margin-aware marketing protects and grows profit.

## When to use / when not to use

- **Use** to make marketing decisions profitable, not just top-line.
- **Do not use** without reliable cost/margin data (state assumptions if estimating).

## Inputs

### Required
- Product margins or costs, marketing costs.

### Optional
- Return rates, shipping costs, LTV data.

## Outputs

- A **contribution analysis** (per product/category after costs/returns).
- **Margin-aware targets** (break-even ROAS/CPA by margin).
- **Product priorities** for promotion.

## Methodology

1. Compute contribution margin per product/category (COGS, returns, shipping, fees).
2. Derive break-even ROAS/CPA per margin band.
3. Reallocate emphasis toward high-contribution products; cap loss-leaders.
4. Adjust bids/budgets and promo depth against margin, not revenue.
5. Incorporate LTV where repeat purchase justifies higher first-order CAC.

## Decision rules

- Optimise to contribution, not revenue/ROAS alone.
- Set break-even targets from real margins.
- Use LTV to justify acquisition spend only with evidence.

## Quality checklist

- [ ] Contribution computed after returns/shipping.
- [ ] Margin-based targets set.
- [ ] Product priorities defined.

## Compliance checklist

- [ ] Cost/margin data handled confidentially.
- [ ] Promotions comply with pricing rules.

## Failure conditions and escalation

- Missing margin/cost data → `insufficient_data`.
- Live bid/budget changes → human approval.

## Examples

- **E-commerce:** shift spend to high-margin SKUs; cap discount depth.
- **Retail:** promote high-contribution lines; control loss-leaders.

## KPIs and metrics

Contribution margin, break-even ROAS, blended profit, return rate.

## Related skills

`ecommerce.product-feed-optimisation`, `ecommerce.repeat-purchase`,
`budgeting.channel-budget-allocation`.

## MCP mappings

- Resources: `marketing://metrics`
- Prompts: `ecommerce_growth_plan`
- Tools: `marketing_get_skill`, `marketing_calculate_metric`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
