export interface Skill {
  name: string;
  level: number;
  description: string;
}

export type SkillIconType = 'cpu' | 'server' | 'code' | 'wrench';

export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  iconType: SkillIconType;
  summary: string;
  skills: Skill[];
}

export interface EducationItem {
  year: string;
  title: string;
  description: string;
}

export interface OfflinePursuitItem {
  title: string;
  iconType: 'compass' | 'coffee';
  description: string;
}
