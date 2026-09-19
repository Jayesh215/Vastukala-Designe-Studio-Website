import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HomeArcBody } from "@/components/sections/HomeArcBody";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/content/faqs";
import { site } from "@/content/site";
import { faqSchema, organisationSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${site.name} | Architecture & Interior Design in Pune`,
    description: site.metaDescription,
    path: "/",
  }),
  // Home uses its full title rather than the "%s | Studio" template.
  title: `${site.name} | Architecture & Interior Design in Pune`,
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organisationSchema()} />
      <JsonLd schema={faqSchema(homeFaqs)} />

      <Hero />
      <HomeArcBody />
    </>
  );
}
