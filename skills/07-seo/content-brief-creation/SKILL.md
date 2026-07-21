---
id: seo.content-brief-creation
name: SEO Content Brief Creation
version: 1.0.0
status: stable
description: Create SEO content briefs that specify intent, structure, entities, links and quality criteria so writers produce competitive content.
category: seo
sub_category: briefs
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
channels: [organic-search, content]
objectives: [enable-quality-content]
risk_level: low
execution_mode: generation
human_approval_required: false
estimated_duration: hours
required_inputs: [target-keyword-cluster, audience]
optional_inputs: [serp-analysis, brand-voice]
outputs: [content-brief]
related_skills: [seo.on-page-seo-audit, content.blog-brief-creation, seo.search-intent-analysis]
resources: []
mcp_prompts: [seo_content_cluster]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, brief, content]
---

## Overview

A precise brief that tells a writer exactly what a page must cover to satisfy intent and
compete, without dictating fluff or keyword stuffing.

## Business purpose

Good briefs raise content quality and consistency and reduce revision cycles.

## When to use / when not to use

- **Use** before writing any SEO-targeted page.
- **Do not use** to prescribe keyword density or unnatural phrasing.

## Inputs

### Required
- Target keyword cluster, audience.

### Optional
- SERP analysis, brand voice.

## Outputs

- A **content brief** conforming to the content-brief schema (title, intent, primary/secondary
  keywords, outline, entities, internal links, proof needs, CTA, word-count target, locale).

## Methodology

1. Confirm the dominant intent and content type from the SERP.
2. Define the angle and unique value vs current top results.
3. Specify an outline (H2/H3), key entities/subtopics to cover.
4. List required proof/sources, internal links and the CTA.
5. Set tone, locale and a realistic length target.
6. Add quality and fact-checking criteria.

## Decision rules

- Match content type to intent; do not force a format.
- Require sources for claims and statistics.
- Prioritise helpfulness and completeness over length.

## Quality checklist

- [ ] Intent and content type correct.
- [ ] Outline and entities specified.
- [ ] Internal links and CTA defined.
- [ ] Sources required for claims.

## Compliance checklist

- [ ] Fact-checking and citation required.
- [ ] Accessibility guidance included.
- [ ] AI-assisted drafts flagged for human review.

## Failure conditions and escalation

- No cluster/audience → `insufficient_data`.

## Examples

- **SaaS:** how-to brief with steps, screenshots and internal links to feature pages.
- **E-commerce:** buying-guide brief with comparison table.
- **Real estate:** area-guide brief with local data points.
- **Retail:** occasion-guide brief with product links.

## KPIs and metrics

Content quality score, ranking/traffic (directional), conversions.

## Related skills

`seo.on-page-seo-audit`, `content.blog-brief-creation`, `seo.search-intent-analysis`.

## MCP mappings

- Prompts: `seo_content_cluster`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
