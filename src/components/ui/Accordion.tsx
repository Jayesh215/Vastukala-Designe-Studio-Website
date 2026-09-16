"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AccordionEntry {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  tone?: "dark" | "light";
  /** Index open on first render; pass null for all closed. */
  defaultOpen?: number | null;
}

/** Animated FAQ accordion. One panel open at a time. */
export function Accordion({
  items,
  tone = "dark",
  defaultOpen = 0,
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  const border = tone === "dark" ? "border-line" : "border-canvas/15";
  const question = tone === "dark" ? "text-ink" : "text-canvas";
  const answer = tone === "dark" ? "text-muted" : "text-canvas/70";
  const mark = tone === "dark" ? "text-muted" : "text-canvas/60";

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question} className={`border-b ${border}`}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left md:py-6"
              >
                <span
                  className={`font-display text-base font-semibold leading-snug md:text-lg ${question}`}
                >
                  {item.question}
                </span>
                <span
                  className={`relative mt-1.5 h-3.5 w-3.5 shrink-0 ${mark}`}
                  aria-hidden="true"
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                  <motion.span
                    className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current"
                    animate={{ scaleY: isOpen ? 0 : 1 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={`max-w-3xl pb-6 text-[0.9375rem] leading-relaxed ${answer}`}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
