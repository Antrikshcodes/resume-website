export interface ActivityItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  year: number;
  badge?: string;
  isClub?: boolean;
  description: string;
  highlights?: string[];
}

export const activitiesData: ActivityItem[] = [
  {
    id: "arthakram",
    title: "ARTHAKRAM",
    organization: "Newton School of Technology",
    role: "Core Member — Product & Startup Consultation",
    period: "2026 — Present",
    year: 2026,
    badge: "Official Student Club",
    isClub: true,
    description: "Active contributor in student-led product consultation initiatives. Collaborates on product teardowns, business case studies, technical requirement specifications, and startup problem frameworks.",
    highlights: [
      "Conducts systematic product critiques and teardowns of real-world software products.",
      "Engages in startup consultation workflows and peer technology discussions."
    ]
  },
  {
    id: "newtonbotics",
    title: "NEWTONBOTICS CLUB",
    organization: "Newton School of Technology",
    role: "Technical Member — Robotics & Hardware Systems",
    period: "2026 — Present",
    year: 2026,
    badge: "Official Robotics Club",
    isClub: true,
    description: "Robotics and hardware engineering club at Newton School of Technology. Collaborates on hands-on microcontroller systems, embedded electronics, sensor integration, and autonomous robotics projects.",
    highlights: [
      "Engaged in embedded systems prototyping with microcontrollers, Arduino, and motor drivers.",
      "Collaborates on hands-on robotics hardware design and autonomous navigational circuits."
    ]
  },
  {
    id: "fetch-a-thon",
    title: "FETCH-A-THON 3.0",
    organization: "Masters’ Union",
    role: "Product Builder / Developer",
    period: "2026",
    year: 2026,
    badge: "Top 20 Recognition",
    description: "Built OrderShield AI, an automated supplier and vendor onboarding verification platform aimed at validating compliance documentation and streamlining vendor due-diligence.",
    highlights: [
      "Engineered automated compliance checking logic and vendor risk scoring modules.",
      "Recognized among the Top 20 teams out of a competitive national pool of institutional applicants."
    ]
  },
  {
    id: "hackoween",
    title: "HACKO’WEEN",
    organization: "ALTA School of Technology, IITM Murthal",
    role: "Core Developer",
    period: "2026",
    year: 2026,
    badge: "Smart City Track",
    description: "Engineered Converge, an intelligent Smart City municipal grievance management platform designed for priority clustering, root-cause detection, and citizen transparency.",
    highlights: [
      "Architected backend triage algorithms for civic issue severity categorization.",
      "Built clean, actionable administrative control views for municipal operators."
    ]
  },
  {
    id: "construct",
    title: "CoNSTruct 2.0",
    organization: "Replit × Newton School of Technology",
    role: "Product Developer",
    period: "2026",
    year: 2026,
    badge: "AI Hackathon",
    description: "Co-developed Blindspot AI, an intelligent contextual detection platform that surfaces latent operational gaps and delivers structured mitigation suggestions.",
    highlights: [
      "Iterated rapidly from system prompt architecture to a deployed interactive prototype.",
      "Demonstrated real-time context-aware feedback loops during live evaluation."
    ]
  },
  {
    id: "iim-challenge",
    title: "IIM PRODUCT CHALLENGE",
    organization: "Indian Institute of Management",
    role: "Participant & Product Strategist",
    period: "2026",
    year: 2026,
    badge: "Product Strategy",
    description: "Tackled market-driven product problem statements, analyzing customer pain points, feature prioritization frameworks, and tech-driven market fit.",
    highlights: [
      "Formulated user journey maps and quantitative feature evaluation matrices.",
      "Delivered a detailed product breakdown document and prototype execution roadmap."
    ]
  },
  {
    id: "iit-roorkee",
    title: "IIT ROORKEE eSUMMIT",
    organization: "IIT Roorkee",
    role: "Delegate & Participant",
    period: "2024",
    year: 2024,
    badge: "Innovation Summit",
    description: "Participated in entrepreneurship and engineering innovation summits, examining founder case studies, startup ecosystems, and emerging software paradigms.",
    highlights: [
      "Engaged in technical keynotes and product design masterclasses led by technology practitioners.",
      "Expanded foundational perspective on software scalability and early product cycles."
    ]
  }
];
