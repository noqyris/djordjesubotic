// Single source of truth for identity, copy and links.
// Components never hardcode copy — edit it here.

export type Social = { key: string; label: string; url: string };

// Social links intentionally omitted from the site — contact is email-only.
const socials: Social[] = [];

export const site = {
  name: "Djordje Subotic",
  shortName: "Djordje",
  initials: "DS",
  url: "https://djordjesubotic.com",
  email: "subotic.djo@gmail.com",
  location: "Serbia",
  available: true,
  role: "Full-stack Engineer",
  // The big hero statement. Kept short and high-impact.
  tagline: "I build fast, reliable products — from enterprise platforms to polished web and mobile interfaces.",
  // One-paragraph intro used in the About section.
  intro:
    "I'm Djordje — a full-stack engineer based in Serbia. For the past several years I've built and maintained production platforms for an international insurance group, alongside part-time work for product teams. I work across the stack — React, React Native, Next.js and TypeScript — and I care about speed, clean architecture and interfaces that feel inevitable.",
  // Quick stats shown under the hero.
  stats: [
    { value: "5+", label: "years professional engineering" },
    { value: "React · Next · TS", label: "core stack" },
    { value: "Serbia · Remote · CET", label: "based & available" },
  ],
  // CV/résumé link. Points at the in-app printable résumé at /cv by default.
  // To serve a real PDF instead, drop it in /public and set this to e.g.
  // "/Djordje-Subotic-CV.pdf".
  cvUrl: "/cv",
  socials,
} as const;

export function mailto(subject = "Let's work together") {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
