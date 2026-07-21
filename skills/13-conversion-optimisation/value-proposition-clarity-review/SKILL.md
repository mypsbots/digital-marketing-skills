---
id: cro.value-proposition-clarity-review
name: Value Proposition Clarity Review
version: 1.0.0
status: stable
description: Assess whether a page communicates who it is for, what it offers and why to choose it within seconds, and recommend clearer alternatives.
category: conversion-optimisation
sub_category: messaging
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [consideration, decision]
objectives: [improve-clarity, improve-conversion]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [page-content, audience, offer]
optional_inputs: [competitors, positioning]
outputs: [clarity-findings, rewrite-options, test-hypotheses]
related_skills: [cro.landing-page-audit, positioning.value-proposition-development, offer-and-messaging.messaging-framework]
resources: []
mcp_prompts: [audit_landing_page]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [cro, value-proposition, clarity]
---

## Overview

Evaluates whether a page answers, within ~5 seconds, who it is for, what it does, and why to
choose it — then offers clearer, testable rewrites.

## Business purpose

Clarity is the highest-leverage conversion factor; confused visitors leave.

## When to use / when not to use

- **Use** to sharpen headline/value communication.
- **Do not use** to invent superiority claims that cannot be substantiated.

## Inputs

### Required
- Page content, audience, offer.

### Optional
- Competitors, positioning.

## Outputs

- **Clarity findings** (who/what/why, relevance, specificity).
- **Rewrite options** for headline/subhead/CTA.
- **Test hypotheses**.

## Methodology

1. Apply the 5-second test: can a target visitor state who/what/why?
2. Check specificity (concrete outcomes vs vague claims) and relevance to audience.
3. Assess supporting subhead, proof, and CTA alignment.
4. Provide 2–3 clearer rewrites and a test plan.

## Decision rules

- Prefer specific, benefit-led clarity over cleverness.
- Substantiate any comparative/quantified claims.
- Recommend testing, not asserting a winner.

## Quality checklist

- [ ] Who/what/why answered.
- [ ] Specific and relevant.
- [ ] Rewrites testable.

## Compliance checklist

- [ ] Claims substantiated; comparative claims fair.
- [ ] No misleading superlatives.

## Failure conditions and escalation

- Missing page/audience/offer → `insufficient_data`.

## Examples

- **SaaS:** replace jargon headline with outcome-led statement.
- **E-commerce:** clarify unique product benefit + guarantee.
- **Real estate:** state location, price band, key benefit.
- **Retail:** clarify offer and who it suits.

## KPIs and metrics

Conversion rate, bounce, message-match lift in tests.

## Related skills

`cro.landing-page-audit`, `positioning.value-proposition-development`,
`offer-and-messaging.messaging-framework`.

## MCP mappings

- Prompts: `audit_landing_page`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
