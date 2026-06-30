"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const links = [
  { href: "#capabilities", label: "What I do" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#profile", label: "Profile" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : "border border-transparent",
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5 font-[family-name:var(--font-display)]">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-aurora-1)] to-[var(--color-aurora-3)] text-sm font-bold text-white shadow-[0_0_20px_-4px_var(--color-aurora-1)]">
            {site.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.04] md:inline-block"
          >
            Get in touch
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 rounded-3xl border border-[var(--color-border)] bg-[rgba(10,12,20,0.98)] p-3 shadow-[0_24px_70px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-fg)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-2xl bg-white px-4 py-3 text-center text-base font-medium text-black"
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
