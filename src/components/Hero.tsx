"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, FileText } from "lucide-react";
import { site } from "@/content/site";
import { marquee } from "@/content/skills";
import Magnetic from "@/components/motion/Magnetic";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center px-6 pt-28 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* ---------- left: copy ---------- */}
        <div className="order-2 lg:order-1">
          {/* availability pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-sm text-[var(--color-muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-aurora-2)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-aurora-2)]" />
            </span>
            {site.available ? "Available for new projects" : "Currently booked"}
            <span className="text-[var(--color-faint)]">·</span>
            <span>{site.location}</span>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-[family-name:var(--font-display)] text-[clamp(2.6rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
          >
            <motion.span variants={item} className="block">
              Djordje
            </motion.span>
            <motion.span variants={item} className="block text-gradient">
              Subotic
            </motion.span>
            <motion.span variants={item} className="mt-4 block text-[clamp(1.1rem,2.6vw,1.8rem)] font-normal tracking-tight text-[var(--color-muted)]">
              {site.role}
            </motion.span>
          </motion.h1>

          {/* tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl"
          >
            {site.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_40px_-6px_rgba(255,255,255,0.5)]"
              >
                Get in touch
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={site.cvUrl}
                className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-[var(--color-fg)] transition-colors hover:bg-white/10"
              >
                <FileText size={16} />
                View CV
              </a>
            </Magnetic>
          </motion.div>

          {/* stats */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-8"
          >
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight md:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-[var(--color-faint)] md:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ---------- right: portrait ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 mx-auto w-[72%] max-w-[320px] lg:order-2 lg:w-full lg:max-w-[450px] lg:justify-self-end"
        >
          <div className="relative">
            {/* aurora glow behind the portrait */}
            <div className="absolute -inset-8 -z-10 rounded-[3.5rem] bg-[radial-gradient(60%_60%_at_55%_35%,var(--color-aurora-1),transparent_70%)] opacity-45 blur-3xl" />
            {/* gradient ring */}
            <div className="rounded-[2.5rem] bg-gradient-to-tr from-[var(--color-aurora-1)]/70 via-[var(--color-aurora-4)]/30 to-[var(--color-aurora-2)]/70 p-[1.5px] shadow-[0_40px_90px_-25px_rgba(0,0,0,0.8)]">
              <div className="relative overflow-hidden rounded-[2.4rem] bg-[var(--color-bg-soft)]">
                <Image
                  src="/dj.png"
                  alt="Djordje Subotic — Full-stack Engineer"
                  width={928}
                  height={978}
                  priority
                  sizes="(max-width: 1024px) 72vw, 450px"
                  className="h-auto w-full select-none object-cover"
                />
                {/* fade the bottom edge into the dark theme */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-[var(--color-bg-soft)]" />
                {/* faint aurora sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--color-aurora-1)]/12 via-transparent to-[var(--color-aurora-2)]/8" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* marquee strip — full-bleed, seamless loop.
          Two identical tiles butt together; each carries its own trailing gap
          (pr-4) so the seam spacing matches the internal gap, and the track
          animates by exactly -50% (one tile). Each tile repeats the list so it
          always spans more than the viewport, even on ultra-wide screens. */}
      <div className="relative mt-16 -mx-6 overflow-hidden md:-mx-10 [mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((tile) => (
            <ul key={tile} aria-hidden={tile === 1} className="flex shrink-0 items-center gap-4 pr-4">
              {[...marquee, ...marquee].map((t, i) => (
                <li
                  key={i}
                  className="whitespace-nowrap rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm text-[var(--color-muted)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
