import { Topic } from "@/types/topic";

export const cssColumnsMasonry: Topic = {
  id: "css-columns-masonry",
  name: "CSS Columns for Cheap Masonry",
  categoryId: "layout",
  description: "Using CSS multi-column layout for a quick and easy Pinterest-style masonry grid.",
  tags: ["layout", "masonry", "columns", "grid", "break-inside"],
  route: "/topics/css-columns-masonry",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Masonry Dilemma",
          content: "True masonry layout (like Pinterest) has historically required JavaScript libraries like Masonry.js because CSS Grid places items in fixed rows. While native CSS Grid level 3 masonry is coming, you can achieve a very convincing masonry effect right now using CSS Multi-column (`column-count`).",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Grid vs Columns",
          description: "Why standard Grid fails at masonry and how Columns fix it.",
          left: {
            label: "CSS Grid (Leaves gaps)",
            code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
/* Items leave vertical gaps if their 
   siblings are taller. */`,
          },
          right: {
            label: "CSS Columns (Masonry)",
            code: `.masonry {
  column-count: 3;
  column-gap: 1rem;
}
.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="column-count: 3; column-gap: 1rem; width: 100%;">
  <!-- Tall item -->
  <div style="background: #3b82f6; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; height: 120px; break-inside: avoid;">1</div>
  <!-- Short item -->
  <div style="background: #ef4444; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; height: 60px; break-inside: avoid;">2</div>
  <!-- Medium item -->
  <div style="background: #22c55e; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; height: 90px; break-inside: avoid;">3</div>
  <!-- Tall item -->
  <div style="background: #eab308; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; height: 140px; break-inside: avoid;">4</div>
  <!-- Short item -->
  <div style="background: #a855f7; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; height: 70px; break-inside: avoid;">5</div>
  <!-- Medium item -->
  <div style="background: #ec4899; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; height: 100px; break-inside: avoid;">6</div>
</div>`,
          css: `/* 
Note: Items render top-to-bottom, then left-to-right. 
They do NOT render left-to-right, then top-to-bottom.
*/`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "The Top-to-Bottom Caveat",
          content: "CSS Columns render items sequentially vertically. Item 1 is in column 1, Item 2 is below it. It only moves to column 2 when column 1 is full. If you need left-to-right sequential ordering (Item 1 in col 1, Item 2 in col 2), this CSS-only method will not work for you; you'll still need JavaScript.",
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Break-Inside",
          dos: [
            "ALWAYS use `break-inside: avoid` on the children so items aren't chopped in half across columns.",
          ],
          donts: [
            "Don't use `gap` instead of `column-gap` and `margin-bottom`; columns manage gaps differently than Grid/Flexbox.",
          ],
        },
      },
    ],
  },
};
