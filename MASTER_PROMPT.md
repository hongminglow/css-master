# CSS Tricks Platform - Master Prompt

**Platform Name**: CSS Tricks Platform

**What We Do**: Curate and present CSS tricks that developers commonly miss with live code previews.

**Target Audience**: Developers looking to discover CSS techniques they might have missed.

**Key Differentiator**: Side-by-side code and preview visualization with keyboard-first navigation.

**PROJECT_CONFIG.md**: Refer project specific configuration and requirements here

## Core Features

- **Collapsible Sidebar** - Category-based navigation with icon-only mode
- **Global Search** - Debounced fuzzy search with keyboard shortcuts (Ctrl+K / Cmd+K)
- **Content Organization** - Category → Topics → Content sections
- **Custom Routing** - Client-side routing using History API
- **Scroll Restoration** - Maintains scroll position on navigation
- **Dark Theme** - Professional developer-focused aesthetic
- **Keyboard Navigation** - Full keyboard support throughout

## Technology Stack

- **Framework**: React 19 with React Compiler
- **Build Tool**: Vite 8
- **Styling**: Tailwind 4 (CSS-based configuration, NO tailwind.config.js)
- **Language**: TypeScript 6
- **Routing**: Custom client-side routing using History API
- **Search**: Custom fuzzy search with debouncing
- **Testing**: fast-check for property-based testing

## Architecture Principles

### 1. Enterprise-Standard Folder Structure

```
src/
├── components/
│   ├── layout/          # AppLayout, Sidebar, MainContent
│   ├── navigation/      # CategoryAccordion, TopicLink
│   ├── search/          # SearchModal, SearchInput, SearchResults
│   ├── content/         # 11 content visualization components (see PROJECT_CONFIG.md)
│   └── common/          # Icon, Button, CategoryIcon
├── services/            # searchService, routeService, scrollService
├── hooks/               # useKeyboardShortcut, useScrollRestoration, useSearch, useRoute, useDebounce
├── data/                # categories.ts, tags.ts, topics/ (category folders)
├── types/               # topic.ts, category.ts, search.ts
├── utils/               # fuzzyMatch.ts, routeUtils.ts
├── styles/              # index.css
├── App.tsx
└── main.tsx
```

### 2. Content Component Philosophy

This platform provides 12 pre-built content visualization components. When starting a new project:

**Step 1: Evaluate Existing Components**

- Review all components in `src/components/content/`
- Read usage guidelines in PROJECT_CONFIG.md
- Check if they cover your content visualization needs

**Step 2: Assess Sufficiency**

- Existing components: ContentCard, WorkflowCard, CodeSnippet, PreviewCard, ComparisonCard, TimelineCard, TipCard, TableCard, ListCard, QuoteCard, DosDontsCard, LiveComparisonCard
- These cover most common content visualization patterns
- Suitable for documentation, tutorials, comparisons, and reference materials

**Step 3: Extend When Needed**

- If your domain requires unique visualizations (e.g., interactive diagrams, 3D previews, video embeds, charts), create new components
- Follow established patterns and design principles
- Maintain visual consistency with existing components

**Step 4: Update Documentation**
When adding new components:

1. Define data interface in `src/types/topic.ts`
2. Update ContentSection type union
3. Create component in `src/components/content/`
4. Update PROJECT_CONFIG.md with usage guidelines and examples

### Creating New Content Components

Follow this pattern for consistency:

```typescript
// 1. Define data interface in src/types/topic.ts
export interface YourComponentData {
  title: string;
  // ... your fields
}

// 2. Update ContentSection type
export interface ContentSection {
  type: "card" | "workflow" | ... | "yourcomponent";
  data: CardData | WorkflowData | ... | YourComponentData;
}

// 3. Create component in src/components/content/YourComponent.tsx
interface YourComponentProps {
  data: YourComponentData;
}

export function YourComponent({ data }: YourComponentProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      {/* Your implementation */}
    </div>
  );
}

// 4. Update PROJECT_CONFIG.md with:
// - Component purpose and when to use it
// - Usage examples
// - Selection guidelines
```

**Component Design Principles**:

- Use consistent dark theme styling (bg-slate-800, text-slate-300)
- Follow Tailwind utility-first approach
- Keep components focused and single-purpose
- Accept data via props, no hardcoded content
- Use TypeScript interfaces for type safety
- Maintain visual consistency with existing components
- Use rounded-xl for cards, p-6 for padding
- Follow existing spacing patterns (gap-3, gap-4)
  ├── styles/ # index.css
  ├── App.tsx
  └── main.tsx

