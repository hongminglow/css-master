# Implementation Plan: CSS Tricks Platform

## Overview

This implementation plan converts the CSS Tricks Platform design into actionable coding tasks. The platform will be built using React 19, Vite 8, Tailwind 4, and TypeScript 6, with custom routing, fuzzy search, and property-based testing using fast-check. The implementation follows a 7-phase approach: Foundation → Core UI → Search → Routing → Scroll Restoration → Polish & Testing → Content Population.

## Tasks

- [x] 1. Foundation - Project structure and data layer
  - [x] 1.1 Create enterprise-standard folder structure
    - Create `src/components/` with subfolders: `layout/`, `navigation/`, `search/`, `content/`, `common/`
    - Create `src/services/`, `src/hooks/`, `src/data/`, `src/types/`, `src/utils/`, `src/styles/`
    - _Requirements: 7.1, 7.4_

  - [x] 1.2 Define TypeScript type definitions
    - Create `src/types/topic.ts` with Topic, TopicContent, ContentSection interfaces
    - Create `src/types/category.ts` with Category interface
    - Create `src/types/search.ts` with SearchResult interface
    - _Requirements: 7.4, 8.5_

  - [x] 1.3 Create sample data constants
    - Create `src/data/categories.ts` with 3-4 sample categories
    - Create `src/data/tags.ts` with sample tags
    - Create `src/data/topics.ts` with 5-10 sample topics with content sections
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 1.4 Write property test for data loading completeness
    - **Property 7: Data Loading Completeness**
    - **Validates: Requirements 8.1, 8.2, 8.3**

  - [x] 1.5 Write property test for content schema validation
    - **Property 8: Content Schema Validation**
    - **Validates: Requirements 8.5**

  - [x] 1.6 Write property test for tag association validity
    - **Property 9: Tag Association Validity**
    - **Validates: Requirements 9.1, 9.4**

  - [x] 1.7 Set up Tailwind 4 with dark theme
    - Configure `src/styles/index.css` with Tailwind imports and dark theme CSS variables
    - Add dark theme color palette (slate-900, slate-800, slate-50, etc.)
    - Import Google Fonts (JetBrains Mono, IBM Plex Sans)
    - _Requirements: 1.1, 1.2, 11.1, 11.2_

  - [x] 1.8 Create base AppLayout component
    - Create `src/components/layout/AppLayout.tsx` with sidebar and main content areas
    - Apply dark theme background and layout structure
    - _Requirements: 1.1, 7.1_

- [ ] 2. Core UI Components - Reusable component library
  - [-] 2.1 Implement Sidebar component
    - Create `src/components/layout/Sidebar.tsx` with dark theme styling
    - Accept categories, currentTopicId, onTopicSelect props
    - Render category list with fixed positioning
    - _Requirements: 2.1, 2.2, 1.1_

  - [ ] 2.2 Implement CategoryAccordion component
    - Create `src/components/navigation/CategoryAccordion.tsx`
    - Implement expand/collapse toggle with smooth transition
    - Show/hide topic list based on isExpanded state
    - Highlight active topic within category
    - _Requirements: 2.3, 2.4_

  - [ ] 2.3 Write property test for accordion toggle idempotence
    - **Property 11: Accordion Toggle Idempotence**
    - **Validates: Requirements 2.4**

  - [ ] 2.4 Implement TopicLink component
    - Create `src/components/navigation/TopicLink.tsx`
    - Apply active state styling for current topic
    - Handle click to trigger onTopicSelect
    - _Requirements: 2.5_

  - [ ] 2.5 Implement MainContent component
    - Create `src/components/layout/MainContent.tsx`
    - Accept topic prop and render content sections
    - Display topic title, description, and tags
    - Show placeholder when no topic selected
    - _Requirements: 10.4, 10.6_

  - [ ] 2.6 Write property test for content component rendering
    - **Property 10: Content Component Rendering**
    - **Validates: Requirements 10.4, 10.6**

  - [ ] 2.7 Implement Card content component
    - Create `src/components/content/Card.tsx`
    - Support default, highlight, warning variants
    - Apply dark theme card styling (bg-slate-800)
    - _Requirements: 10.1, 10.5_

  - [ ] 2.8 Implement Workflow content component
    - Create `src/components/content/Workflow.tsx`
    - Render numbered steps with visual connections
    - Display step title and description
    - _Requirements: 10.2, 10.5_

  - [ ] 2.9 Implement CodeSnippet content component
    - Create `src/components/content/CodeSnippet.tsx`
    - Display code with JetBrains Mono font
    - Show language label and optional title
    - Add copy button for code content
    - _Requirements: 10.3, 10.5_

