"use client";

import { motion, type Variants } from "framer-motion";
import type { ElementType } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: (delay: number) => ({
    y: "0%",
    transition: { duration: 0.95, delay, ease: EASE },
  }),
};

interface TextRevealProps {
  /** Use "\n" to force a line break; each line reveals from behind a mask. */
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
}

/**
 * Reveals a heading line by line, each line sliding up from behind a mask.
 *
 * The viewport observer sits on the mask rather than on the moving line: the
 * line starts translated fully outside the mask's overflow-hidden box, so
 * observing it directly reports an empty intersection rect and never triggers.
 */
export function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.09,
}: TextRevealProps) {
  const lines = text.split("\n");

  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <motion.span
          key={`${line}-${index}`}
          className="block overflow-hidden pb-[0.08em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.span
            className="block"
            variants={lineVariants}
            custom={delay + index * stagger}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}
