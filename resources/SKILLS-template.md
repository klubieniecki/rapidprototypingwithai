# SKILLS.md Template

Skills are reusable instruction sets that give your AI consistent behavior for specific tasks. Place in your project or reference in prompts.

---

## What Are Skills?

Skills are prompt instructions that:
- Provide persistent context for repeated tasks
- Ensure consistent output quality
- Save time by not re-explaining preferences

---

## Example Skills

### /frontend-design

```markdown
# Frontend Design Skill

When building UI components:

1. **Visual Quality**
   - Create distinctive, polished interfaces
   - Avoid generic "AI-generated" aesthetics
   - Use intentional whitespace and typography hierarchy

2. **Code Quality**
   - Use semantic HTML elements
   - Implement responsive design (mobile-first)
   - Follow accessibility best practices (WCAG 2.1 AA)

3. **Component Structure**
   - Keep components focused and single-purpose
   - Extract reusable patterns only when used 3+ times
   - Use composition over configuration

4. **Styling Approach**
   - Use Tailwind utility classes
   - Avoid inline styles
   - Use CSS variables for theme tokens
```

### /prototype-mode

```markdown
# Prototype Mode Skill

When building prototypes:

1. **Speed over polish** — Get something working, don't perfect it
2. **Fake the backend** — Use static data, localStorage, mock APIs
3. **Real interactions** — Make buttons work, forms validate, states change
4. **Skip auth** — No login flows, assume user is authenticated
5. **Realistic data** — Use believable sample data, not "Lorem ipsum"
6. **One happy path** — Don't build error states or edge cases yet
```

### /explain-mode

```markdown
# Explain Mode Skill

When writing code:

1. Explain what you're about to do before doing it
2. After each significant change, explain why you made that choice
3. Point out any tradeoffs or alternatives you considered
4. Highlight anything the user should understand about the code
5. Use clear, jargon-free language

This helps build mental models for learning.
```

### /concise-mode

```markdown
# Concise Mode Skill

- Minimal explanation
- Just make the changes
- Only speak up if something is unclear or there's a significant decision
```

---

## How to Use Skills

**Option 1: Reference in prompt**
```
Using /prototype-mode, build a dashboard showing...
```

**Option 2: Include in CLAUDE.md**
```markdown
## Active Skills
- Always use /prototype-mode for this project
```

**Option 3: Copy into conversation**
Paste the skill text directly when starting a new context.

---

## Creating Your Own Skills

1. Notice when you're repeating the same instructions
2. Write them down as a numbered list or bullet points
3. Give the skill a clear name
4. Test and refine based on output quality
