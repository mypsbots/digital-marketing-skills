---
id: platform.linkedin-content
name: LinkedIn Content Playbook
version: 1.0.0
status: stable
description: Plan a LinkedIn strategy across personal, company and thought-leadership content — formats, hooks, cadence and engagement — for B2B reach and authority.
category: platform-playbooks
sub_category: linkedin
industries: [common, saas, real-estate, retail]
business_models: [b2b, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [build-authority, generate-demand]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [goal, audience]
optional_inputs: [personal-brands, company-page-data, competitors]
outputs: [linkedin-strategy, content-formats, cadence-and-engagement-plan]
related_skills: [content-production.carousel-creation, content-production.social-caption-writing, account-based-marketing.account-tiering]
resources: [marketing://channels/catalogue]
mcp_prompts: [social_calendar, create_content_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [linkedin, b2b, thought-leadership]
---

## Overview

Defines a LinkedIn strategy balancing personal profiles (highest reach), the company page (brand),
and thought-leadership — with text posts, document carousels, native video, and engagement tactics
tuned for professional, B2B audiences.

## Business purpose

LinkedIn is the primary B2B social channel for authority, demand generation and ABM support;
personal-led content drives the most reach.

## When to use / when not to use

- **Use** to plan B2B/professional content and thought leadership.
- **Do not use** spammy automation, mass connect-and-pitch, or engagement pods/bait.

## Inputs

### Required
- Goal, audience.

### Optional
- Personal brands, company-page data, competitors.

## Outputs

- A **LinkedIn strategy** (personal + company + thought-leadership roles).
- **Content formats** (text posts, document carousels, video, newsletters).
- A **cadence and engagement plan** (posting rhythm, commenting strategy).

## Methodology

1. Prioritise personal/leader profiles for reach; use the company page for brand/proof.
2. Define thought-leadership pillars (insights, POV, stories, data).
3. Write strong first-line hooks (before "see more"); favour native text/documents/video.
4. Set cadence and a proactive commenting/engagement routine.
5. Align with ABM/demand goals; measure reach, engagement and inbound.

## Decision rules

- Personal profiles > company page for reach — invest in both.
- Value/insight-led, native content; no external-link penalties ignored.
- No spam automation or pods; disclose promotions.

## Quality checklist

- [ ] Personal/company/thought-leadership roles.
- [ ] Hook-led native formats.
- [ ] Cadence + engagement routine.

## Compliance checklist

- [ ] Disclose sponsorships; honest claims/credentials.
- [ ] Respect platform automation policies; data lawful.

## Failure conditions and escalation

- Missing goal/audience → `insufficient_data`.

## Examples

- **SaaS:** founder POV posts + customer-proof + document carousels.
- **B2B services:** expert insights + case snapshots.
- **Real estate (commercial):** market analysis posts.
- **Retail (B2B/wholesale):** trade insights.

## KPIs and metrics

Impressions/reach, engagement rate, follower/connection growth, profile views, inbound leads.

## Related skills

`content-production.carousel-creation`, `content-production.social-caption-writing`,
`account-based-marketing.account-tiering`.

## MCP mappings

- Resources: `marketing://channels/catalogue`
- Prompts: `social_calendar`, `create_content_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
