import type { DiagramSlide as DiagramSlideType } from "@/lib/types";

/* ── Helpers for the System Architecture diagram ─────────────── */

function ArchBox({
  label,
  desc,
  color,
  highlight,
}: {
  label: string;
  desc?: string;
  color: "green" | "amber" | "neutral" | "muted";
  highlight?: boolean;
}) {
  const s = {
    green: {
      box: "border-accent-green/50 bg-accent-green/10",
      label: "text-accent-green",
      desc: "text-accent-green/40",
    },
    amber: {
      box: "border-accent-amber/25 bg-accent-amber/5",
      label: "text-accent-amber/80",
      desc: "text-accent-amber/35",
    },
    neutral: {
      box: "border-deck/10 bg-deck/[0.03]",
      label: "text-deck/70",
      desc: "text-deck/30",
    },
    muted: {
      box: "border-white/[0.06] bg-white/[0.02]",
      label: "text-deck/40",
      desc: "text-deck/20",
    },
  }[color];

  return (
    <div
      className={`rounded-lg px-5 py-2.5 text-center ${
        highlight
          ? "border-2 shadow-[0_0_24px_rgba(193,255,114,0.1)]"
          : "border"
      } ${s.box}`}
    >
      <div
        className={`text-[clamp(0.85rem,1.15vw,1.05rem)] font-semibold leading-snug ${s.label}`}
      >
        {label}
      </div>
      {desc && (
        <div
          className={`text-[clamp(0.7rem,0.9vw,0.8rem)] mt-0.5 leading-snug ${s.desc}`}
        >
          {desc}
        </div>
      )}
    </div>
  );
}

function ArchArrow() {
  return (
    <div className="flex flex-col items-center py-px">
      <div className="w-px h-3.5 bg-white/[0.12]" />
      <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-white/[0.12]" />
    </div>
  );
}

function ArchBranch() {
  return (
    <div className="w-full">
      {/* Vertical stem from center */}
      <div className="flex justify-center">
        <div className="w-px h-2 bg-white/[0.12]" />
      </div>
      {/* Horizontal rail spanning three columns + vertical drops */}
      <div className="grid grid-cols-3 gap-3">
        {/* Left column */}
        <div className="flex justify-center relative">
          <div className="absolute top-0 left-[50%] -right-[0.375rem] h-px bg-white/[0.12]" />
          <div className="h-2 w-px bg-white/[0.12]" />
        </div>
        {/* Center column */}
        <div className="flex justify-center relative">
          <div className="absolute top-0 -left-[0.375rem] -right-[0.375rem] h-px bg-white/[0.12]" />
          <div className="h-2 w-px bg-white/[0.12]" />
        </div>
        {/* Right column */}
        <div className="flex justify-center relative">
          <div className="absolute top-0 -left-[0.375rem] right-[50%] h-px bg-white/[0.12]" />
          <div className="h-2 w-px bg-white/[0.12]" />
        </div>
      </div>
    </div>
  );
}

/* ── System Architecture: layered boxes-and-arrows diagram ──── */

function SystemArchitectureDiagram() {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      {/* ── Client layer ─────────────────────────── */}
      <ArchBox label="Users / Browser" color="muted" />
      <ArchArrow />

      {/* ── Frontend layer (highlighted) ─────────── */}
      <div className="relative w-full flex justify-center">
        <ArchBox
          label="Frontend (UI)"
          desc="What users see & interact with"
          color="green"
          highlight
        />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-accent-green/20 border border-accent-green/25 px-3 py-0.5 font-code text-[clamp(0.65rem,0.85vw,0.75rem)] text-accent-green whitespace-nowrap">
          ← TODAY
        </span>
      </div>
      <ArchArrow />

      {/* ── API layer ────────────────────────────── */}
      <ArchBox label="API Layer" desc="Routes & middleware" color="neutral" />

      {/* ── Branch: API → three service boxes ────── */}
      <ArchBranch />

      {/* ── Services layer ───────────────────────── */}
      <div className="grid grid-cols-3 gap-3 w-full">
        <ArchBox label="Backend Logic" desc="Business rules" color="neutral" />
        <ArchBox
          label="Authentication"
          desc="Identity & security"
          color="amber"
        />
        <ArchBox
          label="3rd Party APIs"
          desc="External services"
          color="muted"
        />
      </div>

      {/* ── Connector: Backend → Database ─────────── */}
      <div className="grid grid-cols-3 gap-3 w-full">
        <div className="flex justify-center">
          <ArchArrow />
        </div>
        <div />
        <div />
      </div>

      {/* ── Data layer ───────────────────────────── */}
      <div className="grid grid-cols-3 gap-3 w-full">
        <ArchBox label="Database" desc="Data storage" color="amber" />
        <div />
        <div />
      </div>

      {/* ── Infrastructure base ──────────────────── */}
      <div className="w-full mt-3 pt-3 border-t border-dashed border-white/[0.06]">
        <div className="w-full rounded border border-white/[0.05] bg-white/[0.015] px-4 py-2 text-center">
          <span className="text-deck/20 font-code text-[clamp(0.65rem,0.85vw,0.75rem)] uppercase tracking-widest">
            Hosting · Deployment · Infrastructure
          </span>
        </div>
      </div>
    </div>
  );
}

