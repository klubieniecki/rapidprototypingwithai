import type { SectionDividerSlide as SectionDividerType } from "@/lib/types";

export function SectionDivider({ slide }: { slide: SectionDividerType }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16 text-center overflow-hidden">
      {/* Dramatic radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-accent-green/[0.06] via-accent-green/[0.02] to-transparent blur-2xl" />
      </div>

      {/* Horizontal accent lines */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-12 left-12 flex gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green/10" />
      </div>
      <div className="absolute bottom-12 right-12 flex gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green/10" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green/30" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.1] tracking-tight text-deck">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="mt-6 text-[clamp(1.25rem,2.2vw,1.75rem)] text-deck-muted">
            {slide.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
