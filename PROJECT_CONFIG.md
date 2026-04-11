# CSS Tricks Platform - Project Configuration

This file contains project-specific configuration that extends the `PLATFORM_TEMPLATE.md`.

## Project Identity

**Platform Name**: CSS Tricks Platform

**What We Do**: Curate and present CSS tricks that developers commonly miss in an organized, searchable, visually appealing platform with live code previews.

**Target Audience**: Developers looking to discover CSS techniques they might have missed.

**Key Differentiator**: Side-by-side code and preview visualization with keyboard-first navigation and intelligent search.

**Domain**: CSS techniques, tricks, and best practices

## Design System

### Colors (Dark Theme)

```css
/* Background Colors */
--bg-primary: #0f172a      /* slate-900 - Main background */
--bg-secondary: #1e293b    /* slate-800 - Cards, sidebar */
--bg-tertiary: #334155     /* slate-700 - Inputs, buttons */

/* Text Colors */
--text-primary: #f8fafc    /* slate-50 - Headings */
--text-secondary: #cbd5e1  /* slate-300 - Body text */
--text-muted: #94a3b8      /* slate-400 - Muted text */

/* Accent Colors */
--accent-primary: #2563eb  /* blue-600 - CTA, active states */
--accent-secondary: #475569 /* slate-600 - Badges, borders */

/* Code Colors */
--code-bg: #0a0f1e         /* Darker than bg-primary */
--code-text: #e2e8f0       /* slate-200 */
```

### Typography

- **Headings**: JetBrains Mono (700, 600, 500)
- **Body**: IBM Plex Sans (400, 500, 600)
- **Code**: JetBrains Mono (400)

**Google Fonts Import**:
```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
```

### Spacing Scale

Use Tailwind's default spacing scale:
- `gap-2` (8px) - Tight spacing
- `gap-4` (16px) - Standard spacing
- `gap-6` (24px) - Section spacing
- `p-6` (24px) - Card padding
- `p-8` (32px) - Page padding

## Content Structure

### Available Content Components

This platform provides 12 content visualization components. Each serves a specific purpose for presenting information effectively.

#### 1. ContentCard
**Purpose**: General explanations, concepts, or contextual information

**When to use**:
- Explaining why a technique works
- Providing background context
- Describing use cases
- General informational content

**Example**:
```typescript
{
  type: "card",
  data: {
    title: "Why This Works",
    content: "Flexbox's justify-content and align-items properties provide a powerful way to center elements..."
  }
}
```

#### 2. WorkflowCard
**Purpose**: Step-by-step instructions or sequential processes

**When to use**:
- Implementation guides
- Multi-step tutorials
- Sequential processes
- How-to instructions

**Example**:
```typescript
{
  type: "workflow",
  data: {
    title: "Implementation Steps",
    steps: [
      { number: 1, title: "Set display: flex", description: "Apply flexbox to the container" },
      { number: 2, title: "Center horizontally", description: "Use justify-content: center" }
    ]
  }
}
```

#### 3. CodeSnippet
**Purpose**: Display code examples with syntax highlighting

**When to use**:
- Showing CSS, HTML, or JavaScript code
- Providing copy-paste ready examples
- Demonstrating syntax

**Example**:
```typescript
{
  type: "code",
  data: {
    language: "css",
    code: ".container {\n  display: flex;\n  justify-content: center;\n}",
    title: "CSS"
  }
}
```

#### 4. PreviewCard
**Purpose**: Live visual demonstration of code output

**When to use**:
- Showing visual results of CSS
- Demonstrating layout techniques
- Interactive examples
- Visual proof of concept

**Example**:
```typescript
{
  type: "preview",
  data: {
    html: "<div class='container'>Centered!</div>",
    css: ".container { display: flex; justify-content: center; }"
  }
}
```

#### 5. ComparisonCard
**Purpose**: Side-by-side comparison of two approaches

**When to use**:
- Comparing old vs new methods
- Showing wrong vs right approaches
- Before/after examples
- Alternative solutions

**Example**:
```typescript
{
  type: "comparison",
  data: {
    title: "Old vs New Approach",
    left: {
      label: "Old Method",
      code: "position: absolute;\ntop: 50%;\nleft: 50%;",
      description: "Requires transform hack"
    },
    right: {
      label: "Modern Method",
      code: "display: flex;\njustify-content: center;\nalign-items: center;",
      description: "Clean and intuitive"
    }
  }
}
```

#### 6. TimelineCard
**Purpose**: Chronological progression or evolution of techniques

**When to use**:
- Showing CSS evolution over time
- Progressive enhancement steps
- Historical context
- Sequential development stages

