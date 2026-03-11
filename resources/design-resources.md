# Design Resources

Tools for making your prototype look and feel real. Not required, but helpful if you want polish.

---

## Layout & Design Systems

### Aura Build
**[aura.build](https://aura.build)**

AI-generated full-page layouts and design systems.

- Generates complete page designs
- Exports to code files (React, HTML)
- Good for starting with a professional structure
- Free tier available

**When to use:** When you want to start with a complete design rather than building from scratch.

---

## Component Libraries

### shadcn/ui
**[ui.shadcn.com](https://ui.shadcn.com)**

Beautiful, accessible React components you copy into your project.

- Not a package — you own the code
- Tailwind CSS based
- Full accessibility support
- Highly customizable

**When to use:** When you need specific components (buttons, cards, forms, dialogs) that look professional.

**How to add a component:**
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

### tweakcn
**[tweakcn.com](https://tweakcn.com)**

Visual theme customizer for shadcn/ui.

- Adjust colors, radius, spacing
- Preview in real-time
- Export CSS variables
- Matches your brand in minutes

**When to use:** When you want shadcn components but with your own color palette.

---

## Icons

### Lucide
**[lucide.dev](https://lucide.dev)**

Clean, consistent icon set (used by shadcn/ui).

```jsx
import { Home, Settings, User } from 'lucide-react'

<Home className="w-6 h-6" />
```

### Heroicons
**[heroicons.com](https://heroicons.com)**

Icons from the makers of Tailwind CSS.

```jsx
import { HomeIcon } from '@heroicons/react/24/outline'
```

### Phosphor Icons
**[phosphoricons.com](https://phosphoricons.com)**

Flexible icon family with multiple weights.

---

## Typography

### Inter
**[rsms.me/inter](https://rsms.me/inter)**

The default choice for UI. Clean, readable, free.

### System Font Stack
Skip loading fonts entirely:
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Google Fonts
**[fonts.google.com](https://fonts.google.com)**

Massive library. Popular choices:
- **Inter** — UI/dashboard
- **DM Sans** — Friendly, modern
- **Space Grotesk** — Tech/startup feel
- **Libre Baskerville** — Editorial/quote text

---

## Color

### Tailwind Color Palette
**[tailwindcss.com/docs/colors](https://tailwindcss.com/docs/colors)**

Use Tailwind's built-in colors for consistency:
- `slate` — Neutral, professional
- `zinc` — Slightly warmer neutral
- `blue` — Trust, action
- `green` — Success, positive
- `red` — Error, warning
- `amber` — Caution, attention

### Realtime Colors
**[realtimecolors.com](https://realtimecolors.com)**

Preview color palettes on a real UI.

### Coolors
**[coolors.co](https://coolors.co)**

Generate color schemes quickly.

---

## Images & Illustrations

### Unsplash
**[unsplash.com](https://unsplash.com)**

Free high-quality stock photos.

### Pexels
**[pexels.com](https://pexels.com)**

Free stock photos and videos.

### unDraw
**[undraw.co](https://undraw.co)**

Free SVG illustrations you can customize.

### Avatar Placeholders
```
https://i.pravatar.cc/150?img=1
https://api.dicebear.com/7.x/avataaars/svg?seed=John
```

---

## Quick CSS Tricks

### Smooth everything
```css
* {
  transition: all 0.2s ease;
}
```

### Better shadows
```css
/* Subtle, professional shadow */
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

/* Card hover shadow */
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
```

### Glass effect
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Gradient text
```css
background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Prototype Visual Checklist

Before showing your prototype:

- [ ] **Realistic data** — No "Lorem ipsum" or "Test User"
- [ ] **Consistent spacing** — Use a scale (4px, 8px, 16px, 24px, 32px)
- [ ] **Clear hierarchy** — One obvious action per screen
- [ ] **Readable text** — 16px minimum for body text
- [ ] **Working interactions** — Buttons should do something
- [ ] **Mobile check** — Does it work on a phone?
