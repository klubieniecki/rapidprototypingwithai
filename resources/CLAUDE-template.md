# CLAUDE.md Template

Place this file in your project root. It provides persistent context to AI coding agents about your project's rules, preferences, and conventions.

---

```markdown
# CLAUDE.md

## Project Overview

[One paragraph describing what this project is and its purpose]

## Tech Stack

- Framework: [e.g., Next.js 15, React 19]
- Styling: [e.g., Tailwind CSS, shadcn/ui]
- Language: [e.g., TypeScript]
- Other: [Any other key dependencies]

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run linter
```

## Project Structure

```
src/
├── app/           # [Description]
├── components/    # [Description]
├── lib/           # [Description]
└── styles/        # [Description]
```

## Code Conventions

- [Convention 1, e.g., "Use functional components with hooks"]
- [Convention 2, e.g., "Prefer named exports over default exports"]
- [Convention 3, e.g., "Use TypeScript strict mode"]

## Component Patterns

[Describe any patterns you want the AI to follow, e.g.:]
- All components receive props via destructuring
- Use `cn()` utility for conditional classNames
- Keep components under 100 lines — extract if larger

## Naming Conventions

- Components: PascalCase (e.g., `UserProfile.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Constants: SCREAMING_SNAKE_CASE (e.g., `MAX_RETRIES`)

## Design Tokens

[If you have specific colors, spacing, etc.:]
- Primary: #1612d3
- Accent: #c1ff72
- Background: #171717
- Foreground: #fffef0

## Things to Avoid

- [e.g., "Don't add comments unless logic is non-obvious"]
- [e.g., "Don't create utility files for one-time operations"]
- [e.g., "Don't add error handling for impossible scenarios"]

## Notes

[Any other context that helps the AI understand your project]
```

---

## Tips for Writing Effective CLAUDE.md

1. **Be specific** — Vague instructions get vague results
2. **Include examples** — Show what you want, not just what you don't want
3. **Update as you go** — Add conventions as they emerge
4. **Keep it scannable** — AI reads this every time, so make it efficient
