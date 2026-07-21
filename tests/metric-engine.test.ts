import { describe, expect, it } from 'vitest';
import { MetricEngine } from '../src/core/metric-engine.js';

describe('MetricEngine', () => {
  it('computes CTR as a percentage', () => {
    const r = MetricEngine.ctr(50, 1000);
    expect(r.value).toBe(5);
    expect(r.unit).toBe('percentage');
    expect(r.warnings).toHaveLength(0);
  });

  it('returns null and warns on zero denominator', () => {
    const r = MetricEngine.cpc(100, 0);
    expect(r.value).toBeNull();
    expect(r.warnings.join(' ')).toMatch(/denominator is zero/i);
  });

  it('computes CPM per thousand impressions', () => {
    const r = MetricEngine.cpm(20, 10000);
    expect(r.value).toBe(2);
  });

  it('computes ROAS as a ratio and always warns about attribution', () => {
    const r = MetricEngine.roas(4000, 1000);
    expect(r.value).toBe(4);
    expect(r.warnings.join(' ')).toMatch(/attribution/i);
  });

  it('computes CAC including sales and marketing cost', () => {
    const r = MetricEngine.cac(8000, 2000, 50);
    expect(r.value).toBe(200);
  });

  it('computes NRR as a percentage', () => {
    const r = MetricEngine.nrr(100000, 20000, 5000, 5000);
    expect(r.value).toBeCloseTo(110, 6);
  });

  it('flags gross margin provided as a percentage in LTV', () => {
    const r = MetricEngine.ltv(50, 4, 60, 3);
    expect(r.warnings.join(' ')).toMatch(/0-1 ratio/);
  });
});
