---
id: offer-and-messaging.feature-to-benefit-translation
name: Feature-to-Benefit Translation
version: 1.0.0
status: stable
description: Translate product features into customer benefits and outcomes tied to jobs-to-be-done, with proof, avoiding hype and unsubstantiated claims.
category: offer-and-messaging
sub_category: messaging
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [clarify-value, improve-conversion]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [features, target-audience]
optional_inputs: [jobs-to-be-done, proof-points]
outputs: [feature-benefit-map, outcome-statements]
related_skills: [customer-research.jobs-to-be-done, offer-and-messaging.messaging-framework, positioning.value-proposition-development]
resources: []
mcp_prompts: [generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [benefits, messaging, copy]
---

## Overview

Maps each feature to the functional/emotional/social benefit and the customer outcome it enables,
linked to a job-to-be-done and supported by proof — turning specs into persuasive, honest value.

## Business purpose

Buyers buy outcomes, not features; benefit-led messaging converts better and clarifies value.

## When to use / when not to use

- **Use** to convert feature lists into benefit/outcome messaging.
- **Do not use** to invent benefits without proof or overstate results.

## Inputs

### Required
- Features, target audience.

### Optional
- Jobs-to-be-done, proof points.

## Outputs

- A **feature→benefit map** (feature → benefit → outcome → proof).
- **Outcome statements** ready for messaging.

## Methodology

1. For each feature, ask "so what?" until you reach a customer outcome.
2. Tie the outcome to a job-to-be-done and the audience's context.
3. Classify benefit type (functional/emotional/social).
4. Attach proof; drop unprovable claims.
5. Prioritise the benefits that matter most to the target.

## Decision rules

- Every benefit must trace to a feature and, where measurable, proof.
- Prefer specific outcomes over generic adjectives.
- No unsubstantiated performance claims.

## Quality checklist

- [ ] Each feature mapped to an outcome.
- [ ] Benefit type identified.
- [ ] Proof attached where claimed.

## Compliance checklist

- [ ] Claims substantiated; no misleading results.

## Failure conditions and escalation

- Missing features/audience → `insufficient_data`.

## Examples

- **SaaS:** "SSO" → "IT approves faster; secure access" (proof: compliance).
- **E-commerce:** "breathable fabric" → "stays comfortable all day".
- **Real estate:** "local expertise" → "priced right, sells faster".
- **Retail:** "click-and-collect" → "get it today, no delivery wait".

## KPIs and metrics

Message-match, conversion lift, clarity scores.

## Related skills

`customer-research.jobs-to-be-done`, `offer-and-messaging.messaging-framework`,
`positioning.value-proposition-development`.

## MCP mappings

- Prompts: `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
