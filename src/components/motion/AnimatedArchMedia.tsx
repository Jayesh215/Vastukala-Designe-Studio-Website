"use client";

import { motion, useReducedMotion } from "framer-motion";

type ArchVariant = "exterior" | "interior" | "atelier";

/**
 * Bold animated architecture / interior media — clear sky, white volumes,
 * timber soffit and glass, so the featured card always reads at a glance.
 */
export function AnimatedArchMedia({
  variant = "exterior",
  className = "",
  label,
}: {
  variant?: ArchVariant;
  className?: string;
  label?: string;
}) {
  const reduce = useReducedMotion();

  const sky =
    variant === "interior"
      ? "from-[#EDE8DF] via-[#E4DFD6] to-[#D2CCC2]"
      : variant === "atelier"
        ? "from-[#E5E3DE] via-[#DAD7D1] to-[#C9C5BE]"
        : "from-[#5BA3E0] via-[#8FC0EA] to-[#D6E8F6]";

  return (
    <div
      className={`relative h-full min-h-[12rem] w-full overflow-hidden ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${sky}`} />

      {/* Soft clouds / ambient */}
      <motion.div
        className="absolute top-[8%] left-[10%] h-24 w-44 rounded-full bg-white/35 blur-2xl"
        animate={reduce ? undefined : { x: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[18%] right-[18%] h-16 w-28 rounded-full bg-white/25 blur-xl"
        animate={reduce ? undefined : { x: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ground / horizon */}
      <div className="absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-[#C5C0B8] to-transparent" />

      {/* Primary building mass — low-angle modern house */}
      <motion.div
        className="absolute right-[4%] bottom-[6%] h-[78%] w-[68%] sm:right-[6%] sm:w-[62%]"
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Main white volume */}
        <div className="absolute inset-x-0 bottom-0 top-[8%] rounded-sm bg-[#F8F7F4] shadow-[0_40px_80px_-30px_rgba(17,17,17,0.45)]" />

        {/* Upper overhang with timber soffit */}
        <div className="absolute top-[6%] right-[4%] left-[4%] h-[22%] overflow-hidden rounded-sm bg-[#F8F7F4]">
          <div
            className="absolute inset-x-[6%] top-[35%] bottom-0"
            style={{
              background:
                "repeating-linear-gradient(90deg, #6F4428 0 10px, #8B5A36 10px 11px, #7A4D2E 11px 21px)",
            }}
          />
          {[16, 32, 48, 64, 80].map((left) => (
            <span
              key={left}
              className="absolute top-[58%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#111]/90 shadow-[0_0_8px_rgba(255,255,255,0.35)]"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>

        {/* Glass balcony */}
        <div className="absolute top-[28%] right-[10%] left-[22%] h-[26%]">
          <div className="absolute inset-0 border border-white/80 bg-gradient-to-b from-white/35 via-[#9ec5e8]/25 to-transparent backdrop-blur-[1px]" />
          <div className="absolute inset-x-0 top-0 h-[2px] bg-white" />
          <div className="absolute inset-y-0 left-0 w-px bg-white/90" />
          <div className="absolute inset-y-0 right-0 w-px bg-white/90" />
        </div>

        {/* Dark sliding frames */}
        <div className="absolute top-[32%] right-[14%] left-[26%] grid h-[40%] grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="rounded-[1px] border border-[#0d0d0d] bg-gradient-to-b from-[#243041] to-[#151b24]"
              animate={reduce ? undefined : { opacity: [0.85, 1, 0.85] }}
              transition={{
                duration: 3.8,
                delay: i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Lower timber clad band */}
        <div
          className="absolute right-[8%] bottom-[8%] left-[8%] h-[14%] rounded-sm"
          style={{
            background:
              "repeating-linear-gradient(90deg, #8B5A36 0 12px, #A06B45 12px 13px, #7A4D2E 13px 25px)",
          }}
        />
      </motion.div>

      {/* Secondary wing */}
      <motion.div
        className="absolute bottom-[8%] left-[2%] h-[52%] w-[30%] rounded-sm bg-[#F3F1EC] shadow-[0_24px_50px_-28px_rgba(17,17,17,0.5)] sm:left-[4%]"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="absolute inset-x-[14%] top-[16%] bottom-[28%] border border-[#111]/40 bg-[#c5d7e8]/55" />
        <div
          className="absolute inset-x-[16%] bottom-[10%] h-[10%]"
          style={{
            background:
              "repeating-linear-gradient(90deg, #8B5A36 0 8px, #A06B45 8px 9px)",
          }}
        />
      </motion.div>

      {/* Annotation */}
      <div className="absolute right-3 bottom-3 left-3 z-10 flex items-center gap-2 sm:right-4 sm:bottom-4 sm:left-4">
        <span className="h-px flex-1 bg-ink/30" />
        <span className="rounded bg-canvas/80 px-2 py-1 font-mono text-[0.5625rem] tracking-[0.12em] text-ink/60 uppercase backdrop-blur-sm">
          {variant === "interior"
            ? "Interior study · animated"
            : "Architecture study · animated"}
        </span>
        <span className="h-px flex-1 bg-ink/30" />
      </div>
    </div>
  );
}
