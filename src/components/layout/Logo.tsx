import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Brand lockup — original logo proportions, no recolouring or cropping.
 * Light Monteire chrome: no charcoal plate on the header.
 */
export function Logo({
  tone = "dark",
  className = "",
  size = "header",
}: {
  tone?: "dark" | "light";
  className?: string;
  size?: "header" | "footer";
}) {
  if (!site.logo.src) {
    const nameColor = tone === "dark" ? "text-ink" : "text-canvas";
    const descriptorColor = tone === "dark" ? "text-muted" : "text-canvas/70";

    return (
      <Link
        href="/"
        aria-label={`${site.name} — home`}
        className={`inline-flex items-center gap-3 ${className}`}
      >
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[0.9375rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 md:text-base ${nameColor}`}
          >
            Vastukala
          </span>
          <span
            className={`label mt-1.5 text-[0.5rem] transition-colors duration-300 ${descriptorColor}`}
          >
            {site.descriptor}
          </span>
        </span>
      </Link>
    );
  }

  /* Wide lockup — compact in the Framer-style header, larger in the footer */
  const heightClass =
    size === "footer"
      ? "h-14 w-auto sm:h-16"
      : "h-9 w-auto sm:h-10";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src={site.logo.src}
        alt={site.logo.alt}
        width={site.logo.width}
        height={site.logo.height}
        priority
        className={`${heightClass} object-contain object-left`}
      />
    </Link>
  );
}
