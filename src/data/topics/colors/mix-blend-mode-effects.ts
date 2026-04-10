import type { Topic } from "@/types/topic";

export const mixBlendModeEffects: Topic = {
  id: "mix-blend-mode-effects",
  name: "Mix Blend Mode Effects",
  categoryId: "colors",
  description: "Using Photoshop-like blending modes natively in the browser for creative typography and imagery.",
  tags: ["colors", "mix-blend-mode", "photoshop", "contrast", "design"],
  route: "/topics/mix-blend-mode-effects",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Browser Blending",
          content: "`mix-blend-mode` determines how an element's content should blend with the content of its parent and its background. This allows for stunning visual effects without pre-rendering text in image editors, keeping text selectable and accessible.",
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="position: relative; height: 200px; background: url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600&auto=format&fit=crop') center/cover; padding: 2rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; isolation: isolate;">
  <!-- Text that reacts to the background underneath it -->
  <h2 style="font-size: 4rem; font-weight: 900; color: white; mix-blend-mode: difference; margin: 0; text-transform: uppercase;">Contrast</h2>
  <h2 style="font-size: 4rem; font-weight: 900; color: black; mix-blend-mode: overlay; margin: 0; text-transform: uppercase;">Blend</h2>
</div>`,
          css: `/* The 'difference' mode inverts the colors based on what is exactly behind it */`,
        },
      },
      {
        type: "list",
        data: {
          title: "Popular Blend Modes",
          ordered: false,
          items: [
            { text: "`multiply`", subtext: "Multiplies colors. Results in darker colors (white becomes transparent)." },
            { text: "`screen`", subtext: "Inverse of multiply. Results in brighter colors (black becomes transparent)." },
            { text: "`overlay`", subtext: "Combines multiply and screen depending on the backdrop color." },
            { text: "`difference`", subtext: "Subtracts darker colors from lighter colors, creating perfect inversion contrast." },
          ],
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.hero-wrapper {
  background-image: url('complex-photo.jpg');
  /* Critical to prevent blending from leaking out into the page body */
  isolation: isolate; 
}

.hero-text {
  color: white;
  mix-blend-mode: difference;
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "The Isolation Isolate Trap",
          content: "Blend modes blend with the ENTIRE backdrop below them, which can sometimes include the body background if not contained. If your blend effect looks completely wrong, apply `isolation: isolate;` or a new stacking context (like `position: relative; z-index: 1`) to the direct parent container.",
        },
      },
    ],
  },
};
