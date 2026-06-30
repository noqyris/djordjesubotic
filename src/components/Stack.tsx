import { skills } from "@/content/skills";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";

export default function Stack() {
  return (
    <section id="stack" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="03" kicker="Toolbox" title="The stack I reach for." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.06}>
              <div className="ring-aurora group h-full rounded-2xl glass p-6 transition-colors hover:bg-white/[0.06]">
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-[var(--color-aurora-2)]">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-[var(--color-border)] bg-white/[0.02] px-2.5 py-1 text-sm text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-fg)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
