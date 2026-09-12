import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { sortedInsights } from "@/content/insights";
import { images } from "@/content/images";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Insights | Architecture & Interior Design Journal",
  description:
    "Practical notes on architecture, interiors, materials, lighting and space planning from Vastukala Design Studio — ideas for designing better spaces in Pune and beyond.",
  path: "/insights",
  keywords: [
    "interior design blog India",
    "architecture journal Pune",
    "home design tips India",
    "interior design ideas Pune",
  ],
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

      <PageHero
        eyebrow="Insights / Journal"
        heading={"Ideas for better spaces."}
        description="Notes on architecture, interiors, materials and the decisions that quietly determine whether a space works — written for people planning their own."
        image={images.minimalCorner}
        imageAlt="Quiet interior corner with a plastered wall and a single timber chair"
        size="compact"
      />

      <InsightsExplorer insights={sortedInsights} />

      <InstagramSection />

      <FinalCta
        eyebrow="Start Here"
        heading={"Reading is a good start.\nDesigning is better."}
        description="If something here sounds like your project, tell us about it. We are happy to talk it through before you commit to anything."
      />
    </>
  );
}
