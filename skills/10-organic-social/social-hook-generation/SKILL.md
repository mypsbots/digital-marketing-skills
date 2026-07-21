---
id: organic-social.social-hook-generation
name: Social Hook Generation
version: 1.0.0
status: stable
description: Generate strong opening hooks for organic social posts and short video that stop the scroll and set up the payoff, matched to platform and audience.
category: organic-social
sub_category: creative
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [increase-reach, improve-engagement]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [topic-or-post-idea, platform, audience]
optional_inputs: [format, brand-voice]
outputs: [hook-variants, format-notes]
related_skills: [organic-social.social-content-pillars, organic-social.social-content-calendar, paid-social.hook-generation]
resources: []
mcp_prompts: [social_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [organic-social, hooks, creative]
---

## Overview

Creates opening lines/first-frame hooks for organic posts, threads and short video that earn the
first few seconds of attention and promise a clear payoff — tuned to each platform's norms and the
target audience.

## Business purpose

On algorithmic feeds, the hook drives reach; strong openings lift watch time, saves and shares.

## When to use / when not to use

- **Use** to open organic posts/videos strongly.
- **Do not use** misleading hooks that don't deliver, or engagement-bait that platforms penalise.

## Inputs

### Required
- Topic or post idea, platform, audience.

### Optional
- Format, brand voice.

## Outputs

- **Hook variants** across angles.
- **Format notes** (platform-native adaptation).

## Methodology

1. Identify the value/payoff the post delivers.
2. Generate hooks: question, bold claim, story open, contrarian, list promise, relatable pain.
3. Adapt to platform norms (first line vs first frame vs caption).
4. Ensure the hook honestly sets up the payoff.
5. Provide diverse options to test organically.

## Decision rules

- Hook must match the actual payoff.
- Native to platform and audience.
- No engagement-bait or misleading openers.

## Quality checklist

- [ ] Multiple angles.
- [ ] Platform-native.
- [ ] Honest setup for payoff.

## Compliance checklist

- [ ] No misleading claims/engagement-bait.
- [ ] Disclosure where content is promotional.

## Failure conditions and escalation

- Missing topic/platform/audience → `insufficient_data`.

## Examples

- **SaaS:** "3 mistakes killing your activation rate".
- **E-commerce:** "Watch this before you buy [product]".
- **Real estate:** "What £X buys in [area] right now".
- **Retail:** "New in this week — quick look".

## KPIs and metrics

Reach, 3s/retention, saves, shares, engagement rate.

## Related skills

`organic-social.social-content-pillars`, `organic-social.social-content-calendar`,
`paid-social.hook-generation`.

## MCP mappings

- Prompts: `social_calendar`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
