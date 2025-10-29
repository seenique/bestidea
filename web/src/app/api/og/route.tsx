import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const title = "bestidea — ИИ‑разработка";
  const subtitle = "В 10× дешевле и в 7,5× быстрее";
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1221 0%, #111827 60%)",
          color: "white",
          padding: 80,
          fontSize: 48,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }} />
          <div style={{ fontWeight: 700 }}>bestidea</div>
        </div>
        <div style={{ fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 32, opacity: 0.9, marginTop: 12 }}>{subtitle}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}




