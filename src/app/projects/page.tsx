import type { Metadata } from "next";
import { ArcProjectsPage } from "@/components/sections/ArcPages";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects | Architecture & Interior Design Portfolio in Pune",
  description:
    "Explore residential and commercial architecture and interior projects by Vastukala Design Studio across Pune and Maharashtra.",
  path: "/projects",
  keywords: [
    "architecture projects Pune",
    "interior design portfolio Pune",
    "residential projects Pune",
  ],
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <ArcProjectsPage />
    </>
  );
}
