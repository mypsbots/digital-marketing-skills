---
id: crm.customer-win-back
name: Customer Win-back and Reactivation
version: 1.0.0
status: stable
description: Reactivate lapsed and past customers with segmented win-back offers, reminders and re-engagement flows to recover revenue and raise lifetime value.
category: crm-lifecycle
sub_category: reactivation
industries: [common, saas, ecommerce, real-estate, retail]
business_models: [b2b, b2c, b2b2c, d2c]
funnel_stages: [retention]
objectives: [recover-revenue, improve-retention, increase-lifetime-value]
risk_level: medium
execution_mode: planning
human_approval_required: false
estimated_duration: days
required_inputs: [customer-database-with-recency, offering, lapse-definition]
optional_inputs: [purchase-history, churn-reasons, consent-status]
outputs: [lapsed-segments, winback-offer-plan, reengagement-flow, suppression-rules]
related_skills: [strategy.retention-strategy, crm.lifecycle-stage-design, email.lead-nurture-series, ecommerce.repeat-purchase, compliance.consent-assessment]
resources: []
mcp_prompts: [create_marketing_strategy]
data_sensitivity: confidential
pii_expected: true
external_side_effects: false
cost_implication: false
last_reviewed: 2026-07-23
maintainers: [mypsbots]
tags: [win-back, reactivation, lapsed, retention, ltv]
---

## Overview

Recovers value from customers who have lapsed or gone dormant by defining lapse, segmenting by
recency/value/reason, and running targeted win-back offers, reminders and re-engagement flows.
Existing/past customers are usually the cheapest source of incremental revenue.

## Business purpose

Reactivating a past customer typically costs far less than acquiring a new one and lifts lifetime
value; a systematic win-back programme recovers revenue that would otherwise be lost.

## When to use / when not to use

- **Use** to re-engage dormant/lapsed customers or reduce churned-revenue leakage.
- **Do not use** to email people who have opted out, or to discount so hard it trains customers to lapse.

## Inputs

### Required
- Customer database with recency, offering, lapse definition.

### Optional
- Purchase history, churn reasons, consent status.

## Outputs

- **Lapsed segments** (by recency, value, likely reason).
- A **win-back offer plan** (offer/message per segment).
- A **re-engagement flow** (sequence and channels).
- **Suppression rules** (who to exclude and when to stop).

## Methodology

1. Define "lapsed"/dormant per your purchase or usage cycle.
2. Segment lapsed customers by recency, past value, and likely reason for leaving.
3. Match each segment to an appropriate reminder or win-back offer (not always a discount).
4. Design a multi-touch re-engagement flow across owned channels.
5. Set frequency caps, suppression and a clear stop point for non-responders.
6. Measure reactivation rate, recovered revenue and downstream retention; iterate.

## Decision rules

- Reminders/value first; reserve discounts for higher-value or price-sensitive segments.
- Respect consent and fatigue — stop contacting persistent non-responders.
- Prioritise segments by recoverable value, not volume.

## Quality checklist

- [ ] Lapse clearly defined; segments evidence-based.
- [ ] Offers matched to segment and reason.
- [ ] Frequency caps and stop rules set.

## Compliance checklist

- [ ] Only contact consenting, non-opted-out customers (`compliance.consent-assessment`).
- [ ] PII handled securely; opt-out honoured.
- [ ] Discount/offer claims lawful and substantiated.

## Failure conditions and escalation

- Missing recency/consent data → `insufficient_data`.
- Consent/PII concerns → privacy/legal review before send.

## Examples

- **SaaS:** re-engage churned trials/accounts with new-value reminders and offers.
- **E-commerce:** win back one-time buyers with reminders then a targeted incentive.
- **Real estate:** re-nurture past enquiries/clients with relevant updates.
- **Retail:** reactivate lapsed loyalty members with personalised offers.

## KPIs and metrics

Reactivation rate, recovered revenue, cost per reactivation, post-winback retention, and
unsubscribe/complaint rate.

## Related skills

`strategy.retention-strategy`, `crm.lifecycle-stage-design`, `email.lead-nurture-series`,
`ecommerce.repeat-purchase`, `compliance.consent-assessment`.

## MCP mappings

- Prompts: `create_marketing_strategy`
- Tools: `marketing_get_skill`

## Changelog

- 1.0.0 (2026-07-23): Initial version.
