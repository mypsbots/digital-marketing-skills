---
id: content-production.social-caption-writing
name: Social Caption Writing
version: 1.0.0
status: stable
description: Write platform-native social captions with a strong first line, clear value, brand voice, appropriate hashtags and an honest CTA.
category: content-production
sub_category: written
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [drive-engagement, drive-action]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: minutes
required_inputs: [post-content-or-goal, platform, audience]
optional_inputs: [brand-voice, hashtags, link]
outputs: [caption-variants, hashtag-set, cta]
related_skills: [content-production.carousel-creation, organic-social.social-hook-generation, offer-and-messaging.cta-creation]
resources: []
mcp_prompts: [social_calendar, generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [caption, social, copywriting]
---

## Overview

Writes captions tuned to each platform's norms — a scroll-stopping first line, clear value or
story, brand voice, a right-sized hashtag set, and an honest CTA — matched to the post format and
audience.

## Business purpose

The caption's first line and CTA shape engagement and action; platform-native captions outperform
generic cross-posts.

## When to use / when not to use

- **Use** to write/adapt captions per platform.
- **Do not use** engagement-bait, misleading claims, or irrelevant hashtag stuffing.

## Inputs

### Required
- Post content or goal, platform, audience.

### Optional
- Brand voice, hashtags, link.

## Outputs

- **Caption variants** (per platform tone/length).
- A **hashtag set** (relevant, right-sized).
- A **CTA** (comment/save/link) fitting the platform.

## Methodology

1. Open with a strong first line (hook) before the "more" fold.
2. Deliver value/story in brand voice; format for scannability.
3. Add a relevant, honest CTA.
4. Choose relevant hashtags (quality over quantity, platform norms).
5. Adapt length/tone to the platform.

## Decision rules

- Front-load the hook; native tone per platform.
- Relevant hashtags only; no bait.
- Honest CTAs and claims; disclose promotions.

## Quality checklist

- [ ] Strong first line.
- [ ] Value + native tone.
- [ ] Relevant hashtags + CTA.

## Compliance checklist

- [ ] Disclose ads/partnerships (#ad).
- [ ] Claims substantiated; no bait.

## Failure conditions and escalation

- Missing content/platform/audience → `insufficient_data`.

## Examples

- **SaaS:** insight caption + comment CTA (LinkedIn).
- **E-commerce:** product story + shop link (IG).
- **Real estate:** listing highlight + enquiry CTA.
- **Retail:** offer + save/visit CTA.

## KPIs and metrics

Engagement rate, saves/shares, link clicks, reach.

## Related skills

`content-production.carousel-creation`, `organic-social.social-hook-generation`,
`offer-and-messaging.cta-creation`.

## MCP mappings

- Prompts: `social_calendar`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
