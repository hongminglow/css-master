# Content Component Ecosystem

## Component Hierarchy

```
Content Visualization Components (12 Total)
│
├── Informational Components
│   ├── ContentCard          → General explanations, concepts
│   ├── QuoteCard            → Highlighted quotes, principles
│   └── TipCard              → Notes, warnings (4 variants)
│
├── Instructional Components
│   ├── WorkflowCard         → Step-by-step guides
│   ├── TimelineCard         → Chronological progression
│   └── ListCard             → Bulleted/numbered lists
│
├── Code Components
│   ├── CodeSnippet          → Code examples
│   ├── PreviewCard          → Live visual demos
│   ├── ComparisonCard       → Side-by-side code comparison
│   └── LiveComparisonCard   → Interactive side-by-side bug/fix demo
│
└── Data Components
    ├── TableCard            → Structured data in rows/columns
    └── DosDontsCard         → Best practices vs anti-patterns
```

## Component Relationships

### Common Pairings

**Code + Preview** (Most Common)
```
CodeSnippet → Shows the code
PreviewCard → Shows the result
```

**Comparison + Preview**
```
ComparisonCard → Shows old vs new code
PreviewCard    → Shows visual difference
```

**Live Comparison (Bug vs Fix)**
```
LiveComparisonCard → Shows side-by-side code with isolated live iframes
```

**Card + Workflow + Code**
```
ContentCard  → Explains the concept
WorkflowCard → Shows implementation steps
CodeSnippet  → Provides complete code
```

**Timeline + Code**
```
TimelineCard → Shows evolution
CodeSnippet  → Shows modern implementation
```

## Component Selection Flow

```
What do you need to show?
│
├── Explaining a concept?
│   └── Use ContentCard
│
├── Important note/warning?
│   └── Use TipCard (choose variant: info/warning/success/danger)
│
├── Step-by-step process?
│   └── Use WorkflowCard
│
├── Historical context?
│   └── Use TimelineCard
│
├── Code example?
│   ├── Just code? → Use CodeSnippet
│   ├── Code + visual? → Use CodeSnippet + PreviewCard
│   ├── Comparing approaches? → Use ComparisonCard
│   └── Bug vs Fix visual proof? → Use LiveComparisonCard
│
├── Structured data?
│   ├── Rows and columns? → Use TableCard
│   ├── Simple list? → Use ListCard
│   └── Do's and don'ts? → Use DosDontsCard
│
└── Quote or principle?
    └── Use QuoteCard
```

## Typical Topic Structures

### Structure 1: Basic Tutorial
```
1. ContentCard     → Introduction
2. TipCard         → Important note
3. WorkflowCard    → Implementation steps
4. CodeSnippet     → Full code
5. PreviewCard     → Visual result
```

### Structure 2: Comparison Guide
```
1. ContentCard     → Context
2. TimelineCard    → Evolution (optional)
3. ComparisonCard  → Old vs new
4. CodeSnippet     → Modern approach
5. PreviewCard     → Visual demo
6. DosDontsCard    → Best practices
```

### Structure 3: Reference Documentation
```
1. ContentCard     → Overview
2. ListCard        → Key features
3. TableCard       → Property reference
4. CodeSnippet     → Usage examples
5. TipCard         → Important notes
```

### Structure 4: Deep Dive
```
1. QuoteCard       → Specification quote
2. ContentCard     → Detailed explanation
3. TimelineCard    → Historical context
4. ComparisonCard  → Different approaches
5. WorkflowCard    → Implementation guide
6. CodeSnippet     → Complete example
7. PreviewCard     → Visual demo
8. DosDontsCard    → Best practices
9. TipCard         → Browser support
```

## Component Complexity Matrix

| Component | Complexity | Data Fields | Visual Impact |
|-----------|-----------|-------------|---------------|
| ContentCard | Low | 2 | Medium |
| TipCard | Low | 3 | High |
| QuoteCard | Low | 2 | Medium |
| ListCard | Low | 3 | Low |
| CodeSnippet | Low | 3 | High |
| PreviewCard | Medium | 2 | Very High |
| WorkflowCard | Medium | 2 | High |
| TableCard | Medium | 3 | Medium |
| TimelineCard | Medium | 2 | High |
| ComparisonCard | High | 3 | Very High |
| LiveComparisonCard | High | 4 | Very High |
| DosDontsCard | High | 3 | High |

