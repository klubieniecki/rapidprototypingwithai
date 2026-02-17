import type { SectionDividerSlide as SectionDividerType } from "@/lib/types";

export function SectionDivider({ slide }: { slide: SectionDividerType }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16 text-center overflow-hidden noise-overlay vignette">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none gradient-mesh" />

      {/* Dramatic radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary intense glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] bg-gradient-radial from-accent-green/[0.1] via-accent-green/[0.03] to-transparent blur-3xl glow-animate" />
        {/* Accent glows */}
        <div className="absolute top-[15%] right-[20%] w-[400px] h-[400px] bg-gradient-radial from-accent-blue/[0.05] to-transparent blur-3xl" />
        <div className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] bg-gradient-radial from-accent-amber/[0.04] to-transparent blur-3xl" />
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

      {/* Horizontal accent lines - more dramatic */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      </div>
      {/* Secondary horizontal lines */}
      <div className="absolute top-[40%] left-0 w-24 h-px bg-gradient-to-r from-transparent via-accent-green/[0.2] to-transparent" />
      <div className="absolute bottom-[40%] right-0 w-24 h-px bg-gradient-to-l from-transparent via-accent-green/[0.2] to-transparent" />

      {/* Corner decorations - enhanced */}
      <div className="absolute top-10 left-10">
        <div className="w-24 h-24 border-l-2 border-t-2 border-white/[0.08]" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent-green/40" />
          <div className="w-2 h-2 rounded-full bg-accent-green/25" />
          <div className="w-2 h-2 rounded-full bg-accent-green/10" />
        </div>
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="w-24 h-24 border-r-2 border-b-2 border-white/[0.08]" />
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-accent-green/10" />
          <div className="w-2 h-2 rounded-full bg-accent-green/25" />
          <div className="w-2 h-2 rounded-full bg-accent-green/40" />
        </div>
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
