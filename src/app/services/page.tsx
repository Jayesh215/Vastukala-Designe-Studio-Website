import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppIcon } from "@/components/ui/icons";
import { services } from "@/content/services";
import { getFaqsByTopic } from "@/content/faqs";
import { images } from "@/content/images";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Services | Architecture, Interiors & 3D Visualization in Pune",
  description:
    "Architectural design, interior design, space planning, 3D visualization, lighting planning, material selection and turnkey project management by Vastukala Design Studio, Pune.",
  path: "/services",
  keywords: [
    "architectural design services Pune",
    "interior design services Pune",
    "3D visualization Pune",
    "space planning Pune",
    "turnkey interiors Pune",
  ],
});

export default function ServicesPage() {
  const serviceFaqs = getFaqsByTopic("services");

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd schema={faqSchema(serviceFaqs)} />

      <PageHero
        eyebrow="What We Do"
        heading={"From first idea\nto final detail."}
        description="Our approach connects architecture, interiors and visual design into one seamless process — giving you clarity from concept to completion."
        image={images.livingTall}
        imageAlt="Double-height living space with tall windows and a restrained material palette"
        action={
          <Button
            href={whatsappLink(whatsappMessages.consultation)}
            variant="light"
            size="lg"
            className="label"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Book Consultation
          </Button>
        }
      />

      {/* Service index */}
      <section className="border-b border-charcoal/10 bg-ivory py-14">
        <Container>
          <RevealGroup
            as="ul"
            stagger={0.05}
            className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <RevealItem as="li" key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="group flex items-baseline gap-4 border-b border-charcoal/10 py-3 transition-colors duration-500 hover:border-charcoal/30"
                >
                  <span className="label text-brown">{service.number}</span>
                  <span className="text-[0.9375rem] text-charcoal/70 transition-colors duration-500 group-hover:text-charcoal">
                    {service.title}
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Full service detail */}
      <section className="bg-ivory">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 border-b border-charcoal/10 py-20 md:py-28 ${
                isEven ? "bg-ivory" : "bg-ivory-dim"
              }`}
            >
              <Container>
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "" : "lg:order-2"
                    }`}
                  >
                    <Reveal>
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </Reveal>
                  </div>

                  <div className="lg:col-span-6">
                    <Reveal>
                      <Eyebrow className="mb-6">
                        {`${service.number} — ${service.title}`}
                      </Eyebrow>
                    </Reveal>

                    <TextReveal
                      as="h2"
                      text={service.headline}
                      className="text-display-3 text-charcoal"
                    />

                    <Reveal delay={0.15}>
                      <p className="mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-charcoal/70">
                        {service.description}
                      </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                      <p className="label mt-10 text-charcoal/45">
                        What this includes
                      </p>
                    </Reveal>

                    <RevealGroup
                      as="ul"
                      stagger={0.05}
                      className="mt-5 grid gap-x-8 sm:grid-cols-2"
                    >
                      {service.deliverables.map((item) => (
                        <RevealItem
                          as="li"
                          key={item}
                          className="flex items-baseline gap-3 border-b border-charcoal/10 py-3 text-[0.9375rem] text-charcoal/75"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brown"
                            aria-hidden="true"
                          />
                          {item}
                        </RevealItem>
                      ))}
                    </RevealGroup>

                    <Reveal delay={0.25} className="mt-9">
                      <Button
                        href={whatsappLink(
                          whatsappMessages.service(service.title),
                        )}
                        variant="outline"
                        arrow="up-right"
                      >
                        Enquire About {service.title}
                      </Button>
                    </Reveal>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </section>

      {/* Engagement models */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <Container>
          <SectionHeading
            eyebrow="How We Work Together"
            heading={"Three ways to\nengage the studio."}
            tone="light"
            description="Pick the level of involvement that suits your project, your contractor and your time."
            layout="split"
          />

          <RevealGroup
            as="ul"
            stagger={0.1}
            className="mt-16 grid gap-x-10 gap-y-10 md:mt-20 lg:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "Design Only",
                description:
                  "Complete design and drawings — concept, detailed drawings, 3D views and specifications. You execute with your own contractor.",
                suits: "Clients with a trusted contractor already in place.",
              },
              {
                number: "02",
                title: "Design + Site Review",
                description:
                  "Everything in Design Only, plus periodic site visits, contractor coordination and quality reviews through execution.",
                suits: "The most common choice for residential projects.",
              },
              {
                number: "03",
                title: "Turnkey",
                description:
                  "We manage the full build — vendors, scheduling, procurement, supervision and handover — with a single point of accountability.",
                suits: "Clients who want minimal day-to-day involvement.",
              },
            ].map((model) => (
              <RevealItem
                as="li"
                key={model.number}
                className="border-t border-ivory/18 pt-7"
              >
                <span className="label text-sand/60">{model.number}</span>
                <h3 className="mt-5 text-display-4 text-ivory">
                  {model.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ivory/60">
                  {model.description}
                </p>
                <p className="mt-5 text-[0.8125rem] text-sand/70">
                  {model.suits}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <ProcessSection />

      <FaqSection
        items={serviceFaqs}
        eyebrow="Service FAQ"
        heading="Questions about scope"
      />

      <FinalCta
        eyebrow="Start Here"
        heading={"Not sure which service\nyou need?"}
        description="Tell us about the space and we will recommend the right scope — and tell you if you need less than you think."
      />
    </>
  );
}
