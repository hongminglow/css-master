import type { Topic } from "@/types/topic";

export const isolationIsolate: Topic = {
  id: "isolation-isolate",
  name: "The isolation: isolate Hack",
  categoryId: "layout",
  description: "Stop z-index wars. Learn how isolation cleanly encapsulates z-indexes from bleeding out and breaking your layouts.",
  tags: ["layout", "z-index", "isolation", "stacking-context"],
  route: "/topics/isolation-isolate",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Z-Index Global Bleed",
          content: "A notorious issue in CSS occurs when you have a modular component (like a Card) with elements inside it mathematically layering using `z-index`. If an inner element is given `z-index: 999`, it naturally escapes the Card and bleeds over everything else on the entire page—like sticky headers or tooltips. Managing this globally becomes a mathematical nightmare."
        }
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "The Stacking Context Savior",
          content: "By applying `isolation: isolate` directly to the parent Card container, you instantly trap all internal `z-indexes` inside that component mapping. An inner element can have `z-index: 999999` and it will NEVER cross the boundary of the Card to overlay other external elements. It mathematically creates a brand new enclosed Stacking Context natively."
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "Z-Index Bleed vs Isolation",
          subtitle: "Look at the Tooltip attempting to overlap the cards. In the 'Old' example, the child's absurd z-index escapes the card and breaks the Tooltip. In the 'Fix', we've insulated the card.",
          left: {
            label: "❌ The Global Bleed",
            code: ".parent {\n  position: relative;\n}\n\n.child {\n  position: absolute;\n  z-index: 999; /* Bleeds OUT! */\n}",
            html: `
<div class="mock-device">
  <div class="tooltip z-50">Global Tooltip (z-index: 50)</div>
  <div class="card bad-parent">
    <h4>Component Box</h4>
    <div class="escaped-child text-center">Child (z: 999)</div>
  </div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; background: #e2e8f0; border-radius: 8px; font-family: sans-serif; display:flex; align-items:center; justify-content:center;}
.tooltip { position: absolute; top: 0; left: 0; right: 0; background: #3b82f6; color: white; padding: 10px; font-weight: bold; text-align: center; z-index: 50; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; width: 220px; height: 140px;}
.card h4 { margin: 0 0 10px 0; color: #1e293b; }

/* The Evil Child */
.escaped-child { position: absolute; top: -20px; right: -20px; background: #ef4444; color: white; padding: 10px; font-weight: bold; border-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.2); z-index: 999;}
            `
          },
          right: {
            label: "✅ Using isolation: isolate",
            code: ".parent {\n  position: relative;\n  /* TRAPS inner z-indexes! */\n  isolation: isolate; \n}\n\n.child {\n  position: absolute;\n  z-index: 999; /* Trapped! */\n}",
            html: `
<div class="mock-device">
  <div class="tooltip z-50">Global Tooltip (z-index: 50)</div>
  <div class="card good-parent">
    <h4>Component Box</h4>
    <div class="escaped-child text-center">Child (z: 999)</div>
  </div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; background: #e2e8f0; border-radius: 8px; font-family: sans-serif; display:flex; align-items:center; justify-content:center;}
.tooltip { position: absolute; top: 0; left: 0; right: 0; background: #3b82f6; color: white; padding: 10px; font-weight: bold; text-align: center; z-index: 50; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; width: 220px; height: 140px;}
.card h4 { margin: 0 0 10px 0; color: #1e293b; }
.escaped-child { position: absolute; top: -20px; right: -20px; background: #ef4444; color: white; padding: 10px; font-weight: bold; border-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.2); z-index: 999;}

/* THE FIX */
.good-parent {
  isolation: isolate;
}
            `
          }
        }
      }
    ]
  }
};
