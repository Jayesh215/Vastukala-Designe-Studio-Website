# Vastukala Design Studio

Architecture & interior design studio website — Pune, Maharashtra.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Two things to do before going live

1. **Add the logo.** Place the supplied logo file at `public/logo.png` (or `.svg` / `.webp`),
   then in `src/content/site.ts` set:

   ```ts
   logo: {
     src: "/logo.png",
     // ...also set width/height to the file's real pixel dimensions
   }
   ```

   Until `src` is set, the header and footer fall back to a typographic wordmark so
   that nothing on the site invents a logo. The logo is rendered at its original
   proportions and is never recoloured or cropped.

   Also replace `src/app/icon.svg` (the browser favicon) with an icon version of the
   logo. The current file is a neutral placeholder monogram.

2. **Set the live domain.** In `src/content/site.ts`, change `url` from
   `https://vastukaladesignstudio.com` to the real domain. This drives canonical URLs,
   `sitemap.xml`, `robots.txt` and Open Graph tags.

## Editing content

All editable content lives in `src/content/`. These are plain data files — no JSX, no
layout code — so projects, articles, testimonials, services and FAQs can be changed
without touching a component.

| File | What it controls |
| --- | --- |
| `site.ts` | Brand, phone, email, Instagram, navigation, stats, logo |
| `projects.ts` | Project portfolio + detail pages |
| `services.ts` | Services list and enquiry-form project types |
| `insights.ts` | Journal articles + article pages |
| `testimonials.ts` | Client reviews |
| `faqs.ts` | FAQ accordions |
| `instagram.ts` | Curated Instagram grid |
| `process.ts` | The six process stages |
| `about.ts` | About page copy and values |
| `legal.ts` | Privacy policy and terms |
| `images.ts` | Every photograph used on the site |

### Adding a project

Copy an existing object in `src/content/projects.ts`, then change the fields. A unique
`slug` is required — it becomes the URL, e.g. `/projects/aranya-house-baner-pune`.
`order` controls sequence (lower first) and `featured: true` places it on the home page.
The page, the sitemap entry and the filter counts are all generated automatically.

### Adding an article

Copy an existing object in `src/content/insights.ts`. The `body` is an array of blocks,
so no HTML is needed:

```ts
body: [
  { type: "paragraph", text: "..." },
  { type: "heading", text: "..." },
  { type: "list", items: ["...", "..."] },
  { type: "quote", text: "..." },
  { type: "image", src: images.livingWarm, alt: "...", caption: "..." },
]
```

### Testimonials

The entries currently in `testimonials.ts` are clearly-marked **samples** and are
labelled as placeholder content on the site. Replace each with a real, consented review
and set `isSample: false` to remove the notice.

### Images

`src/content/images.ts` is the single place images are defined. It currently points at
Unsplash for placeholder architectural photography. To use the studio's own work, put
files in `public/images/` and change the value:

```ts
livingWarm: "/images/aranya-house-living.jpg",
```

New remote hosts must be allow-listed in `next.config.ts` under `images.remotePatterns`.

### Instagram

The Instagram section is a **manually curated grid**, not a live feed — no Instagram API
is connected, so nothing on the site pretends to be an auto-synced post. Edit
`src/content/instagram.ts` to change it.

## WhatsApp enquiries

Every call to action opens WhatsApp on `+91 89567 30655`. The number lives in one place
(`site.contact.whatsappNumber`) and `src/lib/whatsapp.ts` builds the URL-encoded links.

The contact form does not post to a server: it formats the submission (name, phone,
email, project type, location, budget, timeline, requirement) into a WhatsApp message
and opens it, so enquiries arrive directly in the studio's chat. There is no database
and no enquiry data is stored by the website.

## Project structure

```
src/
  app/                 Routes, metadata, sitemap, robots, OG image
  components/
    layout/            Header, Footer, Logo, mobile CTA bar
    sections/          Reusable page sections
    projects/          Project cards, filters, gallery
    insights/          Article cards, filters, body renderer
    contact/           Enquiry form
    motion/            Reveal, TextReveal, CountUp, Parallax, page transition
    ui/                Container, Button, Accordion, icons
  content/             All editable content (see above)
  lib/                 WhatsApp link builders, SEO + structured data helpers
```

## Notes

- **Animation:** `TextReveal` puts its viewport observer on the mask rather than the
  moving line. The line starts translated outside its `overflow-hidden` box, so
  observing it directly reports an empty intersection rect and never triggers.
- **Accessibility:** all animations respect `prefers-reduced-motion`; there is a skip
  link, and the mobile menu traps nothing and closes on `Escape`.
- **SEO:** every page sets its own title, description and canonical URL. Structured data
  covers the organisation, breadcrumbs, FAQs, articles and projects.
- **Legal pages** are sensible plain-language defaults. Have them reviewed before
  relying on them commercially.
