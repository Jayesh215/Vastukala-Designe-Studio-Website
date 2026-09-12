import type { FaqItem } from "./types";

/** FAQ collection. Used on the home page, Services, Process and Contact pages. */
export const faqs: FaqItem[] = [
  {
    question: "How do I start a project with Vastukala Design Studio?",
    answer:
      "Message us on WhatsApp or send an enquiry through the contact form with a little about your space, location, timeline and approximate budget. We follow up with an introductory consultation, then share an indicative scope and fee before any work begins.",
    topics: ["general", "process"],
  },
  {
    question: "Do you provide both architecture and interior design?",
    answer:
      "Yes. We work as a single studio across both, which means the building and its interiors are designed together rather than handed between two teams. You can also engage us for only one of the two if the other is already underway.",
    topics: ["general", "services"],
  },
  {
    question: "Do you provide 3D visualization?",
    answer:
      "3D visualization is part of our standard process, not an add-on. Before execution begins you receive photorealistic views of the proposed space so you can review proportion, materials, colour and lighting, and request changes while they are still inexpensive.",
    topics: ["general", "services"],
  },
  {
    question: "Do you work on residential projects?",
    answer:
      "Residential work is the core of our practice — apartments, villas, independent houses, weekend homes and renovations. Projects range from single-room interventions to complete architecture and turnkey interiors.",
    topics: ["general", "services"],
  },
  {
    question: "Do you take commercial projects?",
    answer:
      "Yes. We design offices, retail spaces, cafés, clinics and hospitality interiors, with attention to brand character, circulation, services coordination and the practical realities of a working space.",
    topics: ["general", "services", "commercial"],
  },
  {
    question: "Can you help with material and finish selection?",
    answer:
      "We prepare material palettes and finish schedules covering stone, tile, timber, veneer, paint, textures, hardware and lighting, shortlist vendors, and accompany you to key selections so choices stay coordinated and within budget.",
    topics: ["general", "services"],
  },
  {
    question: "Where do you provide services?",
    answer:
      "We are based in Pune and work across Pune, Pimpri-Chinchwad, Mulshi, Lonavala and wider Maharashtra, including Mumbai and Nashik. For projects further afield we work with scheduled site visits supported by detailed drawings and remote reviews.",
    topics: ["general"],
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Design typically takes four to ten weeks depending on scale and how quickly decisions are made. Interior execution usually runs eight to twenty weeks, while full architectural projects are longer and depend on approvals and construction. We share a realistic schedule at the start.",
    topics: ["process"],
  },
  {
    question: "Do you handle execution, or only design?",
    answer:
      "Both. Many clients appoint us for design and drawings and use their own contractor, with us reviewing site work. Others prefer turnkey coordination, where we manage vendors, scheduling and quality checks through to handover.",
    topics: ["process", "services"],
  },
  {
    question: "How are your fees structured?",
    answer:
      "Fees depend on scope, area and the level of detail required, and are usually quoted either per square foot or as a percentage of project cost. You receive a written scope and fee proposal before work starts, with clear payment stages.",
    topics: ["general", "process"],
  },
];

export const homeFaqs = faqs.filter((faq) => faq.topics.includes("general"));

export const getFaqsByTopic = (topic: FaqItem["topics"][number]) =>
  faqs.filter((faq) => faq.topics.includes(topic));
