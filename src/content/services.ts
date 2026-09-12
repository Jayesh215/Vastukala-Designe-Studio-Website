import { images } from "./images";
import type { Service } from "./types";

/**
 * Services collection. Add, reorder or remove entries freely — the home page
 * shows the four `featured` services, the Services page shows all of them.
 */
export const services: Service[] = [
  {
    number: "01",
    slug: "architectural-design",
    title: "Architectural Design",
    headline: "Building ideas into thoughtful spaces.",
    description:
      "From initial concepts and spatial planning to elevations and detailed design, we develop architectural solutions that balance aesthetics, functionality and context.",
    deliverables: [
      "Concept Development",
      "Architectural Planning",
      "Space Planning",
      "Floor Plans",
      "Elevation Design",
      "2D Drawings",
      "3D Visualization",
      "Design Development",
    ],
    image: images.facadeWhite,
    imageAlt:
      "Minimal white architectural facade with deep shadow lines and clean geometry",
    featured: true,
  },
  {
    number: "02",
    slug: "interior-design",
    title: "Interior Design",
    headline: "Interiors that feel personal, not predictable.",
    description:
      "We design interiors around the way you live and work — creating spaces where materials, lighting, furniture, colour and functionality come together naturally.",
    deliverables: [
      "Residential Interiors",
      "Commercial Interiors",
      "Space Planning",
      "Interior Styling",
      "Furniture Planning",
      "Material Selection",
      "Colour & Finish Selection",
      "Lighting Planning",
      "Electrical Planning",
    ],
    image: images.livingWarm,
    imageAlt:
      "Warm neutral living room with layered textures, timber and soft daylight",
    featured: true,
  },
  {
    number: "03",
    slug: "3d-visualization",
    title: "3D Visualization",
    headline: "See your space before it becomes real.",
    description:
      "High-quality 3D visualizations help clients understand the design, materials, proportions and atmosphere before execution begins.",
    deliverables: [
      "Interior 3D Renders",
      "Exterior & Elevation Renders",
      "Material & Finish Previews",
      "Lighting Mood Studies",
      "Walkthrough Views",
      "Design Option Comparisons",
    ],
    image: images.minimalRoom,
    imageAlt:
      "Photorealistic render-like interior view of a minimal room with arched detail",
    featured: true,
  },
  {
    number: "04",
    slug: "project-management",
    title: "Project Management",
    headline: "Design that moves confidently into execution.",
    description:
      "We help bridge the gap between design and execution through detailed planning, material coordination and project management support.",
    deliverables: [
      "Working Drawings",
      "Material Coordination",
      "Vendor & Contractor Liaison",
      "Site Visits & Reviews",
      "Quality Checks",
      "Timeline Tracking",
    ],
    image: images.drawings,
    imageAlt: "Architectural drawings and technical plans laid out on a desk",
    featured: true,
  },
  {
    number: "05",
    slug: "space-planning",
    title: "Space Planning",
    headline: "Every square foot earning its place.",
    description:
      "Circulation, storage, daylight and proportion resolved early, so the layout works effortlessly long before finishes are chosen.",
    deliverables: [
      "Zoning & Circulation Studies",
      "Layout Options",
      "Storage Planning",
      "Daylight & Ventilation Review",
      "Vastu-Sensitive Planning",
      "Furniture Layouts",
    ],
    image: images.livingOpen,
    imageAlt: "Open-plan interior showing clear circulation and proportion",
    featured: false,
  },
  {
    number: "06",
    slug: "furniture-and-fixture-design",
    title: "Furniture & Fixture Design",
    headline: "Details designed, not bought off a shelf.",
    description:
      "Custom joinery, loose furniture selection and fixture detailing designed to fit the space exactly, in both proportion and character.",
    deliverables: [
      "Custom Joinery Design",
      "Wardrobe & Storage Detailing",
      "Modular Kitchen Design",
      "Loose Furniture Selection",
      "Fixture & Hardware Specification",
      "Shop Drawings",
    ],
    image: images.armchairDetail,
    imageAlt: "Close detail of a designer armchair against a textured wall",
    featured: false,
  },
  {
    number: "07",
    slug: "lighting-and-electrical-planning",
    title: "Lighting & Electrical Planning",
    headline: "Light that shapes how a room feels.",
    description:
      "Layered lighting schemes and coordinated electrical layouts, planned alongside the interiors rather than added at the end.",
    deliverables: [
      "Lighting Layouts",
      "Layered Lighting Schemes",
      "Fixture Selection",
      "Electrical & Switching Plans",
      "Cove & Profile Detailing",
      "Automation Readiness",
    ],
    image: images.livingCalm,
    imageAlt: "Living space with layered ambient and accent lighting at dusk",
    featured: false,
  },
  {
    number: "08",
    slug: "material-and-finish-selection",
    title: "Material & Finish Selection",
    headline: "Materials chosen to age well.",
    description:
      "Stone, timber, plaster, metal and textile palettes selected for how they look, how they wear and how they suit your budget.",
    deliverables: [
      "Material Palettes",
      "Finish Samples & Boards",
      "Stone & Tile Selection",
      "Veneer & Laminate Selection",
      "Paint & Texture Schedules",
      "Vendor Shortlisting",
    ],
    image: images.bathroomStone,
    imageAlt: "Stone and timber material detail in a contemporary bathroom",
    featured: false,
  },
  {
    number: "09",
    slug: "turnkey-execution-coordination",
    title: "Turnkey / Execution Coordination",
    headline: "One team accountable to handover.",
    description:
      "For clients who want a single point of responsibility, we coordinate the full build — contractors, carpentry, services and finishing — through to handover.",
    deliverables: [
      "Scope & Budget Planning",
      "Contractor Appointment Support",
      "Execution Scheduling",
      "On-Site Supervision",
      "Snag Lists & Rectification",
      "Handover Documentation",
    ],
    image: images.staircase,
    imageAlt: "Sculptural timber staircase under a skylight during finishing",
    featured: false,
  },
];

export const featuredServices = services.filter((service) => service.featured);

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

/** Options offered in the enquiry form's "Project Type" field. */
export const projectTypeOptions = [
  "Residential Architecture",
  "Residential Interior",
  "Villa",
  "Apartment",
  "Office",
  "Commercial",
  "Retail",
  "Renovation",
  "Other",
];
