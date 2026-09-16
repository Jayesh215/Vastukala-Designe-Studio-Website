"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/icons";
import { site } from "@/content/site";
import { images } from "@/content/images";

const EASE = [0.22, 1, 0.36, 1] as const;

const quote =
  "Good architecture is about more than just buildings — it's about creating meaningful experiences.";

const sketchMeta = [
  { label: "NORTH-EAST ELEVATION & SECTION", value: "SCALE 1:50" },
  { label: "LEVEL 0", value: "+18.50m" },
  { label: "INTERNAL VOID", value: "SECTION AA" },
  { label: "LOUVER SYSTEM", value: "TYP. L1" },
];

function RotatingTimber({
  className = "",
  sizes,
}: {
  className?: string;
  sizes: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative ${className}`} style={{ perspective: "1400px" }}>
      {/* Turntable shadow */}
      <div
        className="pointer-events-none absolute bottom-[6%] left-1/2 h-6 w-[55%] -translate-x-1/2 rounded-[100%] bg-ink/15 blur-md"
        aria-hidden="true"
      />

      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          reduce
            ? { rotateY: -12 }
            : { rotateY: [-22, 22, -22], rotateX: [2, 4, 2] }
        }
        transition={
          reduce
            ? undefined
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <Image
          src={images.timberModel}
          alt="Timber louver architectural massing model"
          fill
          priority
          sizes={sizes}
          className="object-contain drop-shadow-[0_28px_50px_rgba(17,17,17,0.22)]"
        />
      </motion.div>
    </div>
  );
}

/**
 * ALTURA-inspired hero card:
 * light drafting board · engineering sketch plate · rotating timber model.
 */
export function Hero() {
  return (
    <section className="flex h-svh flex-col bg-surface pt-[4.5rem] md:pt-[5rem]">
      <Container className="relative flex min-h-0 flex-1 flex-col pb-8 pt-3 sm:pb-10 md:pb-12 md:pt-4">
        <motion.div
          className="relative min-h-0 flex-1 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-[#E6E6E4] sm:rounded-[2.25rem] md:rounded-[2.75rem]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Fine drafting grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(17,17,17,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.07) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Corner registration marks */}
          {(
            [
              "top-5 left-5 md:top-7 md:left-7",
              "top-5 right-5 md:top-7 md:right-7",
              "bottom-5 left-5 md:bottom-7 md:left-7",
              "right-5 bottom-5 md:right-7 md:bottom-7",
            ] as const
          ).map((pos) => (
            <span
              key={pos}
              className={`pointer-events-none absolute hidden h-1.5 w-1.5 bg-ink sm:block ${pos}`}
              aria-hidden="true"
            />
          ))}

          <div className="relative z-10 grid h-full min-h-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            {/* LEFT — brand mark, quote, engineering sketch row */}
            <div className="flex min-h-0 flex-col justify-between gap-8 px-6 py-8 sm:px-9 sm:py-10 md:px-11 md:py-11 lg:px-12 lg:py-12">
              <div className="max-w-lg">
                <motion.div
                  className="flex flex-col items-start gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <span className="font-display text-[clamp(3.25rem,7vw,5.25rem)] font-semibold leading-none tracking-[-0.05em] text-ink">
                    V
                  </span>
                  <span className="h-1.5 w-1.5 bg-ink" aria-hidden="true" />
                </motion.div>

                <motion.h1
                  className="mt-7 max-w-md font-display text-[clamp(1.25rem,2.4vw,1.85rem)] font-medium leading-[1.35] tracking-[-0.02em] text-ink"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
                >
                  {quote}
                </motion.h1>

                <motion.p
                  className="mt-4 max-w-sm text-[0.875rem] leading-relaxed text-ink/55"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.16, ease: EASE }}
                >
                  {site.tagline} Architecture and interiors by {site.shortName},
                  designed around how you live.
                </motion.p>

                <motion.div
                  className="mt-7"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
                >
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-ink py-2 pr-2 pl-5 text-[0.875rem] font-medium text-surface transition-transform duration-300 hover:scale-[1.02]"
                  >
                    Explore Our Work
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              </div>

              {/* Engineering architect sketch plate */}
              <motion.div
                className="relative mt-auto"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28, ease: EASE }}
              >
                <div className="relative border border-ink/20 bg-[#DCDCD9]/30 p-3 sm:p-4">
                  {/* Frame ticks */}
                  <span
                    className="absolute top-0 left-0 h-2 w-2 -translate-x-px -translate-y-px border-t border-l border-ink"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute top-0 right-0 h-2 w-2 translate-x-px -translate-y-px border-t border-r border-ink"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute bottom-0 left-0 h-2 w-2 -translate-x-px translate-y-px border-b border-l border-ink"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute right-0 bottom-0 h-2 w-2 translate-x-px translate-y-px border-r border-b border-ink"
                    aria-hidden="true"
                  />

                  <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
                    {sketchMeta.map((item) => (
                      <p
                        key={item.label}
                        className="font-mono text-[0.5625rem] tracking-[0.1em] text-ink/50 uppercase sm:text-[0.625rem]"
                      >
                        <span className="text-ink/75">{item.label}</span>
                        <span className="mx-1.5 text-ink/25">—</span>
                        {item.value}
                      </p>
                    ))}
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#D4D4D1]">
                    <Image
                      src={images.elevationSketch}
                      alt="North-east elevation and section engineering sketch"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 44vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div
                    className="mt-3 flex items-center gap-2"
                    aria-hidden="true"
                  >
                    <span className="h-px flex-1 bg-ink/30" />
                    <span className="font-mono text-[0.5625rem] tracking-[0.14em] text-ink/45 uppercase">
                      Graphics · Engineering · Architect Sketch
                    </span>
                    <span className="h-px flex-1 bg-ink/30" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — rotating wooden design */}
            <motion.div
              className="relative hidden min-h-0 border-l border-ink/15 lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: EASE }}
            >
              <div className="absolute inset-0 flex items-center justify-center px-4 py-8">
                <RotatingTimber
                  className="h-[min(72vh,38rem)] w-[min(100%,20rem)]"
                  sizes="20rem"
                />
              </div>
              <p className="absolute right-7 bottom-7 font-mono text-[0.5625rem] tracking-[0.16em] text-ink/35 uppercase">
                Timber louver model · rotating study
              </p>
            </motion.div>

            {/* Mobile timber */}
            <div className="relative flex justify-center border-t border-ink/10 px-6 py-8 lg:hidden">
              <RotatingTimber className="h-64 w-44 sm:h-72 sm:w-52" sizes="13rem" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
