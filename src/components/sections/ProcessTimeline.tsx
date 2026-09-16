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

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  const isDark = tone === "dark";
  const trackColor = isDark ? "bg-line" : "bg-canvas/20";
  const lineColor = isDark ? "bg-ink" : "bg-canvas";
  const numberColor = isDark ? "text-muted" : "text-canvas/60";
  const titleColor = isDark ? "text-ink" : "text-canvas";
  const bodyColor = isDark ? "text-muted" : "text-canvas/70";
  const detailColor = isDark ? "text-muted" : "text-canvas/55";
  const chipBorder = isDark ? "border-line" : "border-canvas/25";

  return (
    <Container>
      <div ref={ref} className="relative">
        <div
          className={`absolute top-2 bottom-2 left-[0.4375rem] w-px md:left-[6.5rem] ${trackColor}`}
          aria-hidden="true"
        />
        <motion.div
          className={`absolute top-2 bottom-2 left-[0.4375rem] w-px origin-top md:left-[6.5rem] ${lineColor}`}
          style={{ scaleY }}
          aria-hidden="true"
        />

        <ol className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <li key={step.number} className="relative pl-10 md:pl-0">
              <div className="md:grid md:grid-cols-[6.5rem_1fr] md:gap-x-12">
                <div className="md:pr-12 md:text-right">
                  <motion.span
                    className={`label absolute top-0 left-0 md:static ${numberColor}`}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {step.number}
                  </motion.span>
                </div>

                <motion.span
                  className={`absolute top-1.5 left-0 h-[0.875rem] w-[0.875rem] rounded-[10px] border-2 md:left-[6.0625rem] ${
                    isDark
                      ? "border-ink bg-canvas"
                      : "border-canvas bg-ink-soft"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-hidden="true"
                />

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.04 + index * 0.02,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3 className={`text-display-4 font-semibold ${titleColor}`}>
                    {step.title}
                  </h3>
                  <p
                    className={`mt-3 max-w-2xl text-[1rem] leading-relaxed ${bodyColor}`}
                  >
                    {step.description}
                  </p>

                  {detailed && (
                    <>
                      <p
                        className={`mt-4 max-w-2xl text-[0.9375rem] leading-relaxed ${detailColor}`}
                      >
                        {step.detail}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className={`rounded-[8px] border px-3 py-1.5 text-[0.75rem] ${chipBorder} ${detailColor}`}
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
