"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import type { ProcessStep } from "@/content/types";

interface ProcessTimelineProps {
  steps: ProcessStep[];
  /** Adds the longer explanation and deliverables under each step. */
  detailed?: boolean;
  tone?: "dark" | "light";
}

/**
 * Vertical timeline whose connecting line draws itself as the section scrolls.
 */
export function ProcessTimeline({
  steps,
  detailed = false,
  tone = "dark",
}: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 70%"],
  });

  // Spring smooths the line so it does not track the scroll wheel exactly.
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  const isDark = tone === "dark";
  const trackColor = isDark ? "bg-charcoal/12" : "bg-ivory/15";
  const lineColor = isDark ? "bg-olive" : "bg-sand";
  const numberColor = isDark ? "text-brown" : "text-sand/70";
  const titleColor = isDark ? "text-charcoal" : "text-ivory";
  const bodyColor = isDark ? "text-charcoal/65" : "text-ivory/65";
  const detailColor = isDark ? "text-charcoal/55" : "text-ivory/50";
  const chipBorder = isDark ? "border-charcoal/15" : "border-ivory/20";

  return (
    <Container>
      <div ref={ref} className="relative">
        {/* Track and progress line */}
        <div
          className={`absolute top-2 bottom-2 left-[0.4375rem] w-px md:left-[6.5rem] ${trackColor}`}
          aria-hidden="true"
        />
        <motion.div
          className={`absolute top-2 bottom-2 left-[0.4375rem] w-px origin-top md:left-[6.5rem] ${lineColor}`}
          style={{ scaleY }}
          aria-hidden="true"
        />

        <ol className="space-y-14 md:space-y-20">
          {steps.map((step, index) => (
            <li key={step.number} className="relative pl-10 md:pl-0">
              <div className="md:grid md:grid-cols-[6.5rem_1fr] md:gap-x-12">
                {/* Number column */}
                <div className="md:text-right md:pr-12">
                  <motion.span
                    className={`label absolute top-0 left-0 md:static ${numberColor}`}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {step.number}
                  </motion.span>
                </div>

                {/* Marker dot sits on the line */}
                <motion.span
                  className={`absolute top-1.5 left-0 h-[0.9375rem] w-[0.9375rem] rounded-full border-2 md:left-[6.03125rem] ${
                    isDark
                      ? "border-olive bg-ivory"
                      : "border-sand bg-charcoal"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-hidden="true"
                />

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05 + index * 0.02,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3 className={`text-display-4 ${titleColor}`}>
                    {step.title}
                  </h3>
                  <p
                    className={`mt-3 max-w-2xl text-[1.0625rem] leading-relaxed ${bodyColor}`}
                  >
                    {step.description}
                  </p>

                  {detailed && (
                    <>
                      <p
                        className={`mt-5 max-w-2xl text-[0.9375rem] leading-relaxed ${detailColor}`}
                      >
                        {step.detail}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className={`label rounded-full border px-3.5 py-1.5 ${chipBorder} ${detailColor}`}
                          >
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </motion.div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
