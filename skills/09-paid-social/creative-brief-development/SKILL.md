---
id: paid-social.creative-brief-development
name: Paid Social Creative Brief Development
version: 1.0.0
status: stable
description: Develop creative briefs for paid-social ads (concept, hook, format, message, proof, CTA) built for testing and platform norms.
category: paid-social
sub_category: creative
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
channels: [paid-social]
objectives: [improve-creative-performance]
risk_level: medium
execution_mode: generation
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [audience, offer, objective]
optional_inputs: [brand-guidelines, proof-points, prior-creative-data]
outputs: [creative-briefs, hooks, test-matrix]
related_skills: [paid-social.creative-testing-plan, paid-social.hook-generation, content.content-repurposing]
resources: [marketing://policies/meta-ads/policies]
mcp_prompts: [plan_meta_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [paid-social, creative, brief]
---

## Overview

Turns strategy into concrete creative briefs designed for structured testing across concepts,
hooks and formats.

## Business purpose

Creative is the main performance lever on paid social; disciplined briefs raise the hit rate.

## When to use / when not to use

- **Use** to brief static/video/UGC ad creative.
- **Do not use** to produce misleading claims or fake UGC/testimonials.

## Inputs

### Required
- Audience, offer, objective.

### Optional
- Brand guidelines, proof points, prior creative data.

## Outputs

- **Creative briefs** (concept, message, format, proof, CTA).
- **Hooks** (first 3 seconds / first line).
- A **test matrix** (concepts × hooks × formats).

## Methodology

1. Anchor to the audience's pain/desire and the offer.
2. Define 3–5 distinct concepts (angle/emotion), not just colour variants.
3. Write multiple hooks per concept; hooks drive most performance.
4. Specify format (static, carousel, video, UGC) and platform norms.
5. Include proof and a clear CTA.
6. Build a test matrix and success metrics.

## Decision rules

- Test distinct concepts, not trivial variations.
- Design for sound-off, mobile-first, native feel.
- No fabricated testimonials or misleading before/after claims.

## Quality checklist

- [ ] Distinct concepts with strong hooks.
- [ ] Format fits platform.
- [ ] Proof and CTA present.
- [ ] Test matrix defined.

## Compliance checklist

- [ ] Claims substantiated; no misleading edits.
- [ ] Rights cleared for assets/UGC.
- [ ] Special-category and policy compliance.

## Failure conditions and escalation

- Missing audience/offer/objective → `insufficient_data`.

## Examples

- **SaaS:** problem/agitate/solve demo hooks.
- **E-commerce:** UGC unboxing + benefit hooks.
- **Real estate:** property walkthrough hooks (accurate).
- **Retail:** in-store/offer hooks.

## KPIs and metrics

Hook rate, hold rate, CTR, CPA/ROAS, creative win rate.

## Related skills

`paid-social.creative-testing-plan`, `paid-social.hook-generation`,
`content.content-repurposing`.

## MCP mappings

- Resources: `marketing://policies/meta-ads/policies`
- Prompts: `plan_meta_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
