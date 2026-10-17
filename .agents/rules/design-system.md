---
trigger: model_decision
description: VERDANT design system, UI/UX standards, color tokens, typography, layout, components, styling, responsive design, and visual aesthetics.
---

# VERDANT — Design System and UI/UX Standards

## 1. Brand Identity & Personality

Brand: **VERDANT**  
Business: **Premium Fine-Dining Restaurant**  
Design Direction: **Contemporary Luxury**  
Brand Personality: **Elegant, warm, refined, welcoming, and sophisticated.**

The website must feel intentionally art-directed and professionally crafted, reflecting the quiet confidence of high-end hospitality rather than a generic AI-generated template.

Use restrained visual elements, bespoke typography, exquisite food photography, and disciplined whitespace.

## 2. Anti-Vibe-Coding Standards

VERDANT strictly rejects superficial, "vibe-coded" aesthetics in favor of purposeful, professional frontend engineering:

- **Purposeful Sections**: Design each page section with a clear communication objective. Never generate repetitive, identical section templates merely to pad page length.
- **Visual Hierarchy Over Complexity**: Prioritize typographic hierarchy, balance, and intentional whitespace over decorative clutter.
- **Prohibited Visual Fads**: Avoid arbitrary color gradients, glowing borders, floating neon cards, gratuitous glassmorphism, and excessive rounded card radiuses unless there is a clear editorial justification.
- **Restrained Motion**: Ban distracting background canvas particles, excessive bouncing effects, and intrusive scroll hijackers. Micro-interactions must be subtle and purposeful.
- **No Fake Interactions or Placeholders**: Never deploy placeholder copy ("Lorem ipsum"), non-functional links, dead reservation buttons, or deceptive UI controls. Every control must perform its advertised action.
- **Root-Cause Layouts Over CSS Patches**: Never mask structural layout issues with hacky symptom patches (e.g., ad-hoc `!important` declarations, arbitrary negative margins, or fragile absolute positioning). Fix the underlying flexbox/grid layout and markup.
- **Holistic Quality Over Screenshots**: A visually attractive screenshot alone does not prove quality. Every component must be verified for responsiveness, keyboard accessibility, touch usability, contrast compliance, and maintainability.

## 3. Visual Acceptance Criteria Guidelines

