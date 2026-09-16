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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled || menuOpen
          ? "border-line bg-surface/95 backdrop-blur-xl"
          : "border-transparent bg-surface"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 md:h-[5rem]">
        <Logo tone="dark" />

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex items-center gap-8">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative text-[0.9375rem] tracking-[-0.01em] transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-px w-full bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
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
            className="group hidden items-center gap-2.5 rounded-full bg-ink py-2 pr-2 pl-4 text-[0.875rem] font-medium text-surface transition-colors duration-300 hover:bg-ink-soft lg:inline-flex"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {site.primaryCta}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-10 -mr-1 flex h-11 w-11 cursor-pointer items-center justify-center text-ink lg:hidden"
          >
            <span className="relative block h-3 w-6" aria-hidden="true">
              <motion.span
                className="absolute left-0 block h-px w-full bg-current"
                animate={
                  menuOpen ? { top: "50%", rotate: 45 } : { top: 0, rotate: 0 }
                }
                transition={{ duration: 0.35, ease: EASE }}
              />
              <motion.span
                className="absolute left-0 block h-px w-full bg-current"
                animate={
                  menuOpen
                    ? { bottom: "50%", rotate: -45 }
                    : { bottom: 0, rotate: 0 }
                }
                transition={{ duration: 0.35, ease: EASE }}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-line bg-surface lg:hidden"
          >
            <Container className="py-8">
              <ul className="flex flex-col">
                {site.navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.04 + index * 0.04,
                      ease: EASE,
                    }}
                    className="border-b border-line last:border-b-0"
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-4 font-display text-xl font-semibold ${
                        isActive(item.href) ? "text-ink" : "text-ink/80"
                      }`}
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4 text-muted" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
                className="mt-8 space-y-3"
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[0.875rem] font-medium text-surface"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {site.primaryCta}
                </a>
                <div className="flex flex-col gap-1 pt-3 text-sm text-muted">
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
