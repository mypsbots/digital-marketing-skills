---
id: customer-research.buyer-persona-development
name: Buyer Persona Development
version: 1.0.0
status: stable
description: Develop actionable buyer personas grounded in jobs-to-be-done, goals, pains and objections rather than superficial demographics.
category: customer-research
sub_category: personas
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [understand-audience, inform-messaging]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: 1-2 days
required_inputs: [icp-or-audience, product-or-service]
optional_inputs: [interviews, reviews, survey-data]
outputs: [personas, messaging-angles, channel-preferences]
related_skills: [customer-research.ideal-customer-profile, customer-research.jobs-to-be-done, customer-research.objection-analysis]
resources: []
mcp_prompts: [create_buyer_personas]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [personas, audience, messaging]
---

## Overview

Creates decision-useful personas describing the buyer's jobs, goals, pains, objections,
information sources and buying context.

## Business purpose

Personas align teams on who they serve and why, improving message relevance and channel fit.

## When to use / when not to use

- **Use** to inform messaging, content and channel choices.
- **Do not use** to invent fictional detail unsupported by evidence.

## Inputs

### Required
- ICP or target audience; product/service.

### Optional
- Interviews, reviews, surveys, sales/support notes.

## Outputs

- 1–3 **personas** (goals, pains, objections, triggers, sources).
- **Messaging angles** per persona.
- **Channel preferences**.

## Methodology

1. Start from the ICP; do not create personas outside it.
2. For each persona capture the core job-to-be-done, functional/emotional/social goals, pains,
   and objections.
3. Identify trusted information sources and preferred channels.
4. Note buying role (B2B: user, champion, economic buyer, blocker) where relevant.
5. Derive 2–3 messaging angles that address goals and objections.
6. Label unproven attributes as assumptions and set a validation note.

## Decision rules

- Cap at 3 primary personas to stay actionable.
- Prioritise the persona with the most influence on the purchase decision.
- Avoid stereotypes and sensitive attributes.

## Quality checklist

- [ ] Personas trace to the ICP.
- [ ] Jobs, goals, pains and objections captured.
- [ ] Messaging angles are specific.
- [ ] Assumptions labelled.

## Compliance checklist

- [ ] No sensitive-category or discriminatory framing.
- [ ] Source data used lawfully; no identifiable individuals exposed.

## Failure conditions and escalation

- No ICP/audience → `insufficient_data`.

## Examples

- **B2B SaaS:** "Ops lead" champion vs "CFO" economic buyer with different objections.
- **B2C SaaS:** time-poor professional seeking a habit-forming tool.
- **E-commerce:** value-driven repeat buyer vs gift-buyer.
- **Real estate:** first-time buyer anxious about process and affordability.

## KPIs and metrics

Message resonance, content engagement by persona, conversion by segment.

## Related skills

`customer-research.ideal-customer-profile`, `customer-research.jobs-to-be-done`,
`customer-research.objection-analysis`.

## MCP mappings

- Prompts: `create_buyer_personas`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
