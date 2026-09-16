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
    <section id="studio" className="scroll-mt-24 bg-canvas py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <ParallaxImage
                src={images.staircase}
                alt="Sculptural timber staircase lit from a skylight above"
                className="aspect-[4/5] w-full overflow-hidden rounded-[10px]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                strength={7}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <Reveal>
              <Eyebrow className="mb-5">The Studio</Eyebrow>
            </Reveal>

            <TextReveal
              text={"Design with purpose.\nSpaces with personality."}
              className="text-display-3 font-semibold text-ink"
            />

            <div className="mt-8 space-y-5">
              {paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.08 + index * 0.06}>
                  <p className="max-w-2xl text-[1rem] leading-relaxed text-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.28} className="mt-10">
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
