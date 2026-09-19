"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Marquee } from "@/components/motion/Marquee";
import { ArrowUpRight } from "@/components/ui/icons";
import { services } from "@/content/services";
import type { Service } from "@/content/types";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

const EASE: [number, number, number, number] = [0.12, 0.23, 0.5, 1];

/** Interactive service index with live image preview. */
export function ServicesIndex() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0];

  return (
    <section className="border-b border-line bg-canvas-dim py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label text-muted">All Services</p>
              <h2 className="mt-4 font-display text-display-4 font-semibold text-ink">
                Pick a discipline.
                <span className="mt-1 block text-muted">Jump straight in.</span>
              </h2>
            </Reveal>

            <RevealGroup
              as="ul"
              stagger={0.04}
              className="mt-10 flex flex-col"
            >
              {services.map((service, index) => {
                const isActive = index === active;
                return (
                  <RevealItem as="li" key={service.slug}>
                    <a
                      href={`#${service.slug}`}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className={`group flex items-center gap-4 border-b border-line py-4 transition-colors duration-500 ${
                        isActive ? "border-ink/30" : "hover:border-ink/20"
                      }`}
                    >
                      <span
                        className={`label w-8 shrink-0 transition-colors duration-500 ${
                          isActive ? "text-accent" : "text-muted"
                        }`}
                      >
                        {service.number}
                      </span>
                      <span
                        className={`flex-1 text-[0.9375rem] transition-colors duration-500 md:text-base ${
                          isActive
                            ? "font-medium text-ink"
                            : "text-ink/65 group-hover:text-ink"
                        }`}
                      >
                        {service.title}
                      </span>
                      <motion.span
                        aria-hidden="true"
                        className="text-ink/40"
                        animate={
                          reduce
                            ? undefined
                            : { x: isActive ? 0 : -4, opacity: isActive ? 1 : 0 }
                        }
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </motion.span>
                    </a>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>

          <div className="relative hidden lg:col-span-7 lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[14px] bg-surface-dim shadow-[0_32px_80px_-40px_rgba(44,34,24,0.45)]">
              <div className="relative aspect-[5/4]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.slug}
                    className="absolute inset-0"
                    initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <Image
                      src={current.image}
                      alt={current.imageAlt}
                      fill
                      sizes="(max-width: 1280px) 55vw, 640px"
                      className="object-cover"
                      priority={active === 0}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#2c2218]/70 via-[#2c2218]/10 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                      <p className="label text-[#F2EDE7]/70">{current.number}</p>
                      <p className="mt-2 font-display text-2xl font-semibold text-[#F2EDE7]">
                        {current.title}
                      </p>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-[#F2EDE7]/75">
                        {current.headline}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const reduce = useReducedMotion();

  return (
    <article
      id={service.slug}
      className={`scroll-mt-28 border-b border-line py-20 md:py-28 ${
        isEven ? "bg-canvas" : "bg-canvas-dim"
      }`}
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className={`relative lg:col-span-6 ${isEven ? "" : "lg:order-2"}`}
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%", amount: 0.25 }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <div className="group relative overflow-hidden rounded-[14px] bg-surface-dim shadow-[0_28px_70px_-36px_rgba(44,34,24,0.4)]">
              <ParallaxImage
                src={service.image}
                alt={service.imageAlt}
                className="aspect-[4/3] w-full"
                strength={10}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index < 2}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/5"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute top-5 left-5 font-display text-5xl font-semibold text-[#F2EDE7]/35 md:text-6xl"
                aria-hidden="true"
              >
                {service.number}
              </span>
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <Reveal>
              <p className="label text-accent">
                {service.number} — {service.title}
              </p>
            </Reveal>

            <TextReveal
              as="h2"
              text={service.headline}
              className="mt-5 text-display-3 text-ink"
            />

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink/70">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="label mt-10 text-muted">What this includes</p>
            </Reveal>

            <RevealGroup
              as="ul"
              stagger={0.04}
              className="mt-5 flex flex-wrap gap-2.5"
            >
              {service.deliverables.map((item) => (
                <RevealItem as="li" key={item}>
                  <span className="inline-flex rounded-[8px] border border-line bg-canvas/80 px-3.5 py-2 text-[0.8125rem] text-ink/75 transition-colors duration-400 hover:border-ink/25 hover:text-ink">
                    {item}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.22} className="mt-9">
              <Button
                href={whatsappLink(whatsappMessages.service(service.title))}
                variant="outline"
                arrow="up-right"
              >
                Enquire About {service.title}
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </article>
  );
}

export function ServicesDetailList() {
  return (
    <section className="bg-canvas">
      {services.map((service, index) => (
        <ServiceBlock key={service.slug} service={service} index={index} />
      ))}
    </section>
  );
}

const ENGAGEMENT = [
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
];

export function EngagementModels() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-line bg-canvas py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How We Work Together"
          heading={"Three ways to\nengage the studio."}
          description="Pick the level of involvement that suits your project, your contractor and your time."
          layout="centered"
        />

        <RevealGroup
          as="ul"
          stagger={0.1}
          className="mt-14 grid gap-5 md:mt-16 lg:grid-cols-3"
        >
          {ENGAGEMENT.map((model, index) => (
            <RevealItem as="li" key={model.number}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-[14px] border border-line bg-canvas-dim/60 p-7 md:p-8"
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <motion.span
                  className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + index * 0.08,
                    ease: EASE,
                  }}
                  aria-hidden="true"
                />
                <span className="label text-muted transition-colors duration-400 group-hover:text-accent">
                  {model.number}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink md:text-2xl">
                  {model.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                  {model.description}
                </p>
                <p className="mt-6 border-t border-line pt-5 text-[0.8125rem] leading-relaxed text-ink/55">
                  {model.suits}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

/** Soft services marquee under the page hero. */
export function ServicesMarquee() {
  return (
    <div className="border-b border-line bg-canvas py-4 md:py-5">
      <Marquee duration={40} gap="2rem">
        {services.map((service) => (
          <span
            key={service.slug}
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <span className="label text-accent/80">{service.number}</span>
            <span className="font-display text-sm font-medium tracking-tight text-ink/70 md:text-[0.9375rem]">
              {service.title}
            </span>
            <span className="text-line" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
