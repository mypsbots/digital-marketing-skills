---
id: ads-policy.special-ad-categories-compliance
name: Special Ad Categories Compliance
version: 1.0.0
status: stable
description: Determine if an ad is a special ad category (housing, employment, credit, social/political) and apply the mandated targeting restrictions and anti-discrimination rules. Not legal advice.
category: advertising-policy
sub_category: cross-network
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [awareness, consideration, decision]
objectives: [ensure-ad-compliance, avoid-discrimination]
risk_level: high
execution_mode: analysis
human_approval_required: true
estimated_duration: minutes-to-hours
required_inputs: [ad-purpose-or-offer, network, regions]
optional_inputs: [targeting, audience]
outputs: [category-determination, targeting-restrictions, required-changes]
related_skills: [ads-policy.meta-ads-policy-compliance, ads-policy.ad-policy-preflight-review, compliance.marketing-compliance-assessment]
resources: [marketing://policies/catalogue, marketing://compliance-rules]
mcp_prompts: [review_compliance]
data_sensitivity: internal
pii_expected: false
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [special-ad-categories, housing, employment, credit, politics]
---

## Overview

Determines whether an ad falls into a **Special Ad Category** — Housing, Employment, Credit, or
Social Issues/Elections/Politics — and applies the network-mandated **restricted targeting** (e.g.
no age, gender, ZIP-radius or many detailed options) plus anti-discrimination and authorisation
requirements. Given the legal exposure, this is approval-gated.

> **Important:** Summary only; rules (esp. US/EU) change and are legally significant. Verify against
> the network's official policy and fair-housing/employment/lending law. Route to legal. Not legal
> advice.

## Business purpose

Misclassifying these ads risks account penalties **and** legal liability (fair-housing/employment/
lending). Correct handling is a compliance necessity.

## When to use / when not to use

- **Use** whenever an ad promotes housing, jobs, credit/financing, or social/political issues.
- **Do not use** to avoid categorisation to unlock better targeting — that is the core violation.

## Inputs

### Required
- Ad purpose or offer, network, regions.

### Optional
- Targeting, audience.

## Outputs

- A **category determination** (which special category, if any).
- **Targeting restrictions** to apply.
- **Required changes** (targeting, authorisation, disclaimers).

## Methodology

1. Assess the offer/intent against each special category definition.
2. If it qualifies, declare the category in the ad platform (as required).
3. Apply restricted targeting: remove prohibited dimensions; use only permitted options.
4. Apply anti-discrimination checks and, for political/social, authorisation + disclaimers + ad
   library.
5. Escalate to legal; require human approval before launch.

## Decision rules

- If in doubt, classify conservatively (as a special category).
- Never target/exclude on protected characteristics.
- Political/social ads require verified authorisation and disclaimers.

## Quality checklist

- [ ] Category determination documented.
- [ ] Restricted targeting applied.
- [ ] Authorisation/disclaimers where required.

## Compliance checklist

- [ ] Fair-housing/employment/lending rules considered.
- [ ] Anti-discrimination verified.
- [ ] Legal review completed; human approval obtained.

## Failure conditions and escalation

- Missing purpose/network/region → `insufficient_data`.
- Any special-category ad → legal review + human approval (mandatory).

## Examples

- **Real estate:** property/rental ads → Housing (restricted targeting).
- **SaaS/HR:** job ads → Employment.
- **Fintech:** loan/credit-card ads → Credit.
- **Any:** issue advocacy → Social/Political (authorisation + disclaimer).

## KPIs and metrics

Correct-classification rate, discrimination complaints avoided, legal incidents.

## Related skills

`ads-policy.meta-ads-policy-compliance`, `ads-policy.ad-policy-preflight-review`,
`compliance.marketing-compliance-assessment`.

## MCP mappings

- Resources: `marketing://policies/catalogue`, `marketing://compliance-rules`
- Prompts: `review_compliance`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
