# **Rapid Prototyping with AI**

*From Idea to Demo in Hours*

Workshop — Facilitator Script

---

## **Opening: Why This Works Now**

*Objective: Reframe the problem and set expectations*

---

### 📊 SLIDE 1 — Title Slide

> **On slide:** Workshop title "Rapid Prototyping with AI: From Idea to Demo in Hours." Your name, Fractions Studio logo, date, and event name. Clean, minimal — one bold headline, no clutter.
>
> **Visual:** Fractions Studio branding. Optional subtle graphic of a rough sketch transforming into a polished interface.

---

### 📊 SLIDE 2 — About Me

> **On slide:** Your photo. Name: Kyle. Title: Product Leader & Founder, Fractions Studio. Three credential bullets: "10+ years in B2B SaaS product leadership," "$150M+ ARR shipped across fintech, edtech, platforms," "Startup → IPO experience." Fractions Studio tagline at the bottom.
>
> **Visual:** Headshot, minimal layout. No wall of text — these are talking-point anchors.

Good afternoon, everyone. I'm Kyle — I'm a product leader. I've spent over a decade taking products from zero to one, helping companies find product-market fit. I've worked in fintech, edtech, platform products — from early startup through IPO. I've shipped products that generated over $150 million in ARR.

I want to start with a confession. Until recently, I had never shipped a single line of code.

I had a GitHub account. I'd sat next to engineers for years. But I was intimidated by the terminal, afraid of breaking things, and convinced that real coding required a computer science degree I didn't have.

Then I started using AI-powered development tools — Cursor, Claude Code — and something clicked. I shipped my first production app. Then my second. And I finally understood how all the pieces fit together. The mental models I'd been missing for a decade suddenly made sense.

That shift is why I started Fractions, where I help non-technical operators become builders. And that's what this session is all about.

> **Asset — Cursor:** An AI-native code editor (IDE) that embeds AI models like Claude directly into the coding environment. You write natural language instructions and the AI writes, edits, and explains code alongside you. Free trial available.
>
> **Asset — Claude Code:** Anthropic's command-line AI coding agent. You interact with it in the terminal — describe what you want built, and it writes and runs code directly in your project. More advanced than chat-based AI, but more powerful for structured builds.

---

### 📊 SLIDE 3 — "If you can describe it, you can build it"

> **On slide:** The quote "If you can describe it, you can build it" as a large, centered headline. Subtext: "Today. Without writing code. Without hiring anyone."
>
> **Visual:** Bold typography, nothing else. Let the statement breathe.

If you can clearly describe what you want, you can build it. Today. Without writing code. Without hiring anyone.

We're going to cover a lot today. If you struggle to follow along, don't worry — ask questions, watch the recording, or join my community where I'll be available to answer your questions.

---

### 📊 SLIDE 4 — What You're Walking Away With

> **On slide:** Three grouped sections with icons or visual markers:
> - 🏘️ **Community:** Better Operators — free registration, Slack workspace
> - 🧰 **Toolkit:** AI-first product development framework, Prompt library, Value proposition testing guide
> - 🎁 **Bonus:** The Modern AI Development Stack, Agentic IDEs overview, Git Command Guide, Pro Prompt Strategies
>
> **Visual:** Clean card or column layout. Each section is scannable at a glance.

Here's what you'll have access to after the workshop:

**Community:** Access to my free community — Better Operators. Registration and a Slack workspace where I answer questions and share resources.

> **Asset — Better Operators:** A free community (registration + Slack) where Kyle shares AI tools, product development resources, prompt libraries, and answers questions from workshop attendees and builders.

**Toolkit:**
- Framework for AI-first product development
- Prompt library to accelerate your next product build
- How to test value propositions before writing code

**Bonus materials:**
- The Modern AI Development Stack
- Agentic IDEs overview
- Git Command Guide
- Pro Prompt Strategies

---

## **Foundations: What Are We Actually Building?**

*Objective: Level-set on what prototyping means in this context*

---

### 📊 SLIDE 5 — Anatomy of a Software Product

> **On slide:** A system design diagram showing the major layers of a real software product: Frontend (UI), Backend (server logic), API layer, Database, Authentication, Hosting/Infrastructure, Third-party integrations. Highlight or circle the Frontend layer — label it "This is what we're building today."
>
> **Visual:** Architectural diagram — boxes and arrows, color-coded by layer. Clean and educational, not intimidating. The point is to show how much exists under the hood, then immediately narrow the scope.

Before we build anything, let's zoom out. This is what a real software product looks like under the hood.

[Walk through the system design visual — frontend, backend, APIs, database, auth, hosting, etc.]

This is what an engineering team builds over months. It's also what makes most non-technical people think they need a developer to do anything. But here's the key insight: for testing whether your idea has legs, you don't need 90% of this. We're building the frontend — the thing a user sees and touches — with fake data underneath. That's enough to learn.

---

### 📊 SLIDE 6 — What Is a Prototype?

> **On slide:** Definition headline: "A prototype is something functional enough that a real user can interact with it and tell you if you're onto something." Below, three short bullets:
> - Looks real enough for an investor meeting
> - Tests product-market fit without burning cash
> - Disposable by design
>
> **Visual:** A single screenshot of a polished-looking prototype next to a rough sketch — showing the transformation. Or a before/after: napkin sketch → working browser UI.

