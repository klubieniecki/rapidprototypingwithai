"use client";

import type { Slide, LoopStage } from "@/lib/types";
import { TitleSlide } from "./slides/title-slide";
import { ContentSlide } from "./slides/content-slide";
import { QuoteSlide } from "./slides/quote-slide";
import { TwoColumnSlide } from "./slides/two-column-slide";
import { SectionDivider } from "./slides/section-divider";
import { DiagramSlide } from "./slides/diagram-slide";
import { SplitSlide } from "./slides/split-slide";

const loopStageConfig: Record<LoopStage, { label: string; num: number; color: string; bg: string; border: string }> = {
  clarify: {
    label: "Clarify",
    num: 1,
    color: "text-[#7dd3fc]",
    bg: "bg-[#7dd3fc]/10",
    border: "border-[#7dd3fc]/40",
  },
  constrain: {
    label: "Constrain",
    num: 2,
    color: "text-[#fcd34d]",
    bg: "bg-[#fcd34d]/10",
    border: "border-[#fcd34d]/40",
  },
  generate: {
    label: "Generate",
    num: 3,
    color: "text-accent-green",
    bg: "bg-accent-green/10",
    border: "border-accent-green/40",
  },
  clickable: {
    label: "Make Clickable",
    num: 4,
    color: "text-[#fcd34d]",
    bg: "text-[#fcd34d]",
    border: "border-[#fcd34d]/40",
  },
  test: {
    label: "Test",
    num: 5,
    color: "text-[#7dd3fc]",
    bg: "bg-[#7dd3fc]/10",
    border: "border-[#7dd3fc]/40",
  },
};

function LoopStageBadge({ stage }: { stage: LoopStage }) {
  const config = loopStageConfig[stage];
  return (
    <div className={`absolute top-6 right-8 flex items-center gap-2 rounded-full border ${config.border} ${config.bg} px-3 py-1.5 backdrop-blur-sm`}>
      <span className={`font-code text-sm font-bold ${config.color}`}>{config.num}</span>
      <span className={`text-sm font-medium ${config.color}`}>{config.label}</span>
    </div>
  );
}

export function SlideRenderer({ slide }: { slide: Slide }) {
  const renderSlide = () => {
    switch (slide.type) {
      case "title":
        return <TitleSlide slide={slide} />;
      case "content":
        return <ContentSlide slide={slide} />;
      case "quote":
        return <QuoteSlide slide={slide} />;
      case "two-column":
        return <TwoColumnSlide slide={slide} />;
      case "section-divider":
        return <SectionDivider slide={slide} />;
      case "diagram":
        return <DiagramSlide slide={slide} />;
      case "split":
        return <SplitSlide slide={slide} />;
      default:
        return (
          <div className="flex h-full w-full items-center justify-center text-deck-muted">
            Unknown slide type
          </div>
        );
    }
  };

  return (
    <div className="relative h-full w-full">
      {slide.loopStage && <LoopStageBadge stage={slide.loopStage} />}
      {renderSlide()}
    </div>
  );
}
