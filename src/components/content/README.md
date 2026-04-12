# Content Visualization Components

This folder contains 11 reusable content visualization components for presenting information in various formats.

## Available Components

### 1. ContentCard

General explanations and contextual information.

- **File**: `ContentCard.tsx`
- **Use for**: Concepts, background, use cases
- **Props**: `{ title: string, content: string }`

### 2. WorkflowCard

Step-by-step instructions with numbered steps.

- **File**: `WorkflowCard.tsx`
- **Use for**: Tutorials, implementation guides, processes
- **Props**: `{ title: string, steps: Array<{ number, title, description }> }`

### 3. CodeSnippet

Code examples with syntax highlighting.

- **File**: `CodeSnippet.tsx`
- **Use for**: CSS, HTML, JavaScript examples
- **Props**: `{ language: string, code: string, title?: string }`

### 4. PreviewCard

Live visual demonstration using iframe.

- **File**: `PreviewCard.tsx`
- **Use for**: Visual results, layout demos
- **Props**: `{ html: string, css: string }`

### 5. ComparisonCard

Side-by-side comparison of two approaches.

- **File**: `ComparisonCard.tsx`
- **Use for**: Old vs new, wrong vs right, alternatives
- **Props**: `{ title, left: { label, code, description? }, right: { label, code, description? } }`

### 6. TimelineCard

Chronological progression with vertical timeline.

- **File**: `TimelineCard.tsx`
- **Use for**: Evolution, history, sequential stages
- **Props**: `{ title: string, events: Array<{ title, description, code? }> }`

### 7. TipCard

Highlighted notes with color-coded variants.

- **File**: `TipCard.tsx`
- **Use for**: Warnings, tips, important notes
- **Props**: `{ variant: "info"|"warning"|"success"|"danger", title: string, content: string }`
- **Variants**:
  - `info` - Blue, informational
  - `warning` - Yellow, caution
  - `success` - Green, positive
  - `danger` - Red, critical

### 8. TableCard

Structured data in rows and columns.

- **File**: `TableCard.tsx`
- **Use for**: Comparisons, browser support, feature matrices
- **Props**: `{ title: string, headers: string[], rows: string[][] }`

### 9. ListCard

Bulleted or numbered lists.

- **File**: `ListCard.tsx`
- **Use for**: Feature lists, requirements, checklists
- **Props**: `{ title: string, ordered: boolean, items: Array<{ text, subtext? }> }`

### 10. QuoteCard

Highlighted quotes with attribution.

- **File**: `QuoteCard.tsx`
- **Use for**: Specifications, principles, expert opinions
- **Props**: `{ quote: string, author?: string }`

### 11. DosDontsCard

Side-by-side do's and don'ts.

- **File**: `DosDontsCard.tsx`
- **Use for**: Best practices, anti-patterns, guidelines
- **Props**: `{ title: string, dos: string[], donts: string[] }`

## Usage Example

```typescript
import { ContentCard, CodeSnippet, PreviewCard } from "@/components/content";

// In your topic data
const topic = {
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Introduction",
          content: "This technique allows...",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: ".container { display: flex; }",
          title: "CSS",
        },
      },
      {
        type: "preview",
        data: {
          html: "<div class='container'>Content</div>",
          css: ".container { display: flex; }",
          replayable: true,
          replayLabel: "Replay Demo",
        },
      },
    ],
  },
};
```

## Design Principles

All components follow these principles:

1. **Consistent Styling**: Dark theme with bg-slate-800, text-slate-300
2. **Tailwind First**: Use utility classes, no custom CSS
3. **Type Safe**: TypeScript interfaces for all props
4. **Data Driven**: Accept data via props, no hardcoded content
5. **Visual Consistency**: rounded-xl, p-6 padding, consistent spacing
6. **Accessibility**: Semantic HTML, proper contrast ratios

## Adding New Components

When creating a new component:

1. **Define Interface**: Add to `src/types/topic.ts`
2. **Create Component**: Follow existing patterns
3. **Export**: Add to `index.ts`
4. **Document**: Update this README and PROJECT_CONFIG.md
5. **Update Types**: Add to ContentSection union type

## Component Selection Guide

| Need                | Component      |
| ------------------- | -------------- |
| Explain concept     | ContentCard    |
| Step-by-step guide  | WorkflowCard   |
| Show code           | CodeSnippet    |
| Visual demo         | PreviewCard    |
| Compare approaches  | ComparisonCard |
| Show evolution      | TimelineCard   |
| Important note      | TipCard        |
| Structured data     | TableCard      |
| Simple list         | ListCard       |
| Highlight principle | QuoteCard      |
| Best practices      | DosDontsCard   |

## File Structure

```
content/
├── ContentCard.tsx
├── WorkflowCard.tsx
├── CodeSnippet.tsx
├── PreviewCard.tsx
├── ComparisonCard.tsx
├── TimelineCard.tsx
├── TipCard.tsx
├── TableCard.tsx
├── ListCard.tsx
├── QuoteCard.tsx
├── DosDontsCard.tsx
├── index.ts              # Exports all components
└── README.md             # This file
```

## See Also

- **PROJECT_CONFIG.md**: Detailed usage guidelines and examples
- **src/types/topic.ts**: TypeScript interfaces
- **MASTER_PROMPT.md**: Component extensibility guidelines
