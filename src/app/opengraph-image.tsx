import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#05060a",
          backgroundImage:
            "radial-gradient(60% 80% at 15% 10%, #7c5cff55, transparent), radial-gradient(50% 70% at 95% 90%, #2dd4bf44, transparent), radial-gradient(40% 60% at 80% 15%, #ff5ca844, transparent)",
          color: "#f4f5fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #7c5cff, #ff5ca8)",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: 30, color: "#9aa0b4" }}>{site.url.replace("https://", "")}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 44, color: "#9aa0b4", marginTop: 24 }}>{site.role}</div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {["TypeScript", "React", "Next.js", "Flutter", "Three.js", "AI / LLMs"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 26,
                color: "#c7cad8",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "10px 22px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
