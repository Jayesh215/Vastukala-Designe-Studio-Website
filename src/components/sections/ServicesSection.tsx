import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { featuredServices } from "@/content/services";
import type { Service } from "@/content/types";

/** Clean Monteire-style text service card. */
function ServiceCard({ service }: { service: Service }) {
  return (
    <RevealItem as="article" className="group border-t border-line pt-8">
      <Link
        href={`/services#${service.slug}`}
        className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
      >
        <p className="label text-muted transition-colors duration-300 group-hover:text-ink">
          {service.number}
        </p>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink md:text-2xl">
          {service.title}
        </h3>
        <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted">
          {service.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-ink opacity-0 transition-all duration-400 group-hover:translate-x-0.5 group-hover:opacity-100">
          Explore
          <span aria-hidden="true">→</span>
        </span>
      </Link>
    </RevealItem>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-canvas py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          heading={"From first idea\nto final detail."}
          description="Our approach connects architecture, interiors and visual design into one seamless process — giving you clarity from concept to completion."
          layout="centered"
          action={
            <Button href="/services" variant="outline" arrow>
              View All Services
            </Button>
          }
        />

        <RevealGroup
          stagger={0.1}
          className="mt-14 grid gap-x-12 gap-y-4 md:mt-16 md:grid-cols-2"
        >
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
