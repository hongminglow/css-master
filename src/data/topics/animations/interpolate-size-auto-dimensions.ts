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
        type: "tip",
        data: {
          variant: "info",
          title: "Still an emerging feature area",
          content:
            "This is worth teaching now because developers constantly fight auto-dimension animation bugs. Even when support is still evolving, the concept is widely discussed and very relevant.",
        },
      },
    ],
  },
};
