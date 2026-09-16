"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { InsightCard } from "./InsightCard";
import { insightCategories } from "@/content/insights";
import type { Insight, InsightCategory } from "@/content/types";

const EASE = [0.22, 1, 0.36, 1] as const;

type Filter = "All" | InsightCategory;

/** Article grid with category filters. */
export function InsightsExplorer({ insights }: { insights: Insight[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  // Only show chips that actually have articles behind them.
  const available = useMemo(
    () =>
      insightCategories.filter(
        (category) =>
          category === "All" ||
          insights.some((insight) => insight.category === category),
      ),
    [insights],
  );

  const visible = useMemo(
    () =>
      filter === "All"
        ? insights
        : insights.filter((insight) => insight.category === filter),
    [insights, filter],
  );

  const [lead, ...rest] = visible;

  return (
    <section className="bg-canvas py-16 md:py-24">
      <Container>
        <div
          role="tablist"
          aria-label="Filter articles by category"
          className="flex flex-wrap items-center gap-2.5 border-b border-line pb-8"
        >
          {available.map((category) => {
            const isActive = filter === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(category)}
                className={`label cursor-pointer rounded-[10px] border px-4.5 py-2.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "border-ink bg-ink text-canvas"
                    : "border-line text-ink/60 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mt-12"
          >
            {lead && (
              <div className="lg:max-w-4xl">
                <InsightCard insight={lead} variant="feature" />
              </div>
            )}

            {rest.length > 0 && (
              <div className="mt-16 grid gap-x-8 gap-y-14 border-t border-line pt-16 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((insight) => (
                  <InsightCard key={insight.slug} insight={insight} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
