export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  location?: string;
  bullets: string[];
}

export interface TechStackItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Design";
  level: 1 | 2 | 3 | 4 | 5;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "email" | "instagram";
}