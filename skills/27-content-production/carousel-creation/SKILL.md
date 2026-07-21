---
id: content-production.carousel-creation
name: Carousel Creation
version: 1.0.0
status: stable
description: Design multi-slide carousels (Instagram, LinkedIn) with a hook slide, one idea per slide, logical flow, visual hierarchy and a clear closing CTA.
category: content-production
sub_category: visual
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [drive-engagement, educate]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [topic-or-message, platform, audience]
optional_inputs: [brand-guidelines, data-points, examples]
outputs: [slide-by-slide-copy, design-direction, cta-slide]
related_skills: [content-production.social-caption-writing, content-production.infographic-brief, platform.instagram-content]
resources: []
mcp_prompts: [social_calendar, generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [carousel, visual, instagram, linkedin]
---

## Overview

Plans a swipeable carousel: a hook cover slide, one idea per slide with tight copy, a logical
narrative, consistent visual hierarchy, and a closing CTA/summary — sized to the platform.

## Business purpose

Carousels drive high saves/dwell and educate efficiently; strong first slides and flow determine
completion.

## When to use / when not to use

- **Use** to build educational/story/list carousels for IG/LinkedIn.
- **Do not use** to overload slides with text or make unsupported claims.

## Inputs

### Required
- Topic or message, platform, audience.

### Optional
- Brand guidelines, data points, examples.

## Outputs

- **Slide-by-slide copy** (cover hook → body slides → CTA).
- **Design direction** (hierarchy, colour, type, imagery).
- A **CTA slide** (save/follow/link).

## Methodology

1. Pick one theme; outline 6–10 slides, one idea each.
2. Write a cover slide that promises value (the hook).
3. Keep per-slide copy minimal with clear hierarchy; use visuals/data.
4. Maintain narrative flow and momentum to the last slide.
5. Close with a summary + CTA; specify brand-consistent design.

## Decision rules

- One idea per slide; minimal text, strong hierarchy.
- Cover slide earns the swipe honestly.
- Consistent, accessible design (contrast, legible type).

## Quality checklist

- [ ] Hook cover + one idea/slide.
- [ ] Logical flow + CTA slide.
- [ ] Brand-consistent, accessible design.

## Compliance checklist

- [ ] Data/claims accurate and sourced.
- [ ] Image/font licensing respected.

## Failure conditions and escalation

- Missing topic/platform/audience → `insufficient_data`.

## Examples

- **SaaS:** "5 metrics that predict churn" carousel.
- **E-commerce:** "how to choose X" guide.
- **Real estate:** "steps to buying your first home".
- **Retail:** "styling tips" list carousel.

## KPIs and metrics

Saves, completion/swipe-through, shares, follows, profile taps.

## Related skills

`content-production.social-caption-writing`, `content-production.infographic-brief`,
`platform.instagram-content`.

## MCP mappings

- Prompts: `social_calendar`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
