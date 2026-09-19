"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/content/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Insights", href: "/insights" },
];

/** ArcGrid floating pill nav — matches Framer ArcGrid chrome. */
export function ArcHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 md:pt-5">
      <div className="pointer-events-auto flex w-full max-w-[920px] items-center gap-1 rounded-full bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <div className="flex shrink-0 items-center gap-2 rounded-full px-3 py-2 md:px-4">
          <Logo tone="dark" size="header" />
        </div>

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center rounded-full bg-[#2C2218] px-1 py-1 lg:flex"
        >
          <ul className="flex items-center gap-0.5">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300 ${
                      active
                        ? "bg-white/15 text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-instrument), sans-serif" }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#2C2218] transition-transform duration-300 hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-instrument), sans-serif" }}
          >
            Contact Us
            <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#2C2218] text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
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
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="pointer-events-auto absolute inset-x-3 top-[4.5rem] rounded-[24px] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-4 py-3 text-base font-medium text-[#2C2218] hover:bg-[#2C2218]/5"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#2C2218] px-4 py-3.5 text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Contact Us →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
