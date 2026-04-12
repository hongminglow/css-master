import type { Topic } from "@/types/topic";

export const flexGridHiddenDefaults: Topic = {
  id: "flex-grid-hidden-defaults",
  name: "Flex and Grid Hidden Defaults",
  categoryId: "layout",
  description:
    "A practical deep dive into the defaults that make Flexbox and Grid feel frustrating: intrinsic sizing, stretch, flex shorthand, `1fr`, and layout-specific alignment rules.",
  tags: [
    "layout",
    "flexbox",
    "grid",
    "alignment",
    "intrinsic-size",
    "debugging",
  ],
  route: "/topics/flex-grid-hidden-defaults",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Why Flex and Grid Feel Like They Have Hidden Rules",
          content:
            "They do, but they are not random. Once an element becomes a flex item or grid item, its final size no longer comes only from `width` or `height`. The layout engine combines four things: the container's available space, the item's intrinsic content size, the layout mode defaults, and the alignment rules. That is why a value can be valid CSS yet still appear to do nothing. In modern layout, `width` and `height` are often inputs to an algorithm, not final commands.",
        },
      },
      {
        type: "featurecomparison",
        data: {
          title: "How the Two Layout Engines Think",
          left: {
            label: "Flexbox",
            icon: "dot",
            variant: "info",
            items: [
              "Optimizes distribution along one main axis.",
              "Item size comes from `flex-grow`, `flex-shrink`, and `flex-basis`.",
              "`width` often loses once you ask an item to grow or shrink.",
              "Cross-axis sizing commonly surprises people because of default stretch.",
              "There is no `justify-self` for individual flex items.",
            ],
          },
          right: {
            label: "Grid",
            icon: "dot",
            variant: "success",
            items: [
              "Optimizes placement into rows and columns at the same time.",
              "Track sizing usually matters more than item sizing.",
              "`1fr` is content-aware, not an unconditional equal slice.",
              "Items stretch inside their cells by default.",
              "`justify-self` and `align-self` work per item, but only inside the grid cell.",
            ],
          },
        },
      },
      {
        type: "table",
        data: {
          title: "Defaults That Commonly Surprise People",
          headers: ["Default", "Where", "What It Really Means", "Typical Fix"],
          rows: [
            [
              "`flex: 0 1 auto`",
              "Flex items",
              "Items do not grow by default, but they can shrink and their base size starts from `auto`.",
              "Set `flex` deliberately instead of relying on the default.",
            ],
            [
              "`flex: 1`",
              "Flex items",
              "Shorthand resets the basis to `0%`, so `width` often stops deciding the final size.",
              "Use `flex: 0 0 <size>` for fixed widths or `flex: 1 1 0` intentionally.",
            ],
            [
              "`min-width: auto`",
              "Flex and grid items",
              "The browser protects the content's minimum size, so children may refuse to shrink.",
              "Add `min-width: 0` to the item that must shrink.",
            ],
            [
              "`align-items: stretch`",
              "Flex containers",
              "Items stretch on the cross axis, which often makes cards all match height.",
              "Use `align-items: start`, `center`, or per-item `align-self`.",
            ],
            [
              "`justify-items: stretch` and `align-items: stretch`",
              "Grid containers",
              "Grid items fill their cells by default, even if the content is smaller.",
              "Set `justify-items` or `align-items` to `start` when you want natural size.",
            ],
            [
              "`1fr` has an automatic minimum",
              "Grid tracks",
              "A fractional track still respects min-content pressure from long text or media.",
              "Use `minmax(0, 1fr)` when the track must be allowed to shrink.",
            ],
            [
              "`justify-self` does nothing",
              "Flex items",
              "The property exists, but Flexbox does not use it on individual items.",
              "Use auto margins, container alignment, or switch to Grid if cell-level control is needed.",
            ],
            [
              "`align-content` seems broken",
              "Flex and grid containers",
              "It only works when there are multiple lines or tracks and extra free space to distribute.",
              "Use `align-items` or `justify-content` for single-line cases, or create extra space first.",
            ],
          ],
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Why Width Seems Ignored in Flexbox",
          subtitle:
            "The left side asks for different widths, but `flex: 1` resets the basis to zero and distributes space evenly.",
          left: {
            label: "Width loses to flex: 1",
            code: `.row {
  display: flex;
  gap: 12px;
}

.card {
  flex: 1; /* shorthand for 1 1 0% */
}

.wide { width: 220px; }
.narrow { width: 96px; }`,
            html: `<div class="row">
  <article class="card wide">
    <div class="label">asked for 220px</div>
    <strong>Primary panel</strong>
    <p>Still ends up sharing space evenly.</p>
  </article>
  <article class="card narrow">
    <div class="label">asked for 96px</div>
    <strong>Small status</strong>
    <p>But grows to match.</p>
  </article>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #fff1f2;
}
.row {
  display: flex;
  gap: 12px;
  padding: 18px;
}
.card {
  flex: 1;
  min-width: 0;
  display: grid;
  gap: 8px;
  padding: 14px;
  border-radius: 16px;
  background: white;
  border: 1px solid #fecdd3;
  box-shadow: 0 12px 28px rgba(190, 24, 93, 0.09);
  color: #4c0519;
}
.wide { width: 220px; }
.narrow { width: 96px; }
.label {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #9f1239;
}
strong {
  font-size: 14px;
}
p {
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  color: #831843;
}`,
            description:
              "This is one of the most common Flexbox misunderstandings: if you use `flex: 1`, you asked the browser to distribute free space, not to preserve each item's declared width.",
          },
          right: {
            label: "Width respected",
            code: `.row {
  display: flex;
  gap: 12px;
}

.card {
  flex: 0 0 auto;
}

.wide { width: 220px; }
.narrow { width: 96px; }`,
            html: `<div class="row">
  <article class="card wide">
    <div class="label">width: 220px</div>
    <strong>Primary panel</strong>
    <p>Width stays in charge because the item is not growing.</p>
  </article>
  <article class="card narrow">
    <div class="label">width: 96px</div>
    <strong>Small status</strong>
    <p>Now the narrow item stays narrow.</p>
  </article>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #eff6ff;
}
.row {
  display: flex;
  gap: 12px;
  padding: 18px;
  align-items: start;
}
.card {
  flex: 0 0 auto;
  display: grid;
  gap: 8px;
  padding: 14px;
  border-radius: 16px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.11);
  color: #172554;
}
.wide { width: 220px; }
.narrow { width: 96px; }
.label {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1d4ed8;
}
strong {
  font-size: 14px;
}
p {
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  color: #1e3a8a;
}`,
            description:
              "When a flex item should keep a fixed width, declare the flex behavior directly. `flex: 0 0 auto` means do not grow, do not shrink, and use the item's own size.",
          },
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Why Cards Stretch Taller Than Their Content",
          subtitle:
            "In Grid, items stretch inside their cells by default. A taller sibling can make a shorter card look like it has mysterious extra height.",
          left: {
            label: "Default stretch",
            code: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  /* default align-items: stretch */
}`,
            html: `<div class="grid">
  <article class="card short">
    <div class="eyebrow">Short card</div>
    <strong>One small note</strong>
    <p>Only one line of content.</p>
  </article>
  <article class="card tall">
    <div class="eyebrow">Tall card</div>
    <strong>Release checklist</strong>
    <ul>
      <li>Export the design tokens</li>
      <li>QA the mobile layout</li>
      <li>Record the handoff video</li>
    </ul>
  </article>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #f8fafc;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 18px;
}
.card {
  display: grid;
  gap: 8px;
  padding: 14px;
  border-radius: 16px;
  background: white;
  border: 1px solid #cbd5e1;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.07);
}
.short {
  background:
    linear-gradient(180deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)),
    white;
}
.tall {
  background:
    linear-gradient(180deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02)),
    white;
}
.eyebrow {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
}
strong {
  font-size: 14px;
  color: #0f172a;
}
p, li {
  margin: 0;
  font-size: 12px;
  line-height: 1.45;
  color: #334155;
}
ul {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
}`,
            description:
              "The row height becomes as tall as the biggest card, then the shorter card stretches to fill that row. The extra space is not a bug. It is the default alignment behavior.",
          },
          right: {
            label: "Use natural height",
            code: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-items: start;
}`,
            html: `<div class="grid">
  <article class="card short">
    <div class="eyebrow">Short card</div>
    <strong>One small note</strong>
    <p>Only one line of content.</p>
  </article>
  <article class="card tall">
    <div class="eyebrow">Tall card</div>
    <strong>Release checklist</strong>
    <ul>
      <li>Export the design tokens</li>
      <li>QA the mobile layout</li>
      <li>Record the handoff video</li>
    </ul>
  </article>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #f0fdf4;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 18px;
  align-items: start;
}
.card {
  display: grid;
  gap: 8px;
  padding: 14px;
  border-radius: 16px;
  background: white;
  border: 1px solid #bbf7d0;
  box-shadow: 0 12px 28px rgba(22, 163, 74, 0.08);
}
.short {
  background:
    linear-gradient(180deg, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0.02)),
    white;
}
.tall {
  background:
    linear-gradient(180deg, rgba(16, 185, 129, 0.08), rgba(16, 185, 129, 0.02)),
    white;
}
.eyebrow {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #15803d;
}
strong {
  font-size: 14px;
  color: #14532d;
}
p, li {
  margin: 0;
  font-size: 12px;
  line-height: 1.45;
  color: #166534;
}
ul {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
}`,
            description:
              "Use `align-items: start` when you want each card to keep its own natural height. The same idea applies in Flexbox with the cross axis.",
          },
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Why `1fr` Can Still Overflow",
          subtitle:
            "A fractional track is not automatically allowed to shrink below min-content. Long file names, URLs, code, and tables still push back.",
          left: {
            label: "`1fr` with default minimum",
            code: `.layout {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
}

.path {
  white-space: nowrap;
}`,
            html: `<div class="shell">
  <div class="layout">
    <aside class="side">nav</aside>
    <main class="main">
      <div class="eyebrow">Build artifact</div>
      <div class="path">dist/assets/enterprise-dashboard-analytics-final-client-review-build.js</div>
    </main>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #fff7ed;
}
.shell {
  padding: 18px;
}
.layout {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  padding: 14px;
  border-radius: 18px;
  background: white;
  border: 1px solid #fed7aa;
  box-shadow: 0 12px 30px rgba(234, 88, 12, 0.08);
}
.side {
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #ffedd5;
  color: #9a3412;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
.main {
  padding: 12px;
  border-radius: 14px;
  background: #fff7ed;
}
.eyebrow {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c2410c;
  margin-bottom: 8px;
}
.path {
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 12px;
  line-height: 1.45;
  white-space: nowrap;
  color: #7c2d12;
}`,
            description:
              "The long token pushes on the `1fr` track because that track still has an automatic minimum size. The layout feels like it ignores the column definition, but it is following the intrinsic sizing rules.",
          },
          right: {
            label: "Allow the track and item to shrink",
            code: `.layout {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 12px;
}

.main { min-width: 0; }

.path {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
            html: `<div class="shell">
  <div class="layout">
    <aside class="side">nav</aside>
    <main class="main">
      <div class="eyebrow">Build artifact</div>
      <div class="path">dist/assets/enterprise-dashboard-analytics-final-client-review-build.js</div>
    </main>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: #eff6ff;
}
.shell {
  padding: 18px;
}
.layout {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 12px;
  padding: 14px;
  border-radius: 18px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.11);
}
.side {
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
.main {
  min-width: 0;
  padding: 12px;
  border-radius: 14px;
  background: #eff6ff;
}
.eyebrow {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1d4ed8;
  margin-bottom: 8px;
}
.path {
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 12px;
  line-height: 1.45;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #1e3a8a;
}`,
            description:
              "This is the grid version of the same intrinsic-size trap. `minmax(0, 1fr)` fixes the track, and `min-width: 0` fixes the child.",
          },
        },
      },
      {
        type: "workflow",
        data: {
          title: "How to Debug a Flex or Grid Sizing Problem",
          steps: [
            {
              number: 1,
              title: "Find the real layout container",
              description:
                "Inspect the parent that has `display: flex` or `display: grid`. Many bugs come from editing the child while the parent algorithm is still in charge.",
            },
            {
              number: 2,
              title: "Identify the axis that is fighting you",
              description:
                "In Flexbox, ask whether the problem is on the main axis or the cross axis. In Grid, ask whether the problem belongs to columns, rows, or the alignment inside a cell.",
            },
            {
              number: 3,
              title: "Check whether the item is allowed to shrink",
              description:
                "If long content is involved, test `min-width: 0` or `min-height: 0`. Intrinsic minimum sizes are one of the most common invisible blockers.",
            },
            {
              number: 4,
              title: "Check for stretch before changing height or width",
              description:
                "If a card is mysteriously full-height or full-width, inspect `align-items`, `justify-items`, or per-item `align-self` and `justify-self`.",
            },
            {
              number: 5,
              title: "Expand shorthands mentally",
              description:
                "Values like `flex: 1` or `grid-template-columns: 1fr 1fr` are compact, but they hide real rules. Translate them into `grow / shrink / basis` or explicit track minimums.",
            },
            {
              number: 6,
              title: "Fix the algorithm, not only the symptom",
              description:
                "If the issue is track sizing, change the grid tracks. If the issue is flex growth, change the flex values. Width and height alone are often not the right lever.",
            },
          ],
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Recipes Worth Memorizing",
          code: `/* Fixed-width flex item */
.sidebar {
  flex: 0 0 16rem;
}

/* Fill the remaining line, but still allow shrinking */
.content {
  flex: 1 1 0;
  min-width: 0;
}

/* Equal grid tracks that can actually shrink */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

/* Stop default stretching in Grid */
.grid {
  align-items: start;
  justify-items: start;
}

/* Push one flex item to the far edge */
.toolbar__action {
  margin-inline-start: auto;
}

/* Move one grid item inside its own cell */
.badge {
  justify-self: end;
  align-self: start;
}

/* Reminder: justify-self does nothing on a flex item */`,
        },
      },
    ],
  },
};