---
id: cro.landing-page-design
name: Landing Page Design and Build Brief
version: 1.0.0
status: stable
description: Design high-converting, campaign-specific landing pages (lead capture or sales) with a clear message match, single goal, persuasive structure and measurement built in.
category: conversion-optimisation
sub_category: design
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [increase-conversion, generate-leads]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [campaign-objective, offer, target-audience, traffic-source]
optional_inputs: [brand-guidelines, proof-and-evidence, existing-page-data]
outputs: [landing-page-wireframe, section-by-section-copy-brief, cta-and-form-spec, measurement-plan]
related_skills: [cro.landing-page-audit, cro.value-proposition-clarity-review, paid-search.landing-page-alignment, offer-and-messaging.direct-response-copywriting, experimentation.ab-test-design]
resources: []
mcp_prompts: [create_full_funnel_campaign, create_marketing_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [landing-page, conversion, design, lead-capture, sales-page]
---

## Overview

Produces a build-ready brief for a high-converting landing page tailored to one campaign and one
goal. Ensures message match with the traffic source, a persuasive above/below-the-fold structure,
a single clear call to action, and measurement designed in from the start.

## Business purpose

The landing page is where traffic converts; a focused, message-matched page with one goal
converts far better than a generic page, directly improving campaign ROI.

## When to use / when not to use

- **Use** to design/build a new lead-capture or sales page for a specific campaign.
- **Do not use** to send paid/campaign traffic to a generic homepage, or to cram multiple
  competing goals onto one page. (To improve an existing page, use `cro.landing-page-audit`.)

## Inputs

### Required
- Campaign objective, offer, target audience, traffic source.

### Optional
- Brand guidelines, proof/evidence, existing-page data.

## Outputs

- A **landing-page wireframe** (section order and hierarchy).
- A **section-by-section copy brief** (headline, subhead, body, proof, objections).
- A **CTA and form spec** (single primary action; only essential fields).
- A **measurement plan** (conversion event, UTMs, test hooks).

## Methodology

1. Lock one objective and one primary conversion action for the page.
2. Ensure message match: headline reflects the ad/source promise and audience intent.
3. Structure the fold: clear value proposition, hero, primary CTA visible early.
4. Build the persuasion flow: benefits, proof/social proof, objection handling, risk reversal.
5. Minimise friction: short forms, only essential fields, fast load, mobile-first, trust cues.
6. Specify the single CTA (repeated as needed) and remove distracting navigation/exits.
7. Design measurement: conversion event, UTM alignment, and an A/B test hypothesis.

## Decision rules

- One page, one goal — remove competing links and CTAs.
- Headline must match the source promise (scent/message match).
- Every form field must earn its place; reduce friction relentlessly.

## Quality checklist

- [ ] Single objective and primary CTA.
- [ ] Message match with traffic source.
- [ ] Proof, objection handling and risk reversal present.
- [ ] Mobile-first, low-friction form, measurement defined.

## Compliance checklist

- [ ] Claims/testimonials substantiated (`offer-and-messaging.claim-substantiation-checklist`).
- [ ] Privacy notice/consent on forms; PII handled lawfully.
- [ ] Meets ad-platform landing-page rules (`ads-policy.landing-page-policy-compliance`).

## Failure conditions and escalation

- Missing objective/offer/traffic source → `insufficient_data`.
- Regulated claims or data collection → compliance/privacy review.

## Examples

- **SaaS:** demo/trial capture page matched to a paid-search ad group.
- **E-commerce:** product/sales page for a promotion with reviews and guarantee.
- **Real estate:** valuation/enquiry lead-capture page for a local campaign.
- **Retail:** offer/sign-up page for a seasonal promotion.

## KPIs and metrics

Conversion rate, cost per conversion, bounce/scroll depth, form completion, and A/B test lift.

## Related skills

`cro.landing-page-audit`, `cro.value-proposition-clarity-review`,
`paid-search.landing-page-alignment`, `offer-and-messaging.direct-response-copywriting`,
`experimentation.ab-test-design`.

## MCP mappings

- Prompts: `create_full_funnel_campaign`, `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
