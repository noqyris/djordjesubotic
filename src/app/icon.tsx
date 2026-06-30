import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #7c5cff, #ff5ca8)",
          color: "#fff",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        {site.initials}
      </div>
    ),
    { ...size },
  );
}
