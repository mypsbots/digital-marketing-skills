import type {
  Connector,
  ConnectorDescriptor,
  HealthCheckResult,
  MetricsQuery,
  MetricsRow,
} from '../base/connector.interface.js';

/**
 * Deterministic mock advertising connector (stands in for Google/Meta/LinkedIn
 * ads). Read-only. All write operations are intentionally unimplemented; live
 * writes require an approved approval record and a live adapter.
 */
export class MockAdvertisingConnector implements Connector {
  readonly descriptor: ConnectorDescriptor = {
    name: 'mock-advertising',
    provider: 'mock',
    category: 'advertising',
    authMethod: 'none',
    requiredScopes: [],
    readCapabilities: ['campaign-metrics', 'search-terms', 'audiences'],
    writeCapabilities: ['create-draft', 'pause-campaign', 'update-budget'],
    apiVersion: 'mock-1',
    sandboxAvailable: true,
    dataSensitivity: 'confidential',
    implementation: 'mock',
    lastReviewed: '2026-07-21',
  };

  async healthCheck(): Promise<HealthCheckResult> {
    return { healthy: true, detail: 'Mock advertising connector is always healthy.' };
  }

  async query(query: MetricsQuery): Promise<MetricsRow[]> {
    const rows: MetricsRow[] = [];
    const start = new Date(query.range.start);
    const end = new Date(query.range.end);
    let seed = 7;
    const rand = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
    for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
      const impressions = Math.round(20000 * (0.8 + rand() * 0.4));
      const clicks = Math.round(impressions * (0.01 + rand() * 0.02));
      const cost = Math.round(clicks * (0.5 + rand() * 2) * 100) / 100;
      const conversions = Math.round(clicks * (0.02 + rand() * 0.05));
      rows.push({
        date: d.toISOString().slice(0, 10),
        impressions,
        clicks,
        cost,
        conversions,
      });
    }
    return rows;
  }
}
