import { site } from "@/content/site";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";

const principles = [
  {
    title: "Ownership",
    body: "I take features from an ambiguous problem to shipped, tested and maintained — not just the happy path.",
  },
  {
    title: "Quality by default",
    body: "Typed end-to-end and covered by automated tests, so the codebase stays reliable and fast to change as it grows.",
  },
  {
    title: "Clear communication",
    body: "I work well async in a distributed team — short written updates, thorough code review, no surprises.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="05" kicker="About" title="How I work." />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="text-balance text-xl leading-relaxed text-[var(--color-fg)]/90 md:text-2xl">
              {site.intro}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {principles.map((p) => (
                <div key={p.title} className="rounded-2xl glass p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
