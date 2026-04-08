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

### Topic Content Sections

This platform uses 4 content section types:

1. **Card**: Explanation of why/when to use the technique
2. **Workflow**: Step-by-step implementation guide
3. **Code**: Actual CSS code with syntax highlighting
4. **Preview**: Live visual demonstration of the technique

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
      },
      {
        type: "preview",
        data: {
          html: "<div class='container'>Centered!</div>",
          css: ".container { display: flex; justify-content: center; align-items: center; }"
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
