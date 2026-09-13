/**
 * Studio-wide settings: brand, contact details, navigation and SEO defaults.
 * Edit this file to change details across every page at once.
 */

export const site = {
  name: "Vastukala Design Studio",
  shortName: "Vastukala",
  descriptor: "Architecture • Interiors",
  tagline: "Spaces Designed Around You.",
  /** Used for canonical URLs, sitemap and Open Graph. Update after going live. */
  url: "https://vastukaladesignstudio.com",
  metaDescription:
    "Vastukala Design Studio creates thoughtful architectural and interior spaces in Pune and Maharashtra, combining functionality, aesthetics and personalized design.",
  founded: "2016",

  /**
   * Logo.
   *
   * Rendered exactly as supplied — original proportions, no recolouring,
   * cropping or restyling. File lives at `public/logo.jpg`.
   */
  logo: {
    src: "/logo.jpg",
    alt: "Vastukala Design Studio",
    /** Intrinsic pixel size of the logo file. */
    width: 1024,
    height: 1024,
  },

  contact: {
    phoneDisplay: "+91 89567 30655",
    phoneE164: "+918956730655",
    whatsappNumber: "918956730655",
    email: "vastukaladesignstudio20@gmail.com",
    instagramHandle: "@vastukala_design_studio",
    instagramUrl: "https://www.instagram.com/vastukala_design_studio/",
    instagramPositioning: "Architecture | Interiors",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    locationShort: "Pune, Maharashtra, India",
    serviceAreas: [
      "Pune",
      "Pimpri-Chinchwad",
      "Mulshi",
      "Lonavala",
      "Mumbai",
      "Nashik",
      "Across Maharashtra",
    ],
    workingHours: "Mon – Sat, 10:00 AM – 7:00 PM IST",
  },

  /** Default message used by every WhatsApp CTA that has no context of its own. */
  whatsappDefaultMessage:
    "Hi Vastukala Design Studio, I would like to discuss a project with you.",

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],

  legalNavigation: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],

  primaryCta: "Start Your Project",

  /** Numbers shown in the home page counter strip. */
  stats: [
    { value: 10, suffix: "+", label: "Years in Practice" },
    { value: 120, suffix: "+", label: "Spaces Designed" },
    { value: 60, suffix: "+", label: "Interiors Delivered" },
    { value: 8, suffix: "+", label: "Cities Served" },
  ],

  /** Disciplines strip under the hero. */
  disciplines: [
    "Architecture",
    "Interior Design",
    "Space Planning",
    "3D Visualization",
    "Lighting Design",
    "Turnkey Execution",
  ],
} as const;

export type Site = typeof site;
