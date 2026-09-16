import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center border-b border-line bg-canvas py-28">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow className="mb-5 justify-center">Error 404</Eyebrow>
          <h1 className="text-display-2 font-semibold text-ink">
            This space doesn&apos;t exist.
          </h1>
          <p className="mt-5 text-lead text-muted">
            The page you were looking for has moved or was never built. Let&apos;s
            get you back to something solid.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/" variant="solid" size="lg" arrow>
              Back to Home
            </Button>
            <Button href="/projects" variant="outline" size="lg" arrow>
              View Projects
            </Button>
          </div>

          <p className="mt-10 text-sm text-muted">
            Or reach us directly on {site.contact.phoneDisplay}.
          </p>
        </div>
      </Container>
    </section>
  );
}
