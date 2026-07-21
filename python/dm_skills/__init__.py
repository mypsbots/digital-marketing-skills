"""Optional Python utilities for the Digital Marketing Skills MCP platform.

These utilities are deterministic and dependency-light so they can be used for
transparent, auditable calculations (metrics, statistics) alongside the
TypeScript MCP server. They intentionally avoid any network or side-effecting
behaviour.
"""

from .metrics import (
    MetricResult,
    aov,
    cac,
    cac_payback,
    churn_rate,
    conversion_rate,
    cpa,
    cpc,
    cpm,
    ctr,
    ltv,
    ltv_cac_ratio,
    mer,
    nrr,
    roas,
)
from .statistics import (
    SampleSizeResult,
    TestResult,
    sample_size_two_proportions,
    two_proportion_z_test,
)

__all__ = [
    "MetricResult",
    "ctr",
    "cpc",
    "cpm",
    "conversion_rate",
    "cpa",
    "cac",
    "roas",
    "mer",
    "aov",
    "ltv",
    "ltv_cac_ratio",
    "cac_payback",
    "churn_rate",
    "nrr",
    "SampleSizeResult",
    "TestResult",
    "sample_size_two_proportions",
    "two_proportion_z_test",
]

__version__ = "0.1.0"
