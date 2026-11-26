import { ProjectItem } from './types';

export const projectsData: ProjectItem[] = [
  {
    id: "swarm",
    number: "01",
    title: "SWARM",
    tagline: "Warehouse Robot Coordination & Simulation",
    category: "Robotics & Multi-Agent Systems",
    description: "Built a deterministic warehouse simulation that assigns prioritized pickup and drop-off missions, coordinates robot paths with space-time reservations, resolves deadlocks, and recovers from robot failures and dynamic aisle closures.",
    technologies: ["Next.js", "React", "TypeScript", "Zustand", "Three.js", "Vitest"],
    githubUrl: "https://github.com/Antrikshcodes/swarm-robotics-simulator",
    featured: true
  },
  {
    id: "converge",
    number: "02",
    title: "CONVERGE",
    tagline: "Smart City Intelligence Platform",
    category: "AI & Civic Tech",
    description: "An urban intelligence platform designed to improve municipal complaint resolution through intelligent issue classification, severity prioritisation, root-cause clustering, and citizen feedback loops.",
    technologies: ["Python", "FastAPI", "React", "HTML5", "CSS3", "Data Classification"],
    githubUrl: "https://github.com/Antrikshcodes",
    featured: true
  },
  {
    id: "blindspot-ai",
    number: "03",
    title: "BLINDSPOT AI",
    tagline: "Contextual Anomaly & Blindspot Detection",
    category: "Artificial Intelligence",
    description: "AI-powered product developed during CoNSTruct 2.0 (Replit × Newton School of Technology). Detects operational blindspots and provides structured diagnostic summaries before issues escalate.",
    technologies: ["Python", "Prompt Engineering", "React", "TypeScript", "REST APIs"],
    githubUrl: "https://github.com/Antrikshcodes/blindspot-ai",
    featured: true
  },
  {
    id: "ordershield-ai",
    number: "04",
    title: "ORDERSHIELD AI",
    tagline: "Supplier & Vendor Onboarding Verification Platform",
    category: "Enterprise AI & Risk",
    description: "Supplier and vendor verification system conceived during Fetch-A-Thon 3.0 (Masters' Union). Accelerates procurement due-diligence by cross-validating compliance documentation and scoring risk.",
    technologies: ["Python", "Document Parsing", "Verification Logic", "FastAPI"],
    githubUrl: "https://github.com/Antrikshcodes/ordershield",
    liveUrl: "https://ordershield-tawny.vercel.app/",
    featured: true
  },
  {
    id: "sesame-robot",
    number: "05",
    title: "SESAME ROBOT",
    tagline: "Personal Robotics & Embedded Systems",
    category: "Robotics & Hardware",
    description: "Personal hands-on robotics engineering project integrating microcontrollers, Arduino, DC/servo motor controllers, infrared/ultrasonic obstacle detection, and real-time embedded control logic.",
    technologies: ["C", "C++", "Arduino", "Microcontrollers", "Sensors", "Hardware Circuits"],
    githubUrl: "https://github.com/Antrikshcodes/obstacle-avoiding-car",
    featured: false
  },
  {
    id: "jarvis",
    number: "06",
    title: "JARVIS",
    tagline: "Personal AI Assistant & Workstation Automation",
    category: "AI & Automation",
    description: "Lightweight personal AI assistant software designed to execute developer productivity commands, automate local workstation workflows, and query contextual knowledge pipelines.",
    technologies: ["Python", "Automation Scripts", "System APIs", "Bash"],
    githubUrl: "https://github.com/Antrikshcodes/Mark-L-Assistant",
    featured: false
  }
];
