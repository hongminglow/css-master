import type { Topic } from "@/types/topic";

export const outlineVsBoxShadowFocus: Topic = {
  id: "outline-vs-box-shadow-focus",
  name: "Outline vs Box-Shadow for Focus",
  categoryId: "colors",
  description: "Why outline is now the superior choice for focus rings thanks to modern browser updates.",
  tags: ["colors", "accessibility", "focus", "outline", "box-shadow"],
  route: "/topics/outline-vs-box-shadow-focus",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Historical Outline Problem",
          content: "For a decade, developers disabled default browser `outline: none` and replaced it with `box-shadow: 0 0 0 3px blue` for focus states. Why? Because historically, `outline` drew a harsh, square 90-degree box around elements, completely ignoring `border-radius`. This looked terrible on pill-shaped buttons. However, this is no longer true: modern browsers now beautifully curve `outline` to match `border-radius` natively.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Outline's Hidden Superpowers",
          left: {
            label: "Box Shadow (Legacy Hack)",
            code: `.button:focus-visible {
  box-shadow: 0 0 0 3px #3b82f6;
}
/* Flaw: It's invisible in high-contrast 
   mode or if forced colors are on! */`,
          },
          right: {
            label: "Outline (Modern Best Practice)",
            code: `.button:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}
/* Win: Guaranteed to be visible in all 
   accessibility modes and curves 
   with border-radius! */`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 2rem; padding: 2rem; background: #0f172a; border-radius: 8px; justify-content: center;">
  <button style="padding: 0.75rem 2rem; background: #334155; color: white; border: none; border-radius: 99px; outline: 3px solid #3b82f6; outline-offset: 4px; font-weight: bold;">
    Outline Focus Ring
  </button>
</div>`,
          css: `/* Notice how the outline flawlessly tracks the highly rounded 99px border-radius! It also leaves a perfectly transparent offset gap. */`,
        },
      },
      {
        type: "workflow",
        data: {
          title: "Why switch back to outline?",
          steps: [
            {
              number: 1,
              title: "High Contrast Mode",
              description: "Windows High Contrast Mode often strips box-shadows entirely to preserve visual clarity, making your custom focus ring literally invisible to users relying on keyboard navigation. Outlines are guaranteed to draw.",
            },
            {
              number: 2,
              title: "Outline Offset",
              description: "Getting a gap between the button and the focus ring with box-shadow requires nesting two shadows or using `border`. `outline-offset` does this with one property.",
            },
            {
              number: 3,
              title: "No Layout Repaint",
              description: "Unlike borders, outlines don't take up layout space, meaning they don't cause pixel shifting when they appear.",
            },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "What about Safari?",
          content: "As of Safari 16.4 (March 2023), WebKit fully supports curving `outline` to match `border-radius`. Firefox and Chrome have supported it for years. The box-shadow hack is officially obsolete.",
        },
      },
    ],
  },
};
