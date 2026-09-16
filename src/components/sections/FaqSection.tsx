import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/whatsapp";
import type { FaqItem } from "@/content/types";

interface FaqSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
  tone?: "dark" | "light";
  className?: string;
}

export function FaqSection({
  items,
  eyebrow = "FAQ",
  heading = "Common questions",
  tone = "dark",
  className = "",
}: FaqSectionProps) {
  const background = tone === "dark" ? "bg-canvas" : "bg-ink";

  return (
    <section
      className={`border-t ${
        tone === "dark" ? "border-line" : "border-transparent"
      } ${background} py-20 md:py-28 ${className}`}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow={eyebrow}
              heading={heading}
              tone={tone}
              layout="stacked"
            />
            <Reveal delay={0.15}>
              <p
                className={`mt-6 max-w-sm text-[0.9375rem] leading-relaxed ${
                  tone === "dark" ? "text-muted" : "text-canvas/65"
                }`}
              >
                Still have a question?{" "}
                <TextLink
                  href={whatsappLink(
                    "Hi Vastukala Design Studio, I have a question about your services.",
                  )}
                  className={tone === "dark" ? "text-ink" : "text-canvas"}
                >
                  Ask us on WhatsApp
                </TextLink>{" "}
                and we will reply personally.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Accordion items={items} tone={tone} />
          </div>
        </div>
      </Container>
    </section>
  );
}
