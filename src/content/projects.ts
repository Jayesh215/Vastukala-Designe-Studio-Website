import { images } from "./images";
import type { Project, ProjectCategory } from "./types";

/**
 * Projects collection.
 *
 * Each entry generates its own page at /projects/<slug>. To add a project,
 * copy an existing object, change the fields and give it a unique `slug`.
 * `order` controls sequence (lower first); `featured` places it on the home page.
 */
export const projects: Project[] = [
  {
    name: "Aranya House",
    slug: "aranya-house-baner-pune",
    categories: ["Architecture", "Residential", "Villa"],
    projectType: "Independent Villa — Architecture & Interiors",
    location: "Baner, Pune",
    year: "2025",
    status: "Completed",
    client: "Private Residence",
    area: "4,800 sq ft",
    shortDescription:
      "A four-bedroom villa organised around a central courtyard, designed so every room borrows light and greenery from the middle of the plan.",
    brief: [
      "The family had lived in apartments for two decades and wanted a house that felt connected to the outdoors without giving up privacy from a busy approach road.",
      "Three generations share the home, so the brief called for a ground-floor bedroom, generous shared space for gatherings, and quiet zones that could be shut away when needed.",
    ],
    designConcept: [
      "The plan folds around a double-height courtyard planted with a single tree. Living, dining and circulation all open onto it, which keeps the interior bright while turning its back on the street.",
      "Solid walls face the road; the house opens fully to the rear garden. That simple move resolved privacy and daylight in one gesture.",
    ],
    designApproach: [
      "Kota stone flooring runs continuously from the entrance through the courtyard edge, blurring inside and outside.",
      "The upper floor is set back to create a shaded verandah below, cutting direct western sun on the living room glazing.",
      "Material palette was restricted to three elements — grey Kota, local teak and lime plaster — so the greenery and changing daylight carry the visual interest.",
      "Cross-ventilation was planned before any elevation was drawn: every habitable room has openings on two walls.",
    ],
    highlights: [
      "Central courtyard bringing daylight into the core of the plan",
      "Ground-floor bedroom suite for the grandparents",
      "Recessed upper floor forming a shaded verandah",
      "Three-material palette of Kota stone, teak and lime plaster",
      "Cross-ventilation in every habitable room",
      "Rainwater harvesting integrated into the courtyard drainage",
    ],
    servicesProvided: [
      "Architectural Design",
      "Space Planning",
      "3D Visualization",
      "Interior Design",
      "Lighting & Electrical Planning",
      "Material & Finish Selection",
      "Project Management",
    ],
    heroImage: images.villaPool,
    heroAlt:
      "Contemporary villa with a still reflecting pool and deep shaded verandah",
    gallery: [
      {
        src: images.courtyard,
        alt: "Internal courtyard with a single tree and stone flooring",
        orientation: "landscape",
      },
      {
        src: images.livingTall,
        alt: "Double-height living room facing the courtyard",
        orientation: "portrait",
      },
      {
        src: images.livingDining,
        alt: "Dining area with timber table and garden views",
        orientation: "portrait",
      },
      {
        src: images.bedroomWindow,
        alt: "Bedroom with a full-height window onto the garden",
        orientation: "landscape",
      },
      {
        src: images.kitchenIsland,
        alt: "Kitchen with a stone island and timber cabinetry",
        orientation: "portrait",
      },
      {
        src: images.staircase,
        alt: "Timber staircase lit from a skylight above",
        orientation: "portrait",
      },
    ],
    featured: true,
    order: 1,
  },
  {
    name: "The Ivory Apartment",
    slug: "the-ivory-apartment-kalyani-nagar",
    categories: ["Interiors", "Residential", "Apartment"],
    projectType: "3BHK Apartment — Interior Design",
    location: "Kalyani Nagar, Pune",
    year: "2025",
    status: "Completed",
    client: "Private Residence",
    area: "1,950 sq ft",
    shortDescription:
      "A developer-standard apartment reworked into a calm, light-filled home for a young family, with storage designed to disappear.",
    brief: [
      "The owners bought a well-located but generically finished apartment and wanted it to feel considered rather than off-the-shelf — without structural changes the society would not permit.",
      "With two young children, the practical brief was demanding: significant storage, surfaces that survive daily use, and a living room that works for both play and adult company.",
    ],
    designConcept: [
      "Everything visual was reduced to an ivory and pale oak base, so the few things that are not neutral — art, books, a single olive-green study — carry the character.",
      "Rather than adding decoration, we removed visual noise: aligned door heights, concealed hinges, recessed skirting and a continuous ceiling line make the apartment read as larger than it is.",
    ],
    designApproach: [
      "The under-used dry balcony was absorbed into the kitchen, adding a full run of tall storage without touching structure.",
      "Full-height joinery in ivory-lacquered MDF runs wall to wall in the living and bedrooms, swallowing storage behind flush shutters.",
      "Lighting was replanned entirely — cove lighting and recessed spots replaced the builder's central fittings, on three separate circuits per room.",
      "Finishes were chosen for wear: microtopping on the console, performance fabric on the sofa, matte laminate rather than high gloss at child height.",
    ],
    highlights: [
      "Dry balcony absorbed into the kitchen for a full run of tall storage",
      "Wall-to-wall flush joinery in ivory lacquer",
      "Layered lighting on three circuits per room",
      "Child-resistant finishes specified throughout",
      "Single olive-green study as the one accent in a neutral shell",
      "Completed in fourteen weeks with the family living off site",
    ],
    servicesProvided: [
      "Interior Design",
      "Space Planning",
      "Furniture & Fixture Design",
      "Lighting & Electrical Planning",
      "Material & Finish Selection",
      "3D Visualization",
      "Turnkey Execution Coordination",
    ],
    heroImage: images.livingNeutral,
    heroAlt:
      "Ivory living room with pale oak joinery and soft natural daylight",
    gallery: [
      {
        src: images.livingSofa,
        alt: "Living room seating in neutral linen with a low timber table",
        orientation: "landscape",
      },
      {
        src: images.kitchenWhite,
        alt: "White kitchen with tall concealed storage",
        orientation: "portrait",
      },
      {
        src: images.bedroomSoft,
        alt: "Bedroom in soft neutral tones with concealed wardrobes",
        orientation: "portrait",
      },
      {
        src: images.livingTextures,
        alt: "Detail of layered textures and materials in the living room",
        orientation: "portrait",
      },
      {
        src: images.minimalLounge,
        alt: "Reading corner with an accent chair and wall lighting",
        orientation: "portrait",
      },
      {
        src: images.bathroomStone,
        alt: "Bathroom with stone cladding and a floating vanity",
        orientation: "landscape",
      },
    ],
    featured: true,
    order: 2,
  },
  {
    name: "Courtyard 9",
    slug: "courtyard-9-koregaon-park",
    categories: ["Architecture", "Residential"],
    projectType: "Private Residence — Architecture",
    location: "Koregaon Park, Pune",
    year: "2024",
    status: "Completed",
    client: "Private Residence",
    area: "3,400 sq ft",
    shortDescription:
      "A narrow infill plot turned into a bright three-storey home by stacking the programme against one wall and opening the rest to the sky.",
    brief: [
      "A nine-metre-wide plot hemmed in by neighbours on both sides, with the only reliable light coming from above.",
      "The owners wanted a home that did not feel like a corridor, and asked specifically that the ground floor stay usable for a home practice.",
    ],
    designConcept: [
      "All services, stairs and storage were pushed to the blind southern wall, freeing the rest of the depth for rooms that face a slot courtyard and a rear garden.",
      "A skylight above the stair drops light three floors down through an open well, so the centre of the house is the brightest part of it rather than the darkest.",
    ],
    designApproach: [
      "The stair became the main spatial event — open treads in steel and teak that allow light and air to pass through.",
      "Openings on the party walls were kept high and narrow, admitting light without overlooking neighbours.",
      "Exposed concrete soffits and lime-plastered walls keep the palette cool, contrasted with warm teak joinery.",
      "The ground floor was planned with an independent entrance so the practice can operate without crossing family space.",
    ],
    highlights: [
      "Nine-metre-wide infill plot resolved with a service wall strategy",
      "Skylight lighting an open stair well through three floors",
      "Independent ground-floor entrance for a home practice",
      "High-level openings preserving privacy from neighbours",
      "Exposed concrete and lime plaster with teak joinery",
    ],
    servicesProvided: [
      "Architectural Design",
      "Space Planning",
      "3D Visualization",
      "Material & Finish Selection",
      "Project Management",
    ],
    heroImage: images.facadeLines,
    heroAlt:
      "Narrow contemporary house facade with strong horizontal shading lines",
    gallery: [
      {
        src: images.staircase,
        alt: "Open stair in steel and teak under a skylight",
        orientation: "portrait",
      },
      {
        src: images.livingOpen,
        alt: "Open-plan living area facing a slot courtyard",
        orientation: "portrait",
      },
      {
        src: images.exteriorGarden,
        alt: "Rear elevation opening onto a small private garden",
        orientation: "landscape",
      },
      {
        src: images.minimalRoom,
        alt: "Minimal room with exposed concrete soffit",
        orientation: "portrait",
      },
      {
        src: images.facadeDetail,
        alt: "Detail of the facade shading and material junction",
        orientation: "portrait",
      },
    ],
    featured: true,
    order: 3,
  },
  {
    name: "Studio Verdant",
    slug: "studio-verdant-office-baner",
    categories: ["Interiors", "Commercial", "Office"],
    projectType: "Workplace — Interior Design",
    location: "Baner, Pune",
    year: "2025",
    status: "Ongoing",
    client: "Technology Consultancy",
    area: "6,200 sq ft",
    shortDescription:
      "A forty-person office planned around acoustic zoning, with warm domestic materials replacing the usual corporate grey.",
    brief: [
      "A growing consultancy taking a bare-shell floor wanted a workplace that felt closer to a studio than an office, and that could absorb hybrid attendance without feeling empty on quiet days.",
      "Acoustics were the recurring complaint in their previous space — calls bleeding into focused work — so separation of noise was the central requirement.",
    ],
    designConcept: [
      "The floor is arranged as a gradient from loud to quiet: reception and collaboration near the entrance, open desks in the middle, focus rooms and libraries at the far end.",
      "Material language borrows from residential interiors — oak, bouclé, warm plaster and planting — because people concentrate better in rooms that do not feel institutional.",
    ],
    designApproach: [
      "Desk clusters were sized for sixty percent attendance, with soft seating absorbing overflow rather than empty workstations.",
      "Acoustic treatment is built into the architecture: slatted oak baffles, carpet planks in the desk zone and full-height glazing with double seals on call rooms.",
      "Lighting is deliberately low and layered, with task lights at desks rather than a uniform ceiling grid.",
      "Planting is integrated into joinery so it is watered as part of housekeeping instead of being an afterthought.",
    ],
    highlights: [
      "Loud-to-quiet acoustic zoning across the floor plate",
      "Desk count planned for hybrid attendance",
      "Slatted oak baffles and carpet-plank acoustic strategy",
      "Sealed call rooms with full-height glazing",
      "Layered task-based lighting instead of a ceiling grid",
      "Planting integrated into built joinery",
    ],
    servicesProvided: [
      "Interior Design",
      "Space Planning",
      "Furniture & Fixture Design",
      "Lighting & Electrical Planning",
      "Material & Finish Selection",
      "Project Management",
    ],
    heroImage: images.officeLounge,
    heroAlt:
      "Warm office lounge with oak panelling, soft seating and planting",
    gallery: [
      {
        src: images.officeMeeting,
        alt: "Glazed meeting room with acoustic treatment",
        orientation: "landscape",
      },
      {
        src: images.officeDesks,
        alt: "Open desk zone with task lighting",
        orientation: "portrait",
      },
      {
        src: images.officeOpen,
        alt: "Collaboration area near the office entrance",
        orientation: "portrait",
      },
      {
        src: images.cafeInterior,
        alt: "Office pantry and informal seating",
        orientation: "landscape",
      },
    ],
    featured: true,
    order: 4,
  },
  {
    name: "Terracotta Retreat",
    slug: "terracotta-retreat-mulshi",
    categories: ["Architecture", "Residential", "Villa"],
    projectType: "Weekend Home — Architecture & Interiors",
    location: "Mulshi, Pune",
    year: "2024",
    status: "Completed",
    client: "Private Residence",
    area: "2,700 sq ft",
    shortDescription:
      "A low, long weekend house in the hills, built in local stone and terracotta so it weathers into the landscape rather than against it.",
    brief: [
      "A family wanted a weekend home on sloping land near Mulshi that could be closed up for weeks at a time and still be comfortable on arrival.",
      "They asked for something that would look better after ten monsoons, not worse — which ruled out paint-dependent finishes and large unshaded glazing.",
    ],
    designConcept: [
      "The house steps with the slope in three low volumes linked by a covered walkway, keeping excavation minimal and giving every room a valley view.",
      "Terracotta jaali screens filter the western light and the wind, casting patterns that move across the stone floor through the afternoon.",
    ],
    designApproach: [
      "Walls are load-bearing local basalt, left exposed externally and lime-plastered inside to moderate temperature swings.",
      "Deep verandahs on all exposed faces mean glazing is never in direct sun, which keeps the interiors usable without air conditioning for most of the year.",
      "Roofs are pitched in Mangalore tile over a ventilated cavity — a local, repairable system rather than an imported detail.",
      "Interiors were kept sparse and hard-wearing: stone floors, cane, cotton and a single long teak dining table made on site.",
    ],
    highlights: [
      "Three stepped volumes following the natural slope",
      "Load-bearing local basalt walls left exposed",
      "Terracotta jaali screens shading the western face",
      "Deep verandahs keeping all glazing out of direct sun",
      "Ventilated Mangalore-tile roof over a cavity",
      "Passive comfort with minimal mechanical cooling",
    ],
    servicesProvided: [
      "Architectural Design",
      "Space Planning",
      "3D Visualization",
      "Interior Design",
      "Material & Finish Selection",
      "Turnkey Execution Coordination",
    ],
    heroImage: images.hillsideHome,
    heroAlt:
      "Low stone weekend house stepping down a hillside among trees",
    gallery: [
      {
        src: images.facadeStone,
        alt: "Exposed local stone wall with a shaded opening",
        orientation: "portrait",
      },
      {
        src: images.livingWarm,
        alt: "Warm living space with cane furniture and stone flooring",
        orientation: "portrait",
      },
      {
        src: images.exteriorEvening,
        alt: "The house at dusk with warm light through screens",
        orientation: "landscape",
      },
      {
        src: images.bedroomWarm,
        alt: "Bedroom with lime-plastered walls and cotton textiles",
        orientation: "portrait",
      },
      {
        src: images.livingCalm,
        alt: "Verandah seating looking out over the valley",
        orientation: "portrait",
      },
    ],
    featured: true,
    order: 5,
  },
  {
    name: "Sandstone Loft",
    slug: "sandstone-loft-aundh",
    categories: ["Interiors", "Renovation", "Residential"],
    projectType: "Duplex Renovation — Interior Design",
    location: "Aundh, Pune",
    year: "2026",
    status: "Ongoing",
    client: "Private Residence",
    area: "2,400 sq ft",
    shortDescription:
      "A twenty-year-old duplex stripped back and reorganised, trading two cramped floors of small rooms for a connected, light-filled home.",
    brief: [
      "The owners had outgrown the layout rather than the address. Small partitioned rooms, a dark internal stair and dated services made the duplex feel far smaller than its area suggested.",
      "The requirement was a full interior renovation while retaining the existing structure and keeping disruption to neighbours within society working hours.",
    ],
    designConcept: [
      "Non-structural partitions on the lower floor were removed to create a single connected living, dining and kitchen space, with the stair reopened as a light well.",
      "Sandstone and warm off-white replace the original dark granite and teak polish, lifting the entire interior without changing a single window.",
    ],
    designApproach: [
      "A structural review identified which walls could go before design began, so the layout was never based on optimism.",
      "The stair balustrade was replaced with slim metal verticals, letting light travel between floors for the first time.",
      "All plumbing and electrical services are being replaced, with concealed conduiting planned around the existing slab constraints.",
      "Demolition and heavy work are scheduled in society-permitted windows, with a dust containment strategy for occupied neighbouring flats.",
    ],
    highlights: [
      "Structural review completed before layout design",
      "Lower floor opened into a single connected living space",
      "Internal stair reopened as a light well",
      "Complete replacement of plumbing and electrical services",
      "Sandstone and off-white palette replacing dark granite",
      "Works phased within society-permitted hours",
    ],
    servicesProvided: [
      "Interior Design",
      "Space Planning",
      "Furniture & Fixture Design",
      "Lighting & Electrical Planning",
      "3D Visualization",
      "Project Management",
    ],
    heroImage: images.livingWide,
    heroAlt:
      "Wide open-plan living space in warm sandstone and off-white tones",
    gallery: [
      {
        src: images.livingLight,
        alt: "Renovated living area with large windows and pale flooring",
        orientation: "landscape",
      },
      {
        src: images.kitchenModern,
        alt: "New kitchen with integrated appliances and stone counters",
        orientation: "portrait",
      },
      {
        src: images.minimalCorner,
        alt: "Quiet corner with plastered wall and single chair",
        orientation: "portrait",
      },
      {
        src: images.bedroomLinen,
        alt: "Upper floor bedroom in linen tones",
        orientation: "landscape",
      },
    ],
    featured: false,
    order: 6,
  },
  {
    name: "Maison Café",
    slug: "maison-cafe-viman-nagar",
    categories: ["Interiors", "Commercial", "Hospitality"],
    projectType: "Café — Interior Design",
    location: "Viman Nagar, Pune",
    year: "2024",
    status: "Completed",
    client: "Independent Hospitality Brand",
    area: "1,400 sq ft",
    shortDescription:
      "A neighbourhood café designed to read well at 8am and at 9pm, with seating that suits both a laptop for two hours and dinner for six.",
    brief: [
      "An independent operator taking their first standalone space wanted a café with a distinct identity that would not date within three years or depend on a single photogenic wall.",
      "Covers mattered commercially: the layout had to seat as many people as possible without anyone feeling crowded.",
    ],
    designConcept: [
      "Three seating types — a long communal table, banquettes along the perimeter and small movable two-tops — let the same floor area serve very different times of day.",
      "The material palette is warm and slightly imperfect: lime-washed walls, reclaimed teak, terrazzo and aged brass, so wear reads as patina rather than damage.",
    ],
    designApproach: [
      "The counter was positioned to make the service journey short and legible, with the espresso machine visible from the door.",
      "Lighting is on four dimmable circuits, shifting the room from bright daytime work setting to low evening service.",
      "Banquette depths, table heights and power point locations were detailed for long stays without inviting them at peak hours.",
      "Acoustics were controlled with upholstered banquette backs and a slatted timber ceiling raft over the communal table.",
    ],
    highlights: [
      "Three seating typologies serving different day-parts",
      "Four dimmable lighting circuits for day-to-night shift",
      "Lime wash, reclaimed teak, terrazzo and aged brass palette",
      "Acoustic ceiling raft over the communal table",
      "Service journey planned for speed at peak hours",
    ],
    servicesProvided: [
      "Interior Design",
      "Space Planning",
      "Furniture & Fixture Design",
      "Lighting & Electrical Planning",
      "Material & Finish Selection",
      "Turnkey Execution Coordination",
    ],
    heroImage: images.cafeInterior,
    heroAlt:
      "Warm café interior with banquette seating, timber and brass details",
    gallery: [
      {
        src: images.hospitalityLobby,
        alt: "Entrance area with the service counter in view",
        orientation: "landscape",
      },
      {
        src: images.retailStore,
        alt: "Retail display shelving in reclaimed timber",
        orientation: "portrait",
      },
      {
        src: images.armchairDetail,
        alt: "Detail of upholstery and timber furniture",
        orientation: "portrait",
      },
      {
        src: images.kitchenCompact,
        alt: "Compact service kitchen behind the counter",
        orientation: "landscape",
      },
    ],
    featured: false,
    order: 7,
  },
  {
    name: "Linear House",
    slug: "linear-house-wakad",
    categories: ["Architecture", "Residential", "Villa"],
    projectType: "Independent House — Architecture",
    location: "Wakad, Pune",
    year: "2026",
    status: "Ongoing",
    client: "Private Residence",
    area: "3,900 sq ft",
    shortDescription:
      "A long, narrow house arranged as a single spine of rooms, each one opening to a garden on the quiet eastern side of the plot.",
    brief: [
      "A corner plot with road noise on two sides and a genuinely quiet eastern boundary — the design problem was almost entirely about orientation.",
      "The clients wanted generous shared space, four bedrooms and a home office, with a strong preference for morning light in the living areas.",
    ],
    designConcept: [
      "The house is pulled to the noisy edges and treated almost as a wall, with all habitable rooms facing east onto a protected garden strip.",
      "A continuous verandah runs the length of that eastern face, giving every room a shaded outdoor extension and a single legible elevation.",
    ],
    designApproach: [
      "Service spaces, stores and circulation buffer the road-facing walls, keeping noise away from bedrooms.",
      "Eastern glazing is full height but shaded by the verandah slab, admitting morning light while avoiding afternoon heat gain.",
      "The home office sits at the entrance end with its own access, separating client visits from family space.",
      "Elevations are resolved through proportion and shadow rather than applied cladding, keeping the external budget efficient.",
    ],
    highlights: [
      "All habitable rooms oriented east away from road noise",
      "Continuous shaded verandah along the garden face",
      "Service spaces used as an acoustic buffer",
      "Home office with independent entrance",
      "Elevations driven by proportion instead of applied cladding",
    ],
    servicesProvided: [
      "Architectural Design",
      "Space Planning",
      "3D Visualization",
      "Lighting & Electrical Planning",
      "Project Management",
    ],
    heroImage: images.whiteHouse,
    heroAlt:
      "Long white contemporary house with a continuous shaded verandah",
    gallery: [
      {
        src: images.houseFront,
        alt: "Front elevation showing the linear form",
        orientation: "landscape",
      },
      {
        src: images.facadeGeometry,
        alt: "Study of facade proportion and shadow",
        orientation: "portrait",
      },
      {
        src: images.livingLight,
        alt: "Living room with full-height eastern glazing",
        orientation: "portrait",
      },
      {
        src: images.houseDusk,
        alt: "The house at dusk with interior lighting visible",
        orientation: "landscape",
      },
    ],
    featured: false,
    order: 8,
  },
];

/** Filter chips shown on the Projects page, in display order. */
export const projectFilters = [
  "All",
  "Architecture",
  "Interiors",
  "Residential",
  "Commercial",
  "Ongoing",
  "Completed",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

export const featuredProjects = sortedProjects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

/** Matches a project against a filter chip (categories or status). */
export const matchesFilter = (project: Project, filter: ProjectFilter) => {
  if (filter === "All") return true;
  if (filter === "Ongoing" || filter === "Completed")
    return project.status === filter;
  return project.categories.includes(filter as ProjectCategory);
};

/** Next project in `order`, wrapping around — used by the detail page footer. */
export const getAdjacentProject = (slug: string) => {
  const index = sortedProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  return sortedProjects[(index + 1) % sortedProjects.length];
};
