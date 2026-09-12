import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

/** Counter strip — numbers animate up the first time they scroll into view. */
export function StatsStrip() {
  return (
    <section className="bg-olive text-ivory">
      <Container className="py-20 md:py-24">
        <Reveal>
          <Eyebrow tone="light" className="mb-12">
            Trusted by homeowners and businesses since {site.founded}
          </Eyebrow>
        </Reveal>

        <RevealGroup
          as="ul"
          stagger={0.12}
          className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4"
        >
          {site.stats.map((stat) => (
            <RevealItem as="li" key={stat.label}>
              <p className="font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-none text-ivory">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="label mt-4 text-sand/70">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
