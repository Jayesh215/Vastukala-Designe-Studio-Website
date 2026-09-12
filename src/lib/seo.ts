import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Path with a leading slash, e.g. "/projects". */
  path: string;
  /** Absolute or root-relative image used for Open Graph cards. */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: string[];
}

const baseKeywords = [
  "Vastukala Design Studio",
  "architecture company in Pune",
  "architect in Pune",
  "interior designer in Pune",
  "architecture and interior design Pune",
  "residential interior designer Pune",
  "home interior design Pune",
  "architectural design Pune",
  "3D interior design Pune",
  "commercial interior design Pune",
];

export const absoluteUrl = (path: string) =>
  `${site.url}${path === "/" ? "" : path}`;

/** Builds consistent metadata — canonical, Open Graph and Twitter — per page. */
export const pageMetadata = ({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  keywords = [],
}: PageMetaInput): Metadata => {
  const url = absoluteUrl(path);
  const ogImage = image ?? `${site.url}/opengraph-image`;

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};

/** Organisation / LocalBusiness schema used on the home page. */
export const organisationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  description: site.metaDescription,
  url: site.url,
  telephone: site.contact.phoneE164,
  email: site.contact.email,
  image: `${site.url}/opengraph-image`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.city,
    addressRegion: site.contact.state,
    addressCountry: "IN",
  },
  areaServed: site.contact.serviceAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  sameAs: [site.contact.instagramUrl],
  knowsAbout: [
    "Architecture",
    "Interior Design",
    "Space Planning",
    "3D Visualization",
    "Lighting Design",
    "Project Management",
  ],
});

export const breadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export const articleSchema = (input: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: input.title,
  description: input.description,
  image: input.image,
  datePublished: input.date,
  dateModified: input.date,
  author: { "@type": "Organization", name: input.author },
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absoluteUrl(input.path),
  },
});

export const projectSchema = (input: {
  name: string;
  description: string;
  path: string;
  image: string;
  location: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: input.name,
  description: input.description,
  image: input.image,
  url: absoluteUrl(input.path),
  locationCreated: { "@type": "Place", name: input.location },
  creator: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
});
