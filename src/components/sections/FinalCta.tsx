import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { WhatsAppIcon } from "@/components/ui/icons";
import { images } from "@/content/images";
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

/** Closing call to action, used at the foot of most pages. */
export function FinalCta({
  eyebrow = "Start Here",
  heading = "Your space has a story.\nLet's design it.",
  description = "Tell us what you're imagining. We'll help you turn the idea into a thoughtful, beautiful and functional space.",
  whatsappMessage,
  image = images.livingTall,
  imageAlt = "Sunlit contemporary living space with tall windows",
}: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 text-ivory md:py-36">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="light" className="mb-7">
              {eyebrow}
            </Eyebrow>
          </Reveal>

          <TextReveal text={heading} className="text-display-2 text-ivory" />

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lead text-ivory/70">
              {description}
            </p>
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button
              href={whatsappLink(whatsappMessage)}
              variant="light"
              size="lg"
              className="label"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Start Your Project
            </Button>
            <Button
              href="/contact"
              variant="outlineLight"
              size="lg"
              className="label"
              arrow
            >
              Get in Touch
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
