import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/content/images";
import { site } from "@/content/site";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-charcoal py-32">
      <Image
        src={images.facadeConcrete}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal/90"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <Eyebrow tone="light" className="mb-7">
            Error 404
          </Eyebrow>
          <h1 className="text-display-2 text-ivory">
            This space doesn&apos;t exist.
          </h1>
          <p className="mt-7 text-lead text-ivory/70">
            The page you were looking for has moved or was never built. Let&apos;s
            get you back to something solid.
          </p>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="light" size="lg" className="label" arrow>
              Back to Home
            </Button>
            <Button
              href="/projects"
              variant="outlineLight"
              size="lg"
              className="label"
              arrow
            >
              View Projects
            </Button>
          </div>

          <p className="mt-12 text-sm text-ivory/45">
            Or reach us directly on {site.contact.phoneDisplay}.
          </p>
        </div>
      </Container>
    </section>
  );
}
