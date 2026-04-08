# Design Document: CSS Tricks Platform

## Overview

The CSS Tricks Platform is a React-based knowledge sharing application that provides developers with an organized, searchable repository of CSS techniques. The platform features a dark theme interface, category-based navigation with accordion functionality, global keyboard-accessible search with fuzzy matching, and scroll position restoration for enhanced user experience.

The architecture follows enterprise-standard patterns with clear separation of concerns, reusable components, and content-driven design. The platform uses React 19 with Vite for build tooling, Tailwind 4 for styling (CSS-based configuration), and implements client-side routing for unique topic URLs.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser Layer                         │
│  ┌────────────────┐  ┌──────────────┐  ┌─────────────────┐ │
│  │  URL Routing   │  │  Keyboard    │  │  Scroll State   │ │
│  │  (History API) │  │  Events      │  │  Management     │ │
│  └────────────────┘  └──────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      Application Layer                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              App Component (Root)                      │ │
│  │  - Global state management                             │ │
│  │  - Route coordination                                  │ │
│  │  - Search modal state                                  │ │
│  └────────────────────────────────────────────────────────┘ │
│                              ↓                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Sidebar    │  │  MainContent │  │  SearchModal     │  │
│  │  Component   │  │  Component   │  │  Component       │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                       Service Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ SearchService│  │ RouteService │  │ ScrollService    │  │
│  │ (Fuzzy)      │  │              │  │                  │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                         Data Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Topics     │  │  Categories  │  │      Tags        │  │
│  │  (constants) │  │  (constants) │  │   (constants)    │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Architecture Principles

1. **Separation of Concerns**: UI components, business logic, and data are clearly separated
2. **Unidirectional Data Flow**: Data flows from constants → services → components
3. **Component Composition**: Complex UI built from small, reusable components
4. **Service Layer**: Business logic extracted into testable service modules
5. **Content-Driven**: All content managed through constant files, not hardcoded in components

### Technology Stack

- **Framework**: React 19 with React Compiler
- **Build Tool**: Vite 8
- **Styling**: Tailwind 4 (CSS-based configuration, no config file)
- **Language**: TypeScript 6
- **Routing**: Custom client-side routing using History API
- **Search**: Custom fuzzy search implementation

## Components and Interfaces

### Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── MainContent.tsx
│   │   └── AppLayout.tsx
│   ├── navigation/
│   │   ├── CategoryAccordion.tsx
│   │   ├── TopicLink.tsx
│   │   └── Breadcrumb.tsx
│   ├── search/
│   │   ├── SearchModal.tsx
│   │   ├── SearchInput.tsx
│   │   ├── SearchResults.tsx
│   │   └── SearchResultItem.tsx
│   ├── content/
│   │   ├── Card.tsx
│   │   ├── Workflow.tsx
│   │   └── CodeSnippet.tsx
│   └── common/
│       ├── Icon.tsx
│       └── Button.tsx
├── services/
│   ├── searchService.ts
│   ├── routeService.ts
│   └── scrollService.ts
├── hooks/
│   ├── useKeyboardShortcut.ts
│   ├── useScrollRestoration.ts
│   ├── useSearch.ts
│   └── useRoute.ts
├── data/
│   ├── topics.ts
│   ├── categories.ts
│   └── tags.ts
├── types/
│   ├── topic.ts
│   ├── category.ts
│   └── search.ts
├── utils/
│   ├── fuzzyMatch.ts
│   └── routeUtils.ts
├── styles/
│   └── index.css
├── App.tsx
└── main.tsx
```

### Component Specifications

#### 1. Sidebar Component

**Purpose**: Persistent navigation panel displaying categories and topics

**Props**:

```typescript
interface SidebarProps {
  categories: Category[];
  currentTopicId: string | null;
  onTopicSelect: (topicId: string) => void;
}
```

**Behavior**:

- Renders all categories with accordion functionality
- Highlights currently active topic
- Remains visible across all routes
- Collapses/expands categories on click
- Maintains expanded state in component state

**Styling**: Dark theme with `bg-slate-900`, fixed position, full height

#### 2. CategoryAccordion Component

**Purpose**: Collapsible category container with topic list

**Props**:

```typescript
interface CategoryAccordionProps {
  category: Category;
  topics: Topic[];
  isExpanded: boolean;
  currentTopicId: string | null;
  onToggle: () => void;
  onTopicSelect: (topicId: string) => void;
}
```

**Behavior**:

- Displays category name with expand/collapse icon
- Shows/hides topic list based on `isExpanded` state
- Animates expansion with smooth transition
- Highlights active topic within category

#### 3. SearchModal Component

**Purpose**: Global search interface with keyboard navigation

**Props**:

```typescript
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTopicSelect: (topicId: string) => void;
}
```

**Behavior**:

- Opens on Ctrl+K keyboard shortcut
- Closes on Escape key or backdrop click
- Performs fuzzy search on input change
- Displays matching results in real-time
- Supports arrow key navigation through results
- Navigates to topic on Enter key
- Shows "No results" message when no matches found

**Styling**: Modal overlay with backdrop blur, centered modal with dark theme

#### 4. SearchResultItem Component

**Purpose**: Individual search result with keyboard navigation support

**Props**:

```typescript
interface SearchResultItemProps {
  topic: Topic;
  isHighlighted: boolean;
  onClick: () => void;
}
```

**Behavior**:

- Displays topic name and matching tags
- Visual highlight when selected via keyboard
- Clickable to navigate to topic
- Hover state for mouse interaction

#### 5. MainContent Component

**Purpose**: Content area displaying current topic

**Props**:

```typescript
interface MainContentProps {
  topic: Topic | null;
}
```

**Behavior**:

- Renders topic content using content components
- Displays topic title, description, and tags
- Composes Card, Workflow, and CodeSnippet components
- Shows placeholder when no topic selected

#### 6. Card Component

**Purpose**: Reusable information block for topic content

**Props**:

```typescript
interface CardProps {
  title: string;
  content: string;
  variant?: "default" | "highlight" | "warning";
}
```

**Behavior**:

- Renders title and content in styled container
- Supports different visual variants
- Responsive padding and spacing

**Styling**: Dark card with `bg-slate-800`, rounded corners, shadow

#### 7. Workflow Component

**Purpose**: Step-by-step process display

**Props**:

```typescript
interface WorkflowProps {
  steps: WorkflowStep[];
}

interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}
```

**Behavior**:

- Renders numbered steps in sequence
- Visual connection between steps
- Clear hierarchy with step numbers

#### 8. CodeSnippet Component

**Purpose**: Syntax-highlighted code display

**Props**:

```typescript
interface CodeSnippetProps {
  code: string;
  language: string;
  title?: string;
}
```

**Behavior**:

- Displays code with monospace font (JetBrains Mono)
- Shows language label
- Optional title above code block
- Copy button for code content

**Styling**: Dark code block with `bg-slate-950`, syntax highlighting via CSS

## Data Models

### Topic Model

```typescript
interface Topic {
  id: string; // Unique identifier (kebab-case)
  name: string; // Display name
  categoryId: string; // Parent category ID
  description: string; // Brief description
  tags: string[]; // Associated tags for search
  content: TopicContent; // Content structure
  route: string; // URL path (e.g., "/topics/flexbox-centering")
}

interface TopicContent {
  sections: ContentSection[];
}

interface ContentSection {
  type: "card" | "workflow" | "code";
  data: CardData | WorkflowData | CodeData;
}

interface CardData {
  title: string;
  content: string;
  variant?: "default" | "highlight" | "warning";
}

interface WorkflowData {
  steps: WorkflowStep[];
}

