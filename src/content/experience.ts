// Professional timeline, reverse-chronological (newest first).
// Specific internal project/product names are intentionally omitted.

export type Role = {
  company: string;
  title: string;
  period: string;
  type: "Full-time" | "Part-time";
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "GrEco",
    title: "Frontend / Full-stack Engineer",
    period: "2021 — Present",
    type: "Full-time",
    current: true,
    summary:
      "Building and maintaining internal enterprise platforms for one of Europe's leading insurance and risk-advisory groups, across several large applications.",
    highlights: [
      "Developed production frontends for multiple large internal platforms.",
      "Worked across the stack with React, Next.js, TypeScript and Azure Functions.",
      "Built and maintained end-to-end test suites with Playwright and CI/CD pipelines.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Fluent UI", "React Hook Form", "Nx", "Azure Functions"],
  },
  {
    company: "Onogee Global",
    title: "Full-stack Engineer",
    period: "2024 — 2026",
    type: "Part-time",
    summary:
      "Worked across the stack on a logistics management platform — building frontend features and the backend services and APIs behind them.",
    highlights: [
      "Built frontend features for a logistics management platform.",
      "Developed backend services and REST APIs with Node.js and Express.",
      "Integrated Supabase for data and Resend for transactional email.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "Supabase", "Resend"],
  },
  {
    company: "Esportsbet",
    title: "Frontend Engineer",
    period: "2022 — 2024",
    type: "Part-time",
    summary:
      "Built frontend features and internal admin panels for an esports betting product, working with a fast-moving web stack.",
    highlights: [
      "Delivered responsive, interactive UI for a real-time betting product.",
      "Built internal admin panels for managing the platform.",
      "Implemented complex, validated forms with React Hook Form.",
    ],
    stack: ["React", "TypeScript", "React Hook Form", "Nx"],
  },
];
