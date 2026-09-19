import type { Metadata } from "next";
import { ArcInsightsPage } from "@/components/sections/ArcPages";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights | Architecture & Interior Design Notes",
  description:
    "Practical notes on architecture, interiors, materials and the decisions that shape how a space works — from Vastukala Design Studio.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <ArcInsightsPage />
    </>
  );
}
