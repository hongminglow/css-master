import type {
  Topic,
  CardData,
  CodeData,
  TipData,
  ComparisonData,
  DosDontsData,
} from "@/types/topic";

export const forcedColorsHighContrast: Topic = {
  id: "forced-colors-high-contrast",
  name: "Forced Colors & High Contrast",
  categoryId: "colors",
  description:
    "Support Windows High Contrast Mode and accessibility color overrides using the forced-colors media query.",
  tags: ["forced-colors", "high contrast", "accessibility", "media query", "windows"],
  route: "/topics/forced-colors-high-contrast",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Browsers Can Override Your Colors",
          content:
            "Windows High Contrast Mode (now called 'Contrast Themes') forces the OS to replace your carefully chosen colors with a high-contrast palette. Chrome and Edge expose this as @media (forced-colors: active). When active, the browser maps your colors to a limited system palette. CSS custom properties and background images can disappear entirely — borders, text, and outlines are the survivors.",
        } as CardData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "CSS — Handling Forced Colors",
          code: `/* Detect forced-colors mode */
@media (forced-colors: active) {
  /* Re-add a visible border where you relied on background color */
  .badge {
    border: 1px solid ButtonText;
  }

  /* SVG icon fills get stripped — use currentColor */
  .icon {
    fill: currentColor;
  }

  /* Custom focus ring may disappear — reinstate it */
  :focus-visible {
    outline: 3px solid Highlight;
  }

  /* Background images are hidden — add text alternative */
  .hero-with-bg-image::before {
    content: attr(data-label);
  }
}

/* System color keywords available in forced-colors */
/* ButtonFace, ButtonText, Canvas, CanvasText, Field,
   FieldText, Highlight, HighlightText, GrayText, LinkText */`,
        } as CodeData,
      },
      {
        type: "comparison",
        data: {
          title: "Custom Focus vs Forced-Colors Safe Focus",
          left: {
            label: "❌ Box-shadow focus ring",
            code: `/* box-shadow is stripped in forced-colors */
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px #2563eb;
}`,
            description: "box-shadow disappears in High Contrast",
          },
          right: {
            label: "✓ Outline-based focus ring",
            code: `/* outline survives forced-colors */
:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}

/* In forced-colors it maps to Highlight automatically */`,
            description: "outline is preserved and remapped correctly",
          },
        } as ComparisonData,
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Test in Windows or with DevTools",
          content:
            "To test without Windows: in Chrome DevTools, open Rendering → Emulate CSS media feature 'forced-colors' → set to 'active'. This lets you verify your UI is still readable in high contrast mode.",
        } as TipData,
      },
      {
        type: "dosdонts",
        data: {
          title: "Forced Colors Best Practices",
          dos: [
            "Use outline (not box-shadow) for focus rings",
            "Use currentColor for SVG icon fills/strokes",
            "Add borders to elements that rely on background color alone",
            "Test with DevTools Rendering panel forced-colors emulation",
            "Use system color keywords (ButtonText, CanvasText) inside the media query",
          ],
          donts: [
            "Don't rely on background-image or box-shadow to convey state",
            "Don't override forced-colors without a very good reason",
            "Don't assume your brand colors will survive — they won't",
            "Don't forget that ~1.3% of Windows users use High Contrast Mode",
          ],
        } as DosDontsData,
      },
    ],
  },
};
