import type { Topic } from "@/types/topic";

export const dropShadowVsBoxShadow: Topic = {
  id: "drop-shadow-vs-box-shadow",
  name: "Drop-Shadow vs Box-Shadow",
  categoryId: "colors",
  description: "Why filter: drop-shadow() is fundamentally different from box-shadow and perfect for custom shapes.",
  tags: ["colors", "shadow", "drop-shadow", "filter", "png", "svg"],
  route: "/topics/drop-shadow-vs-box-shadow",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Transparent Image Problem",
          content: "`box-shadow` is the standard for cards and UI elements. But if you apply it to a transparent PNG logo, an SVG path, or heavily clip-pathed element, something ugly happens: it draws a rigid rectangle shadow completely ignoring the transparency. `filter: drop-shadow()` resolves this by plotting the shadow based on the literal opacity matrix of the pixels.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Bounding Box vs Pixel Matrix",
          left: {
            label: "Box Shadow (Literal Box)",
            code: `.logo-image {
  box-shadow: 0 4px 10px blue;
}
/* Creates an ugly blue square behind 
   your nicely contoured PNG logo. */`,
          },
          right: {
            label: "Drop Shadow (Hugs Shape)",
            code: `.logo-image {
  filter: drop-shadow(0 4px 10px blue);
}
/* Traces the exact transparent edge 
   of the image data flawlessly! */`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 3rem; justify-content: center; padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
    <span style="color: #64748b; font-size: 0.8rem;">Box Shadow</span>
    <!-- SVG Star -->
    <svg style="box-shadow: 0 10px 15px -3px #3b82f6;" width="80" height="80" viewBox="0 0 24 24" fill="#cbd5e1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
    <span style="color: #64748b; font-size: 0.8rem;">Drop Shadow Filter</span>
    <!-- SVG Star -->
    <svg style="filter: drop-shadow(0 10px 15px #3b82f6);" width="80" height="80" viewBox="0 0 24 24" fill="#cbd5e1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  </div>

</div>`,
          css: `/* Filter physically evaluates the alpha mask. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Spread Radius",
          content: "Unlike `box-shadow`, `filter: drop-shadow()` does not support a 'spread' radius parameter. You can only define X, Y, Blur, and Color.",
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Performance Note",
          dos: [
            "Use it on `.png`, `.webp`, `.svg`, or elements with `clip-path`.",
          ],
          donts: [
            "Don't use it on simple rectangular cards. `box-shadow` is heavily hardware accelerated and much more performant for standard UI rectangles.",
          ],
        },
      },
    ],
  },
};
