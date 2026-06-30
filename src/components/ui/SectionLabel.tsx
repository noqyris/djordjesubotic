import Reveal from "@/components/motion/Reveal";

/** Small kicker label + big section title used across sections. */
export default function SectionLabel({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-3 text-sm font-medium tracking-wide text-[var(--color-muted)]">
          <span className="font-mono text-[var(--color-aurora-2)]">{index}</span>
          <span className="h-px w-8 bg-[var(--color-border)]" />
          <span className="uppercase">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
