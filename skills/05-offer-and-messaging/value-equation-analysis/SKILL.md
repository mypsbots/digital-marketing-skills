---
id: offer-and-messaging.value-equation-analysis
name: Value Equation Analysis
version: 1.0.0
status: stable
description: Diagnose and increase an offer's perceived value using the value equation - dream outcome and perceived likelihood over time delay and effort and sacrifice.
category: offer-and-messaging
sub_category: offer-construction
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [increase-perceived-value, increase-conversion]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [offer, target-persona, desired-outcome]
optional_inputs: [objections, proof-and-evidence, competitor-offers]
outputs: [value-equation-scorecard, value-levers-plan, reframed-benefits]
related_skills: [offer-and-messaging.offer-design, positioning.value-proposition-development, offer-and-messaging.feature-to-benefit-translation, cro.value-proposition-clarity-review, customer-research.jobs-to-be-done]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [value-equation, perceived-value, offer, positioning]
---

## Overview

Uses the value equation to diagnose and raise an offer's perceived value:
**(Dream Outcome × Perceived Likelihood of Achievement) ÷ (Time Delay × Effort & Sacrifice)**.
Increase the numerator (bigger, more believable result) and decrease the denominator (faster,
easier) — honestly and without overpromising.

## Business purpose

Perceived value drives willingness to pay and conversion; systematically improving each lever
makes an offer more compelling without cutting price.

## When to use / when not to use

- **Use** to diagnose a weak offer, prioritise which value lever to improve, or reframe benefits.
- **Do not use** to exaggerate outcomes, imply guarantees you cannot honour, or hide effort/cost.

## Inputs

### Required
- Offer, target persona, desired outcome.

### Optional
- Objections, proof/evidence, competitor offers.

## Outputs

- A **value-equation scorecard** rating each of the four components.
- A **value-levers plan** (specific moves to raise value).
- **Reframed benefits** communicating the improved value.

## Methodology

1. Define the customer's true dream outcome in their own words.
2. Score each lever: dream outcome, perceived likelihood, time delay, effort & sacrifice.
3. Raise perceived likelihood with proof (evidence, guarantees, testimonials, track record).
4. Reduce time delay (faster wins, quick starts) and effort/sacrifice (done-for-you, simplicity).
5. Amplify the dream outcome framing without inflating claims.
6. Prioritise the weakest, highest-impact lever and translate into offer/messaging changes.

## Decision rules

- Improve believability with proof before amplifying the promise.
- Reducing effort/time is often cheaper and more persuasive than a bigger promise.
- Never raise perceived likelihood with unsubstantiated or implied guarantees.

## Quality checklist

- [ ] Dream outcome stated in customer language.
- [ ] All four levers scored with evidence.
- [ ] Prioritised, specific improvements identified.
- [ ] Reframed benefits remain truthful.

## Compliance checklist

- [ ] Outcome claims substantiated (see `offer-and-messaging.claim-substantiation-checklist`).
- [ ] No implied or fake guarantees; results not misrepresented.
- [ ] Regulated-sector outcome wording reviewed where relevant.

## Failure conditions and escalation

- Missing offer/persona/outcome → `insufficient_data`.
- Outcome/earnings/health claims → legal/compliance review.

## Examples

- **SaaS:** raise perceived likelihood with onboarding + guarantee; cut time-to-value.
- **E-commerce:** reduce effort with bundles/subscriptions; proof via reviews.
- **Real estate:** faster sale framing with track record; done-for-you process.
- **Retail:** ease and convenience framing; loyalty certainty.

## KPIs and metrics

Conversion rate, willingness-to-pay/price acceptance, offer engagement, and lift from
value-lever changes.

## Related skills

`offer-and-messaging.offer-design`, `positioning.value-proposition-development`,
`offer-and-messaging.feature-to-benefit-translation`, `cro.value-proposition-clarity-review`,
`customer-research.jobs-to-be-done`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
