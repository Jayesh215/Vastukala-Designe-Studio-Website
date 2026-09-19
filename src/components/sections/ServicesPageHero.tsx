"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WhatsAppIcon } from "@/components/ui/icons";
import { services } from "@/content/services";
import { images } from "@/content/images";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

const EASE: [number, number, number, number] = [0.12, 0.23, 0.5, 1];

/** Cinematic services page hero — cream paper + floating media. */
export function ServicesPageHero() {
  const reduce = useReducedMotion();
  const count = services.length;

  return (
    <section className="paper-surface relative overflow-hidden border-b border-line pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-8%] h-[22rem] w-[22rem] rounded-full bg-ink/5 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Eyebrow className="mb-5">What We Do</Eyebrow>
            </motion.div>

            <h1 className="text-display-2 font-semibold text-ink">
              {["From first idea", "to final detail."].map((line, index) => (
                <span
                  key={line}
                  className="block overflow-hidden pb-[0.06em]"
                >
                  <motion.span
                    className="block"
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.75,
                      delay: 0.08 + index * 0.1,
                      ease: EASE,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mt-6 max-w-lg text-lead text-muted"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease: EASE }}
            >
              Architecture, interiors and visual design as one seamless process
              — so you always know what you are approving and what comes next.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38, ease: EASE }}
            >
              <Button
                href={whatsappLink(whatsappMessages.consultation)}
                variant="solid"
                size="lg"
                className="label"
                icon={<WhatsAppIcon className="h-4 w-4" />}
              >
                Book Consultation
              </Button>
              <a
                href="#architectural-design"
                className="text-[0.875rem] font-medium text-ink/70 underline-offset-4 transition-colors duration-300 hover:text-ink hover:underline"
              >
                Browse all {count} services
              </a>
            </motion.div>

            <motion.div
              className="mt-12 flex gap-10 border-t border-line pt-8"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48, ease: EASE }}
            >
              {[
                { value: `${count}`, label: "Services" },
                { value: "3", label: "Engagement models" },
                { value: "Pune", label: "Based & building" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-xl font-semibold text-ink md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.75rem] text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative lg:col-span-6">
            <motion.div
              className="relative mx-auto max-w-md lg:max-w-none"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-surface-dim shadow-[0_40px_90px_-48px_rgba(44,34,24,0.5)]">
                <Image
                  src={images.livingTall}
                  alt="Double-height living space with tall windows and a restrained material palette"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>

              <motion.div
                className="absolute -bottom-6 -left-4 w-[48%] overflow-hidden rounded-[12px] border border-line bg-canvas shadow-[0_24px_50px_-28px_rgba(44,34,24,0.45)] md:-left-8 md:w-[42%]"
                initial={reduce ? false : { opacity: 0, x: -24, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.4 }}
              >
                <div className="relative aspect-[5/4]">
                  <Image
                    src={images.facadeWhite}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
