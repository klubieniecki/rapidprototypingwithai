import Image from "next/image";
import type { TitleSlide as TitleSlideType } from "@/lib/types";

export function TitleSlide({ slide }: { slide: TitleSlideType }) {
  if (slide.backgroundImage) {
    return (
      <div className="relative h-full w-full">
        <Image
          src={slide.backgroundImage}
          alt={slide.title}
          fill
          className="object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16 text-center overflow-hidden noise-overlay vignette">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none gradient-mesh" />

      {/* Atmospheric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-gradient-radial from-accent-green/[0.08] via-accent-green/[0.025] to-transparent blur-3xl glow-animate" />
        {/* Secondary accent glow - blue */}
        <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-gradient-radial from-accent-blue/[0.04] to-transparent blur-3xl" />
        {/* Tertiary warm glow */}
        <div className="absolute bottom-[25%] left-[10%] w-[350px] h-[350px] bg-gradient-radial from-accent-amber/[0.03] to-transparent blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative corner accents - enhanced */}
      <div className="absolute top-8 left-8">
        <div className="w-24 h-24 border-l-2 border-t-2 border-white/[0.1]" />
        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-accent-green/30" />
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="w-24 h-24 border-r-2 border-b-2 border-white/[0.1]" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-accent-green/30" />
      </div>

      {/* Horizontal accent lines */}
      <div className="absolute top-1/2 left-0 w-12 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute top-1/2 right-0 w-12 h-px bg-gradient-to-l from-transparent via-white/[0.08] to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.1] tracking-tight text-deck">
          {slide.title}
        </h1>
        {slide.subtitle && (
          <p className="mt-6 max-w-3xl text-[clamp(1.25rem,2.5vw,1.875rem)] leading-relaxed text-deck-muted">
            {slide.subtitle}
          </p>
        )}
        {slide.meta && (
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-white/10" />
            <p className="font-code text-[clamp(0.875rem,1.25vw,1.125rem)] tracking-widest text-deck/30 uppercase">
              {slide.meta}
            </p>
            <div className="h-px w-8 bg-white/10" />
          </div>
        )}
      </div>
    </div>
  );
}
