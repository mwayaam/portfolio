import type {
  Project,
  SkillCategory,
  ExperienceEntry,
  TechStackItem,
  SocialLink,
} from "../types";

export const profile = {
  name: "Maryam Tariq",
  role: "AI & Machine Learning Developer",
  tagline:
    "Building end-to-end deep learning systems, predictive analytics pipelines, and intelligent web applications.",
  bio: "Third-year Artificial Intelligence student at NASTP Institute of Information Technology with hands-on experience building end-to-end deep learning systems, predictive analytics pipelines, and intelligent web applications. Proven ability to manage client accounts, coordinate deliverables under deadline, and communicate technical findings to diverse stakeholders.",
  location: "Karachi, Pakistan",
  avatar: "",
};

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", url: "https://github.com/Duxb3rt", icon: "github" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/maryamtariq", icon: "linkedin" },
  { id: "email", label: "Email", url: "mailto:mwayamsiddiqui@gmail.com", icon: "email" },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-dl",
    category: "AI & Deep Learning",
    skills: ["PyTorch", "EfficientNet", "Temporal Transformers", "FocalLoss", "Mixed Precision (FP16)", "Optuna HPO", "FaceForensics++"],
  },
  {
    id: "data-analytics",
    category: "Data & Analytics",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "PCA", "SQL"],
  },
  {
    id: "web-deployment",
    category: "Web & Deployment",
    skills: ["Streamlit", "Docker", "Dialogflow ES", "HTML/CSS", "VS Code", "Kaggle (T4 GPU)"],
  },
  {
    id: "professional",
    category: "Professional",
    skills: ["Project coordination", "Client account management", "Stakeholder reporting", "Cross-functional collaboration"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Virtual Assistant",
    organization: "Contigo Media Services",
    startDate: "Jul 2024",
    endDate: "Jan 2025",
    location: "Remote",
    bullets: [
      "Coordinated directly with clients to plan, restructure, and execute product listing strategies across multiple accounts, improving search visibility and buyer engagement.",
      "Managed concurrent client accounts independently, tracking deliverables and maintaining consistent output standards without supervision across a 6-month remote engagement.",
      "Handled inbound buyer communication and facilitated transactions, developing strong written communication and stakeholder management skills in a fast-paced digital environment.",
    ],
  },
  {
    id: "exp-2",
    role: "Script Writer",
    organization: "Content Creation Company",
    startDate: "Apr 2023",
    endDate: "Apr 2024",
    location: "Remote",
    bullets: [
      "Researched industry trends and produced structured, audience-targeted scripts across a 12-month contract — translating raw briefs into publication-ready deliverables under strict deadlines.",
      "Synthesized information from multiple sources into cohesive written reports, consistently reducing client revision cycles through precise attention to narrative structure.",
    ],
  },
  {
    id: "exp-3",
    role: "Intern",
    organization: "Amriq Private Ltd",
    startDate: "Jan 2023",
    endDate: "Feb 2023",
    location: "Karachi",
    bullets: [
      "Designed a quality assurance checklist that reduced product-related customer complaints during the internship tenure.",
      "Planned and executed social media content strategies, reporting on engagement metrics and contributing to increased follower reach within a 2-month deployment window.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-deepguard",
    title: "DeepGuard — Real-Time Deepfake Detection",
    description:
      "A 6-phase deepfake detection system combining EfficientNet-B0 with a Temporal Transformer, trained on FaceForensics++. Includes FocalLoss, FP16 mixed precision, Optuna HPO, ablation studies, and adversarial robustness probes. Deployed as a Dockerized Streamlit app.",
    tech: ["Python", "PyTorch", "EfficientNet-B0", "Temporal Transformers", "Streamlit", "Docker"],
    featured: true,
  },
  {
    id: "proj-markhor",
    title: "Markhor Lifestyle (MLS) — E-Commerce Chatbot",
    description:
      "A Dialogflow ES conversational chatbot integrated into a Pakistani fashion e-commerce site, supporting product discovery, buyer FAQs, order handling, and navigation.",
    tech: ["Dialogflow ES", "HTML/CSS", "JavaScript", "df-messenger"],
  },
  {
    id: "proj-p2p-chat",
    title: "Peer-to-Peer Python Chat Application",
    description:
      "A real-time P2P chat app with a custom GUI built using socket programming, resolving firewall port-blocking and network isolation issues through hotspot-based networking.",
    tech: ["Python", "Tkinter", "CustomTkinter", "Socket Programming"],
  },
  {
    id: "proj-student-advisor",
    title: "Student Performance Advisor",
    description:
      "An AI-powered academic analytics system generating personalized performance insights from multi-feature student datasets, with classification, clustering, and interactive PCA visualizations.",
    tech: ["Python", "Scikit-learn", "Random Forest", "K-Means", "PCA", "ipywidgets"],
  },
  {
    id: "proj-cancer-risk",
    title: "Cancer Risk Prediction & Patient Clustering",
    description:
      "A predictive analytics pipeline for breast cancer risk stratification across 569 samples and 30 features, using K-Means clustering with PCA for patient segmentation.",
    tech: ["Python", "Scikit-learn", "Pandas", "PCA", "Fuzzy Logic"],
  },
  {
    id: "proj-transport",
    title: "Transport Management System",
    description:
      "A normalized relational database for large-scale transport operations — routing, scheduling, fleet and payment management — with structured reporting queries across 8+ entities.",
    tech: ["SQL", "MySQL", "ER Modelling", "DBMS"],
  },
  {
    id: "proj-sign-language",
    title: "Sign Language to Speech Conversion System",
    description:
      "A real-time gesture recognition system converting hand signs to multilingual speech output, built for accessibility and social impact.",
    tech: ["Python", "Computer Vision", "Google Teachable Machine", "pyttsx3"],
  },
  {
    id: "proj-flippy",
    title: "Flippy — AI Flashcard App",
    description:
      "Sole product owner from concept to documentation — designed the system architecture, feature roadmap, and deployment plan for an AI-powered learning application.",
    tech: ["Product Design", "Software Engineering"],
  },
];

export const techStack: TechStackItem[] = [
  { id: "ts-1", name: "Python", category: "Frontend", level: 5 },
  { id: "ts-2", name: "PyTorch", category: "Frontend", level: 4 },
  { id: "ts-3", name: "Scikit-learn", category: "Frontend", level: 4 },
  { id: "ts-4", name: "Streamlit", category: "Frontend", level: 4 },
  { id: "ts-5", name: "HTML/CSS", category: "Frontend", level: 3 },
  { id: "ts-6", name: "JavaScript", category: "Frontend", level: 3 },
  { id: "ts-7", name: "SQL", category: "Database", level: 3 },
  { id: "ts-8", name: "Docker", category: "Tools", level: 3 },
  { id: "ts-9", name: "VS Code", category: "Tools", level: 5 },
  { id: "ts-10", name: "Git", category: "Tools", level: 3 },
  { id: "ts-11", name: "Excel", category: "Tools", level: 4 },
  { id: "ts-12", name: "Dialogflow ES", category: "Backend", level: 3 },
];