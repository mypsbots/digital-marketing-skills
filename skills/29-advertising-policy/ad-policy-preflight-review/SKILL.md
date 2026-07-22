---
id: ads-policy.ad-policy-preflight-review
name: Ad Policy Pre-Flight Review
version: 1.0.0
status: stable
description: One pre-submission check that routes an ad to the right network's policy rules and reviews content, targeting and destination for compliance. Summary, not legal advice.
category: advertising-policy
sub_category: cross-network
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [ensure-ad-compliance, avoid-disapproval]
risk_level: medium
execution_mode: analysis
human_approval_required: false
estimated_duration: minutes-to-hours
required_inputs: [network, ad-content, destination-url, product-or-vertical]
optional_inputs: [targeting, regions]
outputs: [compliance-verdict, findings-by-area, required-changes]
related_skills: [ads-policy.special-ad-categories-compliance, ads-policy.restricted-industry-advertising, ads-policy.landing-page-policy-compliance]
resources: [marketing://policies/catalogue]
mcp_prompts: [review_compliance, plan_google_ads, plan_meta_ads]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [ads, preflight, compliance]
---

## Overview

A single, network-agnostic pre-flight: identifies the ad network, pulls its rules, and reviews the
ad across four areas — **content**, **targeting**, **destination/landing page**, and **disclosures**
— returning a go / fix / block verdict before submission. It delegates specifics to the per-network
and cross-cutting policy skills.

> **Important:** Summary-level review only; policies change and vary by region/product. Verify
> against each network's official policy centre and route regulated/high-risk ads to legal. Not
> legal advice.

## Business purpose

A consistent pre-flight prevents disapprovals, account strikes and wasted setup across every
network, and standardises how ads are cleared.

## When to use / when not to use

- **Use** as the default gate before any ad goes live on any network.
- **Do not use** as legal sign-off, or to approve prohibited content on a technicality.

## Inputs

### Required
- Network, ad content, destination URL, product or vertical.

### Optional
- Targeting, regions.

## Outputs

- A **compliance verdict** (go / fix-then-go / block).
- **Findings by area** (content, targeting, destination, disclosures).
- **Required changes** with references to the relevant network policy.

## Methodology

1. Identify the network and load its rules (`marketing://policies/{network}`).
2. **Content:** run the relevant per-network policy-compliance skill.
3. **Targeting:** check special ad categories and sensitive-attribute restrictions.
4. **Destination:** run landing-page policy compliance.
5. **Disclosures:** check required disclosures (sponsorship, political, AI content); output a
   verdict and prioritised required changes; escalate regulated/high-risk to legal.

## Decision rules

- Any prohibited-content hit ⇒ block.
- Special ad category ⇒ enforce restricted targeting before go.
- No verdict of "go" while required changes remain.

## Quality checklist

- [ ] Correct network rules applied.
- [ ] Content/targeting/destination/disclosures all reviewed.
- [ ] Clear verdict + required changes.

## Compliance checklist

- [ ] Cross-checked against the network's official policy centre.
- [ ] Special categories/restricted verticals handled.
- [ ] Regulated/high-risk escalated to legal.

## Failure conditions and escalation

- Missing network/content/destination/vertical → `insufficient_data`.
- Prohibited/regulated content → block; escalate.

## Examples

- **SaaS:** Meta lead ad → content + Credit-category targeting + landing check.
- **E-commerce:** Google Shopping → product policy + feed + destination.
- **Real estate:** Meta listing → Housing category targeting.
- **Retail:** TikTok promo → creative + audio + age rules.

## KPIs and metrics

Pre-flight pass rate, downstream disapproval rate, time-to-approval, account-health incidents.

## Related skills

`ads-policy.special-ad-categories-compliance`, `ads-policy.restricted-industry-advertising`,
`ads-policy.landing-page-policy-compliance`.

## MCP mappings

- Resources: `marketing://policies/catalogue`
- Prompts: `review_compliance`, `plan_google_ads`, `plan_meta_ads`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
