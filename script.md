# **Rapid Prototyping with AI**

*From Idea to Demo in Hours*

60-Minute Workshop — Facilitator Script

# **0–5 min — Opening: Why This Works Now**

*Objective: Reframe the problem and set expectations*

### SLIDE

Title slide

### SLIDE

Good afternoon, everyone. I'm Kyle – I'm a product leader. I've spent over a decade taking products from zero to one, helping companies find product-market fit. I've worked in fintech, edtech, platform products—from early startup through IPO. I've shipped products that generated over $150 million in ARR.

I want to start with a confession. Until recently, I had never shipped a single line of code.

I had a GitHub account. I'd sat next to engineers for years. But I was intimidated by the terminal, afraid of breaking things, and convinced that real coding required a computer science degree I didn't have.

Then I started using AI-powered development tools—Cursor, Claude Code—and something clicked. I shipped my first production app. Then my second. And I finally understood how all the pieces fit together. The mental models I'd been missing for a decade suddenly made sense.

That shift is why I started Fractions, where I help non-technical operators become builders. And that's what this session is all about.

### SLIDE

If you can clearly describe what you want, you can build it. Today. Without writing code. Without hiring anyone.

We're going to cover a lot in the next hour. If you struggle to follow along, don't worry—ask questions at the end, watch the recording, or join my community where I'll be available to answer your questions.

### SLIDE

What are Prototypes  
What is the goal of a prototype \- testing PMF. What is PMF?

Let me be clear about what I mean by 'prototype' here. I'm not talking about production-ready software. I'm not talking about Figma mockups. I'm talking about something functional enough that a real user can interact with it and tell you if you're onto something. Something that looks real enough to get a meeting with an investor or customer. Something that lets you test for product-market fit without burning cash.

Because that's the goal. Always. Product-market fit. The prototype is just a tool for getting there faster.

A few ground rules before we start. First: speed over polish. The goal is not to make something beautiful. The goal is to make something useful for learning. Second: learning over perfection. We're optimizing for insight, not architecture.

Ready? Let's go.

# **5–15 min — The AI-First Product Development Model**

*Objective: Give them a mental map before touching tools*

SLIDE

With all the tools, workflows. etc you see online it's easy to just want to "do things" and start prompting, but let me tell you something: focus on sharpening your context.

***Visual:** "Give me six hours to chop down a tree, and I will spend the first four sharpening the axe."* — Abraham Lincoln

Most people, when they discover AI coding tools, immediately start prompting. 'Build me an app that does X.' And they get garbage. Not because the tools are bad, but because they skipped the sharpening.

The preparation work—the clarity work—is where the real leverage is. So let me give you the mental model.

SLIDE

## **The AI-First Prototyping Loop**

There are five steps, and I'm going to be explicit about where AI helps and where your judgment still matters.

### **Step 1: Clarify the problem and value (Human work)**

This is where most people skip ahead. They have a fuzzy idea and start asking AI to build it. That's a recipe for frustration. AI is incredibly powerful, but it's not a mind reader. Garbage in, garbage out.

### **Step 2: Constrain the scope (Human \+ AI)**

When you can build anything, the temptation is to build everything. Wrong move. The tighter your constraints, the better your output. AI can help you narrow, but the decisions are yours. 

### **Step 3: Generate interface and interactive flows (AI \+ Human direction)**

Now we start using AI to create the actual screens and user flows. Notice this is step three, not step one. We're not asking AI to 'design an app.' We're directing it to design specific screens for a specific user doing a specific thing.

### **Step 5: Test for signal (Human work)**

Notice I didn't say 'validate.' Validation implies confirmation. What we're looking for is signal—information that helps us decide whether to keep going, pivot, or kill the idea. The goal is product-market fit, and the prototype is how we test for it.

SLIDE

## **The 4P Framework: Sharpening Your Axe**

