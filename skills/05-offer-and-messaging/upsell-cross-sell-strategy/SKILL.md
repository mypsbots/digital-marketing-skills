---
id: offer-and-messaging.upsell-cross-sell-strategy
name: Upsell and Cross-sell Strategy
version: 1.0.0
status: stable
description: Design ethical upsell, cross-sell and order-bump paths and a value ladder that raise average order value and lifetime value, with intentional qualification friction.
category: offer-and-messaging
sub_category: monetisation
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [decision, retention]
objectives: [increase-average-order-value, increase-lifetime-value]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [product-or-offer-catalogue, target-segment, margin-or-price]
optional_inputs: [purchase-history, attach-rates, lifetime-value-data]
outputs: [value-ladder, upsell-cross-sell-map, order-bump-plan, qualification-rules]
related_skills: [offer-and-messaging.offer-design, strategy.pricing-strategy, saas.expansion-revenue, ecommerce.repeat-purchase, strategy.retention-strategy]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [upsell, cross-sell, value-ladder, ltv, monetisation]
---

## Overview

Designs the monetisation architecture around the core offer: complementary cross-sells, higher-value
upsells, order bumps, and a value ladder that moves customers from entry offers to premium ones.
Includes where to introduce intentional friction to qualify for higher-value paths.

## Business purpose

Raising average order value and lifetime value from existing demand is far cheaper than new
acquisition; a coherent value ladder compounds revenue per customer ethically.

## When to use / when not to use

- **Use** to design upsell/cross-sell/order-bump paths, a value ladder, or qualification steps.
- **Do not use** to force irrelevant add-ons, hide terms, or pressure customers deceptively.

## Inputs

### Required
- Product/offer catalogue, target segment, margin or price data.

### Optional
- Purchase history, attach rates, lifetime-value data.

## Outputs

- A **value ladder** (entry → core → premium offers).
- An **upsell/cross-sell map** (what to offer, to whom, when).
- An **order-bump plan** (relevant, low-friction add-ons at checkout).
- **Qualification rules** (where friction filters for fit/quality).

## Methodology

1. Map the value ladder from entry offers to premium, with logical next steps.
2. Identify relevant cross-sells (complements) and upsells (upgrades) per entry point.
3. Place offers at the right moment: order bumps at checkout, upsells post-purchase, expansion in-life.
4. Add intentional friction (application, qualification, minimums) only where it improves fit
   and downstream success — not to extract more indiscriminately.
5. Price and frame ascension steps consistent with positioning and margin.
6. Measure attach rate, AOV, take-up and LTV; iterate.

## Decision rules

- Every add-on must genuinely help the customer succeed; relevance over revenue.
- Use friction to qualify for high-value paths, not to trap or confuse.
- Protect the core purchase experience; upsells must never degrade it.

## Quality checklist

- [ ] Value ladder coherent with clear ascension logic.
- [ ] Upsells/cross-sells relevant and well-timed.
- [ ] Order bumps low-friction and complementary.
- [ ] Qualification friction improves fit, not just revenue.

## Compliance checklist

- [ ] All pricing, recurring terms and add-ons disclosed before purchase.
- [ ] No forced continuity or hidden charges; easy opt-out.
- [ ] Comparative/value claims substantiated.

## Failure conditions and escalation

- Missing catalogue/margin/segment → `insufficient_data`.
- Recurring billing or regulated terms → legal/finance review.

## Examples

- **SaaS:** seat/usage upgrades and add-on modules; expansion paths (see `saas.expansion-revenue`).
- **E-commerce:** checkout order bumps and post-purchase cross-sells; replenishment (see `ecommerce.repeat-purchase`).
- **Real estate:** qualification application for premium advisory tiers.
- **Retail:** bundle upgrades and accessory cross-sells; loyalty-tier ascension.

## KPIs and metrics

Attach rate, average order value, upsell/cross-sell take-up, lifetime value, revenue per customer,
margin mix.

## Related skills

`offer-and-messaging.offer-design`, `strategy.pricing-strategy`, `saas.expansion-revenue`,
`ecommerce.repeat-purchase`, `strategy.retention-strategy`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
