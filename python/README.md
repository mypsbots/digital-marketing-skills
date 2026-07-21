# dm_skills — Python utilities

Optional, deterministic Python utilities for the Digital Marketing Skills MCP platform. These
are pure functions for transparent, auditable calculations. They perform **no** network or
side-effecting operations.

## Modules

- `dm_skills.metrics` — deterministic marketing metric calculations (CTR, CPC, CPM, conversion
  rate, CPA, CAC, ROAS, MER, AOV, LTV, LTV:CAC, CAC payback, churn, NRR). Each result exposes the
  formula, inputs and warnings. Mirrors the TypeScript `MetricEngine`.
- `dm_skills.statistics` — experiment helpers: `sample_size_two_proportions` and
  `two_proportion_z_test`, implemented without heavy dependencies (numerical normal
  quantile/CDF) so they are reproducible and run without SciPy.

## Install (editable, with dev tools)

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
```

## Usage

```python
from dm_skills import metrics, statistics

roas = metrics.roas(attributed_revenue=4000, ad_spend=1000)
print(roas.value, roas.warnings)  # 4.0, [attribution caveat]

size = statistics.sample_size_two_proportions(
    baseline_rate=0.10, mde=0.02, daily_eligible_traffic=2000
)
print(size.per_variant, size.estimated_days)
```

## Test / lint / type-check

```bash
pytest                # runs python/tests
ruff check python     # lint
mypy python/dm_skills # type-check (strict)
```

## Safety notes

- Calculations are model- and attribution-dependent; results carry warnings you should surface.
- For production sequential/Bayesian testing, use a dedicated, reviewed statistics library.