Let me be clear about what I mean by "prototype." I'm not talking about production-ready software. I'm not talking about Figma mockups. I'm talking about something functional enough that a real user can interact with it and tell you if you're onto something. Something that looks real enough to get a meeting with an investor or customer. Something that lets you test for product-market fit without burning cash.

> **Concept — Product-Market Fit (PMF):** The point at which your product satisfies a real market demand — when users need what you've built and are willing to pay for or consistently use it. Everything in this workshop is in service of testing for PMF faster.

Because that's the goal. Always. Product-market fit. The prototype is just a tool for getting there faster.

---

### 📊 SLIDE 7 — What a Prototype Is NOT

> **On slide:** Two-column layout.
>
> **Left column (❌ NOT):** A finished product · An architecture decision · Proof of demand or willingness to pay · Something to show friends for validation · Worth polishing for days
>
> **Right column (✅ IS):** A learning tool · A conversation starter · A signal detector · Disposable by design
>
> **Visual:** Red/green or muted contrast between the two columns. Keep it stark — the contrast is the point.

A prototype is NOT:
- A finished product
- An architecture decision
- Proof of demand or willingness to pay
- Something to show your friends and count as validation
- Worth polishing for days

It IS:
- A learning tool
- A conversation starter
- A signal detector
- Disposable by design

---

### 📊 SLIDE 8 — Why Prototyping Matters

> **On slide:** Two ground rules as large paired statements:
> - "Speed over polish" — The goal is useful, not beautiful
> - "Learning over perfection" — Optimize for insight, not architecture
>
> Underneath: a single stat or framing line like "What used to take weeks and $000s can now happen in hours."
>
> **Visual:** Minimal. Two bold statements, maybe with a simple icon each. This is a tone-setting slide, not a data slide.

A few ground rules before we start. First: speed over polish. The goal is not to make something beautiful. The goal is to make something useful for learning. Second: learning over perfection. We're optimizing for insight, not architecture.

The reason this matters now — more than ever — is that the cost of testing an idea has collapsed. What used to take weeks and thousands of dollars can happen in hours. The founders who take advantage of that speed will out-learn everyone else.

---

## **The AI-First Product Development Model**

*Objective: Give them a mental map before touching tools*

---

### 📊 SLIDE 9 — "Sharpen the Axe"

> **On slide:** The Lincoln quote as a large pull-quote: *"Give me six hours to chop down a tree, and I will spend the first four sharpening the axe."* Attribution below. A single supporting line: "Most people fail because they skip the preparation."
>
> **Visual:** Editorial-style quote layout. Serif font for the quote if using Fractions brand (Libre Baskerville). Lots of white space. This is a memorable anchor slide — it should feel like a poster.

With all the tools, workflows, and tutorials you see online, it's easy to just want to "do things" and start prompting. But let me tell you something: focus on sharpening your context.

*"Give me six hours to chop down a tree, and I will spend the first four sharpening the axe."* — Abraham Lincoln

Most people, when they discover AI coding tools, immediately start prompting. "Build me an app that does X." And they get garbage. Not because the tools are bad, but because they skipped the sharpening.

The preparation work — the clarity work — is where the real leverage is. So let me give you the mental model.

---

### 📊 SLIDE 10 — What Tools Should I Use?

> **On slide:** A visual stack diagram titled "The Modern AI Development Stack." Two tiers:
>
> **Top tier — AI Prototyping Tools (Visual, no-code):** Logos/names for Lovable, Bolt, Base44, Replit. Label: "Fast, but you hit a ceiling."
>
> **Bottom tier — AI Coding Agents (Code-aware, more control):** Logos/names for Cursor, Claude Code, Codex. Label: "Steeper start, but you learn the mental models." A star or highlight on Cursor + Claude Code indicating "What we're using today."
>
> **Visual:** Stacked diagram or two-row comparison. Not a feature matrix — just a visual orientation of the landscape.

Before we get into the methodology, let's talk about tools. You've probably heard of tools like Lovable, Bolt, Base44, Replit — visual tools that let you describe an app and get something back. They're impressive. And I'm not going to stop you from using them.

But I want to be transparent about why *I* don't use them for this work, and why we're going to use Cursor and Claude Code today.

Those visual tools are great for speed, but they abstract away everything. You don't learn how the pieces fit together. You can't debug meaningfully. And when you hit their limits — and you will — you're stuck. You've built something you don't understand inside a platform you can't leave.

With a coding agent like Cursor or Claude Code, you're building real files, real code, in an environment you control. You learn the mental models. And — critically for what we're doing — you can give the AI structured context that produces dramatically better output. That's what we're going to prove today.

> **Asset — Lovable:** A visual AI app builder — describe what you want in natural language and it generates a working web app. No code exposure. Fast for simple projects, but limited control and hard to extend.
>
> **Asset — Bolt (by StackBlitz):** A browser-based AI coding tool that generates full-stack apps from prompts. Runs in a web container — no local setup required. Good for quick experiments, but the abstractions can be limiting.
>
> **Asset — Base44:** An AI-powered no-code platform for building web apps. Generates full applications from descriptions. Good for non-technical users who want something fast, but difficult to customize beyond what the platform supports.
>
> **Asset — Replit:** An online IDE with AI features (Replit Agent) that can build and deploy apps from natural language. Collaborative and beginner-friendly, but less control than local development.
>
> **Asset — Codex (OpenAI):** OpenAI's AI coding agent, similar to Claude Code. Command-line tool that writes code from natural language instructions. An alternative for teams already in the OpenAI ecosystem.

