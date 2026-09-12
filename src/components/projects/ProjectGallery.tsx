import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { GalleryImage } from "@/content/types";

/**
 * Editorial gallery. Landscape images span both columns, portrait images take
 * one. Everything below the first row is lazy-loaded by next/image default.
 */
export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 md:gap-4">
      {images.map((image, index) => {
        const isWide = image.orientation === "landscape";

        return (
          <Reveal
            key={`${image.src}-${index}`}
            delay={(index % 2) * 0.08}
            className={isWide ? "md:col-span-2" : ""}
          >
            <figure
              className={`group relative overflow-hidden bg-sand ${
                isWide ? "aspect-[16/9]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  isWide
                    ? "(max-width: 768px) 100vw, 80vw"
                    : "(max-width: 768px) 100vw, 40vw"
                }
                className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
            </figure>
          </Reveal>
        );
      })}
    </div>
  );
}
