# The 4P Framework for Prototyping

A subset of the 6P Framework for Product-Market Fit, focused on what matters for early-stage prototyping.

---

## The Full 6P Framework

| P | Focus | When It Matters |
|---|-------|-----------------|
| **Persona** | Who is this for? | **Prototyping** |
| **Problem** | What pain are they experiencing? | **Prototyping** |
| **Product** | What are we building? | **Prototyping** |
| **Proposition** | Why should they care? | **Prototyping** |
| Pricing | How much does it cost? | Later |
| Positioning | How does it compare to alternatives? | Later |

> Focus on the 4 that matter for prototyping. Pricing & Positioning come later.

---

## 1. Persona

**Goal:** Define exactly who you're building for.

**Questions to answer:**
- What is their role/title?
- What company size/stage are they in?
- What's their technical ability?
- What tools do they already use?
- What does their day look like?

**Anti-pattern:** "Small business owners" — too vague.

**Good example:** "Solo founders running bootstrapped SaaS companies with <$10K MRR who handle their own finances."

---

## 2. Problem

**Goal:** Articulate the specific pain you're solving.

**Questions to answer:**
- What problem do they experience?
- How often does it happen?
- What does it cost them? (time, money, stress)
- What triggers the urgency to solve it?
- What do they do today to work around it?

**Anti-pattern:** "They need a better way to manage X" — not specific enough.

**Good example:** "Every Monday, they spend 2 hours manually calculating runway from bank statements and outstanding invoices. When cash gets low, they don't notice until it's urgent."

---

## 3. Product

**Goal:** Define the minimum feature set to test the idea.

**Questions to answer:**
- What are the 3-5 P0 (must-have) features?
- What user stories do they support?
- What does "done" look like for each?

**Format for each feature:**
```
As a [persona], I want to [action] so that [benefit].

Acceptance criteria:
- [ ] Specific behavior 1
- [ ] Specific behavior 2
```

**Anti-pattern:** 20-feature roadmap before you've talked to a user.

**Good example:**
```
Feature: Runway Calculator

As a solo founder, I want to see my current runway in months
so that I know how much time I have before needing revenue.

Acceptance criteria:
- [ ] Shows runway as a large, prominent number
- [ ] Updates when I change cash or burn rate
- [ ] Uses green/amber/red color coding for health
```

---

## 4. Proposition

**Goal:** Articulate why someone should care.

**Components:**
- **Headline:** One sentence that captures the core value
- **Subheadline:** How it delivers that value
- **3 Benefits:** Specific outcomes the user gets

**Formula:**
> [Result they want] without [pain they hate]

**Anti-pattern:** Feature descriptions disguised as benefits.

**Good example:**
- **Headline:** "Know your runway at a glance"
- **Subheadline:** "A calm financial dashboard for solo founders"
- **Benefits:**
  1. See your runway in seconds, not spreadsheets
  2. Get early warning before cash gets critical
  3. Make confident decisions with real-time numbers

---

## Putting It Together

Once you've answered all four Ps, you have enough to:
1. Write a Build Brief
2. Generate your first prototype
3. Test with real target users

**The goal is clarity, not perfection.** Better to have rough answers to all four than polished answers to one.
