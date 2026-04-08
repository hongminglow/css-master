/**
 * Topic data constants for CSS Tricks Platform
 * Validates: Requirements 8.1
 */

import { Topic } from "../types/topic";

export const topics: Topic[] = [
  {
    id: "flexbox-centering",
    name: "Perfect Centering with Flexbox",
    categoryId: "layout",
    description:
      "The simplest way to center elements both horizontally and vertically using Flexbox",
    tags: ["flexbox", "centering", "layout"],
    route: "/topics/flexbox-centering",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Why Flexbox?",
            content:
              "Flexbox provides the most straightforward solution for centering content. Unlike older methods that required negative margins or absolute positioning, Flexbox handles both axes with just two properties.",
            variant: "default",
          },
        },
        {
          type: "code",
          data: {
            title: "Basic Centering",
            code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
            language: "css",
          },
        },
        {
          type: "card",
          data: {
            title: "Pro Tip",
            content:
              "Use min-height instead of height to prevent content overflow on smaller screens.",
            variant: "highlight",
          },
        },
      ],
    },
  },
  {
    id: "grid-holy-grail",
    name: "Holy Grail Layout with CSS Grid",
    categoryId: "layout",
    description:
      "Create the classic Holy Grail layout pattern using modern CSS Grid",
    tags: ["grid", "layout", "responsive"],
    route: "/topics/grid-holy-grail",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "The Holy Grail Layout",
            content:
              "A classic web layout with header, footer, main content, and two sidebars. CSS Grid makes this trivial compared to the float-based hacks of the past.",
            variant: "default",
          },
        },
        {
          type: "workflow",
          data: {
            steps: [
              {
                number: 1,
                title: "Define the Grid",
                description:
                  "Create a grid with three columns and three rows using grid-template-areas",
              },
              {
                number: 2,
                title: "Assign Areas",
                description:
                  "Name each section (header, nav, main, aside, footer) and place them in the grid",
              },
              {
                number: 3,
                title: "Make it Responsive",
                description:
                  "Use media queries to stack sections vertically on mobile devices",
              },
            ],
          },
        },
        {
          type: "code",
          data: {
            title: "Grid Template",
            code: `.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }
aside { grid-area: aside; }
footer { grid-area: footer; }`,
            language: "css",
          },
        },
      ],
    },
  },
  {
    id: "glassmorphism-effect",
    name: "Glassmorphism Effect",
    categoryId: "visual-effects",
    description: "Create modern frosted glass UI elements with backdrop blur",
    tags: ["glassmorphism", "modern-css", "shadow"],
    route: "/topics/glassmorphism-effect",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "What is Glassmorphism?",
            content:
              "A design trend featuring translucent elements with blurred backgrounds, creating a frosted glass appearance. Popular in modern UI design for cards, modals, and navigation bars.",
            variant: "default",
          },
        },
        {
          type: "code",
          data: {
            title: "Glass Card",
            code: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,
            language: "css",
          },
        },
        {
          type: "card",
          data: {
            title: "Browser Support",
            content:
              "backdrop-filter is supported in all modern browsers. For older browsers, the element will simply appear with a solid background color.",
            variant: "warning",
          },
        },
      ],
    },
  },
  {
    id: "smooth-hover-transitions",
    name: "Smooth Hover Transitions",
    categoryId: "animations",
    description: "Add polished hover effects with CSS transitions",
    tags: ["hover", "transition", "animation"],
    route: "/topics/smooth-hover-transitions",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "The Power of Transitions",
            content:
              "Smooth transitions make interfaces feel responsive and polished. The key is choosing the right properties to animate and appropriate timing.",
            variant: "default",
          },
        },
        {
          type: "workflow",
          data: {
            steps: [
              {
                number: 1,
                title: "Choose Properties",
                description:
                  "Select which properties to animate (color, transform, opacity, etc.)",
              },
              {
                number: 2,
                title: "Set Duration",
                description:
                  "Use 150-300ms for most UI interactions. Faster feels snappy, slower feels sluggish.",
              },
              {
                number: 3,
                title: "Pick Easing",
                description:
                  "ease-in-out works for most cases. Use ease-out for entrances, ease-in for exits.",
              },
            ],
          },
        },
        {
          type: "code",
          data: {
            title: "Button Hover Effect",
            code: `.button {
  background: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 200ms ease-in-out;
}

.button:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}`,
            language: "css",
          },
        },
        {
          type: "card",
          data: {
            title: "Performance Tip",
            content:
              "Animate transform and opacity for best performance. These properties don't trigger layout recalculation.",
            variant: "highlight",
          },
        },
      ],
    },
  },
  {
    id: "container-queries",
    name: "Container Queries for Component Responsiveness",
    categoryId: "responsive",
    description:
      "Make components responsive to their container size, not just viewport",
    tags: ["container-query", "responsive", "modern-css"],
    route: "/topics/container-queries",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Beyond Media Queries",
            content:
              "Container queries allow components to adapt based on their parent container's size rather than the viewport. This enables truly reusable responsive components.",
            variant: "default",
          },
        },
        {
          type: "code",
          data: {
            title: "Basic Container Query",
            code: `.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: flex;
  flex-direction: column;
}

@container card (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}`,
            language: "css",
          },
        },
        {
          type: "workflow",
          data: {
            steps: [
              {
                number: 1,
                title: "Define Container",
                description:
                  "Set container-type on the parent element you want to query",
              },
              {
                number: 2,
                title: "Name It (Optional)",
                description:
                  "Use container-name to target specific containers in nested layouts",
              },
              {
                number: 3,
                title: "Write Queries",
                description: "Use @container rules just like @media queries",
              },
            ],
          },
        },
        {
          type: "card",
          data: {
            title: "Use Cases",
            content:
              "Perfect for card components, sidebars, modals, and any component that appears in different contexts with varying widths.",
            variant: "highlight",
          },
        },
      ],
    },
  },
  {
    id: "css-custom-properties",
    name: "CSS Custom Properties for Theming",
    categoryId: "visual-effects",
    description:
      "Use CSS variables to create flexible, maintainable design systems",
    tags: ["modern-css", "accessibility"],
    route: "/topics/css-custom-properties",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Dynamic Styling with Variables",
            content:
              "CSS Custom Properties (variables) enable dynamic theming, reduce repetition, and make your stylesheets more maintainable. Unlike preprocessor variables, they can be changed at runtime.",
            variant: "default",
          },
        },
        {
          type: "code",
          data: {
            title: "Theme Variables",
            code: `:root {
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-background: #ffffff;
  --color-text: #0f172a;
  --spacing-unit: 8px;
}

[data-theme="dark"] {
  --color-background: #0f172a;
  --color-text: #f8fafc;
}

.button {
  background: var(--color-primary);
  color: var(--color-background);
  padding: calc(var(--spacing-unit) * 2);
}`,
            language: "css",
          },
        },
        {
          type: "card",
          data: {
            title: "JavaScript Integration",
            content:
              "You can update CSS variables from JavaScript using element.style.setProperty('--variable-name', 'value'), enabling dynamic theming and user preferences.",
            variant: "highlight",
          },
        },
      ],
    },
  },
  {
    id: "aspect-ratio-property",
    name: "Aspect Ratio Property",
    categoryId: "layout",
    description: "Maintain consistent aspect ratios without padding hacks",
    tags: ["layout", "responsive", "modern-css"],
    route: "/topics/aspect-ratio-property",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "No More Padding Hacks",
            content:
              "The aspect-ratio property provides a clean way to maintain width-to-height ratios. No more padding-bottom percentage tricks!",
            variant: "default",
          },
        },
        {
          type: "code",
          data: {
            title: "Common Aspect Ratios",
            code: `.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.square-image {
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
}

.portrait-card {
  aspect-ratio: 3 / 4;
}`,
            language: "css",
          },
        },
        {
          type: "card",
          data: {
            title: "Perfect for Media",
            content:
              "Especially useful for video embeds, image galleries, and card layouts where you need consistent proportions across different screen sizes.",
            variant: "highlight",
          },
        },
      ],
    },
  },
  {
    id: "scroll-snap",
    name: "Scroll Snap for Carousels",
    categoryId: "animations",
    description:
      "Create smooth scrolling carousels with native CSS scroll snap",
    tags: ["animation", "modern-css", "accessibility"],
    route: "/topics/scroll-snap",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Native Scroll Snapping",
            content:
              "CSS Scroll Snap provides smooth, accessible carousels without JavaScript. The browser handles the physics and accessibility automatically.",
            variant: "default",
          },
        },
        {
          type: "workflow",
          data: {
            steps: [
              {
                number: 1,
                title: "Set Scroll Container",
                description: "Add scroll-snap-type to the scrolling container",
              },
              {
                number: 2,
                title: "Define Snap Points",
                description: "Add scroll-snap-align to child elements",
              },
              {
                number: 3,
                title: "Fine-tune Behavior",
                description:
                  "Use scroll-snap-stop and scroll-padding for precise control",
              },
            ],
          },
        },
        {
          type: "code",
          data: {
            title: "Horizontal Carousel",
            code: `.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 1rem;
  gap: 1rem;
}

.carousel-item {
  scroll-snap-align: start;
  flex: 0 0 300px;
}`,
            language: "css",
          },
        },
        {
          type: "card",
          data: {
            title: "Accessibility Win",
            content:
              "Keyboard users can navigate with arrow keys, and screen readers announce the scrollable region. Much better than JavaScript carousels!",
            variant: "highlight",
          },
        },
      ],
    },
  },
  {
    id: "clamp-fluid-typography",
    name: "Fluid Typography with clamp()",
    categoryId: "responsive",
    description:
      "Create responsive typography that scales smoothly between breakpoints",
    tags: ["responsive", "modern-css"],
    route: "/topics/clamp-fluid-typography",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Smooth Scaling Typography",
            content:
              "The clamp() function enables fluid typography that scales smoothly between a minimum and maximum size based on viewport width. No more media query breakpoints for font sizes!",
            variant: "default",
          },
        },
        {
          type: "code",
          data: {
            title: "Fluid Font Sizes",
            code: `h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  /* Min: 32px, Preferred: 5% of viewport, Max: 64px */
}

p {
  font-size: clamp(1rem, 0.5rem + 1vw, 1.25rem);
  /* Scales from 16px to 20px */
}

.container {
  padding: clamp(1rem, 5%, 3rem);
  /* Responsive padding too! */
}`,
            language: "css",
          },
        },
        {
          type: "card",
          data: {
            title: "The Formula",
            content:
              "clamp(MIN, PREFERRED, MAX) - The preferred value is usually a combination of a base size plus viewport units (vw) for smooth scaling.",
            variant: "highlight",
          },
        },
      ],
    },
  },
  {
    id: "focus-visible-accessibility",
    name: "Better Focus Indicators with :focus-visible",
    categoryId: "responsive",
    description: "Show focus indicators only for keyboard navigation",
    tags: ["accessibility", "modern-css"],
    route: "/topics/focus-visible-accessibility",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Smart Focus Indicators",
            content:
              "The :focus-visible pseudo-class shows focus indicators only when needed (keyboard navigation), not when clicking with a mouse. This improves both accessibility and aesthetics.",
            variant: "default",
          },
        },
        {
          type: "code",
          data: {
            title: "Focus Visible Pattern",
            code: `/* Remove default focus outline */
button:focus {
  outline: none;
}

/* Show custom outline only for keyboard focus */
button:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Ensure high contrast for accessibility */
@media (prefers-contrast: high) {
  button:focus-visible {
    outline-width: 3px;
  }
}`,
            language: "css",
          },
        },
        {
          type: "card",
          data: {
            title: "Accessibility Best Practice",
            content:
              "Never remove focus indicators entirely. Always provide a visible focus state for keyboard users. :focus-visible is the perfect balance.",
            variant: "warning",
          },
        },
      ],
    },
  },
];
