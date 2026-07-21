---
id: content-production.long-form-video-script
name: Long-Form Video Script
version: 1.0.0
status: stable
description: Write structured long-form video scripts (e.g. YouTube) with a strong hook, retention-focused structure, B-roll/visual cues and honest CTAs.
category: content-production
sub_category: video
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [educate-and-engage, grow-audience]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [topic-or-goal, audience, target-length]
optional_inputs: [brand-voice, key-points, keyword-target]
outputs: [video-script, hook-and-structure, visual-cues]
related_skills: [content-production.video-storyboard, content-production.short-form-video-script, platform.youtube-content]
resources: []
mcp_prompts: [create_content_brief, generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [video, script, youtube]
---

## Overview

Creates a long-form video script engineered for retention: a compelling hook, a promise, logically
sequenced value, pattern interrupts, visual/B-roll cues, and an honest call to action — sized to
the target length and platform.

## Business purpose

Retention drives reach and outcomes on video platforms; a structured script is the biggest lever
on watch time.

## When to use / when not to use

- **Use** to script explainer, educational, review or story videos.
- **Do not use** for misleading titles/claims or clickbait the video doesn't deliver.

## Inputs

### Required
- Topic or goal, audience, target length.

### Optional
- Brand voice, key points, keyword target.

## Outputs

- A **video script** (spoken lines + sections).
- **Hook and structure** (first 15–30s designed for retention).
- **Visual cues** (B-roll, on-screen text, chapters).

## Methodology

1. Define the promise/payoff and target watch outcome.
2. Write a hook (first 15–30s) that states value and creates an open loop.
3. Structure the body for retention: sequence, pattern interrupts, chapters.
4. Add visual/B-roll and on-screen text cues.
5. Close with a genuine CTA (subscribe/next video/offer) matched to the funnel.

## Decision rules

- Hook and title must match the actual payoff.
- Design for retention (open loops, pacing), not padding.
- Keep claims honest; add disclosures where promotional.

## Quality checklist

- [ ] Strong hook + clear promise.
- [ ] Retention-focused structure + visual cues.
- [ ] Honest CTA.

## Compliance checklist

- [ ] No misleading titles/claims; disclose sponsorships.
- [ ] Sources cited; music/footage rights respected.

## Failure conditions and escalation

- Missing topic/audience/length → `insufficient_data`.

## Examples

- **SaaS:** product tutorial / thought-leadership explainer.
- **E-commerce:** review/how-to/unboxing.
- **Real estate:** property tour / market update.
- **Retail:** how-to / behind-the-scenes.

## KPIs and metrics

Average view duration, retention curve, CTR (with thumbnail/title), subscribes, conversions.

## Related skills

`content-production.video-storyboard`, `content-production.short-form-video-script`,
`platform.youtube-content`.

## MCP mappings

- Prompts: `create_content_brief`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
