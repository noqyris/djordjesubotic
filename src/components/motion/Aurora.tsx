"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed, full-viewport aurora backdrop: large blurred gradient orbs that drift
 * on their own and parallax subtly toward the pointer. Pure CSS animation +
 * a light rAF pointer follow — cheap and GPU-friendly.
 */
export default function Aurora() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = wrapRef.current;
    if (!el) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const loop = () => {
      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;
      el.style.setProperty("--px", curX.toFixed(3));
      el.style.setProperty("--py", curY.toFixed(3));
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ ["--px" as string]: 0, ["--py" as string]: 0 }}
    >
      {/* orb 1 — violet */}
      <div
        className="absolute h-[55vmax] w-[55vmax] rounded-full opacity-[0.55] blur-[90px]"
        style={{
          top: "-15%",
          left: "-5%",
          background: "radial-gradient(circle at 30% 30%, var(--color-aurora-1), transparent 65%)",
          animation: "float-slow 22s ease-in-out infinite",
          transform: "translate3d(calc(var(--px) * 30px), calc(var(--py) * 30px), 0)",
        }}
      />
      {/* orb 2 — teal */}
      <div
        className="absolute h-[50vmax] w-[50vmax] rounded-full opacity-[0.45] blur-[100px]"
        style={{
          top: "10%",
          right: "-10%",
          background: "radial-gradient(circle at 70% 40%, var(--color-aurora-2), transparent 65%)",
          animation: "float-slow 26s ease-in-out infinite reverse",
          transform: "translate3d(calc(var(--px) * -40px), calc(var(--py) * 24px), 0)",
        }}
      />
      {/* orb 3 — pink */}
      <div
        className="absolute h-[45vmax] w-[45vmax] rounded-full opacity-[0.4] blur-[110px]"
        style={{
          bottom: "-10%",
          left: "20%",
          background: "radial-gradient(circle at 50% 50%, var(--color-aurora-3), transparent 60%)",
          animation: "float-slow 30s ease-in-out infinite",
          transform: "translate3d(calc(var(--px) * 24px), calc(var(--py) * -30px), 0)",
        }}
      />
      {/* orb 4 — blue */}
      <div
        className="absolute h-[40vmax] w-[40vmax] rounded-full opacity-[0.35] blur-[110px]"
        style={{
          bottom: "5%",
          right: "10%",
          background: "radial-gradient(circle at 40% 60%, var(--color-aurora-4), transparent 60%)",
          animation: "float-slow 24s ease-in-out infinite reverse",
          transform: "translate3d(calc(var(--px) * -26px), calc(var(--py) * -22px), 0)",
        }}
      />
      {/* darkening veil so foreground text stays legible */}
      <div className="absolute inset-0 bg-[var(--color-bg)]/55" />
    </div>
  );
}
