import type {
  Topic,
  CardData,
  CodeData,
} from "@/types/topic";

export const gridAutoFit: Topic = {
  id: "grid-auto-fit",
  name: "Grid Auto-Fit",
  categoryId: "layout",
  description: "Create responsive grids without media queries",
  tags: ["grid", "responsive", "layout"],
  route: "/topics/grid-auto-fit",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Why This Works",
          content:
            "CSS Grid auto-fit automatically creates as many columns as will fit in the container, making your layout responsive without a single media query. Combine with minmax() to set min/max column widths.",
        } as CardData,
      },
      {
        type: "comparison",
        data: {
          title: "auto-fill vs auto-fit",
          left: {
            label: "auto-fill",
            code: `grid-template-columns:
  repeat(auto-fill, minmax(200px, 1fr));

/* Creates empty columns to fill space */`,
            description: "Keeps ghost columns when there are fewer items",
          },
          right: {
            label: "auto-fit (recommended)",
            code: `grid-template-columns:
  repeat(auto-fit, minmax(200px, 1fr));

/* Collapses empty columns */`,
            description: "Items expand to fill available space — usually what you want",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Responsive Grid — No Media Queries",
          code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* That's it! Columns adjust automatically:
   - Wide screen → 4-5 columns
   - Tablet     → 2-3 columns
   - Mobile     → 1 column
*/`,
        } as CodeData,
      },
      {
        type: "preview",
        data: {
          html: `<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
</div>`,
          css: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 12px;
  padding: 16px;
  background: #f8fafc;
}
.card {
  background: #2563eb;
  color: white;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
}`,
        },
      },
    ],
  },
};
