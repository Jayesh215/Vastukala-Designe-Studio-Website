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
    <section className="bg-canvas py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="label text-muted">Last updated</p>
              <p className="mt-3 font-display text-lg font-semibold text-ink">
                {lastUpdated}
              </p>

              <nav aria-label="On this page" className="mt-10">
                <p className="label text-muted">On this page</p>
                <ol className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#section-${index + 1}`}
                        className="link-underline text-[0.9375rem] text-muted transition-colors duration-300 hover:text-ink"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="border-l-2 border-ink pl-6 text-[1.0625rem] leading-relaxed text-muted">
                {intro}
              </p>
            </Reveal>

            <div className="mt-14 space-y-12">
              {sections.map((section, index) => (
                <Reveal
                  key={section.heading}
                  y={14}
                  as="section"
                  className="scroll-mt-28"
                >
                  <div id={`section-${index + 1}`} className="scroll-mt-28">
                    <h2 className="font-display text-[clamp(1.25rem,2vw,1.625rem)] font-semibold leading-tight text-ink">
                      <span className="label mr-3 align-middle text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </h2>

                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-5 text-[1.0625rem] leading-[1.8] text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.list && (
                      <ul className="mt-6 space-y-3 border-l border-line pl-6">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="text-[1.0625rem] leading-relaxed text-muted"
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
