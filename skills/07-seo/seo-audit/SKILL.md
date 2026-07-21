---
id: seo.seo-audit
name: SEO Audit
version: 1.0.0
status: stable
description: Run a structured SEO audit across technical, on-page, content and off-page factors, producing prioritised, evidence-based fixes.
category: seo
sub_category: audit
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration]
channels: [organic-search]
objectives: [improve-organic-visibility]
risk_level: low
execution_mode: analysis
human_approval_required: false
estimated_duration: 2-5 days
required_inputs: [website, target-market]
optional_inputs: [search-console-data, priority-pages, competitors]
outputs: [findings-by-area, severity, prioritised-fixes]
related_skills: [seo.technical-seo-audit, seo.on-page-seo-audit, seo.keyword-discovery]
resources: [marketing://policies/search/webmaster-guidelines]
mcp_prompts: [seo_audit]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [seo, audit]
---

## Overview

A holistic SEO health check that identifies what is blocking organic performance and
prioritises fixes by impact and effort. Does not promise rankings.

## Business purpose

Organic search is a durable, compounding channel. Fixing foundational issues unlocks the value
of all other SEO work.

## When to use / when not to use

- **Use** at onboarding, after migrations, or when organic performance stalls.
- **Do not use** to guarantee positions or traffic.

## Inputs

### Required
- Website, target market/locale.

### Optional
- Search Console/analytics data, priority pages, competitors.

## Outputs

- **Findings by area** (technical, on-page, content, off-page, local/international where relevant).
- **Severity** rating per finding.
- **Prioritised fixes** with effort and qualified expected impact.

## Methodology

1. Confirm goals, market and priority pages/templates.
2. Technical: crawlability, indexability, site architecture, speed/CWV, mobile, structured data,
   canonicalisation, sitemaps, redirects.
3. On-page: intent match, titles/meta, headings, content depth, internal links.
4. Content: coverage vs demand, quality, cannibalisation, decay.
5. Off-page: referring domains, link quality/toxicity (directional), digital PR opportunities.
6. Grade evidence; prioritise fixes by impact × confidence ÷ effort.

## Decision rules

- Fix indexability/crawl blockers before content optimisation.
- Address cannibalisation before creating more competing pages.
- Never promise rankings; frame impact as likelihood/direction.

## Quality checklist

- [ ] All areas covered or justified as N/A.
- [ ] Findings evidenced and severity-rated.
- [ ] Fixes prioritised with effort.
- [ ] No ranking/traffic guarantees.

## Compliance checklist

- [ ] No manipulative/black-hat tactics recommended.
- [ ] Accessibility issues flagged.
- [ ] Policy references carry review dates.

## Failure conditions and escalation

- No site/market → `insufficient_data`.
- Manual action/penalty suspected → escalate to specialist recovery process.

## Examples

- **SaaS:** thin comparison pages + cannibalisation → consolidate and strengthen.
- **E-commerce:** faceted-navigation index bloat → canonical/robots strategy.
- **Real estate:** weak location pages → structured local content.
- **Retail:** store pages not indexed → local SEO fixes.

## KPIs and metrics

Indexed pages, crawl errors, CWV, keyword visibility (directional), organic sessions,
organic conversions.

## Related skills

`seo.technical-seo-audit`, `seo.on-page-seo-audit`, `seo.keyword-discovery`,
`seo.local-seo-audit`.

## MCP mappings

- Resources: `marketing://policies/search/webmaster-guidelines`
- Prompts: `seo_audit`
- Tools: `marketing_get_skill`, `marketing_fetch_analytics`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
