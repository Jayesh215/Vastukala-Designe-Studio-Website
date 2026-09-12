import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
  /** Shows the short rule before the text. */
  rule?: boolean;
}

/** Small uppercase label that sits above section headings. */
export function Eyebrow({
  children,
  className = "",
  tone = "dark",
  rule = true,
}: EyebrowProps) {
  const textTone = tone === "dark" ? "text-brown" : "text-sand";
  const ruleTone = tone === "dark" ? "bg-brown/40" : "bg-sand/40";

  return (
    <p className={`label flex items-center gap-3 ${textTone} ${className}`}>
      {rule && (
        <span className={`h-px w-8 shrink-0 ${ruleTone}`} aria-hidden="true" />
      )}
      {children}
    </p>
  );
}
