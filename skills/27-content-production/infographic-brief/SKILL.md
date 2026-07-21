---
id: content-production.infographic-brief
name: Infographic Brief
version: 1.0.0
status: stable
description: Brief an infographic that communicates data or a process clearly — narrative, accurate data, visual hierarchy, accessibility and honest visualisation.
category: content-production
sub_category: visual
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [educate, earn-links-and-shares]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [topic-and-data-or-process, audience]
optional_inputs: [brand-guidelines, sources]
outputs: [infographic-brief, content-and-data-plan, design-direction]
related_skills: [content-production.image-creative-brief, content-production.carousel-creation, offer-and-messaging.claim-substantiation-checklist]
resources: []
mcp_prompts: [create_content_brief]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [infographic, visual, data]
---

## Overview

Specifies an infographic that turns data or a process into a clear visual story — with a narrative
arc, accurate and sourced data, honest chart choices, visual hierarchy, and accessibility — ready
for a designer.

## Business purpose

Well-made infographics earn shares/links and explain complex ideas fast; misleading visuals damage
trust.

## When to use / when not to use

- **Use** to brief data/process infographics.
- **Do not use** to distort scales/axes or present unsourced data as fact.

## Inputs

### Required
- Topic and data or process, audience.

### Optional
- Brand guidelines, sources.

## Outputs

- An **infographic brief** (goal, narrative, key takeaway).
- A **content and data plan** (data points + honest chart types + sources).
- **Design direction** (layout, hierarchy, colour, accessibility).

## Methodology

1. Define the single takeaway and narrative flow.
2. Select and verify data; cite sources; choose honest chart types.
3. Sequence sections for a clear visual story.
4. Set hierarchy, colour and typography; ensure accessibility (contrast, alt text).
5. Provide the designer specs and a fact-check note.

## Decision rules

- Accurate, sourced data; no distorted scales/axes.
- One clear takeaway; hierarchy guides the eye.
- Accessible and brand-consistent.

## Quality checklist

- [ ] Clear takeaway + narrative.
- [ ] Accurate, sourced, honest charts.
- [ ] Accessible design specs.

## Compliance checklist

- [ ] Data cited; claims substantiated.
- [ ] Icon/image/data-source licensing.

## Failure conditions and escalation

- Missing topic/data → `insufficient_data`.

## Examples

- **SaaS:** industry benchmark infographic.
- **E-commerce:** "how it's made" process.
- **Real estate:** local market stats.
- **Retail:** seasonal trend data.

## KPIs and metrics

Shares, backlinks, dwell, referral traffic.

## Related skills

`content-production.image-creative-brief`, `content-production.carousel-creation`,
`offer-and-messaging.claim-substantiation-checklist`.

## MCP mappings

- Prompts: `create_content_brief`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
