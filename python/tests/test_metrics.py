import math

from dm_skills import metrics


def test_ctr_percentage() -> None:
    r = metrics.ctr(50, 1000)
    assert r.value == 5.0
    assert r.unit == "percentage"
    assert r.warnings == []


def test_zero_denominator_returns_none_and_warns() -> None:
    r = metrics.cpc(100, 0)
    assert r.value is None
    assert any("undefined" in w for w in r.warnings)


def test_cpm_per_thousand() -> None:
    assert metrics.cpm(20, 10000).value == 2.0


def test_roas_ratio_and_warning() -> None:
    r = metrics.roas(4000, 1000)
    assert r.value == 4.0
    assert any("attribution" in w.lower() for w in r.warnings)


def test_cac_includes_all_costs() -> None:
    assert metrics.cac(8000, 2000, 50).value == 200.0


def test_nrr_percentage() -> None:
    assert math.isclose(metrics.nrr(100000, 20000, 5000, 5000).value, 110.0)


def test_ltv_flags_percentage_margin() -> None:
    r = metrics.ltv(50, 4, 60, 3)
    assert any("0-1 ratio" in w for w in r.warnings)
