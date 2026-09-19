"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

export const HERO_SPRING = {
  type: "spring" as const,
  stiffness: 52,
  damping: 12,
  mass: 1,
};

export const HERO_TWEEN: [number, number, number, number] = [0.12, 0.23, 0.5, 1];

export function HeroCaption({
  title,
  delay = 0,
  from = "left",
}: {
  title: string;
  delay?: number;
  from?: "left" | "bottom";
}) {
  const reduce = useReducedMotion();
  const hidden = from === "left" ? { opacity: 0, x: -60 } : { opacity: 0, y: 60 };

  return (
    <motion.p
      className="hero-caption flex items-center gap-1 whitespace-nowrap"
      initial={reduce ? false : hidden}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ...HERO_SPRING, delay }}
    >
      <span className="text-[#B8845C]">[</span>
      <span>{title}</span>
      <span className="text-[#B8845C]">]</span>
    </motion.p>
  );
}

export function HeroButton({ href, label }: { href: string; label: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...HERO_SPRING, delay: 0.4 }}
    >
      <Link
        href={href}
        aria-label={label}
        className="hero-btn group relative flex w-[240px] cursor-pointer items-center justify-between border-t border-[#2C2218] px-2 py-4"
      >
        <span className="relative h-[21px] flex-1 overflow-hidden" aria-hidden="true">
          <span className="flex flex-col gap-2.5 transition-transform duration-300 ease-[cubic-bezier(0.12,0.23,0.5,1)] group-hover:-translate-y-[31px]">
            <span className="hero-btn-label block h-[21px] leading-[21px]">
              {label}
            </span>
            <span className="hero-btn-label block h-[21px] leading-[21px]">
              {label}
            </span>
          </span>
        </span>
        <span className="relative h-5 w-5 overflow-hidden">
          <span className="flex w-max -translate-x-[30px] transition-transform duration-300 ease-[cubic-bezier(0.12,0.23,0.5,1)] group-hover:translate-x-0">
            <ArrowRightBold />
            <span className="w-2.5 shrink-0" />
            <ArrowRightBold />
          </span>
        </span>
        <span className="absolute top-0 left-0 h-0.5 w-0 bg-[#B8845C] transition-[width] duration-300 ease-[cubic-bezier(0.12,0.23,0.5,1)] group-hover:w-full" />
      </Link>
    </motion.div>
  );
}

function ArrowRightBold() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 256 256"
      fill="#2C2218"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
  );
}

const AVATARS = [
  { src: "/images/hero/avatar-1.jpg", left: 0, ring: "#F2EDE7", alt: "Client" },
  {
    src: "/images/hero/avatar-badge.png",
    left: 17,
    ring: "#B8845C",
    alt: "Client",
  },
  { src: "/images/hero/avatar-3.jpg", left: 33, ring: "#F2EDE7", alt: "Client" },
  { src: "/images/hero/avatar-4.jpg", left: 50, ring: "#F2EDE7", alt: "Client" },
  { src: "/images/hero/avatar-5.jpg", left: 67, ring: "#F2EDE7", alt: "Client" },
] as const;

export function HeroAvatars({ text }: { text: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="flex items-center gap-3"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...HERO_SPRING, delay: 0.3 }}
    >
      <div className="relative h-[35px] w-[102px]">
        {AVATARS.map((avatar) => (
          <span
            key={avatar.src}
            className="absolute top-0 overflow-hidden rounded-[6px]"
            style={{
              left: avatar.left,
              width: 35,
              height: 35,
              boxShadow: `0 0 0 2px ${avatar.ring}`,
            }}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={70}
              height={70}
              className="h-full w-full object-cover"
            />
          </span>
        ))}
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="flex h-[14px] w-[78px] items-center justify-between" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </span>
        <p className="hero-caption-sm m-0 text-[#2C2218]">{text}</p>
      </div>
    </motion.div>
  );
}

