export interface Technology {
  name: string;
  category: string;
  tag?: string;
  iconSlug?: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
}

export const skillCategoryGroups: SkillCategoryGroup[] = [
  {
    id: "programming-languages",
    title: "PROGRAMMING LANGUAGES",
    description: "Core languages utilized across software, systems, and algorithms",
    technologies: [
      { name: "Python", category: "Language", tag: "Core" },
      { name: "C++", category: "Language", tag: "Systems" },
      { name: "C", category: "Language", tag: "Low-Level" },
      { name: "JavaScript", category: "Language", tag: "Web" },
      { name: "TypeScript", category: "Language", tag: "Typed" },
      { name: "Java", category: "Language", tag: "OOP" },
      { name: "Bash", category: "Language", tag: "Scripting" }
    ]
  },
  {
    id: "frontend-development",
    title: "FRONTEND DEVELOPMENT",
    description: "Modern component architecture, web standards, and UI rendering",
    technologies: [
      { name: "React", category: "Frontend", tag: "UI" },
      { name: "Next.js", category: "Frontend", tag: "SSR" },
      { name: "HTML5", category: "Frontend", tag: "Structure" },
      { name: "CSS3", category: "Frontend", tag: "Styling" },
      { name: "AngularJS", category: "Frontend", tag: "SPA" },
      { name: "CanvasJS", category: "Frontend", tag: "Charts" }
    ]
  },
  {
    id: "backend-cloud",
    title: "BACKEND & CLOUD",
    description: "Server architecture, microservices, REST APIs, and cloud infrastructure",
    technologies: [
      { name: "Node.js", category: "Backend", tag: "Runtime" },
      { name: "Django", category: "Backend", tag: "Framework" },
      { name: "Flask", category: "Backend", tag: "APIs" },
      { name: "Firebase", category: "Backend", tag: "BaaS" },
      { name: "Microsoft Azure", category: "Cloud", tag: "Cloud" },
      { name: "Docker", category: "DevOps", tag: "Containers" }
    ]
  },
  {
    id: "ai-data",
    title: "AI, ML & DATA",
    description: "Machine learning workflows, deep learning, and analytical processing",
    technologies: [
      { name: "PyTorch", category: "AI/ML", tag: "Deep Learning" },
      { name: "Pandas", category: "Data", tag: "Analytics" }
    ]
  },
  {
    id: "databases",
    title: "DATABASES",
    description: "Relational and document storage systems for persistent applications",
    technologies: [
      { name: "MongoDB", category: "Database", tag: "NoSQL" },
      { name: "MySQL", category: "Database", tag: "SQL" },
      { name: "SQLite", category: "Database", tag: "Embedded" },
      { name: "MS SQL Server", category: "Database", tag: "Enterprise" },
      { name: "Oracle", category: "Database", tag: "Enterprise" }
    ]
  },
  {
    id: "mobile-hardware",
    title: "MOBILE, ROBOTICS & EMBEDDED",
    description: "Cross-platform mobile apps and microcontroller hardware integration",
    technologies: [
      { name: "React Native", category: "Mobile", tag: "Mobile" },
      { name: "Flutter", category: "Mobile", tag: "Mobile" },
      { name: "Android", category: "Mobile", tag: "OS" },
      { name: "Arduino", category: "Hardware", tag: "Robotics" }
    ]
  },
  {
    id: "tools-creative",
    title: "DEVELOPER & CREATIVE TOOLS",
    description: "Version control, Linux environments, 3D modelling, and interface design",
    technologies: [
      { name: "Git", category: "Dev Tools", tag: "VCS" },
      { name: "Linux", category: "Dev Tools", tag: "Environment" },
      { name: "Figma", category: "Design", tag: "UI/UX" },
      { name: "Framer", category: "Design", tag: "Prototyping" },
      { name: "Blender", category: "3D", tag: "3D Graphics" },
      { name: "Photoshop", category: "Design", tag: "Creative" },
      { name: "Unity", category: "Engine", tag: "Simulation" },
      { name: "Unreal Engine", category: "Engine", tag: "Simulation" }
    ]
  }
];
