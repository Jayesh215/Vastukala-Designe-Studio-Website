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
  const background = tone === "dark" ? "bg-ivory" : "bg-charcoal";

  return (
    <section
      className={`border-t ${
        tone === "dark" ? "border-charcoal/10" : "border-transparent"
      } ${background} py-24 md:py-32 ${className}`}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={eyebrow} heading={heading} tone={tone} />
            <Reveal delay={0.2}>
              <p
                className={`mt-7 max-w-sm text-[0.9375rem] leading-relaxed ${
                  tone === "dark" ? "text-charcoal/60" : "text-ivory/60"
                }`}
              >
                Still have a question?{" "}
                <TextLink
                  href={whatsappLink(
                    "Hi Vastukala Design Studio, I have a question about your services.",
                  )}
                  className={tone === "dark" ? "text-olive" : "text-sand"}
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
