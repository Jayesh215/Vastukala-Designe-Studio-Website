"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowUpRight, WhatsAppIcon } from "@/components/ui/icons";

/**
 * Persistent WhatsApp bar pinned to the bottom of small viewports.
 * Appears once the visitor scrolls past the hero.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 lg:hidden"
          style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="label flex w-full items-center justify-center gap-2.5 rounded-full bg-olive px-6 py-4 text-ivory shadow-[0_10px_40px_-12px_rgba(32,33,30,0.55)]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {site.primaryCta}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
