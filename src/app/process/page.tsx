import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppIcon } from "@/components/ui/icons";
import { processSteps } from "@/content/process";
import { getFaqsByTopic } from "@/content/faqs";
import { images } from "@/content/images";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = pageMetadata({
  title: "Our Process | How We Design Your Space, Step by Step",
  description:
    "From the first conversation to handover — the six stages of designing architecture and interiors with Vastukala Design Studio in Pune, and what you approve at each one.",
  path: "/process",
  keywords: [
    "interior design process",
    "architecture design process India",
    "how architects work",
  ],
});

const expectations = [
  {
    title: "What we need from you",
    points: [
      "A clear sense of your requirements and how you use space",
      "An honest budget range, even an approximate one",
      "Timely decisions at each approval stage",
      "Site access, existing drawings and society permissions where relevant",
    ],
  },
  {
    title: "What you get from us",
    points: [
      "A written scope, fee and stage schedule before work begins",
      "Drawings and 3D views you can actually understand",
      "Honest advice on where to spend and where not to",
      "One point of contact from first sketch to handover",
    ],
  },
];

export default function ProcessPage() {
  const processFaqs = getFaqsByTopic("process");

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
      <JsonLd schema={faqSchema(processFaqs)} />

      <PageHero
        eyebrow="Our Process"
        heading={"From idea to space."}
        description="Six clear stages, so you always know what is happening, what you are approving and what comes next."
        image={images.drawings}
        imageAlt="Architectural drawings and technical plans laid out on a studio table"
        action={
          <Button
            href={whatsappLink()}
            variant="light"
            size="lg"
            className="label"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Start at Stage One
          </Button>
        }
      />

      <section className="bg-canvas py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="The Stages"
            heading={"A process built to\nremove surprises."}
            description="Each stage ends with something concrete for you to review and approve, so nothing moves forward on assumption."
            layout="split"
            className="mb-16 md:mb-24"
          />
        </Container>

        <ProcessTimeline steps={processSteps} detailed />
      </section>

      {/* Expectations */}
      <section className="border-t border-line bg-canvas py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Working Together"
            heading={"Clear on both sides."}
            description="A good project depends as much on how decisions are made as on the design itself."
            layout="centered"
          />

          <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-16">
            {expectations.map((column) => (
              <div key={column.title}>
                <h3 className="text-display-4 font-semibold text-ink">
                  {column.title}
                </h3>
                <RevealGroup
                  as="ul"
                  stagger={0.08}
                  className="mt-7 border-t border-line"
                >
                  {column.points.map((point) => (
                    <RevealItem
                      as="li"
                      key={point}
                      className="flex items-baseline gap-4 border-b border-line py-4 text-[0.9375rem] leading-relaxed text-muted"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50"
                        aria-hidden="true"
                      />
                      {point}
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection
        items={processFaqs}
        eyebrow="Process FAQ"
        heading="Questions about timelines and fees"
      />

      <FinalCta
        eyebrow="Stage One"
        heading={"Let's start with\na conversation."}
        description="Tell us about your project, requirements, vision and expectations. There is no cost to the first conversation."
      />
    </>
  );
}
