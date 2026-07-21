---
id: content-production.short-form-video-script
name: Short-Form Video Script
version: 1.0.0
status: stable
description: Write punchy short-form video scripts for Reels, TikTok and Shorts with a 1-3s hook, tight payoff, captions and a clear single takeaway.
category: content-production
sub_category: video
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [maximise-reach, drive-engagement]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [idea-or-message, platform, audience]
optional_inputs: [trend-or-format, brand-voice]
outputs: [short-script, hook-options, caption-and-text-overlays]
related_skills: [content-production.long-form-video-script, organic-social.social-hook-generation, platform.tiktok-content]
resources: []
mcp_prompts: [social_calendar, generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [video, short-form, reels, tiktok, shorts]
---

## Overview

Produces a tight short-form script (typically 15–60s) built around a 1–3 second hook, one clear
takeaway, fast pacing, on-screen text/captions, and a native CTA — adapted to the platform's
format and norms.

## Business purpose

Short-form video is the dominant organic reach engine; the first seconds and a single sharp idea
determine performance.

## When to use / when not to use

- **Use** to script Reels/TikTok/Shorts and short promo clips.
- **Do not use** to force long ideas into short form or to misuse trends dishonestly.

## Inputs

### Required
- Idea or message, platform, audience.

### Optional
- Trend/format, brand voice.

## Outputs

- A **short script** (beat-by-beat with timing).
- **Hook options** (first line/first frame).
- **Caption and text overlays**.

## Methodology

1. Reduce to one takeaway; cut everything else.
2. Write a 1–3s hook (visual + verbal) that stops the scroll honestly.
3. Deliver the payoff fast with tight beats and on-screen text.
4. Design for sound-off viewing (captions/overlays).
5. End with a native CTA (follow/comment/link) fitting the platform.

## Decision rules

- One idea per video; ruthless brevity.
- Hook in the first seconds; caption for sound-off.
- Use trends only where authentic and rights-cleared.

## Quality checklist

- [ ] Single clear takeaway.
- [ ] 1–3s hook + captions.
- [ ] Native CTA.

## Compliance checklist

- [ ] Music/trend audio licensing respected.
- [ ] Disclose promotions; honest claims.

## Failure conditions and escalation

- Missing idea/platform/audience → `insufficient_data`.

## Examples

- **SaaS:** "3-second tip" workflow hack.
- **E-commerce:** quick demo / before-after.
- **Real estate:** 20s property highlight.
- **Retail:** fast product feature / trend.

## KPIs and metrics

Hook rate (3s), average watch/retention, shares/saves, follows.

## Related skills

`content-production.long-form-video-script`, `organic-social.social-hook-generation`,
`platform.tiktok-content`.

## MCP mappings

- Prompts: `social_calendar`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
