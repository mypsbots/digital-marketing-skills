---
id: offer-and-messaging.offer-enhancers
name: Offer Enhancers - Scarcity, Urgency, Bonuses, Guarantees, Naming
version: 1.0.0
status: stable
description: Increase demand and perceived value with ethical scarcity, urgency, bonuses, guarantees and offer naming, plus story and imagery - all truthful and honoured.
category: offer-and-messaging
sub_category: offer-construction
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [increase-conversion, increase-perceived-value]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [offer, target-persona]
optional_inputs: [inventory-or-capacity-limits, deadlines, proof-and-evidence]
outputs: [enhancement-plan, guarantee-design, bonus-stack, offer-name-options]
related_skills: [offer-and-messaging.offer-design, offer-and-messaging.value-equation-analysis, offer-and-messaging.direct-response-copywriting, offer-and-messaging.ethical-persuasion-review, offer-and-messaging.claim-substantiation-checklist]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [scarcity, urgency, bonuses, guarantees, naming, persuasion]
---

## Overview

Applies the classic offer enhancers — scarcity, urgency, bonuses, guarantees and naming, plus
story and vivid imagery — to raise demand and perceived value. Every enhancer must be **genuine
and honoured**: real limits, real deadlines, real guarantees.

## Business purpose

Enhancers convert interest into action and increase perceived value, but only ethical, truthful
use protects trust, brand and legal standing while lifting response.

## When to use / when not to use

- **Use** to design honest scarcity/urgency, structure bonuses, craft a guarantee, or name an offer.
- **Do not use** to fabricate scarcity/urgency, offer guarantees you will not honour, or use
  false countdowns and fake stock counters.

## Inputs

### Required
- Offer, target persona.

### Optional
- Inventory/capacity limits, deadlines, proof/evidence.

## Outputs

- An **enhancement plan** (which enhancers, where, why).
- A **guarantee design** (type, terms, how it is honoured).
- A **bonus stack** (bonuses that remove specific objections/obstacles).
- **Offer name options**.

## Methodology

1. Scarcity: use only genuine limits (units, seats, cohorts) and state them truthfully.
2. Urgency: tie to real deadlines, cohort starts, or price/bonus changes — never fake timers.
3. Bonuses: add high-value items that each neutralise a specific objection or obstacle.
4. Guarantees: choose a type (unconditional, conditional, service, outcome) you can honour; make
   terms clear and reversal easy.
5. Naming: name the offer for the outcome/audience; keep it clear and non-deceptive.
6. Story & imagery: use truthful narrative and vivid, concrete imagery to make value tangible.
7. Combine tastefully; avoid overload that erodes credibility.

## Decision rules

- If a limit or deadline is not real, do not imply it.
- A guarantee must be honoured exactly as stated; design for it operationally.
- Bonuses should increase value, not distract from a weak core offer.

## Quality checklist

- [ ] Scarcity/urgency claims are genuine and verifiable.
- [ ] Guarantee terms clear, honourable and operationally supported.
- [ ] Bonuses map to real objections/obstacles.
- [ ] Name is clear and non-deceptive.

## Compliance checklist

- [ ] No fake scarcity, countdowns or stock counters (consumer-protection rules).
- [ ] Guarantee/refund terms disclosed and lawful.
- [ ] Claims and testimonials substantiated (see `offer-and-messaging.claim-substantiation-checklist`).
- [ ] Persuasion ethical (see `offer-and-messaging.ethical-persuasion-review`).

## Failure conditions and escalation

- Missing offer/persona → `insufficient_data`.
- Guarantees/refunds or regulated claims → legal/finance review.

## Examples

- **SaaS:** limited onboarding cohort; outcome-based guarantee with clear conditions.
- **E-commerce:** genuine limited edition; satisfaction guarantee; objection-busting bonuses.
- **Real estate:** cohort/consultation limits; service guarantee; named programme.
- **Retail:** real seasonal deadlines; member bonuses; price-match guarantee.

## KPIs and metrics

Conversion rate, take-up during scarcity/urgency windows, guarantee/refund rate, bonus
attribution, and trust/complaint signals.

## Related skills

`offer-and-messaging.offer-design`, `offer-and-messaging.value-equation-analysis`,
`offer-and-messaging.direct-response-copywriting`, `offer-and-messaging.ethical-persuasion-review`,
`offer-and-messaging.claim-substantiation-checklist`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
