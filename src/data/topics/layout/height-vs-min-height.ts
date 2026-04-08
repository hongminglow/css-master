import type { Topic } from "@/types/topic";

export const heightVsMinHeight: Topic = {
  id: "height-vs-min-height",
  name: "Heights: The Overflow Trap",
  categoryId: "layout",
  description: "Why your layouts randomly overlap: understanding when to use height, max-height, and min-height.",
  tags: ["layout", "height", "overflow", "min-height"],
  route: "/topics/height-vs-min-height",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Fixed Height Trap",
          content: "When you build a hero section or a card, the most common instinct is to apply a direct `height` property (e.g., `height: 400px` or `height: 100vh`). This works perfectly when you meticulously design mockups on Figma, but breaks immediately in production when dynamic content pushes the height far beyond your predefined fixed boundary."
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "height vs min-height (Exceeding Content)",
          subtitle: "Watch what happens to the wrapper box when the dynamic internal content unexpectedly doubles in size.",
          left: {
            label: "❌ Using direct height",
            code: ".card {\n  /* Box locks strictly to 100px */\n  height: 100px;\n  background: white;\n}\n/* Large text will bleed outside the box */",
            html: `
<div class="mock-device">
  <div class="card bad-height">
    <h3>Profile Overview</h3>
    <p>This is a short intro...</p>
    <div class="dynamic-content">
      Oh wait! The user added an unexpectedly long biography! It keeps going and going and completely shatters out of the bottom of the container limits!
    </div>
  </div>
  <div class="sibling">Next Section</div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; background: #0f172a; border-radius: 8px; font-family: sans-serif; padding: 20px; overflow-y: auto;}
.card { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); color: #1e293b;}
.card h3 { margin: 0 0 10px 0;}
.card p { margin: 0 0 10px 0; color: #64748b;}
.dynamic-content { background: #fef08a; padding: 10px; border-radius: 4px; border: 1px dashed #eab308;}
.sibling { background: #3b82f6; color: white; padding: 15px; border-radius: 8px; margin-top: 15px; font-weight: bold;}

/* The Flaw */
.bad-height {
  height: 100px;
}
            `
          },
          right: {
            label: "✅ Using min-height",
            code: ".card {\n  /* Starts at 100px, but grows! */\n  min-height: 100px;\n  background: white;\n}\n/* Securely wraps all content */",
            html: `
<div class="mock-device">
  <div class="card good-height">
    <h3>Profile Overview</h3>
    <p>This is a short intro...</p>
    <div class="dynamic-content">
      Oh wait! The user added an unexpectedly long biography! It keeps going and going, but noticing how the parent naturally inflates to protect it!
    </div>
  </div>
  <div class="sibling">Next Section</div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; background: #0f172a; border-radius: 8px; font-family: sans-serif; padding: 20px; overflow-y: auto;}
.card { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); color: #1e293b;}
.card h3 { margin: 0 0 10px 0;}
.card p { margin: 0 0 10px 0; color: #64748b;}
.dynamic-content { background: #10b981; color: white; padding: 10px; border-radius: 4px; border: 1px dashed #059669;}
.sibling { background: #3b82f6; color: white; padding: 15px; border-radius: 8px; margin-top: 15px; font-weight: bold;}

/* The Fix */
.good-height {
  min-height: 100px; 
}
            `
          }
        }
      },
      {
        type: "table",
        data: {
          title: "The Dimension Matrix",
          headers: ["Property", "Behavior", "When content overflows"],
          rows: [
            ["height", "Locks element strictly to value", "Content bleeds visibly out of box, overlaps peers"],
            ["max-height", "Grows dynamically, but stops at cap", "Content bleeds visibly out of box AFTER cap"],
            ["min-height", "Guarantees a floor, stretches infinitely", "Box stretches perfectly to contain all content"]
          ]
        }
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Why use 'max-height' then?",
          content: "Use `max-height` entirely when dealing with purely scrollable containers (e.g. `max-height: 400px; overflow-y: auto;`), or for pure CSS transitions (animating from `max-height: 0` to `max-height: 1000px` for accordion triggers)."
        }
      }
    ]
  }
};
