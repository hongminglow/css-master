# Layout Components

This directory contains the layout components for the CSS Tricks Platform.

## AppLayout

The `AppLayout` component provides the base layout structure with a fixed sidebar and flexible main content area.

### Usage

```tsx
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  return (
    <AppLayout
      sidebar={<YourSidebarComponent />}
      mainContent={<YourMainContentComponent />}
    />
  );
}
```

### Props

- `sidebar` (React.ReactNode): Content to display in the fixed sidebar (navigation)
- `mainContent` (React.ReactNode): Content to display in the main content area

### Features

- Fixed sidebar with 256px width (w-64)
- Dark theme background (slate-900)
- Sidebar border (slate-700)
- Responsive main content area with proper offset
- Full height layout
- Scrollable sidebar for overflow content

### Design

The layout follows the dark theme design specified in Requirements 1.1 and 7.1:

- Background: `bg-slate-900`
- Border: `border-slate-700`
- Fixed positioning for sidebar
- Flexible main content area

### Testing

Run tests with:

```bash
npm test -- src/components/layout/AppLayout.test.tsx
```

All tests verify:

- Component rendering
- Dark theme application
- Fixed sidebar positioning
- Main content offset
- Border styling
