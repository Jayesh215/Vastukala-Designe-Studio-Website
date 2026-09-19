"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useSpring,
  useMotionValue,
} from "framer-motion";
import type { Project } from "@/content/types";

const EASE: [number, number, number, number] = [0.8, 0, 0.24, 1];
const SPRING = { type: "spring" as const, stiffness: 120, damping: 18, mass: 0.8 };
const INK = "#2C2218";
const CREAM = "#E8E0D6";
const PAPER = "#F2EDE7";

/** Magnetic circular VIEW cursor — Framer Projects BIG CMS Card hover. */
function ViewCursor({
  active,
  x,
  y,
}: {
  active: boolean;
  x: number;
  y: number;
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(x);
  const my = useMotionValue(y);
  const sx = useSpring(mx, { stiffness: 280, damping: 28, mass: 0.45 });
  const sy = useSpring(my, { stiffness: 280, damping: 28, mass: 0.45 });

  useEffect(() => {
    mx.set(x);
    my.set(y);
  }, [x, y, mx, my]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute z-20 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#2C2218]/10 bg-[#F2EDE7]/72 text-[11px] font-semibold tracking-[0.14em] text-[#2C2218] shadow-[0_8px_28px_rgba(44,34,24,0.12)] backdrop-blur-md"
      style={{ left: sx, top: sy }}
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        scale: active ? 1 : 0.6,
      }}
      transition={reduce ? { duration: 0 } : { duration: 0.25, ease: EASE }}
    >
      VIEW
    </motion.div>
  );
}

/**
 * Full-screen project information screen — Framer `/projects/:slug` layout,
 * cream / ink theme, wipe + staggered spring enter.
 */
