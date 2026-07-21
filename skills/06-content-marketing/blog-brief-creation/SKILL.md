---
id: content.blog-brief-creation
name: Blog Brief Creation
version: 1.0.0
status: stable
description: Produce a writer-ready blog brief with target query, search intent, audience, outline, key points, sources, internal links and success criteria.
category: content-marketing
sub_category: briefs
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [rank-and-inform, drive-organic-traffic]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [topic-or-target-query, audience]
optional_inputs: [keyword-data, competitors, brand-voice]
outputs: [blog-brief, outline, internal-link-plan]
related_skills: [seo.content-brief-creation, seo.search-intent-analysis, content.editorial-calendar]
resources: []
mcp_prompts: [create_content_brief]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [content, brief, blog]
---

## Overview

Creates a comprehensive blog brief so a writer can produce accurate, on-intent, on-brand content
in one pass — covering target query, intent, audience, angle, outline, must-cover points, sources,
internal links and success criteria.

## Business purpose

Good briefs raise content quality and consistency and reduce rewrite cycles.

## When to use / when not to use

- **Use** to brief a blog article before writing.
- **Do not use** to instruct fabrication of facts or plagiarism.

## Inputs

### Required
- Topic or target query, audience.

### Optional
- Keyword data, competitors, brand voice.

## Outputs

- A **blog brief** (query, intent, audience, angle, word-count guide).
- A **structured outline** with must-cover points.
- An **internal-link plan** and sources.

## Methodology

1. Confirm the target query and search intent; define the audience and their question.
2. Set the angle/differentiation vs ranking pages.
3. Build an outline (H2/H3) covering the intent completely (topical coverage).
4. Specify must-cover points, required sources, and E-E-A-T signals.
5. Add internal links, meta guidance, and success criteria.

## Decision rules

- Match structure to search intent; cover the topic fully.
- Require credible sources; no fabrication.
- Include internal links to relevant cluster pages.

## Quality checklist

- [ ] Intent + audience defined.
- [ ] Complete outline with key points.
- [ ] Sources + internal links specified.

## Compliance checklist

- [ ] Sources cited; no plagiarism/fabrication.
- [ ] Claims substantiated where regulated.

## Failure conditions and escalation

- Missing topic/audience → `insufficient_data`.

## Examples

- **SaaS:** "how to measure activation" pillar support.
- **E-commerce:** buying guide for a category.
- **Real estate:** neighbourhood/area guide.
- **Retail:** seasonal how-to/gift guide.

## KPIs and metrics

Rankings, organic traffic, engagement, assisted conversions.

## Related skills

`seo.content-brief-creation`, `seo.search-intent-analysis`, `content.editorial-calendar`.

## MCP mappings

- Prompts: `create_content_brief`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