Here's the preparation work that most people skip. Before you write a single prompt, you need clarity on four Ps:

| P | What It Answers | Why It Matters for Prototyping |
| :---- | :---- | :---- |
| Persona | Who are you building for? | Guides UX decisions and technical complexity |
| Problem | What pain are you solving? | Validates the 'why' behind the build |
| Product | What features are you building? | The actual user stories and acceptance criteria |
| Proposition | Why should someone care? | The landing page copy that sells the prototype |

I'm going to demonstrate how to build a document I call a ' Build Brief'—a lightweight requirements document specifically designed for AI coding agents. It's not a traditional PRD. It's 2-5 pages, not 50\. It contains just enough context for an AI to build a working prototype that demonstrates your core concept.

SLIDE

Let me flag some common traps before we dive in.

**Trap 1: Over-prompting.** People write elaborate, 500-word prompts trying to anticipate every edge case. Don't. Start simple. Iterate. It's a conversation, not a contract.

**Trap 2: Fake users.** Your roommate clicking through your prototype and saying 'this is cool' is not validation. It's politeness.

**Trap 3: Premature polish.** I've seen people spend days perfecting the color palette of a prototype that tests a hypothesis nobody cares about.

**Trap 4: Skipping the proposition.** If you can't write a compelling headline and three bullet points that would make someone care, reconsider what you're building.

Let's build something.

# **15–40 min — Live Build: From Fuzzy Idea to Clickable Demo**

*Objective: Prove it's real by doing it live*

SLIDE

Alright, here we go. I'm going to share my screen and walk you through the entire process. Feel free to call out questions as we go.

## **Part 1: Building the  Build Brief (5 min)**

Let me start with a deliberately messy idea. \[Choose one based on audience:\]

*For founders:* "I want to build something that helps small business owners manage their cash flow better."

*For corporate:* "We need a tool that helps our sales team track customer conversations."

*For general:* "An app that helps people form better habits."

Notice how vague that is? That's how most ideas start. Now I'm going to sharpen the axe by working through the 4Ps.

### **P1: Persona — Who exactly are we building for?**

Not 'small business owners'—that's millions of people with wildly different needs. I need an operator profile, not a marketing avatar.

\[Think out loud:\]

Freelance consultants. Solo operators who invoice clients monthly and struggle to know if they're going to make rent next month because their income is lumpy. They're comfortable with spreadsheets but not accounting software. They check their bank balance on their phone. Success means: they open the app and feel relief or urgency within 5 seconds.

### **P2: Problem — What specific pain are we solving?**

The problem statement needs to pass the 'show me the pain' test. Can I quantify it? Can I describe a specific frustrating moment?

\[Think out loud:\]

Trigger moment: It's the 20th of the month. Rent is due in 10 days. They have three outstanding invoices totaling $15,000, but historically clients pay anywhere from 15 to 45 days late. They don't know if they'll make rent. The current workaround is a messy spreadsheet they forget to update and a lot of anxiety.

### **P3: Product — What's the single job-to-be-done?**

Not cash flow 'management'—that's too broad. I'm picking one job: Predicting. This tool predicts whether you'll have enough cash to cover expenses 30 days from now based on your outstanding invoices and typical payment patterns. That's it.

For the prototype, I need 3-5 P0 features maximum:

• Dashboard showing 30-day runway (days and dollars)

• List of outstanding invoices affecting the forecast

• Ability to mark an invoice as paid and see the forecast update

That's it. Authentication, mobile, real integrations—those are explicitly out of scope for the prototype.

### **P4: Proposition — Why should someone care?**

This is the landing page test. If I can't write a headline that would make my persona stop scrolling, I'm solving the wrong problem.

**Headline:** "Know if you'll make rent. Before the 1st."

**Subheadline:** "AI-powered cash forecasting for freelancers who hate spreadsheets."

**Three benefits:** See your 30-day runway in 5 seconds. Track outstanding invoices without updating spreadsheets. Get alerts before cash gets tight.

