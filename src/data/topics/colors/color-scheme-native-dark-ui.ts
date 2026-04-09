import type { Topic } from "@/types/topic";

export const colorSchemeNativeDarkUi: Topic = {
  id: "color-scheme-native-dark-ui",
  name: "Color Scheme Improves Native Dark UI",
  categoryId: "colors",
  description:
    "Tell the browser your surface supports dark mode so scrollbars, form controls, and built-in UI match the theme more naturally.",
  tags: ["colors", "color-scheme", "dark-mode", "native-ui", "theming"],
  route: "/topics/color-scheme-native-dark-ui",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Dark Theme CSS Is Not the Whole Story",
          content:
            "You can paint a page dark and still end up with light scrollbars, mismatched form controls, and awkward browser-managed UI. `color-scheme` lets you declare that the page or component supports light, dark, or both. That helps the browser choose more appropriate native rendering for built-in surfaces.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Painted Dark Theme vs Declared Dark Theme",
          left: {
            label: "Dark colors only",
            code: `body {
  background: #0f172a;
  color: #f8fafc;
}`,
            description:
              "The page looks dark, but browser-controlled UI may still render with light defaults.",
          },
          right: {
            label: "Dark colors plus color scheme",
            code: `:root {
  color-scheme: dark;
}

body {
  background: #0f172a;
  color: #f8fafc;
}`,
            description:
              "The browser now understands the intended theme better, which can improve native controls and surfaces automatically.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "A small rule with broad theme impact",
          content:
            "Whenever you ship a serious dark theme, `color-scheme` should be part of the conversation. It helps bridge the gap between your custom CSS and the browser's own UI rendering.",
        },
      },
    ],
  },
};
