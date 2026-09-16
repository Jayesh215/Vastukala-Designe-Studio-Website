"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Variant = "plate" | "corner" | "faint";

/**
 * Soft pencil / CAD elevation sketch behind light sections.
 * Minimal drift only — never competes with content.
 */
export function SketchBackdrop({
  variant = "plate",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const opacity =
    variant === "faint" ? "opacity-[0.07]" : variant === "corner" ? "opacity-[0.1]" : "opacity-[0.12]";

  const position =
    variant === "corner"
      ? "object-right-bottom scale-110"
      : "object-center scale-105";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className={`absolute inset-0 ${opacity}`}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
                x: [0, 4, 0],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.5 }
            : {
                opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 22, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 28, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        <Image
          src="/images/architect-sketch-wide.jpg"
          alt=""
          fill
          sizes="100vw"
          className={`object-contain ${position}`}
          priority={false}
        />
      </motion.div>

      {/* Soft wash so type stays readable over linework */}
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/80 via-canvas/55 to-canvas/85" />

      {/* Hairline drafting marks */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="4%"
          y1="8%"
          x2="4%"
          y2="92%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.line
          x1="4%"
          y1="92%"
          x2="96%"
          y2="92%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={reduceMotion ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
}

/** Section wrapper that mounts a sketch atmosphere behind children. */
export function SketchSection({
  children,
  className = "",
  id,
  variant = "plate",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: Variant;
}) {
  return (
    <section id={id} className={`relative overflow-hidden bg-canvas ${className}`}>
      <SketchBackdrop variant={variant} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
