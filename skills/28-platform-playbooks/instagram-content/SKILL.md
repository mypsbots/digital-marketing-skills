---
id: platform.instagram-content
name: Instagram Content Playbook
version: 1.0.0
status: stable
description: Plan an Instagram strategy across Reels, carousels, Stories and feed — formats, hooks, cadence, hashtags and engagement — matched to goals and audience.
category: platform-playbooks
sub_category: instagram
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2c, d2c, b2b2c, b2b]
funnel_stages: [awareness, consideration, decision]
objectives: [grow-audience, drive-engagement]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [brand-goal, audience]
optional_inputs: [existing-performance, competitors, brand-guidelines]
outputs: [instagram-strategy, format-mix, cadence-and-engagement-plan]
related_skills: [content-production.carousel-creation, content-production.short-form-video-script, content-production.social-caption-writing]
resources: [marketing://channels/catalogue]
mcp_prompts: [social_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [instagram, reels, carousel, platform]
---

## Overview

Defines an Instagram strategy across formats — Reels (reach), carousels (saves/education), Stories
(engagement/community), feed posts (brand) — with hooks, hashtags, cadence and engagement tactics
matched to the goal.

## Business purpose

Instagram blends discovery (Reels/Explore) and relationship (Stories); a balanced format mix serves
both reach and retention.

## When to use / when not to use

- **Use** to plan an Instagram content mix and cadence.
- **Do not use** engagement-bait, hashtag stuffing, or undisclosed promotions.

## Inputs

### Required
- Brand goal, audience.

### Optional
- Existing performance, competitors, brand guidelines.

## Outputs

- An **Instagram strategy** (goal → format roles).
- A **format mix** (Reels/carousels/Stories/feed with purpose each).
- A **cadence and engagement plan** (posting rhythm, hashtags, Stories/DM engagement).

## Methodology

1. Assign each format a job: Reels=reach, carousels=saves/education, Stories=community, feed=brand.
2. Define content pillars and hook approach per format.
3. Set a realistic cadence across formats.
4. Plan hashtags (relevant, right-sized) and SEO-friendly captions.
5. Plan active engagement (Stories interactions, replies, DMs) and review saves/reach.

## Decision rules

- Reels for reach; carousels for saves; Stories for relationships.
- Native, value-first content; relevant hashtags only.
- Disclose ads; accessible captions/alt text.

## Quality checklist

- [ ] Format roles + pillars.
- [ ] Cadence + hashtag approach.
- [ ] Engagement plan.

## Compliance checklist

- [ ] Disclose partnerships (#ad).
- [ ] Music/image rights; no bait.

## Failure conditions and escalation

- Missing goal/audience → `insufficient_data`.

## Examples

- **SaaS:** educational carousels + Reels tips.
- **E-commerce:** shoppable Reels + product carousels.
- **Real estate:** listing Reels + area carousels + Stories Q&A.
- **Retail:** product Reels + Stories offers.

## KPIs and metrics

Reach, saves/shares, Reels plays/retention, follower growth, profile taps/link clicks.

## Related skills

`content-production.carousel-creation`, `content-production.short-form-video-script`,
`content-production.social-caption-writing`.

## MCP mappings

- Resources: `marketing://channels/catalogue`
- Prompts: `social_calendar`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
