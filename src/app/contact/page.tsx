import type { Metadata } from "next";
import { ArcContactPage } from "@/components/sections/ArcPages";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Start Your Project with Vastukala",
  description:
    "Tell us about your space, timeline and budget. Vastukala Design Studio responds personally for architecture and interior projects in Pune and Maharashtra.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ArcContactPage />
    </>
  );
}
