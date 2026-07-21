---
id: market-research.share-of-voice-analysis
name: Share of Voice Analysis
version: 1.0.0
status: stable
description: Estimate a brand's share of voice versus competitors across search, social, media or ads to benchmark visibility and guide investment.
category: market-research
sub_category: competitive
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
objectives: [benchmark-visibility, guide-investment]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: hours-to-days
required_inputs: [brand, competitor-set, channel-scope]
optional_inputs: [search-data, social-data, ad-data]
outputs: [sov-estimates, gap-analysis, recommendations]
related_skills: [market-research.competitor-positioning-analysis, seo.keyword-discovery, reporting.campaign-performance-report]
resources: []
mcp_prompts: [analyse_competitors]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [share-of-voice, competitive, benchmark]
---

## Overview

Estimates share of voice (SOV) — a brand's visibility as a percentage of the competitive set —
across defined channels (organic search, paid, social, media), highlights gaps, and links SOV to
expected share-of-market movement.

## Business purpose

SOV benchmarks competitive presence; a positive "excess share of voice" often precedes share
growth, guiding where to invest.

## When to use / when not to use

- **Use** to benchmark visibility and size investment gaps.
- **Do not use** to present SOV as exact when data is partial — state method and limits.

## Inputs

### Required
- Brand, competitor set, channel scope.

### Optional
- Search, social, ad data.

## Outputs

- **SOV estimates** per channel with method.
- **Gap analysis** vs competitors and vs market share.
- **Recommendations** for closing gaps.

## Methodology

1. Define the competitor set and channels; fix the measurement window.
2. Choose SOV proxies per channel (e.g. impression share, keyword visibility, social mentions).
3. Compute each brand's share of the total; state assumptions/coverage.
4. Compare SOV to share-of-market to find excess/deficit.
5. Recommend investment shifts where deficits are strategically important.

## Decision rules

- State the SOV proxy and coverage; do not overclaim precision.
- Compare like-for-like windows and sets.
- Link SOV gaps to strategic priority before recommending spend.

## Quality checklist

- [ ] Competitor set + channels defined.
- [ ] Method/proxy and coverage stated.
- [ ] Gaps linked to action.

## Compliance checklist

- [ ] Third-party data used within terms.

## Failure conditions and escalation

- Missing brand/competitors/scope → `insufficient_data`.

## Examples

- **SaaS:** organic keyword visibility vs 4 rivals.
- **E-commerce:** paid impression share on category terms.
- **Real estate:** local search + portal presence.
- **Retail:** local pack + social mention share.

## KPIs and metrics

SOV %, excess SOV vs share, visibility trend.

## Related skills

`market-research.competitor-positioning-analysis`, `seo.keyword-discovery`,
`reporting.campaign-performance-report`.

## MCP mappings

- Prompts: `analyse_competitors`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
