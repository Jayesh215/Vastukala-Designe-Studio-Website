import { images } from "./images";
import type { ValueItem } from "./types";

/** Editorial copy and values used on the About page and the home intro. */
export const about = {
  eyebrow: "The Studio",
  heading: "We design spaces with a reason behind every detail.",
  intro: [
    "Vastukala Design Studio is an architecture and interior design studio focused on creating thoughtful, functional and visually refined spaces.",
    "Our philosophy is simple: good design should not only look beautiful — it should work beautifully.",
    "We take time to understand each client's requirements, lifestyle, aspirations and practical needs before developing a design direction.",
    "From the larger architectural concept to the smallest interior detail, every decision is made with purpose.",
  ],
  portrait: {
    src: images.staircase,
    alt: "Sculptural staircase lit by a skylight inside a contemporary residence",
  },
  secondaryImage: {
    src: images.minimalCorner,
    alt: "Quiet interior corner with a plastered wall and a single timber chair",
  },

  philosophy: {
    eyebrow: "Our Philosophy",
    heading: "Design should work as well as it looks.",
    body: [
      "A space is not successful because it photographs well. It is successful when it makes daily life easier — when storage falls where you need it, when light arrives at the right hour, when a room can be quiet or full of people and feel correct either way.",
      "We design from the inside out: how you will use the space first, how it will look second. The two are never in conflict for long, because a well-planned space is almost always the more beautiful one.",
      "Vastukala means the science of architecture. We treat it that way — as a discipline with logic behind it, not decoration applied afterwards.",
    ],
    image: {
      src: images.livingTall,
      alt: "Double-height living space with tall windows and restrained material palette",
    },
  },

  howWeThink: {
    eyebrow: "How We Think",
    heading: "Fewer decisions, made better.",
    points: [
      {
        title: "Plan before palette",
        description:
          "Layout, circulation and daylight are resolved before a single finish is selected. Get the plan right and the rest becomes straightforward.",
      },
      {
        title: "Restraint over excess",
        description:
          "We would rather use three materials well than nine indifferently. Calm spaces last longer than busy ones — visually and financially.",
      },
      {
        title: "Detail where it is touched",
        description:
          "Budget goes where you make contact with the space every day: handles, joinery, switches, flooring, light. Hidden surfaces stay honest and simple.",
      },
      {
        title: "Designed for the real budget",
        description:
          "A design that cannot be built is not a design. We plan within your number from the first drawing, and tell you early when something will not fit.",
      },
    ],
  },

  values: [
    {
      number: "01",
      title: "Client First",
      description:
        "Your requirements, lifestyle and budget lead the design — not a studio signature we are trying to repeat. Every project starts by listening.",
    },
    {
      number: "02",
      title: "Functional Thinking",
      description:
        "Circulation, storage, daylight, ventilation and maintenance are designed deliberately, so the space stays easy to live in years later.",
    },
    {
      number: "03",
      title: "Attention to Detail",
      description:
        "Junctions, edges, reveals, hardware and finishes are drawn and specified rather than left to be decided on site.",
    },
    {
      number: "04",
      title: "Visual Clarity",
      description:
        "Clear drawings and honest 3D views mean you understand exactly what you are approving before anything is built.",
    },
    {
      number: "05",
      title: "End-to-End Thinking",
      description:
        "From the first sketch to the final fixture, we stay involved — so the design intent survives all the way to handover.",
    },
  ] satisfies ValueItem[],

  whyChooseUs: {
    eyebrow: "Why Clients Choose Us",
    heading: "One studio, from first idea to final detail.",
    reasons: [
      {
        title: "Architecture and interiors under one roof",
        description:
          "No gap between the building and what goes inside it. Structure, services, joinery and lighting are coordinated by the same team.",
      },
      {
        title: "You see it before you build it",
        description:
          "Detailed 3D visualization is part of our standard process, so approvals are made with confidence rather than imagination.",
      },
      {
        title: "Drawings contractors can actually build from",
        description:
          "Dimensioned, coordinated working drawings reduce site queries, rework and the cost that comes with both.",
      },
      {
        title: "Honest, budget-aware advice",
        description:
          "We tell you where spending makes a visible difference and where it does not. No specification you cannot justify.",
      },
      {
        title: "Present through execution",
        description:
          "Site reviews, vendor coordination and quality checks continue until the space is finished and handed over.",
      },
      {
        title: "Based in Pune, working across Maharashtra",
        description:
          "Close enough to be on site when it matters, and experienced with local contractors, vendors and approval processes.",
      },
    ],
  },
};
