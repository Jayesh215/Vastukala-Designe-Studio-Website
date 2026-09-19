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
          backgroundColor: "#F2EDE7",
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
            color: "#6B5E52",
          }}
        >
          Architecture • Interiors
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#2C2218",
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
              color: "#6B5E52",
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
            color: "#6B5E52",
            borderTop: "1px solid #DDD4C8",
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