---

### 📊 SLIDE 11 — Getting Set Up

> **On slide:** Two paths, clearly separated:
>
> **"Already have Claude?"** → Great. Use Claude's artifact mode for early steps.
>
> **"Don't have Claude?"** → Cursor offers a free trial with Claude built in. Download at cursor.com.
>
> Below, the two option groups:
>
> **Option A: AI Prototyping Tools** — Base44, Lovable, Replit, V0
>
> **Option B: AI Coding Agents** ★ — Cursor IDE, Claude Code, Codex
>
> A callout box: "Text is king. The terminal was scary — but it's where the real unlock happens."
>
> **Visual:** Two-path fork diagram or simple two-column layout. Star or highlight on Option B to show the recommended path.

**If you have Claude (Pro or a free account), great.** You can follow along directly in Claude's artifact mode for the early steps.

**If not, Cursor offers a free trial — and it has Claude built right in.** That's the recommended path for the live build portion.

Here are your two paths:

**Option A: AI Prototyping Tools** *(no code exposure)*
- Base44
- Lovable
- Replit
- V0

> **Asset — V0 (by Vercel):** An AI tool that generates React UI components and pages from text or image prompts. Great for generating individual components or design inspiration. Not a full app builder — think of it as an AI design tool for specific pieces.

**Option B: AI Coding Agents** *(more control, more learning)*
- Cursor IDE
- Claude Code
- Codex

If you want to use the Option A tools, I'm not going to stop you. But please consider this: **text is king.** The terminal was scary and intimidating for me too. But after playing around with it for a few days, I very quickly unlocked so much. The mental models I'd been missing for a decade suddenly made sense. If you have the bandwidth, I'd encourage you to try Option B.

---

### 📊 SLIDE 12 — Design Resources

> **On slide:** Three tool cards, each with name and one-line description:
> - **Aura Build** — AI-assisted design generation for full layouts
> - **shadcn/ui** — Copy-paste component library for professional UI + **tweakcn** for brand customization
> - **v0.dev** — AI-generated individual UI components
>
> Footnote: "Not required — but if you want your prototype to *feel* real, these help."
>
> **Visual:** Tool logos or icons in a clean row/grid. Light, resource-reference style — not a deep dive.

When it comes to making your prototype look polished without design skills, here are the tools I recommend:

> **Asset — Aura Build:** An AI-assisted design tool that generates complete layout designs and UI compositions. Useful when you want a polished visual starting point for your prototype without doing design work from scratch.
>
> **Asset — shadcn/ui:** An open-source component library for React. Unlike traditional UI libraries, you copy the components directly into your project — you own the code. Provides professional-looking buttons, cards, modals, forms, and more out of the box.
>
> **Asset — tweakcn:** A visual customizer for shadcn/ui components. Lets you adjust colors, spacing, and styling to match your brand without manually editing CSS. Think of it as a theme editor for your component library.

- **Aura Build** — AI-assisted design generation
- **shadcn/ui** — A component library that gives you professional-looking UI out of the box
  - **tweakcn** — A customizer for shadcn components so you can dial in your brand
- **v0.dev** — For generating individual UI components when you need inspiration

These aren't required — you can prototype with raw HTML. But if you want your prototype to *feel* real when you put it in front of someone, these help.

---

### 📊 SLIDE 13 — Modes: How to Talk to Your AI

> **On slide:** Two mode cards:
>
> **🗺️ Plan Mode:** "Don't write code yet. Plan the approach." — Prevents the AI from sprinting in the wrong direction. The AI sharpens its own axe.
>
> **📖 Output Style — Explanatory:** "Explain what you're doing and why." — Builds your mental models faster. Switch to concise mode once you're comfortable.
>
> **Visual:** Two simple cards with icon, mode name, one-liner, and a brief "when to use" note. Clean and instructional.

Two quick settings that will change how your AI works with you:

> **Concept — Plan Mode:** A workflow pattern (available in Cursor and Claude Code) where you ask the AI to plan its approach before writing any code. The AI outlines what files it will create, what architecture it will use, and what steps it will take — then you approve before it executes. Prevents wasted effort and wrong-direction builds.
>
> **Concept — Explanatory Output Style:** A setting or prompting approach where the AI explains its reasoning and decisions as it works, rather than just outputting code silently. Invaluable for learning, because you understand *why* the code is structured the way it is.

**Plan Mode:** Before you ask the AI to build anything, ask it to *plan*. "Don't write code yet. Plan the approach." This prevents the AI from sprinting in the wrong direction. Think of it as the AI sharpening its own axe.

**Output Style — Explanatory:** When you're learning, set your AI to explain what it's doing and why. You'll build faster mental models. Once you're comfortable, switch to concise mode for speed.

---

### 📊 SLIDE 14 — The AI-First Prototyping Loop

> **On slide:** A circular or linear flow diagram with five steps. Each step labeled with who does the work:
>
> 1. **Clarify** the problem & value → 🧠 Human
> 2. **Constrain** the scope → 🧠 Human + 🤖 AI
> 3. **Generate** interface & flows → 🤖 AI + 🧠 Human direction
> 4. **Make it clickable** → 🤖 AI + 🧠 Human direction
> 5. **Test** for signal → 🧠 Human
>
> **Visual:** Loop or pipeline diagram. Color-code human steps vs. AI steps vs. shared steps. This is the core mental model — it should be clear enough to photograph and remember.

