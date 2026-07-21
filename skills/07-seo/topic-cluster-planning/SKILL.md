---
id: seo.topic-cluster-planning
name: Topic Cluster Planning
version: 1.0.0
status: stable
description: Plan pillar-and-cluster content structures with internal linking to build topical authority.
category: seo
sub_category: architecture
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
channels: [organic-search, content]
objectives: [build-authority, structure-content]
risk_level: low
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [topic, keyword-clusters]
optional_inputs: [existing-content]
outputs: [pillar-and-clusters, internal-linking-plan, briefs-outline]
related_skills: [seo.keyword-clustering, content.content-pillar-development, seo.internal-linking-plan]
resources: []
mcp_prompts: [seo_content_cluster, create_content_strategy]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, topic-cluster, authority]
---

## Overview

Designs a pillar page plus supporting cluster pages, interlinked, to signal topical authority
and cover intent comprehensively.

## Business purpose

Topical authority improves rankings across a theme and creates a logical user journey.

## When to use / when not to use

- **Use** to structure content around a pillar.
- **Do not use** to create thin pages purely for linking.

## Inputs

### Required
- Topic, keyword clusters.

### Optional
- Existing content to map/consolidate.

## Outputs

- A **pillar-and-clusters** structure.
- An **internal-linking plan**.
- A **briefs outline** per page.

## Methodology

1. Define the pillar (broad, high-intent hub) and its scope.
2. Map clusters to supporting pages by sub-intent.
3. Plan internal links (clusters ↔ pillar, related clusters).
4. Map existing content (keep/update/merge/create).
5. Sequence production by priority and dependency.

## Decision rules

- Each cluster page must offer standalone value.
- Link with descriptive anchors; avoid over-linking.
- Consolidate overlapping existing pages into the structure.

## Quality checklist

- [ ] Pillar scope clear.
- [ ] Clusters map to distinct sub-intents.
- [ ] Internal-linking plan defined.

## Compliance checklist

- [ ] No manipulative link schemes.
- [ ] Claims fact-checked.

## Failure conditions and escalation

- No clusters → run `seo.keyword-clustering` first.

## Examples

- **SaaS:** pillar "email automation" + clusters (templates, deliverability, examples).
- **E-commerce:** pillar category + buying-guide clusters.
- **Real estate:** pillar "living in [area]" + neighbourhood clusters.
- **Retail:** pillar occasion + product-guide clusters.

## KPIs and metrics

Topical visibility, internal-link coverage, organic sessions/conversions across the cluster.

## Related skills

`seo.keyword-clustering`, `content.content-pillar-development`, `seo.internal-linking-plan`.

## MCP mappings

- Prompts: `seo_content_cluster`, `create_content_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
