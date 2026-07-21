---
id: seo.keyword-discovery
name: Keyword Discovery
version: 1.0.0
status: stable
description: Discover and expand a relevant keyword universe from seeds, competitors and demand signals, capturing intent and value.
category: seo
sub_category: keyword-research
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
channels: [organic-search]
objectives: [find-opportunities, inform-content]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: days
required_inputs: [seed-topics, target-market]
optional_inputs: [keyword-tool-data, competitor-domains]
outputs: [keyword-universe, intent-tags, value-signals]
related_skills: [seo.keyword-clustering, seo.search-intent-analysis, seo.keyword-prioritisation]
resources: []
mcp_prompts: [seo_content_cluster]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, keywords, research]
---

## Overview

Builds a broad, relevant keyword universe with intent and value context, ready for clustering
and prioritisation.

## Business purpose

Keyword discovery reveals real demand and the language customers use, guiding content and
capture.

## When to use / when not to use

- **Use** before content or SEO planning.
- **Do not use** as a substitute for intent/quality judgement.

## Inputs

### Required
- Seed topics, target market/locale.

### Optional
- Keyword-tool data, competitor domains.

## Outputs

- A **keyword universe** (deduplicated, localised).
- **Intent tags** (informational/commercial/transactional/navigational).
- **Value signals** (relevance, difficulty, demand — directional).

## Methodology

1. Start from seeds (product, jobs, pains, competitor terms).
2. Expand via related searches, autosuggest, competitor coverage and tool data.
3. Localise to the market's language/spelling.
4. Tag intent and note demand/difficulty directionally.
5. Flag brand vs non-brand and question-based queries.

## Decision rules

- Prioritise relevance and intent over raw volume.
- Treat tool volumes/difficulty as directional, not exact.
- Include long-tail and question queries for depth.

## Quality checklist

- [ ] Localised and deduplicated.
- [ ] Intent tagged.
- [ ] Brand/non-brand separated.

## Compliance checklist

- [ ] No trademark misuse in targeting.
- [ ] Sensitive/regulated terms flagged.

## Failure conditions and escalation

- No seeds/market → `insufficient_data`.

## Examples

- **SaaS:** jobs-to-be-done queries + "alternative to" + integration terms.
- **E-commerce:** category + attribute + buying-guide queries.
- **Real estate:** "[area] houses for sale", "estate agents [area]".
- **Retail:** "[product] near me", store + brand queries.

## KPIs and metrics

Universe size, intent distribution, opportunity coverage.

## Related skills

`seo.keyword-clustering`, `seo.search-intent-analysis`, `seo.keyword-prioritisation`.

## MCP mappings

- Prompts: `seo_content_cluster`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
