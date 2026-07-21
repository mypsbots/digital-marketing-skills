import type {
  Connector,
  ConnectorDescriptor,
  HealthCheckResult,
  MetricsQuery,
  MetricsRow,
} from '../base/connector.interface.js';

/**
 * Deterministic mock analytics connector. Produces stable, synthetic time-series
 * data so read-only tools and workflows can be exercised without credentials or
 * network access. Values are clearly synthetic and must not be treated as real.
 */
export class MockAnalyticsConnector implements Connector {
  readonly descriptor: ConnectorDescriptor = {
    name: 'mock-analytics',
    provider: 'mock',
    category: 'analytics',
    authMethod: 'none',
    requiredScopes: [],
    readCapabilities: ['metrics', 'funnels', 'traffic-sources'],
    writeCapabilities: [],
    apiVersion: 'mock-1',
    sandboxAvailable: true,
    dataSensitivity: 'internal',
    implementation: 'mock',
    lastReviewed: '2026-07-21',
  };

  async healthCheck(): Promise<HealthCheckResult> {
    return { healthy: true, detail: 'Mock analytics connector is always healthy.' };
  }

  /** Return synthetic daily rows for the requested metrics. */
  async query(query: MetricsQuery): Promise<MetricsRow[]> {
    const rows: MetricsRow[] = [];
    const start = new Date(query.range.start);
    const end = new Date(query.range.end);
    let seed = 42;
    const rand = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
    for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
      const row: MetricsRow = { date: d.toISOString().slice(0, 10) };
      for (const metric of query.metrics) {
        const base =
          metric === 'sessions'
            ? 1000
            : metric === 'conversions'
              ? 20
              : metric === 'revenue'
                ? 5000
                : 100;
        row[metric] = Math.round(base * (0.8 + rand() * 0.4));
      }
      rows.push(row);
    }
    return rows;
  }
}
