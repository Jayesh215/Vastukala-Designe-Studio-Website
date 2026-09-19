import type { Metadata } from "next";
import { ArcServicesPage } from "@/components/sections/ArcPages";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getFaqsByTopic } from "@/content/faqs";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services | Architecture, Interiors & 3D Visualization in Pune",
  description:
    "Architectural design, interior design, space planning, 3D visualization, lighting planning, material selection and turnkey project management by Vastukala Design Studio, Pune.",
  path: "/services",
  keywords: [
    "architectural design services Pune",
    "interior design services Pune",
    "3D visualization Pune",
    "space planning Pune",
    "turnkey interiors Pune",
  ],
});

export default function ServicesPage() {
  const serviceFaqs = getFaqsByTopic("services");

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd schema={faqSchema(serviceFaqs)} />
      <ArcServicesPage />
      <div className="theme-arc">
        <FaqSection
          items={serviceFaqs}
          eyebrow="Service FAQ"
          heading="Questions about scope"
        />
      </div>
    </>
  );
}
