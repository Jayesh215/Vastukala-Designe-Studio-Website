"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/content/projects";
import type { Project } from "@/content/types";
import { ArrowUpRight } from "@/components/ui/icons";

const EASE: [number, number, number, number] = [0.12, 0.23, 0.5, 1];
const ROTATE_MS = 3800;

/** Home page project showcase — auto coverflow rotation. */
export function FeaturedProjects() {
  const projects = featuredProjects;
  const reduce = useReducedMotion();
  const count = projects.length;

  return (
    <section className="border-t border-line bg-canvas py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          heading={"Designed spaces.\nReal stories."}
          description="Explore a selection of spaces designed with purpose, personality and attention to detail."
          layout="centered"
          action={
            <Button href="/projects" variant="outline" arrow>
              View All Projects
            </Button>
          }
        />

        {reduce || count === 0 ? (
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <ProjectCoverflow projects={projects} />
        )}
      </Container>
    </section>
  );
}

function ProjectCoverflow({ projects }: { projects: Project[] }) {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  /** Shortest signed offset around the ring (−2 … +2 for a 5-up row). */
  const relativeOffset = (index: number) => {
    let diff = index - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  const cardW = 200;
  const step = 178;

  return (
    <div
      className="relative mx-auto mt-14 h-[min(92vw,500px)] w-full max-w-[1100px] md:mt-16"
      style={{ perspective: "1400px" }}
      aria-label="Featured projects rotating showcase"
      aria-live="polite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="absolute inset-0">
        {projects.map((project, index) => {
          const offset = relativeOffset(index);
          const abs = Math.abs(offset);
          /* Keep five cards in the row (−2 … +2). */
          if (abs > 2) return null;

          const shiftX = offset * step;
          const rotateY = offset * -7;
          const scale = abs === 0 ? 1 : abs === 1 ? 0.9 : 0.8;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.92 : 0.75;
          const zIndex = abs === 0 ? 40 : 30 - abs;

          return (
            <motion.div
              key={project.slug}
              className="absolute top-1/2 left-1/2 will-change-transform"
              style={{
                width: cardW,
                zIndex,
                marginLeft: -cardW / 2,
                marginTop: -175,
                pointerEvents: "auto",
              }}
              initial={false}
              animate={{
                x: shiftX,
                y: 0,
                rotateY,
                scale,
                opacity,
              }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <div className="overflow-hidden rounded-[12px] bg-canvas shadow-[0_28px_60px_-30px_rgba(44,34,24,0.4)] [backface-visibility:hidden] [transform-style:flat]">
                <OrbitProjectCard
                  project={project}
                  featured={abs === 0}
                  onActivate={
                    abs === 0
                      ? undefined
                      : (event) => {
                          event.preventDefault();
                          setActive(index);
                        }
                  }
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Featured project"
      >
        {projects.map((project, index) => {
          const isActive = index === active;
          return (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Show ${project.name}`}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.12,0.23,0.5,1)] ${
                isActive ? "w-8 bg-ink" : "w-1.5 bg-ink/25 hover:bg-ink/45"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

/** Compact card — image and copy are one unit that moves together. */
function OrbitProjectCard({
  project,
  featured = false,
  onActivate,
}: {
  project: Project;
  featured?: boolean;
  onActivate?: (event: MouseEvent) => void;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col"
      onClick={onActivate}
      tabIndex={featured ? 0 : -1}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-dim">
        <Image
          src={project.heroImage}
          alt={project.heroAlt}
          fill
          priority={featured}
          sizes="220px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.12,0.23,0.5,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex items-start justify-between gap-2 px-3.5 pt-3 pb-3.5">
        <div className="min-w-0">
          <p className="truncate text-[0.7rem] text-muted">
            {project.categories[0]}
            <span className="mx-1.5 text-muted/50">·</span>
            {project.year}
          </p>
          <h3 className="mt-1 truncate text-base font-semibold text-ink">
            {project.name}
          </h3>
          <p className="mt-0.5 truncate text-[0.7rem] text-muted">
            {project.location}
          </p>
        </div>
        <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
