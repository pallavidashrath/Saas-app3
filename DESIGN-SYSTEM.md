# Job Notification App - Design System
## Premium B2C SaaS Foundation

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Layout Structure](#layout-structure)
6. [Components](#components)
7. [Interactions](#interactions)
8. [Accessibility](#accessibility)

---

## Design Philosophy

**Calm, intentional, coherent, confident.**

This design system is built for a premium B2C SaaS product. It is not flashy, not playful, and not hackathon-style. Every design decision is intentional and serves a purpose.

### Core Principles

- **Restrained**: Maximum 4 colors across entire UI
- **Readable**: Serif headings + clean sans-serif body
- **Consistent**: Strict spacing scale (8/16/24/40/64px)
- **Accessible**: Clear focus states, minimum touch targets
- **Professional**: No gradients, glassmorphism, neon, or animation noise

---

## Color System

### Primary Palette

| Color | Value | Usage |
|-------|-------|-------|
| Background | `#F7F6F3` | All backgrounds, off-white base |
| Primary Text | `#111111` | All primary text content |
| Accent | `#8B0000` | Primary actions, links, emphasis |

### Semantic Colors

| Color | Value | Usage |
|-------|-------|-------|
| Success | `#5A7D5A` | Muted green for success states |
| Warning | `#B8860B` | Muted amber for warnings |
| Error | `#8B0000` | Same as accent for consistency |

### CSS Variables

```css
--color-background: #F7F6F3;
--color-text-primary: #111111;
--color-accent: #8B0000;
--color-success: #5A7D5A;
--color-warning: #B8860B;
```

### Usage Rules

✅ **DO:**
- Use background color consistently across all surfaces
- Limit accent color to primary actions and critical emphasis
- Use semantic colors only for their intended meanings

❌ **DON'T:**
- Add new colors without strong justification
- Use gradients or color transitions
- Mix multiple accent colors

---

## Typography

### Font Families

**Headings:** Georgia, Times New Roman, serif  
**Body:** -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif

### Type Scale

| Name | Size | Usage |
|------|------|-------|
| xs | 14px | Small labels, metadata |
| sm | 16px | Secondary text, captions |
| base | 18px | Body text (default) |
| lg | 24px | Large body, small headings |
| xl | 32px | H3 |
| 2xl | 40px | H2 |
| 3xl | 48px | H1 |

### Line Heights

- **Tight:** 1.4 (headings only)
- **Base:** 1.6 (standard text)
- **Relaxed:** 1.8 (long-form content)

### Max Width

All text blocks must not exceed **720px** for optimal readability.

### CSS Variables

```css
--font-heading: 'Georgia', 'Times New Roman', serif;
--font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
--text-base: 18px;
--line-height-base: 1.6;
--max-width-text: 720px;
```

### Usage Rules

✅ **DO:**
- Use serif fonts for all headings
- Maintain 1.6–1.8 line-height for body text
- Keep text blocks within 720px max-width

❌ **DON'T:**
- Use decorative or script fonts
- Create random font sizes
- Exceed max-width for readable content

---

## Spacing

### Spacing Scale

Only use these values:

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 8px | Small gaps between related items |
| space-2 | 16px | Standard spacing within components |
| space-3 | 24px | Section padding, card internal spacing |
| space-4 | 40px | Large margins between sections |
| space-5 | 64px | Page-level section spacing |

### CSS Variables

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 40px;
--space-5: 64px;
```

### Usage Examples

```html
<!-- Good: Using design tokens -->
<div style="margin-bottom: var(--space-3);">Content</div>
<div style="padding: var(--space-2);">Card</div>

<!-- Bad: Random values -->
<div style="margin-bottom: 13px;">Content</div> ❌
<div style="padding: 27px;">Card</div> ❌
```

### Usage Rules

✅ **DO:**
- Use only the defined spacing scale
- Apply whitespace intentionally
- Maintain consistent spacing patterns

❌ **DON'T:**
- Use random values like 13px or 27px
- Create new spacing tokens
- Crowd elements together

---

## Layout Structure

### Global Template

Every page follows this structure:

```
┌─────────────────────────────────────┐
│           TOP BAR                   │
├─────────────────────────────────────┤
│     CONTEXT HEADER                  │
├──────────────────┬──────────────────┤
│   PRIMARY        │   SECONDARY      │
│   WORKSPACE      │   PANEL          │
│   (70%)          │   (30%)          │
│                  │                  │
├──────────────────┴──────────────────┤
│         PROOF FOOTER                │
└─────────────────────────────────────┘
```

### Top Bar

**Height:** 64px  
**Contents:**
- Left: App name (Job Notification App)
- Center: Progress indicator (Step X / Y)
- Right: Status badge (Not Started / In Progress / Shipped)

### Context Header

**Purpose:** Set clear expectations for the current view  
**Contents:**
- Large serif headline
- One-line subtext
- Clear purpose statement

### Primary Workspace (70%)

**Purpose:** Main content area  
**Characteristics:**
- Clean cards with subtle borders
- Predictable component placement
- No crowding
- Minimal shadows

### Secondary Panel (30%)

**Purpose:** Supporting information and actions  
**Contents:**
- Step explanation
- Copyable prompt boxes
- Consistently styled buttons

### Proof Footer

**Purpose:** Implementation verification checklist  
**Format:**
```
□ UI Built
□ Logic Working
□ Test Passed
□ Deployed
```

---

## Components

### Buttons

#### Primary Button

```html
<button class="btn btn--primary">Primary Action</button>
```

**Styling:**
- Background: `#8B0000`
- Text: `#FFFFFF`
- Border: `#8B0000`
- Hover: `#6D0000`

#### Secondary Button

```html
<button class="btn btn--secondary">Secondary Action</button>
```

**Styling:**
- Background: transparent
- Text: `#111111`
- Border: `#D9D9D9`
- Hover: `#F0EFEA`

#### Button Rules

- Minimum height: 44px (accessible touch target)
- Consistent border radius: 4px
- Clear focus state: 2px outline
- Disabled state: 50% opacity

### Input Fields

```html
<div class="input-group">
  <label class="input-label" for="input-id">Label</label>
  <input type="text" id="input-id" class="input" placeholder="Placeholder text">
  <div class="input-error-message">Error message here</div>
</div>
```

**Styling:**
- Border: 1px solid `#D9D9D9`
- Focus: Border becomes `#111111` with 2px shadow
- Error: Border becomes `#8B0000`
- Padding: 16px
- Font size: 18px

### Cards

```html
<div class="card">
  <!-- Card content -->
</div>
```

**Styling:**
- Background: `#FFFFFF`
- Border: 1px solid `#D9D9D9`
- Border radius: 4px
- Padding: 24px
- Hover: Border darkens to `#111111`
- **No drop shadows**

### Prompt Box (Copyable)

```html
<div class="prompt-box">
  <div class="prompt-box__header">
    <div class="prompt-box__title">Title</div>
    <button class="btn btn--secondary prompt-box__copy-btn">Copy</button>
  </div>
  <div class="prompt-box-content">Code or text to copy</div>
</div>
```

**Styling:**
- Monospace font
- White background
- Subtle border
- Pre-wrap text

### Step Explanation

```html
<div class="step-explanation">
  <div class="step-explanation__number">2</div>
  <h3 class="step-explanation__title">Title</h3>
  <p class="step-explanation__description">Description text</p>
</div>
```

**Features:**
- Numbered badge in accent color
- Clear hierarchy
- Concise explanation

---

## Interactions

### Transitions

**Duration:**
- Fast: 150ms
- Base: 200ms

**Easing:** `ease-in-out`

**Applied to:**
- Button hover states
- Input focus states
- Card hover effects
- Modal animations

### Interaction Rules

✅ **DO:**
- Keep transitions between 150–200ms
- Use ease-in-out timing
- Provide subtle hover feedback
- Maintain instant response for critical actions

❌ **DON'T:**
- Use bounce effects
- Add parallax scrolling
- Create complex animation sequences
- Delay user feedback

### Example Transitions

```css
.btn {
  transition: all 200ms ease-in-out;
}

.card {
  transition: border-color 200ms ease-in-out;
}

.input {
  transition: all 150ms ease-in-out;
}
```

---

## Error & Empty States

### Error States

**Purpose:** Clearly explain what went wrong and how to fix it

```html
<div class="error-state">
  <div class="error-state__icon">!</div>
  <h3 class="error-state__title">Connection Failed</h3>
  <p class="error-state__message">
    We couldn't connect to the server. Please check your internet 
    connection and try again.
  </p>
  <button class="btn btn--primary">Try Again</button>
</div>
```

**Rules:**
- Never blame the user
- Explain the problem clearly
- Provide actionable next steps
- Use accent color sparingly

### Empty States

**Purpose:** Guide users to their next action

```html
<div class="empty-state">
  <div class="empty-state__icon">○</div>
  <h3 class="empty-state__title">No Notifications Yet</h3>
  <p class="empty-state__description">
    When new job alerts arrive, they'll appear here. Set up your 
    preferences to get started.
  </p>
  <button class="btn btn--primary">Set Up Preferences</button>
</div>
```

**Rules:**
- Never leave blank screens
- Use simple iconography
- Provide clear guidance
- Include optional call-to-action

---

## Accessibility

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus indicators: 2px solid outline
- Tab order: Logical and predictable

### Screen Reader Support

- Use semantic HTML
- Provide alt text for images
- Label all form inputs
- Use ARIA live regions for dynamic content

### Reduced Motion

Respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Touch Targets

Minimum size: **44px × 44px**

Applies to:
- Buttons
- Links
- Form controls
- Interactive icons

---

## File Structure

```
design-system/
├── css/
│   └── design-system.css    # All styles
├── js/
│   └── design-system.js     # Utilities & interactions
├── index.html               # Demo page
└── DESIGN-SYSTEM.md         # This documentation
```

---

## Getting Started

### 1. Include Stylesheet

```html
<link rel="stylesheet" href="css/design-system.css">
```

### 2. Include JavaScript

```html
<script src="js/design-system.js"></script>
```

### 3. Use Components

```html
<button class="btn btn--primary">Save Changes</button>
<div class="card">Card content</div>
<input type="text" class="input" placeholder="Enter text">
```

### 4. Access Design Tokens

```javascript
const accentColor = DesignTokens.colors.accent; // '#8B0000'
const spacing = DesignTokens.spacing[2]; // '16px'
```

---

## Maintenance

### Adding New Components

1. Follow existing patterns
2. Use established design tokens
3. Ensure accessibility compliance
4. Document in this file

### Updating Design Tokens

1. Consider impact on all components
2. Update CSS variables
3. Update JavaScript constants
4. Test across all screen sizes
5. Document changes

### Version History

**v1.0.0** - Initial release
- Color system (4 colors max)
- Typography (serif + sans-serif)
- Spacing scale (8/16/24/40/64px)
- Global layout structure
- Core components
- Interaction rules
- Error & empty states

---

## Support

For questions or contributions to this design system, please refer to the project documentation or contact the design team.

**Remember:** This is a premium B2C SaaS product. Every design decision must reflect that standard.

---

*Last updated: March 4, 2026*
