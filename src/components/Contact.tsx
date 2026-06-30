"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { site, mailto } from "@/content/site";
import Magnetic from "@/components/motion/Magnetic";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto w-full max-w-5xl">
        <div className="ring-aurora relative overflow-hidden rounded-[2rem] glass-strong px-8 py-16 text-center md:px-16 md:py-24">
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
            style={{ background: "radial-gradient(circle, var(--color-aurora-1), transparent 70%)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm font-medium uppercase tracking-wider text-[var(--color-aurora-2)]"
          >
            Open to new roles
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="relative mx-auto mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          >
            Looking for a full-stack engineer? <span className="text-gradient">Let&apos;s talk.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-lg text-[var(--color-muted)]"
          >
            Open to full-time and B2B contract roles — remote, from {site.location} (CET). I usually reply within a day.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href={mailto()}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_40px_-6px_rgba(255,255,255,0.5)]"
              >
                {site.email}
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-4 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              {copied ? <Check size={16} className="text-[var(--color-aurora-2)]" /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>

          {site.socials.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              {site.socials.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-fg)] hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
