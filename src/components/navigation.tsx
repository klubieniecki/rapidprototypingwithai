"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";
import { TOTAL_SLIDES } from "@/lib/types";

interface NavigationProps {
  currentSlide: number;
}

export function Navigation({ currentSlide }: NavigationProps) {
  const router = useRouter();
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (slide: number) => {
      if (slide >= 1 && slide <= TOTAL_SLIDES) {
        router.push(`/slides/${slide}`);
      }
    },
    [router]
  );

  const goNext = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const goPrev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(1);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(TOTAL_SLIDES);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, goTo]);

  // Touch / swipe navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          goNext(); // swipe left = next
        } else {
          goPrev(); // swipe right = prev
        }
      }
      touchStartX.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [goNext, goPrev]);

  // Pre-fetch adjacent slides
  useEffect(() => {
    if (currentSlide < TOTAL_SLIDES) {
      router.prefetch(`/slides/${currentSlide + 1}`);
    }
    if (currentSlide > 1) {
      router.prefetch(`/slides/${currentSlide - 1}`);
    }
  }, [currentSlide, router]);

  const progress = (currentSlide / TOTAL_SLIDES) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 group">
      {/* Progress bar container */}
      <div className="relative h-[3px] w-full bg-white/[0.04]">
        {/* Progress fill with glow */}
        <div
          className="h-full bg-gradient-to-r from-accent-green/60 to-accent-green/40 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
        {/* Leading edge glow */}
        <div
          className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-accent-green/30 blur-sm transition-all duration-500 ease-out"
          style={{ left: `calc(${progress}% - 2rem)` }}
        />
      </div>

      {/* Slide counter - appears on hover */}
      <div className="flex items-center justify-center py-2.5 opacity-40 transition-opacity group-hover:opacity-100">
        <div className="flex items-center gap-2">
          <span className="font-code text-[11px] tracking-[0.15em] text-deck/40">
            {String(currentSlide).padStart(2, '0')}
          </span>
          <span className="w-4 h-px bg-white/20" />
          <span className="font-code text-[11px] tracking-[0.15em] text-deck/25">
            {String(TOTAL_SLIDES).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}
