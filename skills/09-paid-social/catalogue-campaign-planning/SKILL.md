---
id: paid-social.catalogue-campaign-planning
name: Catalogue (Dynamic) Campaign Planning
version: 1.0.0
status: stable
description: Plan catalogue/dynamic product ad campaigns with feed readiness, dynamic retargeting and prospecting.
category: paid-social
sub_category: commerce
industries: [ecommerce, retail]
business_models: [b2c, d2c]
funnel_stages: [consideration, decision]
channels: [paid-social]
objectives: [efficient-product-sales]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [product-catalogue, pixel-status, objective]
optional_inputs: [margin-data, inventory-status]
outputs: [catalogue-campaign-plan, feed-checklist, audience-plan]
related_skills: [ecommerce.product-feed-optimisation, paid-social.social-campaign-architecture, ecommerce.margin-aware-marketing]
resources: [marketing://policies/meta-ads/policies]
mcp_prompts: [plan_meta_ads, ecommerce_growth_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-social, catalogue, dynamic-ads, ecommerce]
---

## Overview

Plans dynamic product ad campaigns (prospecting + retargeting) that require a healthy product
feed and event tracking.

## Business purpose

Dynamic ads scale product-level relevance efficiently for commerce.

## When to use / when not to use

- **Use** for e-commerce/retail catalogue advertising.
- **Do not use** without a validated feed and event tracking.

## Inputs

### Required
- Product catalogue, pixel/event status, objective.

### Optional
- Margin data, inventory status.

## Outputs

- A **catalogue campaign plan** (dynamic retargeting + broad prospecting).
- A **feed checklist** (required fields, quality).
- An **audience plan** (viewers/add-to-cart/purchasers, exclusions).

## Methodology

1. Verify feed quality (IDs, titles, images, price, availability) and event coverage
   (view/add-to-cart/purchase).
2. Plan dynamic retargeting by funnel depth (viewed, carted, not purchased).
3. Plan broad/lookalike prospecting with dynamic creative.
4. Add inventory/margin safeguards (pause out-of-stock, protect low-margin).
5. Define measurement (ROAS, new-customer ROAS, contribution margin).

## Decision rules

- Do not launch dynamic ads with a broken/incomplete feed.
- Exclude recent purchasers from prospecting.
- Respect inventory and margin constraints.

## Quality checklist

- [ ] Feed validated; events firing.
- [ ] Retargeting tiers defined.
- [ ] Inventory/margin safeguards.
- [ ] Measurement includes new-customer/margin views.

## Compliance checklist

- [ ] Product claims/prices accurate.
- [ ] Consent for tracking/retargeting.
- [ ] Policy compliance for restricted products.

## Failure conditions and escalation

- Missing/invalid feed or events → `insufficient_data`.
- Launch → requires approval.

## Examples

- **E-commerce:** dynamic retargeting of cart abandoners + broad prospecting.
- **Retail:** local inventory ads where supported.

## KPIs and metrics

ROAS, new-customer ROAS, contribution margin, feed health, return rate.

## Related skills

`ecommerce.product-feed-optimisation`, `paid-social.social-campaign-architecture`,
`ecommerce.margin-aware-marketing`.

## MCP mappings

- Resources: `marketing://policies/meta-ads/policies`
- Prompts: `plan_meta_ads`, `ecommerce_growth_plan`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
