---
id: platform.facebook-content
name: Facebook Content Playbook
version: 1.0.0
status: stable
description: Plan a Facebook strategy across feed, Reels, Groups and Events — content mix, community building and cadence — suited to the platform's audiences.
category: platform-playbooks
sub_category: facebook
industries: [common, ecommerce, real-estate, retail, saas]
business_models: [b2c, d2c, b2b2c, b2b]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [build-community, drive-engagement]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [brand-goal, audience]
optional_inputs: [existing-performance, local-presence, groups]
outputs: [facebook-strategy, content-mix, community-and-cadence-plan]
related_skills: [content-production.social-caption-writing, content-production.short-form-video-script, community-reputation.reputation-monitoring]
resources: [marketing://channels/catalogue]
mcp_prompts: [social_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [facebook, community, platform]
---

## Overview

Defines a Facebook strategy across surfaces — feed posts, Reels, Groups, Events and local presence
— emphasising community, shareable/relatable content, and consistent cadence for an audience that
skews toward community and local discovery.

## Business purpose

Facebook remains strong for community, local reach, Groups and events; relationship and
share-driven content performs.

## When to use / when not to use

- **Use** to plan an organic Facebook presence (incl. Groups/local).
- **Do not use** engagement-bait or misleading local claims.

## Inputs

### Required
- Brand goal, audience.

### Optional
- Existing performance, local presence, Groups.

## Outputs

- A **Facebook strategy** (goal → surfaces used).
- A **content mix** (feed, Reels, Groups, Events, links).
- A **community and cadence plan** (posting rhythm, Group management, local).

## Methodology

1. Choose the right surfaces for the goal (Page feed, Reels, Groups, Events, local).
2. Prioritise relatable, shareable and community-oriented content.
3. Plan Group/community engagement where relevant (owned community).
4. Set cadence and use Events/local features for local businesses.
5. Monitor reach/engagement and reviews; adjust mix.

## Decision rules

- Community and shares over broadcast.
- Use Groups/Events/local features where they fit.
- Disclose ads; keep local claims accurate.

## Quality checklist

- [ ] Surfaces matched to goal.
- [ ] Community/local plan.
- [ ] Cadence + monitoring.

## Compliance checklist

- [ ] Disclose partnerships; accurate local info.
- [ ] Community standards; rights respected.

## Failure conditions and escalation

- Missing goal/audience → `insufficient_data`.

## Examples

- **E-commerce:** shoppable posts + community Group.
- **Real estate:** listings + local Events + area Group.
- **Retail:** local offers + Events + reviews.
- **SaaS:** community Group + thought-leadership links.

## KPIs and metrics

Reach, engagement, shares, Group growth/activity, event responses, referral clicks.

## Related skills

`content-production.social-caption-writing`, `content-production.short-form-video-script`,
`community-reputation.reputation-monitoring`.

## MCP mappings

- Resources: `marketing://channels/catalogue`
- Prompts: `social_calendar`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
