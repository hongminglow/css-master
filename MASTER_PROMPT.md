# CSS Tricks Platform - Master Prompt

**Platform Name**: CSS Tricks Platform

**What We Do**: Curate and present front-end web tricks — CSS, HTML, and browser APIs — that developers commonly miss, with live code previews.

**Target Audience**: Developers looking to discover CSS and HTML techniques they might have missed.

**Key Differentiator**: Side-by-side code and preview visualization with keyboard-first navigation.

**PROJECT_CONFIG.md**: Refer project specific configuration and requirements here

---

## 🤖 AI Agent Behavior: Automatic Topic Creation

**CRITICAL INSTRUCTION FOR AI AGENTS:**

When a user asks about, discusses, or mentions ANY front-end concept (CSS, HTML, browser APIs, media, performance, etc.), you MUST **automatically create a new topic** without asking for permission. This includes:

- Questions about CSS properties, selectors, or features
- Discussions about layout techniques (grid, flexbox, positioning)
- Mentions of CSS tricks, hacks, or best practices
- Requests to explain CSS concepts
- Comparisons between CSS or HTML approaches
- Bug fixes or solutions to CSS/HTML problems
- Modern CSS features, HTML elements, or browser APIs
- Media handling: images, video, audio, responsive assets
- HTML semantics, accessibility, and form controls

**Trigger Keywords (Non-Exhaustive):**

- CSS properties: `display`, `position`, `grid`, `flexbox`, `transform`, `animation`, etc.
- Layout terms: `centering`, `responsive`, `gallery`, `masonry`, `sticky`, `fixed`
- Techniques: `clamp()`, `min()`, `max()`, `calc()`, `var()`, `@container`, `@layer`
- Concepts: `z-index`, `stacking context`, `specificity`, `cascade`, `inheritance`
- Visual effects: `blur`, `gradient`, `shadow`, `backdrop-filter`, `clip-path`
- HTML elements: `picture`, `srcset`, `details`, `dialog`, `template`, `slot`
- Media: `srcset`, `sizes`, `picture`, `loading`, `decoding`, `fetchpriority`
- Performance: `content-visibility`, `will-change`, `contain`, lazy loading

**Default Behavior:**

1. **Immediately create the topic** - Don't ask "Would you like me to create a topic?"
2. **Research thoroughly** - Provide production-ready, high-quality content
3. **Use multiple components** - Combine 4-8 visualization components per topic
4. **Include live previews** - Always add PreviewCard for visual demonstration
5. **Follow the 4-step process** (see "Adding New Topics" section below)

**Exception:** Only ask for clarification if the user's request is genuinely ambiguous or incomplete.

---

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
- **Routing**: standard `react-router-dom` (via `createBrowserRouter`)
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
│   ├── content/         # 12 content visualization components
│   └── common/          # Icon, Button, CategoryIcon
├── services/            # dataService, searchService
├── hooks/               # useKeyboardShortcut, useDebounce
├── data/                # categories.ts, topics/ (category folders)
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

- Existing components: ContentCard, WorkflowCard, CodeSnippet, PreviewCard, ComparisonCard, TimelineCard, TipCard, TableCard, ListCard, QuoteCard, DosDontsCard, LiveComparisonCard, FeatureComparisonCard
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

### 5. Standard React Routing

- We utilize standard `react-router-dom` (`createBrowserRouter`).
- Do **not** build custom History API services. Rely on standard ecosystem tools as recorded in `package.json`.
- Note: Since we use an isolated 2-pane fixed layout (`h-screen overflow-hidden` App wrapper with separate scrolling for Sidebar and MainContent), native `<ScrollRestoration />` does not work because it strictly listens to browser `window` scroll. You MUST use a custom `useScrollRestoration` hook for the inner `.overflow-y-auto` child node.

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
5. **No background plate** - SVG should be raw and fill the canvas, without a solid `<rect>` background filling the box.

### Global App UI/UX Standards

1. **Typography** - Use smooth, modern sans-serif fonts like `Outfit` (or standard tech monospaces like `JetBrains Mono`) for standard text and UI elements for a polished, readable, and bold look.
2. **Scrollbars** - Ensure `index.css` overrides default bulky scrollbars with thin, custom scrollbars that match the dark theme (e.g., `width: 6px`, dark slate thumb).

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

### Adding New Topics (Instructions for AI Agents)

**MANDATORY PROCESS - Execute Automatically Without Asking:**

When a user mentions ANY CSS-related topic (see trigger keywords above), you MUST autonomously execute these steps:

**Step 1: Deep Dive & Research**

- Conduct thorough technical research on the CSS concept
- Identify the problem it solves and why developers miss it
- Find real-world use cases and browser support information
- Architect solid, production-ready CSS code examples
- **Never use placeholder text** - provide complete, working code

**Step 2: File Creation**

- Determine the correct category:
  - `layout` - Grid, Flexbox, positioning, spacing, stacking
  - `responsive` - Media queries, container queries, viewport units
  - `animations` - Transitions, keyframes, transforms, scroll-driven
  - `colors` - Color functions, gradients, blend modes, filters
  - `typography` - Font properties, text effects, units, line-height
- Create file at: `src/data/topics/<category>/<topic-name>.ts`
- Use kebab-case for filename (e.g., `dynamic-gallery-grid.ts`)
- Build 4-8 content sections using the 12 available components:
  - Start with `ContentCard` (introduction)
  - Add `ComparisonCard` (old vs new approach)
  - Include `CodeSnippet` (complete working code)
  - Add `PreviewCard` (live visual demonstration)
  - Use `DosDontsCard` (best practices)
  - Add `TipCard` (warnings, browser support, accessibility)
  - Optional: `TableCard`, `WorkflowCard`, `TimelineCard`, `ListCard`

