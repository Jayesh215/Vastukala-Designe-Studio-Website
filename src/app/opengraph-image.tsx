import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Architecture & Interior Design in Pune`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded social share card, generated at request time. */
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
          backgroundColor: "#FAFAF8",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#666666",
          }}
        >
          Architecture • Interiors
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#111111",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Vastukala Design Studio
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "#666666",
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            color: "#666666",
            borderTop: "1px solid #E8E8E6",
            paddingTop: "28px",
          }}
        >
          <span>{site.contact.locationShort}</span>
          <span>{site.contact.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  );
}
