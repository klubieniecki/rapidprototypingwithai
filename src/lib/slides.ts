import { Slide } from "./types";

export const slides: Slide[] = [
  // ─────────────────────────────────────────────
  // SECTION 1: OPENING (Slides 1-4)
  // ─────────────────────────────────────────────

  {
    id: 1,
    type: "title",
    title: "Rapid prototyping with AI",
    subtitle: "From Idea to Demo in Hours",
    meta: "Kyle Lubieniecki · Fractions",
    backgroundImage: "/Maven.png",
    notes: "On screen as people join. Match workshop SVG style.",
  },

  {
    id: 2,
    type: "content",
    title: "About me",
    subtitle: "Kyle — AI Product Leader & Founder, Fractions",
    bullets: [
      "10+ years in B2B SaaS product leadership",
      "$150M+ ARR shipped across fintech, edtech, platforms",
      "Startup → IPO experience",
    ],
    callout: "Helping non-technical operators become builders",
    notes: "Headshot placeholder, minimal layout. These are talking-point anchors.",
  },

  {
    id: 3,
    type: "quote",
    quote: "If you can describe it, you can build it.",
    subtext: "Today. Without writing code. Without hiring anyone.",
    notes: "Bold typography, nothing else. Let the statement breathe.",
  },

  {
    id: 4,
    type: "content",
    title: "What you're getting today",
    cards: [
      {
        heading: "AI Prototyping Toolkit",
        body: "AI-first product development framework • Ready-to-use prompt library • Value proposition testing guide",
        icon: "wrench",
      },
      {
        heading: "Bonus Content",
        body: "Modern AI Dev Stack overview • Agentic IDEs comparison • Git command reference • Pro prompt strategies",
        icon: "gift",
      },
      {
        heading: "Better Operators Community",
        body: "Free membership • Slack workspace • Ongoing resources for operators building with AI",
        icon: "users",
      },
    ],
    sideImage: "/QRCODE.png",
    sideImageLogo: "/better-light.png",
    sideImageCaption: "Scan to join",
    notes: "Three-card layout with QR code. Clear value delivery: toolkit, bonus content, community access.",
  },

  // ─────────────────────────────────────────────
  // SECTION 2: FOUNDATIONS (Slides 5-8)
  // ─────────────────────────────────────────────

  {
    id: 5,
    type: "diagram",
    title: "Anatomy of a software product",
    diagramType: "system-architecture",
    callout: "This is what we're building today →  Frontend",
    notes:
      "System design diagram: Frontend, Backend, API, Database, Auth, Hosting, Integrations. Frontend highlighted.",
  },

  {
    id: 6,
    type: "diagram",
    title: "What is a prototype?",
    subtitle:
      "Something functional enough that a real user can interact with it and tell you if you're onto something.",
    diagramType: "before-after-prototype",
    callout:
      "Looks real enough for an investor meeting · Tests product-market fit without burning cash · Disposable by design",
    notes:
      "Before/after visual: napkin sketch → polished browser UI. PMF concept callout baked into diagram component.",
  },

  {
    id: 7,
    type: "two-column",
    title: "What a prototype is NOT",
    leftColumn: {
      heading: "NOT",
      items: [
        "A finished product",
        "An architecture decision",
        "Proof of demand or willingness to pay",
        "Something to show friends for validation",
        "Worth polishing for days",
      ],
      accent: "red",
    },
    rightColumn: {
      heading: "IS",
      items: [
        "A learning tool",
        "A conversation starter",
        "A signal detector",
        "Disposable by design",
      ],
      accent: "green",
    },
    notes: "Stark contrast between the two columns is the point.",
  },

  {
    id: 8,
    type: "content",
    title: "Why prototyping matters",
    bullets: [
      "Speed over polish — The goal is useful, not beautiful",
      "Learning over perfection — Optimize for insight, not architecture",
    ],
    callout:
      "What used to take weeks and thousands of dollars can now happen in hours.",
    notes: "Tone-setting slide. Two bold statements.",
  },

  // ─────────────────────────────────────────────
  // SECTION 3: AI-FIRST MODEL (Slides 9-14)
  // ─────────────────────────────────────────────

  {
    id: 9,
    type: "quote",
    quote:
      "Give me six hours to chop down a tree, and I will spend the first four sharpening the axe.",
    attribution: "Abraham Lincoln",
    subtext: "Most people fail because they skip the preparation.",
    notes:
      "Poster-style. Libre Baskerville for the quote. Lots of white space. Memorable anchor slide.",
  },

  {
    id: 10,
    type: "two-column",
    title: "The modern AI prototyping stack",
    leftColumn: {
      heading: "AI Prototyping Tools",
      items: [
        "Lovable, Bolt, Base44, Replit, v0.dev",
        "Fast, but you hit a ceiling",
        "No code exposure",
      ],
      accent: "muted",
    },
    rightColumn: {
      heading: "AI Coding Agents ★",
      items: [
        "Cursor, Claude Code, Codex",
        "Steeper start, but you learn the mental models",
        "More control, real files",
      ],
      accent: "green",
    },
    subtitle: "The Modern AI Development Stack",
    callout: "★ What we're using today",
    notes:
      "Not a feature matrix — just a visual orientation. Star on Cursor + Claude Code.",
  },

  {
    id: 11,
    type: "content",
    title: "Getting set up",
    cards: [
      {
        heading: "Already have Claude?",
        body: "Great — use Claude's artifact mode for early steps.",
        icon: "check",
      },
      {
        heading: "Don't have Claude?",
        body: "Cursor offers a free trial with Claude built in. Download at cursor.com.",
        icon: "download",
      },
    ],
    callout: "Text is king. The terminal was scary — but it's where the real unlock happens.",
    notes: "Two-path fork. Star on Option B (coding agents).",
  },

  {
    id: 12,
    type: "content",
    title: "Design resources",
    cards: [
      {
        heading: "Aura Build",
        body: "Full-page layouts and design systems → generates code files",
        icon: "palette",
      },
      {
        heading: "shadcn/ui + tweakcn",
        body: "Component library + brand customizer → copy-paste code",
        icon: "component",
      },
      {
        heading: "Skills",
        body: "Reusable prompt instructions → persistent context for your AI",
        icon: "sparkles",
      },
    ],
    callout:
      "Not required — but if you want your prototype to feel real, these help.",
    notes: "Tool logos in a clean row/grid. Resource-reference style.",
  },

  {
    id: 13,
    type: "content",
    title: "Modes: How to talk to your AI",
    cards: [
      {
        heading: "🗺️ Plan Mode",
        body: "\"Don't write code yet. Plan the approach.\" Prevents the AI from sprinting in the wrong direction.",
        icon: "map",
      },
      {
        heading: "📖 Explanatory Output",
        body: "\"Explain what you're doing and why.\" Builds your mental models faster. Switch to concise once comfortable.",
        icon: "book",
      },
    ],
    notes: "Two simple cards. Clean and instructional.",
  },

  {
    id: 14,
    type: "diagram",
    title: "The AI-first prototyping loop",
    diagramType: "prototyping-loop",
    callout:
      "After testing, loop back — refine your understanding, regenerate, and test again.",
    notes:
      "Core mental model slide. Circular loop layout. Blue = Human, Green = AI, Amber = Collaboration.",
  },

  // ─────────────────────────────────────────────
  // SECTION 4: BEFORE YOU PROMPT (Slides 15-18)
  // ─────────────────────────────────────────────

  {
    id: 15,
    type: "diagram",
    title: "The 6P framework for product-market fit",
    diagramType: "six-p-framework",
    subtitle:
      "Focus on the 4 that matter for prototyping. Pricing & Positioning come later.",
    notes:
      "6 segments: Persona, Problem, Product, Proposition (active), Pricing, Positioning (dimmed). 4P table below.",
  },

  {
    id: 16,
    type: "content",
    title: "Creating a build brief",
    subtitle:
      "A 2–5 page requirements doc designed for AI coding agents.",
    numberedSteps: [
      { step: "Persona", detail: "Operator profile, not marketing avatar" },
      {
        step: "Problem",
        detail: "Quantified pain, trigger moments, workarounds",
      },
      {
        step: "Product",
        detail: "3–5 P0 features with user stories & acceptance criteria",
      },
      {
        step: "Proposition",
        detail: "Headline, subheadline, 3 benefits",
      },
    ],
    callout: "Not a PRD. Not 50 pages. Just enough context for AI to build something real.",
    notes:
      "Styled mockup of a markdown document with these four sections visible.",
  },

  {
    id: 17,
    type: "two-column",
    title: "Text is king",
    subtitle: "The most powerful communication technology ever invented — for 5,000 years.",
    leftColumn: {
      heading: "Always Has Been",
      items: [
        "Cuneiform tablets (3400 BCE)",
        "Optical telegraph (1790)",
        "Morse code & telegraphy",
        "Teletext & BBS systems",
      ],
      accent: "muted",
    },
    rightColumn: {
      heading: "Your AI Toolkit",
      items: [
        "Build Brief (.md) — your project context",
        "CLAUDE.md — project rules & preferences",
        "SKILLS.md — reusable instruction sets",
      ],
      accent: "green",
    },
    callout: "Structured .md files > chat conversations. Every time.",
    notes: "Inspired by Graydon Hoare's 'Always Bet on Text' essay. Text has outlasted every other medium because of precision, efficiency, and composability.",
  },

  // ─────────────────────────────────────────────
  // SECTION 5: LIVE BUILD (Slides 18-20)
  // ─────────────────────────────────────────────

  {
    id: 18,
    type: "section-divider",
    title: "Live build",
    subtitle: "From fuzzy idea to clickable demo",
    notes:
      "Transition slide before screen share begins. Last full slide before demo.",
  },

  {
    id: 19,
    type: "two-column",
    title: "The more specific your input, the more useful your output.",
    leftColumn: {
      heading: "Vague",
      items: ["\"Design me an app\""],
      accent: "red",
    },
    rightColumn: {
      heading: "Specific",
      items: [
        "\"Generate the HTML/CSS for a dashboard showing 30-day runway as a large number, green/amber/red health indicator, and 3 outstanding invoices. Calm, professional tone. Realistic sample data.\"",
      ],
      accent: "green",
    },
    notes:
      "Key principle of the entire build. Shown mid-build, Part 2.",
  },

  {
    id: 20,
    type: "two-column",
    title: "Real vs. mocked",
    leftColumn: {
      heading: "What's Real ✅",
      items: [
        "The interface",
        "The interactions",
        "The calculations (JS recalculates)",
        "The user flow",
      ],
      accent: "green",
    },
    rightColumn: {
      heading: "What's Fake 🎭 (On Purpose)",
      items: [
        "User accounts",
        "Database persistence",
        "Security",
        "Real integrations",
      ],
      accent: "muted",
    },
    callout: "For testing product-market fit? This is enough.",
    notes:
      "Shown mid-build, Part 3. Reset moment to manage expectations.",
  },

  // ─────────────────────────────────────────────
  // SECTION 6: TESTING FOR SIGNAL (Slides 21-23)
  // ─────────────────────────────────────────────

  {
    id: 21,
    type: "quote",
    quote:
      "Don't fall in love with the prototype — fall in love with learning.",
    sections: [
      {
        heading: "Good for",
        items: [
          "Concrete conversations",
          "Finding confusion points",
          "Generating behavior questions",
        ],
      },
      {
        heading: "Not good for",
        items: [
          "Measuring demand",
          "Proving willingness to pay",
          "Confirming usage habits",
        ],
      },
    ],
    notes:
      "Warning/caution tone. Demo Delusion callout. Headline is the star.",
  },

  {
    id: 22,
    type: "content",
    title: "Five testing tactics",
    numberedSteps: [
      {
        step: "Fake Door Tests",
        detail: "\"Get Early Access\" button → track clicks",
      },
      {
        step: "User Walkthroughs",
        detail: "Watch real target users think aloud. Don't help.",
      },
      {
        step: "Landing Page + Demo",
        detail: "Proposition page → demo link → $50 in ads",
      },
      {
        step: "Investor Signaling",
        detail: "Proves execution ability, not just ideas",
      },
      {
        step: "Five-Second Test",
        detail: "Show screen for 5 sec → \"What was this for?\"",
      },
    ],
    notes:
      "Reference slide — people will photograph it. Each tactic scannable in < 3 seconds.",
  },

  {
    id: 23,
    type: "content",
    title: "What feedback matters",
    bullets: [
      "✅ Behavior: \"I would check this every Monday morning.\"",
      "✅ Emotions: \"Seeing that number would stress me out.\"",
      "✅ Alternatives: \"Right now I do this in a spreadsheet.\"",
      "🔇 Usually noise: Feature suggestions. \"You should add X.\"",
    ],
    callout:
      "If 5 target users don't care → kill it or pivot. Don't polish failures.",
    notes:
      "Signal/noise framing. Green checks for signal, muted for noise.",
  },

  // ─────────────────────────────────────────────
  // SECTION 7: PROMPT LIBRARY (Slides 24-25)
  // ─────────────────────────────────────────────

  {
    id: 24,
    type: "content",
    title: "The prompt library",
    numberedSteps: [
      { step: "Fuzzy Idea → 4Ps", detail: "Force clarity with structured questions" },
      { step: "4Ps → Build Brief", detail: "Structure your context for AI" },
      { step: "Build Brief → Screens", detail: "Define the minimum user flow" },
      { step: "Screens → Code", detail: "Generate the actual interface" },
      { step: "Static → Interactive", detail: "Add JavaScript state and interactions" },
      { step: "Iterate", detail: "Specific changes, keep everything else" },
    ],
    callout: "Available in the Better Operators community materials.",
    notes:
      "Horizontal flow/pipeline graphic. Each stage is a node. Color-coded to match the loop.",
  },

  {
    id: 25,
    type: "quote",
    quote: "Specificity gets results. Vagueness gets noise.",
    sections: [
      {
        heading: "Example",
        items: [
          "❌  \"Make it better\"",
          "✅  \"Make the headline 72px bold and add a green badge for healthy runway\"",
        ],
      },
    ],
    notes:
      "Poster-style. Pairs with slide 9 (Lincoln quote) as a second memorable anchor.",
  },

  // ─────────────────────────────────────────────
  // SECTION 8: CLOSING (Slides 26-29)
  // ─────────────────────────────────────────────

  {
    id: 26,
    type: "content",
    title: "Your next 24 hours",
    numberedSteps: [
      {
        step: "Pick one idea",
        detail: "The one that's been nagging at you.",
      },
      {
        step: "Spend 15 minutes on the 4Ps",
        detail: "Who? What pain? What job? What headline?",
      },
      {
        step: "Generate one screen",
        detail: "Open Claude or Cursor. Just one screen. See what comes out.",
      },
    ],
    callout:
      "The goal isn't a finished prototype. It's proving to yourself that you can do this.",
    notes: "Checklist format. Clean, actionable.",
  },

  {
    id: 27,
    type: "content",
    title: "What NOT to do",
    bullets: [
      "❌ Don't spend a week perfecting your first prototype",
      "❌ Don't show it to friends and count that as validation",
      "❌ Don't start thinking about scale before you have signal",
      "❌ Don't fall in love with the prototype — fall in love with learning",
    ],
    notes: "Red markers, clean list. Firm but friendly guardrails slide.",
  },

  {
    id: 28,
    type: "two-column",
    title: "When this breaks down",
    leftColumn: {
      heading: "Works for",
      items: [
        "Testing product concepts",
        "Early-stage exploration",
        "Getting something in front of users fast",
        "Proving you can execute",
      ],
      accent: "green",
    },
    rightColumn: {
      heading: "Breaks down for",
      items: [
        "Deep backend logic",
        "Real-time collaboration",
        "Complex integrations",
        "Production-ready builds",
      ],
      accent: "red",
    },
    callout:
      "Most ideas die because founders can't get something in front of users fast enough. This solves that.",
    notes:
      "Honest, balanced. Not defensive — just clear about scope.",
  },

  {
    id: 29,
    type: "title",
    title: "Go build something.",
    subtitle:
      "The future belongs to builders who can turn ambiguity into artifacts.",
    meta: "Kyle Lubieniecki · Fractions · Better Operators Community",
    notes:
      "Final slide — stays up during Q&A. QR code should be large and scannable.",
  },
];
