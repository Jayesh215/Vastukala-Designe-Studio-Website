import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/content/projects";

/** Home page project grid — first project spans the full width. */
export function FeaturedProjects() {
  const [lead, ...rest] = featuredProjects;

  return (
    <section className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          heading={"Designed spaces.\nReal stories."}
          description="Explore a selection of spaces designed with purpose, personality and attention to detail."
          layout="split"
          action={
            <Button href="/projects" variant="outline" arrow>
              View All Projects
            </Button>
          }
        />

        <div className="mt-16 md:mt-20">
          {lead && (
            <RevealGroup>
              <RevealItem>
                <ProjectCard project={lead} variant="feature" />
              </RevealItem>
            </RevealGroup>
          )}

          <RevealGroup
            stagger={0.12}
            className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            {rest.map((project) => (
              <RevealItem key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
