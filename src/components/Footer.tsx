import { site } from "@/content/site";

// Same section anchors as the top nav — clicking scrolls the user to the section.
const links = [
  { href: "#capabilities", label: "What I do" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#profile", label: "Profile" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 text-sm text-[var(--color-faint)] md:flex-row">
        <p>
          {site.name} — {site.role}. Built with Next.js.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-[var(--color-fg)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
