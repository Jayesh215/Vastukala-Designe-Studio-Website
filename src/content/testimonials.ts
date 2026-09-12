import type { Testimonial } from "./types";

/**
 * Testimonials collection.
 *
 * IMPORTANT — the entries below are clearly-marked SAMPLE testimonials written
 * as placeholders. They do not represent real clients. Replace each one with a
 * genuine, consented review and set `isSample: false`; the site then stops
 * showing the "sample content" notice for that entry.
 */
export const testimonials: Testimonial[] = [
  {
    clientName: "Client Name",
    project: "Residential Project",
    review:
      "The team understood what we wanted and translated our ideas into a space that feels both beautiful and practical.",
    rating: 5,
    featured: true,
    isSample: true,
  },
  {
    clientName: "Client Name",
    project: "Apartment Interior, Pune",
    review:
      "Every drawing was explained to us before it was approved, so there were no surprises once work began on site.",
    rating: 5,
    featured: true,
    isSample: true,
  },
  {
    clientName: "Client Name",
    project: "Villa Architecture, Mulshi",
    review:
      "The planning made the most of a difficult plot. The house gets light all day and still feels private from the road.",
    rating: 5,
    featured: true,
    isSample: true,
  },
  {
    clientName: "Client Name",
    project: "Office Interior, Baner",
    review:
      "Our office was delivered on schedule and the layout has genuinely improved how the team works together.",
    rating: 5,
    featured: true,
    isSample: true,
  },
  {
    clientName: "Client Name",
    project: "Home Renovation, Aundh",
    review:
      "They were honest about what our budget could and could not achieve, which made the whole process far less stressful.",
    rating: 5,
    featured: false,
    isSample: true,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);

/** True while any displayed testimonial is still placeholder content. */
export const hasSampleTestimonials = testimonials.some((t) => t.isSample);
