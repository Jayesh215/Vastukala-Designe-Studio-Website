"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HoverMaskReveal } from "@/components/hero/HoverMaskReveal";
import {
  HERO_SPRING,
  HeroAvatars,
  HeroButton,
  HeroCaption,
  HeroHeading,
  HeroMark,
  HeroReel,
  VideoOverlay,
} from "@/components/hero/primitives";

const SERVICES = [
  "Residential Design",
  "Commercial Interiors",
  "Furniture Curation",
  "Spatial Planning",
];

export function Hero() {
  const reduce = useReducedMotion();
  const [reelOpen, setReelOpen] = useState(false);

  useEffect(() => {
    if (!reelOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReelOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [reelOpen]);

  return (
    <section className="hero-aveon paper-surface relative flex flex-col overflow-hidden min-[1350px]:min-h-svh min-[1350px]:cursor-none">
      <HoverMaskReveal
        front="/images/hero/mask-front.jpg"
        back="/images/hero/mask-back.jpg"
        size={0.12}
        strength={0.5}
        returnTime={2.8}
        edgeGrain={0.7}
        swirl={3}
        followTime={0.45}
      />

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1520px] flex-1 flex-col px-3 py-[100px] md:px-4 md:pt-[calc(5rem+16px)] md:pb-5">
        <div className="flex min-h-0 flex-1 flex-col-reverse gap-6 md:flex-col md:gap-5">
          <div className="flex min-h-0 flex-1 flex-col items-end justify-between md:gap-0 min-[1350px]:gap-[120px]">
            <div className="flex w-full flex-col md:flex-row md:items-start md:justify-between min-[1350px]:grid min-[1350px]:grid-cols-4 min-[1350px]:items-center min-[1350px]:gap-5">
              <div className="flex w-full flex-col items-center gap-12 md:flex-1 md:flex-row md:items-center md:gap-10 min-[1350px]:col-span-3 min-[1350px]:grid min-[1350px]:grid-cols-3 min-[1350px]:items-center min-[1350px]:gap-0">
                <div
                  className="order-1 h-[410px] w-full shrink-0 opacity-0 md:hidden"
                  aria-hidden="true"
                />
                <HeroReel
                  image="/images/hero/reel.jpg"
                  location="BROOKLYN, NY"
                  type="Residential"
                  onPlay={() => setReelOpen(true)}
                />
                <div
                  className="hidden min-[1350px]:order-2 min-[1350px]:block min-[1350px]:flex-1"
                  aria-hidden="true"
                />
                <div className="order-2 flex w-full flex-1 items-center justify-center gap-6 md:min-w-0 min-[1350px]:order-3">
                  <div className="flex w-full max-w-none flex-col items-start justify-center gap-7 min-[1350px]:max-w-none">
                    <HeroAvatars text="TRUSTED BY 200+ HOMEOWNERS" />
                    <motion.p
                      className="hero-body pointer-events-none m-0"
                      initial={reduce ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ ...HERO_SPRING, delay: 0.35 }}
                    >
                      Transform your space into an Avéon where luxury meets
                      livability through timeless design excellence.
                    </motion.p>
                    <HeroButton href="/services" label="Explore Services" />
                  </div>
                </div>
              </div>
              <HeroMark />
            </div>

            <motion.div
              className="pointer-events-none hidden text-right md:block"
              initial={reduce ? false : { opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={HERO_SPRING}
            >
              {SERVICES.map((item) => (
                <p key={item} className="hero-body m-0">
                  {item}
                </p>
              ))}
            </motion.div>
          </div>

          <div
            className="pointer-events-none relative h-px w-full shrink-0"
            aria-hidden="true"
          >
            <div className="absolute top-0 left-1/2 h-px w-[200vw] -translate-x-1/2 border-t border-[#DDD4C9]" />
          </div>

          <div className="flex shrink-0 flex-col items-start justify-end gap-5 md:flex-row md:items-end md:justify-between md:gap-2.5">
            <div className="flex w-full max-w-[1000px] flex-col items-start justify-center gap-5">
              <HeroCaption title="Welcome to Avéon" delay={1} />
              <HeroHeading text="spaces that tell a story" />
            </div>
            <div className="hidden md:block">
              <HeroCaption title="MORE BENEFITS" delay={1} from="bottom" />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {reelOpen ? (
          <VideoOverlay
            key="reel"
            onClose={() => setReelOpen(false)}
            src="https://www.youtube-nocookie.com/embed/8AHPXm9Y6mI"
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