function PrototypingLoopDiagram() {
  const typeStyles = {
    human: {
      border: "border-[#7dd3fc]/50",
      bg: "bg-[#7dd3fc]/8",
      numColor: "text-[#7dd3fc]",
      glow: "shadow-[0_0_20px_rgba(125,211,252,0.15)]",
    },
    ai: {
      border: "border-accent-green/50",
      bg: "bg-accent-green/8",
      numColor: "text-accent-green",
      glow: "shadow-[0_0_20px_rgba(193,255,114,0.15)]",
    },
    both: {
      border: "border-[#fcd34d]/50",
      bg: "bg-[#fcd34d]/8",
      numColor: "text-[#fcd34d]",
      glow: "shadow-[0_0_20px_rgba(252,211,77,0.15)]",
    },
  };

  const StepCard = ({ num, name, who, type }: { num: number; name: string; who: string; type: "human" | "ai" | "both" }) => {
    const styles = typeStyles[type];
    return (
      <div className={`flex flex-col items-center gap-1.5 rounded-xl border ${styles.border} ${styles.bg} ${styles.glow} px-5 py-3 min-w-[120px] backdrop-blur-sm`}>
        <span className={`font-code text-2xl font-bold ${styles.numColor}`}>{num}</span>
        <span className="text-sm font-semibold text-deck whitespace-nowrap">{name}</span>
        <span className="font-code text-[0.6rem] uppercase tracking-wider text-deck/40 whitespace-nowrap">{who}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Row 1: Clarify at top */}
      <div className="flex justify-center">
        <StepCard num={1} name="Clarify" who="Human" type="human" />
      </div>

      {/* Row 2: Test and Constrain on sides */}
      <div className="flex items-center justify-center gap-32">
        <StepCard num={5} name="Test" who="Human" type="human" />
        <div className="flex flex-col items-center">
          <div className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2">
            <span className="text-deck/30 font-code text-xs uppercase tracking-[0.15em]">Iterate</span>
          </div>
        </div>
        <StepCard num={2} name="Constrain" who="Human + AI" type="both" />
      </div>

      {/* Row 3: Make Clickable and Generate at bottom */}
      <div className="flex items-center justify-center gap-16">
        <StepCard num={4} name="Make Clickable" who="AI + Human" type="both" />
        <StepCard num={3} name="Generate" who="AI" type="ai" />
      </div>

      {/* Legend */}
      <div className="flex items-center gap-8 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#7dd3fc]/30 border border-[#7dd3fc]/50" />
          <span className="font-code text-xs text-deck/50 uppercase tracking-wider">Human</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-green/30 border border-accent-green/50" />
          <span className="font-code text-xs text-deck/50 uppercase tracking-wider">AI</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#fcd34d]/30 border border-[#fcd34d]/50" />
          <span className="font-code text-xs text-deck/50 uppercase tracking-wider">Collaboration</span>
        </div>
      </div>
    </div>
  );
}

