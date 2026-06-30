// Tech stack, grouped. Order = display order.

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Dart", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "React Hook Form", "Tailwind CSS", "Fluent UI", "Framer Motion", "Three.js / R3F"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "Supabase", "Auth.js / NextAuth", "REST", "Resend", "Zod"],
  },
  {
    title: "Testing & delivery",
    items: ["Playwright", "End-to-end testing", "CI/CD", "Azure Functions"],
  },
  {
    title: "Cloud & tooling",
    items: ["Vercel", "Nx", "Git", "Vite"],
  },
  {
    title: "AI",
    items: ["Anthropic / Claude", "fal.ai", "Multi-model pipelines", "Prompt engineering", "Agentic workflows"],
  },
  {
    title: "Mobile & games",
    items: ["React Native", "Flutter", "Capacitor", "Phaser", "On-device ML", "AdMob", "In-app purchases"],
  },
];

// Marquee strip of headline technologies shown in the hero.
export const marquee = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Fluent UI",
  "React Hook Form",
  "Nx",
  "Flutter",
  "Three.js",
  "Node.js",
  "Prisma",
  "Postgres",
  "Tailwind",
  "Claude / AI",
  "Phaser",
  "Capacitor",
  "Azure",
  "Vercel",
];
