---
id: content-production.podcast-episode-planning
name: Podcast Episode Planning
version: 1.0.0
status: stable
description: Plan a podcast episode (audio/video) with topic, structure, talking points or interview questions, hooks, and repurposing into clips and show notes.
category: content-production
sub_category: audio
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [build-authority, grow-audience]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours
required_inputs: [topic-or-guest, audience]
optional_inputs: [format, brand-voice, key-messages]
outputs: [episode-outline, talking-points-or-questions, repurposing-and-show-notes]
related_skills: [content-production.long-form-video-script, content.content-repurposing, content-production.social-caption-writing]
resources: []
mcp_prompts: [create_content_brief]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [podcast, audio, content]
---

## Overview

Plans a podcast episode end-to-end: angle and hook, segment structure, talking points or interview
questions, intro/outro and CTA, plus a repurposing plan into clips, show notes and social — for
audio or video podcasts.

## Business purpose

Podcasts build authority and deep relationships; planning improves listenability and multiplies
value via repurposing.

## When to use / when not to use

- **Use** to plan solo/interview/panel episodes and their repurposing.
- **Do not use** to fabricate endorsements or omit sponsorship disclosure.

## Inputs

### Required
- Topic or guest, audience.

### Optional
- Format, brand voice, key messages.

## Outputs

- An **episode outline** (segments + timing).
- **Talking points or interview questions**.
- A **repurposing plan** (clips, show notes, quotes) and intro/outro/CTA.

## Methodology

1. Define the angle and listener takeaway; write a hook cold-open.
2. Structure segments (intro, body segments, Q&A, close) with timing.
3. Draft talking points or interview questions that progress logically.
4. Plan intro/outro, sponsor reads (disclosed), and CTA.
5. Plan repurposing: clip moments, show notes, quote graphics, social captions.

## Decision rules

- Lead with a hook; structure for listenability.
- Disclose sponsorships; verify guest claims.
- Plan repurposing before recording.

## Quality checklist

- [ ] Clear angle + hook.
- [ ] Structured segments + questions.
- [ ] Repurposing + show notes plan.

## Compliance checklist

- [ ] Sponsor disclosure; music/clip licensing.
- [ ] Guest consent; claims verified.

## Failure conditions and escalation

- Missing topic/guest/audience → `insufficient_data`.

## Examples

- **SaaS:** expert interview on a category trend.
- **E-commerce:** founder/brand story episode.
- **Real estate:** local market Q&A.
- **Retail:** category trends discussion.

## KPIs and metrics

Downloads/plays, completion rate, clip reach, subscriber growth.

## Related skills

`content-production.long-form-video-script`, `content.content-repurposing`,
`content-production.social-caption-writing`.

## MCP mappings

- Prompts: `create_content_brief`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
