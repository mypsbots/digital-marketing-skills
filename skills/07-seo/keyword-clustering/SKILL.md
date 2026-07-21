---
id: seo.keyword-clustering
name: Keyword Clustering
version: 1.0.0
status: stable
description: Group keywords by shared intent and SERP overlap into page-level clusters to guide content architecture.
category: seo
sub_category: keyword-research
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
channels: [organic-search]
objectives: [structure-content, avoid-cannibalisation]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: days
required_inputs: [keyword-universe]
optional_inputs: [serp-data]
outputs: [clusters, page-mapping]
related_skills: [seo.keyword-discovery, seo.topic-cluster-planning, seo.keyword-mapping]
resources: []
mcp_prompts: [seo_content_cluster]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, clustering, keywords]
---

## Overview

Turns a flat keyword list into page-level clusters based on intent similarity and SERP overlap,
preventing cannibalisation and guiding structure.

## Business purpose

Clustering ensures one strong page per intent rather than many weak competing pages.

## When to use / when not to use

- **Use** after keyword discovery, before content briefs.
- **Do not use** to force unrelated terms onto one page.

## Inputs

### Required
- Keyword universe.

### Optional
- SERP overlap data.

## Outputs

- **Clusters** grouped by intent.
- **Page mapping** (one target page per cluster).

## Methodology

1. Normalise and deduplicate keywords.
2. Group by shared intent; validate with SERP overlap where available (terms sharing ranking
   URLs belong together).
3. Name each cluster and choose a primary + secondary keywords.
4. Assign each cluster to a single target page/template.
5. Flag overlaps that risk cannibalisation.

## Decision rules

- Keywords sharing SERP intent belong on the same page.
- One primary intent per page.
- Separate clusters when SERPs differ even if wording is similar.

## Quality checklist

- [ ] Clusters intent-coherent.
- [ ] One page per cluster.
- [ ] Cannibalisation risks flagged.

## Compliance checklist

- [ ] No manipulative doorway pages.

## Failure conditions and escalation

- No keyword universe → run `seo.keyword-discovery` first.

## Examples

- **SaaS:** "email automation" vs "email automation software" may share intent → one page.
- **E-commerce:** attribute clusters map to filtered category pages.
- **Real estate:** area + property-type clusters.
- **Retail:** brand + product clusters.

## KPIs and metrics

Cluster coverage, cannibalisation incidents, page-level visibility.

## Related skills

`seo.keyword-discovery`, `seo.topic-cluster-planning`, `seo.keyword-mapping`.

## MCP mappings

- Prompts: `seo_content_cluster`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
