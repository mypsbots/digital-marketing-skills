---
id: content.editorial-calendar
name: Editorial Calendar
version: 1.0.0
status: stable
description: Plan a time-boxed editorial calendar aligned to pillars, channels, cadence, owners and KPIs.
category: content-marketing
sub_category: planning
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision, retention]
objectives: [organise-production, ensure-cadence]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [audience, objective, channels, cadence]
optional_inputs: [pillars, seasonal-events, resources]
outputs: [calendar, owners, kpis]
related_skills: [content.content-strategy, content.content-distribution-plan, organic-social.social-content-calendar]
resources: []
mcp_prompts: [create_content_calendar]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [calendar, editorial, planning]
---

## Overview

A realistic production calendar mapping topics to dates, channels, formats, owners and KPIs,
sized to actual capacity.

## Business purpose

Turns strategy into consistent output and prevents last-minute, low-quality publishing.

## When to use / when not to use

- **Use** to operationalise a content strategy.
- **Do not use** to over-commit beyond capacity.

## Inputs

### Required
- Audience, objective, channels, cadence.

### Optional
- Pillars, seasonal events, resources/capacity.

## Outputs

- A **calendar** (e.g. 90 days) with topics, formats, channels, dates.
- **Owners** per item.
- **KPIs** per item/cadence.

## Methodology

1. Confirm capacity; size the calendar to it.
2. Distribute topics across pillars and funnel stages.
3. Map seasonal/industry events and product moments.
4. Assign formats, channels, owners and due dates (allow buffers).
5. Attach KPIs and a review cadence.

## Decision rules

- Do not schedule more than capacity can deliver to standard.
- Balance evergreen and timely content.
- Reserve slots for reactive/opportunistic content.

## Quality checklist

- [ ] Sized to capacity with buffers.
- [ ] Pillar and funnel balance.
- [ ] Owners and KPIs assigned.

## Compliance checklist

- [ ] Review/fact-check steps scheduled before publish.
- [ ] Approval gate before publishing.

## Failure conditions and escalation

- Missing cadence/capacity → `insufficient_data`.

## Examples

- **SaaS:** weekly pillar article + repurposed social + monthly webinar.
- **E-commerce:** seasonal guides + weekly UGC + product drops.
- **Real estate:** weekly area content + monthly market update.
- **Retail:** seasonal promo content + weekly local posts.

## KPIs and metrics

Publish adherence, engagement, assisted conversions.

## Related skills

`content.content-strategy`, `content.content-distribution-plan`,
`organic-social.social-content-calendar`.

## MCP mappings

- Prompts: `create_content_calendar`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
