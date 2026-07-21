---
id: offer-and-messaging.cta-creation
name: Call-to-Action Creation
version: 1.0.0
status: stable
description: Craft clear, specific, low-friction calls to action matched to funnel stage and intent, with variants to test, avoiding manipulative pressure.
category: offer-and-messaging
sub_category: messaging
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [improve-conversion, drive-action]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [desired-action, context, audience]
optional_inputs: [offer, funnel-stage, brand-voice]
outputs: [primary-cta, cta-variants, placement-guidance]
related_skills: [offer-and-messaging.ethical-persuasion-review, cro.value-proposition-clarity-review, paid-search.search-ad-copy]
resources: []
mcp_prompts: [generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [cta, conversion, copy]
---

## Overview

Writes calls to action that state exactly what happens next, match the visitor's intent and funnel
stage, reduce friction, and set honest expectations — plus variants for testing.

## Business purpose

The CTA is the conversion hinge; clarity and relevance beat clever or high-pressure wording.

## When to use / when not to use

- **Use** to create/improve CTAs for pages, ads, emails.
- **Do not use** to create false urgency, dark patterns or misleading actions.

## Inputs

### Required
- Desired action, context, audience.

### Optional
- Offer, funnel stage, brand voice.

## Outputs

- A **primary CTA** matched to intent.
- **CTA variants** to test.
- **Placement guidance**.

## Methodology

1. Define the single next action and its value to the user.
2. Match commitment level to funnel stage (soft vs hard CTA).
3. Write action + value + (honest) reason; keep it specific and low-friction.
4. Set expectations (what happens after clicking).
5. Produce 2–3 variants for testing.

## Decision rules

- One primary action per view; reduce competing CTAs.
- Match commitment to intent/stage.
- Only genuine urgency/scarcity; no dark patterns.

## Quality checklist

- [ ] Specific action + value.
- [ ] Stage-appropriate commitment.
- [ ] Expectations set; variants provided.

## Compliance checklist

- [ ] No false urgency/scarcity or deceptive labels.

## Failure conditions and escalation

- Missing action/context/audience → `insufficient_data`.

## Examples

- **SaaS:** "Start free — no card needed".
- **E-commerce:** "Add to bag" / "Get it by Friday".
- **Real estate:** "Book a viewing".
- **Retail:** "Reserve in store".

## KPIs and metrics

CTA click-through, conversion rate, form-start/complete.

## Related skills

`offer-and-messaging.ethical-persuasion-review`, `cro.value-proposition-clarity-review`,
`paid-search.search-ad-copy`.

## MCP mappings

- Prompts: `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