**Example**:
```typescript
{
  type: "timeline",
  data: {
    title: "Evolution of Centering",
    events: [
      {
        title: "CSS 1 (1996)",
        description: "Limited centering options",
        code: "text-align: center;"
      },
      {
        title: "CSS 2 (1998)",
        description: "Absolute positioning introduced"
      }
    ]
  }
}
```

#### 7. TipCard
**Purpose**: Highlight important notes, warnings, or tips

**When to use**:
- Important warnings
- Pro tips
- Success indicators
- Critical information

**Variants**: info (blue), warning (yellow), success (green), danger (red)

**Example**:
```typescript
{
  type: "tip",
  data: {
    variant: "warning",
    title: "Browser Support",
    content: "Flexbox is supported in all modern browsers, but IE11 has some quirks."
  }
}
```

#### 8. TableCard
**Purpose**: Structured data in rows and columns

**When to use**:
- Property comparisons
- Browser support tables
- Feature matrices
- Structured reference data

**Example**:
```typescript
{
  type: "table",
  data: {
    title: "Browser Support",
    headers: ["Property", "Chrome", "Firefox", "Safari"],
    rows: [
      ["display: flex", "✓", "✓", "✓"],
      ["gap", "✓", "✓", "✓"]
    ]
  }
}
```

#### 9. ListCard
**Purpose**: Bulleted or numbered lists

**When to use**:
- Feature lists
- Requirements
- Checklists
- Enumerated items

**Example**:
```typescript
{
  type: "list",
  data: {
    title: "Key Benefits",
    ordered: false,
    items: [
      { text: "Easy to understand", subtext: "Intuitive syntax" },
      { text: "Widely supported", subtext: "Works in all modern browsers" }
    ]
  }
}
```

#### 10. QuoteCard
**Purpose**: Highlight important quotes or principles

**When to use**:
- CSS specifications quotes
- Best practice principles
- Expert opinions
- Key takeaways

**Example**:
```typescript
{
  type: "quote",
  data: {
    quote: "Flexbox is designed for one-dimensional layouts, while Grid is designed for two-dimensional layouts.",
    author: "CSS Working Group"
  }
}
```

#### 11. DosDontsCard
**Purpose**: Clear do's and don'ts side by side

**When to use**:
- Best practices vs anti-patterns
- Common mistakes to avoid
- Recommended vs discouraged approaches
- Quick reference guides

**Example**:
```typescript
{
  type: "dosdонts",
  data: {
    title: "Flexbox Best Practices",
    dos: [
      "Use flexbox for one-dimensional layouts",
      "Combine with gap for spacing",
      "Use flex-wrap for responsive designs"
    ],
    donts: [
      "Don't use for complex 2D grids",
      "Avoid negative margins for spacing",
      "Don't rely on order property for accessibility"
    ]
  }
}
}
```

#### 12. LiveComparisonCard
**Purpose**: Side-by-side comparison with live iframed preview results
**When to use**:
- Showing code on both sides where seeing the immediate visual difference is important
- Comparing a bug with its fix

**Example**:
```typescript
{
  type: "livecomparison",
  data: {
    title: "Why z-index: 999 Still Loses",
    left: { label: "❌ Child trapped", code: "z-index: 1", html: "...", css: "..." },
    right: { label: "✓ Fixed", code: "position: relative", html: "...", css: "..." }
  }
}
```

| Result visual proof | Custom |

#### 13. FeatureComparisonCard
**Purpose**: Side-by-side list comparison of features, pros/cons, or use cases.

**When to use**:
- Comparing qualitative features (not code snippets)
- Best for vs. best for comparisons
- Detailed pros/cons side-by-side

**Example**:
```typescript
{
  type: "featurecomparison",
  data: {
    title: "Feature Comparison",
    left: { label: "Standard", variant: "info", items: ["Fast", "Simple"] },
    right: { label: "Premium", variant: "success", items: ["Advanced", "Scale"] }
  }
}
```

### Component Selection Guidelines

**For explaining concepts**: Use ContentCard
**For step-by-step guides**: Use WorkflowCard
**For code examples**: Use CodeSnippet + PreviewCard (side by side)
**For comparing approaches**: Use ComparisonCard
**For historical context**: Use TimelineCard
**For important notes**: Use TipCard
**For structured data**: Use TableCard
**For simple lists**: Use ListCard
**For highlighting principles**: Use QuoteCard
**For best practices**: Use DosDontsCard
**For qualitative comparison**: Use FeatureComparisonCard
**For bug/fix visual comparison**: Use LiveComparisonCard

### Topic Content Sections

This platform uses flexible content sections. Mix and match components based on what you're explaining:

