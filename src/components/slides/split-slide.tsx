import type { SplitSlide as SplitSlideType } from "@/lib/types";

export function SplitSlide({ slide }: { slide: SplitSlideType }) {
  return (
    <div className="relative flex h-full w-full overflow-hidden noise-overlay">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none gradient-mesh opacity-40" />

      {/* Full-width title bar */}
      <div className="absolute top-0 left-0 right-0 z-20 px-16 pt-10 pb-4">
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tight text-deck">
          {slide.title}
        </h2>
      </div>

      {/* Left Panel - Quote & Drama */}
      <div className="relative w-[42%] flex flex-col justify-center px-12 pt-28 pb-12">
        {/* Dramatic accent glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-green/[0.08] via-transparent to-accent-blue/[0.05]" />
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-gradient-radial from-accent-green/[0.06] to-transparent blur-3xl" />

        {/* Decorative quotation mark */}
        <div className="absolute top-20 left-6 pointer-events-none select-none">
          <span className="font-emphasis text-[clamp(8rem,12vw,10rem)] leading-none text-white/[0.03]">
            &ldquo;
          </span>
        </div>

        {/* Quote */}
        <blockquote className="relative z-10 max-w-lg">
          <p className="font-emphasis text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.45] text-deck">
            &ldquo;{slide.leftPanel.quote}&rdquo;
          </p>
          {slide.leftPanel.attribution && (
            <cite className="mt-5 flex items-center gap-3 not-italic">
              <span className="h-px w-8 bg-accent-green/40" />
              <span className="font-code text-sm font-medium text-accent-green tracking-wide">
                {slide.leftPanel.attribution}
              </span>
            </cite>
          )}
        </blockquote>

        {/* Stat callout */}
        {slide.leftPanel.stat && (
          <div className="relative z-10 mt-10 pt-8 border-t border-white/[0.08]">
            <div className="flex items-baseline gap-2">
              <span className="text-[clamp(3rem,5vw,4.5rem)] font-bold text-accent-green leading-none tracking-tight">
                {slide.leftPanel.stat}
              </span>
            </div>
            {slide.leftPanel.statLabel && (
              <p className="mt-2 text-[clamp(0.85rem,1.1vw,1rem)] text-deck-muted uppercase tracking-[0.15em] max-w-xs">
                {slide.leftPanel.statLabel}
              </p>
            )}
          </div>
        )}

        {/* Bottom accent */}
        <div className="absolute bottom-8 left-12 w-24 h-px bg-gradient-to-r from-accent-green/30 to-transparent" />
      </div>

      {/* Vertical Divider with glow */}
      <div className="absolute left-[42%] top-24 bottom-8 w-px">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.12] to-transparent" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-green/40 shadow-[0_0_12px_rgba(193,255,114,0.3)]" />
      </div>

      {/* Right Panel - Numbered Points */}
      <div className="relative flex-1 flex flex-col justify-center pl-14 pr-16 pt-28 pb-12">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 1px),
                              linear-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Secondary glow */}
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-gradient-radial from-accent-blue/[0.04] to-transparent blur-3xl" />

        {slide.rightPanel.heading && (
          <h3 className="relative z-10 mb-8 text-[clamp(0.7rem,0.9vw,0.85rem)] font-semibold uppercase tracking-[0.25em] text-deck/35">
            {slide.rightPanel.heading}
          </h3>
        )}

        <div className="relative z-10 space-y-7">
          {slide.rightPanel.numberedItems.map((item, i) => (
            <div key={i} className="flex items-start gap-5 group">
              {/* Large number badge */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-accent-green/[0.08] border border-accent-green/20 flex items-center justify-center shadow-[0_0_20px_rgba(193,255,114,0.05)] group-hover:bg-accent-green/[0.12] group-hover:border-accent-green/30 transition-all duration-300">
                <span className="font-code text-2xl font-bold text-accent-green">
                  {i + 1}
                </span>
              </div>
              <div className="pt-1.5 flex-1">
                <h4 className="text-[clamp(1.1rem,1.5vw,1.35rem)] font-semibold text-deck leading-snug">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-[clamp(0.95rem,1.2vw,1.1rem)] text-deck-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corner accent */}
        <div className="absolute top-24 right-8 w-12 h-12 border-t border-r border-white/[0.05]" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/[0.04]" />
      </div>
    </div>
  );
}