There are five steps, and I'm going to be explicit about where AI helps and where your judgment still matters.

**Step 1: Clarify the problem and value (Human work)**

This is where most people skip ahead. They have a fuzzy idea and start asking AI to build it. That's a recipe for frustration. AI is incredibly powerful, but it's not a mind reader. Garbage in, garbage out.

**Step 2: Constrain the scope (Human + AI)**

When you can build anything, the temptation is to build everything. Wrong move. The tighter your constraints, the better your output. AI can help you narrow, but the decisions are yours.

**Step 3: Generate interface and interactive flows (AI + Human direction)**

Now we start using AI to create the actual screens and user flows. Notice this is step three, not step one. We're not asking AI to "design an app." We're directing it to design specific screens for a specific user doing a specific thing.

**Step 4: Test for signal (Human work)**

Notice I didn't say "validate." Validation implies confirmation. What we're looking for is signal — information that helps us decide whether to keep going, pivot, or kill the idea. The goal is product-market fit, and the prototype is how we test for it.

---

## **Activities Before You Prompt**

*Objective: The sharpening work that makes everything else work*

---

### 📊 SLIDE 15 — The 6P Framework for Product-Market Fit

> **On slide:** A visual of the full 6P Framework — six labeled segments (Persona, Problem, Product, Proposition, Pricing, Positioning). The first four highlighted/active, the last two dimmed with a label: "Important for GTM — not needed for prototyping."
>
> Below the visual, the 4P table:
>
> | P | What It Answers |
> |---|-----------------|
> | Persona | Who are you building for? |
> | Problem | What pain are you solving? |
> | Product | What features are you building? |
> | Proposition | Why should someone care? |
>
> **Visual:** Hexagonal, circular, or card-based framework diagram. The dimmed Pricing/Positioning Ps should be visible but clearly deprioritized. This is a reference framework they'll photograph.

Here's the preparation work that most people skip. Before you write a single prompt, you need clarity. I use a framework I call the 6Ps for Product-Market Fit. Today we're going to focus on the four that matter most for prototyping:

> **Asset — The 6P Framework:** A product-market fit framework developed by Kyle at Fractions Studio. The six Ps are Persona, Problem, Product, Proposition, Pricing, and Positioning. Together they form a complete system for defining, building, and testing a product concept. For prototyping, only the first four matter — Pricing and Positioning become relevant at go-to-market.

| P | What It Answers | Why It Matters for Prototyping |
| :---- | :---- | :---- |
| **Persona** | Who are you building for? | Guides UX decisions and technical complexity |
| **Problem** | What pain are you solving? | Validates the "why" behind the build |
| **Product** | What features are you building? | The actual user stories and acceptance criteria |
| **Proposition** | Why should someone care? | The landing page copy that sells the prototype |

