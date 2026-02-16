import { notFound } from "next/navigation";
import { slides } from "@/lib/slides";
import { TOTAL_SLIDES } from "@/lib/types";
import { SlideRenderer } from "@/components/slide-renderer";
import { Navigation } from "@/components/navigation";
import { SlideTransition } from "@/components/slide-transition";

// Generate static params for all 30 slides
export function generateStaticParams() {
  return Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
    id: String(i + 1),
  }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  // We need to handle this as a sync function that returns metadata
  // For static generation, we return a generic title
  return {
    title: `Slide — Rapid Prototyping with AI`,
  };
}

export default async function SlidePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const slideId = parseInt(id, 10);

  if (isNaN(slideId) || slideId < 1 || slideId > TOTAL_SLIDES) {
    notFound();
  }

  const slide = slides[slideId - 1];

  if (!slide) {
    notFound();
  }

  return (
    <div className="slide-container">
      <div className="slide-frame">
        <SlideTransition slideId={slideId}>
          <SlideRenderer slide={slide} />
        </SlideTransition>
      </div>
      <Navigation currentSlide={slideId} />
    </div>
  );
}
