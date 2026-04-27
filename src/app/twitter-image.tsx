import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#ffffff",
          color: "#171717",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.24em", fontWeight: 700 }}>
          M C
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 78,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            maxWidth: "900px",
          }}
        >
          Michael Cremonini
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 44,
            lineHeight: 1.15,
            fontWeight: 300,
            letterSpacing: "-0.01em",
            maxWidth: "900px",
          }}
        >
          Designing and building thoughtful digital experiences.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
