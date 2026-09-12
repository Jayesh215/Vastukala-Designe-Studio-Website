"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { images } from "@/content/images";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowRight, WhatsAppIcon } from "@/components/ui/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

const headlineWords = ["Spaces", "Designed", "Around", "You."];

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-charcoal pt-32 pb-14 md:min-h-screen md:pb-20">
      {/* Hero image settles from 1.05 to 1 as the page loads */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <Image
          src={images.villaPool}
          alt="Contemporary villa with a still reflecting pool, deep shade and warm evening light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-charcoal/35"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-4xl">
          <motion.p
            className="label flex items-center gap-3 text-sand"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <span className="h-px w-10 bg-sand/50" aria-hidden="true" />
            {site.descriptor}
          </motion.p>

          <h1 className="mt-7 text-display-1 text-ivory">
            {/* Each word rises from behind its own mask */}
            <span className="sr-only">{site.tagline}</span>
            <span aria-hidden="true" className="flex flex-wrap gap-x-[0.28em]">
              {headlineWords.map((word, index) => (
                <span
                  key={word}
                  className="block overflow-hidden pb-[0.06em]"
                >
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.1,
                      delay: 0.3 + index * 0.09,
                      ease: EASE,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            className="mt-8 max-w-2xl text-lead text-ivory/75"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.75, ease: EASE }}
          >
            We create thoughtful architectural and interior spaces that bring
            together functionality, character and timeless design — shaped
            around the people who live, work and experience them.
          </motion.p>

          <motion.div
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.92, ease: EASE }}
          >
            <Button
              href={whatsappLink()}
              variant="light"
              size="lg"
              className="label"
              icon={<WhatsAppIcon className="h-4 w-4" />}
            >
              Start Your Project
            </Button>
            <Button
              href="/projects"
              variant="outlineLight"
              size="lg"
              className="label"
              arrow
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>

        <motion.a
          href="#studio"
          className="label mt-16 hidden items-center gap-3 text-ivory/50 transition-colors duration-500 hover:text-ivory md:inline-flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <span className="relative flex h-10 w-px overflow-hidden bg-ivory/25">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-ivory"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
          Scroll to explore
          <ArrowRight className="h-3 w-3 rotate-90" />
        </motion.a>
      </Container>
    </section>
  );
}
