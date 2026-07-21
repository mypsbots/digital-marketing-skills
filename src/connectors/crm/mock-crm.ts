import type {
  Connector,
  ConnectorDescriptor,
  DateRange,
  HealthCheckResult,
} from '../base/connector.interface.js';

export interface FunnelSnapshot {
  leads: number;
  mqls: number;
  sqls: number;
  opportunities: number;
  customers: number;
}

/**
 * Deterministic mock CRM connector (stands in for HubSpot/Salesforce). Read-only
 * funnel snapshots for reporting and analysis without real customer data.
 */
export class MockCrmConnector implements Connector {
  readonly descriptor: ConnectorDescriptor = {
    name: 'mock-crm',
    provider: 'mock',
    category: 'crm',
    authMethod: 'none',
    requiredScopes: [],
    readCapabilities: ['funnel-snapshot', 'pipeline'],
    writeCapabilities: ['create-workflow-draft'],
    apiVersion: 'mock-1',
    sandboxAvailable: true,
    dataSensitivity: 'restricted',
    implementation: 'mock',
    lastReviewed: '2026-07-21',
  };

  async healthCheck(): Promise<HealthCheckResult> {
    return { healthy: true, detail: 'Mock CRM connector is always healthy.' };
  }

  async funnelSnapshot(_range: DateRange): Promise<FunnelSnapshot> {
    return { leads: 1200, mqls: 480, sqls: 210, opportunities: 90, customers: 24 };
  }
}
