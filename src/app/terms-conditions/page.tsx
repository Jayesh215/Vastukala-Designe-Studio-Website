import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalContent } from "@/components/sections/LegalContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { termsConditions } from "@/content/legal";
import { images } from "@/content/images";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms governing use of the Vastukala Design Studio website, including intellectual property, project images, enquiries and limitation of liability.",
  path: "/terms-conditions",
});

export default function TermsConditionsPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-conditions" },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        heading={termsConditions.title}
        image={images.facadeStone}
        imageAlt="Detail of exposed local stone wall with a shaded opening"
        size="compact"
      />

      <LegalContent
        intro={termsConditions.intro}
        lastUpdated={termsConditions.lastUpdated}
        sections={termsConditions.sections}
      />
    </>
  );
}
