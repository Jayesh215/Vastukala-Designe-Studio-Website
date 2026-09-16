import type { ReactNode } from "react";

type Width = "default" | "wide" | "narrow" | "prose";

/**
 * Layout widths scale with the viewport.
 * default / wide: full screen width (no fixed max) — only side gutters.
 * narrow / prose: reading measure only (articles, legal).
 */
const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  prose: "max-w-[42rem]",
  default: "max-w-none",
  wide: "max-w-none",
};

/** Full-bleed page gutters that follow any monitor width. */
export function Container({
  children,
  className = "",
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: Width;
}) {
  return (
    <div
      className={`mx-auto w-full ${widths[width]} px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
