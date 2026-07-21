---
id: paid-social.hook-generation
name: Paid Social Hook Generation
version: 1.0.0
status: stable
description: Generate scroll-stopping opening hooks for paid social creative that earn attention in the first seconds, matched to audience and honest to the offer.
category: paid-social
sub_category: creative
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [increase-attention, improve-hook-rate]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [audience, offer-or-message]
optional_inputs: [format, brand-voice, pain-points]
outputs: [hook-variants, angle-rationale]
related_skills: [paid-social.creative-brief-development, paid-social.creative-testing-plan, offer-and-messaging.feature-to-benefit-translation]
resources: [marketing://policies/meta-ads/policies]
mcp_prompts: [plan_meta_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-social, hooks, creative]
---

## Overview

Produces multiple opening hooks (first 1–3 seconds/first line) across proven angles — problem,
outcome, curiosity, social proof, pattern-interrupt — matched to the audience and honest to the
offer, ready for creative testing.

## Business purpose

The hook determines whether creative is watched at all; better hooks lift hook rate and lower CPMs
of attention.

## When to use / when not to use

- **Use** to generate hook options for social creative/testing.
- **Do not use** clickbait or misleading hooks that break the offer promise.

## Inputs

### Required
- Audience, offer or message.

### Optional
- Format, brand voice, pain points.

## Outputs

- **Hook variants** across distinct angles.
- **Angle rationale** for testing.

## Methodology

1. Anchor to a real audience pain/desire/context.
2. Generate hooks across angles: problem, outcome, curiosity, proof, contrarian, pattern-interrupt.
3. Front-load the message for sound-off/fast-scroll consumption.
4. Keep hooks honest to the offer (no bait-and-switch).
5. Select diverse variants for a structured test.

## Decision rules

- Hook must be relevant and true to the offer.
- Prioritise clarity + specificity over gimmicks.
- Provide angle diversity for testing.

## Quality checklist

- [ ] Multiple distinct angles.
- [ ] Front-loaded, scroll-stopping.
- [ ] Honest to offer.

## Compliance checklist

- [ ] No misleading/clickbait claims.
- [ ] Ad policies respected.

## Failure conditions and escalation

- Missing audience/offer → `insufficient_data`.

## Examples

- **SaaS:** "Still doing X in spreadsheets?"
- **E-commerce:** "The [problem] fix you'll actually keep using".
- **Real estate:** "Thinking of selling in [area]? Read this first".
- **Retail:** "This week only, in-store".

## KPIs and metrics

Hook rate (3s views), thumb-stop, CTR, CPA by hook.

## Related skills

`paid-social.creative-brief-development`, `paid-social.creative-testing-plan`,
`offer-and-messaging.feature-to-benefit-translation`.

## MCP mappings

- Resources: `marketing://policies/meta-ads/policies`
- Prompts: `plan_meta_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
