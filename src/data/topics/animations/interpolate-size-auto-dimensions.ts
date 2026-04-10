import type { Topic } from "@/types/topic";

export const interpolateSizeAutoDimensions: Topic = {
  id: "interpolate-size-auto-dimensions",
  name: "Interpolate Size Helps Animate Auto Dimensions",
  categoryId: "animations",
  description:
    "Animating between fixed sizes and intrinsic sizes like auto has always been awkward. Interpolate size is part of the platform effort to improve that story.",
  tags: ["animations", "interpolate-size", "auto", "height", "accordion", "ui"],
  route: "/topics/interpolate-size-auto-dimensions",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Why Accordions and Expanding Panels Feel Hacky",
          content:
            "Developers have been stuck between two poor options for years: use a fake `max-height` trick that guesses a ceiling, or measure content with JavaScript and animate a pixel value manually. Newer platform work around intrinsic size interpolation points toward a cleaner future for these patterns, especially for accordions, disclosures, and expanding cards.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Old Max Height Trick vs Intrinsic Size Direction",
          left: {
            label: "Max height hack",
            code: `.panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 250ms ease;
}

.panel.is-open {
  max-height: 500px;
}`,
            description:
              "Common and workable, but still based on guessed ceilings and not on the content's true intrinsic size.",
          },
          right: {
            label: "Intrinsic size path",
            code: `:root {
  interpolate-size: allow-keywords;
}`,
            description:
              "This points toward a more native model where keyword sizes like `auto` participate more intelligently in transitions.",
          },
        },
      },
      {
        type: "workflow",
        data: {
          title: "How to Use It Without Breaking the Accordion",
          steps: [
            {
              number: 1,
              title: "Keep the established fallback first",
              description:
                "Start from the ordinary `max-height` or measured-height approach your component already uses reliably in production.",
            },
            {
              number: 2,
              title: "Gate intrinsic interpolation behind supports checks",
              description:
                "Use feature detection to opt into keyword-size interpolation only where it exists, instead of rewriting the whole component around a still-emerging behavior.",
            },
            {
              number: 3,
              title: "Test with real content lengths",
              description:
                "These patterns matter most when disclosures contain unpredictable copy or rich content, not just tiny demo strings.",
            },
          ],
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Practical Fallback Pattern",
          code: `.panel {
  overflow: clip;
}

/* Broad fallback */
.panel__content {
  max-height: 0;
  transition: max-height 250ms ease;
}

.panel[data-open="true"] .panel__content {
  max-height: 32rem;
}

/* Progressive enhancement path */
@supports (interpolate-size: allow-keywords) {
  :root {
    interpolate-size: allow-keywords;
  }
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Still an emerging feature area",
          content:
            "This is worth teaching now because developers constantly fight auto-dimension animation bugs. Even when support is still evolving, the concept is widely discussed and very relevant. Just make sure the component still has a stable fallback path.",
        },
      },
    ],
  },
};
