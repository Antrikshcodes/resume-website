export interface PersonalInfo {
  name: string;
  role: string;
  institution: string;
  degree: string;
  academicYear: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  tagline: string;
  statusBadge: string;
  interests: string[];
}

export interface SkillCategory {
  title: string;
  key: 'programming' | 'tools' | 'interests';
  skills: {
    name: string;
    levelDescription?: string;
    isPrimary?: boolean;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  year: number;
  description: string;
  highlights?: string[];
  badge?: string;
  link?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}

export interface EducationInfo {
  institution: string;
  university: string;
  degree: string;
  specialization: string;
  period: string;
  location: string;
  highlights: string[];
}

// Readonly constraints ensure data immutability

// Readonly constraints ensure data immutability

// Readonly constraints ensure data immutability

// Readonly constraints ensure data immutability

// Readonly constraints ensure data immutability
