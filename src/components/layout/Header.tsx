"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Every page opens with a dark image hero, so the bar starts transparent
  // with light text and switches to an opaque blurred ivory bar on scroll.
  const solid = scrolled || menuOpen;
  const tone = solid ? "dark" : "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the panel on navigation and lock scrolling while it is open.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? "border-b border-charcoal/10 bg-ivory/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 md:h-[5.5rem]">
        <Logo tone={tone} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`label relative py-2 transition-colors duration-500 ${
                    solid
                      ? isActive(item.href)
                        ? "text-olive"
                        : "text-charcoal/65 hover:text-charcoal"
                      : isActive(item.href)
                        ? "text-ivory"
                        : "text-ivory/70 hover:text-ivory"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px w-full ${
                        solid ? "bg-olive" : "bg-ivory"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`label group hidden items-center gap-2.5 rounded-full px-6 py-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:inline-flex ${
              solid
                ? "bg-olive text-ivory hover:bg-olive-dark"
                : "bg-ivory/95 text-charcoal hover:bg-ivory"
            }`}
          >
            {site.primaryCta}
            <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`relative z-10 -mr-1 flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden ${
              solid ? "text-charcoal" : "text-ivory"
            }`}
          >
            <span className="relative block h-3 w-6" aria-hidden="true">
              <motion.span
                className="absolute left-0 block h-px w-full bg-current"
                animate={
                  menuOpen ? { top: "50%", rotate: 45 } : { top: 0, rotate: 0 }
                }
                transition={{ duration: 0.4, ease: EASE }}
              />
              <motion.span
                className="absolute left-0 block h-px w-full bg-current"
                animate={
                  menuOpen
                    ? { bottom: "50%", rotate: -45 }
                    : { bottom: 0, rotate: 0 }
                }
                transition={{ duration: 0.4, ease: EASE }}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-charcoal/10 bg-ivory lg:hidden"
          >
            <Container className="py-8">
              <ul className="flex flex-col">
                {site.navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.06 + index * 0.045,
                      ease: EASE,
                    }}
                    className="border-b border-charcoal/10 last:border-b-0"
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-4 font-display text-2xl ${
                        isActive(item.href) ? "text-olive" : "text-charcoal"
                      }`}
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 text-brown" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42, ease: EASE }}
                className="mt-8 space-y-3"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label flex w-full items-center justify-center gap-2.5 rounded-full bg-olive px-6 py-4 text-ivory"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {site.primaryCta}
                </a>
                <div className="flex flex-col gap-1 pt-3 text-sm text-charcoal/65">
                  <a href={`tel:${site.contact.phoneE164}`}>
                    {site.contact.phoneDisplay}
                  </a>
                  <a href={`mailto:${site.contact.email}`} className="break-all">
                    {site.contact.email}
                  </a>
                  <span>{site.contact.locationShort}</span>
                </div>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
