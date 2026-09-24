"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const lineVariants: Variants = {
  hidden: { y: "110%" },
  visible: (delay: number) => ({
    y: "0%",
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

type TextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";

interface TextRevealProps {
  /** Use "\n" to force a line break; each line reveals from behind a mask. */
  text: string;
  className?: string;
  as?: TextTag;
  delay?: number;
  stagger?: number;
}

/**
 * Reveals a heading line by line, each line sliding up from behind a mask.
 */
export function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.1,
}: TextRevealProps) {
  const lines = text.split("\n");

  const content: ReactNode = lines.map((line, index) => (
    <span
      key={`${line}-${index}`}
      className="block overflow-hidden pb-[0.06em]"
    >
      <motion.span
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={lineVariants}
        custom={delay + index * stagger}
      >
        {line || "\u00A0"}
      </motion.span>
    </span>
  ));

  return <Tag className={className}>{content}</Tag>;
}