*(The remaining 2Ps — Pricing and Positioning — matter for go-to-market, but you don't need them for a prototype.)*

---

### 📊 SLIDE 16 — Creating a Build Brief

> **On slide:** Headline: "The Build Brief." Subtitle: "A 2–5 page requirements doc designed for AI coding agents."
>
> Four section headers shown as a document outline mockup:
> 1. Persona (operator profile)
> 2. Problem (quantified pain, trigger moments, workarounds)
> 3. Product (3–5 P0 features with user stories)
> 4. Proposition (headline, subheadline, 3 benefits)
>
> Callout: "Not a PRD. Not 50 pages. Just enough context for AI to build something real."
>
> **Visual:** A styled mockup of a markdown document with these four sections visible, suggesting a clean .md file. Think: a document preview, not a wall of text.

Once you've worked through the 4Ps, you formalize them into what I call a **Build Brief** — a lightweight requirements document specifically designed for AI coding agents.

> **Asset — Build Brief:** A 2–5 page markdown document that captures everything an AI coding agent needs to build a working prototype. Structured around the 4Ps (Persona, Problem, Product, Proposition), it includes operator profiles, quantified pain points, user stories with acceptance criteria, and the value proposition headline. It replaces the traditional 50-page PRD with just enough context for AI to produce targeted output. Think of it as a creative brief, but for an AI developer.

It's not a traditional PRD. It's 2–5 pages, not 50. It contains just enough context for an AI to build a working prototype that demonstrates your core concept. Think of it as a creative brief, but for an AI developer.

The Build Brief is the single most important artifact in this entire workflow. It's the document you hand to Cursor or Claude Code that says: "Here's exactly what I need you to build, and here's the context for why."

---

### 📊 SLIDE 17 — Inspiration: Text Is King

> **On slide:** Headline: "Text is King." Three tiered items, each with a brief description:
>
> 1. **Build Brief (.md)** — Your project brief for AI. The starting input.
> 2. **CLAUDE.md** — Project-level rules, corrections, and preferences. The AI reads this first every session.
> 3. **SKILLS.md** — Reusable instruction sets for specific tasks. Your compounding playbook.
>
> Callout: "Structured .md files > chat conversations. Every time."
>
> **Visual:** A file tree or stacked-file illustration showing these three .md files in a project directory. Suggest a VS Code or Cursor sidebar aesthetic.

Here's the unlock that separates people who get mediocre results from people who get great ones:

**AI coding agents work best when you give them structured text files, not chat conversations.**

A Build Brief in markdown is more powerful than an hour of back-and-forth chatting.

> **Asset — CLAUDE.md:** A project-level markdown file that lives in the root of your codebase. When Claude Code or Cursor starts a session, it reads this file first — before any prompts. It contains your project rules, tech stack preferences, coding conventions, known bugs, and corrections from past sessions. Think of it as the AI's onboarding document for your project. It compounds — the more you invest in it, the better every session gets.
>
> **Asset — SKILLS.md:** Reusable markdown instruction files that teach the AI how to perform specific tasks in your style. Examples: "Here's how I want you to write React components," "Here's my testing approach," "Here's how I structure API calls." You build these over time as a personal playbook, and reference them across projects.

Advanced users take this further:
- **CLAUDE.md** files — project-level instructions that capture rules, corrections, and preferences. Every time the AI starts working, it reads this file first. Think of it as the AI's onboarding document for your project.
- **SKILLS.md** files — reusable instruction sets for specific tasks. "Here's how I want you to write React components." "Here's my testing approach."

These `.md` files are your leverage. They compound. The more you invest in them, the better every future session gets.

---

### 📊 SLIDE 18 — Common Traps

> **On slide:** Four numbered traps, each with a short label and one-line description:
>
> 1. **Over-prompting** — Start simple, iterate. It's a conversation, not a contract.
> 2. **Fake users** — Your roommate saying "this is cool" is politeness, not validation.
> 3. **Premature polish** — Don't perfect the color palette on an untested hypothesis.
> 4. **Skipping the proposition** — If you can't write a compelling headline, reconsider what you're building.
>
> **Visual:** Warning/caution styling — amber or red accent marks. Quick-scan format. Each trap is one line max on the slide.

Let me flag some common traps before we dive into the build.

**Trap 1: Over-prompting.** People write elaborate, 500-word prompts trying to anticipate every edge case. Don't. Start simple. Iterate. It's a conversation, not a contract.

**Trap 2: Fake users.** Your roommate clicking through your prototype and saying "this is cool" is not validation. It's politeness.

**Trap 3: Premature polish.** I've seen people spend days perfecting the color palette of a prototype that tests a hypothesis nobody cares about.

**Trap 4: Skipping the proposition.** If you can't write a compelling headline and three bullet points that would make someone care, reconsider what you're building.

Let's build something.

---

## **Live Build: From Fuzzy Idea to Clickable Demo**

*Objective: Prove it's real by doing it live*

---

### 📊 SLIDE 19 — Live Build

> **On slide:** Section transition slide. Large headline: "Live Build." Subtitle: "From fuzzy idea to clickable demo." Optional: a small progress indicator showing you're entering the hands-on portion.
>
> **Visual:** Minimal transition slide. After this, you're screen-sharing for the build — this is the last full slide before the demo begins.

Alright, here we go. I'm going to share my screen and walk you through the entire process. Feel free to call out questions as we go.

---

### **Part 1: Building the Build Brief**

*[Screen share — working in Claude or Cursor]*

Let me start with a deliberately messy idea. [Choose one based on audience:]

*For founders:* "I want to build something that helps small business owners manage their cash flow better."

*For corporate:* "We need a tool that helps our sales team track customer conversations."

*For general:* "An app that helps people form better habits."

Notice how vague that is? That's how most ideas start. Now I'm going to sharpen the axe by working through the 4Ps.

**P1: Persona — Who exactly are we building for?**

Not "small business owners" — that's millions of people with wildly different needs. I need an operator profile, not a marketing avatar.

[Think out loud:]

Freelance consultants. Solo operators who invoice clients monthly and struggle to know if they're going to make rent next month because their income is lumpy. They're comfortable with spreadsheets but not accounting software. They check their bank balance on their phone. Success means: they open the app and feel relief or urgency within 5 seconds.

**P2: Problem — What specific pain are we solving?**

The problem statement needs to pass the "show me the pain" test. Can I quantify it? Can I describe a specific frustrating moment?

[Think out loud:]

Trigger moment: It's the 20th of the month. Rent is due in 10 days. They have three outstanding invoices totaling $15,000, but historically clients pay anywhere from 15 to 45 days late. They don't know if they'll make rent. The current workaround is a messy spreadsheet they forget to update and a lot of anxiety.

**P3: Product — What's the single job-to-be-done?**

Not cash flow "management" — that's too broad. I'm picking one job: Predicting. This tool predicts whether you'll have enough cash to cover expenses 30 days from now based on your outstanding invoices and typical payment patterns. That's it.

For the prototype, I need 3–5 P0 features maximum:
- Dashboard showing 30-day runway (days and dollars)
- List of outstanding invoices affecting the forecast
- Ability to mark an invoice as paid and see the forecast update

That's it. Authentication, mobile, real integrations — those are explicitly out of scope for the prototype.

**P4: Proposition — Why should someone care?**

This is the landing page test. If I can't write a headline that would make my persona stop scrolling, I'm solving the wrong problem.

**Headline:** "Know if you'll make rent. Before the 1st."

**Subheadline:** "AI-powered cash forecasting for freelancers who hate spreadsheets."

**Three benefits:** See your 30-day runway in 5 seconds. Track outstanding invoices without updating spreadsheets. Get alerts before cash gets tight.

See what happened there? I went from "cash flow management for small businesses" — which could be a hundred different products — to a specific tool for a specific person with a specific pain. That's buildable. That's testable.

Now, I can use AI to help formalize this into a proper Build Brief. [Open Claude and type:]

*"I'm building a cash forecasting tool for freelance consultants. Attached is what I know. Help me structure this into a Build Brief with Persona, Problem, Product (with user stories and acceptance criteria), and Proposition sections. I've attached the Build Brief template. Keep it under 3 pages."*

See how I'm using AI to structure, not to think? I've done the hard work. Now I'm using AI to format it in a way that will be useful for the next step.

---

### **Part 2: Interface and Flow Generation**

*[Still screen-sharing]*

### 📊 SLIDE 20 — "The more specific your input, the more useful your output"

> **On slide:** The quote "The more specific your input, the more useful your output" as a centered headline. Below, a side-by-side comparison:
>
> ❌ **Vague:** "Design me an app"
>
> ✅ **Specific:** "Generate the HTML/CSS for a dashboard showing 30-day runway as a large number, green/amber/red health indicator, and 3 outstanding invoices. Calm, professional tone. Realistic sample data."
>
> **Visual:** Split-screen comparison. Red/green or muted/highlighted contrast. This is the key principle of the entire build — make it visually memorable.

Now I have a Build Brief. Let me show you how to turn this into screens. The key is specificity — I'm being directive, using AI as my thought partner, not just hoping for the best.

[Type into Claude/Cursor:]

*"Based on this Build Brief, describe the minimum screens I need and the primary user flow. The user should feel relief or urgency within 5 seconds of opening the app. Be ruthlessly minimal — this is an MVP."*

[Wait for response, read it aloud, comment on what's useful]

Notice what I did. I didn't say "design me an app." I gave it the user, the core value, the emotional outcome, and a constraint. The more specific your input, the more useful your output.

Now let's generate the actual interface. [Type:]

*"Generate the HTML/CSS for the main dashboard screen. Show: a prominent 30-day runway number (days remaining as the headline, dollar amount smaller), a simple chart of projected balance over time, and a list of the 3 outstanding invoices affecting the forecast. Use green/amber/red indicator for runway health. Emotional tone: calm and professional, not alarming. Use realistic sample data — freelancer with $8,500 in outstanding invoices, $3,200 monthly expenses."*

[As code generates, narrate:]

Watch what's happening here. It's generating actual code. This isn't a mockup — this is a working interface. In about 30 seconds, I'm going to have something I can open in a browser.

[Preview the result]

There it is. Is this perfect? No. But I can put this in front of a freelancer right now and ask: "Would this be useful to you?" And I built it in two minutes.

Notice I specified realistic sample data. If I hadn't, I'd get "Lorem ipsum" and "John Doe" — and my prototype would feel fake. Details like these matter for testing.

Let me show you how to iterate. [Type:]

*"Make the runway number much larger — 72px bold. Add the status indicator as a colored badge next to it. Move the chart below the fold — the number is the hero element."*

See? Specific direction, not vague requests. This is how you get good output.

---

### **Part 3: Making It Clickable**

*[Still screen-sharing]*

### 📊 SLIDE 21 — Real vs. Mocked

> **On slide:** A two-column table:
>
> | ✅ What's Real | 🎭 What's Fake (On Purpose) |
> |---|---|
> | The interface | User accounts |
> | The interactions | Database persistence |
> | The calculations (JS recalculates) | Security |
> | The user flow | Real integrations |
>
> Callout: "For testing product-market fit? This is enough."
>
> **Visual:** Clean table with a subtle divider. Maybe a small "This is fake. On purpose." label. This slide gets shown mid-build — it's a reset moment to manage expectations.

We have a dashboard. But right now it's static. Let's make it interactive — and I want to be clear about something: we're going to fake a lot of this. On purpose.

[Type:]

*"Add interactivity. When I click an invoice, show a modal with invoice details and a 'Mark as Paid' button. When I click 'Mark as Paid', recalculate the runway and update the display. This is a prototype — no backend, just JavaScript state."*

[As it generates, explain:]

The AI is adding JavaScript to handle click events, creating a modal component, wiring up the interactions. All the things that would take a developer hours are happening in seconds.

Crucial point: this is fake. The data isn't real. There's no database. Refresh the page, it resets. And that's exactly what we want right now. We're not building a product — we're building a way to learn about your PMF.

[Demo the interaction]

Click. Modal appears. Click "Mark as Paid." Number updates. The runway goes from 18 days to 32 days. That's a working prototype.

Let me add one more feature. [Type:]

*"Add a simple form to add a new invoice. Fields: client name, amount, due date. When submitted, add it to the invoice list and recalculate the runway. Show how this affects the forecast."*

[Demo]

Now we have a two-way prototype. Users can view their forecast AND add data. This is enough to test whether the core value proposition resonates.

For testing product-market fit? This is enough.

And changes are cheap. Watch. [Type:]

*"Change the primary number from days to a confidence percentage. Instead of '18 days of runway' show 'High confidence' with 85% underneath, indicating likelihood of covering expenses."*

[Show the change]

That change took 10 seconds. In traditional development, that's a ticket, a sprint planning discussion, and a deployment. Here, it's a sentence.

Questions about the build process before we move on? [Pause]

---

## **Testing for Signal (Not Validation Theater)**

*Objective: Prevent "demo delusion" and focus on product-market fit*

---

### 📊 SLIDE 22 — "Don't fall in love with the prototype"

> **On slide:** Large headline: "Don't fall in love with the prototype — fall in love with learning." Below, two groups:
>
> **Good for:** Concrete conversations · Finding confusion points · Generating behavior questions
>
> **Not good for:** Measuring demand · Proving willingness to pay · Confirming usage habits
>
> Optional callout: ⚠️ "Demo Delusion: falling in love with your prototype because it exists."
>
> **Visual:** Warning/caution tone. The headline is the star — everything else supports it.

We have a prototype. It looks real. It feels real. And this is the most dangerous moment in the entire process.

Because right now, you're vulnerable to what I call "demo delusion." Demo delusion is when you fall in love with your prototype because it exists. You show it to friends. They say nice things. You start thinking about features and scale and fundraising. And you've learned nothing.

> **Concept — Demo Delusion:** The trap of falling in love with your prototype simply because it exists and looks real. Leads to showing it to friends for validation (who will be polite), thinking about scale prematurely, and skipping the actual learning that prototyping is designed to produce.

Remember: the goal is product-market fit. The prototype is a tool for testing, not an end in itself.

Let me be clear about what this prototype is good for:
- Having a concrete conversation instead of describing your idea
- Identifying confusion points when real users click through
- Generating specific questions about behavior, not opinions

What it's NOT good for: measuring demand, proving willingness to pay, or confirming people will remember to use it.

---

### 📊 SLIDE 23 — Five Testing Tactics

> **On slide:** Five numbered tactics, each with a one-line description:
>
> 1. **Fake Door Tests** — "Get Early Access" button → track clicks
> 2. **User Walkthroughs** — Watch real target users think aloud. Don't help.
> 3. **Landing Page + Demo** — Proposition page → demo link → $50 in ads
> 4. **Investor Signaling** — Proves execution ability, not just ideas
> 5. **Five-Second Test** — Show screen for 5 sec → "What was this for?"
>
> **Visual:** Numbered list or card layout. Each tactic is scannable in under 3 seconds. This is a reference slide — people will photograph it.

**Tactic 1: Fake Door Tests**

Add a button that says "Get Early Access." Track how many people click it. This tells you if your proposition is compelling enough to generate action. You can build this landing page the same way we just built the prototype.

**Tactic 2: User Walkthroughs**

Put the prototype in front of someone in your target persona — not your friend, your actual target user — and ask them to think out loud while they use it. Don't explain anything. Don't help them. Just watch and listen. The places where they struggle are gold.

**Tactic 3: Landing Page Plus Demo**

Create a landing page using your Proposition — that headline, subheadline, and three benefits — then link to the demo. Drive traffic to it. Even $50 in ads can teach you something. Look at the funnel: page views → demo clicks → signups.

**Tactic 4: Accelerator / Investor Signaling**

If you're pitching investors, this prototype is incredibly powerful. Not because it proves your idea works, but because it proves you can execute. You're not just a person with ideas — you're a person who builds things. That's differentiated.

**Tactic 5: The Five-Second Test**

Show someone the main screen for five seconds, then hide it. Ask them: What was this for? What could you do with it? If they can't answer correctly, your interface isn't communicating clearly.

---

### 📊 SLIDE 24 — What Feedback Matters

> **On slide:** Three categories of signal vs. noise:
>
> ✅ **Behavior:** "I would check this every Monday morning."
>
> ✅ **Emotions:** "Seeing that number would stress me out" / "That's exactly what I need."
>
> ✅ **Alternatives:** "Right now I do this in a spreadsheet and it takes an hour."
>
> 🔇 **Usually noise:** Feature suggestions. "You should add X." (Ignore most of it.)
>
> Bottom callout: "If 5 target users don't care → kill it or pivot. Don't polish failures."
>
> **Visual:** Signal/noise framing. Green checks for signal, muted/grey for noise. The "kill it or pivot" line should have weight — bold or isolated.

**Matters:** Feedback about behavior. "I would check this every Monday morning."

**Matters:** Feedback about emotions. "Seeing that number would stress me out" or "That's exactly what I need to feel in control."

**Matters:** Feedback about alternatives. "Right now I do this in a spreadsheet and it takes me an hour."

**Usually noise:** Feature suggestions. People love suggesting features. Ignore most of it. At this stage, you're validating the core, not optimizing.

And know when to stop. If five target users look at this and don't care, don't add features. Don't make it prettier. Kill it or pivot. The point of rapid prototyping is to fail fast, not to polish failures.

---

## **Your Prompt Library**

*Objective: Make it repeatable after the session*

---

### 📊 SLIDE 25 — The Prompt Library

> **On slide:** A visual pipeline showing six prompt stages, each with its label and a one-line summary:
>
> Fuzzy Idea → **4Ps** → **Build Brief** → **Screens** → **Code** → **Interactive** → **Iterate**
>
> Below the pipeline, each prompt shown as a truncated snippet (first line only) to indicate what's available in the takeaway materials. Don't put the full prompts on the slide — the slide is a map, the handout has the details.
>
> **Visual:** Horizontal flow/pipeline graphic. Each stage is a node or card. Color-coded to match the prototyping loop from Slide 14. This should feel like a reusable reference diagram.

> **Asset — The Prompt Library:** A set of six copy-and-adapt prompts that map to each stage of the prototyping workflow. Designed to be used sequentially — each prompt's output feeds into the next. Included in the Better Operators community materials and workshop handout.

These are the exact prompts you can copy and adapt:

**Fuzzy Idea → 4Ps:**

*"I have an idea for [rough description]. Help me sharpen this by asking clarifying questions about the Persona, Problem, Product, and Proposition. One question at a time. Don't let me stay vague."*

**4Ps → Build Brief:**

*"Structure this into a Build Brief with Persona (operator profile, not marketing avatar), Problem (quantified pain, trigger moments, current workarounds), Product (3–5 P0 features with user stories and acceptance criteria), and Proposition (headline, subheadline, 3 benefits). Keep it under 3 pages."*

**Build Brief → Screens:**

*"Based on this Build Brief, describe the minimum screens I need and the primary user flow. The user should [emotional outcome] within 5 seconds. Be ruthlessly minimal."*

**Screens → Code:**

*"Generate the HTML/CSS for [specific screen]. Show: [specific elements]. Use [emotional tone]. Use realistic sample data: [describe realistic examples relevant to your persona]."*

**Static → Interactive:**

*"Add interactivity. When I [action], [result]. This is a prototype — no backend, just JavaScript state."*

**Iterate:**

*"Change [specific element] to [specific change]. Keep everything else the same."*

---

### 📊 SLIDE 26 — Key Principle: Specificity

> **On slide:** The quote "Specificity gets results. Vagueness gets noise." as a large centered headline.
>
> Below, one concrete example:
>
> ❌ "Make it better"
>
> ✅ "Make the headline 72px bold and add a green badge for healthy runway"
>
> **Visual:** Same editorial quote style as Slide 9 (the Lincoln quote). Bold, clean, lots of white space. This is the second poster-worthy slide — it should pair with the axe quote as a memorable anchor.

**Key principle:** Always be specific. "Make it better" gets noise. "Make the headline 72px bold and add a green badge for healthy runway" gets what you want.

**"Specificity gets results. Vagueness gets noise."**

---

## **Closing: What to Build Next**

*Objective: Create momentum*

---

### 📊 SLIDE 27 — Your Next 24 Hours

> **On slide:** Three numbered action steps:
>
> 1. **Pick one idea.** The one that's been nagging at you.
> 2. **Spend 15 minutes on the 4Ps.** Who? What pain? What job? What headline?
> 3. **Generate one screen.** Open Claude or Cursor. Just one screen. See what comes out.
>
> Callout: "The goal isn't a finished prototype. It's proving to yourself that you can do this."
>
> **Visual:** Checklist or step format. Clean, actionable, feels like a to-do list you'd actually follow. Maybe with empty checkboxes to suggest action.

We're in the home stretch. Let me leave you with specific actions.

**In the next 24 hours:**

Pick one idea. Just one. It doesn't have to be your best idea. Pick the one that's been nagging at you.

Spend 15 minutes sharpening the axe. Work through the 4Ps: Who specifically is this for? What quantified pain? What single job-to-be-done? What's the headline?

Then open Claude or Cursor and generate one screen. Just one. See what comes out.

The goal isn't a finished prototype. It's proving to yourself that you can do this. Once you've done it once, you'll do it again.

---

### 📊 SLIDE 28 — What NOT To Do

> **On slide:** Four "don't" statements with ❌ markers:
>
> ❌ Don't spend a week perfecting your first prototype
>
> ❌ Don't show it to friends and count that as validation
>
> ❌ Don't start thinking about scale before you have signal
>
> ❌ Don't fall in love with the prototype — fall in love with learning
>
> **Visual:** Red ❌ markers, clean list. Tone is firm but friendly. This is a guardrails slide — it should feel like tough-love advice from a mentor.

- Don't spend a week perfecting your first prototype
- Don't show it to friends and count that as validation
- Don't start thinking about scale before you have signal
- Don't fall in love with the prototype — fall in love with learning

---

### 📊 SLIDE 29 — When This Breaks Down

> **On slide:** Two-column layout:
>
> **✅ Works for:** Testing product concepts · Early-stage exploration · Getting something in front of users fast · Proving you can execute
>
> **❌ Breaks down for:** Deep backend logic · Real-time collaboration · Complex integrations · Production-ready builds
>
> Bottom line: "Most ideas die because founders can't get something in front of users fast enough. This solves that."
>
> **Visual:** Honest, balanced two-column comparison. Not defensive — just clear about scope. The bottom line should stand out.

This works for testing product concepts. It doesn't work for products that require deep backend logic, real-time collaboration, or complex integrations.

It works for early-stage exploration. Once you've validated the concept and you're ready to build for real, you'll need real engineering.

But here's the thing: most ideas die in the early stage because founders can't get something in front of users fast enough. This approach solves that problem.

[Pause]

---

### 📊 SLIDE 30 — "Go build something."

> **On slide:** The closing statement as a large headline: "The future belongs to builders who can turn ambiguity into artifacts."
>
> Below: Better Operators logo/name with a QR code or short URL for community sign-up. Subtext: "Free community · Prompt library · Build Brief template · Bonus materials"
>
> Your name and Fractions Studio branding.
>
> **Visual:** This is the final slide — it stays up during Q&A. QR code should be large and scannable from the back of the room. Clean, confident, memorable. Think: keynote closing slide.

I want to close with this. We're living in a unique moment. For the first time ever, the ability to turn an idea into something tangible isn't gated by technical skills or capital. The gate has moved. It's now gated by clarity — by your ability to know what you want and articulate it precisely.

**The future belongs to builders who can turn ambiguity into artifacts.** After today, you can be one of those builders.

If you want to continue learning, join my free community — **Better Operators** — where I share more resources and answer questions. The prompt library, Build Brief template, and all the bonus materials are available there.

What questions do you have?

[Take Q&A until time]

Thank you all for your time. Go build something.
