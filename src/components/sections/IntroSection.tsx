import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { images } from "@/content/images";

const paragraphs = [
  "At Vastukala Design Studio, we believe great design is more than what meets the eye. It is about understanding how a space should feel, function and evolve with the people who use it.",
  "From architectural planning to detailed interiors, we bring creativity, practicality and attention to detail together to create spaces that are distinctly yours.",
  "Every project begins with listening — understanding your lifestyle, aspirations, requirements and budget — and translating them into a thoughtful design journey.",
];

export function IntroSection() {
  return (
    <section id="studio" className="scroll-mt-24 bg-ivory py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage
                src={images.staircase}
                alt="Sculptural timber staircase lit from a skylight above"
                className="aspect-[3/4] w-full"
                sizes="(max-width: 1024px) 100vw, 40vw"
                strength={6}
              />
            </Reveal>

            <Reveal delay={0.15} className="mt-6 hidden lg:block">
              <p className="max-w-xs text-sm leading-relaxed text-charcoal/50">
                Vastukala — the science of architecture. We treat it as a
                discipline with logic behind it, not decoration applied
                afterwards.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-6">
            <Reveal>
              <Eyebrow className="mb-7">The Studio</Eyebrow>
            </Reveal>

            <TextReveal
              text={"Design with purpose.\nSpaces with personality."}
              className="text-display-3 text-charcoal"
            />

            <div className="mt-9 space-y-6">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.1 + index * 0.08}>
                  <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-charcoal/70">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35} className="mt-11">
              <Button href="/about" variant="outline" size="lg" arrow>
                Discover Vastukala
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
