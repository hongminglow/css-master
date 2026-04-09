import type { Topic } from "@/types/topic";

export const fontSizeAdjustFallbacks: Topic = {
  id: "font-size-adjust-fallbacks",
  name: "Font Size Adjust Reduces Fallback Layout Shift",
  categoryId: "typography",
  description:
    "When web fonts swap in late, fallback fonts can distort hierarchy and spacing. Font size adjust helps keep the perceived text size more consistent.",
  tags: ["typography", "fonts", "fallbacks", "font-size-adjust", "performance", "cls"],
  route: "/topics/font-size-adjust-fallbacks",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Fallback Fonts Rarely Match Perfectly",
          content:
            "A loading web font often gets replaced temporarily by a system fallback, but that fallback may have a very different x-height. The result is subtle but damaging: headings reflow, labels shift, and rhythm changes just because the actual font has not arrived yet. `font-size-adjust` helps preserve the perceived size of the lowercase letterforms so fallback text feels much closer to the final result.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Untuned Fallback vs Adjusted Fallback",
          left: {
            label: "No fallback adjustment",
            code: `.headline {
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}`,
            description:
              "The fallback may render with very different perceived size, creating hierarchy drift and layout shift when the real font arrives.",
          },
          right: {
            label: "Adjusted fallback",
            code: `.headline {
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  font-size-adjust: 0.52;
}`,
            description:
              "The fallback better matches the final font's perceived size, reducing jarring reflow during the swap.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "A quiet performance detail",
          content:
            "Users may never know why the page feels more stable, but this is one of those typography details that improves polish during real network conditions instead of ideal demos.",
        },
      },
    ],
  },
};
