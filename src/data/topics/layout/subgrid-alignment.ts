import type { Topic } from "@/types/topic";

export const subgridAlignment: Topic = {
  id: "subgrid-alignment",
  name: "Subgrid Keeps Nested Cards Perfectly Aligned",
  categoryId: "layout",
  description:
    "Independent card layouts drift out of alignment fast. `subgrid` lets nested components inherit the parent grid tracks so titles, meta, and actions line up cleanly.",
  tags: ["layout", "grid", "subgrid", "cards", "alignment", "modern-css"],
  route: "/topics/subgrid-alignment",
  content: {
    sections: [
      {
        type: "quote",
        data: {
          quote:
            "Subgrid is what people thought nested grid was doing all along.",
          author: "Frontend developers after shipping complex card layouts",
        },
      },
      {
        type: "card",
        data: {
          title: "The Nested Grid Problem",
          content:
            "Grid gave us reliable page structure, but nested card UIs still had an annoying weakness: each card calculated its own internal rows independently. A longer heading in one card pushed the metadata and button down, while the neighboring card stayed compact. The overall layout looked uneven even though both cards lived in the same outer grid. `subgrid` fixes that by letting the child card reuse the exact row tracks defined by the parent grid.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Independent Rows vs Shared Rows",
          subtitle:
            "The content differs slightly between cards. Notice how `subgrid` keeps the date row and CTA row aligned across the whole section.",
          left: {
            label: "❌ Each card computes rows alone",
            code: `.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.card {
  display: grid;
  gap: 12px;
}`,
            html: `
<section class="cards broken">
  <article class="card">
    <span class="tag">Pattern</span>
    <h3>Short title</h3>
    <p class="meta">Updated 2 hours ago</p>
    <button>Open pattern</button>
  </article>
  <article class="card">
    <span class="tag">Pattern</span>
    <h3>Very long title that wraps into a second line and pushes everything lower</h3>
    <p class="meta">Updated 2 hours ago</p>
    <button>Open pattern</button>
  </article>
</section>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f8fafc; }
.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 20px;
}
.card {
  display: grid;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: white;
  border: 1px solid #cbd5e1;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}
.tag {
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: #fee2e2;
  color: #b91c1c;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
h3 {
  margin: 0;
  color: #0f172a;
  font-size: 20px;
  line-height: 1.15;
}
.meta {
  margin: 0;
  color: #64748b;
  font-size: 14px;
}
button {
  margin-top: 6px;
  border: none;
  border-radius: 12px;
  padding: 10px 14px;
  background: #ef4444;
  color: white;
  font-weight: 700;
}
`,
            description:
              "The second title creates a taller heading row, so the metadata and button no longer line up with the first card.",
          },
          right: {
            label: "✅ Cards inherit the same rows",
            code: `.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto auto 1fr auto;
  gap: 16px;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 4;
}`,
            html: `
<section class="cards fixed">
  <article class="card">
    <span class="tag">Pattern</span>
    <h3>Short title</h3>
    <p class="meta">Updated 2 hours ago</p>
    <button>Open pattern</button>
  </article>
  <article class="card">
    <span class="tag">Pattern</span>
    <h3>Very long title that wraps into a second line and pushes everything lower</h3>
    <p class="meta">Updated 2 hours ago</p>
    <button>Open pattern</button>
  </article>
</section>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #eff6ff; }
.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto auto 1fr auto;
  gap: 16px;
  padding: 20px;
}
.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 4;
  gap: 12px;
  padding: 16px;
  border-radius: 18px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: 0 14px 32px rgba(37, 99, 235, 0.12);
}
.tag {
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
h3 {
  margin: 0;
  color: #0f172a;
  font-size: 20px;
  line-height: 1.15;
}
.meta {
  margin: 0;
  color: #64748b;
  font-size: 14px;
  align-self: end;
}
button {
  border: none;
  border-radius: 12px;
  padding: 10px 14px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}
`,
            description:
              "Both cards share the same outer row tracks, so the dates and buttons align even when the headings are different heights.",
          },
        },
      },
      {
        type: "workflow",
        data: {
          title: "A Practical `subgrid` Setup",
          steps: [
            {
              number: 1,
              title: "Define the parent grid tracks",
              description:
                "Put the row or column structure on the shared parent that owns the section layout.",
            },
            {
              number: 2,
              title: "Make the child a grid too",
              description:
                "Each card or panel still uses `display: grid`, but instead of declaring new tracks, it inherits with `subgrid`.",
            },
            {
              number: 3,
              title: "Span the right number of tracks",
              description:
                "Use `grid-row: span N` or `grid-column: span N` so the child participates in the shared structure correctly.",
            },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Where `subgrid` shines most",
          content:
            "Use it for card decks, pricing tables, article teasers, and dashboard panels where repeated nested parts should stay aligned across siblings. It is much cleaner than hard-coding heights or using JavaScript measurements.",
        },
      },
    ],
  },
};
