"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;
/** Minimum time the logo stage is visible before exit. */
const MIN_VISIBLE_MS = 1600;
/** Hard cap so the overlay never blocks the site. */
const MAX_VISIBLE_MS = 3200;

/**
 * Full-screen logo intro on every full page load / refresh.
 * Soft client navigations keep the root layout mounted, so the loader
 * does not replay on in-app link clicks.
 */
export function LogoLoader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(false);
      return;
    }

    const started = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - started));
      window.setTimeout(() => setVisible(false), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const failsafe = window.setTimeout(finish, MAX_VISIBLE_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(failsafe);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="logo-loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label={`Loading ${site.name}`}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.55, ease: EASE },
          }}
        >
          <div className="flex flex-col items-center gap-8 px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Image
                src={site.logo.src}
                alt=""
                width={site.logo.width}
                height={site.logo.height}
                priority
                className="h-14 w-auto object-contain sm:h-16 md:h-[4.5rem]"
              />
            </motion.div>

            <motion.div
              className="h-px w-24 overflow-hidden bg-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              aria-hidden="true"
            >
              <motion.span
                className="block h-full w-full origin-left bg-ink"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 1.05, ease: EASE }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
