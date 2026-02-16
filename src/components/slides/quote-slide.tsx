import type { QuoteSlide as QuoteSlideType } from "@/lib/types";

export function QuoteSlide({ slide }: { slide: QuoteSlideType }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16 text-center overflow-hidden">
      {/* Decorative oversized quotation mark */}
      <div className="absolute top-[15%] left-[8%] pointer-events-none select-none">
        <span className="font-emphasis text-[clamp(12rem,20vw,18rem)] leading-none text-white/[0.03]">
          &ldquo;
        </span>
      </div>

      {/* Subtle vertical accent line */}
      <div className="absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

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
