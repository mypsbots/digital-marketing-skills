---
id: organic-social.social-repurposing
name: Social Repurposing
version: 1.0.0
status: stable
description: Repurpose long-form and cross-platform content into native organic social posts and clips, adapting format and hook per platform to extend reach.
category: organic-social
sub_category: distribution
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [maximise-reach, improve-efficiency]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [source-content, target-platforms]
optional_inputs: [brand-voice, performance-data]
outputs: [repurposing-map, native-post-briefs]
related_skills: [content.content-repurposing, organic-social.social-content-calendar, organic-social.social-hook-generation]
resources: []
mcp_prompts: [social_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [organic-social, repurposing, distribution]
---

## Overview

Turns existing content (blogs, webinars, long video, top posts) into platform-native organic
social — reformatting and re-hooking per platform rather than cross-posting identical content.

## Business purpose

Repurposing sustains an organic presence efficiently and gives strong ideas multiple lives.

## When to use / when not to use

- **Use** to extend proven content across social platforms.
- **Do not use** to cross-post identical content ignoring platform norms.

## Inputs

### Required
- Source content, target platforms.

### Optional
- Brand voice, performance data.

## Outputs

- A **repurposing map** (source → platform-native formats).
- **Native post briefs** (hook, format, caption, CTA per platform).

## Methodology

1. Extract the strongest ideas/quotes/clips from the source.
2. Match each to a platform and native format.
3. Re-hook and reformat per platform (aspect ratio, length, caption style).
4. Sequence posting to avoid duplication fatigue.
5. Prioritise repurposing proven high-performers.

## Decision rules

- Native format per platform, not copy-paste.
- Re-hook for each platform's feed.
- Prioritise proven winners.

## Quality checklist

- [ ] Ideas atomised.
- [ ] Platform-native adaptation.
- [ ] Sequenced without fatigue.

## Compliance checklist

- [ ] Rights to reuse content/media.
- [ ] Disclosure on promotional content.

## Failure conditions and escalation

- Missing source/platforms → `insufficient_data`.

## Examples

- **SaaS:** webinar → LinkedIn clips + carousel.
- **E-commerce:** guide → reels + stories.
- **Real estate:** listing video → shorts + posts.
- **Retail:** how-to → platform-native clips.

## KPIs and metrics

Reach/engagement per platform, output efficiency, follower growth.

## Related skills

`content.content-repurposing`, `organic-social.social-content-calendar`,
`organic-social.social-hook-generation`.

## MCP mappings

- Prompts: `social_calendar`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