export function ProjectInfoScreen({
  project,
  index,
  open,
  onClose,
}: {
  project: Project | null;
  index: number;
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const gallery = (project?.gallery ?? []).slice(0, 3);
  const body = [
    ...(project?.brief ?? []),
    ...(project?.designConcept ?? []),
    ...(project?.designApproach ?? []).slice(0, 1),
  ].slice(0, 4);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[80] overflow-y-auto"
          style={{ backgroundColor: CREAM }}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
          initial={
            reduce
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  clipPath: "inset(100% 0% 0% 0%)",
                }
          }
          animate={
            reduce
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  clipPath: "inset(0% 0% 0% 0%)",
                }
          }
          exit={
            reduce
              ? { opacity: 0 }
              : {
                  clipPath: "inset(0% 0% 100% 0%)",
                  transition: { duration: 0.55, ease: EASE },
                }
          }
          transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : 0.05 }}
        >
          <div className="paper-surface min-h-full">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 pt-6 md:pt-8">
              <p className="text-[13px] font-medium tracking-wide text-[#2C2218]/50">
                Project {String(index + 1).padStart(2, "0")}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2C2218] text-lg text-[#E8E0D6] transition-transform hover:scale-[1.04]"
                aria-label="Close project"
              >
                ×
              </button>
            </div>

            <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-20 md:pt-12 md:pb-28">
              {/* Header: title + desc + meta | banner */}
              <motion.div
                className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { ...SPRING, delay: 0.25 }
                }
              >
                <div className="lg:col-span-5">
                  <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-[#2C2218]">
                    {project.name}
                  </h2>

                  <div
                    className="mt-7 flex gap-4 rounded-[8px] p-5"
                    style={{ backgroundColor: PAPER }}
                  >
                    <span
                      className="mt-1 w-[3px] shrink-0 self-stretch rounded-full"
                      style={{ backgroundColor: INK }}
                      aria-hidden="true"
                    />
                    <p className="text-[15px] leading-relaxed text-[#2C2218]/75">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="mt-7 h-px w-[min(100%,350px)] bg-[#2C2218]/15" />

                  <div className="mt-5 space-y-3 text-[15px] text-[#2C2218]/70">
                    <p className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="text-sm">
                        ⌗
                      </span>
                      {project.categories[0]}
                    </p>
                    <p className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="text-sm">
                        ◎
                      </span>
                      {project.location} · {project.year}
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[16/11] overflow-hidden rounded-[8px] bg-[#2C2218]/5 lg:col-span-7 lg:aspect-auto lg:h-[400px]">
                  <Image
                    src={project.heroImage}
                    alt={project.heroAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-6"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduce ? { duration: 0 } : { ...SPRING, delay: 0.4 }
                }
              >
                {(gallery.length
                  ? gallery
                  : [
                      {
                        src: project.heroImage,
                        alt: project.heroAlt,
                      },
                    ]
                ).map((image, i) => (
                  <div
                    key={`${image.src}-${i}`}
                    className="relative aspect-square overflow-hidden rounded-[24px] bg-[#2C2218]/5 sm:h-[350px] sm:aspect-auto"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Long content */}
              <motion.div
                className="mx-auto mt-14 max-w-3xl space-y-6"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduce ? { duration: 0 } : { ...SPRING, delay: 0.55 }
                }
              >
                {body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-[15px] leading-relaxed text-[#2C2218]/75 md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              <motion.div
                className="mt-14 flex justify-center"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduce ? { duration: 0 } : { ...SPRING, delay: 0.65 }
                }
              >
                <Link
                  href="/projects"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2C2218] px-6 py-3.5 text-[13px] font-medium text-[#E8E0D6] transition-transform hover:scale-[1.02]"
                >
                  See More Projects <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Framer work-list card with magnetic VIEW → info screen. */
export function ProjectWorkCard({
  project,
  index,
  onView,
  stacked = false,
}: {
  project: Project;
  index: number;
  onView: () => void;
  /** Full-viewport sticky stack panel (next slide overlaps this one). */
  stacked?: boolean;
}) {
  const reduce = useReducedMotion();
  const areaRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const onMove = useCallback((event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }, []);

  return (
    <article
      className={`grid w-full overflow-hidden bg-[#E8E0D6] shadow-[0_-12px_40px_rgba(44,34,24,0.08)] ${
        stacked
          ? "min-h-[100svh] md:h-[100svh] md:min-h-0 md:grid-cols-[minmax(240px,28vw)_1fr]"
          : "md:min-h-[640px] lg:min-h-[800px] md:grid-cols-[280px_1fr]"
      }`}
    >
      <div
        className="flex flex-col p-5 md:p-6 lg:p-8"
        style={{ backgroundColor: PAPER }}
      >
        <p className="font-display text-2xl font-semibold text-[#2C2218]/35 md:text-4xl lg:text-5xl">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#2C2218] md:text-3xl lg:text-[2.15rem]">
          {project.name}
        </h3>
        <p className="mt-auto pt-8 text-[15px] leading-relaxed text-[#2C2218]/70">
          {project.shortDescription}
        </p>
        <p className="mt-6 text-sm text-[#2C2218]/45">{project.year}</p>
      </div>

      <div
        ref={areaRef}
        className={`relative cursor-none overflow-hidden bg-[#2C2218]/5 ${
          stacked ? "min-h-[55svh] md:min-h-0" : "min-h-[280px] md:min-h-0"
        }`}
        onMouseEnter={() => !reduce && setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={onMove}
      >
        <Image
          src={project.heroImage}
          alt={project.heroAlt}
          fill
          sizes={stacked ? "100vw" : "(max-width: 768px) 100vw, 75vw"}
          className="object-cover"
          priority={index === 0}
        />
        <span
          className="absolute top-5 right-5 z-10 rounded-[8px] px-4 py-2 text-xs font-medium text-[#2C2218] shadow-sm md:top-10 md:right-10"
          style={{ backgroundColor: "#fff" }}
        >
          {project.categories[0]}
        </span>

        {!reduce && (
          <ViewCursor active={hovering} x={cursor.x} y={cursor.y} />
        )}

        <button
          type="button"
          onClick={onView}
          className="absolute inset-0 z-30 cursor-none bg-transparent"
          aria-label={`View ${project.name}`}
        />

        {reduce && (
          <button
            type="button"
            onClick={onView}
            className="absolute bottom-5 left-5 z-40 rounded-full bg-[#F2EDE7]/90 px-5 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-[#2C2218]"
          >
            VIEW
          </button>
        )}
      </div>
    </article>
  );
}
