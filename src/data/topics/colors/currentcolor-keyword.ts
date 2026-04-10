import type { Topic } from "@/types/topic";

export const currentcolorKeyword: Topic = {
  id: "currentcolor-keyword",
  name: "The Magic of currentColor",
  categoryId: "colors",
  description: "The original CSS variable: how currentColor can dramatically DRY up your component styles.",
  tags: ["colors", "currentcolor", "variables", "svg", "inheritance"],
  route: "/topics/currentcolor-keyword",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "CSS's First Variable",
          content: "Long before CSS Custom Properties (`--var`) existed, CSS had `currentColor`. This keyword resolves exactly to the computed value of the `color` property at that exact node. It sounds simple, but it creates powerful inheritance patterns where you only define a color once, and borders, shadows, backgrounds, and SVGs automatically match it without redefining the hex code.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Hardcoding vs currentColor",
          left: {
            label: "Repetitive (Hardcoded)",
            code: `.button.danger {
  color: #ef4444;
  border: 2px solid #ef4444;
  box-shadow: 0 0 5px #ef4444;
}

.button.danger svg {
  fill: #ef4444;
}`,
          },
          right: {
            label: "DRY (currentColor)",
            code: `.button {
  /* Write this ONCE in the base class! */
  border: 2px solid currentColor;
  box-shadow: 0 0 5px currentColor;
}
.button svg {
  fill: currentColor;
}

/* Now, generating variants is 1 line! */
.button.danger { color: #ef4444; }
.button.success { color: #22c55e; }`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .cc-btn {
    padding: 0.5rem 1rem;
    background: transparent;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    
    /* The Magic Base */
    border: 2px solid currentColor;
    box-shadow: 0 4px 10px -4px currentColor;
  }
  .cc-btn svg {
    /* SVG instantly matches text color */
    fill: currentColor;
  }
  
  /* The incredibly simple variants */
  .c-blue { color: #3b82f6; }
  .c-red { color: #ef4444; }
  .c-green { color: #22c55e; }
</style>

<div style="display: flex; gap: 1rem; padding: 2rem; background: #0f172a; border-radius: 8px;">
  <button class="cc-btn c-blue">
    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg> Primary
  </button>
  <button class="cc-btn c-red">
    <svg width="16" height="16" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg> Danger
  </button>
  <button class="cc-btn c-green">
    <svg width="16" height="16" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/></svg> Success
  </button>
</div>`,
          css: `/* The border, shadow, and SVG fill color are all automatically pulling from the text 'color' property. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Where to use it",
          dos: [
            "Use it inside SVGs (`fill=\"currentColor\"`) so your icons automatically match the text color of the button they are inside.",
            "Use it for underlines, custom borders, and focus rings.",
          ],
          donts: [
            "Don't forget that it cascades. If you set `currentColor` on a background, and the text color changes on hover, the background will instantly change color too (which might make text unreadable if contrast drops).",
          ],
        },
      },
    ],
  },
};
