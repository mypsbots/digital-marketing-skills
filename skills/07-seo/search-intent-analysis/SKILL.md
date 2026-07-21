---
id: seo.search-intent-analysis
name: Search Intent Analysis
version: 1.0.0
status: stable
description: Classify the intent behind queries (informational, navigational, commercial, transactional) and the content type SERPs reward, to align content and pages.
category: seo
sub_category: research
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [align-content-to-intent, improve-rankings]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours
required_inputs: [queries-or-keywords]
optional_inputs: [serp-data, business-context]
outputs: [intent-classification, content-type-map, alignment-recommendations]
related_skills: [seo.keyword-discovery, seo.content-brief-creation, seo.keyword-mapping]
resources: []
mcp_prompts: [seo_audit, seo_content_cluster]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, intent, serp]
---

## Overview

Determines what the searcher actually wants and what content format the SERP rewards for each
query, so pages are built to satisfy intent (the single biggest ranking/conversion lever after
relevance).

## Business purpose

Intent misalignment is a top cause of failed content; matching intent improves rankings, dwell and
conversion.

## When to use / when not to use

- **Use** before briefing content or targeting a keyword.
- **Do not use** to force transactional pages onto informational queries.

## Inputs

### Required
- Queries or keywords.

### Optional
- SERP data, business context.

## Outputs

- **Intent classification** per query (informational/navigational/commercial/transactional; plus
  sub-intents).
- A **content-type map** (what format ranks: guide, comparison, product, local).
- **Alignment recommendations**.

## Methodology

1. Classify each query's dominant intent (and mixed intent where present).
2. Read the SERP: dominant content types, features (snippets, packs), and format.
3. Map query → best-fit page type and funnel stage.
4. Flag mismatches between current pages and intent.
5. Recommend the page type/format to build or fix.

## Decision rules

- Let the SERP, not assumptions, reveal rewarded intent/format.
- Match page type to dominant intent.
- Separate mixed-intent queries into appropriate assets.

## Quality checklist

- [ ] Intent classified with evidence.
- [ ] Content type mapped.
- [ ] Mismatches flagged.

## Compliance checklist

- [ ] No cloaking or intent-deception tactics.

## Failure conditions and escalation

- No queries provided → `insufficient_data`.

## Examples

- **SaaS:** "what is X" (info) vs "X pricing" (transactional).
- **E-commerce:** "best running shoes" (commercial) → comparison.
- **Real estate:** "homes for sale in Y" (transactional) → listings.
- **Retail:** "store near me" (local) → local landing.

## KPIs and metrics

Ranking/CTR by intent match, dwell time, conversion.

## Related skills

`seo.keyword-discovery`, `seo.content-brief-creation`, `seo.keyword-mapping`.

## MCP mappings

- Prompts: `seo_audit`, `seo_content_cluster`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
