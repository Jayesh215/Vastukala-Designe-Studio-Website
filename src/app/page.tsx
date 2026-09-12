import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { DisciplinesStrip } from "@/components/sections/DisciplinesStrip";
import { IntroSection } from "@/components/sections/IntroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
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
      <DisciplinesStrip />
      <IntroSection />
      <StatsStrip />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      <TestimonialsSection />
      <InsightsSection />
      <InstagramSection />
      <FaqSection items={homeFaqs} />
      <FinalCta />
    </>
  );
}
