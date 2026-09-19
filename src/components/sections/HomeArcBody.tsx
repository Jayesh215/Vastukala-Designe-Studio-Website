"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { about } from "@/content/about";
import { services } from "@/content/services";
import { featuredProjects } from "@/content/projects";
import { featuredInsights } from "@/content/insights";
import { featuredTestimonials } from "@/content/testimonials";
import { homeFaqs } from "@/content/faqs";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import type { Project, Service } from "@/content/types";
import {
  ProjectInfoScreen,
  ProjectWorkCard,
} from "@/components/sections/ProjectInfoFlow";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const INK = "#2C2218";
const PAPER = "#F2EDE7";

function HomeEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] font-medium tracking-wide text-[#2C2218]/55">
      {children}
    </p>
  );
}

function HomeH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[#2C2218]">
      {children}
    </h2>
  );
}

function HomeBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[15px] leading-relaxed text-[#2C2218]/70 md:text-base ${className}`}
    >
      {children}
    </p>
  );
}

function InkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#2C2218] px-5 py-3 text-[13px] font-medium text-[#E8E0D6] transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {children}
    </Link>
  );
}

function OutlineButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2C2218]/25 px-5 py-3 text-[13px] font-medium text-[#2C2218] transition-colors hover:border-[#2C2218] hover:bg-[#2C2218]/5"
    >
      {children}
    </Link>
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
    <div className="border-b border-[#2C2218]/12">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left md:py-7"
      >
        <span className="font-display text-xl font-semibold tracking-tight text-[#2C2218] md:text-2xl">
          {service.title}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#2C2218]/20 text-lg text-[#2C2218]"
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
              <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-[20px] bg-[#2C2218]/5 md:aspect-[2/1]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1120px"
                  className="object-cover"
                />
              </div>
              <HomeBody className="max-w-2xl">{service.description}</HomeBody>
              <InkButton href="/contact" className="mt-6">
                Get In Touch <span aria-hidden="true">→</span>
              </InkButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function HomeAbout() {
  const stats = [
    { value: 10, suffix: "+", label: "Years experience" },
    { value: 120, suffix: "+", label: "Projects completed" },
    { value: 1, suffix: "", label: "Dedicated studio" },
    { value: 98, suffix: "%", label: "Client satisfaction" },
  ];

  return (
    <section className="paper-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <HomeEyebrow>About Us</HomeEyebrow>
              <HomeH2>Built on craftsmanship, clarity, and care.</HomeH2>
              <HomeBody className="mt-8 max-w-md">{about.intro[0]}</HomeBody>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-[28px] bg-[#2C2218]/5">
                <Image
                  src={about.portrait.src}
                  alt={about.portrait.alt}
                  fill
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
                  <p className="font-display text-4xl font-semibold tracking-tight text-[#2C2218] md:text-5xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-[#2C2218]/65">{stat.label}</p>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <div
                className="mt-10 rounded-[16px] p-6 shadow-[0_10px_40px_rgba(44,34,24,0.06)] md:p-7"
                style={{ backgroundColor: PAPER }}
              >
                <HomeBody className="text-[15px]">
                  {about.intro[1]} {about.intro[2]}
                </HomeBody>
                <InkButton href="/contact" className="mt-6">
                  Get In Touch <span aria-hidden="true">→</span>
                </InkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeServices() {
  const [openSlug, setOpenSlug] = useState(services[0]?.slug ?? "");

  return (
    <section style={{ backgroundColor: PAPER }}>
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="grid gap-6 pb-10 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <HomeEyebrow>Our services</HomeEyebrow>
              <HomeH2>Built on craftsmanship, clarity, and care.</HomeH2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.08}>
              <HomeBody>
                Choose the right solution for your home, property, or development
                project.
              </HomeBody>
            </Reveal>
          </div>
        </div>

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
    </section>
  );
}

function HomeProjects() {
  const list = featuredProjects.slice(0, 4);
  const [active, setActive] = useState<{
    project: Project;
    index: number;
  } | null>(null);

  return (
    <section className="paper-surface">
      <div className="mx-auto max-w-[1200px] px-5 pt-16 md:pt-24">
        <div className="grid gap-6 pb-12 md:grid-cols-12 md:items-end md:gap-10 md:pb-16">
          <div className="md:col-span-7">
            <Reveal>
              <HomeEyebrow>Recent projects</HomeEyebrow>
              <HomeH2>Craftsmanship that speaks through every project.</HomeH2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.08}>
              <HomeBody>
                Explore a selection of spaces designed with purpose, personality
                and attention to detail.
              </HomeBody>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Sticky stack — full-bleed; each slide pins, next overlaps from below.
          No transform wrappers here: they break position:sticky. */}
      <div className="relative w-full">
        {list.map((project, index) => (
          <div
            key={project.slug}
            className="sticky top-0 w-full"
            style={{ zIndex: index + 1 }}
          >
            <ProjectWorkCard
              project={project}
              index={index}
              onView={() => setActive({ project, index })}
              stacked
            />
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1200px] justify-center px-5 pt-14 pb-16 md:pt-20 md:pb-24">
        <InkButton href="/projects">
          See More <span aria-hidden="true">→</span>
        </InkButton>
      </div>

      <ProjectInfoScreen
        project={active?.project ?? null}
        index={active?.index ?? 0}
        open={!!active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}

function HomeTestimonials() {
  const reduce = useReducedMotion();
  const items = featuredTestimonials.slice(0, 4);
  const [index, setIndex] = useState(0);
  const visible = [
    items[index % items.length],
    items[(index + 1) % items.length],
    items[(index + 2) % items.length],
  ].filter(Boolean);

  return (
    <section style={{ backgroundColor: INK }} className="text-[#E8E0D6]">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[13px] font-medium tracking-wide text-[#E8E0D6]/55">
                Testimonial
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.1] tracking-tight text-[#E8E0D6]">
                Real experiences from satisfied homeowners.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.08}>
              <p className="text-[15px] leading-relaxed text-[#E8E0D6]/70 md:text-base">
                We take pride in delivering architecture and interiors that feel
                beautiful, practical, and unmistakably yours.
              </p>
              <div className="mt-6 flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() =>
                    setIndex((v) => (v - 1 + items.length) % items.length)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E0D6]/25 text-[#E8E0D6] transition-colors hover:bg-[#E8E0D6]/10"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setIndex((v) => (v + 1) % items.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E0D6]/25 text-[#E8E0D6] transition-colors hover:bg-[#E8E0D6]/10"
                >
                  →
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.article
                key={`${item.clientName}-${item.project}-${index}`}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="rounded-[20px] p-6 md:p-7"
                style={{ backgroundColor: PAPER, color: INK }}
              >
                <p className="font-display text-4xl leading-none text-[#2C2218]/25">
                  “
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#2C2218]/80">
                  {item.review}
                </p>
                <div className="mt-8 flex items-start gap-3 border-l-2 border-[#2C2218]/15 pl-3">
                  <div>
                    <p className="text-sm font-semibold text-[#2C2218]">
                      {item.clientName}
                    </p>
                    <p className="text-xs text-[#2C2218]/55">{item.project}</p>
                    {item.isSample && (
                      <p className="mt-1 text-[11px] text-[#2C2218]/40">
                        Sample content
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function HomeFaq() {
  const [open, setOpen] = useState<number | null>(null);
  const items = homeFaqs.slice(0, 5);

  return (
    <section className="paper-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <HomeEyebrow>Frequently Asked Questions</HomeEyebrow>
              <HomeH2>Answers to the most common project questions.</HomeH2>
              <HomeBody className="mt-5 max-w-md">
                Still have a question? Ask us on WhatsApp and we will reply
                personally.
              </HomeBody>
              <div className="mt-6">
                <OutlineButton href="/contact">
                  Get In Touch <span aria-hidden="true">→</span>
                </OutlineButton>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {items.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.question} delay={0.04 * i}>
                  <div
                    className="overflow-hidden rounded-[20px]"
                    style={{ backgroundColor: INK }}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    >
                      <span className="text-[15px] font-medium text-[#E8E0D6] md:text-base">
                        {faq.question}
                      </span>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8E0D6] text-sm text-[#2C2218]"
                        aria-hidden="true"
                      >
                        {isOpen ? "×" : "→"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-[#E8E0D6]/75 md:px-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

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

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const text = [
      `New enquiry from ${site.name} website`,
      `Name: ${name}`,
      email ? `Email: ${email}` : null,
      `Phone: ${phone}`,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "mt-2 w-full rounded-[14px] border-0 bg-[#E8E0D6]/70 px-4 py-3.5 text-[15px] text-[#2C2218] outline-none ring-1 ring-[#2C2218]/10 placeholder:text-[#2C2218]/40 focus:ring-[#2C2218]/30";

  return (
    <section style={{ backgroundColor: PAPER }}>
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <HomeH2>Start your project today</HomeH2>
              <HomeBody className="mt-4 max-w-md">
                Tell us about your space, timeline and budget — we will follow up
                personally on WhatsApp or email.
              </HomeBody>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <form onSubmit={onSubmit} className="space-y-4">
                <label className="block text-sm font-medium text-[#2C2218]/70">
                  Name
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-[#2C2218]/70">
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block text-sm font-medium text-[#2C2218]/70">
                  Number
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={fieldClass}
                    placeholder="+91"
                  />
                </label>
                <label className="block text-sm font-medium text-[#2C2218]/70">
                  Message
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${fieldClass} resize-y`}
                    placeholder="Tell us about your project"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center rounded-full bg-[#2C2218] px-5 py-3.5 text-[13px] font-medium text-[#E8E0D6] transition-transform hover:scale-[1.01]"
                >
                  Submit
                </button>
              </form>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                {mosaic.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className={`relative overflow-hidden rounded-[12px] bg-[#2C2218]/5 ${
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
    </section>
  );
}

function HomeBlog() {
  const items = featuredInsights.slice(0, 3);

  return (
    <section className="paper-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="grid gap-6 pb-12 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <HomeEyebrow>Latest Articles</HomeEyebrow>
              <HomeH2>
                Expert insights, renovation tips, and ideas for better living
                spaces.
              </HomeH2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.08}>
              <HomeBody>
                Practical notes on architecture, interiors, materials and the
                decisions that shape how a space works.
              </HomeBody>
            </Reveal>
          </div>
        </div>

        <RevealGroup
          stagger={0.08}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((article) => (
            <RevealItem key={article.slug} as="article">
              <Link href={`/insights/${article.slug}`} className="group block">
                <div
                  className="overflow-hidden rounded-[20px] p-3 shadow-[0_8px_30px_rgba(44,34,24,0.06)]"
                  style={{ backgroundColor: PAPER }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#2C2218]/5">
                    <Image
                      src={article.coverImage}
                      alt={article.coverAlt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-[#2C2218] md:text-xl">
                    {article.title}
                  </h3>
                  <HomeBody className="mt-2 line-clamp-2 text-[15px]">
                    {article.excerpt}
                  </HomeBody>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 flex justify-center">
          <InkButton href="/insights">
            See More <span aria-hidden="true">→</span>
          </InkButton>
        </div>
      </div>
    </section>
  );
}

/**
 * ArcGrid home body — cream / ink theme.
 * Hero + floating nav stay outside this component.
 */
export function HomeArcBody() {
  return (
    <>
      <HomeAbout />
      <HomeServices />
      <HomeProjects />
      <HomeTestimonials />
      <HomeFaq />
      <HomeContact />
      <HomeBlog />
    </>
  );
}
