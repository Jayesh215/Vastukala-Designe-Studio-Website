import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { InsightCard } from "@/components/insights/InsightCard";
import { sortedInsights } from "@/content/insights";

/** Home page journal teaser — one lead article plus a list of recent ones. */
export function InsightsSection() {
  const [lead, ...rest] = sortedInsights.slice(0, 4);

  return (
    <section className="border-t border-charcoal/10 bg-ivory-dim py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Insights"
          heading={"Ideas for better spaces."}
          description="Practical notes on architecture, interiors, materials and the decisions that shape how a space works."
          layout="split"
          action={
            <Button href="/insights" variant="outline" arrow>
              Read All Insights
            </Button>
          }
        />

        <div className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-16">
          {lead && (
            <Reveal className="lg:col-span-7">
              <InsightCard insight={lead} variant="feature" />
            </Reveal>
          )}

          <RevealGroup
            stagger={0.1}
            className="divide-y divide-charcoal/10 border-t border-charcoal/10 lg:col-span-5"
          >
            {rest.map((insight) => (
              <RevealItem key={insight.slug}>
                <InsightCard insight={insight} variant="compact" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
