import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { JsonLd } from "@/components/seo/JsonLd";
import { about } from "@/content/about";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About | Architecture & Interior Design Studio in Pune",
  description:
    "Vastukala Design Studio is an architecture and interior design studio in Pune creating thoughtful, functional and visually refined spaces. Learn about our philosophy, values and approach.",
  path: "/about",
  keywords: [
    "about architecture studio Pune",
    "interior design firm Pune",
    "design philosophy",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About the Studio"
        heading={"We design spaces with a reason\nbehind every detail."}
        description={about.intro[0]}
        image={images.facadeWhite}
        imageAlt="Minimal white architectural facade with deep shadow and clean geometry"
      />

      {/* Intro */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <ParallaxImage
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  className="aspect-[3/4] w-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  strength={6}
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:pt-6">
              <Reveal>
                <Eyebrow className="mb-7">Who We Are</Eyebrow>
              </Reveal>
              <TextReveal
                text={"Good design should not only\nlook beautiful — it should\nwork beautifully."}
                className="text-display-3 text-charcoal"
              />
              <div className="mt-9 space-y-6">
                {about.intro.slice(1).map((paragraph, index) => (
                  <Reveal key={paragraph} delay={0.08 * index}>
                    <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-charcoal/70">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3} className="mt-11">
                <Button href="/projects" variant="outline" size="lg" arrow>
                  See Our Work
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <StatsStrip />

      {/* Philosophy */}
      <section className="bg-ivory-dim py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow={about.philosophy.eyebrow}
                heading={about.philosophy.heading}
              />
              <div className="mt-9 space-y-6">
                {about.philosophy.body.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={0.08 * index}>
                    <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-charcoal/70">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
                  <Image
                    src={about.philosophy.image.src}
                    alt={about.philosophy.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* How we think */}
      <section className="border-t border-charcoal/10 bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow={about.howWeThink.eyebrow}
            heading={about.howWeThink.heading}
            description="Four principles that shape how we approach every brief, whatever its size."
            layout="split"
          />

          <RevealGroup
            as="ul"
            stagger={0.1}
            className="mt-16 grid gap-x-12 gap-y-12 md:mt-20 md:grid-cols-2"
          >
            {about.howWeThink.points.map((point, index) => (
              <RevealItem
                as="li"
                key={point.title}
                className="border-t border-charcoal/12 pt-7"
              >
                <span className="label text-brown">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-display-4 text-charcoal">
                  {point.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-charcoal/65">
                  {point.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <Container>
          <SectionHeading
            eyebrow="What We Value"
            heading={"Five things we do not\ncompromise on."}
            tone="light"
            description="Every project, every budget, every scale."
            layout="split"
          />

          <RevealGroup
            as="ul"
            stagger={0.09}
            className="mt-16 grid gap-x-10 gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3"
          >
            {about.values.map((value) => (
              <RevealItem
                as="li"
                key={value.title}
                className="border-t border-ivory/18 pt-7"
              >
                <span className="label text-sand/60">{value.number}</span>
                <h3 className="mt-5 text-display-4 text-ivory">
                  {value.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ivory/60">
                  {value.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Why clients choose us */}
      <section className="bg-ivory py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow={about.whyChooseUs.eyebrow}
            heading={about.whyChooseUs.heading}
            layout="split"
            description={`Based in ${site.contact.city}, working across ${site.contact.state} and beyond.`}
          />

          <RevealGroup
            as="ul"
            stagger={0.08}
            className="mt-16 grid gap-x-10 gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3"
          >
            {about.whyChooseUs.reasons.map((reason, index) => (
              <RevealItem
                as="li"
                key={reason.title}
                className="border border-charcoal/12 bg-ivory-dim p-8"
              >
                <span className="label text-brown">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug text-charcoal">
                  {reason.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-charcoal/65">
                  {reason.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <TestimonialsSection />

      <FinalCta />
    </>
  );
}