- [ ] 3. Checkpoint - Verify core UI components
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Search Functionality - Fuzzy search with keyboard navigation
  - [ ] 4.1 Implement fuzzy matching algorithm
    - Create `src/utils/fuzzyMatch.ts` with fuzzy string matching function
    - Implement Levenshtein distance or similar algorithm
    - Return match score (0-1) for query-target pairs
    - _Requirements: 3.5_

  - [ ] 4.2 Write property test for fuzzy search matching
    - **Property 2: Fuzzy Search Matching**
    - **Validates: Requirements 3.2, 3.3, 3.5, 9.3**

  - [ ] 4.3 Implement SearchService
    - Create `src/services/searchService.ts`
    - Implement search method that matches query against topic names and tags
    - Sort results by match score
    - Handle empty queries gracefully
    - _Requirements: 3.2, 3.3, 3.5_

  - [ ] 4.4 Implement SearchModal component
    - Create `src/components/search/SearchModal.tsx`
    - Render modal overlay with backdrop blur
    - Handle Escape key to close modal
    - Handle backdrop click to close modal
    - _Requirements: 3.1, 3.4, 3.6_

  - [ ] 4.5 Implement SearchInput component
    - Create `src/components/search/SearchInput.tsx`
    - Add debouncing (300ms) for search input
    - Trigger search on input change
    - _Requirements: 3.2_

  - [ ] 4.6 Implement SearchResults component
    - Create `src/components/search/SearchResults.tsx`
    - Display search results or "No results" message
    - Support keyboard navigation (arrow keys)
    - Handle Enter key to navigate to selected topic
    - _Requirements: 3.4, 3.6, 4.1, 4.2, 4.3, 4.4, 4.6_

  - [ ] 4.7 Write property test for keyboard navigation wraparound
    - **Property 3: Keyboard Navigation Wraparound**
    - **Validates: Requirements 4.2, 4.3**

  - [ ] 4.8 Implement SearchResultItem component
    - Create `src/components/search/SearchResultItem.tsx`
    - Display topic name and matching tags
    - Apply highlight styling when selected via keyboard
    - Handle click to navigate to topic
    - _Requirements: 4.5, 4.6_

  - [ ] 4.9 Implement useKeyboardShortcut hook
    - Create `src/hooks/useKeyboardShortcut.ts`
    - Listen for Ctrl+K (Cmd+K on Mac) to open search modal
    - Ensure cleanup on component unmount
    - _Requirements: 3.1_

  - [ ] 4.10 Wire search modal to App component
    - Add search modal state to App.tsx
    - Connect Ctrl+K shortcut to open modal
    - Connect search result selection to navigation
    - _Requirements: 3.1, 4.4_

- [ ] 5. Checkpoint - Verify search functionality
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Routing & Navigation - Client-side routing with History API
  - [ ] 6.1 Implement route generation utilities
    - Create `src/utils/routeUtils.ts` with generateTopicPath function
    - Generate routes in format `/topics/{topic-id}`
    - _Requirements: 5.1, 5.4_

  - [ ] 6.2 Write property test for route uniqueness
    - **Property 4: Route Uniqueness**
    - **Validates: Requirements 5.1**

  - [ ] 6.3 Implement route parsing logic
    - Add getTopicIdFromPath function to `src/utils/routeUtils.ts`
    - Extract topic ID from route path safely
    - Handle malformed URLs gracefully
    - _Requirements: 5.2_

  - [ ] 6.4 Write property test for route round-trip identity
    - **Property 5: Route Round-Trip Identity**
    - **Validates: Requirements 5.2, 5.3**

  - [ ] 6.5 Implement RouteService
    - Create `src/services/routeService.ts`
    - Implement navigate method using History API pushState
    - Implement getCurrentPath method
    - Implement onRouteChange listener for popstate events
    - _Requirements: 5.4_

  - [ ] 6.6 Implement useRoute hook
    - Create `src/hooks/useRoute.ts`
    - Manage current route state
    - Listen to route changes (back/forward navigation)
    - Provide navigate function
    - _Requirements: 5.4_

  - [ ] 6.7 Connect routing to App component
    - Update App.tsx to use useRoute hook
    - Update URL when topic is selected
    - Load topic based on current route
    - Handle browser back/forward buttons
    - _Requirements: 5.2, 5.3, 5.4_

  - [ ] 6.8 Update Sidebar to highlight current topic from route
    - Pass currentTopicId from route to Sidebar
    - Highlight active topic based on route
    - _Requirements: 2.2, 5.2_

