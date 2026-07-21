---
id: content.content-repurposing
name: Content Repurposing
version: 1.0.0
status: stable
description: Turn one core content asset into multiple channel-native formats (social, email, video, snippets) to maximise reach and efficiency without duplication issues.
category: content-marketing
sub_category: distribution
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [maximise-reach, improve-efficiency]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [source-asset, target-channels]
optional_inputs: [brand-voice, performance-data]
outputs: [repurposing-map, derivative-assets-briefs]
related_skills: [content.content-distribution-plan, organic-social.social-repurposing, content.editorial-calendar]
resources: []
mcp_prompts: [create_content_brief, generate_marketing_copy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [content, repurposing, distribution]
---

## Overview

Plans how a pillar asset (guide, webinar, report) is atomised into channel-native derivatives —
social posts, email, short video, carousels, snippets — to extend reach and ROI while keeping each
format native rather than copy-paste.

## Business purpose

Repurposing multiplies the return on content investment and sustains presence across channels.

## When to use / when not to use

- **Use** to extend a strong core asset across channels.
- **Do not use** to spam identical content or create thin duplicate pages.

## Inputs

### Required
- Source asset, target channels.

### Optional
- Brand voice, performance data.

## Outputs

- A **repurposing map** (source → derivative formats per channel).
- **Derivative briefs** with format-native adaptations.

## Methodology

1. Extract the atomic ideas/quotes/data from the source asset.
2. Match ideas to channels and native formats (thread, carousel, short, email, snippet).
3. Adapt tone/length/format per channel (not copy-paste).
4. Sequence releases to sustain presence; add canonical/links back to the core asset.
5. Prioritise repurposing of proven high-performers.

## Decision rules

- Make each derivative native to its channel.
- Avoid duplicate-content/thin-page issues (canonical, link back).
- Prioritise repurposing proven winners.

## Quality checklist

- [ ] Core ideas atomised.
- [ ] Channel-native adaptations.
- [ ] Links back to source; no duplication issues.

## Compliance checklist

- [ ] Rights to reuse assets/quotes.
- [ ] Claims remain substantiated across formats.

## Failure conditions and escalation

- Missing source/channels → `insufficient_data`.

## Examples

- **SaaS:** report → LinkedIn carousel + email + webinar clip.
- **E-commerce:** guide → shorts + email + PDP snippets.
- **Real estate:** market update → reel + email + post.
- **Retail:** how-to → social video + in-store signage copy.

## KPIs and metrics

Reach/engagement per derivative, efficiency (outputs per source), assisted conversions.

## Related skills

`content.content-distribution-plan`, `organic-social.social-repurposing`,
`content.editorial-calendar`.

## MCP mappings

- Prompts: `create_content_brief`, `generate_marketing_copy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
