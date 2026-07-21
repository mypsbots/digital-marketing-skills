import type { Connector } from './base/connector.interface.js';
import { MockAnalyticsConnector } from './analytics/mock-analytics.js';
import { MockAdvertisingConnector } from './advertising/mock-advertising.js';
import { MockCrmConnector } from './crm/mock-crm.js';
import { logger } from '../utils/logger.js';

/**
 * Connector registry. Only allowlisted connectors are registered. When live
 * connectors are disabled (the default) only mock connectors are available.
 */
export class ConnectorRegistry {
  private connectors = new Map<string, Connector>();

  constructor(enableLive: boolean) {
    // Mock connectors are always available.
    this.register(new MockAnalyticsConnector());
    this.register(new MockAdvertisingConnector());
    this.register(new MockCrmConnector());

    if (enableLive) {
      logger.warn(
        'Live connectors are enabled by configuration, but no live adapters are bundled by ' +
          'default. Add live adapters explicitly and provide credentials via the secret provider.',
      );
    }
  }

  private register(connector: Connector): void {
    this.connectors.set(connector.descriptor.name, connector);
  }

  get(name: string): Connector | undefined {
    return this.connectors.get(name);
  }

  all(): Connector[] {
    return [...this.connectors.values()];
  }

  describe(): Array<Connector['descriptor']> {
    return this.all().map((c) => c.descriptor);
  }
}
