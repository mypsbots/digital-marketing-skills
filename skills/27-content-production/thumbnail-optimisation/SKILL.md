---
id: content-production.thumbnail-optimisation
name: Thumbnail Optimisation
version: 1.0.0
status: stable
description: Design and optimise video thumbnails (YouTube and social) for high, honest click-through — clear focal subject, legible text, contrast and title synergy.
category: content-production
sub_category: visual
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [improve-ctr, grow-views]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [video-topic-and-title, platform]
optional_inputs: [brand-guidelines, key-frame, competitors]
outputs: [thumbnail-concepts, design-specs, ab-test-plan]
related_skills: [content-production.long-form-video-script, content-production.image-creative-brief, platform.youtube-content]
resources: []
mcp_prompts: [generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [thumbnail, youtube, ctr]
---

## Overview

Creates thumbnail concepts and specs that earn clicks honestly — a clear focal subject/emotion,
minimal legible text, high contrast, and synergy with the title — plus an A/B testing approach,
avoiding clickbait mismatch.

## Business purpose

On video platforms, the thumbnail+title largely determine CTR and therefore reach; small gains
compound.

## When to use / when not to use

- **Use** to design/optimise thumbnails and plan tests.
- **Do not use** clickbait thumbnails that misrepresent the video.

## Inputs

### Required
- Video topic and title, platform.

### Optional
- Brand guidelines, key frame, competitors.

## Outputs

- **Thumbnail concepts** (2–3 distinct directions).
- **Design specs** (focal subject, text, colour, contrast, safe areas).
- An **A/B test plan**.

## Methodology

1. Identify the emotional/visual hook true to the content.
2. Design a clear focal subject; keep on-image text short (3–5 words).
3. Maximise contrast/legibility at small sizes; avoid clutter.
4. Ensure title+thumbnail complement (not duplicate) each other.
5. Plan A/B testing where the platform allows.

## Decision rules

- Thumbnail must match the video (no bait).
- Legible at small size; one clear focal point.
- Complement the title; test variants.

## Quality checklist

- [ ] Clear focal subject + short text.
- [ ] High contrast, legible small.
- [ ] Title synergy + test plan.

## Compliance checklist

- [ ] No misleading/clickbait imagery.
- [ ] Image/likeness rights respected.

## Failure conditions and escalation

- Missing topic/title/platform → `insufficient_data`.

## Examples

- **SaaS:** result/number + expressive face.
- **E-commerce:** product + benefit callout.
- **Real estate:** hero shot + location text.
- **Retail:** product + offer flash.

## KPIs and metrics

CTR (impressions→views), watch-through (bait check), views growth.

## Related skills

`content-production.long-form-video-script`, `content-production.image-creative-brief`,
`platform.youtube-content`.

## MCP mappings

- Prompts: `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
