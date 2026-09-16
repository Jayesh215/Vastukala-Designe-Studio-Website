"use client";

/**
 * Animated architecture + interior design illustration.
 * Elevation, floor plan, and furniture motifs — no photography.
 */
export function ArchitectureIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`architecture-illustration relative h-full w-full overflow-hidden bg-[#E8E8E6] ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,17,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#EDEDEA] via-transparent to-[#D8D4CC]/55" />

      <svg
        viewBox="0 0 960 600"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="illu-wood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C4A882" />
            <stop offset="100%" stopColor="#A88862" />
          </linearGradient>
          <linearGradient id="illu-soft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#111111" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#111111" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <path
          className="illu-draw"
          d="M72 460 V180 H210 V140 H340 V180 H480 V460 Z"
          stroke="#111111"
          strokeWidth="1.6"
          strokeLinecap="square"
          pathLength={1}
        />
        <rect
          className="illu-fade-late"
          x="210"
          y="148"
          width="130"
          height="22"
          fill="url(#illu-wood)"
        />
        <rect
          className="illu-fade"
          x="95"
          y="220"
          width="70"
          height="110"
          stroke="#111111"
          strokeWidth="1.2"
          fill="url(#illu-soft)"
        />
        <rect
          className="illu-fade"
          x="230"
          y="210"
          width="90"
          height="130"
          stroke="#111111"
          strokeWidth="1.2"
          fill="url(#illu-soft)"
        />
        <rect
          className="illu-fade"
          x="360"
          y="220"
          width="70"
          height="110"
          stroke="#111111"
          strokeWidth="1.2"
          fill="url(#illu-soft)"
        />
        <line
          className="illu-fade"
          x1="130"
          y1="220"
          x2="130"
          y2="330"
          stroke="#111111"
          strokeWidth="0.8"
          opacity="0.45"
        />
        <line
          className="illu-fade"
          x1="275"
          y1="210"
          x2="275"
          y2="340"
          stroke="#111111"
          strokeWidth="0.8"
          opacity="0.45"
        />

        <g className="illu-fade-mid">
          <rect
            x="520"
            y="150"
            width="200"
            height="160"
            stroke="#111111"
            strokeWidth="1.4"
            fill="url(#illu-soft)"
          />
          <line
            x1="520"
            y1="230"
            x2="720"
            y2="230"
            stroke="#111111"
            strokeWidth="1"
            opacity="0.55"
          />
          <line
            x1="620"
            y1="150"
            x2="620"
            y2="310"
            stroke="#111111"
            strokeWidth="1"
            opacity="0.55"
          />
          <path
            d="M620 310 A28 28 0 0 1 648 282"
            stroke="#111111"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.5"
          />
          <text
            x="520"
            y="138"
            fill="#111111"
            fillOpacity="0.45"
            fontFamily="ui-monospace, monospace"
            fontSize="11"
            letterSpacing="1.5"
          >
            PLAN 1:100
          </text>
        </g>

        <g className="illu-float">
          <rect
            x="760"
            y="360"
            width="120"
            height="36"
            rx="4"
            fill="#111111"
            fillOpacity="0.12"
            stroke="#111111"
            strokeWidth="1.2"
          />
          <rect
            x="770"
            y="340"
            width="40"
            height="24"
            rx="3"
            fill="#111111"
            fillOpacity="0.1"
            stroke="#111111"
            strokeWidth="1"
          />
          <rect
            x="830"
            y="340"
            width="40"
            height="24"
            rx="3"
            fill="#111111"
            fillOpacity="0.1"
            stroke="#111111"
            strokeWidth="1"
          />
          <ellipse
            cx="820"
            cy="430"
            rx="34"
            ry="12"
            stroke="#111111"
            strokeWidth="1.2"
            fill="url(#illu-wood)"
            fillOpacity="0.55"
          />
          <line
            x1="900"
            y1="300"
            x2="900"
            y2="420"
            stroke="#111111"
            strokeWidth="1.4"
          />
          <circle
            cx="900"
            cy="288"
            r="14"
            stroke="#111111"
            strokeWidth="1.2"
            fill="#111111"
            fillOpacity="0.06"
          />
          <line
            x1="892"
            y1="420"
            x2="908"
            y2="420"
            stroke="#111111"
            strokeWidth="1.4"
          />
        </g>

        <g className="illu-fade-late">
          <line
            x1="72"
            y1="490"
            x2="480"
            y2="490"
            stroke="#111111"
            strokeWidth="0.8"
            opacity="0.35"
          />
          <line
            x1="72"
            y1="484"
            x2="72"
            y2="496"
            stroke="#111111"
            strokeWidth="0.8"
            opacity="0.45"
          />
          <line
            x1="480"
            y1="484"
            x2="480"
            y2="496"
            stroke="#111111"
            strokeWidth="0.8"
            opacity="0.45"
          />
          <text
            x="240"
            y="512"
            textAnchor="middle"
            fill="#111111"
            fillOpacity="0.4"
            fontFamily="ui-monospace, monospace"
            fontSize="10"
            letterSpacing="1.6"
          >
            ELEVATION · ARCHITECTURE + INTERIORS
          </text>
        </g>

        <circle className="illu-pulse" cx="340" cy="120" r="3" fill="#111111" />
        <circle
          className="illu-pulse-delay"
          cx="700"
          cy="360"
          r="3"
          fill="#111111"
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#E8E8E6]/35 via-transparent to-transparent" />
    </div>
  );
}
