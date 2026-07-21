---
id: offer-and-messaging.offer-design
name: Offer Design
version: 1.0.0
status: stable
description: Design compelling, ethical offers (value, terms, risk reversal, urgency) aligned to audience motivation and margin.
category: offer-and-messaging
sub_category: offer
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [decision]
objectives: [improve-conversion, protect-margin]
risk_level: medium
execution_mode: generation
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [product, audience, price-or-margin]
optional_inputs: [competitor-offers, constraints]
outputs: [offer-definition, terms, ethical-review]
related_skills: [offer-and-messaging.ethical-persuasion-review, offer-and-messaging.claim-substantiation-checklist, ecommerce.promotion-calendar]
resources: []
mcp_prompts: [create_full_funnel_campaign]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [offer, conversion, ethics]
---

## Overview

Constructs an offer (core value, price/terms, bonuses, guarantee, honest urgency) that raises
conversion without deceptive tactics and protects margin.

## Business purpose

The offer often moves conversion more than creative. A strong ethical offer lifts results
sustainably.

## When to use / when not to use

- **Use** for promotions, launches and conversion pages.
- **Do not use** to create false scarcity or misleading terms.

## Inputs

### Required
- Product, audience, price or margin.

### Optional
- Competitor offers, constraints.

## Outputs

- An **offer definition** (value stack, price, terms).
- **Terms** (eligibility, duration, conditions).
- An **ethical review** result.

## Methodology

1. Clarify the primary motivation and objection to overcome.
2. Build the value stack (core + relevant bonuses).
3. Choose pricing/discount mechanics that protect margin.
4. Add risk reversal (guarantee/returns) appropriate to the model.
5. Apply honest urgency/scarcity only where genuinely true.
6. Run the ethical-persuasion and claim-substantiation checks.

## Decision rules

- Scarcity/urgency must be real; otherwise omit.
- Discounts must not erode margin below the floor; prefer value-adds where possible.
- All terms clear and honoured.

## Quality checklist

- [ ] Offer addresses the key objection.
- [ ] Margin protected.
- [ ] Terms clear and complete.

## Compliance checklist

- [ ] No false scarcity or misleading claims.
- [ ] Promotion terms compliant; regulated claims flagged.
- [ ] Guarantees honoured and lawful.

## Failure conditions and escalation

- Missing price/margin → `insufficient_data`.
- Regulated offers (finance, health) → escalate to legal.

## Examples

- **SaaS:** annual discount + onboarding bonus + 30-day guarantee.
- **E-commerce:** bundle + free returns; genuine seasonal deadline.
- **Real estate:** free valuation + market report (no misleading price claims).
- **Retail:** loyalty-member early access + genuine limited stock.

## KPIs and metrics

Conversion rate, AOV, margin, redemption rate.

## Related skills

`offer-and-messaging.ethical-persuasion-review`, `offer-and-messaging.claim-substantiation-checklist`,
`ecommerce.promotion-calendar`.

## MCP mappings

- Prompts: `create_full_funnel_campaign`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
