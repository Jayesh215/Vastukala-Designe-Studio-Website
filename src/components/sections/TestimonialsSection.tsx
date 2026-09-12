"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StarIcon, ArrowRight } from "@/components/ui/icons";
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
    <section className="bg-charcoal py-24 text-ivory md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow tone="light" className="mb-7">
              Client Testimonials
            </Eyebrow>
            <h2 className="text-display-3 text-ivory">
              What clients say about working with us
            </h2>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-charcoal"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-charcoal"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
              <span className="label ml-3 text-ivory/45">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="min-h-[19rem] border-t border-ivory/15 pt-10 md:min-h-[17rem]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <div
                    className="flex items-center gap-1 text-sand"
                    aria-label={`${active.rating} out of 5`}
                  >
                    {Array.from({ length: active.rating }).map((_, star) => (
                      <StarIcon key={star} />
                    ))}
                  </div>

                  <blockquote className="mt-7">
                    <p className="font-display text-[clamp(1.5rem,2.8vw,2.375rem)] leading-[1.25] text-ivory">
                      &ldquo;{active.review}&rdquo;
                    </p>
                  </blockquote>

                  <figcaption className="mt-9">
                    <p className="font-display text-lg text-ivory">
                      {active.clientName}
                    </p>
                    <p className="label mt-2 text-sand/65">{active.project}</p>
                    {active.isSample && (
                      <p className="mt-5 max-w-md text-xs leading-relaxed text-ivory/35">
                        Sample content — this placeholder will be replaced with a
                        verified client review.
                      </p>
                    )}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
