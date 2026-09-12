import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./icons";

type Variant = "solid" | "outline" | "light" | "outlineLight" | "text";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  solid:
    "bg-olive text-ivory hover:bg-olive-dark rounded-full border border-transparent",
  outline:
    "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory rounded-full",
  light:
    "bg-ivory text-charcoal hover:bg-sand rounded-full border border-transparent",
  outlineLight:
    "border border-ivory/35 text-ivory hover:bg-ivory hover:text-charcoal rounded-full",
  text: "text-charcoal hover:text-olive p-0",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.8125rem] tracking-[0.02em]",
  lg: "px-8 py-4 text-sm tracking-[0.02em]",
};

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Renders an arrow that slides on hover. */
  arrow?: boolean | "up-right";
  /** Forces a new tab; external links open in a new tab automatically. */
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
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : arrow ? (
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
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