interface CodeData {
  code: string;
  language: string;
  title?: string;
}
```

### Category Model

```typescript
interface Category {
  id: string; // Unique identifier (kebab-case)
  name: string; // Display name
  description: string; // Brief description
  order: number; // Display order in sidebar
}
```

### Tag Model

```typescript
interface Tag {
  id: string; // Unique identifier (kebab-case)
  name: string; // Display name
}
```

### Search Result Model

```typescript
interface SearchResult {
  topic: Topic;
  matchScore: number; // Fuzzy match score (0-1)
  matchedFields: string[]; // Fields that matched (name, tags)
}
```

### Route State Model

```typescript
interface RouteState {
  currentPath: string;
  currentTopicId: string | null;
  scrollPositions: Map<string, number>; // path -> scroll position
}
```

## Service Layer Specifications

### SearchService

**Purpose**: Fuzzy search implementation for topics

**Interface**:

```typescript
class SearchService {
  search(query: string, topics: Topic[]): SearchResult[];
  private fuzzyMatch(query: string, target: string): number;
  private matchTags(query: string, tags: string[]): boolean;
}
```

**Behavior**:

- Implements fuzzy string matching algorithm
- Searches topic names and tags
- Returns results sorted by match score
- Handles empty queries gracefully
- Case-insensitive matching

**Algorithm**: Levenshtein distance or similar fuzzy matching

### RouteService

**Purpose**: Client-side routing management

**Interface**:

```typescript
class RouteService {
  navigate(path: string): void;
  getCurrentPath(): string;
  getTopicIdFromPath(path: string): string | null;
  generateTopicPath(topicId: string): string;
  onRouteChange(callback: (path: string) => void): () => void;
}
```

**Behavior**:

- Uses History API for navigation
- Generates routes in format `/topics/{topic-id}`
- Listens to popstate events for back/forward navigation
- Updates browser URL without page reload

### ScrollService

**Purpose**: Scroll position management and restoration

**Interface**:

```typescript
class ScrollService {
  saveScrollPosition(path: string): void;
  restoreScrollPosition(path: string): void;
  scrollToTop(): void;
  private getScrollPosition(): number;
  private setScrollPosition(position: number): void;
}
```

**Behavior**:

- Stores scroll positions in memory (Map)
- Saves position before navigation
- Restores position on back navigation
- Scrolls to top for new routes
- Uses `window.scrollY` and `window.scrollTo()`

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

**Note on Property-Based Testing Applicability**: This feature is primarily UI-focused with significant DOM manipulation, browser API interactions, and visual rendering requirements. Property-based testing is most valuable for the pure logic components (search algorithm, route generation, data transformations). UI interactions, keyboard navigation, and scroll restoration are better tested with example-based tests and integration tests. The properties below focus on the testable pure functions and data transformations.

### Property 1: Category Grouping Correctness

_For any_ list of topics and categories, topics SHALL be grouped under their respective categories such that all topics with the same `categoryId` appear together under that category.

**Validates: Requirements 2.1, 2.5**

### Property 2: Fuzzy Search Matching

_For any_ search query and list of topics, the fuzzy search SHALL return all topics where the query approximately matches either the topic name or any of its tags, with results sorted by match score.

**Validates: Requirements 3.2, 3.3, 3.5, 9.3**

### Property 3: Keyboard Navigation Wraparound

_For any_ list of search results with length N and current index i, pressing the down arrow key SHALL move to index (i + 1) % N, and pressing the up arrow key SHALL move to index (i - 1 + N) % N, providing circular navigation.

**Validates: Requirements 4.2, 4.3**

### Property 4: Route Uniqueness

_For any_ list of topics, the route generation function SHALL produce unique routes such that no two topics share the same route path.

**Validates: Requirements 5.1**

### Property 5: Route Round-Trip Identity

_For any_ topic, generating its route path and then parsing that path back to a topic ID SHALL return the original topic ID (route generation and parsing are inverse operations).

**Validates: Requirements 5.2, 5.3**

### Property 6: Scroll Position Round-Trip

_For any_ route path and scroll position value, saving the scroll position for that route and then retrieving it SHALL return the exact same scroll position value.

**Validates: Requirements 6.1, 6.2**

### Property 7: Data Loading Completeness

_For any_ topic, category, or tag defined in the constant files, it SHALL be retrievable by its ID through the data access layer without errors.

**Validates: Requirements 8.1, 8.2, 8.3**

### Property 8: Content Schema Validation

_For any_ topic content structure, it SHALL conform to the `TopicContent` interface schema with valid section types and properly structured data for each section type.

**Validates: Requirements 8.5**

### Property 9: Tag Association Validity

_For any_ valid topic, it SHALL have at least one associated tag, and _for any_ tag, it MAY be associated with multiple topics (many-to-many relationship).

**Validates: Requirements 9.1, 9.4**

### Property 10: Content Component Rendering

_For any_ topic with N content sections, rendering the topic SHALL produce exactly N content components corresponding to each section's type (Card, Workflow, or CodeSnippet).

**Validates: Requirements 10.4, 10.6**

### Property 11: Accordion Toggle Idempotence

_For any_ category accordion, expanding and then immediately collapsing SHALL restore the original collapsed state (toggle operations are reversible).

**Validates: Requirements 2.4**

## Error Handling

### Search Errors

**Empty Query Handling**:

- Empty or whitespace-only queries return empty results array
- No error thrown, graceful degradation
- UI displays placeholder message

**No Results Handling**:

- When search returns empty array, display "No results found" message
- Suggest checking spelling or trying different keywords
- Maintain modal open state for user to refine query

**Invalid Input Handling**:

- Sanitize search input to prevent XSS
- Limit query length to reasonable maximum (e.g., 100 characters)
- Handle special characters gracefully in fuzzy matching

### Navigation Errors

**Invalid Route Handling**:

- When route doesn't match any topic, display 404-style message
- Provide link back to home or category list
- Log error for monitoring

**Route Parsing Errors**:

- Malformed URLs default to home view
- Extract topic ID safely with try-catch
- Fallback to empty state if parsing fails

**History API Errors**:

- Wrap History API calls in try-catch
- Fallback to hash-based routing if History API unavailable
- Log errors for debugging

### Data Loading Errors

**Missing Topic Data**:

- If topic ID exists but content missing, show error message
- Provide fallback content structure
- Log missing data for content team

**Invalid Content Structure**:

- Validate content sections before rendering
- Skip invalid sections with warning
- Render valid sections, show error for invalid ones

**Category/Tag Missing**:

- If topic references non-existent category, use "Uncategorized" fallback
- If tag doesn't exist, filter it out from display
- Log data inconsistencies

### Scroll Restoration Errors

**Invalid Scroll Position**:

- Validate scroll position is non-negative number
- Clamp to valid range [0, document.height]
- Default to 0 if invalid

**Scroll API Errors**:

- Wrap `window.scrollTo()` in try-catch
- Gracefully degrade if scroll fails
- Don't block navigation on scroll errors

### Keyboard Event Errors

**Event Listener Failures**:

- Wrap event handlers in try-catch
- Log errors but don't crash app
- Ensure cleanup on component unmount

**Conflicting Shortcuts**:

- Check if Ctrl+K is already bound by browser/extension
- Provide alternative shortcut (e.g., Cmd+K on Mac)
- Document keyboard shortcuts for users

## Testing Strategy

### Testing Approach

The CSS Tricks Platform requires a **dual testing approach** combining property-based tests for pure logic and example-based tests for UI interactions:

**Property-Based Tests**: Focus on pure functions and data transformations

- Fuzzy search algorithm
- Route generation and parsing
- Data structure validation
- Keyboard navigation logic
- Scroll position storage/retrieval

**Example-Based Tests**: Focus on UI interactions and integration

- Component rendering
- User interactions (clicks, keyboard events)
- Modal open/close behavior
- Accordion expand/collapse
- Visual styling and theming

**Integration Tests**: Focus on end-to-end workflows

- Search → navigate → scroll restoration flow
- Category navigation → topic selection
- Keyboard shortcuts → modal → navigation
- Browser History API integration

### Property-Based Testing Configuration

**Library**: fast-check (TypeScript property-based testing library)

**Configuration**:

- Minimum 100 iterations per property test
- Each test tagged with feature name and property number
- Tag format: `Feature: css-tricks-platform, Property {number}: {property_text}`

**Example Test Structure**:

```typescript
// Feature: css-tricks-platform, Property 2: Fuzzy Search Matching
test("fuzzy search returns matching topics", () => {
  fc.assert(
    fc.property(fc.array(topicArbitrary), fc.string(), (topics, query) => {
      const results = searchService.search(query, topics);
      // Assert all results match query in name or tags
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
});
```

### Unit Testing Strategy

**Component Tests** (React Testing Library):

- Render tests for all components
- Props validation
- Event handler verification
- Conditional rendering logic

**Service Tests** (Jest):

- SearchService: fuzzy matching accuracy
- RouteService: path generation and parsing
- ScrollService: position storage and retrieval

**Hook Tests** (@testing-library/react-hooks):

- useKeyboardShortcut: event binding and cleanup
- useScrollRestoration: save/restore logic
- useSearch: debouncing and result filtering
- useRoute: navigation and state updates

**Utility Tests** (Jest):

- fuzzyMatch: various string combinations
- routeUtils: edge cases and invalid inputs

### Integration Testing Strategy

**User Flow Tests** (Playwright or Cypress):

1. **Search Flow**: Open modal (Ctrl+K) → type query → arrow keys → Enter → verify navigation
2. **Category Navigation**: Click category → expand → click topic → verify content → back button → verify scroll restored
3. **Direct URL**: Navigate to topic URL → verify content loads → verify sidebar highlights correct topic
4. **Keyboard Navigation**: Tab through sidebar → Enter on category → arrow keys through topics → Enter to navigate

**Browser API Integration**:

- History API: pushState, popstate events
- Scroll API: scrollTo, scrollY
- Keyboard events: keydown, keyup

### Visual Testing Strategy

**Snapshot Tests**:

- Component structure snapshots
- Ensure no unintended markup changes

**Visual Regression** (optional, using Percy or Chromatic):

- Dark theme consistency
- Responsive layouts (mobile, tablet, desktop)
- Modal and accordion states

### Accessibility Testing

**Automated Tests** (jest-axe):

- Color contrast ratios (WCAG AA minimum)
- Keyboard navigation support
- ARIA labels and roles
- Focus management

**Manual Testing**:

- Screen reader compatibility (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation
- Focus visible indicators

### Test Coverage Goals

- **Unit Tests**: 80%+ coverage for services and utilities
- **Component Tests**: All components have render and interaction tests
- **Property Tests**: All 11 correctness properties implemented
- **Integration Tests**: All major user flows covered
- **Accessibility**: Zero critical violations from jest-axe

### Testing Anti-Patterns to Avoid

❌ Testing implementation details (internal state, private methods)
❌ Brittle selectors (test IDs preferred over CSS classes)
❌ Testing third-party libraries (React, Tailwind)
❌ Mocking everything (prefer integration where possible)
❌ Ignoring async behavior (use proper async utilities)

## Implementation Phases

### Phase 1: Foundation (Week 1)

**Goal**: Set up project structure and data layer

**Tasks**:

1. Create folder structure following enterprise standards
2. Define TypeScript interfaces for Topic, Category, Tag
3. Create sample data in constant files (5-10 topics, 3-4 categories)
4. Implement data access utilities
5. Set up Tailwind 4 with dark theme configuration
6. Create base layout component structure

**Deliverables**:

- Complete folder structure
- Type definitions
- Sample data constants
- Basic app shell with routing

### Phase 2: Core UI Components (Week 1-2)

**Goal**: Build reusable UI components

**Tasks**:

1. Implement Sidebar component with category list
2. Implement CategoryAccordion with expand/collapse
3. Implement TopicLink with active state
4. Implement MainContent component
5. Implement Card, Workflow, CodeSnippet content components
6. Apply dark theme styling consistently

**Deliverables**:

- All UI components with dark theme
- Component tests
- Storybook documentation (optional)

### Phase 3: Search Functionality (Week 2)

**Goal**: Implement global search with fuzzy matching

**Tasks**:

1. Implement fuzzy matching algorithm
2. Create SearchService with topic/tag matching
3. Implement SearchModal component
4. Implement SearchInput with debouncing
5. Implement SearchResults with keyboard navigation
6. Add Ctrl+K keyboard shortcut
7. Write property-based tests for search

**Deliverables**:

- Working search modal
- Fuzzy search with keyboard navigation
- Property tests for search algorithm

### Phase 4: Routing & Navigation (Week 2-3)

**Goal**: Implement client-side routing

**Tasks**:

1. Implement RouteService with History API
2. Create route generation utilities
3. Implement route parsing logic
4. Connect navigation to URL updates
5. Handle browser back/forward buttons
6. Write property tests for routing

**Deliverables**:

- Unique URLs for each topic
- Browser navigation support
- Route property tests

### Phase 5: Scroll Restoration (Week 3)

**Goal**: Implement scroll position management

**Tasks**:

1. Implement ScrollService
2. Create useScrollRestoration hook
3. Save scroll position on navigation
4. Restore scroll position on back navigation
5. Scroll to top for new routes
6. Write property tests for scroll service

**Deliverables**:

- Working scroll restoration
- Scroll property tests

### Phase 6: Polish & Testing (Week 3-4)

**Goal**: Complete testing and refinement

**Tasks**:

1. Complete all property-based tests
2. Write integration tests for user flows
3. Run accessibility audit
4. Performance optimization
5. Error handling refinement
6. Documentation updates

**Deliverables**:

- Complete test suite
- Accessibility compliance
- Performance benchmarks
- Updated documentation

### Phase 7: Content Population (Week 4)

**Goal**: Add comprehensive CSS tricks content

**Tasks**:

1. Create 30-50 CSS trick topics
2. Organize into 8-10 categories
3. Add relevant tags to all topics
4. Create visual examples for code snippets
5. Review and edit content for consistency

**Deliverables**:

- Complete content library
- Categorized and tagged topics
- Visual examples

## Design Decisions and Rationale

### Why Client-Side Routing?

**Decision**: Use History API for client-side routing instead of React Router

**Rationale**:

- Simpler implementation for single-page app
- Full control over routing logic
- No additional dependencies
- Educational value in understanding routing fundamentals
- Sufficient for linear navigation patterns

**Trade-offs**:

- More manual work for complex routing scenarios
- Need to implement route matching ourselves
- No built-in nested routing support

### Why Custom Fuzzy Search?

**Decision**: Implement custom fuzzy search instead of using Fuse.js or similar

**Rationale**:

- Small dataset (50-100 topics) doesn't require heavy library
- Custom implementation is more testable with property-based tests
- Learning opportunity for algorithm implementation
- Smaller bundle size
- Full control over matching logic

**Trade-offs**:

- More development time
- Need to handle edge cases ourselves
- May not be as optimized as mature libraries

### Why In-Memory Scroll Storage?

**Decision**: Store scroll positions in memory (Map) instead of localStorage

**Rationale**:

- Scroll positions are session-specific
- No need to persist across page reloads
- Simpler implementation
- No serialization overhead
- Privacy-friendly (no data persistence)

**Trade-offs**:

- Scroll positions lost on page refresh
- Can't restore scroll across sessions

### Why Tailwind 4?

**Decision**: Use Tailwind 4 with CSS-based configuration

**Rationale**:

- No config file needed (simpler setup)
- Modern CSS features (cascade layers, container queries)
- Better performance with native CSS
- Aligns with design system requirements
- Future-proof approach

**Trade-offs**:

- Newer version may have fewer resources
- Team needs to learn CSS-based configuration
- Some plugins may not be compatible yet

### Why React 19 with Compiler?

**Decision**: Use React 19 with React Compiler

**Rationale**:

- Automatic optimization of component re-renders
- No manual memoization needed
- Better performance out of the box
- Modern React features
- Aligns with project's cutting-edge approach

**Trade-offs**:

- Newer version may have compatibility issues
- Compiler is still experimental
- Fewer community examples

### Why Dark Theme Only?

**Decision**: Implement only dark theme, no light mode toggle

**Rationale**:

- Requirements specify dark theme for developer comfort
- Simpler implementation (no theme switching logic)
- Consistent experience across all users
- Reduces testing surface area
- Aligns with developer tool aesthetic

**Trade-offs**:

- Less accessible for users who prefer light mode
- No user preference accommodation
- May not work well in bright environments

## Performance Considerations

### Bundle Size Optimization

**Strategies**:

- No heavy dependencies (custom search, custom routing)
- Tree-shaking enabled in Vite
- Code splitting by route (if needed in future)
- Lazy loading for content components
- SVG icons instead of icon fonts

**Target**: < 100KB initial bundle (gzipped)

### Rendering Performance

**Strategies**:

- React Compiler handles memoization automatically
- Virtualization for long topic lists (if needed)
- Debounced search input (300ms)
- Efficient fuzzy matching algorithm
- Minimal re-renders through proper state management

**Target**: < 100ms interaction response time

### Search Performance

**Strategies**:

- Debounce search input to reduce computations
- Limit search results to top 10 matches
- Early exit in fuzzy matching for poor matches
- Cache search results for repeated queries (optional)

**Target**: < 50ms search execution time for 100 topics

### Scroll Performance

**Strategies**:

- Use `requestAnimationFrame` for smooth scrolling
- Throttle scroll position saves
- Passive event listeners for scroll events
- CSS `scroll-behavior: smooth` for native smoothness

**Target**: 60fps during scroll

## Security Considerations

### XSS Prevention

**Strategies**:

- React's built-in XSS protection (JSX escaping)
- Sanitize search input before processing
- No `dangerouslySetInnerHTML` usage
- Content Security Policy headers

### Content Injection

**Strategies**:

- Validate content structure from constants
- Type checking with TypeScript
- No user-generated content (read-only platform)
- Code snippets displayed as text, not executed

### Route Manipulation

**Strategies**:

- Validate route parameters before use
- Whitelist valid topic IDs
- Handle malformed URLs gracefully
- No sensitive data in URLs

## Accessibility Requirements

### Keyboard Navigation

**Requirements**:

- All interactive elements accessible via Tab key
- Visible focus indicators on all focusable elements
- Ctrl+K opens search modal
- Arrow keys navigate search results
- Enter activates links and buttons
- Escape closes modal

### Screen Reader Support

**Requirements**:

- Semantic HTML elements (nav, main, article)
- ARIA labels for icon buttons
- ARIA live regions for search results
- ARIA expanded state for accordions
- Alt text for any images (if added)

### Color Contrast

**Requirements**:

- Text contrast ratio ≥ 4.5:1 (WCAG AA)
- Interactive element contrast ≥ 3:1
- Focus indicators ≥ 3:1 contrast
- Test with color blindness simulators

### Motion Preferences

**Requirements**:

- Respect `prefers-reduced-motion` media query
- Disable transitions for users who prefer reduced motion
- Provide instant state changes as fallback

## Browser Compatibility

**Target Browsers**:

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions

**Required Features**:

- ES2020+ JavaScript features
- CSS Grid and Flexbox
- History API
- CSS Custom Properties
- CSS Cascade Layers (Tailwind 4)

**Polyfills**: None required (modern browsers only)

## Deployment Considerations

### Build Configuration

**Vite Configuration**:

- Production build with minification
- Source maps for debugging
- Asset optimization (images, fonts)
- Base URL configuration for deployment path

### Static Hosting

**Recommended Platforms**:

- Vercel (zero-config deployment)
- Netlify (with \_redirects for SPA routing)
- GitHub Pages (with 404.html fallback)
- Cloudflare Pages

**SPA Routing Configuration**:

- Configure server to serve index.html for all routes
- Handle 404s by serving index.html
- Client-side routing takes over after load

### Environment Variables

**Required**:

- None (all content in constants)

**Optional**:

- Analytics tracking ID
- Error monitoring service key

## Future Enhancements

### Phase 2 Features (Post-MVP)

1. **Light Mode Toggle**: Add theme switcher with user preference persistence
2. **Advanced Search**: Filter by category, multiple tags, date added
3. **Bookmarks**: Allow users to save favorite topics (localStorage)
4. **Code Playground**: Interactive code editor for trying CSS tricks
5. **Share Functionality**: Copy link, social media sharing
6. **Print Styles**: Optimized printing for topics
7. **Offline Support**: Service worker for offline access
8. **Search Analytics**: Track popular searches to improve content

### Scalability Considerations

**For 500+ Topics**:

- Implement virtual scrolling for sidebar
- Add pagination or infinite scroll for search results
- Consider search indexing (Lunr.js or similar)
- Lazy load topic content on demand

**For Multiple Authors**:

- Add author metadata to topics
- Filter by author
- Author profile pages

**For User Accounts**:

- Authentication system
- Personal collections
- Progress tracking
- Comments and discussions

## Appendix: Design System Reference

### Color Palette (from MASTER.md)

| Role       | Hex     | Usage                                       |
| ---------- | ------- | ------------------------------------------- |
| Primary    | #475569 | Sidebar background, primary UI elements     |
| Secondary  | #64748B | Muted text, borders                         |
| CTA/Accent | #2563EB | Links, buttons, highlights                  |
| Background | #F8FAFC | Card backgrounds (lightened for dark theme) |
| Text       | #1E293B | Primary text color                          |

**Dark Theme Adaptations**:

- Background: #0F172A (slate-900)
- Card Background: #1E293B (slate-800)
- Text: #F8FAFC (slate-50)
- Muted Text: #94A3B8 (slate-400)

### Typography Scale

**Headings** (JetBrains Mono):

- H1: 2.5rem / 40px, font-weight: 700
- H2: 2rem / 32px, font-weight: 600
- H3: 1.5rem / 24px, font-weight: 600
- H4: 1.25rem / 20px, font-weight: 500

**Body** (IBM Plex Sans):

- Large: 1.125rem / 18px, font-weight: 400
- Base: 1rem / 16px, font-weight: 400
- Small: 0.875rem / 14px, font-weight: 400

**Code** (JetBrains Mono):

- Inline: 0.875rem / 14px, font-weight: 400
- Block: 0.875rem / 14px, font-weight: 400, line-height: 1.6

### Spacing System

Using Tailwind's default spacing scale:

- xs: 0.25rem / 4px
- sm: 0.5rem / 8px
- md: 1rem / 16px
- lg: 1.5rem / 24px
- xl: 2rem / 32px
- 2xl: 3rem / 48px
- 3xl: 4rem / 64px

### Component Spacing

- Card padding: 1.5rem (24px)
- Sidebar padding: 1rem (16px)
- Section margins: 2rem (32px)
- Element gaps: 0.5rem (8px)

### Animation Timing

- Fast: 150ms (hover states)
- Base: 200ms (transitions)
- Slow: 300ms (modal open/close)
- Easing: ease-in-out (default)

### Shadow Depths

- sm: 0 1px 2px rgba(0,0,0,0.05) - Subtle lift
- md: 0 4px 6px rgba(0,0,0,0.1) - Cards
- lg: 0 10px 15px rgba(0,0,0,0.1) - Modal
- xl: 0 20px 25px rgba(0,0,0,0.15) - Emphasized elements

---

**Document Version**: 1.0  
**Last Updated**: 2026-04-08  
**Status**: Ready for Review
