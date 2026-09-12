import { site } from "./site";
import { images } from "./images";
import type { InstagramPost } from "./types";

/**
 * Instagram gallery — manually managed.
 *
 * This is a curated grid, not a live feed: no Instagram API is connected, so
 * nothing here pretends to be an automatically-synced post. Add your own images
 * and point each `url` at the matching post on Instagram.
 */
export const instagramPosts: InstagramPost[] = [
  {
    image: images.livingNeutral,
    alt: "Neutral living room with linen upholstery and oak detailing",
    caption: "Layered neutrals in a Kalyani Nagar apartment.",
    url: site.contact.instagramUrl,
  },
  {
    image: images.kitchenWood,
    alt: "Timber kitchen with stone counter and brass fittings",
    caption: "Timber, stone and brass — kitchen detail.",
    url: site.contact.instagramUrl,
  },
  {
    image: images.facadeConcrete,
    alt: "Board-formed concrete facade with deep window reveals",
    caption: "Facade study in board-formed concrete.",
    url: site.contact.instagramUrl,
  },
  {
    image: images.bedroomLinen,
    alt: "Quiet bedroom in linen and soft plaster tones",
    caption: "A bedroom kept deliberately quiet.",
    url: site.contact.instagramUrl,
  },
  {
    image: images.drawings,
    alt: "Architectural drawings and plans on a studio table",
    caption: "Where every project actually starts.",
    url: site.contact.instagramUrl,
  },
  {
    image: images.officeLounge,
    alt: "Office lounge with warm wood panelling and soft seating",
    caption: "Workplace lounge, Baner.",
    url: site.contact.instagramUrl,
  },
  {
    image: images.courtyard,
    alt: "Internal courtyard with planting and stone flooring",
    caption: "Courtyards make Indian homes work.",
    url: site.contact.instagramUrl,
  },
  {
    image: images.bathroomStone,
    alt: "Stone-clad bathroom with a monolithic vanity",
    caption: "Stone, end to end.",
    url: site.contact.instagramUrl,
  },
];

export const instagramSection = {
  eyebrow: "Instagram",
  heading: "Follow the design journey.",
  description:
    "Explore our latest projects, design ideas, behind-the-scenes moments and architectural inspirations on Instagram.",
  cta: "Follow on Instagram",
};
