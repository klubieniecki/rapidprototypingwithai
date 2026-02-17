import type { TwoColumnSlide as TwoColumnSlideType } from "@/lib/types";

const accentStyles = {
  red: {
    border: "border-accent-red/30",
    headerBg: "bg-accent-red/10",
    headerText: "text-accent-red",
    bullet: "bg-accent-red/50 ring-accent-red/15",
    glow: "shadow-[0_0_30px_rgba(255,107,107,0.05)]",
  },
  green: {
    border: "border-accent-green/30",
    headerBg: "bg-accent-green/10",
    headerText: "text-accent-green",
    bullet: "bg-accent-green/50 ring-accent-green/15",
    glow: "shadow-[0_0_30px_rgba(193,255,114,0.05)]",
  },
  blue: {
    border: "border-[#7dd3fc]/30",
    headerBg: "bg-[#7dd3fc]/10",
    headerText: "text-[#7dd3fc]",
    bullet: "bg-[#7dd3fc]/50 ring-[#7dd3fc]/15",
    glow: "shadow-[0_0_30px_rgba(125,211,252,0.05)]",
  },
  muted: {
    border: "border-white/[0.08]",
    headerBg: "bg-white/[0.03]",
    headerText: "text-deck/50",
    bullet: "bg-white/30 ring-white/10",
    glow: "",
  },
};

function Column({
  heading,
  items,
  accent = "muted",
}: {
  heading: string;
  items: string[];
  accent?: "red" | "green" | "blue" | "muted";
}) {
  const styles = accentStyles[accent];

  return (
    <div className={`rounded-xl border ${styles.border} ${styles.glow} bg-white/[0.015] overflow-hidden`}>
      {/* Header */}
      <div className={`px-6 py-4 ${styles.headerBg} border-b ${styles.border}`}>
        <h3 className={`text-[clamp(0.85rem,1.1vw,1rem)] font-semibold uppercase tracking-[0.15em] ${styles.headerText}`}>
          {heading}
        </h3>
      </div>

      {/* Items */}
      <div className="px-6 py-5">
        <ul className="space-y-3.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3.5 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-deck-muted"
            >
              <span className={`mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet} ring-4`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TwoColumnSlide({ slide }: { slide: TwoColumnSlideType }) {
  const leftAccent = slide.leftColumn.accent || "muted";
  const rightAccent = slide.rightColumn.accent || "muted";

  return (
    <div className="relative flex h-full w-full flex-col justify-center px-16 py-12 overflow-hidden noise-overlay">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none gradient-mesh opacity-50" />

      {/* Atmospheric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Accent-aware glows based on column colors */}
        <div className="absolute top-[30%] left-[15%] w-[400px] h-[350px] bg-gradient-radial from-accent-green/[0.03] to-transparent blur-3xl" />
        <div className="absolute bottom-[25%] right-[15%] w-[400px] h-[350px] bg-gradient-radial from-accent-blue/[0.025] to-transparent blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/[0.05]" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/[0.05]" />

      {/* Header */}
      <div className="relative z-10 mb-8">
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight tracking-tight text-deck">
          {slide.title}
        </h2>

        {slide.subtitle && (
          <p className="mt-3 text-[clamp(1.05rem,1.5vw,1.25rem)] text-deck-muted">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Columns */}
      <div className="relative z-10 grid grid-cols-2 gap-6 max-w-5xl">
        <Column
          heading={slide.leftColumn.heading}
          items={slide.leftColumn.items}
          accent={leftAccent}
        />
        <Column
          heading={slide.rightColumn.heading}
          items={slide.rightColumn.items}
          accent={rightAccent}
        />
      </div>

      {/* Callout */}
      {slide.callout && (
        <div className="relative z-10 mt-8 max-w-4xl">
          <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] italic text-deck/50 flex items-center gap-3">
            <span className="shrink-0 w-6 h-px bg-white/20" />
            {slide.callout}
          </p>
        </div>
      )}
    </div>
  );
}
