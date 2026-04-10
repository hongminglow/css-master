import type { Topic } from "@/types/topic";

export const paddingPercentageTrap: Topic = {
  id: "padding-percentage-trap",
  name: "The % Margin/Padding Trap",
  categoryId: "layout",
  description: "A common beginner CSS gotcha: percentage values on vertical padding and margins are based on the parent's width, not height.",
  tags: ["layout", "padding", "margin", "gotcha", "css-trap"],
  route: "/topics/padding-percentage-trap",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Unintuitive Math",
          content: "You want a `div` to have padding at the top equal to 10% of its parent's height. So you write `padding-top: 10%`. But something weird happens—the padding changes whenever the browser *width* is resized! This is because the CSS specification dictates that percentage values for margin and padding, even the vertical ones (`top`/`bottom`), are resolved against the *inline size* (width) of the containing block.",
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="width: 100%; height: 200px; background: #0f172a; border: 2px dashed #334155; position: relative;">
  <span style="position: absolute; top: 8px; left: 8px; color: #64748b; font-size: 0.8rem;">Parent: 100% W / 200px H</span>
  
  <div style="background: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; display: inline-block; padding-top: 10%; padding-left: 10%; margin-top: 40px; margin-left: 20px;">
    <span style="color: #60a5fa; font-weight: bold; padding: 0.5rem; display: block;">Child Box</span>
    <span style="color: #94a3b8; font-size: 0.8rem; padding: 0 0.5rem 0.5rem; display: block;">padding-top: 10%<br>padding-left: 10%</span>
  </div>
</div>`,
          css: `/* Notice that the physical vertical padding (top) is exactly identical to the physical horizontal padding (left), despite the parent being a wide rectangle. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "How to actually size against height",
          dos: [
            "Use `vh` (viewport height) or `dvh` units if you want padding relative to the screen height.",
            "Use Container Query units like `cqh` if you want vertical padding relative to a specific parent container's height.",
          ],
          donts: [
            "Don't use `%` for top/bottom margins or paddings if your goal is height-based proportional spacing.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Why does it work this way?",
          content: "Historically, CSS block layouts resolve height based on their content (flowing downwards). If vertical padding was based on height, calculating it would cause infinite recursive loops because adding padding increases the height, which would then trigger the padding to recalculate, and so on. Resolving against width breaks the cycle.",
        },
      },
    ],
  },
};
