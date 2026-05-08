import {
  BriefcaseBusiness,
  Building2,
  Compass,
  FileText,
  Globe2,
  Handshake,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundSearch
} from "lucide-react";

export const navItems = [
  { label: "Employers", href: "#employers" },
  { label: "Candidates", href: "#candidates" },
  { label: "Jobs", href: "#jobs" },
  { label: "Referral", href: "#referral" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const employerServices = [
  {
    title: "Executive Search",
    description:
      "Discreet search for leadership, specialist, and revenue-critical hires.",
    icon: UserRoundSearch
  },
  {
    title: "Contingency Recruitment",
    description:
      "Responsive shortlist delivery for permanent roles where speed and accuracy both matter.",
    icon: BriefcaseBusiness
  },
  {
    title: "Market Mapping",
    description:
      "Talent intelligence across competitors, functions, salary bands, and availability.",
    icon: Globe2
  },
  {
    title: "Talent Pipeline Building",
    description:
      "Always-on engagement for roles that cannot wait for the market to come to you.",
    icon: Network
  },
  {
    title: "AI-Assisted Candidate Sourcing",
    description:
      "Structured search workflows shaped by data, outreach precision, and judgement.",
    icon: Sparkles
  }
];

export const candidateServices = [
  {
    title: "Career Consultation",
    description:
      "Confidential guidance on role fit, market position, and next steps.",
    icon: Compass
  },
  {
    title: "Confidential Job Matching",
    description:
      "Selective introductions aligned with your ambition, strengths, and timing.",
    icon: ShieldCheck
  },
  {
    title: "CV Submission",
    description:
      "Share your profile for current searches and future roles across Hong Kong.",
    icon: FileText
  },
  {
    title: "Interview Support",
    description:
      "Briefing and feedback so you can present your value with confidence.",
    icon: Target
  }
];

export const jobs = [
  {
    title: "Sales Manager",
    location: "Hong Kong",
    salary: "Competitive package",
    type: "Permanent"
  },
  {
    title: "Business Development Manager",
    location: "Hong Kong",
    salary: "Base + commission",
    type: "Permanent"
  },
  {
    title: "HR & Admin Officer",
    location: "Kowloon / Hybrid",
    salary: "Market aligned",
    type: "Permanent"
  },
  {
    title: "IT Support Engineer",
    location: "Hong Kong Island",
    salary: "Negotiable",
    type: "Permanent"
  },
  {
    title: "Finance Manager",
    location: "Hong Kong",
    salary: "Senior package",
    type: "Permanent"
  }
];

export const differentiators = [
  {
    title: "Focused Search",
    description:
      "Every mandate starts with a calibrated brief, market logic, and a clear candidate narrative.",
    icon: Search
  },
  {
    title: "Founder-Led Judgement",
    description:
      "Senior attention on the roles where trust, nuance, and speed decide the outcome.",
    icon: Handshake
  },
  {
    title: "Hong Kong Context",
    description:
      "Local market sensitivity across commercial, corporate, technology, finance, and operations talent.",
    icon: Building2
  }
];

export const iconServices = [
  "Executive Search",
  "Contingency Recruitment",
  "Market Mapping",
  "AI Sourcing",
  "Talent Pipeline",
  "Career Consultation"
];
