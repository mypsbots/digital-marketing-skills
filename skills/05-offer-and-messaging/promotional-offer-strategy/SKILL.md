---
id: offer-and-messaging.promotional-offer-strategy
name: Promotional Offer Strategy
version: 1.0.0
status: stable
description: Design free and discount promotions that attract and convert without eroding the core offer, using ethical discount framing, guardrails and testing.
category: offer-and-messaging
sub_category: promotions
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [generate-leads, increase-conversion, protect-margin]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [core-offer, target-segment, margin-or-cost]
optional_inputs: [historical-promo-performance, competitor-promotions, seasonality]
outputs: [promotion-plan, discount-framing-guidelines, promo-guardrails, test-plan]
related_skills: [offer-and-messaging.offer-design, strategy.pricing-strategy, ecommerce.promotion-calendar, content-production.lead-magnet-creation, offer-and-messaging.claim-substantiation-checklist]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [promotions, discounts, offers, lead-generation]
---

## Overview

Designs promotional layers — free offers (lead magnets, trials, samples) and discounts — that
wrap around a strong core offer to increase response, without changing or cheapening the core
value. Covers how the discount is framed and displayed, and how promotions are tested.

## Business purpose

Well-structured free and discount promotions generate high lead volume at low cost and lift
conversion, while guardrails prevent margin erosion and discount dependence.

## When to use / when not to use

- **Use** to plan a promotion, choose a discount mechanic, or turn a free offer into a lead engine.
- **Do not use** to invent fake urgency, inflate reference ("was") prices, or discount habitually
  in place of a compelling offer.

## Inputs

### Required
- Core offer, target segment, margin or cost data.

### Optional
- Historical promo performance, competitor promotions, seasonality.

## Outputs

- A **promotion plan** (mechanic, audience, timing, channel).
- **Discount framing guidelines** (amount vs percentage, anchoring, display method).
- **Promo guardrails** (max depth/frequency, exclusions, margin floor).
- A **test plan** to compare mechanics.

## Methodology

1. Keep the core offer intact; treat promotions as a wrapper, not a substitute.
2. Pick the promotion goal: lead flow (free/low-cost) vs conversion (discount) vs clearance.
3. Choose a mechanic (free lead magnet/trial/sample, %/£ off, BOGO, bundle, threshold).
4. Frame the discount for the audience — absolute vs percentage (rule of 100), anchoring to a
   substantiated reference price, and the display method (badge, strikethrough, code).
5. Set guardrails: maximum depth and frequency, margin floor, and eligibility exclusions.
6. Test mechanics and framings systematically; measure lead cost, quality and downstream ROI.

## Decision rules

- Use the "rule of 100": for prices under 100, percentage-off usually reads larger; over 100,
  absolute amount reads larger — validate with a test.
- Prefer added value (free bonus) over price cuts when protecting brand and margin.
- Every reference/"was" price must be genuine and substantiated.

## Quality checklist

- [ ] Core offer unchanged; promotion is a wrapper.
- [ ] Mechanic matches the goal (lead flow vs conversion).
- [ ] Discount framing chosen deliberately and tested.
- [ ] Guardrails (depth, frequency, margin floor) set.

## Compliance checklist

- [ ] Reference prices genuine; no inflated "was" pricing (see `claim-substantiation-checklist`).
- [ ] Urgency/scarcity claims truthful.
- [ ] Discount terms, exclusions and end dates disclosed.
- [ ] Regulated-industry discount rules respected.

## Failure conditions and escalation

- Missing margin/segment/offer → `insufficient_data`.
- Regulated pricing or comparative claims → legal/finance review.

## Examples

- **SaaS:** free trial or freemium as the lead engine; time-boxed annual-plan discount to convert.
- **E-commerce:** threshold free shipping + margin-safe percentage off, framed with a genuine anchor.
- **Real estate:** free home valuation or guide as a lead magnet; no price gimmicks.
- **Retail:** member-only bundle; capped seasonal discount depth.

## KPIs and metrics

Cost per lead, lead quality/qualification rate, promo redemption, incremental conversion,
promotional margin, blended ROI/ROAS, discount dependence over time.

## Related skills

`offer-and-messaging.offer-design`, `strategy.pricing-strategy`, `ecommerce.promotion-calendar`,
`content-production.lead-magnet-creation`, `offer-and-messaging.claim-substantiation-checklist`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
