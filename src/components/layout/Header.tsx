"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

const EASE: [number, number, number, number] = [0.12, 0.23, 0.5, 1];

/** Liquid chase for the active / hover pill inside the ink panel. */
const LIQUID = {
  type: "spring" as const,
  stiffness: 160,
  damping: 18,
  mass: 0.7,
};

/** Contact is the CTA. */
const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
];

/**
 * Floating pill nav for the Avéon home theme —
 * cream paper matches hero; ink panel uses liquid hover.
 */
export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const activeHref = NAV.find((item) => isActive(item.href))?.href ?? null;
  const liquidHref = hovered ?? activeHref;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 md:pt-5">
      <div
        className={`pointer-events-auto flex w-full max-w-[920px] items-center gap-1 overflow-hidden rounded-full p-1.5 transition-shadow duration-500 ${
          scrolled ? "shadow-[0_10px_32px_rgba(44,34,24,0.1)]" : "shadow-none"
        }`}
        style={{
          backgroundColor: "#E8E0D6",
          backgroundImage: "url('/images/hero/mask-front.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="flex shrink-0 items-center gap-2 rounded-full px-3 py-2 md:px-4">
          <Logo tone="dark" size="header" />
        </div>

        <motion.nav
          aria-label="Primary"
          className="ml-auto hidden items-center overflow-hidden rounded-full bg-[#2C2218] px-1 py-1 shadow-[0_10px_28px_rgba(44,34,24,0.22)] lg:flex"
          initial={reduce ? false : { scale: 0.92, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={reduce ? { duration: 0 } : LIQUID}
          onMouseLeave={() => setHovered(null)}
        >
          <LayoutGroup id="home-nav-liquid">
            <ul className="flex items-center gap-0.5">
              {NAV.map((item) => {
                const active = isActive(item.href);
                const showLiquid = liquidHref === item.href;
                return (
                  <li key={item.href} className="relative">
                    {showLiquid && (
                      <motion.span
                        layoutId="home-nav-liquid-pill"
                        className="absolute inset-0 rounded-full bg-[#E8E0D6]/18"
                        transition={reduce ? { duration: 0 } : LIQUID}
                        style={{ borderRadius: 999 }}
                      />
                    )}
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative z-10 block rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300 ${
                        showLiquid
                          ? "text-[#E8E0D6]"
                          : "text-[#E8E0D6]/75 hover:text-[#E8E0D6]"
                      }`}
                      style={{
                        fontFamily:
                          "var(--font-inter-display), 'Inter Display', ui-sans-serif, system-ui, sans-serif",
                      }}
                      onMouseEnter={() => setHovered(item.href)}
                      onFocus={() => setHovered(item.href)}
                      onBlur={() => setHovered(null)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </LayoutGroup>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={site.primaryCta}
            className="ml-1 inline-flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-2 text-[13px] font-medium text-[#2C2218] transition-transform duration-300 hover:scale-[1.02]"
            style={{
              fontFamily:
                "var(--font-inter-display), 'Inter Display', ui-sans-serif, system-ui, sans-serif",
              backgroundColor: "#E8E0D6",
              backgroundImage: "url('/images/hero/mask-front.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            {site.primaryCta}
            <span aria-hidden="true">→</span>
          </a>
        </motion.nav>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#2C2218] text-[#E8E0D6] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden="true" className="text-lg leading-none">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="pointer-events-auto absolute inset-x-3 top-[4.5rem] max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-[24px] p-5 shadow-[0_20px_50px_rgba(44,34,24,0.16)] lg:hidden"
            style={{
              backgroundColor: "#E8E0D6",
              backgroundImage: "url('/images/hero/mask-front.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-full px-4 py-3 text-base font-medium ${
                      isActive(item.href)
                        ? "bg-[#2C2218]/10 text-[#2C2218]"
                        : "text-[#2C2218]/80 hover:bg-[#2C2218]/5"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#2C2218] px-4 py-3.5 text-sm font-medium text-[#E8E0D6]"
              onClick={() => setOpen(false)}
            >
              {site.primaryCta} →
            </a>
            <div className="mt-5 flex flex-col gap-1 border-t border-[#2C2218]/12 pt-4 text-sm text-[#2C2218]/70">
              <a href={`tel:${site.contact.phoneE164}`}>
                {site.contact.phoneDisplay}
              </a>
              <a href={`mailto:${site.contact.email}`} className="break-all">
                {site.contact.email}
              </a>
              <span>{site.contact.locationShort}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
