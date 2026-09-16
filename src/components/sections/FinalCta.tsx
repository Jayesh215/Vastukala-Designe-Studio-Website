import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { whatsappLink } from "@/lib/whatsapp";

interface FinalCtaProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  /** Overrides the default WhatsApp message, e.g. from a project page. */
  whatsappMessage?: string;
  image?: string;
  imageAlt?: string;
}

/** Closing call to action — dark Monteire band, used at the foot of most pages. */
export function FinalCta({
  eyebrow = "Start Here",
  heading = "Your space has a story.\nLet's design it.",
  description = "Tell us what you're imagining. We'll help you turn the idea into a thoughtful, beautiful and functional space.",
  whatsappMessage,
}: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-canvas md:py-28">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-canvas/5 blur-3xl animate-soft-float"
        aria-hidden="true"
      />

      <Container>
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="label mb-5 text-canvas/55">{eyebrow}</p>
          </Reveal>

          <TextReveal
            text={heading}
            className="text-display-2 font-semibold text-canvas"
          />

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-lg text-lead text-canvas/65">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <Button
              href={whatsappLink(whatsappMessage)}
              variant="light"
              size="lg"
              className="hover:scale-[1.03]"
            >
              Start Your Project
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
