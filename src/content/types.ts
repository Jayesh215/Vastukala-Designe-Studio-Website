/** Shared shapes for every editable collection in `src/content`. */

export type ProjectCategory =
  | "Architecture"
  | "Interiors"
  | "Residential"
  | "Commercial"
  | "Office"
  | "Villa"
  | "Apartment"
  | "Renovation"
  | "Hospitality";

export type ProjectStatus = "Ongoing" | "Completed";

export interface GalleryImage {
  src: string;
  alt: string;
  /** "portrait" images occupy a single column; "landscape" images span two. */
  orientation?: "portrait" | "landscape";
}

export interface Project {
  name: string;
  slug: string;
  categories: ProjectCategory[];
  projectType: string;
  location: string;
  year: string;
  status: ProjectStatus;
  client: string;
  area?: string;
  shortDescription: string;
  /** The brief — what the client came to us with. */
  brief: string[];
  designConcept: string[];
  designApproach: string[];
  highlights: string[];
  servicesProvided: string[];
  heroImage: string;
  heroAlt: string;
  gallery: GalleryImage[];
  featured: boolean;
  /** Lower numbers appear first. */
  order: number;
}

export interface Service {
  number: string;
  slug: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
}

export interface Testimonial {
  clientName: string;
  project: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
  photo?: string;
  featured: boolean;
  /** Sample content shown until real, consented client reviews replace it. */
  isSample: boolean;
}

export type InsightCategory =
  | "Architecture"
  | "Interior Design"
  | "Home Design"
  | "Materials"
  | "Lighting"
  | "Space Planning"
  | "Design Trends"
  | "Studio Journal";

export type InsightBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface Insight {
  title: string;
  slug: string;
  category: InsightCategory;
  excerpt: string;
  /** ISO date, e.g. "2026-05-18". */
  date: string;
  readingTime: string;
  author: string;
  coverImage: string;
  coverAlt: string;
  body: InsightBlock[];
  featured: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  /** Group FAQs so pages can show a relevant subset. */
  topics: ("general" | "services" | "process" | "commercial")[];
}

export interface InstagramPost {
  image: string;
  alt: string;
  caption: string;
  /** Link to the specific post, or leave as the profile URL. */
  url: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
  deliverables: string[];
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}
