import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

/** Counter strip — numbers animate up the first time they scroll into view. */
export function StatsStrip() {
  return (
    <section className="border-y border-line bg-canvas">
      <Container className="py-16 md:py-20">
        <Reveal>
          <Eyebrow className="mb-4 justify-center text-center">
            Trusted by homeowners and businesses since {site.founded}
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto max-w-2xl text-center text-display-3 font-semibold text-ink">
            A track record homeowners trust
          </h2>
        </Reveal>

        <RevealGroup
          as="ul"
          stagger={0.08}
          className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-12 lg:grid-cols-4"
        >
          {site.stats.map((stat) => (
            <RevealItem as="li" key={stat.label} className="text-center">
              <p className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-none text-ink">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[0.875rem] text-muted">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
