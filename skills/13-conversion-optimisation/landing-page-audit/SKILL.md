---
id: cro.landing-page-audit
name: Landing Page Audit
version: 1.0.0
status: stable
description: Audit a landing page for clarity, relevance, friction and trust, producing prioritised, testable improvement hypotheses.
category: conversion-optimisation
sub_category: audit
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [decision]
objectives: [improve-conversion]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [landing-page, objective, audience]
optional_inputs: [analytics, heatmaps, traffic-source]
outputs: [findings, friction-points, test-hypotheses]
related_skills: [cro.value-proposition-clarity-review, cro.funnel-drop-off-analysis, experimentation.ab-test-design]
resources: []
mcp_prompts: [audit_landing_page]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [cro, landing-page, audit]
---

## Overview

A structured review of a landing page against conversion best practice and the specific
traffic's intent, yielding prioritised, testable hypotheses (not opinions).

## Business purpose

Improving conversion compounds the value of all traffic acquisition.

## When to use / when not to use

- **Use** to diagnose a page and generate test ideas.
- **Do not use** to declare "best practice" changes as guaranteed wins (test them).

## Inputs

### Required
- Landing page, objective/conversion action, audience.

### Optional
- Analytics, heatmaps, traffic source.

## Outputs

- **Findings** across clarity, relevance, friction, trust, speed, mobile.
- **Friction points** with evidence.
- **Test hypotheses** prioritised.

## Methodology

1. Confirm the intended action and the source/message match.
2. Assess above-the-fold clarity (value prop, relevance to ad/query).
3. Evaluate friction (form length, steps, distractions), trust (proof, security), and CTAs.
4. Check mobile experience and page speed impact.
5. Convert issues into hypotheses (change → expected effect → metric).
6. Prioritise by expected impact and effort.

## Decision rules

- Treat findings as hypotheses to test, not certainties.
- Prioritise message match and clarity before cosmetic tweaks.
- Respect analytics evidence over opinion.

## Quality checklist

- [ ] Message match assessed.
- [ ] Friction/trust/CTA reviewed.
- [ ] Hypotheses testable and prioritised.

## Compliance checklist

- [ ] Claims/testimonials genuine and substantiated.
- [ ] Accessibility issues flagged.
- [ ] Privacy/consent on forms.

## Failure conditions and escalation

- Missing page/objective/audience → `insufficient_data`.

## Examples

- **SaaS:** unclear value prop + long form → clarify + reduce fields.
- **E-commerce:** weak trust signals on PDP → add reviews/guarantees.
- **Real estate:** unclear next step → prominent viewing CTA.
- **Retail:** no store/stock clarity → add availability.

## KPIs and metrics

Conversion rate, bounce, form completion, scroll/engagement.

## Related skills

`cro.value-proposition-clarity-review`, `cro.funnel-drop-off-analysis`,
`experimentation.ab-test-design`.

## MCP mappings

- Prompts: `audit_landing_page`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
