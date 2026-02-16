# Rapid Prototyping with AI

A presentation deck for the **"Rapid Prototyping with AI: From Idea to Demo in Hours"** workshop.

**Live Site:** [rapidprototypingwithai.vercel.app](https://rapidprototypingwithai.vercel.app)

## About the Workshop

This workshop teaches non-technical operators how to use AI tools to rapidly build and test product prototypes. Key topics include:

- **The AI-First Product Development Model** — A 5-step loop for turning fuzzy ideas into clickable demos
- **The 4P Framework** — Persona, Problem, Product, Proposition
- **Live Build Demo** — Watch a prototype get built in real-time using AI coding agents
- **Testing for Signal** — How to validate ideas without falling into "demo delusion"
- **AI Prototyping Toolkit** — Tools, prompts, and workflows to make it repeatable

## Tech Stack

- [Next.js 16](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for transitions
- [shadcn/ui](https://ui.shadcn.com/) components

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the presentation.

## Navigation

- **Arrow keys** or **Space** — Navigate between slides
- **Touch/swipe** — Mobile navigation supported
- Direct URL access: `/slides/1`, `/slides/2`, etc.

## Project Structure

```
src/
├── app/slides/[id]/   # Dynamic slide routes (statically generated)
├── components/slides/ # Slide type components
├── lib/slides.ts      # All slide content data
└── lib/types.ts       # TypeScript types for slide variants
```

## License

MIT
