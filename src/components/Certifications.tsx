import { Check, Loader } from "lucide-react";
import { anthropicAcademy, microsoftCerts } from "@/content/certifications";
import { AnthropicMark, MicrosoftMark } from "@/components/logos";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";

function StatusBadge({ status }: { status: "completed" | "in-progress" }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--color-aurora-2)_40%,transparent)] bg-[color-mix(in_srgb,var(--color-aurora-2)_12%,transparent)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-aurora-2)]">
        <Check size={12} /> Completed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5a62355] bg-[#f5a62318] px-2.5 py-1 text-[11px] font-medium text-[#fbbf24]">
      <Loader size={12} /> In progress
    </span>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <SectionLabel index="04" kicker="Certifications & learning" title="Eager to learn new tech." />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Anthropic Academy — completed */}
          <Reveal className="md:col-span-2">
            <div className="ring-aurora group relative overflow-hidden rounded-[var(--radius)] glass p-7 md:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                style={{ background: "#D97757" }}
              />
              <div className="relative flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                    style={{ background: "color-mix(in srgb, #D97757 16%, transparent)", color: "#E0926F" }}
                  >
                    <AnthropicMark size={24} />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight md:text-2xl">
                      {anthropicAcademy.issuer} — Claude
                    </h3>
                    <p className="text-sm text-[var(--color-muted)]">{anthropicAcademy.platform}</p>
                  </div>
                </div>
                <StatusBadge status={anthropicAcademy.status} />
              </div>

              <ul className="relative mt-6 flex flex-wrap gap-2">
                {anthropicAcademy.courses.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-[var(--color-border)] bg-white/[0.02] px-3 py-1.5 text-sm text-[var(--color-muted)]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Microsoft — in progress */}
          {microsoftCerts.map((cert, i) => (
            <Reveal key={cert.code} delay={(i % 2) * 0.06}>
              <div className="ring-aurora group flex h-full items-start gap-4 rounded-[var(--radius)] glass p-6 transition-colors hover:bg-white/[0.05] md:p-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.04]">
                  <MicrosoftMark size={22} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-sm font-semibold text-[var(--color-fg)]">{cert.code}</span>
                    <StatusBadge status={cert.status} />
                  </div>
                  <h3 className="mt-1.5 text-[15px] font-medium leading-snug text-[var(--color-fg)]">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-faint)]">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
