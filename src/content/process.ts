import type { ProcessStep } from "./types";

/** The six-stage studio process, shown on the home page and the Process page. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Let's Talk",
    description:
      "Tell us about your project, requirements, vision and expectations.",
    detail:
      "A first conversation — in person, on a call or over WhatsApp. We listen to what you want from the space, discuss scale, budget and timeline, and tell you honestly whether we are the right studio for the project.",
    deliverables: [
      "Introductory consultation",
      "Requirement discussion",
      "Indicative scope & fee",
    ],
  },
  {
    number: "02",
    title: "Understand the Space",
    description:
      "Study the site, dimensions, existing conditions and possibilities.",
    detail:
      "We visit and measure the site, record existing conditions, and study orientation, daylight, ventilation, views and structural constraints. Everything that will shape the design is documented before a single line is drawn.",
    deliverables: [
      "Site visit & measurement",
      "Existing condition drawings",
      "Orientation & daylight study",
    ],
  },
  {
    number: "03",
    title: "Concept & Direction",
    description: "Develop the initial design direction and spatial concept.",
    detail:
      "We present the spatial idea — how the plan works, how you move through it, and the character we are aiming for. Layout options, zoning and an early material direction are discussed together and refined until the direction feels right.",
    deliverables: [
      "Concept plans & zoning",
      "Layout options",
      "Mood & material direction",
    ],
  },
  {
    number: "04",
    title: "Design Development",
    description:
      "Develop plans, elevations, materials, furniture, lighting and details.",
    detail:
      "The approved concept is resolved in detail: dimensioned plans, elevations, sections, joinery, lighting and electrical layouts, finishes and fixtures — all coordinated so that decisions on site are already answered on paper.",
    deliverables: [
      "Detailed drawings & elevations",
      "Joinery & furniture details",
      "Lighting, electrical & finish schedules",
    ],
  },
  {
    number: "05",
    title: "3D Visualization",
    description: "Experience the proposed space before execution.",
    detail:
      "Photorealistic 3D views let you walk through the design before it is built — checking proportion, materials, colour and light. It is the cheapest possible moment to change your mind, and we encourage it.",
    deliverables: [
      "Interior & exterior 3D views",
      "Material and lighting previews",
      "Design sign-off",
    ],
  },
  {
    number: "06",
    title: "Execution",
    description:
      "Move from design toward realization through coordination, detailing and project support.",
    detail:
      "Working drawings go to site, materials are sourced, and we stay involved through site reviews, contractor coordination and quality checks — so the finished space matches the design that was approved.",
    deliverables: [
      "Working drawings & BOQ support",
      "Site reviews & coordination",
      "Snag list & handover",
    ],
  },
];
