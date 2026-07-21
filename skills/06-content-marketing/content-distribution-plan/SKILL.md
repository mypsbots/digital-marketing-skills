---
id: content.content-distribution-plan
name: Content Distribution Plan
version: 1.0.0
status: stable
description: Plan how each content asset is distributed and repurposed across owned, earned and paid channels to maximise reach and ROI.
category: content-marketing
sub_category: distribution
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [maximise-reach, improve-content-roi]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [content-assets, audience, channels]
optional_inputs: [budget, historical-performance]
outputs: [distribution-matrix, repurposing-plan, cadence]
related_skills: [content.content-strategy, content.content-repurposing, organic-social.social-repurposing]
resources: [marketing://channels/catalogue]
mcp_prompts: [create_content_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [distribution, repurposing, content]
---

## Overview

Ensures every asset earns its keep by being distributed and repurposed across multiple
channels and formats, rather than published once and forgotten.

## Business purpose

Distribution, not creation, is usually the constraint on content ROI.

## When to use / when not to use

- **Use** alongside the editorial calendar.
- **Do not use** to justify spammy cross-posting without adaptation.

## Inputs

### Required
- Content assets, audience, channels.

### Optional
- Budget, historical performance.

## Outputs

- A **distribution matrix** (asset × channel × format).
- A **repurposing plan** (one asset → many derivatives).
- A **cadence** for reshare and amplification.

## Methodology

1. For each hero asset, list derivative formats (social, email, video, snippets).
2. Map derivatives to channels and audience fit.
3. Decide owned/earned/paid amplification per asset.
4. Set a reshare cadence for evergreen assets.
5. Attach tracking (UTMs) and KPIs per channel.

## Decision rules

- Adapt to each channel's native format; do not copy-paste.
- Amplify proven assets with paid; do not amplify weak content.
- Reshare evergreen deliberately.

## Quality checklist

- [ ] Each asset has multiple derivatives.
- [ ] Channel-native adaptation planned.
- [ ] Tracking attached.

## Compliance checklist

- [ ] Rights cleared for reused assets/images.
- [ ] Platform policy fit per channel.

## Failure conditions and escalation

- Missing assets/channels → `insufficient_data`.

## Examples

- **SaaS:** webinar → clips, blog, email, LinkedIn carousel.
- **E-commerce:** UGC video → Reels, ads, PDP, email.
- **Real estate:** property video → Reels, portal, email alert.
- **Retail:** in-store event → social, local listing, email.

## KPIs and metrics

Reach, engagement per channel, assisted conversions, content ROI.

## Related skills

`content.content-strategy`, `content.content-repurposing`, `organic-social.social-repurposing`.

## MCP mappings

- Resources: `marketing://channels/catalogue`
- Prompts: `create_content_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
