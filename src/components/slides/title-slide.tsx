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
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16 text-center overflow-hidden">
      {/* Atmospheric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-accent-green/[0.03] via-transparent to-transparent blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/[0.06]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/[0.06]" />

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
