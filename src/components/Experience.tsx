import { experience } from "@/content/experience";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="02" kicker="Experience" title="Where I've worked." />

        <div className="relative">
          {/* vertical timeline rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-aurora-1)] via-[var(--color-border)] to-transparent md:left-[9px]" />

          <div className="flex flex-col gap-10">
            {experience.map((role, i) => (
              <Reveal key={role.company + role.period} delay={i * 0.05}>
                <article className="relative pl-8 md:pl-12">
                  {/* node */}
                  <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center md:h-5 md:w-5">
                    <span className="h-3 w-3 rounded-full bg-[var(--color-aurora-1)] shadow-[0_0_16px_-2px_var(--color-aurora-1)] md:h-3.5 md:w-3.5" />
                    {role.current && (
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-[var(--color-aurora-1)] opacity-60 md:h-3.5 md:w-3.5" />
                    )}
                  </span>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight md:text-2xl">
                      <span>
                        {role.title}
                        <span className="text-[var(--color-muted)]"> · {role.company}</span>
                      </span>
                      <span className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-[var(--color-faint)]">
                        {role.type}
                      </span>
                    </h3>
                    <span className="font-mono text-xs text-[var(--color-faint)] md:text-sm">{role.period}</span>
                  </div>

                  <p className="mt-3 max-w-2xl leading-relaxed text-[var(--color-muted)]">{role.summary}</p>

                  <ul className="mt-4 grid gap-2">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-[var(--color-muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-aurora-2)]" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-faint)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