Before implementing any visual or UI feature, define measurable acceptance criteria across these dimensions (referencing [workflow.md §2](file:///d:/VERDANT/.agents/rules/workflow.md#2-define-success-before-coding)):
- **Layout & Composition**: Disciplined grid alignment, content max-width (`1200px`–`1320px`), intentional asymmetric compositions where appropriate.
- **Typography & Hierarchy**: Explicit scale (`h1` through `h6`) using designated fonts, balanced line-heights, and absence of text clipping.
- **Spacing Scale**: Strict multiples of 4px/8px (8, 16, 24, 32, 48, 64, 96, 128px) applied consistently to padding and margins.
- **Color & Contrast**: Exclusive use of brand tokens with WCAG AA compliance verified against background surfaces.
- **Imagery**: High-resolution culinary/venue photography with appropriate aspect ratios and descriptive alternative text.
- **Responsive Behavior**: Clean reflow across mobile, tablet, and desktop without horizontal scrollbars.
- **Interactive States**: Differentiated hover, active, focus-visible, and disabled states for all interactive elements.
- **Accessibility**: Semantic elements, logical heading structure, visible focus indicators, and screen reader compatibility.

## 4. Color Palette Tokens

Use these design tokens consistently across all components and stylesheets:

- **Primary Sage Green**: `#879780` (Brand accents, key focal points)
- **Warm Ivory Background**: `#F8F5ED` (Primary page background)
- **Soft Cream**: `#EAE5D9` (Secondary surface background, card containers)
- **Muted Olive Accent**: `#626F52` (Secondary actions, subtle borders, subheadings)
- **Deep Forest Text**: `#26372D` (Primary body text, high-contrast headings)

### Palette Rules:
- Use Warm Ivory (`#F8F5ED`) and Soft Cream (`#EAE5D9`) as the dominant page backgrounds.
- Use Sage Green (`#879780`) for primary brand emphasis and selected hero sections.
- Use Muted Olive (`#626F52`) for accents, secondary actions, and badges.
- Use Deep Forest (`#26372D`) for body copy and headings to guarantee high readability.
- **No Pure Black / Dark Modes**: Do not use black backgrounds unless explicitly requested; pure dark modes contradict the warm, contemporary luxury brand direction.
- Maintain WCAG AA compliant contrast ratios between text and background surfaces.
- Implement styles via reusable CSS custom properties (`--color-sage`, `--color-ivory`, etc.).

## 5. Typography

- **Primary Heading Font**: `Cormorant Garamond` (Serif — editorial, elegant, refined)
- **Body Font**: `DM Sans` (Clean sans-serif — readable, modern)

### Typography Rules:
- Establish a deliberate heading scale (`h1` through `h5`) with balanced letter-spacing.
- Maintain comfortable line heights (`1.5` to `1.7` for body copy, `1.1` to `1.3` for headings).
- Avoid excessive uppercase text; reserve all-caps for small badges, menu categories, or tracked labels.
- Use italics selectively for culinary terms, menu subtitles, or editorial emphasis.
- Prevent awkward word wrapping, text overflow, and clipped glyphs.
- Load fonts reliably via Google Fonts with appropriate fallbacks (`serif`, `sans-serif`).

## 6. Layout and Spacing

- Utilize a consistent max-width content container (e.g., `1200px` to `1320px`) with fluid side padding.
- Apply a disciplined spacing scale (multiples of `4px` / `8px`: 8, 16, 24, 32, 48, 64, 96, 128px).
- Generous whitespace is essential to convey contemporary luxury; avoid cluttered sections.
- Use asymmetric, editorial compositions selectively for featured dishes, chef stories, or quotes.
- Keep card paddings, grid gutters, and border radiuses consistent across components.

## 7. Photography and Assets

Photography is central to the VERDANT dining experience.

- **Style**: High-quality, warm natural lighting, thoughtfully plated dishes, and inviting interior atmospheres.
- **Aspect Ratios**: Consistent aspect ratios (e.g., 4:3, 16:9, or 1:1) with `object-fit: cover`.
- Prevent stretched, pixelated, or distorted images.
- Provide descriptive `alt` text for informative dish and venue photography; use `alt=""` for decorative elements.
- Optimize images for fast loading and responsive screen resolutions.

## 8. Component Standards

Build reusable components with consistent tokens and states:
- **Navigation**: Clean, sticky/floating header with brand mark, curated links, and primary reservation CTA.
- **Buttons & Links**: Clearly differentiated primary, secondary, and ghost variants with explicit hover and focus states.
- **Dish Cards**: Clear title, refined typography, description, pricing, and allergen tags.
- **Reservation Form**: Accessible inputs, date/time picker, party size selector, and real-time validation.
- **Footer**: Refined footer containing hours of operation, location, contact details, and social links.

## 9. Buttons and Interaction Design

- Use clear, action-driven labels ("Reserve a Table", "View Dinner Menu").
- Provide visible hover, active, focus-visible, and disabled states.
- Use subtle transitions (e.g., `transition: all 0.25s ease`); avoid jarring cuts.
- Respect `prefers-reduced-motion` settings.
- Ensure buttons execute real actions and links navigate to valid anchors.

## 10. Responsive Design

Ensure the interface adapts fluidly across all device breakpoints:
- **Small Mobile** (320px – 480px)
- **Large Mobile** (481px – 767px)
- **Tablet** (768px – 1023px)
- **Desktop** (1024px – 1439px)
- **Wide Desktop** (1440px+)

### Responsive Rules:
- Never allow horizontal overflow or awkward content clipping.
- Mobile navigation must be smooth, accessible, and touch-friendly.
- Ensure touch targets meet the 44x44px minimum recommendation.
- Re-stack grid layouts cleanly on smaller viewports while preserving typographic hierarchy.

## 11. Accessibility Standards

- Use semantic HTML tags for layout and text (`<main>`, `<nav>`, `<article>`, `<header>`, `<footer>`).
- Ensure logical heading hierarchy without skipping levels.
- Provide high-contrast focus rings for keyboard navigators.
- Associate all form controls with explicit labels and error containers.
- Maintain sufficient contrast for muted text tokens against ivory and cream surfaces.

## 12. Animation and Micro-interactions

- Animate purposefully to assist navigation, feedback, or editorial storytelling.
- Prefer subtle fade-in reveals and gentle translate effects.
- Avoid large layout shifts during page loading (`cumulative layout shift = 0`).
- Implement reduced-motion media query overrides:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

## 13. Visual Verification & Loop Integration

- Inspect rendered pages in actual browsers across mobile, tablet, and desktop viewports following the protocol in [workflow.md §7](file:///d:/VERDANT/.agents/rules/workflow.md#7-browser-verification-protocol).
- Compare the live implementation against the defined acceptance criteria and brand identity.
- When visual bugs occur, diagnose root causes and apply targeted corrections following [workflow.md §5](file:///d:/VERDANT/.agents/rules/workflow.md#5-mandatory-error-detection-diagnosis-and-recovery).
- Satisfy the Definition of Done in [workflow.md §9](file:///d:/VERDANT/.agents/rules/workflow.md#9-definition-of-done) before declaring visual tasks complete.