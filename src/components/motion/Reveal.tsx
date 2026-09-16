"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance in pixels the element travels upward as it fades in. */
  y?: number;
  duration?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}

/** Fades, lifts, and softly scales children once they enter the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.65,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px", amount: 0.2 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}

const groupVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.08 },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

/**
 * Parent wrapper that reveals `RevealItem` children in sequence.
 * Used for service cards, value lists and project grids.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={groupVariants}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px", amount: 0.15 }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Component = motion[as];

  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
