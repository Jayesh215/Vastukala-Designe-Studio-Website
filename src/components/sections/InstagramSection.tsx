import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { InstagramIcon } from "@/components/ui/icons";
import { instagramPosts, instagramSection } from "@/content/instagram";
import { site } from "@/content/site";

/**
 * Curated Instagram grid. Images are managed in `src/content/instagram.ts` —
 * nothing here claims to be a live feed.
 */
export function InstagramSection() {
  return (
    <section className="border-t border-line bg-canvas py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={site.contact.instagramHandle}
          heading={instagramSection.heading}
          description={instagramSection.description}
          layout="centered"
          action={
            <Button
              href={site.contact.instagramUrl}
              variant="outline"
              icon={<InstagramIcon className="h-4 w-4" />}
              arrow="up-right"
            >
              {instagramSection.cta}
            </Button>
          }
        />

        <RevealGroup
          as="ul"
          stagger={0.06}
          className="mt-12 grid grid-cols-2 gap-2 md:mt-14 md:grid-cols-4 md:gap-3"
        >
          {instagramPosts.map((post) => (
            <RevealItem as="li" key={post.image + post.caption}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-[10px] bg-surface-dim"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 flex items-end bg-ink/0 p-4 transition-colors duration-500 group-hover:bg-ink/50">
                  <p className="translate-y-3 text-[0.8125rem] leading-snug text-canvas opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                    {post.caption}
                  </p>
                </div>
                <InstagramIcon className="absolute top-4 right-4 h-4 w-4 text-canvas opacity-0 transition-opacity duration-400 group-hover:opacity-90" />
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
