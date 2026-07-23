---
id: offer-and-messaging.value-stack-design
name: Value Stack and Offer Packaging
version: 1.0.0
status: stable
description: Turn a problem into a high-value bundled offer by listing every possible solution, then trimming and stacking to maximise value while minimising cost and complexity.
category: offer-and-messaging
sub_category: offer-construction
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [increase-perceived-value, differentiate-offer, protect-margin]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [core-problem, target-persona, offer-or-capabilities]
optional_inputs: [delivery-costs, competitor-offers, margin-targets]
outputs: [solution-inventory, trimmed-stack, packaged-offer, value-stack-presentation]
related_skills: [offer-and-messaging.offer-design, offer-and-messaging.value-equation-analysis, strategy.pricing-strategy, offer-and-messaging.upsell-cross-sell-strategy, customer-research.jobs-to-be-done]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: confidential
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [value-stack, bundling, packaging, trim-and-stack, offer]
---

## Overview

Builds a differentiated, high-value offer from a customer problem using a "trim & stack" process:
brainstorm every conceivable way to solve the problem and its obstacles, then trim to the
highest value-to-cost solutions and stack them into a coherent bundle that solves the whole
problem — presented so the total value dwarfs the price.

## Business purpose

A well-constructed value stack makes the offer feel uniquely comprehensive and hard to compare,
supporting premium pricing and higher conversion without discounting.

## When to use / when not to use

- **Use** to construct or rebuild an offer, design a bundle, or present a value stack.
- **Do not use** to pad the stack with low-value filler, or to promise deliverables you cannot fulfil.

## Inputs

### Required
- Core problem, target persona, offer or capabilities.

### Optional
- Delivery costs, competitor offers, margin targets.

## Outputs

- A **solution inventory** (every way to solve the problem and its obstacles).
- A **trimmed stack** (high value, low cost/complexity retained).
- A **packaged offer** (the bundle and how it is framed).
- A **value-stack presentation** (itemised value vs price).

## Methodology

1. List the customer's problem and each obstacle standing between them and the dream outcome.
2. Brainstorm every possible solution to each obstacle (quantity first, no filtering).
3. Score solutions on value delivered vs cost/effort to provide.
4. Trim: cut low-value or high-cost items; keep high value-to-cost solutions.
5. Stack: assemble retained solutions into one coherent, complete offer.
6. Present the stack with itemised value so the sum clearly exceeds the price.
7. Pressure-test deliverability, margin and differentiation.

## Decision rules

- Keep only solutions that meaningfully move the outcome; comprehensiveness, not clutter.
- Prefer high-value/low-cost-to-deliver components (e.g. reusable assets, automation).
- The stacked value must be real and deliverable, not inflated.

## Quality checklist

- [ ] All obstacles mapped, solutions brainstormed without early filtering.
- [ ] Trim/stack decisions based on value-to-cost.
- [ ] Bundle solves the whole problem coherently.
- [ ] Itemised value is genuine and deliverable within margin.

## Compliance checklist

- [ ] Stated component values and claims substantiated.
- [ ] No promised deliverables that cannot be fulfilled.
- [ ] Bundle pricing/terms transparent (see `strategy.pricing-strategy`).

## Failure conditions and escalation

- Missing problem/persona/capabilities → `insufficient_data`.
- Value or outcome claims in regulated sectors → compliance review.

## Examples

- **SaaS:** core product + onboarding + templates + community stacked as a complete solution.
- **E-commerce:** hero product + accessories + guide + guarantee bundle.
- **Real estate:** full-service package (valuation, staging guidance, marketing, negotiation).
- **Retail:** curated kit solving a whole use-case vs single SKUs.

## KPIs and metrics

Conversion rate, average order value, price realisation vs alternatives, offer differentiation,
delivered margin.

## Related skills

`offer-and-messaging.offer-design`, `offer-and-messaging.value-equation-analysis`,
`strategy.pricing-strategy`, `offer-and-messaging.upsell-cross-sell-strategy`,
`customer-research.jobs-to-be-done`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
