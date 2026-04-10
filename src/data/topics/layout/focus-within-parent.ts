import type { Topic } from "@/types/topic";

export const focusWithinParent: Topic = {
  id: "focus-within-parent",
  name: "Styling Parents with :focus-within",
  categoryId: "layout",
  description: "A highly useful CSS pseudo-class that detects if any descendant element has focus.",
  tags: ["layout", "focus", "focus-within", "forms", "accessibility", "ux"],
  route: "/topics/focus-within-parent",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Outward Flow",
          content: "CSS generally cascades downwards (styling children based on parents). But what if you want to highlight an entire complex form card or a search bar container, just because the user clicked on a tiny `<input>` deep inside it? `:focus-within` triggers styles on a parent element when *any* of its children receive focus.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.search-container {
  border: 1px solid #334155;
  background: #0f172a;
  transition: all 0.3s ease;
}

/* When the input INSIDE gets focused, the PARENT gets the ring! */
.search-container:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  background: #1e293b;
}

.search-input {
  outline: none; /* Remove default browser focus since parent handles it */
  background: transparent;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .smart-card {
    padding: 1.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    background: #1e293b;
    transition: all 0.2s;
  }
  .smart-card:focus-within {
    border-color: #3b82f6;
    background: #0f172a;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  }
</style>

<div class="smart-card">
  <h3 style="margin-top: 0; color: white;">Interactive Login Card</h3>
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <input type="text" placeholder="Username" style="padding: 0.5rem; border-radius: 4px; border: none; outline: none; background: #334155; color: white;">
    <input type="password" placeholder="Password" style="padding: 0.5rem; border-radius: 4px; border: none; outline: none; background: #334155; color: white;">
  </div>
  <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 0;">Clicking any input highlights the ENTIRE card!</p>
</div>`,
          css: `/* A single pseudo-class replaces complex JavaScript focus/blur event listeners */`,
        },
      },
      {
        type: "workflow",
        data: {
          title: "Common Use Cases",
          steps: [
            {
              number: 1,
              title: "Icon Input Groups",
              description: "Highlighting a search icon inside a container when the text input next to it is focused.",
            },
            {
              number: 2,
              title: "Table Rows",
              description: "Highlighting an entire `<tr>` when a user tabs into an action button or checkbox within that row.",
            },
            {
              number: 3,
              title: "Dropdown Menus",
              description: "Keeping a mega-menu visible (`opacity: 1`) as long as the user's focus is tabbing through links inside of it.",
            },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: ":has(:focus)",
          content: "You can achieve structurally similar results using `.parent:has(:focus)`. While `:has()` is extremely powerful, `:focus-within` has been supported across browsers for much longer.",
        },
      },
    ],
  },
};
