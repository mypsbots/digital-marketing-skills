import type { Skill } from './types.js';
import { loadAllSkills } from './skill-loader.js';
import { logger } from '../utils/logger.js';

export interface SkillQuery {
  category?: string;
  industry?: string;
  funnelStage?: string;
  channel?: string;
  text?: string;
  riskLevel?: string;
}

/**
 * In-memory registry of all loaded skills, with lookup and filtering.
 */
export class SkillRegistry {
  private skills = new Map<string, Skill>();

  async load(skillsDir: string): Promise<void> {
    const skills = await loadAllSkills(skillsDir);
    this.skills.clear();
    for (const skill of skills) {
      if (this.skills.has(skill.metadata.id)) {
        logger.warn('Duplicate skill id ignored', { id: skill.metadata.id, file: skill.filePath });
        continue;
      }
      this.skills.set(skill.metadata.id, skill);
    }
    logger.info('Skill registry loaded', { count: this.skills.size });
  }

  get(id: string): Skill | undefined {
    return this.skills.get(id);
  }

  all(): Skill[] {
    return [...this.skills.values()];
  }

  count(): number {
    return this.skills.size;
  }

  categories(): string[] {
    return [...new Set(this.all().map((s) => s.categoryDir))].sort();
  }

  search(query: SkillQuery): Skill[] {
    const text = query.text?.toLowerCase();
    return this.all().filter((s) => {
      const m = s.metadata;
      if (query.category && s.categoryDir !== query.category && m.category !== query.category)
        return false;
      if (query.industry && !m.industries?.includes(query.industry as never)) return false;
      if (query.funnelStage && !m.funnel_stages?.includes(query.funnelStage as never)) return false;
      if (query.channel && !(m.channels ?? []).includes(query.channel)) return false;
      if (query.riskLevel && m.risk_level !== query.riskLevel) return false;
      if (text) {
        const haystack = [m.id, m.name, m.description, ...(m.tags ?? [])]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(text)) return false;
      }
      return true;
    });
  }
}
