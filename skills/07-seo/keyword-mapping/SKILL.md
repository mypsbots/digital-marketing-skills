---
id: seo.keyword-mapping
name: Keyword Mapping
version: 1.0.0
status: stable
description: Assign target keywords/clusters to specific URLs to ensure full coverage, avoid cannibalisation and guide on-page optimisation.
category: seo
sub_category: architecture
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [prevent-cannibalisation, ensure-coverage]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [keyword-clusters, site-urls-or-structure]
optional_inputs: [current-rankings, intent-data]
outputs: [keyword-to-url-map, gaps, cannibalisation-fixes]
related_skills: [seo.keyword-clustering, seo.keyword-prioritisation, seo.internal-linking-plan]
resources: []
mcp_prompts: [seo_audit, seo_content_cluster]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, keyword-mapping, architecture]
---

## Overview

Maps each keyword cluster to a single best-fit URL (one primary intent per page), revealing
coverage gaps and cannibalisation (multiple pages competing for the same term) and guiding on-page
targeting.

## Business purpose

A clean keyword→URL map prevents self-competition and ensures the site covers priority demand.

## When to use / when not to use

- **Use** after clustering to assign targets to pages/new content.
- **Do not use** to stuff multiple primary intents onto one page.

## Inputs

### Required
- Keyword clusters, site URLs or structure.

### Optional
- Current rankings, intent data.

## Outputs

- A **keyword→URL map** (primary term per URL).
- **Gaps** (clusters with no page).
- **Cannibalisation fixes** (consolidate/differentiate).

## Methodology

1. Assign each cluster a single primary URL matching intent.
2. Detect cannibalisation (multiple URLs ranking for the same cluster).
3. Identify uncovered clusters needing new pages.
4. Recommend consolidate/redirect/differentiate for conflicts.
5. Feed targets into on-page and internal-linking plans.

## Decision rules

- One primary intent/cluster per URL.
- Consolidate cannibalising pages.
- Every priority cluster has an owning URL.

## Quality checklist

- [ ] Each cluster mapped to one URL.
- [ ] Cannibalisation detected/resolved.
- [ ] Coverage gaps listed.

## Compliance checklist

- [ ] No doorway/duplicate-page tactics.

## Failure conditions and escalation

- Missing clusters/site structure → `insufficient_data`.

## Examples

- **SaaS:** feature/use-case/comparison pages mapped distinctly.
- **E-commerce:** category vs subcategory vs PDP targeting.
- **Real estate:** area pages vs listing pages.
- **Retail:** category vs store-locator pages.

## KPIs and metrics

Cannibalisation incidents, coverage %, ranking stability.

## Related skills

`seo.keyword-clustering`, `seo.keyword-prioritisation`, `seo.internal-linking-plan`.

## MCP mappings

- Prompts: `seo_audit`, `seo_content_cluster`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