- [ ] 7. Scroll Restoration - Position management for navigation
  - [ ] 7.1 Implement ScrollService
    - Create `src/services/scrollService.ts`
    - Implement saveScrollPosition method with Map storage
    - Implement restoreScrollPosition method
    - Implement scrollToTop method
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ] 7.2 Write property test for scroll position round-trip
    - **Property 6: Scroll Position Round-Trip**
    - **Validates: Requirements 6.1, 6.2**

  - [ ] 7.3 Implement useScrollRestoration hook
    - Create `src/hooks/useScrollRestoration.ts`
    - Save scroll position before navigation
    - Restore scroll position on back navigation
    - Scroll to top for new routes
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ] 7.4 Integrate scroll restoration with routing
    - Update App.tsx to use useScrollRestoration hook
    - Connect scroll restoration to route changes
    - _Requirements: 6.1, 6.2, 6.3_

- [ ] 8. Checkpoint - Verify routing and scroll restoration
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Polish & Testing - Complete test suite and refinement
  - [ ] 9.1 Write property test for category grouping correctness
    - **Property 1: Category Grouping Correctness**
    - **Validates: Requirements 2.1, 2.5**

  - [ ] 9.2 Complete all remaining property-based tests
    - Verify all 11 correctness properties are implemented
    - Ensure each test runs minimum 100 iterations
    - Tag each test with feature name and property number

  - [ ] 9.3 Write integration tests for user flows
    - Test search flow: Ctrl+K → type → arrow keys → Enter → verify navigation
    - Test category navigation: click category → expand → click topic → verify content
    - Test direct URL: navigate to topic URL → verify content loads
    - Test scroll restoration: navigate → scroll → back → verify scroll restored

  - [ ] 9.4 Run accessibility audit
    - Test keyboard navigation (Tab, Enter, Escape, Arrow keys)
    - Verify focus indicators are visible
    - Check color contrast ratios (4.5:1 minimum)
    - Test with screen reader (verify ARIA labels)
    - Verify prefers-reduced-motion support

  - [ ] 9.5 Optimize performance
    - Verify bundle size < 100KB (gzipped)
    - Ensure search execution < 50ms for 100 topics
    - Verify 60fps during scroll
    - Test interaction response time < 100ms

  - [ ] 9.6 Refine error handling
    - Add error boundaries for component errors
    - Handle invalid routes with 404 message
    - Validate content structure before rendering
    - Add try-catch for History API calls

- [ ] 10. Content Population - Add comprehensive CSS tricks
  - [ ] 10.1 Create comprehensive topic content
    - Create 30-50 CSS trick topics with complete content sections
    - Use Card, Workflow, and CodeSnippet components appropriately
    - Include practical code examples for each trick
    - _Requirements: 8.1, 10.6_

  - [ ] 10.2 Organize topics into categories
    - Create 8-10 categories covering major CSS areas
    - Assign each topic to appropriate category
    - Order categories logically in sidebar
    - _Requirements: 2.1, 8.2_

  - [ ] 10.3 Add comprehensive tags to topics
    - Tag each topic with relevant keywords
    - Ensure topics have at least one tag
    - Create tag associations for search functionality
    - _Requirements: 9.1, 9.3, 8.3_

  - [ ] 10.4 Review and refine content
    - Verify all topics have complete content
    - Check code examples for accuracy
    - Ensure consistent formatting across topics
    - Test search functionality with real content
    - _Requirements: 8.4, 8.5_

- [ ] 11. Final checkpoint - Complete verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties from the design
- Integration tests validate end-to-end user workflows
- All code uses TypeScript 6 with strict type checking
- All styling uses Tailwind 4 utility classes (no config file)
- Dark theme is applied consistently across all components