See what happened there? I went from 'cash flow management for small businesses'—which could be a hundred different products—to a specific tool for a specific person with a specific pain. That's something that’s buildable. It’s testable with a specific market, with a feature set that can speak to this pain point.

Now, I can use AI to help formalize this into a proper  Build Brief. \[Open Claude and type:\]

*"I'm building a cash forecasting tool for freelance consultants. Attached is what I know. Help me structure this into a Build Brief with Persona, Problem, Product (with user stories and acceptance criteria), and Proposition sections. I’ve attached the  Build Brief template. Keep it under 3 pages."*

See how I'm using AI to structure, not to think? I've done the hard work. Now I'm using AI to format it in a way that will be useful for the next step.

## **Part 2: Interface and Flow Generation (10 min)**

Now I have a  Build Brief. Let me show you how to turn this into screens. The key is specificity—I'm being directive \- using AI as my thought partner \- not just hoping for the best.

\[Type into Claude:\]

*"Based on this  Build Brief, describe the minimum screens I need and the primary user flow. The user should feel relief or urgency within 5 seconds of opening the app. Be ruthlessly minimal—this is an MVP."*

\[Wait for response, read it aloud, comment on what's useful\]

Notice what I did. I didn't say 'design me an app.' I gave it the user, the core value, the emotional outcome, and a constraint. The more specific your input, the more useful your output.

Now let's generate the actual interface. \[Type:\]

*"Generate the HTML/CSS for the main dashboard screen. Show: a prominent 30-day runway number (days remaining as the headline, dollar amount smaller), a simple chart of projected balance over time, and a list of the 3 outstanding invoices affecting the forecast. Use green/amber/red indicator for runway health. Emotional tone: calm and professional, not alarming. Use realistic sample data—freelancer with $8,500 in outstanding invoices, $3,200 monthly expenses."*

\[As code generates, narrate:\]

Watch what's happening here. It's generating actual code. This isn't a mockup—this is a working interface. In about 30 seconds, I'm going to have something I can open in a browser.

\[Preview the result\]

There it is. Is this perfect? No. But I can put this in front of a freelancer right now and ask: 'Would this be useful to you?' And I built it in two minutes.

Notice I specified realistic sample data. If I hadn't, I'd get 'Lorem ipsum' and 'John Doe'—and my prototype would feel fake. Details like these matter for testing.

Let me show you how to iterate. \[Type:\]

*"Make the runway number much larger—72px bold. Add the status indicator as a colored badge next to it. Move the chart below the fold—the number is the hero element."*

See? Specific direction, not vague requests. This is how you get good output.

## **Part 3: Making It Clickable (10 min)**

We have a dashboard. But right now it's static. Let's make it interactive—and I want to be clear about something: we're going to fake a lot of this. On purpose.

\[Type:\]

*"Add interactivity. When I click an invoice, show a modal with invoice details and a 'Mark as Paid' button. When I click 'Mark as Paid', recalculate the runway and update the display. This is a prototype—no backend, just JavaScript state."*

\[As it generates, explain:\]

The AI is adding JavaScript to handle click events, creating a modal component, wiring up the interactions. All the things that would take a developer hours are happening in seconds.

Crucial point: this is fake. The data isn't real. There's no database. Refresh the page, it resets. And that's exactly what we want right now. We're not building a product—we're building a way to learn about your PMF.

\[Demo the interaction\]

Click. Modal appears. Click 'Mark as Paid.' Number updates. The runway goes from 18 days to 32 days. That's a working prototype. And we're about 15 minutes into the build.

Let me add one more feature. \[Type:\]

*"Add a simple form to add a new invoice. Fields: client name, amount, due date. When submitted, add it to the invoice list and recalculate the runway. Show how this affects the forecast."*

\[Demo\]

Now we have a two-way prototype. Users can view their forecast AND add data. This is enough to test whether the core value proposition resonates.

Let me be explicit about what's real versus mocked:

**Real:** The interface, the interactions, the calculations (the JavaScript actually recalculates the runway)

**Fake:** User accounts, database persistence, security, real integrations

For testing product-market fit? This is enough.

And changes are cheap. Watch. \[Type:\]

*"Change the primary number from days to a confidence percentage. Instead of '18 days of runway' show 'High confidence' with 85% underneath, indicating likelihood of covering expenses."*

\[Show the change\]

That change took 10 seconds. In traditional development, that's a ticket, a sprint planning discussion, and a deployment. Here, it's a sentence.

Questions about the build process before we move on? \[Pause\]

# **40–50 min — Testing for Signal (Not Validation Theater)**

*Objective: Prevent 'demo delusion' and focus on product-market fit*

We have a prototype. It looks real. It feels real. And this is the most dangerous moment in the entire process.

Because right now, you're vulnerable to what I call 'demo delusion.' Demo delusion is when you fall in love with your prototype because it exists. You show it to friends. They say nice things. You start thinking about features and scale and fundraising. And you've learned nothing.

Remember: the goal is product-market fit. The prototype is a tool for testing, not an end in itself.

Let me be clear about what this prototype is good for:

• Having a concrete conversation instead of describing your idea

• Identifying confusion points when real users click through

• Generating specific questions about behavior, not opinions

What it's NOT good for: measuring demand, proving willingness to pay, or confirming people will remember to use it.

## **Five Tactics That Don't Require Writing Code**

### **Tactic 1: Fake Door Tests**

Add a button that says 'Get Early Access.' Track how many people click it. This tells you if your proposition—that headline and those three bullets—is compelling enough to generate action. You can build this landing page the same way we just built the prototype.

### **Tactic 2: User Walkthroughs**

Put the prototype in front of someone in your target persona—not your friend, your actual target user—and ask them to think out loud while they use it. Don't explain anything. Don't help them. Just watch and listen. The places where they struggle are gold.

### **Tactic 3: Landing Page Plus Demo**

Create a landing page using your Proposition—that headline, subheadline, and three benefits—then link to the demo. Drive traffic to it. Even $50 in ads can teach you something. Look at the funnel: page views → demo clicks → signups.

### **Tactic 4: Accelerator / Investor Signaling**

If you're applying to an accelerator or pitching investors, this prototype is incredibly powerful. Not because it proves your idea works, but because it proves you can execute. You're not just a person with ideas—you're a person who builds things. That's differentiated.

### **Tactic 5: The Five-Second Test**

Show someone the main screen for five seconds, then hide it. Ask them: What was this for? What could you do with it? What was the main thing on the screen? If they can't answer correctly, your interface isn't communicating clearly.

## **What Feedback Actually Matters?**

Here's my framework:

**Matters:** Feedback about behavior. 'I would check this every Monday morning.'

**Matters:** Feedback about emotions. 'Seeing that number would stress me out' or 'That's exactly what I need to feel in control.'

**Matters:** Feedback about alternatives. 'Right now I do this in a spreadsheet and it takes me an hour.'

**Usually noise:** Feature suggestions. People love suggesting features. Ignore most of it. At this stage, you're validating the core, not optimizing.

And know when to stop. If five target users look at this and don't care, don't add features. Don't make it prettier. Kill it or pivot. The point of rapid prototyping is to fail fast, not to polish failures.

# **50–55 min — Your AI Prototyping Toolkit**

*Objective: Make it repeatable after the session*

You've seen me do this. Now I want to make sure you can do it yourself. Let me give you the tools and the prompts.

## **The Tools**

You have two paths, depending on your comfort level:

### **Path A: AI Prototyping Tools (No code exposure)**

If you want to stay entirely in a visual environment: Base44, Lovable, Replit, V0. These let you describe what you want and get a working app without seeing code. Good for very fast validation.

### **Path B: AI Coding Agents (More control)**

If you want to learn how the pieces fit together: Cursor IDE, Claude Code, Codex. These give you more control and help you understand what's actually happening under the hood.

I won't tell you which to choose, but I'll share my experience: the terminal was scary and intimidating. But after playing around with it for a few days, I unlocked so much. The mental models I'd been missing for a decade suddenly made sense. If you have the bandwidth, I'd encourage you to try Path B.

### **One Key Principle: Text is King**

AI coding agents work best when you give them structured text files. A  Build Brief in markdown is more powerful than a conversation. Advanced users create CLAUDE.md files that capture rules, corrections, and lessons—essentially teaching the AI their preferences.

## **The Prompt Library**

These are the exact prompts you can copy and adapt:

**Fuzzy Idea → 4Ps:**

*"I have an idea for \[rough description\]. Help me sharpen this by asking clarifying questions about the Persona, Problem, Product, and Proposition. One question at a time. Don't let me stay vague."*

**4Ps →  Build Brief:**

*"Structure this into a  Build Brief with Persona (operator profile, not marketing avatar), Problem (quantified pain, trigger moments, current workarounds), Product (3-5 P0 features with user stories and acceptance criteria), and Proposition (headline, subheadline, 3 benefits). Keep it under 3 pages."*

 **Build Brief → Screens:**

*"Based on this  Build Brief, describe the minimum screens I need and the primary user flow. The user should \[emotional outcome\] within 5 seconds. Be ruthlessly minimal."*

**Screens → Code:**

*"Generate the HTML/CSS for \[specific screen\]. Show: \[specific elements\]. Use \[emotional tone\]. Use realistic sample data: \[describe realistic examples relevant to your persona\]."*

**Static → Interactive:**

*"Add interactivity. When I \[action\], \[result\]. This is a prototype—no backend, just JavaScript state."*

**Iterate:**

*"Change \[specific element\] to \[specific change\]. Keep everything else the same."*

**Key principle:** Always be specific. 'Make it better' gets noise. 'Make the headline 72px bold and add a green badge for healthy runway' gets what you want.

# **55–60 min — Closing: What to Build Next**

*Objective: Create momentum*

We're in the home stretch. Let me leave you with specific actions.

### **In the next 24 hours**

Pick one idea. Just one. It doesn't have to be your best idea. Pick the one that's been nagging at you.

Spend 15 minutes sharpening the axe. Work through the 4Ps: Who specifically is this for? What quantified pain? What single job-to-be-done? What's the headline?

Then open Claude or ChatGPT and generate one screen. Just one. See what comes out.

The goal isn't a finished prototype. It's proving to yourself that you can do this. Once you've done it once, you'll do it again.

### **What NOT to do**

• Don't spend a week perfecting your first prototype

• Don't show it to friends and count that as validation

• Don't start thinking about scale before you have signal

• Don't fall in love with the prototype—fall in love with learning

### **When this approach breaks down**

This works for testing product concepts. It doesn't work for products that require deep backend logic, real-time collaboration, or complex integrations.

It works for early-stage exploration. Once you've validated the concept and you're ready to build for real, you'll need real engineering.

But here's the thing: most ideas die in the early stage because founders can't get something in front of users fast enough. This approach solves that problem.

\[Pause\]

I want to close with this. We're living in a unique moment. For the first time ever, the ability to turn an idea into something tangible isn't gated by technical skills or capital. The gate has moved. It's now gated by clarity—by your ability to know what you want and articulate it precisely.

**The future belongs to builders who can turn ambiguity into artifacts.** After today, you can be one of those builders.

If you want to continue learning, join my free community—Better Operators—where I share more resources and answer questions. The prompt library,  Build Brief template, and additional tools are all available there.

What questions do you have?

\[Take Q\&A until time\]

Thank you all for your time. Go build something.

