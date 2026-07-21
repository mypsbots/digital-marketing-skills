import { randomUUID } from 'node:crypto';

/** Generate a prefixed unique identifier, e.g. audit_1a2b3c... */
export function generateId(prefix: string): string {
  return `${prefix}_${randomUUID()}`;
}

/** Current timestamp as a UTC ISO 8601 string. */
export function nowIso(): string {
  return new Date().toISOString();
}
