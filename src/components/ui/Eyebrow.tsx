import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
  /** Shows the short rule before the text. Default off for Monteire quiet labels. */
  rule?: boolean;
}

/** Small uppercase label that sits above section headings. */
export function Eyebrow({
  children,
  className = "",
  tone = "dark",
  rule = false,
}: EyebrowProps) {
  const textTone = tone === "dark" ? "text-muted" : "text-canvas/65";
  const ruleTone = tone === "dark" ? "bg-muted/40" : "bg-canvas/40";

  return (
    <p className={`label flex items-center gap-3 ${textTone} ${className}`}>
      {rule && (
        <span className={`h-px w-8 shrink-0 ${ruleTone}`} aria-hidden="true" />
      )}
      {children}
    </p>
  );
}
