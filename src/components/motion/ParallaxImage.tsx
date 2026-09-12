"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  /** How far the image drifts, as a percentage of its own height. */
  strength?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * Image that drifts slightly slower than the page as it scrolls past.
 * The inner image is oversized so the drift never exposes an edge.
 */
export function ParallaxImage({
  src,
  alt,
  className = "",
  strength = 8,
  sizes = "100vw",
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y, height: `${100 + strength * 2}%`, top: `-${strength}%` }}
        className="absolute inset-x-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
