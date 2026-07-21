# Metrics catalogue

Metric definitions live in `config/metrics-catalogue.yaml` and are calculated deterministically by
the `metric-engine` (TypeScript) and mirrored in `python/dm_skills/metrics.py`.

## Principles

- **Deterministic & auditable.** Each calculation returns the metric name, value, unit, the
  formula and the exact inputs used, plus warnings about interpretation.
- **Safe division.** Zero denominators return `null` with a warning rather than `NaN`/`Infinity`.
- **Interpretation caveats travel with the number.** For example, ROAS results always warn that
  the value is attribution-dependent and is not profit or incrementality.

## Available calculations

`ctr`, `cpc`, `cpm`, `conversion_rate`, `cpa`, `cpl`, `cac`, `roas`, `mer`, `marketing_roi`,
`aov`, `ltv`, `ltv_cac_ratio`, `cac_payback`, `churn_rate`, `nrr`.

## Example (TypeScript)

```ts
import { MetricEngine } from './src/core/metric-engine.js';

const roas = MetricEngine.roas(4000, 1000);
// { metric: 'roas', value: 4, unit: 'ratio', formula: 'attributed_revenue / ad_spend', ... }
```

## Example (Python)

```python
from dm_skills import metrics
r = metrics.cac(marketing_cost=8000, sales_cost=2000, new_customers=50)
print(r.value)  # 200.0
```

## Adding a metric

1. Add the definition (id, formula, unit, interpretation, limitations, common mistakes) to
   `config/metrics-catalogue.yaml`.
2. Implement the pure function in `metric-engine.ts` (and optionally `metrics.py`).
3. Add unit tests asserting both the value and the presence of interpretation warnings.
