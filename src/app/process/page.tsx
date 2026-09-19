import type { Metadata } from "next";
import { ArcProcessPage } from "@/components/sections/ArcPages";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Process | How Vastukala Designs Your Space",
  description:
    "Six clear stages from first conversation to execution — so you always know what is happening on your architecture or interior project.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
      <ArcProcessPage />
    </>
  );
}
