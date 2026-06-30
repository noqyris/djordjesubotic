import {
  Clock,
  MapPin,
  Languages as LanguagesIcon,
  BriefcaseBusiness,
  CalendarCheck,
  GraduationCap,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { facts, languages, type Fact } from "@/content/profile";
import { site } from "@/content/site";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";

const icons: Record<Fact["icon"], typeof Clock> = {
  clock: Clock,
  pin: MapPin,
  languages: LanguagesIcon,
  briefcase: BriefcaseBusiness,
  calendar: CalendarCheck,
  education: GraduationCap,
};

export default function Profile() {
  const linkedin = site.socials.find((s) => s.key === "linkedin")?.url;

  return (
    <section id="profile" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="06" kicker="Profile" title="The details a recruiter needs." />

        <Reveal>
          <div className="ring-aurora relative overflow-hidden rounded-[2rem] glass-strong p-7 md:p-10">
            {/* fact grid */}
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
              {facts.map((f) => {
                const Icon = icons[f.icon];
                return (
                  <div key={f.label} className="flex flex-col gap-2 bg-[var(--color-bg-soft)] p-5">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--color-aurora-2)]">
                      <Icon size={15} />
                      {f.label}
                    </div>
                    <div className="text-[15px] leading-snug text-[var(--color-fg)]">{f.value}</div>
                  </div>
                );
              })}
            </dl>

            {/* languages sub-row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--color-faint)]">
                <LanguagesIcon size={15} /> Languages
              </span>
              {languages.map((l) => (
                <span
                  key={l.language}
                  className="rounded-full border border-[var(--color-border)] bg-white/[0.02] px-3 py-1.5 text-sm text-[var(--color-muted)]"
                >
                  <span className="text-[var(--color-fg)]">{l.language}</span>
                  <span className="text-[var(--color-faint)]"> · {l.level}</span>
                </span>
              ))}
            </div>

            {/* actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-7">
              <a
                href={site.cvUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
              >
                <FileText size={16} />
                View / download CV
              </a>
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-[var(--color-fg)] transition-colors hover:bg-white/10"
                >
                  View on LinkedIn
                  <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
