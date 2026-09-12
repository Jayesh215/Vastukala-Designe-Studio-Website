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

/** Shared dark image hero used at the top of every inner page. */
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
  const height =
    size === "compact"
      ? "min-h-[52svh] pt-32 pb-14 md:min-h-[58svh] md:pb-18"
      : "min-h-[66svh] pt-32 pb-16 md:min-h-[72svh] md:pb-20";

  return (
    <section
      className={`relative flex items-end overflow-hidden bg-charcoal ${height}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/88 via-charcoal/55 to-charcoal/40"
        aria-hidden="true"
      />

      <Container className="relative">
        {breadcrumbs && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="label flex flex-wrap items-center gap-2.5 text-ivory/45">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-2.5">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors duration-300 hover:text-ivory"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-ivory/80">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        )}

        {!breadcrumbs && (
          <Reveal>
            <Eyebrow tone="light" className="mb-6">
              {eyebrow}
            </Eyebrow>
          </Reveal>
        )}

        <TextReveal
          as="h1"
          text={heading}
          className="max-w-4xl text-display-2 text-ivory"
        />

        {description && (
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-lead text-ivory/70">
              {description}
            </p>
          </Reveal>
        )}

        {meta && <Reveal delay={0.3}>{meta}</Reveal>}

        {action && (
          <Reveal delay={0.35} className="mt-10">
            {action}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
