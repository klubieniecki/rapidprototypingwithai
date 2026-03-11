# The Modern AI Development Stack

An overview of tools for building with AI, organized by approach.

---

## Two Approaches

| Approach | Tools | Tradeoffs |
|----------|-------|-----------|
| **AI Prototyping Tools** | Lovable, Bolt, Base44, Replit, v0.dev | Fast start, but you hit a ceiling. No code exposure. |
| **AI Coding Agents** | Cursor, Claude Code, Codex, Windsurf | Steeper start, but you learn mental models. More control, real files. |

---

## AI Prototyping Tools

### Best For
- Non-technical users wanting quick results
- Simple, single-page prototypes
- Exploring ideas before committing to code

### Limitations
- Limited customization
- Can't see or modify underlying code
- Harder to extend or maintain
- Platform lock-in

### Options

**[v0.dev](https://v0.dev)** — Vercel's AI UI generator
- Generates React + Tailwind components
- Good for UI components and landing pages
- Free tier available

**[Lovable](https://lovable.dev)** — Full-page app generator
- Generates complete applications
- Includes basic backend functionality
- Good for MVPs

**[Bolt](https://bolt.new)** — StackBlitz's AI coding tool
- Full-stack app generation
- Runs in browser
- Good for quick experiments

**[Replit](https://replit.com)** — AI-assisted online IDE
- Full development environment
- Deployment built in
- Good for learning

**[Base44](https://base44.com)** — No-code AI app builder
- Visual interface for building apps
- Connects to databases
- Good for internal tools

---

## AI Coding Agents

### Best For
- Building real, maintainable software
- Learning how code works
- Complex multi-file projects
- Full control over output

### Considerations
- Requires basic terminal familiarity
- Learning curve for IDE setup
- More powerful but more responsibility

### Options

**[Cursor](https://cursor.com)** — AI-native code editor
- Fork of VS Code with AI built in
- Claude and GPT models available
- Free trial, then subscription
- **Recommended for beginners**

**[Claude Code](https://claude.ai/code)** — Anthropic's CLI tool
- Terminal-based AI coding
- Deep codebase understanding
- Requires Claude subscription
- **What we're using in this workshop**

**[GitHub Copilot](https://github.com/features/copilot)** — GitHub's AI assistant
- Works in VS Code, JetBrains, etc.
- Good for autocomplete and suggestions
- Less agentic than Cursor/Claude Code

**[Windsurf](https://codeium.com/windsurf)** — Codeium's AI IDE
- Similar to Cursor
- Free tier available
- Good alternative option

---

## Design Enhancement Tools

These tools help make your prototype look polished:

**[Aura Build](https://aura.build)** — AI design system generator
- Full-page layouts and components
- Exports to code files
- Good for starting with design

**[shadcn/ui](https://ui.shadcn.com)** — Component library
- Beautiful, accessible components
- Copy-paste into your project
- Tailwind CSS based

**[tweakcn](https://tweakcn.com)** — shadcn theme customizer
- Visual brand customization
- Generates theme CSS
- Pairs with shadcn/ui

---

## Recommended Starting Stack

For this workshop and your first prototypes:

1. **Cursor** (free trial) or **Claude Code** (with Claude subscription)
2. **shadcn/ui** for components when needed
3. **Next.js** or plain **HTML/CSS/JS** for structure
4. **Tailwind CSS** for styling
5. **Vercel** for free deployment

This gives you:
- Real code you can modify
- Modern, professional output
- Free or low-cost tools
- Skills that transfer to production work
