# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 presentation web application for the "Rapid Prototyping with AI" workshop. The app renders 30 slides with keyboard/touch navigation, smooth transitions, and responsive design. All slides are statically generated at build time.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production (statically generates all 30 slides)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- Next.js 16 with App Router
- React 19, TypeScript 5
- Tailwind CSS 4 with `@tailwindcss/postcss`
- Framer Motion for slide transitions
- shadcn/ui + Radix UI components

### Key Directories
```
src/
├── app/slides/[id]/page.tsx   # Dynamic slide routes (statically generated)
├── components/slides/         # Slide type components (title, content, quote, etc.)
├── components/                # Navigation, SlideRenderer, transitions
└── lib/
    ├── types.ts               # Discriminated union types for 7 slide types
    └── slides.ts              # All 30 slides content data
```

### Core Patterns

**Discriminated Union Types**: All slides use a TypeScript discriminated union in `types.ts`. Each slide has a `type` field that determines its structure. `SlideRenderer` switches on this type to render the correct component.

**Static Generation**: The `generateStaticParams()` function pre-renders all 30 slides at build time. No server-side rendering needed.

**Content-First Data Model**: All slide content lives in `src/lib/slides.ts` as a typed array. To add or modify slides, edit this file directly.

### Adding a New Slide Type
1. Add the type name to `SlideType` union in `types.ts`
2. Create a new interface extending `BaseSlide` with the `type` literal
3. Add the interface to the `Slide` union
4. Create a component in `components/slides/`
5. Add a case to the switch in `SlideRenderer`

### Theme Colors (defined in globals.css)
- `--color-deck`: #fffef0 (cream foreground)
- `--color-bg-deck`: #171717 (dark background)
- Accents: blue (#1612d3), green (#c1ff72), red (#ff6b6b), amber (#ffb347)