## Visual Design Patterns

### Color Coding

**Component Backgrounds**:
- Standard cards: `bg-slate-800`
- Code blocks: `bg-[#0a0f1e]`
- Preview areas: `bg-slate-50` (light for contrast)

**Accent Colors**:
- Primary: `blue-600` (CTAs, active states)
- Success: `green-600` (do's, checkmarks)
- Warning: `yellow-600` (cautions)
- Danger: `red-600` (don'ts, errors)
- Info: `blue-600` (informational)

**Text Colors**:
- Headings: `text-slate-50`
- Body: `text-slate-300`
- Muted: `text-slate-400`
- Code: `text-slate-200`

### Spacing Patterns

**Card Padding**: `p-6` (24px)
**Nested Padding**: `p-4` or `p-5` (16px or 20px)
**Gaps**: `gap-3` (12px) or `gap-4` (16px)
**Section Gaps**: `gap-6` (24px)

### Border Patterns

**Rounded Corners**: `rounded-xl` (12px)
**Dividers**: `border-slate-700`
**Accent Borders**: `border-l-4` with color variants

## Component Extensibility

### When to Create New Components

Create a new component when:
1. Existing components don't fit your visualization needs
2. You need interactive elements (charts, diagrams)
3. You need media embeds (video, audio)
4. You need specialized layouts (grids, masonry)
5. You need domain-specific visualizations

### When to Use Existing Components

Use existing components when:
1. Presenting text-based information
2. Showing code examples
3. Comparing approaches
4. Listing items or features
5. Displaying structured data
6. Highlighting important notes

## Component Composition Examples

### Example 1: Complete CSS Trick

```typescript
sections: [
  // 1. Hook the reader
  { type: "quote", data: { 
    quote: "Flexbox is designed for one-dimensional layouts",
    author: "CSS Working Group"
  }},
  
  // 2. Explain the concept
  { type: "card", data: {
    title: "Understanding Flexbox Centering",
    content: "Flexbox provides the most reliable..."
  }},
  
  // 3. Show evolution
  { type: "timeline", data: {
    title: "Evolution of Centering",
    events: [...]
  }},
  
  // 4. Compare approaches
  { type: "comparison", data: {
    title: "Old vs New",
    left: { label: "Old Method", code: "..." },
    right: { label: "Flexbox", code: "..." }
  }},
  
  // 5. Guide implementation
  { type: "workflow", data: {
    title: "How to Implement",
    steps: [...]
  }},
  
  // 6. Show complete code
  { type: "code", data: {
    language: "css",
    code: ".container { display: flex; }"
  }},
  
  // 7. Visual proof
  { type: "preview", data: {
    html: "<div>Centered</div>",
    css: ".container { display: flex; }"
  }},
  
  // 8. Best practices
  { type: "dosdонts", data: {
    title: "Best Practices",
    dos: ["Use for 1D layouts"],
    donts: ["Don't use for 2D grids"]
  }},
  
  // 9. Important note
  { type: "tip", data: {
    variant: "info",
    title: "Browser Support",
    content: "Supported in all modern browsers"
  }}
]
```

### Example 2: Quick Reference

```typescript
sections: [
  // 1. Overview
  { type: "card", data: {
    title: "CSS Grid Properties",
    content: "A comprehensive reference..."
  }},
  
  // 2. Property list
  { type: "list", data: {
    title: "Key Properties",
    ordered: false,
    items: [
      { text: "display: grid", subtext: "Enables grid layout" },
      { text: "grid-template-columns", subtext: "Defines columns" }
    ]
  }},
  
  // 3. Property table
  { type: "table", data: {
    title: "Property Reference",
    headers: ["Property", "Values", "Support"],
    rows: [
      ["display", "grid | inline-grid", "✓"],
      ["gap", "<length>", "✓"]
    ]
  }},
  
  // 4. Usage example
  { type: "code", data: {
    language: "css",
    code: ".grid { display: grid; }"
  }}
]
```

## Summary

- **12 components** covering all common visualization needs
- **4 categories**: Informational, Instructional, Code, Data
- **Flexible composition** for any content type
- **Consistent design** across all components
- **Type-safe** with full TypeScript support
- **Extensible** for future needs

---

**See Also**:
- `PROJECT_CONFIG.md` - Detailed usage guidelines
- `src/components/content/README.md` - Developer reference
- `MASTER_PROMPT.md` - Extensibility guidelines
