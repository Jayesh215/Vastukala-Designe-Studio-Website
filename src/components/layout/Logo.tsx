import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Brand lockup.
 *
 * The supplied logo is rendered exactly as provided — original proportions,
 * no recolouring, cropping or filters. On dark surfaces it sits on a light
 * plate so the white-background artwork stays readable without altering the
 * logo itself.
 */
export function Logo({
  tone = "dark",
  className = "",
  size = "header",
}: {
  tone?: "dark" | "light";
  className?: string;
  /** header = nav bar; footer = larger lockup in the site footer. */
  size?: "header" | "footer";
}) {
  if (!site.logo.src) {
    const nameColor = tone === "dark" ? "text-charcoal" : "text-ivory";
    const descriptorColor = tone === "dark" ? "text-brown" : "text-sand/80";

    return (
      <Link
        href="/"
        aria-label={`${site.name} — home`}
        className={`inline-flex items-center gap-3 ${className}`}
      >
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.0625rem] leading-none tracking-[0.01em] transition-colors duration-500 md:text-xl ${nameColor}`}
          >
            Vastukala
            <span className="hidden sm:inline"> Design Studio</span>
          </span>
          <span
            className={`label mt-1.5 text-[0.5rem] transition-colors duration-500 md:text-[0.5625rem] ${descriptorColor}`}
          >
            {site.descriptor}
          </span>
        </span>
      </Link>
    );
  }

  const heightClass =
    size === "footer"
      ? "h-20 w-auto sm:h-24"
      : "h-12 w-auto md:h-14";

  // Light plate keeps the white-background logo legible over dark heroes
  // without changing the logo artwork.
  const plate =
    tone === "light"
      ? "rounded-md bg-ivory p-1 shadow-[0_1px_0_rgba(32,33,30,0.06)]"
      : "";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex items-center ${className}`}
    >
      <span className={`inline-flex ${plate}`}>
        <Image
          src={site.logo.src}
          alt={site.logo.alt}
          width={site.logo.width}
          height={site.logo.height}
          priority
          className={`${heightClass} object-contain`}
        />
      </span>
    </Link>
  );
}
