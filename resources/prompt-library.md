# The Prompt Library

Ready-to-use prompts for each stage of the AI prototyping loop.

---

## Stage 1: Fuzzy Idea → 4Ps

> Use when you have a vague idea but haven't structured it yet.

```
I have a product idea but it's still fuzzy. Help me clarify it using the 4P framework.

Here's what I'm thinking: [describe your idea in 2-3 sentences]

Ask me questions to fill in:
1. Persona — Who exactly is this for?
2. Problem — What specific pain are they experiencing?
3. Product — What are the 3-5 core features?
4. Proposition — Why should they care?

Be direct. Push back if my answers are too vague. The goal is specificity.
```

---

## Stage 2: 4Ps → Build Brief

> Use when you have the 4Ps and need a structured document for building.

```
Help me turn these 4Ps into a Build Brief for an AI coding agent.

**Persona:**
[paste your persona]

**Problem:**
[paste your problem]

**Product:**
[paste your features]

**Proposition:**
[paste your proposition]

Create a Build Brief with:
- Clear feature specifications with acceptance criteria
- User stories for each feature
- Visual direction suggestions
- Explicit "out of scope" section

Keep it to 2-5 pages. This should be specific enough that an AI can build from it without asking clarifying questions.
```

---

## Stage 3: Build Brief → Screens

> Use when you have a Build Brief and need to define the user flow.

```
Based on this Build Brief, help me define the minimum screens needed to demonstrate the core value.

[paste your Build Brief]

For each screen, specify:
1. Screen name and purpose
2. What the user sees
3. What the user can do
4. What data is shown (with realistic sample data)
5. How it connects to other screens

Keep it minimal — only screens needed to demonstrate the core loop.
```

---

## Stage 4: Screens → Code

> Use when you're ready to generate the actual interface.

```
Generate the HTML/CSS for [screen name].

**What it shows:**
[specific content and data]

**Layout:**
[describe the layout]

**Interactions:**
[what should be clickable/interactive]

**Visual style:**
[tone, color preferences, reference sites if any]

**Sample data:**
[provide realistic sample data, not Lorem ipsum]

Use semantic HTML. Make it responsive. Use [Tailwind CSS / vanilla CSS / your preference].
```

---

## Stage 5: Static → Interactive

> Use when you have static HTML and need JavaScript functionality.

```
Add JavaScript interactivity to this interface.

[paste your current HTML/CSS]

**Behaviors to add:**
1. [specific interaction, e.g., "When I change the cash input, recalculate runway"]
2. [specific interaction, e.g., "Click a row to expand details"]
3. [specific interaction, e.g., "Toggle between monthly/weekly view"]

**State to track:**
- [list any state variables needed]

**Data:**
- Use mock data / localStorage (no real backend)

Keep the JavaScript simple and readable. No frameworks needed unless already using one.
```

---

## Stage 6: Iterate

> Use for making specific changes while preserving what works.

```
Make this specific change:

[describe exactly what you want changed]

Keep everything else the same. Don't refactor or "improve" other parts unless I ask.
```

### Iteration Examples

**Styling change:**
```
Change the runway number to 72px bold, and add a green/amber/red badge based on the value:
- Green: 6+ months
- Amber: 3-6 months
- Red: <3 months
```

**Layout change:**
```
Move the invoice list to a collapsible sidebar on the right. Default to collapsed on mobile.
```

**Add a feature:**
```
Add a "What if" mode where I can adjust the burn rate and see how it affects runway. Show the comparison inline.
```

**Fix a bug:**
```
The total isn't updating when I add a new invoice. The addInvoice function runs but the display doesn't refresh.
```

---

## Pro Tips

### Be Specific
❌ "Make it better"
✅ "Make the headline 72px bold and add a green badge for healthy runway"

### One Thing at a Time
❌ "Add filtering, sorting, and a search bar"
✅ "Add a dropdown to filter by status: All, Paid, Outstanding"

### Provide Context
❌ "It's broken"
✅ "When I click Save, nothing happens. The console shows 'undefined is not a function' on line 47"

### Show Don't Tell
❌ "Make it look more professional"
✅ "Use #1a1a1a background, increase whitespace by 50%, use Inter font"
