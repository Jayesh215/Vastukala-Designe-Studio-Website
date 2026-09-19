import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/content/site";

const QUICK = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/** ArcGrid dark footer — matches Framer projects page footer. */
export function ArcFooter() {
  return (
    <footer className="overflow-visible bg-[#2C2218] text-white">
      <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-5 py-10 md:grid-cols-3 md:gap-8 md:px-10 md:py-12">
        <div className="min-w-0">
          <div className="brightness-0 invert">
            <Logo tone="light" size="footer" />
          </div>
          <p
            className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60"
            style={{ fontFamily: "var(--font-instrument), sans-serif" }}
          >
            {site.metaDescription}
          </p>
          <div className="mt-5 flex shrink-0 gap-2 pb-1">
            {[
              { href: site.contact.instagramUrl, label: "Instagram" },
              { href: `mailto:${site.contact.email}`, label: "Email" },
              { href: `tel:${site.contact.phoneE164}`, label: "Phone" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#2C2218]"
                aria-label={item.label}
              >
                {item.label[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight">Quick Link</p>
          <ul className="mt-3 space-y-2">
            {QUICK.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] text-white/55 transition-colors hover:text-white"
                  style={{ fontFamily: "var(--font-instrument), sans-serif" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight">Address</p>
          <ul
            className="mt-3 space-y-2 text-[14px] text-white/55"
            style={{ fontFamily: "var(--font-instrument), sans-serif" }}
          >
            <li>
              <a
                href={`tel:${site.contact.phoneE164}`}
                className="hover:text-white"
              >
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="break-all hover:text-white"
              >
                {site.contact.email}
              </a>
            </li>
            <li>{site.contact.locationShort}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-[12px] text-white/40 md:px-10">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
