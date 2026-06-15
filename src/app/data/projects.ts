export interface Project {
  title: string;
  shortTitle: string;
  url: string;
  href: string;
  year: string;
  desc: string;
  tags: string[];
  featured: boolean;
  previewTone: string;
}

export const projects: Project[] = [
  {
    title: "Path Shala — Learning Management System",
    shortTitle: "Path Shala",
    url: "pathshal-fr.onrender.com",
    href: "https://pathshal-fr.onrender.com/",
    year: "2025",
    desc: "Multi-role LMS backend for Admin, Instructor, and Student workflows with JWT authentication, role-based access control, REST APIs, filtering, pagination, and Cloudinary uploads.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    featured: true,
    previewTone: "#EAF7FD",
  },
  {
    title: "Expense Tracker — Finance Dashboard",
    shortTitle: "Expense Tracker",
    url: "expense-tracker-orpin-nu-68.vercel.app",
    href: "https://expense-tracker-orpin-nu-68.vercel.app/",
    year: "2026",
    desc: "AI-powered personal finance tracker with Better Auth, Prisma ORM, PostgreSQL, REST APIs, and an intelligent financial assistant that analyzes expenses, income, budgets, and savings through natural language conversations.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Langchain",
      "AI Agent",
      "Zustand",
    ],
    featured: true,
    previewTone: "#111827",
  },
  {
    title: "Shortit — URL Shortener",
    shortTitle: "Shortit",
    url: "shorter-frontend.vercel.app",
    href: "https://shorter-frontend.vercel.app/",
    year: "2025",
    desc: "URL shortener deployed on Vercel with secure JWT authentication via HTTP-only cookies and a personalized dashboard for link tracking and analytics.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
    featured: false,
    previewTone: "#38A9F8",
  },
  {
    title: "AI Quiz App — Adaptive Assessment Platform",
    shortTitle: "AI Quiz App",
    url: "ai-quiz-frontend-red.vercel.app",
    href: "https://ai-quiz-frontend-red.vercel.app/",
    year: "2025",
    desc: "Backend services for dynamic quiz generation with Google Gemini API, attempt tracking, result evaluation, optimized MongoDB schemas, and scalable APIs.",
    tags: ["Node.js", "Express.js", "MongoDB", "Gemini API"],
    featured: false,
    previewTone: "#111024",
  },
  {
    title: "Recipe Finder — Web Application",
    shortTitle: "Recipe Finder",
    url: "recipe-finder-app-brown.vercel.app",
    href: "https://recipe-finder-app-brown.vercel.app/",
    year: "2025",
    desc: "Responsive recipe discovery app with async REST API integration, real-time search and filtering, and cross-device compatible layouts.",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    featured: false,
    previewTone: "#F4F4F4",
  },
];
