import type { Topic } from "@/types/topic";

export const displayProperties: Topic = {
  id: "display-properties",
  name: "Display Properties Array",
  categoryId: "layout",
  description: "Demystifying 'display': understanding block, inline, inline-block, inline-flex, and inline-grid.",
  tags: ["layout", "display", "block", "inline", "inline-block", "inline-grid", "flow"],
  route: "/topics/display-properties",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Flow Layout Model",
          content: "The `display` property represents the foundational building block of CSS architecture. It dictates two things: an element's **outer display type** (how it interacts with siblings in normal flow, e.g., inline or block) and its **inner display type** (how its children are laid out, e.g., grid or flex). Understanding the differences between standard combinations like `inline-block` and `inline-grid` prevents endless layout frustration.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "block vs inline vs inline-block",
          subtitle: "Observe how padding, width, and height interact with siblings across the basic document flow states.",
          left: {
            label: "inline",
            code: ".box { display: inline; /* Ignores width/height! Vertical padding bleeds! */ }",
            html: `<div class="container">
  Text surrounding an <span class="box-inline">inline box</span> that disrupts lines.
</div>`,
            css: `.container { background: #0f172a; color: #cbd5e1; padding: 20px; font-family: sans-serif; line-height: 1.5; }
.box-inline {
  display: inline;
  background: #3b82f6;
  color: white;
  padding: 15px 20px; /* Vertical padding overlaps text! */
  width: 200px; /* Ignored! */
  height: 100px; /* Ignored! */
  border-radius: 4px;
}`
          },
          right: {
            label: "inline-block",
            code: ".box { display: inline-block; /* Respects dimensions & padding securely */ }",
            html: `<div class="container">
  Text surrounding an <span class="box-inline-block">inline-block</span> that pushes lines securely.
</div>`,
            css: `.container { background: #0f172a; color: #cbd5e1; padding: 20px; font-family: sans-serif; line-height: 1.5; }
.box-inline-block {
  display: inline-block;
  background: #10b981;
  color: white;
  padding: 15px 20px; /* Safely pushes siblings away */
  border-radius: 4px;
}`
          }
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "grid vs inline-grid",
          subtitle: "Outer display types change whether the parent container takes up 100% width or shrinks to fit the content.",
          left: {
            label: "grid",
            code: ".container { display: grid; /* Takes 100% width, forces line break */ }",
            html: `<span>Before</span>
<div class="grid-wrap">
  <div class="cell">A</div>
  <div class="cell">B</div>
</div>
<span>After</span>`,
            css: `body { color: white; font-family: sans-serif; }
.grid-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: #334155;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
}
.cell { background: #cbd5e1; color: #0f172a; padding: 10px; text-align: center; border-radius: 4px; font-weight: bold; }`
          },
          right: {
            label: "inline-grid",
            code: ".container { display: inline-grid; /* Shrinks to content, sits inline */ }",
            html: `<span>Before</span>
<div class="inline-grid-wrap">
  <div class="cell">A</div>
  <div class="cell">B</div>
</div>
<span>After</span>`,
            css: `body { color: white; font-family: sans-serif; }
.inline-grid-wrap {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: #334155;
  padding: 10px;
  border-radius: 8px;
  margin: 0 10px;
  vertical-align: middle;
}
.cell { background: #cbd5e1; color: #0f172a; padding: 10px; text-align: center; border-radius: 4px; font-weight: bold; }`
          }
        }
      },
      {
        type: "table",
        data: {
          title: "The Display Comparison Matrix",
          headers: ["Property", "Width / Height", "Sibling Relationship", "Typical Use Case"],
          rows: [
            ["block", "Respected (Takes 100% width)", "Forces line break before/after", "Headers, Sections, Divs"],
            ["inline", "Ignored (Shrinks to text)", "Flows continuously with text", "Spans, Strong, Em tags"],
            ["inline-block", "Respected", "Flows continuously with text", "Buttons, Badges, Tags"],
            ["flex", "Respected (Takes 100% width)", "Forces line break before/after", "Complex horizontal alignments"],
            ["inline-flex", "Respected (Shrinks to content)", "Flows continuously with text", "Alignment inside flowing text"],
            ["grid / inline-grid", "Same paradigm as flex", "Same paradigm as flex", "2D layout requirements"]
          ]
        }
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Modern Display Syntax",
          content: "Did you know `display: inline-flex;` is historically just a shorthand? In the modern CSS level 3 display syntax, this is actually written as two independent keywords `display: inline flex;` (outer display is inline, inner display is flex)!"
        }
      }
    ]
  }
};
