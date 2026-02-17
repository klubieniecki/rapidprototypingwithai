import type { QuoteSlide as QuoteSlideType } from "@/lib/types";

export function QuoteSlide({ slide }: { slide: QuoteSlideType }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16 text-center overflow-hidden noise-overlay vignette">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none gradient-mesh" />

      {/* Atmospheric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] bg-gradient-radial from-accent-green/[0.07] via-accent-green/[0.02] to-transparent blur-3xl glow-animate" />
        {/* Secondary accent - cool tone */}
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-gradient-radial from-accent-blue/[0.035] to-transparent blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative oversized quotation mark */}
      <div className="absolute top-[12%] left-[6%] pointer-events-none select-none">
        <span className="font-emphasis text-[clamp(14rem,22vw,20rem)] leading-none text-white/[0.025]">
          &ldquo;
        </span>
      </div>
      {/* Closing quote mark */}
      <div className="absolute bottom-[12%] right-[6%] pointer-events-none select-none">
        <span className="font-emphasis text-[clamp(14rem,22vw,20rem)] leading-none text-white/[0.02]">
          &rdquo;
        </span>
      </div>

      {/* Subtle vertical accent line */}
      <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />

      {/* Horizontal accents */}
      <div className="absolute top-[35%] left-0 w-16 h-px bg-gradient-to-r from-transparent via-accent-green/[0.15] to-transparent" />
      <div className="absolute bottom-[35%] right-0 w-16 h-px bg-gradient-to-l from-transparent via-accent-green/[0.15] to-transparent" />

      {/* Corner accents - enhanced */}
      <div className="absolute top-8 left-8">
        <div className="w-20 h-20 border-l-2 border-t-2 border-white/[0.08]" />
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-accent-green/20" />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="w-20 h-20 border-r-2 border-b-2 border-white/[0.08]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-accent-green/20" />
      </div>

      {/* Main quote */}
      <blockquote className="relative max-w-4xl z-10">
        <p className="font-emphasis text-[clamp(2rem,4vw,3.5rem)] leading-[1.3] text-deck">
          &ldquo;{slide.quote}&rdquo;
        </p>
      </blockquote>

      {slide.attribution && (
        <p className="relative z-10 mt-8 font-code text-[clamp(0.875rem,1.25vw,1.125rem)] tracking-wider text-deck/40">
          <span className="inline-block w-6 h-px bg-deck/20 mr-3 align-middle" />
          {slide.attribution}
        </p>
      )}

      {slide.subtext && (
        <p className="relative z-10 mt-6 max-w-2xl text-[clamp(1.125rem,1.6vw,1.375rem)] text-deck-muted">
          {slide.subtext}
        </p>
      )}

      {/* Optional sections below the quote (e.g., Good for / Not good for) */}
      {slide.sections && (
        <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-16">
          {slide.sections.map((section, i) => (
            <div key={i} className="text-left max-w-xs">
              <h3 className="text-[clamp(0.75rem,1vw,0.9rem)] font-semibold uppercase tracking-[0.2em] text-deck/40 mb-4 pb-2 border-b border-white/[0.06]">
                {section.heading}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-[clamp(1rem,1.3vw,1.125rem)] text-deck-muted leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
