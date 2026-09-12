import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

/** Quiet strip of disciplines directly beneath the hero. */
export function DisciplinesStrip() {
  return (
    <section className="border-b border-charcoal/10 bg-ivory">
      <Container className="py-7">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between md:gap-x-4">
          {site.disciplines.map((discipline) => (
            <li key={discipline} className="label text-charcoal/45">
              {discipline}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