**Step 3: Architecture Registration**

- **Export from category barrel**: `src/data/topics/<category>/index.ts`

  ```typescript
  export { yourNewTopic } from "./your-new-topic";
  ```

- **Import in master index**: `src/data/topics/index.ts` (add to import statement)

  ```typescript
  // Add to the existing import from your category
  import {
    existingTopic1,
    existingTopic2,
    yourNewTopic, // ← ADD THIS LINE (alphabetically sorted)
  } from "./<category>";
  ```

- **Add to topics array**: `src/data/topics/index.ts` (add to array)
  ```typescript
  export const topics: Topic[] = [
    // ... existing topics
    yourNewTopic, // ← ADD THIS LINE (in category group)
  ];
  ```

**CRITICAL**: You must update BOTH the import statement AND the topics array!

**Step 4: Component Ecosystem Updates** (Only if creating NEW component types)

- If you created a new visualization component (not using the existing 12):
  - Update `COMPONENT_ECOSYSTEM.md` with component hierarchy
  - Update `PROJECT_CONFIG.md` with usage guidelines
  - Add TypeScript interfaces to `src/types/topic.ts`

**Quality Checklist:**

- [ ] Topic has 4-8 content sections
- [ ] Includes live PreviewCard demonstration
- [ ] Code examples are complete and working
- [ ] Includes browser support information
- [ ] Has accessibility notes (if relevant)
- [ ] Uses proper TypeScript types
- [ ] Exported from category barrel (`<category>/index.ts`)
- [ ] Imported in master index (import statement at top)
- [ ] Added to topics array in master index
- [ ] Tags are relevant and searchable
- [ ] No TypeScript errors (run `getDiagnostics`)

**Example Topic Structure:**

```typescript
export const yourTopic: Topic = {
  id: "your-topic-id",
  name: "Your Topic Name",
  categoryId: "layout", // or responsive, animations, colors, typography
  description: "One-sentence description of what this teaches",
  tags: ["css", "grid", "responsive", "modern"],
  route: "/topics/your-topic-id",
  content: {
    sections: [
      {
        type: "card",
        data: {
          /* intro */
        },
      },
      {
        type: "comparison",
        data: {
          /* old vs new */
        },
      },
      {
        type: "code",
        data: {
          /* complete code */
        },
      },
      {
        type: "preview",
        data: {
          /* live demo */
        },
      },
      {
        type: "dosdонts",
        data: {
          /* best practices */
        },
      },
      {
        type: "tip",
        data: {
          /* important notes */
        },
      },
    ],
  },
};
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
3. Invent custom routers or history APIs. We use standard `react-router-dom`.
4. Use Fuse.js or similar (custom fuzzy search)
5. Store scroll positions in localStorage manually when React Router does it automatically.
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
16. Unintentionally leak scroll positions across routes. Single Page Apps (SPAs) mutate the DOM instead of causing hard browser refetches! If you don't affirmatively trace and restore `container.scrollTop` on `location` change, navigating from Topic A to Topic B will leave the user stuck in the exact middle of the screen because the browser doesn't know the "page" changed. Fix this by using a `useScrollRestoration` hook mapping to a global `Map()`.

### ✅ DO

1. Use Tailwind utility classes everywhere
2. Keep content in `src/data/` constants
3. Use `react-router-dom` and strictly follow the documented `package.json` tools.
4. Implement custom fuzzy search with debouncing
5. Understand scroll contexts! Use custom `useScrollRestoration` hooks specifically because we employ a fixed `h-screen overflow-hidden` wrapper with independent scrolling panels.
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

---

## 🗂️ Category Management

### Existing Categories

| ID | Name | Icon | Scope |
|----|------|------|-------|
| `layout` | Layout | `layout` | CSS layout, positioning, flexbox, grid, overflow |
| `typography` | Typography | `type` | Fonts, text-wrap, line-height, `ch`/`ex` units |
| `colors` | Colors & Effects | `palette` | Colors, gradients, blend modes, filters |
| `animations` | Animations | `zap` | Transitions, keyframes, scroll-driven, view transitions |
| `responsive` | Responsive | `smartphone` | Container queries, media queries, viewport units |
| `html` | HTML & Media | `code` | HTML elements, images, srcset, forms, media |

### When to Create a New Category

**Create a new category** when a topic does not logically fit any existing category and there is potential for at least 3–5 more topics in the same domain. Examples:
- `performance` — lazy loading, paint performance, resource hints
- `accessibility` — ARIA, focus management, contrast
- `forms` — custom inputs, validation styling

**Reuse an existing category** for most topics. When in doubt:
- CSS technique → `layout`, `colors`, `animations`, `responsive`, or `typography`
- HTML elements/APIs → `html`

### How to Create a New Category

**4-step process:**

1. **Add icon** to `src/components/common/CategoryIcon.tsx` — add a new `case "iconname":` with SVG path
2. **Register category** in `src/data/categories.ts` — add `{ id, name, icon, order }` entry
3. **Create folder + barrel** — `src/data/topics/<categoryid>/index.ts`
4. **Import in master index** — add import from the new barrel in `src/data/topics/index.ts`

> **Note:** The sidebar, search, and home page all automatically pick up new categories — no component changes needed.

**Last Updated**: 2026-04-08
**Components**: 12 content visualization components ready to use
