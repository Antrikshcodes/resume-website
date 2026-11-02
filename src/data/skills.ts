export interface Technology {
  name: string;
  category: string;
  tag?: string;
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
    title: "Programming Languages",
    description: "Core languages for software engineering, system architecture, and algorithmic problem-solving.",
    technologies: [
      { name: "Python", category: "Languages", tag: "Primary" },
      { name: "C++", category: "Languages", tag: "Systems" },
      { name: "C", category: "Languages", tag: "Low-level" },
      { name: "JavaScript", category: "Languages", tag: "Web" },
      { name: "TypeScript", category: "Languages", tag: "Typed" },
      { name: "Java", category: "Languages", tag: "OOP" },
      { name: "Bash", category: "Languages", tag: "Scripting" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Web markup, semantic structuring, modern styling, and interactive chart visualization.",
    technologies: [
      { name: "HTML5", category: "Frontend", tag: "Markup" },
      { name: "CSS3", category: "Frontend", tag: "Styling" },
      { name: "AngularJS", category: "Frontend", tag: "Framework" },
      { name: "CanvasJS", category: "Frontend", tag: "Charts" }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server runtimes, microservices, REST API engineering, and cloud infrastructure.",
    technologies: [
      { name: "Node.js", category: "Backend", tag: "Runtime" },
      { name: "Django", category: "Backend", tag: "Web" },
      { name: "Flask", category: "Backend", tag: "APIs" },
      { name: "Firebase", category: "Backend", tag: "BaaS" },
      { name: "Microsoft Azure", category: "Backend", tag: "Cloud" }
    ]
  },
  {
    id: "frameworks-libraries",
    title: "Frameworks and Libraries",
    description: "Component systems, machine learning toolkits, and data manipulation libraries.",
    technologies: [
      { name: "React", category: "Frameworks", tag: "UI" },
      { name: "Next.js", category: "Frameworks", tag: "Full-Stack" },
      { name: "PyTorch", category: "Frameworks", tag: "Deep Learning" },
      { name: "Pandas", category: "Frameworks", tag: "Data Analysis" }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational, document, and embedded storage solutions for robust data persistence.",
    technologies: [
      { name: "MongoDB", category: "Databases", tag: "NoSQL" },
      { name: "MySQL", category: "Databases", tag: "Relational" },
      { name: "SQLite", category: "Databases", tag: "Embedded" },
      { name: "MS SQL Server", category: "Databases", tag: "Enterprise" },
      { name: "Oracle", category: "Databases", tag: "Enterprise" }
    ]
  },
  {
    id: "development-tools",
    title: "Development Tools",
    description: "Version control systems, containerization, and Unix development environments.",
    technologies: [
      { name: "Git", category: "Tools", tag: "VCS" },
      { name: "Docker", category: "Tools", tag: "Containers" },
      { name: "Linux", category: "Tools", tag: "OS" }
    ]
  },
  {
    id: "other-technologies",
    title: "Other Technologies",
    description: "Mobile applications, robotics/embedded microcontrollers, 3D modelling, and creative tools.",
    technologies: [
      { name: "React Native", category: "Other", tag: "Mobile" },
      { name: "Flutter", category: "Other", tag: "Mobile" },
      { name: "Android", category: "Other", tag: "Platform" },
      { name: "Arduino", category: "Other", tag: "Robotics" },
      { name: "Figma", category: "Other", tag: "Design" },
      { name: "Framer", category: "Other", tag: "Prototyping" },
      { name: "Blender", category: "Other", tag: "3D" },
      { name: "Photoshop", category: "Other", tag: "Creative" },
      { name: "Unity", category: "Other", tag: "Engine" },
      { name: "Unreal Engine", category: "Other", tag: "Simulation" }
    ]
  }
];
