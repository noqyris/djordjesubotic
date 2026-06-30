import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";
import { facts, languages } from "@/content/profile";
import { anthropicAcademy, microsoftCerts } from "@/content/certifications";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "CV / Résumé",
  description: `Curriculum vitae of ${site.name} — ${site.role}.`,
  robots: { index: false, follow: true },
};

// Compact subset of profile facts worth printing.
const printFacts = facts.filter((f) => ["clock", "languages", "briefcase", "calendar"].includes(f.icon));

export default function CVPage() {
  return (
    <div className="min-h-screen w-full bg-zinc-100 text-zinc-900">
      {/* @page margins for printing */}
      <style>{`@media print { @page { margin: 14mm; } body { background: #fff !important; } }`}</style>

      {/* toolbar — hidden when printing */}
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
        >
          <ArrowLeft size={16} />
          Back to site
        </Link>
        <PrintButton />
      </div>

      {/* the sheet */}
      <main className="mx-auto max-w-3xl bg-white px-8 py-10 shadow-sm print:max-w-none print:py-0 print:shadow-none md:px-12 md:py-14">
        {/* header */}
        <header className="flex items-start justify-between gap-6 border-b border-zinc-200 pb-6">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{site.name}</h1>
            <p className="mt-1 text-lg text-zinc-600">{site.role}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> {site.location} · Remote · CET
              </span>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-zinc-900">
                <Mail size={14} /> {site.email}
              </a>
              {site.socials.map((s) => (
                <a key={s.key} href={s.url} className="hover:text-zinc-900">
                  {s.label}: {s.url.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              ))}
            </div>
          </div>
          <Image
            src="/dj.png"
            alt={site.name}
            width={928}
            height={978}
            className="hidden h-32 w-28 shrink-0 rounded-2xl object-cover object-top ring-1 ring-zinc-200 sm:block print:block"
          />
        </header>

        {/* summary */}
        <section className="mt-6">
          <p className="text-[15px] leading-relaxed text-zinc-700">{site.intro}</p>
        </section>

        {/* quick facts */}
        <section className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 rounded-lg bg-zinc-50 p-4 text-sm sm:grid-cols-4">
          {printFacts.map((f) => (
            <div key={f.label}>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-zinc-400">{f.label}</div>
              <div className="mt-0.5 text-zinc-800">{f.value}</div>
            </div>
          ))}
        </section>

        {/* experience */}
        <section className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Experience</h2>
          <div className="mt-4 flex flex-col gap-6">
            {experience.map((role) => (
              <article key={role.company + role.period} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="text-base font-semibold">
                    {role.title} · {role.company}
                    <span className="ml-2 text-xs font-normal text-zinc-400">({role.type})</span>
                  </h3>
                  <span className="text-sm text-zinc-500">{role.period}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">{role.summary}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 marker:text-zinc-300">
                  {role.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-zinc-500">{role.stack.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        {/* skills */}
        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Skills</h2>
          <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.title} className="flex gap-2 text-sm">
                <dt className="w-36 shrink-0 font-semibold text-zinc-800">{g.title}</dt>
                <dd className="text-zinc-600">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* certifications */}
        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Certifications & Learning</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex flex-wrap gap-x-2">
              <span className="font-semibold text-zinc-800">{anthropicAcademy.issuer} (completed):</span>
              <span className="text-zinc-600">{anthropicAcademy.courses.join(", ")}</span>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <span className="font-semibold text-zinc-800">Microsoft (in progress):</span>
              <span className="text-zinc-600">
                {microsoftCerts.map((c) => `${c.code} ${c.title}`).join(" · ")}
              </span>
            </div>
          </div>
        </section>

        {/* education */}
        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Education</h2>
          <p className="mt-3 text-sm font-medium text-zinc-800">Graduate Engineer in Computer Science</p>
        </section>

        {/* languages */}
        <section className="mt-8 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Languages</h2>
          <p className="mt-3 text-sm text-zinc-700">
            {languages.map((l) => `${l.language} (${l.level})`).join(" · ")}
          </p>
        </section>
      </main>
    </div>
  );
}
