# Tailwind 4 Dark Theme Configuration

This directory contains the Tailwind 4 CSS-based configuration for the CSS Tricks Platform.

## Overview

Tailwind 4 uses CSS-based configuration instead of a JavaScript config file. All configuration is done through CSS custom properties in the `@theme` directive.

## Files

- `index.css` - Main stylesheet with Tailwind imports, theme configuration, and global styles
- `index.test.ts` - Tests to verify the theme configuration

## Dark Theme Color Palette

The platform uses a slate-based dark theme:

| Color     | Hex     | Usage            |
| --------- | ------- | ---------------- |
| slate-900 | #0f172a | Background       |
| slate-800 | #1e293b | Card backgrounds |
| slate-700 | #334155 | Borders          |
| slate-600 | #475569 | Muted elements   |
| slate-500 | #64748b | Secondary text   |
| slate-400 | #94a3b8 | Muted text       |
| slate-50  | #f8fafc | Primary text     |

### Accent Colors

| Color    | Hex     | Usage                           |
| -------- | ------- | ------------------------------- |
| blue-600 | #2563eb | Primary accent (links, buttons) |
| blue-700 | #1d4ed8 | Hover states                    |
| blue-500 | #3b82f6 | Active states                   |

## Typography

### Font Families

- **Sans-serif (Body)**: IBM Plex Sans
- **Monospace (Code & Headings)**: JetBrains Mono

Both fonts are loaded from Google Fonts.

### Font Sizes

| Size | Value           | Usage           |
| ---- | --------------- | --------------- |
| xs   | 0.75rem (12px)  | Small labels    |
| sm   | 0.875rem (14px) | Code, captions  |
| base | 1rem (16px)     | Body text       |
| lg   | 1.125rem (18px) | Large body text |
| xl   | 1.25rem (20px)  | H4              |
| 2xl  | 1.5rem (24px)   | H3              |
| 3xl  | 2rem (32px)     | H2              |
| 4xl  | 2.5rem (40px)   | H1              |

## Spacing Scale

| Size | Value         | Usage                |
| ---- | ------------- | -------------------- |
| xs   | 0.25rem (4px) | Tight spacing        |
| sm   | 0.5rem (8px)  | Element gaps         |
| md   | 1rem (16px)   | Sidebar padding      |
| lg   | 1.5rem (24px) | Card padding         |
| xl   | 2rem (32px)   | Section margins      |
| 2xl  | 3rem (48px)   | Large sections       |
| 3xl  | 4rem (64px)   | Extra large sections |

## Shadows

| Depth | Value                        | Usage               |
| ----- | ---------------------------- | ------------------- |
| sm    | 0 1px 2px rgba(0,0,0,0.05)   | Subtle lift         |
| md    | 0 4px 6px rgba(0,0,0,0.1)    | Cards               |
| lg    | 0 10px 15px rgba(0,0,0,0.1)  | Modal               |
| xl    | 0 20px 25px rgba(0,0,0,0.15) | Emphasized elements |

## Animation Timing

| Duration | Value | Usage                |
| -------- | ----- | -------------------- |
| fast     | 150ms | Hover states         |
| base     | 200ms | Standard transitions |
| slow     | 300ms | Modal open/close     |

## Semantic Colors

Semantic color variables for easier theming:

- `--color-background`: Main background color
- `--color-card`: Card background color
- `--color-text`: Primary text color
- `--color-text-muted`: Muted text color
- `--color-border`: Border color
- `--color-accent`: Accent color for interactive elements

## Usage in Components

Use Tailwind utility classes with the configured theme:

```tsx
// Background colors
<div className="bg-slate-900">...</div>
<div className="bg-slate-800">...</div>

// Text colors
<p className="text-slate-50">Primary text</p>
<p className="text-slate-400">Muted text</p>

// Accent colors
<button className="bg-blue-600 hover:bg-blue-700">Click me</button>

// Typography
<h1 className="font-heading text-4xl">Heading</h1>
<p className="font-sans text-base">Body text</p>
<code className="font-mono text-sm">Code</code>

// Spacing
<div className="p-lg">Card with large padding</div>
<div className="space-y-md">Elements with medium gap</div>

// Shadows
<div className="shadow-md">Card with shadow</div>
```

## Accessibility Features

The configuration includes:

- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Focus Visible**: Clear focus indicators for keyboard navigation
- **Color Contrast**: All colors meet WCAG AA standards (4.5:1 for text)
- **Smooth Scrolling**: Enabled by default, disabled for reduced motion preference

## Testing

Run tests to verify the configuration:

```bash
pnpm test src/styles/index.test.ts
```

## Requirements Validated

This configuration satisfies the following requirements:

- **1.1**: Dark theme interface with consistent color scheme
- **1.2**: Sufficient contrast ratios for text readability
- **11.1**: Tailwind 4 for all styling
- **11.2**: CSS-based configuration (no tailwind.config.js file)
