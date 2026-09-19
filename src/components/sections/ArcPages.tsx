"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { about } from "@/content/about";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { insights } from "@/content/insights";
import { processSteps } from "@/content/process";
import { images } from "@/content/images";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import type { Service } from "@/content/types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ArcPageHero({
  eyebrow,
  heading,
  description,
  align = "split",
}: {
  eyebrow: string;
  heading: string;
  description: string;
  align?: "split" | "center";
}) {
  if (align === "center") {
    return (
      <div className="mx-auto max-w-3xl pt-28 pb-12 text-center md:pt-36 md:pb-16">
        <p className="arc-eyebrow">{eyebrow}</p>
        <h1 className="arc-h1 mt-4 text-black">{heading}</h1>
        <p className="arc-body mx-auto mt-5 max-w-xl">{description}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 pt-28 pb-12 md:grid-cols-12 md:items-start md:gap-10 md:pt-36 md:pb-16">
      <div className="md:col-span-7">
        <p className="arc-eyebrow">{eyebrow}</p>
        <h1 className="arc-h1 mt-4 text-black">{heading}</h1>
      </div>
      <p className="arc-body md:col-span-5 md:pt-10">{description}</p>
    </div>
  );
}

/** About — Framer ArcGrid About section layout. */
export function ArcAboutPage() {
  const stats = [
    { value: 10, suffix: "+", label: "Years experience" },
    { value: 120, suffix: "+", label: "Projects completed" },
    { value: 1, suffix: "", label: "Dedicated studio" },
    { value: 98, suffix: "%", label: "Client satisfaction" },
  ];

  return (
    <main id="main" className="bg-[var(--arc-bg)] pb-20">
      <div className="arc-container">
        <div className="grid items-start gap-10 pt-28 pb-16 md:pt-36 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="arc-eyebrow">About Us</p>
              <h1 className="arc-h1 mt-4 text-black">
                Built on craftsmanship, clarity, and care.
              </h1>
              <p className="arc-body mt-8 max-w-md">{about.intro[0]}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--arc-radius)] bg-black/5">
                <Image
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <RevealGroup
              stagger={0.06}
              className="grid grid-cols-2 gap-x-6 gap-y-8"
            >
              {stats.map((stat) => (
                <RevealItem key={stat.label}>
                  <p className="font-[family-name:var(--font-manrope)] text-4xl font-bold tracking-tight text-black md:text-5xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-[var(--arc-body)]">
                    {stat.label}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-[var(--arc-radius-sm)] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] md:p-7">
                <p className="arc-body text-[15px]">
                  {about.intro[1]} {about.intro[2]}
                </p>
                <Link
                  href="/contact"
                  className="arc-btn arc-btn-primary mt-6"
                >
                  Get In Touch <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        <section className="border-t border-[var(--arc-line)] py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="arc-eyebrow">{about.philosophy.eyebrow}</p>
                <h2 className="arc-h2 mt-4 text-black">
                  {about.philosophy.heading}
                </h2>
              </Reveal>
            </div>
            <div className="space-y-5 lg:col-span-7">
              {about.philosophy.body.map((p, i) => (
                <Reveal key={p} delay={0.05 * i}>
                  <p className="arc-body max-w-2xl">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ServiceAccordionItem({
  service,
  open,
  onToggle,
}: {
  service: Service;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="border-b border-[var(--arc-line)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left md:py-7"
      >
        <span className="font-[family-name:var(--font-manrope)] text-xl font-bold tracking-tight text-black md:text-2xl">
          {service.title}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 text-lg"
          aria-hidden="true"
        >
          {open ? "×" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pb-10">
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-[var(--arc-radius-sm)] bg-black/5 md:aspect-[2/1]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1120px"
                  className="object-cover"
                />
              </div>
              <p className="arc-body max-w-2xl">{service.description}</p>
              <Link href="/contact" className="arc-btn arc-btn-primary mt-6">
                Get In Touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Services — Framer ArcGrid accordion pattern. */
export function ArcServicesPage() {
  const [openSlug, setOpenSlug] = useState(services[0]?.slug ?? "");

  return (
    <main id="main" className="bg-[var(--arc-bg)] pb-20">
      <div className="arc-container">
        <ArcPageHero
          eyebrow="Our services"
          heading="Built on craftsmanship, clarity, and care."
          description="Choose the right solution for your home, property, or development project."
        />

        <div className="pb-10">
          {services.map((service) => (
            <ServiceAccordionItem
              key={service.slug}
              service={service}
              open={openSlug === service.slug}
              onToggle={() =>
                setOpenSlug((current) =>
                  current === service.slug ? "" : service.slug,
                )
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}

/** Projects — Framer list + optional grid. */
export function ArcProjectsPage() {
  const list = projects.slice(0, 8);

  return (
    <main id="main" className="bg-[var(--arc-bg)] pb-20">
      <div className="arc-container">
        <ArcPageHero
          eyebrow="Recent projects"
          heading="Craftsmanship that speaks through every project."
          description="A selection of residential and commercial spaces designed by Vastukala — from concept through detailing."
        />

        <div className="space-y-14 md:space-y-20">
          {list.map((project, index) => (
            <Reveal key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid items-start gap-6 md:grid-cols-12 md:gap-10"
              >
                <div className="flex flex-col md:col-span-4 md:min-h-[280px]">
                  <p className="font-[family-name:var(--font-manrope)] text-2xl font-bold text-black">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-2xl font-bold tracking-tight text-black md:text-3xl">
                    {project.name}
                  </h2>
                  <p className="arc-body mt-4 line-clamp-3">
                    {project.shortDescription}
                  </p>
                  <p className="mt-auto pt-6 text-sm text-[var(--arc-muted)]">
                    {project.year}
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--arc-radius)] bg-black/5 md:col-span-8 md:aspect-[16/10]">
                  <Image
                    src={project.heroImage}
                    alt={project.heroAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black shadow-sm">
                    {project.categories[0]}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center md:mt-20">
          <Link href="/contact" className="arc-btn arc-btn-primary">
            See More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

/** Process — ArcGrid-styled vertical stages (no Framer process page; same system). */
export function ArcProcessPage() {
  return (
    <main id="main" className="bg-[var(--arc-bg)] pb-20">
      <div className="arc-container">
        <ArcPageHero
          eyebrow="Our process"
          heading="From idea to space — clearly."
          description="Six clear stages so you always know what is happening, what you are approving, and what comes next."
        />

        <ol className="space-y-0 border-t border-[var(--arc-line)]">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} as="li">
              <div className="grid gap-4 border-b border-[var(--arc-line)] py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <p className="font-[family-name:var(--font-manrope)] text-sm font-bold text-[var(--arc-muted)] md:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold tracking-tight text-black md:col-span-4 md:text-2xl">
                  {step.title}
                </h2>
                <p className="arc-body md:col-span-6">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <Link href="/contact" className="arc-btn arc-btn-primary">
            Start Your Project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

/** Insights — Framer blog card grid. */
export function ArcInsightsPage() {
  const items = insights.slice(0, 6);

  return (
    <main id="main" className="bg-[var(--arc-bg)] pb-20">
      <div className="arc-container">
        <ArcPageHero
          eyebrow="Latest Articles"
          heading="Expert insights, renovation tips, and ideas for better living spaces."
          description="Practical notes on architecture, interiors, materials and the decisions that shape how a space works."
        />

        <RevealGroup
          stagger={0.08}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((article) => (
            <RevealItem key={article.slug} as="article">
              <Link href={`/insights/${article.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--arc-radius)] bg-black/5">
                  <Image
                    src={article.coverImage}
                    alt={article.coverAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="mt-5 font-[family-name:var(--font-manrope)] text-lg font-bold tracking-tight text-black md:text-xl">
                  {article.title}
                </h2>
                <p className="arc-body mt-2 line-clamp-2 text-[15px]">
                  {article.excerpt}
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 flex justify-center">
          <Link href="/contact" className="arc-btn arc-btn-primary">
            See More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

/** Contact — Framer form + mosaic. */
export function ArcContactPage() {
  const mosaic = [
    images.livingWarm,
    images.facadeWhite,
    images.kitchenWood,
    images.drawings,
    images.staircase,
    images.livingTall,
    images.bathroomStone,
    images.minimalRoom,
    images.armchairDetail,
  ];

  return (
    <main id="main" className="bg-white pb-20">
      <div className="arc-container pt-28 md:pt-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <h1 className="arc-h1 text-black">Start your project today</h1>
              <p className="arc-body mt-4 max-w-md">
                Tell us about your space, timeline and budget — we will follow up
                personally on WhatsApp or email.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <EnquiryForm />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                {mosaic.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className={`relative overflow-hidden bg-black/5 ${
                      i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}



