# Example: E-commerce Google Ads plan (margin-aware)

> Illustrative example. Numbers are synthetic and for demonstration only — not benchmarks,
> targets, or guarantees.

## Context

- Store: D2C skincare, ~60% gross margin, AOV ~$55 (synthetic).
- Goal: profitable new-customer acquisition via Google Ads, protecting contribution margin.

## Objective

Launch a paid-search programme that acquires customers at a blended MER that preserves
per-order contribution margin, with tracking validated before launch.

## Method (skills applied)

1. **`paid-search.campaign-architecture`** — separate brand, non-brand generic, and
   high-intent product/category campaigns; Shopping for catalogue.
2. **`paid-search.keyword-planning`** — intent-tiered keywords + a robust negative list to
   exclude irrelevant/low-intent queries.
3. **`paid-search.search-ad-copy`** — responsive ads matching query intent; honest claims and
   offer terms.
4. **`analytics.tracking-plan-design`** — validate purchase + value tracking before spend.
5. **`compliance.marketing-compliance-assessment`** — screen claims and policy.
6. **`budgeting.channel-budget-allocation`** — start with a controlled test budget; 70/20/10
   proven/scaling/experimental split.

## Illustrative output

**Campaign structure:**

| Campaign | Intent | Bidding (start) | Notes |
| --- | --- | --- | --- |
| Brand | Highest | Manual/target impression share | Defensive, cheap |
| Non-brand generic | Medium | tCPA once data allows | Tight themes + negatives |
| High-intent product | High | tROAS/tCPA | Best-margin SKUs first |
| Shopping | Varied | tROAS | Feed quality prerequisite |

**Break-even guardrail (synthetic):** with 60% margin and $55 AOV, contribution ≈ $33/order;
target CPA below that (minus fulfilment) to stay profitable → set tCPA guardrail accordingly.

## Measurement

ROAS, MER, CPA vs break-even, new-customer share, contribution margin; weekly pacing review.

## Safety & approvals

- Tracking must validate before launch; if invalid, the `google-ads-launch` workflow blocks.
- No launch or budget change without human approval (`launch_gate`).
- No guaranteed ROAS/traffic claims; targets are ranges with assumptions.
