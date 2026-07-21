---
id: seo.internal-linking-plan
name: Internal Linking Plan
version: 1.0.0
status: stable
description: Design an internal linking structure that distributes authority, reinforces topic clusters and guides users, with descriptive anchors.
category: seo
sub_category: architecture
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [distribute-authority, strengthen-clusters]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [site-structure-or-content-inventory]
optional_inputs: [topic-clusters, priority-pages, current-links]
outputs: [linking-plan, anchor-guidance, priority-links]
related_skills: [seo.topic-cluster-planning, seo.keyword-mapping, seo.on-page-seo-audit]
resources: []
mcp_prompts: [seo_audit, seo_content_cluster]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, internal-linking, architecture]
---

## Overview

Plans internal links so authority flows to priority pages, topic clusters interlink around pillar
pages, and users navigate logically — using descriptive, varied anchor text.

## Business purpose

Internal linking is a controllable ranking and UX lever that strengthens clusters and surfaces key
pages.

## When to use / when not to use

- **Use** to structure links across clusters and priority pages.
- **Do not use** for manipulative over-optimised anchors or link spam.

## Inputs

### Required
- Site structure or content inventory.

### Optional
- Topic clusters, priority pages, current links.

## Outputs

- A **linking plan** (pillar ↔ cluster ↔ supporting).
- **Anchor guidance** (descriptive, varied).
- **Priority links** to add (to money/pillar pages).

## Methodology

1. Identify pillar and priority pages that should receive authority.
2. Map cluster interlinking (pillar↔cluster, sibling links) around topics.
3. Ensure priority pages have sufficient contextual inbound links.
4. Set anchor-text rules: descriptive, varied, non-manipulative.
5. Flag orphan pages and excessive/irrelevant links.

## Decision rules

- Link with intent: authority to priority pages, cluster cohesion.
- Descriptive, natural anchors; avoid exact-match stuffing.
- No orphan priority pages.

## Quality checklist

- [ ] Pillar/cluster interlinking mapped.
- [ ] Priority pages sufficiently linked.
- [ ] Anchor rules set; orphans flagged.

## Compliance checklist

- [ ] No manipulative/spam linking schemes.

## Failure conditions and escalation

- Missing site structure/inventory → `insufficient_data`.

## Examples

- **SaaS:** blog cluster → feature/pillar pages.
- **E-commerce:** guides → category/PDP.
- **Real estate:** area guides → listing pages.
- **Retail:** how-to content → product/category.

## KPIs and metrics

Internal links to priority pages, crawl depth, ranking/traffic of linked pages.

## Related skills

`seo.topic-cluster-planning`, `seo.keyword-mapping`, `seo.on-page-seo-audit`.

## MCP mappings

- Prompts: `seo_audit`, `seo_content_cluster`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
