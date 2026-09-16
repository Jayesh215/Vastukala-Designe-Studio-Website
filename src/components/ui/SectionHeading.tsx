import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Use "\n" to control where the heading breaks. */
  heading: string;
  description?: string;
  /** "split" puts the heading left and the description right on large screens. */
  layout?: "stacked" | "split" | "centered";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  layout = "centered",
  tone = "dark",
  as = "h2",
  action,
  className = "",
}: SectionHeadingProps) {
  const headingColor = tone === "dark" ? "text-ink" : "text-canvas";
  const bodyColor = tone === "dark" ? "text-muted" : "text-canvas/70";
  const headingSize = as === "h1" ? "text-display-2" : "text-display-3";

  if (layout === "split") {
    return (
      <div
        className={`grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16 ${className}`}
      >
        <div className="lg:col-span-7">
          {eyebrow && (
            <Reveal>
              <Eyebrow tone={tone} className="mb-5" rule={false}>
                {eyebrow}
              </Eyebrow>
            </Reveal>
          )}
          <TextReveal
            as={as}
            text={heading}
            className={`${headingSize} font-semibold ${headingColor}`}
          />
        </div>
        <div className="lg:col-span-5">
          {description && (
            <Reveal delay={0.1}>
              <p className={`max-w-xl text-lead ${bodyColor}`}>{description}</p>
            </Reveal>
          )}
          {action && (
            <Reveal delay={0.18} className="mt-7">
              {action}
            </Reveal>
          )}
        </div>
      </div>
    );
  }

  const alignment = layout === "centered" ? "items-center text-center" : "";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow
            tone={tone}
            className={`mb-5 ${layout === "centered" ? "justify-center" : ""}`}
            rule={false}
          >
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <TextReveal
        as={as}
        text={heading}
        className={`${headingSize} font-semibold ${headingColor} ${
          layout === "centered" ? "max-w-3xl" : "max-w-3xl"
        }`}
      />
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 max-w-2xl text-lead ${bodyColor} ${
              layout === "centered" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
      {action && (
        <Reveal delay={0.18} className="mt-8">
          {action}
        </Reveal>
      )}
    </div>
  );
}
