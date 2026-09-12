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
  /* Compact row used in the home teaser list and related-article footers */
  if (variant === "compact") {
    return (
      <article className="group">
        <Link
          href={`/insights/${insight.slug}`}
          className="flex items-start justify-between gap-6 py-6"
        >
          <div>
            <p className="label text-brown">
              {formatInsightDate(insight.date)} — {insight.category}
            </p>
            <h3 className="mt-3 font-display text-xl leading-snug text-charcoal transition-colors duration-500 group-hover:text-olive md:text-2xl">
              {insight.title}
            </h3>
          </div>
          <ArrowUpRight className="mt-6 h-4 w-4 shrink-0 text-brown transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </article>
    );
  }

  const isFeature = variant === "feature";

  return (
    <article className="group h-full">
      <Link href={`/insights/${insight.slug}`} className="flex h-full flex-col">
        <div
          className={`relative overflow-hidden bg-sand ${
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
            className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <span className="label absolute top-5 left-5 rounded-full bg-ivory/92 px-3.5 py-1.5 text-charcoal">
            {insight.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col pt-6">
          <p className="label text-brown">
            {formatInsightDate(insight.date)} — {insight.readingTime}
          </p>
          <h3
            className={`mt-4 text-charcoal transition-colors duration-500 group-hover:text-olive ${
              isFeature ? "text-display-3" : "text-display-4"
            }`}
          >
            {insight.title}
          </h3>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-charcoal/60">
            {insight.excerpt}
          </p>
          <span className="label mt-6 inline-flex items-center gap-2 text-olive">
            Read Article
            <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
