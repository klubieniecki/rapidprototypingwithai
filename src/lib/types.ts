// Slide type definitions — discriminated union

export type SlideType =
  | "title"
  | "content"
  | "quote"
  | "two-column"
  | "section-divider"
  | "diagram"
  | "resource"
  | "split";

// Prototyping loop stages (from slide 13)
export type LoopStage =
  | "clarify"      // Human (blue)
  | "constrain"    // Human + AI (amber)
  | "generate"     // AI (green)
  | "clickable"    // AI + Human (amber)
  | "test";        // Human (blue)

// Base fields shared by all slides
interface BaseSlide {
  id: number;
  type: SlideType;
  notes?: string; // speaker notes — not rendered on screen
  loopStage?: LoopStage; // optional badge showing position in prototyping loop
}

// Slide 1 (title), Slide 30 (closing)
export interface TitleSlide extends BaseSlide {
  type: "title";
  title: string;
  subtitle?: string;
  meta?: string; // e.g. name, logo, date line
  backgroundImage?: string; // path to a full-bleed background image (in /public)
}

// General-purpose content slide with header + items
export interface ContentSlide extends BaseSlide {
  type: "content";
  title: string;
  subtitle?: string;
  bullets?: string[];
  cards?: { heading: string; body: string; icon?: string; images?: string[] }[];
  callout?: string;
  numberedSteps?: { step: string; detail: string }[];
  sideImage?: string;
  sideImageLogo?: string;
  sideImageCaption?: string;
}

// Large centered text for quotes and callouts
export interface QuoteSlide extends BaseSlide {
  type: "quote";
  quote: string;
  attribution?: string;
  subtext?: string;
  // Below-quote structured content (e.g., slide 22 has good-for / not-good-for)
  sections?: { heading: string; items: string[] }[];
}

// Side-by-side comparison
export interface TwoColumnSlide extends BaseSlide {
  type: "two-column";
  title: string;
  subtitle?: string;
  leftColumn: {
    heading: string;
    items: string[];
    accent?: "red" | "muted" | "blue" | "green";
  };
  rightColumn: {
    heading: string;
    items: string[];
    accent?: "red" | "muted" | "blue" | "green";
  };
  callout?: string;
}

// Section transition
export interface SectionDividerSlide extends BaseSlide {
  type: "section-divider";
  title: string;
  subtitle?: string;
}

// Visual diagrams (system arch, loop, framework)
export interface DiagramSlide extends BaseSlide {
  type: "diagram";
  title: string;
  subtitle?: string;
  diagramType: "system-architecture" | "prototyping-loop" | "six-p-framework" | "before-after-prototype";
  callout?: string;
}

// Tool/resource grid
export interface ResourceSlide extends BaseSlide {
  type: "resource";
  title: string;
  subtitle?: string;
  resources: { name: string; description: string; icon?: string }[];
  callout?: string;
}

// Split-screen slide with quote on left, numbered points on right
export interface SplitSlide extends BaseSlide {
  type: "split";
  title: string;
  leftPanel: {
    quote: string;
    attribution?: string;
    stat?: string;
    statLabel?: string;
  };
  rightPanel: {
    heading?: string;
    numberedItems: { title: string; description: string }[];
  };
}

// Union type for all slides
export type Slide =
  | TitleSlide
  | ContentSlide
  | QuoteSlide
  | TwoColumnSlide
  | SectionDividerSlide
  | DiagramSlide
  | ResourceSlide
  | SplitSlide;

export const TOTAL_SLIDES = 27;
