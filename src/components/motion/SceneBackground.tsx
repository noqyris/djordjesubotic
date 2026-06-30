"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import AuroraScene from "./AuroraScene";
import Aurora from "./Aurora";

/**
 * WebGL aurora backdrop: a domain-warped fractal-noise shader plane plus a
 * drifting particle field, both reacting to the pointer. Fixed, full-viewport,
 * behind all content. Falls back to the CSS <Aurora /> for reduced-motion
 * users, on the server, and when WebGL is unavailable.
 */
export default function SceneBackground() {
  const [enabled, setEnabled] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (gl) setEnabled(true);
    } catch {
      /* keep the CSS fallback */
    }
  }, []);

  // fade the canvas in once it has had a frame to render
  useEffect(() => {
    if (!enabled) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [enabled]);

  if (!enabled) return <Aurora />;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-out"
        style={{ opacity: shown ? 1 : 0 }}
      >
        <Canvas
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
          dpr={[1, 1.75]}
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
        >
          <AuroraScene />
        </Canvas>
      </div>

      {/* legibility veils layered over the canvas */}
      <div className="absolute inset-0 bg-[var(--color-bg)]/20" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[var(--color-bg)]" />
    </div>
  );
}
