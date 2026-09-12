import { images } from "./images";
import type { Insight, InsightCategory } from "./types";

/**
 * Insights / Journal collection.
 *
 * Each entry generates a page at /insights/<slug>. Article bodies are built from
 * blocks — "paragraph", "heading", "list", "quote" and "image" — so new posts can
 * be written without touching any component code.
 */
export const insights: Insight[] = [
  {
    title: "7 Things to Consider Before Designing Your Home Interior",
    slug: "7-things-to-consider-before-designing-your-home-interior",
    category: "Interior Design",
    excerpt:
      "Most interior projects go wrong long before a colour is chosen. These are the seven decisions worth settling first.",
    date: "2026-08-14",
    readingTime: "7 min read",
    author: "Vastukala Design Studio",
    coverImage: images.livingNeutral,
    coverAlt: "Neutral living room with oak joinery and soft daylight",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Almost every interior project that disappoints its owners does so for the same reason: the exciting decisions were made before the boring ones. Finishes, colours and furniture are the visible part of interior design, but they are also the last part. What determines whether a home feels right is settled much earlier, usually in conversations that feel too practical to be interesting.",
      },
      {
        type: "paragraph",
        text: "Before you shortlist a single tile, these are the seven things worth resolving.",
      },
      { type: "heading", text: "1. How you actually live, not how you plan to" },
      {
        type: "paragraph",
        text: "Clients often describe an aspirational version of their routine — formal dining every evening, a home gym used daily, a guest room in constant use. Design for the real pattern instead. If meals happen in front of the television four nights a week, a formal dining room will sit unused while the living room stays too small.",
      },
      {
        type: "paragraph",
        text: "Walk through a normal weekday out loud: where shoes land, where bags go, where laundry accumulates, who needs to take calls and where. Those answers shape the plan more than any style reference.",
      },
      { type: "heading", text: "2. Storage, counted honestly" },
      {
        type: "paragraph",
        text: "Storage is the single most common regret. Not because homes lack cupboards, but because the quantity was estimated rather than measured. Count what you own — suitcases, seasonal bedding, appliances, festival items, documents, sports gear — and assign each category a location in the plan.",
      },
      {
        type: "quote",
        text: "A home with too little storage always looks untidy, no matter how well it was designed.",
      },
      { type: "heading", text: "3. A budget that includes everything" },
      {
        type: "paragraph",
        text: "A realistic interior budget has more lines than most people expect. Beyond civil work and joinery there are services, lighting, loose furniture, soft furnishings, appliances, sanitaryware, professional fees and a contingency of around ten percent.",
      },
      {
        type: "list",
        items: [
          "Civil and plumbing modifications",
          "Electrical rewiring and lighting fixtures",
          "Fixed joinery and modular kitchen",
          "Loose furniture and soft furnishings",
          "Appliances, sanitaryware and hardware",
          "Design fees and a contingency allowance",
        ],
      },
      {
        type: "paragraph",
        text: "Projects that stall almost always do so because the first three lines consumed the money meant for the last three. Allocate across all of them at the start.",
      },
      { type: "heading", text: "4. Daylight, orientation and heat" },
      {
        type: "paragraph",
        text: "In Pune, a west-facing living room with unshaded glazing will be uncomfortable from March to June regardless of how well it is furnished. Note which rooms face which direction, when each gets direct sun, and where cross-ventilation is possible.",
      },
      {
        type: "image",
        src: images.livingTall,
        alt: "Tall windows admitting filtered daylight into a living space",
        caption:
          "Shaded full-height glazing admits light without the heat gain of direct sun.",
      },
      { type: "heading", text: "5. What cannot be changed" },
      {
        type: "paragraph",
        text: "Structural columns, beam depths, plumbing shafts, window positions and society regulations are fixed constraints. Establish them before design begins, particularly in apartments, where wet areas usually cannot move far and external windows cannot move at all.",
      },
      { type: "heading", text: "6. Maintenance, five years out" },
      {
        type: "paragraph",
        text: "Every material has a maintenance cost, whether or not anyone mentions it at selection. High-gloss surfaces show fingerprints, open shelving needs dusting, light upholstery needs cleaning, natural stone needs sealing. None of this is a reason to avoid them — but choose deliberately, especially at child and pet height.",
      },
      { type: "heading", text: "7. Who is responsible on site" },
      {
        type: "paragraph",
        text: "Design and execution are different jobs. Decide early whether your designer is also coordinating the build, whether you are appointing a separate contractor, or whether you are managing vendors yourself. Ambiguity here is where timelines and quality tend to fail.",
      },
      {
        type: "paragraph",
        text: "Settle these seven, and the enjoyable part of interior design — material palettes, furniture, lighting, styling — becomes far easier, because every choice has a clear constraint to sit inside.",
      },
    ],
  },
  {
    title: "How Good Space Planning Changes the Way You Live",
    slug: "how-good-space-planning-changes-the-way-you-live",
    category: "Space Planning",
    excerpt:
      "Space planning is invisible when it is done well. Here is what it actually does, and why it matters more than finishes.",
    date: "2026-07-22",
    readingTime: "6 min read",
    author: "Vastukala Design Studio",
    coverImage: images.livingOpen,
    coverAlt: "Open-plan interior with clear circulation and generous proportion",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Space planning is the least photogenic part of design and the part that affects daily life most. It decides how far you walk with groceries, whether two people can cook without colliding, whether a door swing blocks a passage, and whether a room can hold twelve people once a year without feeling oversized the rest of the time.",
      },
      {
        type: "paragraph",
        text: "When it is done well, nobody notices it. When it is done badly, people blame the furniture.",
      },
      { type: "heading", text: "Circulation is the real floor area" },
      {
        type: "paragraph",
        text: "Every plan contains movement space that cannot be used for anything else. Poor plans scatter it — a metre here, a corner there — until a surprising share of the home is corridor that nobody counted. Good plans consolidate movement into clear routes and hand the recovered area back to rooms.",
      },
      {
        type: "quote",
        text: "You cannot furnish a corridor. Reducing wasted circulation is the cheapest way to make a home feel larger.",
      },
      { type: "heading", text: "Zoning by noise, not by function" },
      {
        type: "paragraph",
        text: "Conventional planning groups rooms by type: bedrooms together, living spaces together. Grouping by noise is often more useful. A study next to a television wall fails however well it is detailed, and a bedroom beside the main entrance never quite feels restful.",
      },
      {
        type: "list",
          items: [
          "Loud: entrance, living, dining, kitchen, utility",
          "Transitional: family room, informal seating, passages",
          "Quiet: bedrooms, study, reading corners, prayer space",
        ],
      },
      { type: "heading", text: "The journeys you repeat every day" },
      {
        type: "paragraph",
        text: "Three routes deserve specific attention because they are walked constantly: door to kitchen with shopping, kitchen to dining with food, and bedroom to bathroom at night. Shortening and simplifying those three does more for daily comfort than almost any finish decision.",
      },
      {
        type: "image",
        src: images.kitchenIsland,
        alt: "Kitchen island positioned to keep the work triangle compact",
        caption:
          "A compact work triangle keeps the most-repeated journeys short.",
      },
      { type: "heading", text: "Furniture drawn to real dimensions" },
      {
        type: "paragraph",
        text: "A plan that shows generically-sized rectangles is not a plan. Sofas, beds, dining tables and wardrobes should be drawn at their actual dimensions, with the space around them that they need to function: clearance to walk past a bed, to pull out a chair, to open a wardrobe shutter fully.",
      },
      { type: "heading", text: "Flexibility without compromise" },
      {
        type: "paragraph",
        text: "Rooms asked to do two things usually do neither well. A guest bedroom that doubles as a study works if the study function is primary and the bed is secondary; it fails if both are treated equally. Decide the hierarchy and design honestly for the dominant use.",
      },
      {
        type: "paragraph",
        text: "Good space planning rarely announces itself. It shows up as a home that simply works — where things have places, where movement is easy, and where the space feels larger than its measured area.",
      },
    ],
  },
  {
    title: "Choosing the Right Lighting for Modern Interiors",
    slug: "choosing-the-right-lighting-for-modern-interiors",
    category: "Lighting",
    excerpt:
      "One bright ceiling light flattens a room. Layered lighting, planned early, is what makes interiors feel considered.",
    date: "2026-06-30",
    readingTime: "6 min read",
    author: "Vastukala Design Studio",
    coverImage: images.livingCalm,
    coverAlt: "Living space lit by layered ambient and accent lighting at dusk",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Lighting is the element most often left until last and the one that most changes how a finished space feels. A beautifully detailed room lit by a single bright ceiling fitting will look flat and clinical. A simpler room with three well-placed layers of light will look expensive.",
      },
      { type: "heading", text: "Work in three layers" },
      {
        type: "paragraph",
        text: "Every room needs ambient light for general visibility, task light where something specific happens, and accent light to give the space depth. Most Indian homes have the first and almost none of the other two.",
      },
      {
        type: "list",
        items: [
          "Ambient — cove lighting, diffused ceiling fittings, uplighting",
          "Task — reading lamps, under-cabinet strips, mirror lighting, desk lights",
          "Accent — wall washing, picture lights, shelf lighting, landscape spots",
        ],
      },
      { type: "heading", text: "Colour temperature, kept consistent" },
      {
        type: "paragraph",
        text: "Mixing warm and cool white within one room is the fastest way to make it feel unresolved. For living spaces and bedrooms, 2700K to 3000K suits warm material palettes. Kitchens and work areas can go to 3500K or 4000K where accuracy matters. Choose per room and stay consistent within it.",
      },
      {
        type: "quote",
        text: "If a room needs to be bright at 9am and soft at 9pm, the answer is more circuits, not brighter bulbs.",
      },
      { type: "heading", text: "Circuits and dimming decide flexibility" },
      {
        type: "paragraph",
        text: "The number of independently switched circuits determines how many moods a room can hold. A living room on one switch has one setting. The same room split into three dimmable circuits — cove, accent, task — can serve a family evening, a gathering and a film without touching a single fitting.",
      },
      {
        type: "paragraph",
        text: "Circuits must be decided before wiring, which is why lighting belongs in the design phase rather than the shopping phase.",
      },
      {
        type: "image",
        src: images.bedroomSoft,
        alt: "Bedroom with bedside task lighting and soft ambient glow",
        caption:
          "Bedside task lighting on its own switch removes the need for a bright central fitting.",
      },
      { type: "heading", text: "Hide the source, show the light" },
      {
        type: "paragraph",
        text: "Glare ruins otherwise good schemes. Recess fittings, use deep baffles, position sources out of normal sightlines, and light surfaces rather than eyes. The aim is to see the effect of light on material, not the fitting producing it.",
      },
      { type: "heading", text: "Let daylight lead" },
      {
        type: "paragraph",
        text: "Artificial lighting should complement the daylight a room already receives. Note where light falls through the day, then place artificial layers to extend that pattern into the evening rather than contradict it.",
      },
      {
        type: "paragraph",
        text: "Plan lighting alongside the interiors, not after them, and the same budget buys a noticeably better room.",
      },
    ],
  },
  {
    title: "From Floor Plan to Finished Home: Understanding the Design Process",
    slug: "from-floor-plan-to-finished-home-understanding-the-design-process",
    category: "Architecture",
    excerpt:
      "What actually happens between the first site visit and handover — stage by stage, with what you approve at each one.",
    date: "2026-05-18",
    readingTime: "8 min read",
    author: "Vastukala Design Studio",
    coverImage: images.drawings,
    coverAlt: "Architectural drawings and plans spread across a studio table",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "For most people, a home is the largest project they will ever commission, and the process is unfamiliar. Knowing what happens at each stage — and what you are being asked to approve — removes most of the anxiety from it.",
      },
      { type: "heading", text: "Stage 1 — Brief and feasibility" },
      {
        type: "paragraph",
        text: "The first conversation establishes requirements, budget, timeline and constraints. A good studio will tell you at this point if what you want cannot be achieved for what you intend to spend. That is a useful answer, not a discouraging one.",
      },
      { type: "heading", text: "Stage 2 — Site study and measurement" },
      {
        type: "paragraph",
        text: "The site or existing space is measured and documented: dimensions, levels, structural elements, services, orientation, daylight, views and regulations. Everything designed afterwards depends on this being accurate.",
      },
      { type: "heading", text: "Stage 3 — Concept design" },
      {
        type: "paragraph",
        text: "You are shown how the space could be organised — zoning, circulation, layout options and an early material direction. Expect two or three genuine alternatives and expect to discuss them properly. Changes at this stage cost nothing but time.",
      },
      {
        type: "quote",
        text: "Every change becomes more expensive as the project progresses. Concept stage is where you should be most demanding.",
      },
      { type: "heading", text: "Stage 4 — Design development" },
      {
        type: "paragraph",
        text: "The approved concept is resolved into detail: dimensioned plans, elevations, sections, joinery details, lighting and electrical layouts, plumbing, finishes and fixture schedules. This is the longest design stage and the one that determines site quality.",
      },
      {
        type: "list",
        items: [
          "Dimensioned floor plans and furniture layouts",
          "Elevations and sections for every designed wall",
          "Joinery and modular kitchen details",
          "Lighting, electrical and plumbing layouts",
          "Finish, hardware and fixture schedules",
        ],
      },
      { type: "heading", text: "Stage 5 — 3D visualization and sign-off" },
      {
        type: "paragraph",
        text: "Photorealistic views let you experience proportion, material and light before committing. Use this stage seriously: it is the last inexpensive opportunity to change your mind.",
      },
      {
        type: "image",
        src: images.minimalRoom,
        alt: "Interior view showing material, proportion and light",
        caption:
          "A 3D view is not decoration — it is a decision-making tool before execution.",
      },
      { type: "heading", text: "Stage 6 — Working drawings and costing" },
      {
        type: "paragraph",
        text: "Design drawings become construction information: setting-out dimensions, sections through junctions, specifications and quantities that contractors can price accurately. Comparable quotations depend on this documentation being complete.",
      },
      { type: "heading", text: "Stage 7 — Execution and site review" },
      {
        type: "paragraph",
        text: "Work begins on site, with periodic reviews to confirm that what is being built matches what was drawn. Materials are checked on delivery, junctions are inspected as they happen, and site queries are resolved against the drawings.",
      },
      { type: "heading", text: "Stage 8 — Snagging and handover" },
      {
        type: "paragraph",
        text: "Before handover the space is inspected in detail and a snag list is issued — alignment, finish defects, hardware operation, service testing. Rectification is completed, documentation and warranties are handed over, and the project closes.",
      },
      {
        type: "paragraph",
        text: "The stages are sequential for a reason. Skipping documentation to start on site sooner is the most common cause of rework, and rework is always more expensive than drawing.",
      },
    ],
  },
  {
    title: "How to Build a Timeless Interior Instead of Following Trends",
    slug: "how-to-build-a-timeless-interior-instead-of-following-trends",
    category: "Design Trends",
    excerpt:
      "Trends are cheap to follow and expensive to undo. A simple structural rule keeps interiors current for a decade.",
    date: "2026-04-09",
    readingTime: "6 min read",
    author: "Vastukala Design Studio",
    coverImage: images.minimalLounge,
    coverAlt: "Restrained interior with timeless proportions and neutral palette",
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "Interiors date in a predictable way. It is rarely the architecture that looks old — it is the finishes and fittings that were fashionable in a specific year. The useful distinction is between decisions that are permanent and decisions that are easy to change.",
      },
      { type: "heading", text: "The permanence rule" },
      {
        type: "paragraph",
        text: "Keep the expensive, difficult-to-change layer neutral and well-proportioned. Put personality into the layer you can replace in an afternoon.",
      },
      {
        type: "list",
        items: [
          "Permanent — flooring, wall treatment, fixed joinery, sanitaryware, kitchen carcass",
          "Semi-permanent — large furniture, light fittings, window treatment",
          "Easy to change — cushions, art, rugs, accessories, paint",
        ],
      },
      {
        type: "quote",
        text: "Be conservative where change is expensive. Be adventurous where change is cheap.",
      },
      { type: "heading", text: "Materials that improve with age" },
      {
        type: "paragraph",
        text: "Natural materials tend to age into character: stone, solid timber, lime plaster, brass, cotton, wool, cane. Materials that imitate them usually age into damage, because a scratch on real timber is patina while a scratch on a printed surface is a defect.",
      },
      { type: "heading", text: "Proportion outlasts style" },
      {
        type: "paragraph",
        text: "Rooms that feel right decades later almost always have their proportions resolved: aligned door and window heights, consistent reveal depths, furniture scaled to the space, a clear relationship between solid and opening. None of this belongs to a period.",
      },
      {
        type: "image",
        src: images.livingWarm,
        alt: "Warm interior with natural materials and considered proportion",
        caption:
          "Natural materials and resolved proportion are what actually age well.",
      },
      { type: "heading", text: "Restrict the palette" },
      {
        type: "paragraph",
        text: "Three to four materials used consistently look more expensive than nine used cautiously. A restricted palette also makes future changes easy, because anything new only needs to work with a few existing elements.",
      },
      { type: "heading", text: "Borrow from trends, do not commit to them" },
      {
        type: "paragraph",
        text: "There is nothing wrong with liking what is current. Express it in cushions, art, a single painted wall or a statement lamp — not in the flooring across your entire home. That way you can move on when you want to, without a renovation.",
      },
      {
        type: "paragraph",
        text: "A timeless interior is not a style. It is a strategy about where to take risks.",
      },
    ],
  },
  {
    title: "5 Common Interior Design Mistakes to Avoid",
    slug: "5-common-interior-design-mistakes-to-avoid",
    category: "Home Design",
    excerpt:
      "The same five mistakes appear in project after project — and every one of them is avoidable on paper.",
    date: "2026-03-12",
    readingTime: "5 min read",
    author: "Vastukala Design Studio",
    coverImage: images.livingSofa,
    coverAlt: "Living room with correctly scaled furniture and clear circulation",
    featured: false,
    body: [
      {
        type: "paragraph",
        text: "Across very different homes, budgets and briefs, the same handful of mistakes recur. All five are inexpensive to avoid at drawing stage and costly to fix once built.",
      },
      { type: "heading", text: "1. Buying furniture before planning the room" },
      {
        type: "paragraph",
        text: "A sofa bought because it looked good in a showroom is the most common cause of a crowded living room. Showroom floors are enormous; your room is not. Plan the layout, establish the dimensions each piece can occupy, then shop against those numbers.",
      },
      { type: "heading", text: "2. Lighting decided after everything else" },
      {
        type: "paragraph",
        text: "Once wiring is complete, your lighting options are fixed. If circuits, cove details and fitting positions were not planned, no amount of fixture selection will produce a well-lit room. Lighting is a design decision, not a purchase.",
      },
      {
        type: "quote",
        text: "You cannot buy your way out of a lighting plan that was never made.",
      },
      { type: "heading", text: "3. Pushing all furniture against the walls" },
      {
        type: "paragraph",
        text: "Lining the perimeter with furniture does not make a room feel bigger — it makes it feel like a waiting area. Floating seating inward creates conversation groups and leaves clear circulation behind, which reads as generous rather than empty.",
      },
      { type: "heading", text: "4. Underestimating storage, again" },
      {
        type: "paragraph",
        text: "Storage is the most frequently regretted decision in interior design. Count what you own before finalising joinery, allow for what accumulates over five years, and design storage close to where things are used rather than wherever space was left over.",
      },
      {
        type: "image",
        src: images.kitchenWhite,
        alt: "Kitchen with full-height concealed storage",
        caption:
          "Tall concealed storage is almost always worth the wall it occupies.",
      },
      { type: "heading", text: "5. Spending evenly across the whole home" },
      {
        type: "paragraph",
        text: "Uniform spending produces a uniformly average result. Concentrate budget where you make contact with the space daily — flooring, kitchen, lighting, bathroom fittings, seating — and keep guest rooms, utility areas and hidden surfaces simple and honest.",
      },
      {
        type: "paragraph",
        text: "None of these mistakes require expertise to avoid. They require decisions to be made in the right order, which is precisely what a design process is for.",
      },
    ],
  },
];

/** Categories shown as filters on the Insights page. */
export const insightCategories: ("All" | InsightCategory)[] = [
  "All",
  "Architecture",
  "Interior Design",
  "Home Design",
  "Materials",
  "Lighting",
  "Space Planning",
  "Design Trends",
  "Studio Journal",
];

export const sortedInsights = [...insights].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const featuredInsights = sortedInsights.filter((i) => i.featured);

export const getInsightBySlug = (slug: string) =>
  insights.find((insight) => insight.slug === slug);

/** Up to `limit` other articles, preferring the same category. */
export const getRelatedInsights = (slug: string, limit = 3) => {
  const current = getInsightBySlug(slug);
  if (!current) return sortedInsights.slice(0, limit);
  const sameCategory = sortedInsights.filter(
    (i) => i.slug !== slug && i.category === current.category,
  );
  const others = sortedInsights.filter(
    (i) => i.slug !== slug && i.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
};

export const formatInsightDate = (date: string) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
