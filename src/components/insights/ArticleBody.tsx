import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { InsightBlock } from "@/content/types";

/** Renders an article from its content blocks. */
export function ArticleBody({ blocks }: { blocks: InsightBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "heading":
            return (
              <Reveal key={key} y={18}>
                <h2 className="pt-8 font-display text-[clamp(1.5rem,2.4vw,2.125rem)] leading-tight text-ink">
                  {block.text}
                </h2>
              </Reveal>
            );

          case "paragraph":
            return (
              <Reveal key={key} y={16}>
                <p className="text-[1.0625rem] leading-[1.8] text-ink/78">
                  {block.text}
                </p>
              </Reveal>
            );

          case "list":
            return (
              <Reveal key={key} y={16}>
                <ul className="space-y-3 border-l border-line pl-6">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="text-[1.0625rem] leading-relaxed text-ink/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );

          case "quote":
            return (
              <Reveal key={key} y={16}>
                <blockquote className="my-10 border-t border-b border-line py-8">
                  <p className="font-display text-[clamp(1.375rem,2.4vw,1.875rem)] leading-snug text-ink">
                    {block.text}
                  </p>
                </blockquote>
              </Reveal>
            );

          case "image":
            return (
              <Reveal key={key} y={20}>
                <figure className="my-12">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-dim">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 75vw"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="mt-4 text-sm text-ink/50">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
