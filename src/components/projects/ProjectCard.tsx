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
          className={`relative overflow-hidden bg-sand ${
            isFeature ? "aspect-[4/3] lg:aspect-[16/10]" : "aspect-[4/5]"
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
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-95"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
            <span className="label rounded-full bg-ivory/90 px-3.5 py-1.5 text-charcoal">
              {project.categories[0]}
            </span>
            <span
              className={`label rounded-full px-3.5 py-1.5 ${
                project.status === "Ongoing"
                  ? "bg-brown text-ivory"
                  : "bg-olive text-ivory"
              }`}
            >
              {project.status}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
            <p className="label text-ivory/85">
              {project.location} — {project.year}
            </p>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory text-charcoal opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col pt-6">
          <h3
            className={`text-charcoal ${isFeature ? "text-display-3" : "text-display-4"}`}
          >
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-charcoal/60">
            {project.shortDescription}
          </p>
          <p className="label mt-5 text-brown">{project.projectType}</p>
        </div>
      </Link>
    </article>
  );
}
