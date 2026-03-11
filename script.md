# **Rapid Prototyping with AI**

*From Idea to Demo in Hours*

45-Minute Workshop — Facilitator Script

---

# **0–4 min — Opening**

*Objective: Hook them and set expectations*

### SLIDE 1 — Title

On screen as people join.

### SLIDE 2 — About Me

Good afternoon, everyone. I'm Kyle — product leader, 10+ years taking products from zero to one. I've shipped products across fintech, edtech, and platforms that generated over $150M in ARR.

Here's my confession: until recently, I had never shipped a single line of code. I had a GitHub account. I'd sat next to engineers for years. But I was intimidated by the terminal, convinced real coding required a CS degree.

Then I started using AI coding tools — Cursor, Claude Code — and something clicked. The mental models I'd been missing for a decade suddenly made sense.

That shift is why I started Fractions, where I help non-technical operators become builders.

### SLIDE 3 — Core Promise

**If you can describe it, you can build it.** Today. Without writing code. Without hiring anyone.

We're covering a lot in 45 minutes. If you struggle to follow, don't worry — grab the resources, watch the recording, or join my community.

### SLIDE 4 — What You're Getting

Here's what you're walking away with: a prototyping toolkit, bonus content on the AI dev stack, and access to the Better Operators community. Scan the QR code now or at the end.

---

# **4–10 min — Foundations**

*Objective: Define terms and establish the mental model*

### SLIDE 5 — System Architecture

Let me ground us. This is what software looks like — frontend, backend, database, auth, the whole stack.

Today we're focused on the frontend. A clickable interface that looks and feels real, even without the backend wired up.

### SLIDE 6 — What Is a Prototype?

A prototype is something functional enough that a real user can interact with it and tell you if you're onto something.

It's not a finished product. It's not even a great Figma mockup. It's something that looks real enough to get a meeting, test an idea, or start a conversation about product-market fit.

### SLIDE 7 — What a Prototype Is NOT

Let me be explicit about what we're not doing. A prototype is not proof of demand. Not an architecture decision. Not worth polishing for days. Your roommate saying "this is cool" is not validation — it's politeness.

A prototype IS a learning tool. A conversation starter. A signal detector. Disposable by design.

### SLIDE 8 — Why This Matters

Two principles for today:

**Speed over polish** — The goal is useful, not beautiful.

**Learning over perfection** — We're optimizing for insight, not architecture.

What used to take weeks and thousands of dollars can happen in hours.

### SLIDE 9 — Lincoln Quote

*"Give me six hours to chop down a tree, and I will spend the first four sharpening the axe."*

Most people fail because they skip the preparation. They open Claude and type "build me an app" — and get garbage. Not because the tools are bad, but because they skipped the sharpening.

### SLIDE 10 — Modern AI Stack

Quick orientation on tools. You've got two paths:

**AI prototyping tools** — Lovable, Bolt, v0.dev. Fast, visual, but you hit a ceiling.

**AI coding agents** — Cursor, Claude Code. Steeper start, but you learn how everything fits together.

We're using coding agents today. That's where the real unlock happens.

### SLIDE 11 — Getting Set Up

If you have Claude, use it. If not, Cursor offers a free trial with Claude built in.

The terminal was scary to me. But after playing with it for a few days, I finally understood how all the pieces connect.

### SLIDE 12 — Design Resources

If you want your prototype to look polished, these help: Aura Build for layouts, shadcn/ui for components, Skills for reusable instructions. Not required — but good to know they exist.

### SLIDE 13 — Text is King

Here's the key principle: text is king. Structured markdown files are more powerful than chat conversations.

A Build Brief — your project context in a .md file — gives AI everything it needs to build something real. Advanced users create CLAUDE.md files that teach the AI their preferences.

---

# **10–32 min — Live Build**

*Objective: Prove it's real by doing it live*

### SLIDE 14 — Section Divider

Alright, let's build something. I'm going to share my screen and walk you through the whole process.

### SLIDE 15 — The Prototyping Loop

Here's the mental model. Five steps: Clarify the problem, constrain the scope, generate the interface, make it clickable, test for signal. After testing, loop back and refine.

Blue is human work. Green is AI execution. Amber is collaboration. Notice where your judgment matters versus where AI does the heavy lifting.

### SLIDE 16 — The 6P Framework

Before we prompt, we sharpen. The 6P framework: Persona, Problem, Product, Proposition, Pricing, Positioning.

For prototyping, we focus on the first four. Pricing and positioning come after you have signal.

### SLIDE 17 — Creating a Build Brief

A Build Brief is a 2-5 page requirements doc designed for AI coding agents. Not a PRD. Not 50 pages. Just enough context.

Four sections: Persona (operator profile, not marketing avatar), Problem (quantified pain and trigger moments), Product (3-5 features with acceptance criteria), Proposition (the headline that sells it).

---

## **Live Demo: Building the Build Brief (5 min)**

Let me start with a deliberately messy idea.

*"I want to build something that helps small business owners manage their cash flow better."*

Notice how vague that is? That's how most ideas start. Let me sharpen it.

**Persona:** Not "small business owners" — that's millions of people. Freelance consultants. Solo operators who invoice clients monthly. Comfortable with spreadsheets, not accounting software. They check their bank balance on their phone.

**Problem:** It's the 20th of the month. Rent is due in 10 days. Three outstanding invoices totaling $15,000, but clients pay anywhere from 15 to 45 days late. They don't know if they'll make rent. Current workaround: a messy spreadsheet and anxiety.

