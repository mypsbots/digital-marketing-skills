---
id: market-research.marketing-mix-analysis
name: Marketing Mix Analysis (4 Ps / 7 Ps)
version: 1.0.0
status: stable
description: Analyse and align the marketing mix - Product, Price, Place, Promotion (plus People, Process, Physical evidence for services) into a coherent, digital-ready plan.
category: market-research
sub_category: strategic-frameworks
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [understand-context, differentiate-offer, communicate-value]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [product-or-service, target-segment]
optional_inputs: [pricing-data, channel-options, competitor-mix]
outputs: [marketing-mix-assessment, mix-alignment-gaps, mix-recommendations]
related_skills: [strategy.positioning-strategy, strategy.pricing-strategy, strategy.channel-mix-planning, market-research.market-segmentation, offer-and-messaging.offer-design]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [marketing-mix, 4ps, 7ps, strategy, framework]
---

## Overview

Reviews the marketing mix — **Product, Price, Place, Promotion** (and for services, **People,
Process, Physical evidence**) — to check each element is internally consistent, aligned to the
target segment and positioning, and translated into digital execution.

## Business purpose

A coherent mix ensures the offer, price, distribution and communication reinforce one another;
misalignment (e.g. premium positioning with discount promotion) wastes spend and confuses buyers.

## When to use / when not to use

- **Use** to audit an existing offer's mix, plan a launch, or diagnose why positioning and
  execution feel inconsistent.
- **Do not use** as a rigid checklist that ignores customer/channel realities; adapt the 7 Ps to
  the business model.

## Inputs

### Required
- Product/service, target segment.

### Optional
- Pricing data, channel options, competitor mix.

## Outputs

- A **marketing-mix assessment** across the 4/7 Ps.
- **Mix alignment gaps** (inconsistencies vs positioning/segment).
- **Mix recommendations** with digital execution.

## Methodology

1. Product: value, features/benefits, differentiation, lifecycle stage.
2. Price: level, model, perceived value, competitive context (link to pricing strategy).
3. Place: channels and distribution (digital and physical), availability, experience.
4. Promotion: message, channels, content, integrated communications.
5. For services, add People, Process, Physical evidence (trust and experience cues).
6. Check each P against positioning and the target segment; flag inconsistencies.
7. Recommend adjustments and translate into digital channel execution.

## Decision rules

- Every element must reinforce the same positioning and segment.
- Price and promotion must not contradict the value/premium claim.
- Adapt which Ps matter most to the business model (services vs products).

## Quality checklist

- [ ] All relevant Ps assessed.
- [ ] Alignment to positioning and segment checked.
- [ ] Recommendations translated into digital execution.

## Compliance checklist

- [ ] Pricing/promotion claims lawful and substantiated.
- [ ] Distribution and data practices compliant where relevant.

## Failure conditions and escalation

- Missing product/segment → `insufficient_data`.
- Regulated pricing/claims → compliance review.

## Examples

- **SaaS:** align tiered pricing, self-serve place, and product-led promotion (7 Ps: onboarding people/process).
- **E-commerce:** product range, dynamic price, marketplace/DTC place, performance promotion.
- **Real estate:** service people/process and physical evidence dominate the mix.
- **Retail:** assortment, price/promotion cadence, omnichannel place.

## KPIs and metrics

Qualitative alignment; downstream conversion, price realisation, and channel efficiency.

## Related skills

`strategy.positioning-strategy`, `strategy.pricing-strategy`, `strategy.channel-mix-planning`,
`market-research.market-segmentation`, `offer-and-messaging.offer-design`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
