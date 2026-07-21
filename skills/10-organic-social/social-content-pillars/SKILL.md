---
id: organic-social.social-content-pillars
name: Social Content Pillars
version: 1.0.0
status: stable
description: Define recurring social content pillars balancing value, brand and conversion for consistent, on-strategy posting.
category: organic-social
sub_category: pillars
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, retention]
channels: [organic-social]
objectives: [consistent-posting, build-audience]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [audience, brand-voice, platforms]
optional_inputs: [past-performance]
outputs: [content-pillars, format-mix, ratios]
related_skills: [organic-social.social-content-calendar, content.content-pillar-development, organic-social.social-hook-generation]
resources: []
mcp_prompts: [social_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [organic-social, pillars]
---

## Overview

Defines 3–5 recurring content themes and their format mix so social output is consistent,
recognisable and balanced across value, brand and conversion.

## Business purpose

Pillars prevent random posting and build a coherent, followable presence.

## When to use / when not to use

- **Use** to set up or reset an organic social presence.
- **Do not use** to justify purely promotional feeds.

## Inputs

### Required
- Audience, brand voice, platforms.

### Optional
- Past performance.

## Outputs

- **Content pillars** with intent per pillar.
- A **format mix** per platform.
- **Ratios** (e.g. educate/entertain/inspire/promote).

## Methodology

1. Derive pillars from audience interests, brand themes and business goals.
2. Assign each pillar a purpose (educate, entertain, inspire, prove, promote).
3. Set a healthy ratio limiting overt promotion.
4. Map formats to platforms (Reels, carousels, threads, posts).
5. Define example post types per pillar.

## Decision rules

- Keep promotional content a minority of the mix.
- Adapt formats to each platform's norms.
- Prioritise pillars that build trust and demand, not just reach.

## Quality checklist

- [ ] 3–5 clear pillars with purpose.
- [ ] Balanced ratio (limited promotion).
- [ ] Platform-appropriate formats.

## Compliance checklist

- [ ] Disclosure for paid/partnership content.
- [ ] Rights cleared for reused media.

## Failure conditions and escalation

- Missing audience/voice/platforms → `insufficient_data`.

## Examples

- **SaaS:** education, customer proof, behind-the-scenes, product.
- **E-commerce:** UGC, styling, education, offers.
- **Real estate:** listings, area guides, tips, testimonials.
- **Retail:** product, community, seasonal, offers.

## KPIs and metrics

Engagement rate, reach, follower growth, saves/shares, profile-to-site clicks.

## Related skills

`organic-social.social-content-calendar`, `content.content-pillar-development`,
`organic-social.social-hook-generation`.

## MCP mappings

- Prompts: `social_calendar`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
