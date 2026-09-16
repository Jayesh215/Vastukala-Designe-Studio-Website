import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  /** Use "\n" to control line breaks. */
  heading: string;
  description?: string;
  image: string;
  imageAlt: string;
  /** Breadcrumb trail shown above the heading. */
  breadcrumbs?: { label: string; href?: string }[];
  meta?: ReactNode;
  action?: ReactNode;
  size?: "default" | "compact";
}

/** Shared light page hero used at the top of every inner page. */
export function PageHero({
  eyebrow,
  heading,
  description,
  image,
  imageAlt,
  breadcrumbs,
  meta,
  action,
  size = "default",
}: PageHeroProps) {
  const padding =
    size === "compact"
      ? "pt-28 pb-12 md:pt-32 md:pb-14"
      : "pt-28 pb-14 md:pt-36 md:pb-20";

  return (
    <section className={`relative overflow-hidden border-b border-line bg-canvas ${padding}`}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] opacity-30">
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale-[25%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/80 to-canvas/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-canvas to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {breadcrumbs && (
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="label flex flex-wrap items-center justify-center gap-2.5 text-muted">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.label} className="flex items-center gap-2.5">
                      {index > 0 && <span aria-hidden="true">/</span>}
                      {crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="transition-colors duration-300 hover:text-ink"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-ink/80">{crumb.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>
          )}

          {!breadcrumbs && (
            <Reveal>
              <Eyebrow className="mb-5 justify-center">{eyebrow}</Eyebrow>
            </Reveal>
          )}

          <TextReveal
            as="h1"
            text={heading}
            className="text-display-2 font-semibold text-ink"
          />

          {/* Keep imageAlt accessible for SEO/a11y even when decorative fade is used */}
          <span className="sr-only">{imageAlt}</span>

          {description && (
            <Reveal delay={0.12}>
              <p className="mx-auto mt-5 max-w-xl text-lead text-muted">
                {description}
              </p>
            </Reveal>
          )}

          {meta && (
            <Reveal delay={0.18} className="mt-6">
              {meta}
            </Reveal>
          )}

          {action && (
            <Reveal delay={0.22} className="mt-8 flex justify-center">
              {action}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
