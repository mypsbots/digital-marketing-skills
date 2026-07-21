---
id: offer-and-messaging.messaging-framework
name: Brand Messaging Framework
version: 1.0.0
status: stable
description: Build a messaging framework with hierarchy, pillars, proof and audience variations to keep communication consistent and persuasive.
category: offer-and-messaging
sub_category: messaging
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [message-consistency, improve-conversion]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: 1-2 days
required_inputs: [positioning, audience]
optional_inputs: [value-proposition, proof-points, tone-of-voice]
outputs: [message-hierarchy, pillars, proof, audience-variants]
related_skills: [positioning.positioning-statement, positioning.value-proposition-development, offer-and-messaging.objection-handling]
resources: []
mcp_prompts: [create_go_to_market]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [messaging, framework, brand]
---

## Overview

A single source of truth for what the brand says: core narrative, message pillars, proof and
approved audience/channel variations.

## Business purpose

Consistent, differentiated messaging compounds across channels and reduces conflicting claims.

## When to use / when not to use

- **Use** to brief content, ads, sales and support.
- **Do not use** to introduce claims not supported by positioning/proof.

## Inputs

### Required
- Positioning and audience.

### Optional
- Value proposition, proof points, tone of voice.

## Outputs

- A **message hierarchy** (core message → pillars → supporting points).
- **Pillars** with proof.
- **Audience/channel variants**.

## Methodology

1. Derive the core message from positioning and value proposition.
2. Define 3–4 message pillars, each with proof and supporting points.
3. Create audience variations (persona/segment) without contradicting the core.
4. Define tone-of-voice guardrails and words to use/avoid.
5. Provide channel adaptations (long-form vs ad vs social).

## Decision rules

- Variants may re-emphasise but never contradict the core message.
- Every pillar needs at least one proof point.

## Quality checklist

- [ ] Hierarchy is clear and consistent.
- [ ] Pillars evidenced.
- [ ] Variants aligned to personas/channels.

## Compliance checklist

- [ ] No unsubstantiated/regulated claims.
- [ ] Inclusive, non-discriminatory language.

## Failure conditions and escalation

- No positioning → run `positioning.positioning-statement` first.

## Examples

- **SaaS:** pillars = speed, integrations, security; each with proof.
- **E-commerce:** quality, sustainability, service.
- **Real estate:** local expertise, transparency, results.
- **Retail:** value, convenience, experience.

## KPIs and metrics

Message consistency (audit), resonance testing, conversion lift.

## Related skills

`positioning.positioning-statement`, `positioning.value-proposition-development`,
`offer-and-messaging.objection-handling`.

## MCP mappings

- Prompts: `create_go_to_market`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
