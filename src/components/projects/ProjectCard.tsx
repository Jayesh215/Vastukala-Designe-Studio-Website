import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";
import type { Project } from "@/content/types";

interface ProjectCardProps {
  project: Project;
  /** "feature" is a taller card used for the first item in a grid. */
  variant?: "default" | "feature";
  priority?: boolean;
}

/** Presentational project card. Parents handle reveal animation. */
export function ProjectCard({
  project,
  variant = "default",
  priority = false,
}: ProjectCardProps) {
  const isFeature = variant === "feature";

  return (
    <article className="group h-full">
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col">
        <div
          className={`relative overflow-hidden rounded-[10px] bg-surface-dim ${
            isFeature ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.heroImage}
            alt={project.heroAlt}
            fill
            priority={priority}
            sizes={
              isFeature
                ? "(max-width: 1024px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
          />

          {isFeature && (
            <span className="label absolute top-5 left-5 rounded-[8px] bg-canvas/95 px-3 py-1.5 text-ink">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col pt-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
          <p className="text-[0.8125rem] text-muted">
            {project.categories[0]}
            <span className="mx-1.5 text-muted/50">·</span>
            {project.year}
          </p>
          <div className="mt-2 flex items-start justify-between gap-4">
            <h3
              className={`font-semibold text-ink ${
                isFeature ? "text-display-4" : "text-lg md:text-xl"
              }`}
            >
              {project.name}
            </h3>
            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </div>
          <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
            {project.shortDescription}
          </p>
          <p className="mt-3 text-[0.8125rem] text-muted">{project.location}</p>
        </div>
      </Link>
    </article>
  );
}
