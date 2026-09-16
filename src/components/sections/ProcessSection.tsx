import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProcessTimeline } from "./ProcessTimeline";
import { processSteps } from "@/content/process";

/** Home page process overview — the full version lives on /process. */
export function ProcessSection() {
  return (
    <section className="border-t border-line bg-canvas py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          heading={"From idea to space."}
          description="Six clear stages, so you always know what is happening, what you are approving and what comes next."
          layout="centered"
          action={
            <Button href="/process" variant="outline" arrow>
              See the Full Process
            </Button>
          }
          className="mb-14 md:mb-16"
        />
      </Container>

      <ProcessTimeline steps={processSteps} />
    </section>
  );
}
