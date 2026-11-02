import { ProjectItem } from './types';

export const projectsData: ProjectItem[] = [
  {
    id: "converge",
    number: "01",
    title: "CONVERGE",
    tagline: "Smart City Intelligence Platform",
    category: "AI & Civic Tech",
    description: "An urban intelligence platform architected to improve city-scale municipal grievance resolution through intelligent complaint classification, severity prioritisation, root-cause detection, and transparent citizen feedback loops.",
    technologies: ["Python", "FastAPI", "React", "Tailwind CSS", "Data Analysis"],
    githubUrl: "https://github.com/Antrikshcodes",
    featured: true
  },
  {
    id: "blindspot-ai",
    number: "02",
    title: "BLINDSPOT AI",
    tagline: "Contextual Anomaly & Blindspot Detection",
    category: "Artificial Intelligence",
    description: "AI-driven application developed during CoNSTruct 2.0 (Replit x Newton School of Technology). Identifies critical operational blindspots and surfaces actionable intelligence before compounding issues occur.",
    technologies: ["Python", "AI Integration", "Prompt Engineering", "Modern Web UI"],
    githubUrl: "https://github.com/Antrikshcodes/blindspot-ai",
    featured: true
  },
  {
    id: "ordershield-ai",
    number: "03",
    title: "ORDERSHIELD AI",
    tagline: "Supplier & Vendor Onboarding Verification",
    category: "Enterprise AI & Risk",
    description: "Supplier and vendor verification system conceived and built for Fetch-A-Thon 3.0 (Masters' Union). Streamlines vendor onboarding due-diligence by cross-validating compliance documentation and scoring risk.",
    technologies: ["Python", "Document Parsing", "Verification Logic", "REST API"],
    githubUrl: "https://github.com/Antrikshcodes/ordershield",
    featured: true
  },
  {
    id: "sesame-robot",
    number: "04",
    title: "SESAME ROBOT",
    tagline: "Autonomous Microcontroller Embedded System",
    category: "Robotics & Hardware",
    description: "Personal hands-on robotics engineering project integrating microcontrollers, DC/servo motor controllers, infrared/ultrasonic obstacle detection, and real-time embedded logic for physical automation.",
    technologies: ["Embedded C/C++", "Microcontrollers", "Motor Drivers", "Sensors"],
    githubUrl: "https://github.com/Antrikshcodes/obstacle-avoiding-car",
    featured: false
  },
  {
    id: "jarvis",
    number: "05",
    title: "JARVIS",
    tagline: "Personal AI Assistant & Automation Engine",
    category: "AI & Productivity",
    description: "Custom personal AI assistant software designed to execute developer productivity commands, automate local workstation workflows, and query context-aware knowledge pipelines.",
    technologies: ["Python", "Speech Recognition", "Automation Scripts", "API Integrations"],
    githubUrl: "https://github.com/Antrikshcodes/Mark-L-Assistant",
    featured: false
  }
];
