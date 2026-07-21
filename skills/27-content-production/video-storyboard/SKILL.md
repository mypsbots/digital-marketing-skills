---
id: content-production.video-storyboard
name: Video Storyboard
version: 1.0.0
status: stable
description: Turn a video script into a shot-by-shot storyboard (scenes, visuals, camera, on-screen text, audio) to guide efficient, on-brand production.
category: content-production
sub_category: video
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [enable-production, ensure-consistency]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [script-or-concept]
optional_inputs: [brand-guidelines, format, assets-available]
outputs: [storyboard, shot-list, asset-and-audio-plan]
related_skills: [content-production.long-form-video-script, content-production.short-form-video-script, content-production.thumbnail-optimisation]
resources: []
mcp_prompts: [create_content_brief]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [video, storyboard, production]
---

## Overview

Converts a script/concept into a shot-by-shot plan — scene, visual description, camera/framing,
on-screen text, and audio/music cues — plus a shot list and asset plan, so production is efficient
and on-brand.

## Business purpose

A storyboard reduces reshoots and cost and keeps output consistent with brand and platform format.

## When to use / when not to use

- **Use** to plan production before filming/editing.
- **Do not use** to plan shots that misrepresent product/results.

## Inputs

### Required
- Script or concept.

### Optional
- Brand guidelines, format, assets available.

## Outputs

- A **storyboard** (scene → visual → camera → text → audio).
- A **shot list**.
- An **asset and audio plan** (footage, graphics, music).

## Methodology

1. Break the script into scenes/beats.
2. Describe each shot: visual, framing/camera, on-screen text, transition.
3. Map audio: VO, music, SFX (with licensing).
4. Set aspect ratio/format per platform (9:16, 16:9, 1:1).
5. Produce a shot list and note required assets/graphics.

## Decision rules

- Match aspect ratio/pacing to the target platform.
- Design for sound-off (captions/text) where relevant.
- Plan only truthful, rights-cleared visuals.

## Quality checklist

- [ ] Scene-by-scene visuals + camera.
- [ ] Audio/music plan with licensing.
- [ ] Correct aspect ratio + shot list.

## Compliance checklist

- [ ] Footage/music/talent rights and releases.
- [ ] No misleading visual claims.

## Failure conditions and escalation

- Missing script/concept → `insufficient_data`.

## Examples

- **SaaS:** screen-capture + talking-head explainer board.
- **E-commerce:** product hero + lifestyle shots.
- **Real estate:** walkthrough shot sequence.
- **Retail:** in-store + product close-ups.

## KPIs and metrics

Production efficiency (reshoots), on-brand consistency, downstream video KPIs.

## Related skills

`content-production.long-form-video-script`, `content-production.short-form-video-script`,
`content-production.thumbnail-optimisation`.

## MCP mappings

- Prompts: `create_content_brief`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
