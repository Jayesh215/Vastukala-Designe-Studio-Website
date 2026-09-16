import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";
import { formatInsightDate } from "@/content/insights";
import type { Insight } from "@/content/types";

interface InsightCardProps {
  insight: Insight;
  variant?: "default" | "feature" | "compact";
}

export function InsightCard({
  insight,
  variant = "default",
}: InsightCardProps) {
  if (variant === "compact") {
    return (
      <article className="group">
        <Link
          href={`/insights/${insight.slug}`}
          className="flex items-start justify-between gap-6 py-5"
        >
          <div>
            <p className="text-[0.8125rem] text-muted">
              {formatInsightDate(insight.date)}
              <span className="mx-1.5 text-muted/50">·</span>
              {insight.category}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-muted md:text-xl">
              {insight.title}
            </h3>
          </div>
          <ArrowUpRight className="mt-5 h-4 w-4 shrink-0 text-muted transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </article>
    );
  }

  const isFeature = variant === "feature";

  return (
    <article className="group h-full">
      <Link href={`/insights/${insight.slug}`} className="flex h-full flex-col">
        <div
          className={`relative overflow-hidden rounded-[10px] bg-surface-dim ${
            isFeature ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={insight.coverImage}
            alt={insight.coverAlt}
            fill
            sizes={
              isFeature
                ? "(max-width: 1024px) 100vw, 58vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
          />
          <span className="label absolute top-4 left-4 rounded-[8px] bg-canvas/95 px-3 py-1.5 text-ink">
            {insight.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col pt-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
          <p className="text-[0.8125rem] text-muted">
            {formatInsightDate(insight.date)}
            <span className="mx-1.5 text-muted/50">·</span>
            {insight.readingTime}
          </p>
          <h3
            className={`mt-3 font-semibold text-ink transition-colors duration-300 group-hover:text-muted ${
              isFeature ? "text-display-4" : "text-lg md:text-xl"
            }`}
          >
            {insight.title}
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
            {insight.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-ink">
            Read Article
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
