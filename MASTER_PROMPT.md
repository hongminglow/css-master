# CSS Tricks Platform - Master Prompt

## Project Overview

A knowledge sharing platform for CSS tricks that developers commonly miss. Built with React 19, Vite 8, Tailwind 4, and TypeScript 6. Features dark theme, category navigation, fuzzy search, and interactive code previews.

## Core Identity

**What We Do**: Curate and present CSS tricks in an organized, searchable, visually appealing platform with live code previews.

**Target Audience**: Developers looking to discover CSS techniques they might have missed.

**Key Differentiator**: Side-by-side code and preview visualization with keyboard-first navigation.

## Technology Stack

- **Framework**: React 19 with React Compiler
- **Build Tool**: Vite 8
- **Styling**: Tailwind 4 (CSS-based configuration, NO tailwind.config.js file)
- **Language**: TypeScript 6
- **Routing**: Custom client-side routing using History API
- **Search**: Custom fuzzy search implementation
- **Testing**: fast-check for property-based testing

## Design System

### Colors (Dark Theme Only)

```css
/* Background Colors */
--bg-primary: #0f172a /* slate-900 - Main background */ --bg-secondary: #1e293b
  /* slate-800 - Cards, sidebar */ --bg-tertiary: #334155
  /* slate-700 - Inputs, buttons */ /* Text Colors */ --text-primary: #f8fafc
  /* slate-50 - Headings */ --text-secondary: #cbd5e1
  /* slate-300 - Body text */ --text-muted: #94a3b8 /* slate-400 - Muted text */
  /* Accent Colors */ --accent-primary: #2563eb
  /* blue-600 - CTA, active states */ --accent-secondary: #475569
  /* slate-600 - Badges, borders */ /* Code Colors */ --code-bg: #0a0f1e
  /* Darker than bg-primary */ --code-text: #e2e8f0 /* slate-200 */;
```

### Typography

- **Headings**: JetBrains Mono (700, 600, 500)
- **Body**: IBM Plex Sans (400, 500, 600)
- **Code**: JetBrains Mono (400)

**Google Fonts Import**:

```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap");
```

### Spacing Scale

Use Tailwind's default spacing scale:

- `gap-2` (8px) - Tight spacing
- `gap-4` (16px) - Standard spacing
- `gap-6` (24px) - Section spacing
- `p-6` (24px) - Card padding
- `p-8` (32px) - Page padding

## Architecture Principles

### 1. Enterprise-Standard Folder Structure

```
src/
├── components/
│   ├── layout/          # AppLayout, Sidebar, MainContent
│   ├── navigation/      # CategoryAccordion, TopicLink
│   ├── search/          # SearchModal, SearchInput, SearchResults
│   ├── content/         # Card, Workflow, CodeSnippet, Preview
│   └── common/          # Icon, Button
├── services/            # searchService, routeService, scrollService
├── hooks/               # useKeyboardShortcut, useScrollRestoration, useSearch, useRoute
├── data/                # topics.ts, categories.ts, tags.ts
├── types/               # topic.ts, category.ts, search.ts
├── utils/               # fuzzyMatch.ts, routeUtils.ts
├── styles/              # index.css
├── App.tsx
└── main.tsx
```

### 2. Separation of Concerns

- **Components**: Pure UI, receive data via props
- **Services**: Business logic, data transformations
- **Hooks**: React-specific logic, state management
- **Data**: Content constants (easily editable)
- **Types**: TypeScript interfaces
- **Utils**: Pure functions, no side effects

### 3. Content-Driven Design

All content (topics, categories, tags) lives in `src/data/` as TypeScript constants. Changing content NEVER requires touching component code.

## Critical Implementation Rules

### Tailwind 4 Usage

**DO**:

- Use Tailwind utility classes for ALL styling
- Use CSS variables for theme colors in `src/styles/index.css`
- Use `@theme` directive for custom values (Tailwind 4 feature)

**DON'T**:

