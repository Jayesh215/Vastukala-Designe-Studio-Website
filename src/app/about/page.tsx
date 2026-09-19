import type { Metadata } from "next";
import { ArcAboutPage } from "@/components/sections/ArcPages";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About | Architecture & Interior Design Studio in Pune",
  description:
    "Vastukala Design Studio is an architecture and interior design studio in Pune creating thoughtful, functional and visually refined spaces. Learn about our philosophy, values and approach.",
  path: "/about",
  keywords: [
    "about architecture studio Pune",
    "interior design firm Pune",
    "design philosophy",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <ArcAboutPage />
    </>
  );
}