function Star() {
  return (
    <svg width="13.41" height="12.76" viewBox="0 0 14 13" fill="#2C2218" aria-hidden="true">
      <path d="M7 0l1.72 4.4H13l-3.5 2.72L10.94 13 7 10.16 3.06 13l1.44-5.88L1 4.4h4.28L7 0z" />
    </svg>
  );
}

export function HeroReel({
  image,
  location,
  type,
  onPlay,
}: {
  image: string;
  location: string;
  type: string;
  onPlay: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onPlay}
      className="group order-3 flex w-full cursor-pointer flex-col gap-3 text-left md:order-1 min-[768px]:max-[1349px]:w-[40%] min-[768px]:max-[1349px]:shrink-0 min-[1350px]:w-full"
      initial={reduce ? false : { opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={HERO_SPRING}
      aria-label="Play show reel"
    >
      <span className="relative block aspect-[1.2] w-full overflow-hidden md:max-h-[240px] md:aspect-auto md:h-[240px]">
        <Image
          src={image}
          alt={`${location} ${type} show reel`}
          fill
          priority
          sizes="(max-width: 767px) 100vw, 328px"
          className="object-cover object-center transition-transform duration-[400ms] ease-[cubic-bezier(0.12,0.23,0.5,1)] group-hover:rotate-[1deg] group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 left-3 z-2 flex items-center gap-2">
          <PlayCircle />
          <span className="hero-btn-label text-[#F2EDE7]">SHOW REEL</span>
        </span>
      </span>
      <span className="flex items-center justify-between gap-2.5">
        <span className="h-[21px] overflow-hidden">
          <span className="flex flex-col gap-2.5 transition-transform duration-[400ms] ease-[cubic-bezier(0.12,0.23,0.5,1)] group-hover:-translate-y-[31px]">
            <span className="hero-body block h-[21px] leading-[21px]">{location}</span>
            <span className="hero-body block h-[21px] leading-[21px]">{location}</span>
          </span>
        </span>
        <span className="flex items-center gap-2.5">
          <span className="h-[5px] w-[5px] rounded-[5px] bg-black" />
          <span className="hero-body">{type}</span>
        </span>
      </span>
    </motion.button>
  );
}

function PlayCircle() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="#F2EDE7" aria-hidden="true">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40.55,110.58-52,36A8,8,0,0,1,104,164V92a8,8,0,0,1,12.55-6.58l52,36a8,8,0,0,1,0,13.16Z" />
    </svg>
  );
}

export function HeroHeading({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const display = text.replace(/\b\w/g, (c) => c.toUpperCase());
  const words = display.split(" ");
  let charIndex = 0;

  return (
    <h1 className="hero-h1 m-0 max-w-[1000px]">
      {words.map((word, wordIndex) => {
        const chars = Array.from(word);
        return (
          <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
            {chars.map((char) => {
              const index = charIndex++;
              return (
                <motion.span
                  key={`${char}-${index}`}
                  className="inline-block"
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, y: 10, filter: "blur(10px)" }
                  }
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    type: "spring",
                    duration: 0.4,
                    bounce: 0,
                    delay: index * 0.05,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 ? "\u00A0" : null}
          </span>
        );
      })}
    </h1>
  );
}

export function HeroMark() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none hidden min-[1350px]:flex min-[1350px]:w-auto min-[1350px]:justify-self-end"
      initial={reduce ? false : { opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={HERO_SPRING}
      aria-hidden="true"
    >
      <Image
        src={site.logo.src}
        alt=""
        width={site.logo.width}
        height={site.logo.height}
        className="h-16 w-auto object-contain object-right"
      />
    </motion.div>
  );
}

export function VideoOverlay({
  onClose,
  src,
}: {
  onClose: () => void;
  src: string;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(26,21,18,0.9)] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.5, 0, 0.88, 0.77] }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Show reel"
    >
      <motion.div
        className="relative aspect-[1.94] w-full max-w-[1239px]"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: HERO_TWEEN }}
        onClick={(event) => event.stopPropagation()}
      >
        <iframe
          src={`${src}?autoplay=1&mute=1&rel=0`}
          title="Show reel"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </motion.div>
    </motion.div>
  );
}