- Create `tailwind.config.js` (Tailwind 4 doesn't need it)
- Write custom CSS unless absolutely necessary
- Use inline styles

**Example Tailwind 4 CSS**:

```css
@import "tailwindcss";

@theme {
  --color-primary: #2563eb;
  --color-bg-dark: #0f172a;
}
```

### Component Patterns

**DO**:

- Extract reusable components
- Use TypeScript interfaces for props
- Keep components small and focused
- Use composition over inheritance

**DON'T**:

- Put business logic in components
- Hardcode content in components
- Create monolithic components

### Data Structure

**Topic Structure**:

```typescript
interface Topic {
  id: string; // kebab-case
  name: string;
  categoryId: string;
  description: string;
  tags: string[];
  route: string; // /topics/{id}
  content: TopicContent;
}

interface TopicContent {
  sections: ContentSection[];
}

interface ContentSection {
  type: "card" | "workflow" | "code";
  data: CardData | WorkflowData | CodeData;
}
```

## Key Features Implementation

### 1. Sidebar with Category Accordion

- Fixed position, full height
- Categories show item count badges
- Expanded category shows topics
- Active topic highlighted in blue
- Smooth expand/collapse animation

### 2. Global Search (Ctrl+K)

- Full-screen overlay (covers sidebar too)
- Centered modal with backdrop blur
- Fuzzy search on topic names and tags
- Keyboard navigation (↑↓ arrows, Enter, Escape)
- Visual highlight on selected result

### 3. Side-by-Side Code & Preview

- Left: Code snippet with syntax highlighting
- Right: Live preview showing visual output
- Equal width split
- Dark code background, light preview background

### 4. Scroll Restoration

- Save scroll position before navigation
- Restore on back button
- Scroll to top for new routes
- Store in memory (Map), not localStorage

### 5. Unique Routes

- Format: `/topics/{topic-id}`
- Use History API (pushState, popstate)
- Update URL without page reload
- Handle browser back/forward

## Content Guidelines

### Writing Topics

**Structure**:

1. Title (clear, concise)
2. Description (one sentence explaining the trick)
3. Tags (3-5 relevant keywords)
4. Content sections:
   - Card: Explanation of why/when to use
   - Workflow: Step-by-step implementation
   - Code: Actual CSS code
   - Preview: Visual demonstration

**Example Topic**:

```typescript
{
  id: "flexbox-centering",
  name: "Flexbox Centering",
  categoryId: "layout",
  description: "Learn the most reliable way to center elements using Flexbox",
  tags: ["flexbox", "centering", "layout"],
  route: "/topics/flexbox-centering",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Why This Works",
          content: "Flexbox's justify-content and align-items properties..."
        }
      },
      {
        type: "workflow",
        data: {
          steps: [
            { number: 1, title: "Set display: flex", description: "..." },
            { number: 2, title: "Center horizontally", description: "..." }
          ]
        }
      },
      {
        type: "code",
        data: {
          code: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
          language: "css",
          title: "CSS"
        }
      }
    ]
  }
}
```

### Organizing Categories

- Keep 8-10 categories max
- Group related topics together
- Use clear, descriptive names
- Order by popularity/importance

**Example Categories**:

- Layout (Flexbox, Grid, Positioning)
- Typography (Fonts, Text Effects)
- Colors & Effects (Gradients, Shadows, Filters)
- Animations (Transitions, Keyframes)
- Responsive (Media Queries, Container Queries)

## Testing Strategy

### Property-Based Tests (fast-check)

Test universal properties, not specific examples:

```typescript
// Property: Fuzzy search returns matching topics
fc.assert(
  fc.property(fc.array(topicArbitrary), fc.string(), (topics, query) => {
    const results = searchService.search(query, topics);
    results.forEach((result) => {
      const matchesName = fuzzyMatch(query, result.topic.name) > 0;
      const matchesTags = result.topic.tags.some(
        (tag) => fuzzyMatch(query, tag) > 0,
      );
      expect(matchesName || matchesTags).toBe(true);
    });
  }),
  { numRuns: 100 },
);
```

### Integration Tests

Test user flows end-to-end:

- Search → Navigate → Scroll Restore
- Category Click → Topic Select → Content Display
- Direct URL → Content Load → Sidebar Highlight

## Performance Targets

- **Bundle Size**: < 100KB (gzipped)
- **Search Execution**: < 50ms for 100 topics
- **Interaction Response**: < 100ms
- **Scroll Performance**: 60fps

## Accessibility Requirements

- Keyboard navigation for all features
- Focus indicators visible (3:1 contrast)
- Color contrast 4.5:1 minimum (WCAG AA)
- Semantic HTML (nav, main, article)
- ARIA labels for icon buttons
- Respect `prefers-reduced-motion`

## Common Pitfalls to Avoid

### ❌ DON'T

1. Create `tailwind.config.js` (Tailwind 4 doesn't need it)
2. Hardcode content in components
3. Use React Router (we use custom routing)
4. Use Fuse.js or similar (custom fuzzy search)
5. Store scroll positions in localStorage
6. Create light mode (dark theme only)
7. Use emojis as icons (use SVG)
8. Forget cursor-pointer on clickable elements
9. Skip property-based tests
10. Mix different icon sets

### ✅ DO

1. Use Tailwind utility classes everywhere
2. Keep content in `src/data/` constants
3. Use History API for routing
4. Implement custom fuzzy search
5. Store scroll in memory (Map)
6. Maintain dark theme consistently
7. Use Heroicons or Lucide icons
8. Add cursor-pointer to interactive elements
9. Write property tests for core logic
10. Use consistent icon set (Heroicons recommended)

## Quick Start Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run property-based tests
npm test -- --grep "Property"

# Type check
npm run type-check
```

## File References

- **Spec Files**: `.kiro/specs/css-tricks-platform/`
  - `requirements.md` - All requirements with acceptance criteria
  - `design.md` - Technical design and architecture
  - `tasks.md` - Implementation task list
- **Design System**: `design-system/css-tricks-platform/MASTER.md`
- **Pencil Designs**: `/Volumes/External Hardisk/Project/css-master/pencil-new.pen`

## When Making Changes

1. **Adding a new topic**: Edit `src/data/topics.ts`
2. **Adding a category**: Edit `src/data/categories.ts`
3. **Changing colors**: Edit `src/styles/index.css` (CSS variables)
4. **Adding a component**: Follow folder structure, create in appropriate subfolder
5. **Modifying search**: Update `src/services/searchService.ts`
6. **Changing routes**: Update `src/services/routeService.ts`

## Design Decisions & Rationale

### Why Custom Routing?

- Simpler for single-page app
- Full control over logic
- No additional dependencies
- Educational value

### Why Custom Fuzzy Search?

- Small dataset (50-100 topics)
- More testable with property-based tests
- Smaller bundle size
- Full control over matching logic

### Why Dark Theme Only?

- Developer tool aesthetic
- Reduces eye strain for long sessions
- Simpler implementation
- Consistent experience

### Why Tailwind 4?

- No config file needed
- Modern CSS features
- Better performance
- Future-proof

## Success Metrics

- **User Engagement**: Time spent on platform, topics viewed
- **Search Usage**: Search queries, click-through rate
- **Navigation**: Category usage, direct URL access
- **Performance**: Load time, interaction latency
- **Content**: Topic completion rate, popular topics

---

**Last Updated**: 2026-04-08
**Version**: 1.0
**Status**: Ready for Implementation
