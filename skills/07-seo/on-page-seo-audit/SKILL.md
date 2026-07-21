---
id: seo.on-page-seo-audit
name: On-Page SEO Audit
version: 1.0.0
status: stable
description: Evaluate how well pages match search intent through content, titles, headings, internal links and structure.
category: seo
sub_category: on-page
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
channels: [organic-search]
objectives: [improve-relevance, improve-rankings-likelihood]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: days
required_inputs: [pages-or-templates, target-keywords]
optional_inputs: [search-console-data, serp-data]
outputs: [page-findings, optimisation-recommendations]
related_skills: [seo.seo-audit, seo.search-intent-analysis, seo.content-brief-creation]
resources: []
mcp_prompts: [seo_audit]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, on-page]
---

## Overview

Assesses page-level relevance and quality against the intent behind target queries, with
concrete optimisation recommendations.

## Business purpose

Well-optimised pages convert search demand into traffic and conversions; poor intent-match wastes it.

## When to use / when not to use

- **Use** for priority pages/templates or before publishing.
- **Do not use** to keyword-stuff or over-optimise.

## Inputs

### Required
- Pages/templates, target keywords.

### Optional
- Search Console data, SERP data.

## Outputs

- **Page findings** vs intent and competitors.
- **Optimisation recommendations** (content, titles, headings, links, media).

## Methodology

1. Classify the dominant intent per target query.
2. Compare the page's content type/depth to what ranks.
3. Review title/meta for relevance and CTR; headings for structure; internal links for support.
4. Check media (alt text), readability and helpfulness.
5. Identify cannibalisation with other pages.
6. Recommend specific, prioritised changes.

## Decision rules

- Match content type to intent (e.g. commercial vs informational).
- Write for humans first; avoid keyword stuffing.
- Consolidate cannibalising pages rather than competing with yourself.

## Quality checklist

- [ ] Intent classified and matched.
- [ ] Titles/headings/links reviewed.
- [ ] Cannibalisation checked.
- [ ] Recommendations specific and prioritised.

## Compliance checklist

- [ ] Claims fact-checked and cited.
- [ ] Accessibility (alt text, structure) addressed.

## Failure conditions and escalation

- No pages/keywords → `insufficient_data`.

## Examples

- **SaaS:** feature page targeting informational query → add educational content or split intent.
- **E-commerce:** category page thin vs competitors → add guidance and internal links.
- **Real estate:** location page lacks local specifics → enrich.
- **Retail:** store page missing local intent signals → optimise.

## KPIs and metrics

Impressions/clicks (Search Console), position (directional), engaged sessions, conversions.

## Related skills

`seo.seo-audit`, `seo.search-intent-analysis`, `seo.content-brief-creation`.

## MCP mappings

- Prompts: `seo_audit`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
