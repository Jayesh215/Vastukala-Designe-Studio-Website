"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "./ProjectCard";
import { matchesFilter, projectFilters, type ProjectFilter } from "@/content/projects";
import type { Project } from "@/content/types";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Projects grid with category and status filters. */
export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const visible = useMemo(
    () => projects.filter((project) => matchesFilter(project, filter)),
    [projects, filter],
  );

  const countFor = (value: ProjectFilter) =>
    projects.filter((project) => matchesFilter(project, value)).length;

  return (
    <section className="bg-ivory py-16 md:py-24">
      <Container>
        <div
          role="tablist"
          aria-label="Filter projects"
          className="flex flex-wrap items-center gap-2.5 border-b border-charcoal/10 pb-8"
        >
          {projectFilters.map((value) => {
            const isActive = filter === value;
            const count = countFor(value);

            return (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={isActive}
                disabled={count === 0}
                onClick={() => setFilter(value)}
                className={`label cursor-pointer rounded-full border px-4.5 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:cursor-not-allowed disabled:opacity-35 ${
                  isActive
                    ? "border-olive bg-olive text-ivory"
                    : "border-charcoal/15 text-charcoal/60 hover:border-charcoal/40 hover:text-charcoal"
                }`}
              >
                {value}
                <span
                  className={`ml-2 text-[0.625rem] ${
                    isActive ? "text-ivory/60" : "text-charcoal/35"
                  }`}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <p className="label mt-8 text-charcoal/45" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
          {filter !== "All" && ` in ${filter}`}
        </p>

        <motion.div
          layout
          className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.06, 0.4),
                  ease: EASE,
                }}
                className="h-full"
              >
                <ProjectCard project={project} priority={index < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="py-20 text-center font-display text-2xl text-charcoal/50">
            No projects in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
}
