"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowRight } from "@/components/ui/icons";
import { featuredTestimonials } from "@/content/testimonials";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Testimonial carousel driven by the testimonials collection.
 * Entries still flagged `isSample` are labelled as placeholder content.
 */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonials = featuredTestimonials;

  if (testimonials.length === 0) return null;

  const active = testimonials[index];
  const go = (direction: 1 | -1) =>
    setIndex(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );

  return (
    <section className="border-t border-line bg-canvas py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-5 justify-center">Client Testimonials</Eyebrow>
          <h2 className="text-display-3 font-semibold text-ink">
            What clients say about working with us
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-line pt-10 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="text-center"
            >
              <blockquote>
                <p className="font-display text-[clamp(1.35rem,2.4vw,1.875rem)] font-semibold leading-[1.35] text-ink">
                  &ldquo;{active.review}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-8">
                <p className="font-display text-base font-semibold text-ink">
                  {active.clientName}
                </p>
                <p className="mt-1.5 text-[0.875rem] text-muted">
                  {active.project}
                </p>
                {active.isSample && (
                  <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted/70">
                    Sample content — this placeholder will be replaced with a
                    verified client review.
                  </p>
                )}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-line text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <span className="label mx-2 text-muted">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-line text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-canvas"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