**Typical CSS Trick Structure**:
1. ContentCard - Explain the concept
2. TipCard - Important browser support note
3. WorkflowCard - Implementation steps
4. ComparisonCard - Old vs new approach
5. CodeSnippet - Full code example
6. PreviewCard - Live demonstration
7. DosDontsCard - Best practices
8. LiveComparisonCard - Advanced interactive comparison

**Alternative Structure for Historical Content**:
1. ContentCard - Introduction
2. TimelineCard - Evolution of the technique
3. CodeSnippet - Modern implementation
4. PreviewCard - Visual result

### Example Topic

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
        type: "tip",
        data: {
          variant: "info",
          title: "Browser Support",
          content: "Flexbox is supported in all modern browsers since 2015."
        }
      },
      {
        type: "workflow",
        data: {
          title: "Implementation Steps",
          steps: [
            { number: 1, title: "Set display: flex", description: "..." },
            { number: 2, title: "Center horizontally", description: "..." }
          ]
        }
      },
      {
        type: "comparison",
        data: {
          title: "Old vs New",
          left: {
            label: "Old Method",
            code: "position: absolute;\ntop: 50%;\nleft: 50%;",
            description: "Requires transform hack"
          },
          right: {
            label: "Flexbox Method",
            code: "display: flex;\njustify-content: center;",
            description: "Clean and simple"
          }
        }
      },
      {
        type: "code",
        data: {
          code: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
          language: "css",
          title: "CSS"
        }
      },
      {
        type: "preview",
        data: {
          html: "<div class='container'>Centered!</div>",
          css: ".container { display: flex; justify-content: center; align-items: center; height: 200px; }"
        }
      },
      {
        type: "dosdонts",
        data: {
          title: "Best Practices",
          dos: [
            "Use for simple centering needs",
            "Combine with gap for spacing"
          ],
          donts: [
            "Don't use for complex 2D layouts",
            "Avoid when Grid is more appropriate"
          ]
        }
      }
    ]
  }
}
```

## Categories & Icons

**Category Icons** (using CategoryIcon component):
- Layout: Grid/layout icon
- Typography: Text/type icon
- Colors & Effects: Palette icon
- Animations: Lightning/zap icon
- Responsive: Smartphone icon

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

## Platform-Specific Features

### Side-by-Side Code & Preview

Unique to this platform:
- Left: Code snippet with syntax highlighting
- Right: Live preview showing visual output
- Equal width split
- Dark code background, light preview background

### Home Content Sections

**Hero Section**:
- Title: "CSS Tricks Platform"
- Subtitle: "Discover CSS techniques you might have missed"

**Quick Stats** (3 columns):
- Total CSS tricks count
- Number of categories
- "100% Dark Mode" indicator

**Features Grid** (2x2):
- Fuzzy Search with ⌘K hint
- Live Code Preview
- Organized by Category
- Keyboard Navigation

**Browse by Category**:
- Shows first 6 topics per category
- "+X more" indicator for additional topics

**Getting Started**:
1. Browse categories or use search (⌘K)
2. Click any trick to see code and preview
3. Copy code and use in your projects

## Branding

### Logo
- Collapsed sidebar: CSS shield icon (w-12 h-12, 48px)
- Expanded sidebar: "CSS Tricks" text (text-2xl)
- Colors: #2563eb (blue) and #0f172a (dark)

### Favicon
- CSS shield with "CSS" text
- Minimal padding, full canvas usage
- Brand colors: #2563eb blue, #0f172a dark

### Meta Tags
```html
<title>CSS Tricks Platform - Discover CSS Techniques</title>
<meta name="description" content="A curated collection of CSS tricks and techniques that developers commonly miss. Features live code previews and organized categories." />
```

## File References

- **Component Ecosystem**: `COMPONENT_ECOSYSTEM.md` - Visual guide to all components
- **Component README**: `src/components/content/README.md` - Developer quick reference
- **Spec Files**: `.kiro/specs/css-tricks-platform/`
  - `requirements.md` - All requirements with acceptance criteria
  - `design.md` - Technical design and architecture
  - `tasks.md` - Implementation task list
- **Design System**: `design-system/css-tricks-platform/MASTER.md`
- **Pencil Designs**: `./pencil-new.pen`

## Version & Status

**Version**: 1.1
**Status**: Production Ready
**Last Updated**: 2026-04-08

**Recent Enhancements**:
- Added collapsible sidebar with icon-only mode
- Implemented debounced search (300ms)
- Redesigned search results (table-like)
- Added meaningful home content with quick links
- Auto-expand category on topic selection
- Improved favicon design
- Enhanced collapsed state visibility
