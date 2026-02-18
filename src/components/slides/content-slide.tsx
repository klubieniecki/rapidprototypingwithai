import type { ContentSlide as ContentSlideType } from "@/lib/types";
import Image from "next/image";

export function ContentSlide({ slide }: { slide: ContentSlideType }) {
  return (
    <div className="relative flex h-full w-full px-16 py-12 overflow-hidden noise-overlay">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none gradient-mesh opacity-60" />

      {/* Atmospheric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial glow */}
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[400px] bg-gradient-radial from-accent-green/[0.04] via-transparent to-transparent blur-3xl" />
        {/* Secondary accent */}
        <div className="absolute bottom-[30%] right-[20%] w-[400px] h-[300px] bg-gradient-radial from-accent-blue/[0.025] to-transparent blur-3xl" />
        {/* Grid pattern - very subtle */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content area */}
      <div className={`relative z-10 flex flex-col justify-center ${slide.sideImage ? "flex-1" : "w-full"}`}>
        {/* Subtle corner accent - only show if no side image */}
        {!slide.sideImage && (
          <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none">
            <div className="absolute top-8 right-8 w-28 h-28 border-t border-r border-white/[0.06]" />
            <div className="absolute top-10 right-10 w-3 h-3 border-t border-r border-accent-green/20" />
          </div>
        )}

        {/* Header */}
        <div className="mb-2">
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-tight tracking-tight text-deck">
            {slide.title}
          </h2>

          {slide.subtitle && (
            <p className="mt-4 max-w-4xl text-[clamp(1.125rem,1.8vw,1.5rem)] leading-relaxed text-deck-muted">
              {slide.subtitle}
            </p>
          )}
        </div>

        {/* Bullets */}
        {slide.bullets && (
          <ul className="mt-8 space-y-4 max-w-4xl">
            {slide.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-[clamp(1.125rem,1.6vw,1.375rem)] leading-relaxed text-deck-muted group"
              >
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green/50 ring-4 ring-accent-green/10" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Numbered Steps */}
        {slide.numberedSteps && (
          <div className="mt-8 space-y-5 max-w-4xl">
            {slide.numberedSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-5 group">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center">
                  <span className="font-code text-sm font-bold text-accent-green">
                    {i + 1}
                  </span>
                </div>
                <div className="pt-1">
                  <span className="text-[clamp(1.125rem,1.6vw,1.375rem)] font-semibold text-deck">
                    {step.step}
                  </span>
                  <span className="text-[clamp(1.125rem,1.6vw,1.375rem)] text-deck/40 mx-2">
                    —
                  </span>
                  <span className="text-[clamp(1.125rem,1.6vw,1.375rem)] text-deck-muted">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cards */}
        {slide.cards && (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 max-w-5xl">
            {slide.cards.map((card, i) => (
              <div
                key={i}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.1] hover:bg-white/[0.03]"
              >
                {/* Card images */}
                {card.images && card.images.length > 0 && (
                  <div className="flex items-center gap-4 mb-4">
                    {card.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="relative h-16 w-16 shrink-0">
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
                {/* Card accent line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent-green/50 to-transparent mb-4" />
                <h3 className="text-[clamp(1.125rem,1.5vw,1.375rem)] font-semibold text-deck">
                  {card.heading}
                </h3>
                {card.body.includes(" • ") ? (
                  <ul className="mt-3 space-y-1.5">
                    {card.body.split(" • ").map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[clamp(0.95rem,1.2vw,1.05rem)] leading-relaxed text-deck-muted">
                        <span className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-accent-green/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-[clamp(1rem,1.3vw,1.125rem)] leading-relaxed text-deck-muted">
                    {card.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Callout */}
        {slide.callout && (
          <div className="mt-10 max-w-4xl">
            <div className="flex items-start gap-4 rounded-lg border border-accent-green/20 bg-accent-green/[0.04] px-5 py-4">
              <div className="shrink-0 mt-0.5 w-1 h-full min-h-[1.5rem] rounded-full bg-accent-green/40" />
              <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] text-deck-muted leading-relaxed">
                {slide.callout}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom-left corner accent */}
      {!slide.sideImage && (
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-white/[0.05]" />
      )}

      {/* Side image */}
      {slide.sideImage && (
        <div className="relative z-10 flex flex-col items-center justify-center pl-8 shrink-0">
          {slide.sideImageLogo && (
            <div className="relative w-40 h-12 mb-4">
              <Image
                src={slide.sideImageLogo}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          )}
          <div className="relative w-72 h-auto rounded-xl overflow-hidden shadow-2xl shadow-black/20 border border-white/10">
            <Image
              src={slide.sideImage}
              alt=""
              width={288}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
          {slide.sideImageCaption && (
            <p className="mt-4 text-center text-[clamp(1rem,1.3vw,1.125rem)] font-medium text-deck-muted max-w-[12rem]">
              {slide.sideImageCaption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
