import type { ReactNode } from "react";

type Width = "default" | "wide" | "narrow" | "prose";

const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  prose: "max-w-[42rem]",
  default: "max-w-[82rem]",
  wide: "max-w-[96rem]",
};

/** Consistent page gutters and max widths across every section. */
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
      className={`mx-auto w-full ${widths[width]} px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
