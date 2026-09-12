import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Brand lockup.
 *
 * When `site.logo.src` points at a logo file the image is rendered as supplied —
 * original proportions, no recolouring, no cropping. Until then a typographic
 * wordmark stands in so nothing on the site invents a logo.
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const nameColor = tone === "dark" ? "text-charcoal" : "text-ivory";
  const descriptorColor = tone === "dark" ? "text-brown" : "text-sand/80";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      {site.logo.src ? (
        <Image
          src={site.logo.src}
          alt={site.logo.alt}
          width={site.logo.width}
          height={site.logo.height}
          priority
          className="h-9 w-auto md:h-11"
        />
      ) : (
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
      )}
    </Link>
  );
}
