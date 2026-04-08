# CSS Tricks Platform

## 🎨 Modern CSS Learning & Development Platform

**CSS Tricks Platform** is a comprehensive, developer-focused platform for discovering, learning, and sharing CSS techniques, tricks, and best practices. Built with modern web technologies, this platform provides interactive examples, comprehensive tutorials, and a community-driven approach to mastering CSS.

## ✨ Features

### 🚀 Interactive Learning

- **Live Code Editor**: Edit CSS examples with instant visual feedback
- **Interactive Tutorials**: Step-by-step guides with hands-on exercises
- **Visual CSS Playground**: Experiment with CSS properties in real-time

### 📚 Comprehensive Resources

- **CSS Techniques Library**: Hundreds of categorized CSS tricks and solutions
- **Design System Showcase**: Real-world examples of component libraries
- **Performance Optimization**: CSS optimization tips and best practices
- **Accessibility Guides**: WCAG-compliant examples and accessibility-first approaches

### 👥 Community & Collaboration

- **User Contributions**: Submit and share your own CSS tricks
- **Code Reviews**: Community feedback on CSS implementations
- **Trending Techniques**: Discover popular and emerging CSS patterns

### 🎯 Target Audience

- Frontend developers improving CSS skills
- Design system engineers building component libraries
- UI/UX designers seeking CSS implementation guidance
- Technical teams establishing design system standards
- Students and educators learning modern CSS techniques

## 🛠️ Technology Stack

### Frontend

- **React 19** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS 4** with CSS-based configuration
- **React Compiler** for optimized performance
- **Vitest** for testing

### Design System

- **Dark Theme First**: Slate-based color palette with accessibility focus
- **Modern Typography**: IBM Plex Sans (body) + JetBrains Mono (code/headings)
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Component Library**: Reusable, accessible UI components

### Development Tools

- **ESLint** with TypeScript and React rules
- **Prettier** for code formatting
- **PNPM** for package management
- **Git** for version control

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- PNPM 9+ (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hongminglow/css-master.git
cd css-master

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Format code
pnpm format
```

## 📁 Project Structure

```
css-master/
├── src/
│   ├── components/     # React components
│   │   ├── common/     # Shared UI components
│   │   ├── layout/     # Layout components
│   │   ├── navigation/ # Navigation components
│   │   └── content/    # Content display components
│   ├── styles/         # Tailwind 4 configuration
│   │   ├── index.css   # Main stylesheet
│   │   └── README.md   # Design system documentation
│   ├── data/          # Static data and types
│   ├── services/      # API and data services
│   ├── hooks/         # Custom React hooks
│   └── utils/         # Utility functions
├── public/            # Static assets
├── design-system/     # Design system documentation
└── .kiro/specs/      # Project specifications and requirements
```

## 🎨 Design System

The platform uses a comprehensive dark theme design system built with Tailwind 4:

### Color Palette

- **Background**: `slate-900` (#0f172a)
- **Cards**: `slate-800` (#1e293b)
- **Borders**: `slate-700` (#334155)
- **Accent**: `blue-600` (#2563eb) for interactive elements

### Typography

- **Body**: IBM Plex Sans (sans-serif)
- **Code/Headings**: JetBrains Mono (monospace)
- **Responsive scaling**: Fluid typography system

### Accessibility

- WCAG AA compliance (4.5:1 contrast ratio)
- Reduced motion support
- Keyboard navigation focus indicators
- Semantic HTML structure

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details on:

- Submitting CSS tricks and techniques
- Reporting issues or bugs
- Suggesting new features
- Improving documentation

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- Inspired by the CSS Tricks community and resources
- Designed with accessibility and performance in mind

---

**Start exploring CSS like never before!** 🚀
