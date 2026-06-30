// What I do — capability cards (replaces the personal-products showcase).
// Backed strictly by real stack + employment. No invented products/metrics.

export type Capability = {
  kind: string; // short corner label
  title: string;
  blurb: string;
  stack: string[];
  hue: number; // accent hue (deg) for the card's aurora glow
  featured?: boolean;
  evidence?: string; // small truthful footnote, e.g. where it's used in production
};

export const capabilities: Capability[] = [
  {
    kind: "Enterprise · production",
    title: "Enterprise web platforms",
    blurb:
      "Building and maintaining large internal platforms for a European insurance & risk-advisory group — multiple apps, long-lived codebases, real users.",
    stack: ["React", "Next.js", "TypeScript", "Azure Functions"],
    hue: 210,
    featured: true,
    evidence: "In production at GrEco",
  },
  {
    kind: "Quality",
    title: "Test automation & CI/CD",
    blurb:
      "End-to-end test suites and delivery pipelines that let teams ship with confidence instead of crossing their fingers.",
    stack: ["Playwright", "CI/CD"],
    hue: 152,
    evidence: "In production at GrEco",
  },
  {
    kind: "Frontend",
    title: "Frontend engineering & UI systems",
    blurb:
      "Responsive, accessible, genuinely interactive product UI — design-system work and the motion polish that makes interfaces feel inevitable.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    hue: 320,
  },
  {
    kind: "Backend",
    title: "Type-safe APIs & data",
    blurb:
      "Typed end-to-end APIs and data access — schemas, validation and a database layer that stays predictable as features grow.",
    stack: ["Node.js", "Prisma", "PostgreSQL", "Zod"],
    hue: 268,
  },
  {
    kind: "AI",
    title: "AI / LLM integration",
    blurb:
      "Wiring large language models and multi-model pipelines into real product workflows — beyond a chat box.",
    stack: ["Anthropic / Claude", "fal.ai"],
    hue: 28,
  },
  {
    kind: "Range",
    title: "Cross-platform when it's needed",
    blurb:
      "Comfortable reaching for mobile, real-time or 3D when a product calls for it — shipped to iOS and Android, and built in WebGL.",
    stack: ["Flutter", "Capacitor", "Three.js", "Phaser"],
    hue: 190,
  },
];
