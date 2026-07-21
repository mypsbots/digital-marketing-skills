---
id: platform.youtube-content
name: YouTube Content Playbook
version: 1.0.0
status: stable
description: Plan a YouTube content strategy across long-form and Shorts — packaging (title/thumbnail), retention, SEO, cadence and channel growth, honestly.
category: platform-playbooks
sub_category: youtube
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [grow-audience, drive-consideration]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [channel-goal, audience]
optional_inputs: [existing-channel-data, competitors, resources]
outputs: [youtube-strategy, content-pillars-and-formats, packaging-and-seo-plan]
related_skills: [content-production.long-form-video-script, content-production.thumbnail-optimisation, content-production.short-form-video-script]
resources: [marketing://channels/catalogue]
mcp_prompts: [social_calendar, create_content_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [youtube, video, platform]
---

## Overview

Defines a YouTube strategy: content pillars and formats (long-form, Shorts, live), packaging
(title + thumbnail as the click driver), retention-first structure, YouTube SEO
(title/description/tags/chapters), publishing cadence, and channel-growth mechanics — all honest to
the content.

## Business purpose

YouTube is a search + discovery + retention engine with long content shelf life; packaging and
retention drive compounding reach.

## When to use / when not to use

- **Use** to plan or grow a YouTube channel/content mix.
- **Do not use** for clickbait/misleading packaging or copyright-infringing content.

## Inputs

### Required
- Channel goal, audience.

### Optional
- Existing channel data, competitors, resources.

## Outputs

- A **YouTube strategy** (goal → pillars → formats).
- **Content pillars and formats** (long-form vs Shorts roles).
- A **packaging and SEO plan** (titles, thumbnails, metadata, cadence).

## Methodology

1. Set the channel goal and audience; define 3–5 content pillars.
2. Balance long-form (depth/retention/search) with Shorts (discovery/top-of-funnel).
3. Prioritise packaging: title + thumbnail concepts before production.
4. Optimise YouTube SEO: titles, descriptions, chapters, tags, playlists.
5. Set a sustainable cadence and review retention/CTR to iterate.

## Decision rules

- Packaging (title/thumbnail) is the top CTR lever — but must match content.
- Optimise for retention, not just views.
- Use Shorts for discovery, long-form for depth/conversion.

## Quality checklist

- [ ] Pillars + format roles defined.
- [ ] Packaging + SEO plan.
- [ ] Sustainable cadence + review loop.

## Compliance checklist

- [ ] No misleading packaging; disclose sponsorships.
- [ ] Music/footage rights; community guidelines respected.

## Failure conditions and escalation

- Missing goal/audience → `insufficient_data`.

## Examples

- **SaaS:** tutorials + thought-leadership + Shorts tips.
- **E-commerce:** reviews/how-to + Shorts demos.
- **Real estate:** property tours + market updates.
- **Retail:** how-to + behind-the-scenes.

## KPIs and metrics

CTR, average view duration/retention, watch time, subscribers, conversions.

## Related skills

`content-production.long-form-video-script`, `content-production.thumbnail-optimisation`,
`content-production.short-form-video-script`.

## MCP mappings

- Resources: `marketing://channels/catalogue`
- Prompts: `social_calendar`, `create_content_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
