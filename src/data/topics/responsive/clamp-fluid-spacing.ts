import type { Topic } from "@/types/topic";

export const clampFluidSpacing: Topic = {
  id: "clamp-fluid-spacing",
  name: "Fluid Spacing with clamp()",
  categoryId: "responsive",
  description: "Using CSS clamp() to create dynamic paddings and margins without relying on a dozen @media queries.",
  tags: ["responsive", "clamp", "math", "spacing", "fluid"],
  route: "/topics/clamp-fluid-spacing",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Beyond Fluid Typography",
          content: "`clamp()` is famous for generating fluid typography (`font-size: clamp(1rem, 2vw, 2rem)`). However, a common mistake is neglecting to use it for layout spacing! Manually redefining `.container { padding: 1rem; }` at 5 different media breakpoints creates bloated CSS. Using `clamp()` for paddings, gaps, and margins allows your layout structure to organically breathe as the screen shrinks.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "The Old Way vs The Fluid Way",
          left: {
            label: "Repetitive Breakpoints",
            code: `.container {
  padding: 1rem;
}
@media (min-width: 640px) {
  .container { padding: 2rem; }
}
@media (min-width: 1024px) {
  .container { padding: 4rem; }
}`,
          },
          right: {
            label: "The Magic Math",
            code: `.container {
  /* MIN, PREFERRED, MAX */
  /* Starts at 1rem on mobile.
     Grows dynamically based on viewport width.
     Caps perfectly at 4rem on desktop. */
  padding: clamp(1rem, 5vw, 4rem);
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="background: #0f172a; padding: 2rem; resize: horizontal; overflow: hidden; width: 100%; min-width: 200px; max-width: 100%; border: 1px solid #334155; border-radius: 8px;">
  <!-- We use container queries (cqi) here just so the preview block scales with the drag handle, but in the real world this is usually vw -->
  <div style="background: #1e293b; border: 2px solid #3b82f6; padding: clamp(1rem, 10cqi, 4rem); border-radius: 6px; text-align: center; color: white;">
    Drag the bottom right corner to resize!<br><br>
    The blue box calculates its internal padding dynamically based on available width, never going below 1rem, and never exceeding 4rem.
  </div>
</div>`,
          css: `/* Resizing the container smoothly interpolates the padding without any sudden 'jumps' associated with traditional @media queries. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Best Practices",
          dos: [
            "Use it on CSS Grid `gap: clamp(1rem, 3vw, 2rem);` so your grid items shrink closer together on phones.",
            "Use viewport units (`vw`, `vmin`) or container units (`cqw`) for the middle 'preferred' value, as regular percentages often just resolve to fixed parent sizes.",
          ],
          donts: [
            "Don't make the middle value too extreme (like `100vw`), or it will instantly jump from the minimum to the maximum.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "The Math Explained",
          content: "`clamp(MIN, IDEAL, MAX)` is literally shorthand for `max(MIN, min(IDEAL, MAX))`. It enforces an absolute floor and absolute ceiling on a dynamically shifting value.",
        },
      },
    ],
  },
};
