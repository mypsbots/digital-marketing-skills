/**
 * Secret-manager abstraction. Secrets are read ONLY from environment variables.
 * This indirection means skills, tools and connectors never read process.env
 * directly, and a different backend (e.g. a cloud secret manager) can be swapped
 * in without changing callers. Secrets are never logged or returned to the model.
 */
export interface SecretProvider {
  get(name: string): string | undefined;
  require(name: string): string;
  has(name: string): boolean;
}

class EnvSecretProvider implements SecretProvider {
  get(name: string): string | undefined {
    const value = process.env[name];
    return value && value.length > 0 ? value : undefined;
  }

  has(name: string): boolean {
    return this.get(name) !== undefined;
  }

  require(name: string): string {
    const value = this.get(name);
    if (value === undefined) {
      throw new Error(`Missing required secret: ${name}`);
    }
    return value;
  }
}

export const secrets: SecretProvider = new EnvSecretProvider();
