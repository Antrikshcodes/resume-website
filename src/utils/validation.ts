import { PersonalInfo, ProjectItem, SkillCategory } from '../data/types';

export const validatePersonalInfo = (info: PersonalInfo): boolean => {
  return Boolean(
    info.name &&
    info.institution &&
    info.email &&
    info.github &&
    info.role
  );
};

export const validateProjects = (projects: ProjectItem[]): boolean => {
  return projects.length === 5 && projects.every(p => p.title && p.technologies.length > 0);
};

export const validateSkills = (categories: SkillCategory[]): boolean => {
  return categories.length === 3 && categories.every(c => c.skills.length > 0);
};