````

### 3. Separation of Concerns

- **Components**: Pure UI, receive data via props
- **Services**: Business logic, data transformations
- **Hooks**: React-specific logic, state management
- **Data**: Content constants (easily editable)
- **Types**: TypeScript interfaces
- **Utils**: Pure functions, no side effects

### 4. Content-Driven Design

All content lives in `src/data/topics/` separated by category. Changing content NEVER requires touching component code.

**See PROJECT_CONFIG.md for**:
- All 12 available content components
- Component selection guidelines
- When to use each component type
- Example topic structures with multiple components
- Design system (colors, typography, spacing)
- Category icons and organization

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
````

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
- Platform name/logo

**Collapsed State (80px width)**:

- Category icons only (w-6 h-6, 24px)
- Larger app logo (w-12 h-12, 48px)
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

- Large title with platform name
- Descriptive subtitle explaining the platform
- Professional, welcoming tone

**Quick Stats Grid** (3 columns):

- Total content count
- Number of categories
- Key feature highlight

**Features Grid** (2x2 or 2x3):

- Fuzzy Search with ⌘K hint
- Content organization
- Keyboard Navigation
- Additional platform-specific features
- Each with icon and description

**Browse by Category Section**:

- All categories listed with content counts
- Quick links to first 6 topics per category
- Clickable topic buttons that navigate
- "+X more" indicator for additional topics

**Getting Started Guide**:

- Numbered steps (1, 2, 3)
- Clear, actionable instructions
- Visual step indicators (blue circles)

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

## UX Best Practices & Patterns

### Text Truncation & Tooltips

**Long Text Handling**:

- Use `truncate` class for text that may overflow
- Always add `title` attribute with full text for tooltip
- Apply to topic names, category names, and any dynamic text
- Ensures clean UI while maintaining accessibility

**Example**:

```tsx
<button title={topic.name}>
  <span className="truncate">{topic.name}</span>
</button>
```

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
2. **Brand colors** - Match platform theme
3. **Clear iconography** - Recognizable symbol
4. **Proper meta tags** - Include title and description

## Content Guidelines

### Writing Topics

**Structure**:

1. Title (clear, concise)
2. Description (one sentence explaining the content)
3. Tags (3-5 relevant keywords)
4. Content sections (varies by platform type)

### Organizing Categories

- Keep 8-10 categories max
- Group related topics together
- Use clear, descriptive names
- Assign appropriate icons
- Order by popularity/importance

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
16. Truncate long text with ellipsis and add tooltips

## Implementation Checklist

### Sidebar

- [ ] Collapsible with smooth 300ms transition
- [ ] Expanded: 280px with px-4 py-6, Collapsed: 80px with p-4
- [ ] Large icons when collapsed (w-6 h-6)
- [ ] Tall buttons when collapsed (h-12)
- [ ] Large logo when collapsed (w-12 h-12)
- [ ] Toggle button floats outside (fixed position)
- [ ] Click collapsed icon navigates to first topic
- [ ] Auto-expand category on topic selection
- [ ] Version label at bottom (expanded only)
- [ ] Tooltips on collapsed icons
- [ ] Topic names truncated with ellipsis
- [ ] Full topic name shown in tooltip

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
- [ ] Features grid with icons
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
pnpm install

# Development server
pnpm run dev

# Build for production
pnpm run build

# Run tests
pnpm test

# Run property-based tests
pnpm test -- --grep "Property"

# Type check
pnpm run type-check
```

## File References

- **Component Ecosystem**: `COMPONENT_ECOSYSTEM.md` - Visual guide to all 12 components
- **Component README**: `src/components/content/README.md` - Developer quick reference
- **Project Config**: `PROJECT_CONFIG.md` - CSS Tricks Platform specific settings
- **Spec Files**: `.kiro/specs/css-tricks-platform/` - Requirements, design, tasks
- **Design System**: `design-system/css-tricks-platform/MASTER.md`

---

## Getting Started with This Template

1. **Read AI_AGENT_GUIDE.md** - Comprehensive guide for AI agents
2. **Review existing components** - Check `src/components/content/` and `COMPONENT_ECOSYSTEM.md`
3. **Assess sufficiency** - Determine if 12 existing components are enough
4. **Extend if needed** - Create new components following established patterns
5. **Update documentation** - Keep PROJECT_CONFIG.md and related docs current

**Template Version**: 1.2
**Last Updated**: 2026-04-08
**Components**: 12 content visualization components ready to use
