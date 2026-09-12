import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import { FinalCta } from "@/components/sections/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { sortedProjects } from "@/content/projects";
import { images } from "@/content/images";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects | Architecture & Interior Design Portfolio in Pune",
  description:
    "Browse residential, commercial and interior design projects by Vastukala Design Studio across Pune and Maharashtra — villas, apartments, offices, renovations and hospitality spaces.",
  path: "/projects",
  keywords: [
    "architecture portfolio Pune",
    "interior design projects Pune",
    "villa design Pune",
    "apartment interior projects Pune",
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

      <PageHero
        eyebrow="Selected Work"
        heading={"Designed spaces.\nReal stories."}
        description="A selection of architecture and interior projects designed with purpose, personality and attention to detail. Filter by discipline or status to find work closest to your own project."
        image={images.facadeLines}
        imageAlt="Contemporary residential facade with strong horizontal shading lines"
      />

      <ProjectsExplorer projects={sortedProjects} />

      <FinalCta
        eyebrow="Your Project"
        heading={"Have a space waiting\nto be designed?"}
        description="Tell us about the site, the brief and the budget you have in mind. We will tell you honestly what is possible."
      />
    </>
  );
}
