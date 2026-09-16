"use client";

import type { ReactNode } from "react";

/**
 * Infinite horizontal marquee for live strip momentum.
 * Duplicates children so the loop is seamless.
 */
export function Marquee({
  children,
  className = "",
  duration = 32,
  gap = "2.5rem",
  pauseOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds for one full loop. */
  duration?: number;
  gap?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={`group/marquee relative overflow-hidden ${className}`}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      <div
        className={`flex w-max animate-marquee ${
          pauseOnHover ? "group-hover/marquee:[animation-play-state:paused]" : ""
        }`}
        style={{ gap }}
      >
        <div className="flex shrink-0 items-center" style={{ gap }}>
          {children}
        </div>
        <div
          className="flex shrink-0 items-center"
          style={{ gap }}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