**Product:** One job — predicting. This tool predicts whether you'll have enough cash 30 days from now. Three features max: dashboard showing 30-day runway, list of outstanding invoices, ability to mark an invoice as paid.

**Proposition:** "Know if you'll make rent. Before the 1st." That's a headline that would make my persona stop scrolling.

Now I use AI to formalize this into a Build Brief.

[Prompt Claude:]

*"I'm building a cash forecasting tool for freelance consultants. Here's what I know: [paste the 4Ps]. Structure this into a Build Brief with Persona, Problem, Product (user stories and acceptance criteria), and Proposition sections. Keep it under 3 pages."*

See how I'm using AI to structure, not to think? I did the hard work. AI formats it for the next step.

---

### SLIDE 18 — Specificity Principle

**The more specific your input, the more useful your output.**

"Design me an app" gets garbage. "Generate HTML/CSS for a dashboard showing 30-day runway as a large number, green/amber/red health indicator, and 3 outstanding invoices — calm, professional tone, realistic sample data" — that gets what you want.

---

## **Live Demo: Interface Generation (8 min)**

Now I have a Build Brief. Let me turn it into screens.

[Prompt Claude:]

*"Based on this Build Brief, describe the minimum screens I need and the primary user flow. The user should feel relief or urgency within 5 seconds of opening the app. Be ruthlessly minimal."*

[Read response, comment on what's useful]

I gave it the user, the core value, the emotional outcome, and a constraint. Specific input, useful output.

Now let's generate the actual interface.

[Prompt Claude:]

*"Generate the HTML/CSS for the main dashboard screen. Show: a prominent 30-day runway number (days as the headline), a simple chart of projected balance, and 3 outstanding invoices. Use green/amber/red indicator for health. Emotional tone: calm and professional. Realistic sample data — freelancer with $8,500 in outstanding invoices, $3,200 monthly expenses."*

[As code generates:]

Watch this. It's generating actual code. Not a mockup — a working interface. In about 30 seconds, I'll have something I can open in a browser.

[Preview the result]

There it is. Is it perfect? No. But I can put this in front of a freelancer right now and ask: "Would this be useful?" Built in two minutes.

Let me iterate.

*"Make the runway number much larger — 72px bold. Add the status indicator as a colored badge. Move the chart below the fold."*

That change took 10 seconds. In traditional development, that's a ticket and a sprint.

---

## **Live Demo: Making It Clickable (7 min)**

We have a dashboard. Now let's make it interactive.

[Prompt Claude:]

*"Add interactivity. When I click an invoice, show a modal with details and a 'Mark as Paid' button. When clicked, recalculate the runway. This is a prototype — no backend, just JavaScript state."*

[As it generates:]

It's adding JavaScript for click events, creating a modal, wiring up interactions. Things that would take a developer hours.

[Demo the interaction:]

Click. Modal. Mark as Paid. Number updates — runway goes from 18 days to 32 days.

### SLIDE 19 — Real vs. Mocked

Let me be clear about what's real versus fake:

**Real:** The interface, the interactions, the calculations.

**Fake:** User accounts, database, security, real integrations.

For testing product-market fit? This is enough. We're 20 minutes into the build.

---

# **32–40 min — Testing for Signal**

*Objective: Prevent demo delusion*

### SLIDE 20 — Don't Fall in Love

We have a prototype. It looks real. And this is the most dangerous moment.

**Demo delusion** — falling in love with your prototype because it exists. You show it to friends, they say nice things, you start planning features... and you've learned nothing.

The goal is product-market fit. The prototype is a tool for testing.

### SLIDE 21 — Five Testing Tactics

Five ways to test without writing more code:

1. **Fake Door Tests** — "Get Early Access" button. Track clicks.
2. **User Walkthroughs** — Real target users thinking aloud. Don't help them.
3. **Landing Page + Demo** — Proposition page with demo link. $50 in ads.
4. **Investor Signaling** — Proves you execute, not just ideate.
5. **Five-Second Test** — Show the screen for 5 seconds. "What was this for?"

### SLIDE 22 — What Feedback Matters

**Signal:** Behavior ("I'd check this every Monday"), emotions ("That number would stress me out"), alternatives ("I do this in a spreadsheet now").

**Noise:** Feature suggestions. "You should add X." Ignore most of it.

If five target users don't care, don't add features. Don't make it prettier. Kill it or pivot. The point of rapid prototyping is to fail fast, not polish failures.

---

# **40–45 min — Closing**

*Objective: Create momentum*

### SLIDE 23 — Specificity Quote

*"Specificity gets results. Vagueness gets noise."*

"Make it better" gets noise. "Make the headline 72px bold and add a green badge" gets what you want.

### SLIDE 24 — Your Next 24 Hours

Here's your homework:

1. **Pick one idea.** The one that's been nagging at you.
2. **Spend 15 minutes on the 4Ps.** Who? What pain? What job? What headline?
3. **Generate one screen.** Open Claude or Cursor. Just one. See what comes out.

The goal isn't a finished prototype. It's proving to yourself that you can do this.

**What not to do:**
- Don't spend a week perfecting
- Don't show friends and count that as validation
- Don't think about scale before you have signal

### SLIDE 25 — Go Build Something

We're living in a unique moment. The ability to turn an idea into something tangible isn't gated by technical skills or capital anymore. The gate has moved. It's now gated by clarity.

**The future belongs to builders who can turn ambiguity into artifacts.**

After today, you can be one of those builders.

### SLIDE 26 — Join the Community

The toolkit, prompt library, and Build Brief template are all in Better Operators. Scan the QR code.

Questions?

[Take Q&A until time]

Go build something.
