import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import { featuredServices } from "@/content/services";
import type { Service } from "@/content/types";

/** Service card — image zooms gently on hover, deliverables listed beneath. */
function ServiceCard({ service }: { service: Service }) {
  return (
    <RevealItem as="article" className="group">
      <Link href={`/services#${service.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
            className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <span className="label absolute top-5 left-5 text-ivory/90 mix-blend-difference">
            {service.number}
          </span>
        </div>

        <div className="pt-7">
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-display-4 text-charcoal">{service.title}</h3>
            <ArrowUpRight className="mt-2 h-4 w-4 shrink-0 text-brown transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>

          <p className="mt-3 font-display text-lg text-brown">
            {service.headline}
          </p>

          <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-charcoal/65">
            {service.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
            {service.deliverables.slice(0, 6).map((item) => (
              <li
                key={item}
                className="rounded-full border border-charcoal/12 px-3.5 py-1.5 text-[0.6875rem] tracking-[0.06em] text-charcoal/55 uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </RevealItem>
  );
}

export function ServicesSection() {
  return (
    <section className="border-t border-charcoal/10 bg-ivory-dim py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          heading={"From first idea\nto final detail."}
          description="Our approach connects architecture, interiors and visual design into one seamless process — giving you clarity from concept to completion."
          layout="split"
          action={
            <Button href="/services" variant="outline" arrow>
              View All Services
            </Button>
          }
        />

        <RevealGroup
          stagger={0.14}
          className="mt-16 grid gap-x-10 gap-y-16 md:mt-20 lg:grid-cols-2"
        >
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
