import type { Topic } from "@/types/topic";

export const verticalWritingMode: Topic = {
  id: "vertical-writing-mode",
  name: "Beautiful Sideways Typography",
  categoryId: "typography",
  description: "Ditch rotate transforms and use proper CSS writing modes for beautiful, structured sideways text.",
  tags: ["typography", "writing-mode", "vertical", "text", "asian-scripts", "layout"],
  route: "/topics/vertical-writing-mode",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Stop Using Transform: Rotate",
          content: "When western developers need text to run down the side of the screen (like a cool poster-style layout or a narrow tab button), they intuitively reach for `transform: rotate(-90deg)`. This is a nightmare for layout calculation because rotated elements don't alter the actual DOM box model width/height they occupy, causing collisions. `writing-mode` natively alters the text flow direction and fully respects bounding boxes.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "The Transform Hack vs Native Flow",
          left: {
            label: "Transform Hack",
            code: `.sidebar-text {
  transform: rotate(-90deg);
  transform-origin: top left;
  /* Width and Height get swapped in 
     a way the layout engine ignores, 
     causing absolute positioning hacks */
}`,
          },
          right: {
            label: "Writing Mode",
            code: `.sidebar-text {
  /* Text flows from top to bottom, 
     and lines wrap right to left! */
  writing-mode: vertical-rl;
  
  /* Text aligns perfectly, 
     taking up physical vertical space */
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 2rem; padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div style="background: #1e293b; color: white; padding: 1rem; border-radius: 4px; border-left: 2px solid #3b82f6;">
    <h2 style="margin: 0; writing-mode: vertical-rl; text-orientation: mixed; font-size: 1.5rem; letter-spacing: 2px;">
      SIDEBAR
    </h2>
  </div>
  
  <div style="flex: 1; color: #cbd5e1;">
    <h3>Full Layout Support</h3>
    <p>The sidebar block perfectly scales its height to match the sideways text.<br><br>The English characters are naturally rotated on their side (text-orientation: mixed is the default). If this contained Chinese or Japanese characters, they would automatically flow upright natively!</p>
  </div>

</div>`,
          css: `/* Adding 'text-orientation: upright' will force English typography to remain standing up, stacking letter by letter down the vertical column. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Logical Properties",
          dos: [
            "Use CSS Logical Properties (`margin-block-start`, `padding-inline`) instead of (`margin-top`, `padding-left`) when working with `writing-mode`. When the text turns sideways, `margin-top` stays physically at the top, while `margin-block-start` rotates to the right side where the new 'start' of the document flow is!",
          ],
          donts: [
            "Don't use `transform: rotate(90deg)` for structural text elements.",
          ],
        },
      },
    ],
  },
};
