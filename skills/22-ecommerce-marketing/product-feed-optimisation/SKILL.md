---
id: ecommerce.product-feed-optimisation
name: Product Feed Optimisation
version: 1.0.0
status: stable
description: Optimise product data feeds (titles, attributes, images, categories, availability) for shopping/catalogue ads to improve relevance, coverage and performance.
category: ecommerce-marketing
sub_category: feeds
industries: [ecommerce, retail]
business_models: [b2c, d2c, b2b2c]
funnel_stages: [consideration, decision]
objectives: [improve-shopping-performance, increase-coverage]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [product-feed-or-catalogue]
optional_inputs: [performance-data, category-taxonomy, competitor-listings]
outputs: [feed-optimisation-plan, title-attribute-rules, quality-fixes]
related_skills: [paid-social.catalogue-campaign-planning, ecommerce.margin-aware-marketing, ecommerce.conversion-rate-improvement]
resources: []
mcp_prompts: [ecommerce_growth_plan]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [ecommerce, product-feed, shopping]
---

## Overview

Improves the product feed that powers shopping and catalogue ads — titles, key attributes, images,
categories, GTINs and availability — to raise match relevance, disapproval-free coverage and
performance.

## Business purpose

Shopping/catalogue performance is largely determined by feed quality; better feeds win more
relevant, cheaper impressions.

## When to use / when not to use

- **Use** to audit/improve a product feed for shopping ads.
- **Do not use** to misrepresent price, availability or product attributes.

## Inputs

### Required
- Product feed or catalogue.

### Optional
- Performance data, category taxonomy, competitor listings.

## Outputs

- A **feed optimisation plan**.
- **Title/attribute rules** (front-load key terms; complete attributes).
- **Quality fixes** (disapprovals, missing GTIN, image issues).

## Methodology

1. Audit completeness/accuracy of required + recommended attributes.
2. Optimise titles: front-load brand/type/key attributes searchers use.
3. Ensure correct categories, GTINs, and high-quality images.
4. Fix disapprovals and policy issues; keep price/availability accurate/synced.
5. Prioritise fixes by impact (top sellers, high-impression SKUs).

## Decision rules

- Accuracy first: price/availability/attributes must match the site.
- Front-load high-value terms in titles.
- Fix highest-impact SKUs first.

## Quality checklist

- [ ] Required attributes complete.
- [ ] Titles/images optimised.
- [ ] Disapprovals/policy issues fixed.

## Compliance checklist

- [ ] Accurate price/availability/claims.
- [ ] Platform feed policies respected.

## Failure conditions and escalation

- No feed/catalogue → `insufficient_data`.

## Examples

- **E-commerce:** front-load "Men's waterproof running shoes — [brand]".
- **Retail:** local availability + accurate stock sync.

## KPIs and metrics

Feed coverage/approval rate, impression share, shopping CTR/ROAS.

## Related skills

`paid-social.catalogue-campaign-planning`, `ecommerce.margin-aware-marketing`,
`ecommerce.conversion-rate-improvement`.

## MCP mappings

- Prompts: `ecommerce_growth_plan`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
