import { ImageResponse } from "next/og";

export const alt = "Daniel Rosen — Operations · Product · Strategy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F4EF",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "14px",
              backgroundColor: "#1A1A1A",
              color: "#F7F4EF",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            DR
          </div>
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C2410C",
              fontWeight: 600,
            }}
          >
            Operations · Product · Strategy
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.05,
            }}
          >
            Daniel Rosen
          </div>
          <div
            style={{
              marginTop: "20px",
              fontSize: "32px",
              color: "#6B6B6B",
              maxWidth: "900px",
            }}
          >
            Industrial &amp; Systems Engineering at the University of Florida.
          </div>
        </div>

        <div style={{ display: "flex", height: "8px", width: "200px", backgroundColor: "#C2410C", borderRadius: "4px" }} />
      </div>
    ),
    { ...size }
  );
}
