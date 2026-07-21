---
id: real-estate.lead-generation-campaign
name: Real Estate Lead Generation Campaign
version: 1.0.0
status: stable
description: Plan a compliant real-estate lead-generation campaign targeting buyer/seller intent with accurate advertising and a clear cost-per-lead plan.
category: real-estate-marketing
sub_category: lead-generation
industries: [real-estate]
business_models: [b2c, b2b, b2b2c]
funnel_stages: [awareness, consideration, decision]
objectives: [generate-leads, reduce-cpl]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [property-or-service, location, buyer-or-seller-focus]
optional_inputs: [budget, crm, compliance-constraints]
outputs: [audiences, campaign-plan, lead-funnel, cpl-plan]
related_skills: [real-estate.lead-qualification, real-estate.agent-follow-up-workflow, paid-social.social-campaign-architecture]
resources: [marketing://channels, marketing://metrics]
mcp_prompts: [real_estate_lead_plan]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-21
maintainers: [mypsbots]
tags: [real-estate, lead-generation, ppc]
---

## Overview

Plans a location- and intent-targeted lead-gen campaign with accurate, fair-housing-compliant
advertising, a capture funnel, and a cost-per-qualified-lead plan.

## Business purpose

Real estate is lead- and speed-driven; targeted, compliant campaigns fill the agent pipeline.

## When to use / when not to use

- **Use** to plan compliant property/service lead generation.
- **Do not use** to run discriminatory targeting or inaccurate listings.

## Inputs

### Required
- Property/development or service, location, buyer/seller focus.

### Optional
- Budget, CRM, compliance constraints.

## Outputs

- **Audiences** (location/intent, compliant).
- A **campaign plan** (channels/creative/landing).
- A **lead funnel** and **CPL/CPQL plan**.

## Methodology

1. Define segments (buyer/seller/investor) and intent signals.
2. Select channels (local paid search, paid social, portals) by intent.
3. Design compliant creative and accurate listing info.
4. Build capture funnel (landing + form + instant routing).
5. Set CPL/CPQL targets, tracking, and follow-up SLAs.

## Decision rules

- Fair-advertising compliance is mandatory (no protected-class targeting/exclusion where prohibited).
- Listing accuracy required; no misleading claims.
- Speed-to-lead matters; plan routing/SLAs.

## Quality checklist

- [ ] Segments/intent defined.
- [ ] Capture funnel + routing.
- [ ] CPL/CPQL targets + tracking.

## Compliance checklist

- [ ] Fair-housing/advertising rules honoured.
- [ ] Accurate listing information.
- [ ] Consent for follow-up; PII protected.

## Failure conditions and escalation

- Missing property/location/focus → `insufficient_data`.
- Spend/publishing → requires approval.

## Examples

- **New development:** local paid + portal + retargeting.
- **Seller leads:** valuation-offer campaign.
- **Rental:** availability-led local campaigns.

## KPIs and metrics

CPL, CPQL, lead-to-viewing, viewing-to-offer, speed-to-lead.

## Related skills

`real-estate.lead-qualification`, `real-estate.agent-follow-up-workflow`,
`paid-social.social-campaign-architecture`.

## MCP mappings

- Resources: `marketing://channels`, `marketing://metrics`
- Prompts: `real_estate_lead_plan`
- Tools: `marketing_get_skill`, `marketing_request_approval`

## Changelog

- 1.0.0 (2026-07-21): Initial version.
