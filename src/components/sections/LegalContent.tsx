import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { LegalSection } from "@/content/legal";

interface LegalContentProps {
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

/** Shared layout for the privacy policy and terms pages. */
export function LegalContent({
  intro,
  lastUpdated,
  sections,
}: LegalContentProps) {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contents */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="label text-charcoal/45">Last updated</p>
              <p className="mt-3 font-display text-lg text-charcoal">
                {lastUpdated}
              </p>

              <nav aria-label="On this page" className="mt-10">
                <p className="label text-charcoal/45">On this page</p>
                <ol className="mt-5 space-y-2.5 border-t border-charcoal/12 pt-5">
                  {sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#section-${index + 1}`}
                        className="link-underline text-[0.9375rem] text-charcoal/60 transition-colors duration-300 hover:text-charcoal"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-8">
            <Reveal>
              <p className="border-l-2 border-olive pl-6 text-[1.0625rem] leading-relaxed text-charcoal/75">
                {intro}
              </p>
            </Reveal>

            <div className="mt-14 space-y-12">
              {sections.map((section, index) => (
                <Reveal
                  key={section.heading}
                  y={18}
                  as="section"
                  className="scroll-mt-28"
                >
                  <div id={`section-${index + 1}`} className="scroll-mt-28">
                    <h2 className="font-display text-[clamp(1.375rem,2.2vw,1.875rem)] leading-tight text-charcoal">
                      <span className="label mr-3 align-middle text-brown">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </h2>

                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-5 text-[1.0625rem] leading-[1.8] text-charcoal/70"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="mt-6 space-y-3 border-l border-brown/30 pl-6">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="text-[1.0625rem] leading-relaxed text-charcoal/70"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
