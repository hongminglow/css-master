import type { Topic } from "@/types/topic";

export const safeAreaInsetPadding: Topic = {
  id: "safe-area-inset-padding",
  name: "Safe Area Insets Protect Edge to Edge Layouts",
  categoryId: "responsive",
  description:
    "Use the device safe-area environment variables when sticky bars or full-bleed layouts need to respect notches and rounded corners.",
  tags: ["responsive", "safe-area", "mobile", "notch", "env", "ios"],
  route: "/topics/safe-area-inset-padding",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Modern Phones Have Physical Constraints",
          content:
            "When you build edge-to-edge experiences, the screen is no longer a perfect rectangle from the user's perspective. Notches, home indicators, and rounded corners can overlap sticky headers or bottom navigation. CSS environment variables like `env(safe-area-inset-bottom)` let you pad these surfaces appropriately without hard-coding device-specific values.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "A Common Mobile App Pattern",
          code: `.bottom-nav {
  position: sticky;
  bottom: 0;
  padding:
    0.75rem
    1rem
    calc(0.75rem + env(safe-area-inset-bottom));
  background: rgba(15, 23, 42, 0.92);
}

.page-shell {
  padding-inline:
    max(1rem, env(safe-area-inset-left))
    max(1rem, env(safe-area-inset-right));
}`,
        },
      },
      {
        type: "comparison",
        data: {
          title: "Hard-Coded Padding vs Safe Area Aware Padding",
          left: {
            label: "Fixed bottom spacing",
            code: `.bottom-nav {
  padding: 0.75rem 1rem 0.75rem;
}`,
            description:
              "Looks acceptable on rectangular screens, but can sit too close to hardware gestures or cutouts on edge-to-edge devices.",
          },
          right: {
            label: "Safe area aware spacing",
            code: `.bottom-nav {
  padding:
    0.75rem
    1rem
    max(0.75rem, env(safe-area-inset-bottom));
}`,
            description:
              "The UI keeps a usable minimum padding while also respecting devices that report additional safe-area space.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Use it where hardware meets UI",
          content:
            "Safe-area variables are especially valuable for sticky toolbars, tab bars, immersive hero sections, and installable web apps that feel closer to native shells.",
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Prefer max with a normal baseline",
          content:
            "A good pattern is `max(regular-padding, env(...))` so the layout still has sensible spacing on devices that report zero safe-area insets.",
        },
      },
    ],
  },
};
