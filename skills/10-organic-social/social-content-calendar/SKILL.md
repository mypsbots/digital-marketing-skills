---
id: organic-social.social-content-calendar
name: Social Content Calendar
version: 1.0.0
status: stable
description: Build a platform-specific organic social calendar aligned to pillars, cadence and events, ready for approval before publishing.
category: organic-social
sub_category: planning
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, retention]
channels: [organic-social]
objectives: [consistent-posting]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [audience, objective, platforms, cadence]
optional_inputs: [content-pillars, brand-voice]
outputs: [calendar, post-briefs]
related_skills: [organic-social.social-content-pillars, content.editorial-calendar, organic-social.social-repurposing]
resources: []
mcp_prompts: [social_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [organic-social, calendar]
---

## Overview

A concrete posting calendar per platform, mapping pillars to dates, formats and hooks, sized to
capacity and gated by approval before publishing.

## Business purpose

Consistency and planning outperform sporadic posting and reduce last-minute quality drops.

## When to use / when not to use

- **Use** to operationalise organic social.
- **Do not use** to publish without human approval.

## Inputs

### Required
- Audience, objective, platforms, cadence.

### Optional
- Content pillars, brand voice.

## Outputs

- A **calendar** (per platform, dated).
- **Post briefs** (hook, format, message, CTA, asset need).

## Methodology

1. Confirm cadence per platform and realistic capacity.
2. Distribute pillars across the schedule; balance formats.
3. Include timely/seasonal and reactive slots.
4. Draft hooks and CTAs per post.
5. Add an approval step before publishing.

## Decision rules

- Match cadence to capacity and platform algorithm norms.
- Native-format each platform; avoid identical cross-posts.
- Approval required before publishing.

## Quality checklist

- [ ] Sized to capacity.
- [ ] Pillar/format balance.
- [ ] Hooks/CTAs drafted.

## Compliance checklist

- [ ] Disclosures for paid/partnerships.
- [ ] Rights for media.
- [ ] Approval gate before publish.

## Failure conditions and escalation

- Missing cadence/platforms → `insufficient_data`.
- Publishing → requires approval.

## Examples

- **SaaS:** LinkedIn thought-leadership + product tips.
- **E-commerce:** Reels UGC + carousels + offers.
- **Real estate:** listing Reels + area tips.
- **Retail:** in-store + seasonal + community.

## KPIs and metrics

Engagement, reach, growth, clicks, adherence to schedule.

## Related skills

`organic-social.social-content-pillars`, `content.editorial-calendar`,
`organic-social.social-repurposing`.

## MCP mappings

- Prompts: `social_calendar`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
