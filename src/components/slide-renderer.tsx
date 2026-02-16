"use client";

import type { Slide } from "@/lib/types";
import { TitleSlide } from "./slides/title-slide";
import { ContentSlide } from "./slides/content-slide";
import { QuoteSlide } from "./slides/quote-slide";
import { TwoColumnSlide } from "./slides/two-column-slide";
import { SectionDivider } from "./slides/section-divider";
import { DiagramSlide } from "./slides/diagram-slide";

export function SlideRenderer({ slide }: { slide: Slide }) {
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
    default:
      return (
        <div className="flex h-full w-full items-center justify-center text-deck-muted">
          Unknown slide type
        </div>
      );
  }
}
