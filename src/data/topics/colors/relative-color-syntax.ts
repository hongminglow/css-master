import type { Topic } from "@/types/topic";

export const relativeColorSyntax: Topic = {
  id: "relative-color-syntax",
  name: "Relative Color Syntax Builds Smarter Variants",
  categoryId: "colors",
  description:
    "Derive tints and shades from an existing color directly in CSS instead of duplicating large token sets by hand.",
  tags: ["colors", "relative-color", "tokens", "theme", "modern-css"],
  route: "/topics/relative-color-syntax",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Stop Hard-Coding Every Single Variant",
          content:
            "Design systems often start with one or two brand colors and then slowly accumulate dozens of near-duplicate token variants for hover, border, muted surfaces, and accents. Relative color syntax offers a more expressive way to derive new colors from a base color directly in CSS. It is a promising companion to custom properties and modern theming strategies.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Manual Variant Explosion vs Derived Variants",
          left: {
            label: "Manual tokens",
            code: `:root {
  --brand: #2563eb;
  --brand-strong: #1d4ed8;
  --brand-soft: #dbeafe;
  --brand-border: #93c5fd;
}`,
            description:
              "Every new usage often becomes another hand-maintained token, which can scale poorly across themes.",
          },
          right: {
            label: "Derived from a source color",
            code: `.button {
  --brand: oklch(0.62 0.21 259);
  border-color: oklch(from var(--brand) calc(l + 0.12) c h);
}`,
            description:
              "The theme can derive related colors from a source value instead of storing every single step explicitly.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Use with care and fallbacks",
          content:
            "Relative color syntax is modern and powerful, but not as established as basic hex and RGB values. It is great for forward-looking systems, especially when paired with graceful fallbacks.",
        },
      },
    ],
  },
};
