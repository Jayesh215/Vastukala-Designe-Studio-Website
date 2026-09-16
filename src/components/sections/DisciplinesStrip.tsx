import { Marquee } from "@/components/motion/Marquee";
import { site } from "@/content/site";

/** Live scrolling strip of disciplines directly beneath the hero. */
export function DisciplinesStrip() {
  return (
    <section
      className="border-y border-line bg-canvas py-5 md:py-6"
      aria-label="Disciplines"
    >
      <Marquee duration={28} gap="0">
        {site.disciplines.map((discipline) => (
          <span
            key={discipline}
            className="flex items-center gap-8 px-4 text-[0.8125rem] tracking-[-0.01em] text-muted md:gap-10 md:px-6 md:text-[0.875rem]"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-ink/35" aria-hidden="true" />
            {discipline}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
