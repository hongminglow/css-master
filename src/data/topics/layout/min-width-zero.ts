import type { Topic } from "@/types/topic";

export const minWidthZero: Topic = {
  id: "min-width-zero",
  name: "Min-Width 0 Fixes Flex and Grid Overflow",
  categoryId: "layout",
  description:
    "One of the most common modern CSS bugs: a flex or grid child refuses to shrink, so ellipsis, wrapping, and responsive layouts all fail until you reset its intrinsic minimum size.",
  tags: ["layout", "flexbox", "grid", "overflow", "ellipsis", "intrinsic-size"],
  route: "/topics/min-width-zero",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Invisible Constraint",
          content:
            "Flex and grid items do not always shrink the way developers expect. By default, many of them behave as if they have `min-width: auto`, which means the browser protects the content's intrinsic width. That is why long titles, URLs, code snippets, and table cells can blow out a layout even when `overflow: hidden` and `text-overflow: ellipsis` are already present. The real fix is usually not more overflow rules. It is telling the item that it is allowed to become smaller than its content with `min-width: 0`.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Why Ellipsis 'Randomly' Breaks",
          subtitle:
            "Both cards try to truncate a long file name. The only difference is whether the text column is allowed to shrink.",
          left: {
            label: "❌ Default min-width:auto",
            code: `.row {
  display: flex;
  gap: 12px;
}

.meta {
  flex: 1;
}

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
            html: `
<div class="panel broken">
  <div class="row">
    <div class="icon">CSS</div>
    <div class="meta">
      <div class="eyebrow">Stylesheet</div>
      <div class="title">quarterly-revenue-dashboard-enterprise-client-final-final-v7.css</div>
    </div>
    <button class="action">Open</button>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #e2e8f0; }
.panel { width: 100%; padding: 20px; }
.row {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  background: white;
  border: 1px solid #cbd5e1;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}
.icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #fee2e2;
  color: #b91c1c;
  font-weight: 700;
  flex: none;
}
.meta {
  flex: 1;
}
.eyebrow {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 4px;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  color: #0f172a;
}
.action {
  flex: none;
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  background: #ef4444;
  color: white;
  font-weight: 600;
}
`,
            description:
              "The middle column keeps its intrinsic width, so the whole row stretches and the truncation never gets a chance to work.",
          },
          right: {
            label: "✅ Add min-width: 0",
            code: `.row {
  display: flex;
  gap: 12px;
}

.meta {
  flex: 1;
  min-width: 0;
}

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
            html: `
<div class="panel fixed">
  <div class="row">
    <div class="icon">CSS</div>
    <div class="meta">
      <div class="eyebrow">Stylesheet</div>
      <div class="title">quarterly-revenue-dashboard-enterprise-client-final-final-v7.css</div>
    </div>
    <button class="action">Open</button>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #dbeafe; }
.panel { width: 100%; padding: 20px; }
.row {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.12);
}
.icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #dbeafe;
  color: #1d4ed8;
  font-weight: 700;
  flex: none;
}
.meta {
  flex: 1;
  min-width: 0;
}
.eyebrow {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 4px;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  color: #0f172a;
}
.action {
  flex: none;
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  background: #2563eb;
  color: white;
  font-weight: 600;
}
`,
            description:
              "Now the text column is allowed to become smaller than its content, so truncation, wrapping, and responsive shrinkage behave as intended.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "The Same Rule Shows Up in Grid",
          code: `/* Flex item that contains long content */
.sidebar-card__body {
  flex: 1;
  min-width: 0;
}

/* Grid track that must be allowed to shrink */
.layout {
  display: grid;
  grid-template-columns: 18rem minmax(0, 1fr);
}

/* Grid child with nested code block or long URL */
.main {
  min-width: 0;
}`,
        },
      },
      {
        type: "dosd\u043e\u043dts",
        data: {
          title: "When to Reach for It",
          dos: [
            "Use `min-width: 0` on any flex or grid child that contains long text, code, tables, or media.",
            "Use `minmax(0, 1fr)` for grid tracks when a fractional column must be allowed to shrink.",
            "Debug overflow by checking the child item, not only the outer container.",
          ],
          donts: [
            "Do not keep stacking more `overflow: hidden` rules and hope the layout bug disappears.",
            "Do not assume `flex: 1` means the item can shrink below its content size.",
            "Do not forget the vertical sibling: similar issues sometimes need `min-height: 0` inside column layouts.",
          ],
        },
      },
    ],
  },
};
