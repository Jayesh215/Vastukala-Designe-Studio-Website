import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowUpRight } from "@/components/ui/icons";
import {
  getAdjacentProject,
  getProjectBySlug,
  projects,
} from "@/content/projects";
import { breadcrumbSchema, pageMetadata, projectSchema } from "@/lib/seo";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

/** One static page per project in the collection. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return pageMetadata({
    title: `${project.name} — ${project.projectType} in ${project.location}`,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
    image: project.heroImage,
    keywords: [
      ...project.categories.map((category) => `${category} project Pune`),
      project.projectType,
    ],
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const next = getAdjacentProject(project.slug);

  const factRows = [
    { label: "Client", value: project.client },
    { label: "Project Type", value: project.projectType },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
    ...(project.area ? [{ label: "Area", value: project.area }] : []),
    { label: "Category", value: project.categories.join(", ") },
  ];

  return (
    <>
      <JsonLd
        schema={projectSchema({
          name: project.name,
          description: project.shortDescription,
          path: `/projects/${project.slug}`,
          image: project.heroImage,
          location: project.location,
        })}
      />
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ])}
      />

      <PageHero
        eyebrow={project.categories[0]}
        heading={project.name}
        image={project.heroImage}
        imageAlt={project.heroAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
        meta={
          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ivory/15 pt-8 sm:grid-cols-4">
            {[
              { label: "Location", value: project.location },
              { label: "Category", value: project.categories[0] },
              { label: "Year", value: project.year },
              { label: "Status", value: project.status },
            ].map((item) => (
              <div key={item.label}>
                <dt className="label text-ivory/45">{item.label}</dt>
                <dd className="mt-2.5 font-display text-lg text-ivory">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* The brief + project facts */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow className="mb-7">The Brief</Eyebrow>
              </Reveal>

              <TextReveal
                text={project.shortDescription}
                className="text-display-4 text-charcoal"
              />

              <div className="mt-9 space-y-6">
                {project.brief.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={0.08 * index}>
                    <p className="text-[1.0625rem] leading-relaxed text-charcoal/70">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>

              <div className="mt-14">
                <Reveal>
                  <Eyebrow className="mb-7">Design Concept</Eyebrow>
                </Reveal>
                <div className="space-y-6">
                  {project.designConcept.map((paragraph, index) => (
                    <Reveal key={paragraph} delay={0.08 * index}>
                      <p className="text-[1.0625rem] leading-relaxed text-charcoal/70">
                        {paragraph}
                      </p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Project details table */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="border border-charcoal/12 bg-ivory-dim p-8 md:p-10 lg:sticky lg:top-28">
                  <p className="label text-brown">Project Details</p>
                  <dl className="mt-7 divide-y divide-charcoal/10">
                    {factRows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-baseline justify-between gap-6 py-4 first:pt-0"
                      >
                        <dt className="label shrink-0 text-charcoal/45">
                          {row.label}
                        </dt>
                        <dd className="text-right text-[0.9375rem] text-charcoal">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Button
                    href={whatsappLink(whatsappMessages.project(project.name))}
                    variant="solid"
                    className="label mt-8 w-full"
                    arrow="up-right"
                  >
                    Discuss a Similar Project
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Design approach with a parallax image */}
      <section className="border-t border-charcoal/10 bg-ivory-dim py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <ParallaxImage
                  src={project.gallery[0]?.src ?? project.heroImage}
                  alt={project.gallery[0]?.alt ?? project.heroAlt}
                  className="aspect-[3/4] w-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  strength={6}
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow className="mb-7">Design Approach</Eyebrow>
              </Reveal>
              <TextReveal
                text={"How the space\nwas resolved."}
                className="text-display-3 text-charcoal"
              />

              <RevealGroup
                as="ul"
                stagger={0.09}
                className="mt-10 divide-y divide-charcoal/10 border-t border-charcoal/10"
              >
                {project.designApproach.map((point, index) => (
                  <RevealItem as="li" key={point} className="flex gap-6 py-6">
                    <span className="label shrink-0 pt-1 text-brown">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[1.0625rem] leading-relaxed text-charcoal/75">
                      {point}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Container>
      </section>

      {/* Key highlights */}
      <section className="bg-olive py-24 text-ivory md:py-32">
        <Container>
          <Reveal>
            <Eyebrow tone="light" className="mb-7">
              Key Highlights
            </Eyebrow>
          </Reveal>
          <TextReveal
            text={"What makes this\nproject work."}
            className="max-w-2xl text-display-3 text-ivory"
          />

          <RevealGroup
            as="ul"
            stagger={0.08}
            className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {project.highlights.map((highlight, index) => (
              <RevealItem
                as="li"
                key={highlight}
                className="border-t border-ivory/20 pt-6"
              >
                <span className="label text-sand/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ivory/85">
                  {highlight}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <Eyebrow className="mb-7">Gallery</Eyebrow>
              </Reveal>
              <TextReveal
                text={project.name}
                className="text-display-3 text-charcoal"
              />
            </div>
            <Reveal delay={0.15}>
              <p className="label text-charcoal/45">
                {project.location} — {project.year}
              </p>
            </Reveal>
          </div>

          <ProjectGallery images={project.gallery} />
        </Container>
      </section>

      {/* Services provided */}
      <section className="border-t border-charcoal/10 bg-ivory-dim py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow className="mb-7">Services Provided</Eyebrow>
              </Reveal>
              <TextReveal
                text={"Our scope on\nthis project."}
                className="text-display-3 text-charcoal"
              />
            </div>

            <div className="lg:col-span-8">
              <RevealGroup
                as="ul"
                stagger={0.06}
                className="grid gap-x-10 sm:grid-cols-2"
              >
                {project.servicesProvided.map((service, index) => (
                  <RevealItem
                    as="li"
                    key={service}
                    className="flex items-baseline gap-5 border-b border-charcoal/10 py-5"
                  >
                    <span className="label text-brown">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg text-charcoal">
                      {service}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal delay={0.2} className="mt-10">
                <Button href="/services" variant="outline" arrow>
                  Explore All Services
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Next project */}
      {next && (
        <section className="bg-ivory py-20 md:py-24">
          <Container>
            <Reveal>
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-6 border-t border-charcoal/12 pt-10 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <p className="label text-brown">Next Project</p>
                  <p className="mt-4 text-display-3 text-charcoal transition-colors duration-500 group-hover:text-olive">
                    {next.name}
                  </p>
                  <p className="label mt-4 text-charcoal/45">
                    {next.location} — {next.year}
                  </p>
                </div>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-colors duration-500 group-hover:bg-charcoal group-hover:text-ivory">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          </Container>
        </section>
      )}

      <FinalCta
        eyebrow="Let's Talk"
        heading={"Have a space waiting\nto be designed?"}
        description="Let's talk about your project. Share the site, the brief and your budget, and we will tell you what is possible."
        whatsappMessage={whatsappMessages.project(project.name)}
        image={project.heroImage}
        imageAlt={project.heroAlt}
      />
    </>
  );
}
