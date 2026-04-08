# CSS Tricks Platform - Master Prompt

## Project Overview

A knowledge sharing platform for CSS tricks that developers commonly miss. Built with React 19, Vite 8, Tailwind 4, and TypeScript 6. Features dark theme, collapsible sidebar with category navigation, debounced fuzzy search, and interactive code previews.

## Core Identity

**What We Do**: Curate and present CSS tricks in an organized, searchable, visually appealing platform with live code previews.

**Target Audience**: Developers looking to discover CSS techniques they might have missed.

**Key Differentiator**: Side-by-side code and preview visualization with keyboard-first navigation and intelligent search.

## Technology Stack

- **Framework**: React 19 with React Compiler
- **Build Tool**: Vite 8
- **Styling**: Tailwind 4 (CSS-based configuration, NO tailwind.config.js file)
- **Language**: TypeScript 6
- **Routing**: Custom client-side routing using History API
- **Search**: Custom fuzzy search implementation with debouncing
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
│   └── common/          # Icon, Button, CategoryIcon
├── services/            # searchService, routeService, scrollService
├── hooks/               # useKeyboardShortcut, useScrollRestoration, useSearch, useRoute, useDebounce
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
  type: "card" | "workflow" | "code" | "preview";
  data: CardData | WorkflowData | CodeData | PreviewData;
}
```

## Key Features Implementation

### 1. Collapsible Sidebar with Category Navigation

**Expanded State (280px width)**:

- Full category names with icons
- Item count badges
- Expand/collapse arrows
- Topic list when expanded
- Version label at bottom
- "CSS Tricks" text logo

**Collapsed State (80px width)**:

- Category icons only (w-6 h-6, 24px)
- Larger app logo (w-12 h-12, 48px CSS shield)
- Search icon only
- Taller buttons (h-12, 48px) for better visibility
- Click icon to navigate to first topic in category

**Toggle Button**:

- Fixed position, floating outside sidebar
- Smooth transition (300ms)
- Position: 268px (expanded), 68px (collapsed)
- Arrow icon rotates 180° when collapsed

**Auto-Expand on Selection**:

- When topic selected from search, automatically expand its category
- Uses `useEffect` to detect currentTopicId changes

**Category Icons** (using CategoryIcon component):

- Layout: Grid/layout icon
- Typography: Text/type icon
- Colors & Effects: Palette icon
- Animations: Lightning/zap icon
- Responsive: Smartphone icon

### 2. Global Search (Ctrl+K / Cmd+K)

**Search Modal Design**:

- Full-screen overlay with backdrop blur
- Centered modal (560px width)
- Table-like results (not card-like)
- Border-bottom separators between items
- SVG search icon (not emoji)

**Debounced Search**:

- 300ms debounce delay using `useDebounce` hook
- Prevents excessive re-renders
- Query updates immediately, results update after delay

**Search Results**:

- Clean, minimal design with border separators
- Selected item: blue background with arrow icon
- Hover state: subtle background change
- Each result shows: topic name + tags (separated by •)

**Keyboard Navigation**:

- ↑↓ arrows to navigate
- Enter to select
- Escape to close
- Footer shows keyboard hints

### 3. Meaningful Home Content

**Hero Section**:

- Large title: "CSS Tricks Platform"
- Descriptive subtitle explaining the platform
- Professional, welcoming tone

**Quick Stats Grid** (3 columns):

- Total CSS tricks count
- Number of categories
- "100% Dark Mode" indicator

**Features Grid** (2x2):

- Fuzzy Search with ⌘K hint
- Live Code Preview
- Organized by Category
- Keyboard Navigation
- Each with icon and description

**Browse by Category Section**:

- All categories listed with trick counts
- Quick links to first 6 topics per category
- Clickable topic buttons that navigate
- "+X more" indicator for additional topics

**Getting Started Guide**:

- Numbered steps (1, 2, 3)
- Clear, actionable instructions
- Visual step indicators (blue circles)

### 4. Side-by-Side Code & Preview

- Left: Code snippet with syntax highlighting
- Right: Live preview showing visual output
- Equal width split
- Dark code background, light preview background

### 5. Scroll Restoration

- Save scroll position before navigation
- Restore on back button
- Scroll to top for new routes
- Store in memory (Map), not localStorage

### 6. Unique Routes

- Format: `/topics/{topic-id}`
- Use History API (pushState, popstate)
- Update URL without page reload
- Handle browser back/forward

## UX Best Practices & Patterns

### Search Experience

1. **Debounce user input** - Use 300ms delay to prevent excessive searches
2. **Show loading states** - Visual feedback during search
3. **Keyboard-first** - Full keyboard navigation support
4. **Clear results** - Table-like layout with clear separators

### Sidebar Interaction

1. **Collapsible design** - Save screen space when needed
2. **Icon-only mode** - Large, visible icons (24px minimum)
3. **Smart interactions** - Collapsed icons navigate to first topic
4. **Smooth transitions** - 300ms animation for all state changes
5. **Auto-expand** - Expand category when topic selected from search

### Visual Hierarchy

1. **Consistent spacing** - Use Tailwind's spacing scale
2. **Icon sizing** - Collapsed: 24px (w-6 h-6), Expanded: 16px (w-4 h-4)
3. **Button heights** - Collapsed: 48px (h-12), Expanded: 36px (h-9)
4. **Logo sizing** - Collapsed: 48px (w-12 h-12), Expanded: text-2xl

### Favicon Design

1. **Minimal padding** - Use full canvas space
2. **Brand colors** - Match platform theme (#2563eb blue, #0f172a dark)
3. **Clear iconography** - CSS shield with "CSS" text
4. **Proper meta tags** - Include title and description

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
- Assign appropriate icons
- Order by popularity/importance

**Example Categories**:

```typescript
export const categories: Category[] = [
  { id: "layout", name: "Layout", icon: "layout", order: 1 },
  { id: "typography", name: "Typography", icon: "type", order: 2 },
  { id: "colors", name: "Colors & Effects", icon: "palette", order: 3 },
  { id: "animations", name: "Animations", icon: "zap", order: 4 },
  { id: "responsive", name: "Responsive", icon: "smartphone", order: 5 },
];
```

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
- Sidebar Collapse → Icon Click → Navigate to First Topic

## Performance Targets

- **Bundle Size**: < 100KB (gzipped)
- **Search Execution**: < 50ms for 100 topics (with 300ms debounce)
- **Interaction Response**: < 100ms
- **Scroll Performance**: 60fps
- **Sidebar Animation**: 300ms smooth transition

## Accessibility Requirements

- Keyboard navigation for all features
- Focus indicators visible (3:1 contrast)
- Color contrast 4.5:1 minimum (WCAG AA)
- Semantic HTML (nav, main, article)
- ARIA labels for icon buttons
- Tooltips on collapsed sidebar icons
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
11. Make collapsed sidebar icons too small (minimum 24px)
12. Use instant search without debouncing
13. Create card-like search results (use table-like with borders)
14. Forget to auto-expand category on search selection
15. Use absolute positioning for toggle button (use fixed)

### ✅ DO

1. Use Tailwind utility classes everywhere
2. Keep content in `src/data/` constants
3. Use History API for routing
4. Implement custom fuzzy search with debouncing
5. Store scroll in memory (Map)
6. Maintain dark theme consistently
7. Use Heroicons or Lucide icons (SVG)
8. Add cursor-pointer to interactive elements
9. Write property tests for core logic
10. Use consistent icon set (Heroicons recommended)
11. Make collapsed icons large and visible (w-6 h-6 minimum)
12. Debounce search input (300ms recommended)
13. Use clean, minimal search result design
14. Auto-expand categories when topics selected
15. Use fixed positioning for floating elements

## Implementation Checklist

### Sidebar

- [ ] Collapsible with smooth 300ms transition
- [ ] Expanded: 280px, Collapsed: 80px
- [ ] Large icons when collapsed (w-6 h-6)
- [ ] Tall buttons when collapsed (h-12)
- [ ] Large logo when collapsed (w-12 h-12)
- [ ] Toggle button floats outside (fixed position)
- [ ] Click collapsed icon navigates to first topic
- [ ] Auto-expand category on topic selection
- [ ] Version label at bottom (expanded only)
- [ ] Tooltips on collapsed icons

### Search

- [ ] Debounced input (300ms delay)
- [ ] Table-like results with border separators
- [ ] SVG search icon (not emoji)
- [ ] Keyboard navigation (↑↓, Enter, Esc)
- [ ] Selected item shows arrow icon
- [ ] Clean, minimal design
- [ ] Full-screen overlay with blur
- [ ] Centered modal (560px)

### Home Content

- [ ] Hero section with title and description
- [ ] Quick stats grid (3 columns)
- [ ] Features grid (2x2) with icons
- [ ] Browse by category with quick links
- [ ] Getting started guide with numbered steps
- [ ] All sections properly spaced

### General

- [ ] Custom favicon with minimal padding
- [ ] Proper page title and meta description
- [ ] All icons from consistent set
- [ ] Cursor pointer on interactive elements
- [ ] Smooth transitions (150-300ms)
- [ ] No horizontal scroll
- [ ] Dark theme throughout

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
- **Pencil Designs**: `./pencil-new.pen`

## When Making Changes

1. **Adding a new topic**: Edit `src/data/topics.ts`
2. **Adding a category**: Edit `src/data/categories.ts` (include icon name)
3. **Changing colors**: Edit `src/styles/index.css` (CSS variables)
4. **Adding a component**: Follow folder structure, create in appropriate subfolder
5. **Modifying search**: Update `src/services/searchService.ts`
6. **Changing routes**: Update `src/services/routeService.ts`
7. **Adding category icon**: Update `src/components/common/CategoryIcon.tsx`
8. **Adjusting debounce**: Modify delay in `SearchModal.tsx` (default 300ms)

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
- Easy to add debouncing

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

### Why Collapsible Sidebar?

- Maximizes content viewing area
- Better for smaller screens
- Professional UX pattern
- Maintains functionality in both states

### Why Debounced Search?

- Prevents excessive re-renders
- Better performance
- Smoother user experience
- Industry standard pattern

### Why Table-like Search Results?

- Cleaner, more professional appearance
- Better information density
- Easier to scan
- Less visual clutter than cards

## Success Metrics

- **User Engagement**: Time spent on platform, topics viewed
- **Search Usage**: Search queries, click-through rate, debounce effectiveness
- **Navigation**: Category usage, direct URL access, sidebar collapse rate
- **Performance**: Load time, interaction latency, search response time
- **Content**: Topic completion rate, popular topics, category distribution

---

**Last Updated**: 2026-04-08
**Version**: 1.1
**Status**: Production Ready

**Recent Enhancements**:

- Added collapsible sidebar with icon-only mode
- Implemented debounced search (300ms)
- Redesigned search results (table-like)
- Added meaningful home content with quick links
- Auto-expand category on topic selection
- Improved favicon design
- Enhanced collapsed state visibility
