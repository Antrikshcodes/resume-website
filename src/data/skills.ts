import { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    key: "programming",
    skills: [
      { name: "Python", levelDescription: "Core programming, scripting, problem solving", isPrimary: true, tag: "Primary" },
      { name: "HTML", levelDescription: "Semantic structuring, web accessibility standards", isPrimary: true, tag: "Web" },
      { name: "CSS", levelDescription: "Responsive styling, modern layouts, micro-animations", isPrimary: true, tag: "Web" }
    ]
  },
  {
    title: "DEVELOPMENT TOOLS",
    key: "tools",
    skills: [
      { name: "Git", levelDescription: "Version control, branching, collaborative workflows", isPrimary: true, tag: "VCS" },
      { name: "GitHub", levelDescription: "Repository management, collaboration, open-source", isPrimary: true, tag: "DevOps" },
      { name: "React", levelDescription: "Component architecture & modern web UIs (Applied)", isPrimary: false, tag: "Frontend" }
    ]
  },
  {
    title: "AREAS OF INTEREST",
    key: "interests",
    skills: [
      { name: "Artificial Intelligence", levelDescription: "Core concepts, agentic systems, applied intelligence", tag: "AI/ML" },
      { name: "Machine Learning", levelDescription: "Foundational algorithms & data-driven problem solving", tag: "AI/ML" },
      { name: "Robotics", levelDescription: "Microcontrollers, motor control, sensor integration", tag: "Hardware" },
      { name: "Product Development", levelDescription: "Ideation, user verification, rapid prototyping", tag: "Product" },
      { name: "UI/UX", levelDescription: "Minimalist editorial aesthetics, micro-interactions", tag: "Design" }
    ]
  }
];

// Note: Proficiency levels reflect genuine student builds
