import type { Topic } from "@/types/topic";

export const gradientTextBackgroundClip: Topic = {
  id: "gradient-text-background-clip",
  name: "Gradient Text with Background Clip",
  categoryId: "colors",
  description: "Create stunning modern gradient text using background clipping.",
  tags: ["colors", "gradient", "typography", "background-clip", "text"],
  route: "/topics/gradient-text-background-clip",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Clipping the Background",
          content: "You can't directly apply a linear-gradient to the `color` property. However, a common modern web design pattern is vibrant gradient text. You achieve this by applying the gradient to the element's *background*, and then telling CSS to 'clip' (cut away) the background everywhere except where the text characters are drawn.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.gradient-heading {
  /* 1. Define your vibrant background */
  background: linear-gradient(135deg, #3b82f6, #ec4899);
  
  /* 2. Clip the background exactly to the text shape */
  -webkit-background-clip: text;
  background-clip: text;
  
  /* 3. Make the actual text transparent so the background shows through! */
  color: transparent;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="padding: 3rem; background: #0f172a; border-radius: 8px; text-align: center;">
  <h1 style="
    font-size: 3.5rem; 
    font-weight: 900; 
    margin: 0;
    background: linear-gradient(to right, #00f2fe 0%, #4facfe 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  ">
    Modern Web Design
  </h1>
  <p style="color: #64748b; margin-top: 0.5rem;">Without vector images or SVGs.</p>
</div>`,
          css: `/* Ensure your text is bold enough (font-weight: 800 or 900) so the gradient is actually visible. Thin text makes gradients look muddy. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Important Gotchas",
          dos: [
            "Always include `-webkit-background-clip: text` alongside `background-clip: text` for cross-browser stability.",
            "Use heavy, bold, or chunky typographies to make the effect shine.",
          ],
          donts: [
            "Don't forget `color: transparent`. If you just clip the background, the default black/white text will render over the top of the clipped background, totally hiding it.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Fallback Colors",
          content: "If `background-clip: text` somehow fails to load or isn't supported on an ancient browser, the background stays a solid box, and `color: transparent` makes the text completely invisible! It's safer to use an `@supports` query, or set a solid fallback color and let the background clip override it.",
        },
      },
    ],
  },
};
