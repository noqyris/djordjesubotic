"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, useReducedMotion } from "motion/react";
import type { Capability } from "@/content/capabilities";
import { cn } from "@/lib/cn";

/**
 * Glass capability card with a cursor-following spotlight, subtle 3D tilt and a
 * per-card aurora glow tinted by `hue`. Featured cards span two columns.
 * (Generalised from the original project card — same signature interaction.)
 */
export default function SpotlightCard({ capability, index }: { capability: Capability; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

  const tint = `hsl(${capability.hue} 90% 65%)`;
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, color-mix(in srgb, ${tint} 16%, transparent), transparent 45%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px * 100);
    my.set(py * 100);
    if (!reduce) {
      ry.set((px - 0.5) * 10);
      rx.set((0.5 - py) * 10);
    }
  }

  function reset() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cn("group", capability.featured && "md:col-span-2")}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="ring-aurora relative flex h-full flex-col overflow-hidden rounded-[var(--radius)] glass p-7 transition-colors duration-300 md:p-9"
      >
        {/* cursor spotlight */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        {/* per-card corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: tint }}
        />

        <div className="relative flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-faint)]">
            {capability.kind}
          </span>
          {capability.evidence && (
            <span
              className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
              style={{ color: tint, borderColor: "color-mix(in srgb, " + tint + " 35%, transparent)" }}
            >
              {capability.evidence}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "relative mt-5 font-[family-name:var(--font-display)] font-semibold tracking-tight",
            capability.featured ? "text-3xl md:text-4xl" : "text-2xl md:text-[1.75rem]",
          )}
        >
          {capability.title}
        </h3>

        <p
          className={cn(
            "relative mt-3 text-[var(--color-muted)]",
            capability.featured ? "max-w-2xl text-base leading-relaxed" : "text-sm leading-relaxed",
          )}
        >
          {capability.blurb}
        </p>

        <div className="relative mt-auto flex flex-wrap items-center gap-2 pt-7">
          {capability.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-[var(--color-border)] bg-white/[0.02] px-2.5 py-1 text-xs text-[var(--color-muted)]"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
