import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./icons";

type Variant = "solid" | "outline" | "light" | "outlineLight" | "text";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-canvas hover:bg-ink-soft rounded-[10px] border border-transparent",
  outline:
    "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-canvas rounded-[10px]",
  light:
    "bg-canvas text-ink hover:bg-surface-dim rounded-[10px] border border-transparent",
  outlineLight:
    "border border-canvas/30 text-canvas hover:bg-canvas hover:text-ink rounded-[10px]",
  text: "text-ink hover:text-muted p-0",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.8125rem] tracking-[-0.01em]",
  lg: "px-7 py-3.5 text-[0.875rem] tracking-[-0.01em]",
};

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean | "up-right";
  newTab?: boolean;
  ariaLabel?: string;
  icon?: ReactNode;
}

/** Primary link-style button. Internal hrefs route through next/link. */
export function Button({
  children,
  href,
  variant = "solid",
  size = "md",
  className = "",
  arrow = false,
  newTab,
  ariaLabel,
  icon,
}: ButtonProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  const openInNewTab = newTab ?? (isExternal && href.startsWith("http"));

  const classes = `${base} ${variants[variant]} ${
    variant === "text" ? "" : sizes[size]
  } ${className}`;

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow === "up-right" ? (
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : arrow ? (
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
      ) : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(openInNewTab
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

/** Understated text link with an animated underline, used inside body copy. */
export function TextLink({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  const classes = `link-underline inline-flex items-center gap-1.5 ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