function SixPFrameworkDiagram() {
  const ps = [
    { name: "Persona", detail: "Who are you building for?", active: true },
    { name: "Problem", detail: "What pain are you solving?", active: true },
    { name: "Product", detail: "What features are you building?", active: true },
    { name: "Proposition", detail: "Why should someone care?", active: true },
    { name: "Pricing", detail: "How will you charge?", active: false },
    { name: "Positioning", detail: "How do you stand out?", active: false },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-3xl mx-auto">
      {ps.map((p, i) => (
        <div
          key={i}
          className={`rounded-lg border p-4 text-center transition-all ${
            p.active
              ? "border-accent-green/30 bg-accent-green/5"
              : "border-white/[0.04] bg-white/[0.01] opacity-40"
          }`}
        >
          <span
            className={`text-[clamp(1.1rem,1.5vw,1.375rem)] font-bold ${
              p.active ? "text-deck" : "text-deck/50"
            }`}
          >
            {p.name}
          </span>
          <p
            className={`mt-1 text-[clamp(0.85rem,1.1vw,1rem)] ${
              p.active ? "text-deck-muted" : "text-deck/30"
            }`}
          >
            {p.detail}
          </p>
          {!p.active && (
            <p className="mt-1 font-code text-[0.75rem] uppercase tracking-wider text-deck/20">
              GTM phase
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function BeforeAfterPrototypeDiagram() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-5xl mx-auto">
      {/* Before / After panels */}
      <div className="flex items-center gap-6 w-full">
        {/* ── Left: Napkin Sketch ── */}
        <div className="flex-1 -rotate-1">
          <div className="rounded-sm border-2 border-dashed border-white/20 bg-[#2a2a28] p-5 shadow-lg">
            {/* Label */}
            <p className="font-code text-[0.7rem] uppercase tracking-[0.2em] text-deck/30 mb-3">
              Napkin sketch
            </p>

            {/* Wireframe illustration */}
            <div className="space-y-2.5">
              {/* Header bar */}
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full border border-white/15 bg-white/5" />
                <div className="h-2.5 w-24 rounded-sm bg-white/10" />
                <div className="ml-auto h-2.5 w-10 rounded-sm bg-white/8" />
              </div>

              <div className="h-px w-full bg-white/8" />

              {/* Body layout */}
              <div className="flex gap-2.5">
                {/* Sidebar */}
                <div className="w-1/4 space-y-2">
                  <div className="h-2 w-full rounded-sm bg-white/8" />
                  <div className="h-2 w-4/5 rounded-sm bg-white/8" />
                  <div className="h-2 w-full rounded-sm bg-white/8" />
                  <div className="h-2 w-3/5 rounded-sm bg-white/8" />
                </div>
                {/* Main content */}
                <div className="flex-1 space-y-2">
                  <div className="h-3.5 w-3/5 rounded-sm bg-white/10" />
                  <div className="flex gap-2">
                    <div className="h-14 flex-1 rounded-sm border border-dashed border-white/10 bg-white/[0.02]" />
                    <div className="h-14 flex-1 rounded-sm border border-dashed border-white/10 bg-white/[0.02]" />
                    <div className="h-14 flex-1 rounded-sm border border-dashed border-white/10 bg-white/[0.02]" />
                  </div>
                  <div className="h-2 w-full rounded-sm bg-white/6" />
                  <div className="h-2 w-4/5 rounded-sm bg-white/6" />
                  <div className="mt-1 h-6 w-20 rounded-sm border border-dashed border-white/12 bg-white/[0.03]" />
                </div>
              </div>
            </div>

            {/* Scribble accents */}
            <div className="mt-3 flex items-center gap-1.5">
              <span className="text-[0.65rem] text-white/15 italic">?? layout</span>
              <span className="text-[0.65rem] text-white/15 italic">→ CTA here?</span>
            </div>
          </div>
        </div>

        {/* ── Arrow ── */}
        <div className="flex flex-col items-center gap-1 shrink-0 px-2">
          <span className="text-[clamp(1.75rem,3vw,2.5rem)] text-accent-green/70">→</span>
          <span className="font-code text-[0.7rem] text-accent-green/50 whitespace-nowrap">
            AI + 2 hrs
          </span>
        </div>

        {/* ── Right: Polished Prototype ── */}
        <div className="flex-1 rotate-[0.5deg]">
          <div className="rounded-lg border border-white/[0.08] bg-[#1e1e1e] shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 bg-[#2a2a2a] px-3 py-2 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-accent-red/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent-amber/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent-green/60" />
              </div>
              <div className="ml-2 flex-1 rounded-sm bg-white/[0.06] px-2 py-0.5">
                <span className="font-code text-[0.6rem] text-white/25">localhost:3000/dashboard</span>
              </div>
            </div>

            {/* App UI */}
            <div className="p-4 space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[0.85rem] font-semibold text-deck">Dashboard</span>
                <span className="rounded-full bg-accent-green/15 px-2 py-0.5 font-code text-[0.6rem] text-accent-green">
                  Healthy
                </span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-md bg-white/[0.04] border border-white/[0.06] p-2.5">
                  <p className="font-code text-[0.55rem] uppercase tracking-wider text-deck/30">Runway</p>
                  <p className="text-[1.1rem] font-bold text-accent-green mt-0.5">8.2 mo</p>
                </div>
                <div className="rounded-md bg-white/[0.04] border border-white/[0.06] p-2.5">
                  <p className="font-code text-[0.55rem] uppercase tracking-wider text-deck/30">MRR</p>
                  <p className="text-[1.1rem] font-bold text-deck mt-0.5">$24k</p>
                </div>
                <div className="rounded-md bg-white/[0.04] border border-white/[0.06] p-2.5">
                  <p className="font-code text-[0.55rem] uppercase tracking-wider text-deck/30">Burn</p>
                  <p className="text-[1.1rem] font-bold text-accent-amber mt-0.5">$18k</p>
                </div>
              </div>

              {/* Table preview */}
              <div className="rounded-md bg-white/[0.02] border border-white/[0.05] p-2">
                <p className="text-[0.65rem] font-medium text-deck/60 mb-1.5">Outstanding Invoices</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-[0.55rem]">
                    <span className="text-deck/40">Acme Corp</span>
                    <span className="text-deck/50 font-code">$4,200</span>
                  </div>
                  <div className="flex justify-between text-[0.55rem]">
                    <span className="text-deck/40">Globex Inc</span>
                    <span className="text-deck/50 font-code">$1,800</span>
                  </div>
                  <div className="flex justify-between text-[0.55rem]">
                    <span className="text-deck/40">Initech</span>
                    <span className="text-deck/50 font-code">$3,100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PMF Concept Callout ── */}
      <div className="w-full rounded-md border border-accent-blue/25 bg-accent-blue/[0.06] px-5 py-3.5">
        <p className="text-[clamp(0.9rem,1.2vw,1.05rem)] leading-relaxed text-deck-muted">
          <span className="font-semibold text-deck">Product-Market Fit (PMF):</span>{" "}
          The point at which your product satisfies a real market demand — when users need
          what you&apos;ve built and are willing to pay for or consistently use it.{" "}
          <span className="italic text-accent-green/80">
            Everything in this workshop is in service of testing for PMF faster.
          </span>
        </p>
      </div>
    </div>
  );
}

export function DiagramSlide({ slide }: { slide: DiagramSlideType }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-16 py-12 overflow-hidden noise-overlay">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none gradient-mesh opacity-50" />

      {/* Atmospheric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-radial from-accent-green/[0.035] via-transparent to-transparent blur-3xl" />
        {/* Grid pattern - very subtle */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/[0.05]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/[0.05]" />

      <h2 className="relative z-10 text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight tracking-tight text-deck text-center mb-2">
        {slide.title}
      </h2>

      {slide.subtitle && (
        <p className="relative z-10 text-[clamp(1.05rem,1.4vw,1.25rem)] text-deck-muted text-center mb-8 max-w-3xl">
          {slide.subtitle}
        </p>
      )}

      {!slide.subtitle && <div className="mb-8" />}

      {/* Render the correct diagram */}
      <div className="relative z-10">
        {slide.diagramType === "system-architecture" && <SystemArchitectureDiagram />}
        {slide.diagramType === "prototyping-loop" && <PrototypingLoopDiagram />}
        {slide.diagramType === "six-p-framework" && <SixPFrameworkDiagram />}
        {slide.diagramType === "before-after-prototype" && <BeforeAfterPrototypeDiagram />}
      </div>

      {slide.callout && (
        <p className="relative z-10 mt-8 text-center text-[clamp(0.9rem,1.15vw,1.05rem)] text-deck/40">
          {slide.callout}
        </p>
      )}
    </div>
  );
}
