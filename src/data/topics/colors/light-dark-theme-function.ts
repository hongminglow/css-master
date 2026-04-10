import type { Topic } from "@/types/topic";

export const lightDarkThemeFunction: Topic = {
  id: "light-dark-theme-function",
  name: "Light Dark Simplifies Theme Tokens",
  categoryId: "colors",
  description:
    "The `light-dark()` function can express paired theme values more directly when a surface supports multiple color schemes.",
  tags: ["colors", "theme", "light-dark", "dark-mode", "tokens", "modern-css"],
  route: "/topics/light-dark-theme-function",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Some Theme Pairs Belong Together",
          content:
            "A lot of dark mode setups duplicate entire blocks of custom properties or switch classes just to map one light value to one dark value. The `light-dark()` function offers a more direct expression for paired choices when the browser already knows the active color scheme. It is not a total replacement for a design token system, but it is a useful modern primitive.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Separate Theme Overrides vs Paired Theme Values",
          left: {
            label: "Separate overrides",
            code: `:root {
  --card-bg: white;
}

[data-theme="dark"] {
  --card-bg: #0f172a;
}`,
            description:
              "Still valid, but can get verbose when many values exist only as simple light and dark pairs.",
          },
          right: {
            label: "light-dark function",
            code: `.card {
  background: light-dark(white, #0f172a);
  color: light-dark(#0f172a, #f8fafc);
}`,
            description:
              "Simple paired theme values can live inline with the property that uses them, which is often easier to scan.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Best Paired with Color Scheme",
          code: `:root {
  color-scheme: light dark;
}

.card {
  background: light-dark(white, #0f172a);
  color: light-dark(#0f172a, #f8fafc);
  border-color: light-dark(#cbd5e1, #334155);
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Best used alongside a broader theme system",
          content:
            "This is most helpful for straightforward value pairs, especially when `color-scheme` is already part of the design. For larger systems, it complements tokens rather than replacing them.",
        },
      },
    ],
  },
};
