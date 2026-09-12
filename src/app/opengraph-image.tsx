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
          backgroundColor: "#20211E",
          padding: "72px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#E7DED1",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ width: 56, height: 1, backgroundColor: "#76563F" }} />
          Architecture • Interiors
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, color: "#F7F5EF", lineHeight: 1.02 }}>
            Vastukala
          </div>
          <div style={{ fontSize: 104, color: "#F7F5EF", lineHeight: 1.02 }}>
            Design Studio
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              color: "rgba(247,245,239,0.62)",
              fontFamily: "sans-serif",
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
            fontSize: 22,
            color: "rgba(247,245,239,0.5)",
            fontFamily: "sans-serif",
            borderTop: "1px solid rgba(247,245,239,0.15)",
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
