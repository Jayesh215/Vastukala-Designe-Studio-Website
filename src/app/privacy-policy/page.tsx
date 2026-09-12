import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LegalContent } from "@/components/sections/LegalContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacyPolicy } from "@/content/legal";
import { images } from "@/content/images";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Vastukala Design Studio handles information shared through this website, including enquiry details, project confidentiality and your choices.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />

      <PageHero
        eyebrow="Legal"
        heading={privacyPolicy.title}
        image={images.facadeGeometry}
        imageAlt="Architectural study of facade proportion and shadow"
        size="compact"
      />

      <LegalContent
        intro={privacyPolicy.intro}
        lastUpdated={privacyPolicy.lastUpdated}
        sections={privacyPolicy.sections}
      />
    </>
  );
}
