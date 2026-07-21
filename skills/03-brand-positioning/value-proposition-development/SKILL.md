---
id: positioning.value-proposition-development
name: Value Proposition Development
version: 1.0.0
status: stable
description: Develop a value proposition mapping customer jobs, pains and gains to the product's pain relievers and gain creators.
category: brand-positioning
sub_category: value-proposition
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [clarify-value, improve-conversion]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [customer-jobs-pains-gains, product-capabilities]
optional_inputs: [proof-points, competitor-value-props]
outputs: [value-proposition, value-map, proof]
related_skills: [customer-research.jobs-to-be-done, positioning.positioning-statement, offer-and-messaging.feature-to-benefit-translation]
resources: []
mcp_prompts: [create_go_to_market]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [value-proposition, messaging]
---

## Overview

Uses a value-map approach to align the offer to customer jobs, pains and gains, producing a
concise value proposition backed by proof.

## Business purpose

A sharp value proposition raises conversion and shortens sales cycles by making relevance and
differentiation obvious.

## When to use / when not to use

- **Use** for landing pages, sales decks, ads and GTM.
- **Do not use** to overstate outcomes; claims must be evidenced.

## Inputs

### Required
- Customer jobs/pains/gains; product capabilities.

### Optional
- Proof points, competitor value props.

## Outputs

- A **value proposition** (headline + support).
- A **value map** (pain relievers, gain creators).
- **Proof** for each claim.

## Methodology

1. Import jobs/pains/gains from JTBD or research.
2. Map product pain relievers and gain creators to the highest-ranked pains/gains.
3. Prioritise the fit points that are important and differentiated.
4. Draft a headline value proposition + 2–3 supporting statements.
5. Attach proof to each; remove unprovable claims.

## Decision rules

- Lead with the strongest important + differentiated fit.
- Prefer quantified outcomes only when evidenced; otherwise qualify.

## Quality checklist

- [ ] Maps to prioritised pains/gains.
- [ ] Differentiated and relevant.
- [ ] Proof attached; no unsupported claims.

## Compliance checklist

- [ ] No misleading or regulated claims (flag for legal).
- [ ] Testimonials genuine and permissioned.

## Failure conditions and escalation

- Missing jobs/pains/gains → run `customer-research.jobs-to-be-done` first.

## Examples

- **SaaS:** "Onboard new hires 3x faster" (with evidence) + integration proof.
- **E-commerce:** "Sourced responsibly, delivered in 48h" with certifications.
- **Real estate:** "Sell in 30 days with transparent weekly reporting."
- **Retail:** "Reserve online, collect in an hour."

## KPIs and metrics

Landing-page conversion, message resonance, sales-cycle length.

## Related skills

`customer-research.jobs-to-be-done`, `positioning.positioning-statement`,
`offer-and-messaging.feature-to-benefit-translation`.

## MCP mappings

- Prompts: `create_go_to_market`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
