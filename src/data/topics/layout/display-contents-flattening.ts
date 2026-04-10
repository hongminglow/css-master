import type { Topic } from "@/types/topic";

export const displayContentsFlattening: Topic = {
  id: "display-contents-flattening",
  name: "Display Contents for DOM Flattening",
  categoryId: "layout",
  description: "How to virtually remove wrapper elements from layout calculations without changing HTML structure.",
  tags: ["layout", "display: contents", "flexbox", "grid", "wrapper"],
  route: "/topics/display-contents-flattening",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Semantic Wrapper Problem",
          content: "Sometimes you need an HTML wrapper for semantics or JavaScript hooks, but that wrapper ruins your CSS Grid or Flexbox layout because those layouts only affect direct children. `display: contents;` makes the container disappear for layout purposes, making its children act as direct children of the next ancestor up.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Standard Wrapper vs Display Contents",
          left: {
            label: "Regular Wrapper",
            code: `.flex-container {
  display: flex;
  gap: 16px;
}
.wrapper {
  /* Acts as a single flex item */
}
.item {
  /* Internal layout */
}`,
          },
          right: {
            label: "With display: contents",
            code: `.flex-container {
  display: flex;
  gap: 16px;
}
.wrapper {
  display: contents; /* Vamoosh! */
}
.item {
  /* Now acts as direct flex items */
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div class="grid-container" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; padding: 1rem; background: #1e293b; border-radius: 8px;">
  <div style="padding: 1rem; background: #3b82f6; border-radius: 4px;">Item 1</div>
  
  <!-- The problematic wrapper -->
  <div class="wrapper" style="display: contents;">
    <div style="padding: 1rem; background: #ef4444; border-radius: 4px;">Item 2</div>
    <div style="padding: 1rem; background: #22c55e; border-radius: 4px;">Item 3</div>
  </div>
</div>`,
          css: `/* Toggle off display: contents to see the grid break */
.wrapper {
  display: contents; 
}`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Best Practices",
          dos: [
            "Use to preserve semantic HTML like `<form>` or `<ul>` inside a Grid",
            "Use for component-based frameworks (like React) when a component outputs a wrapper div that breaks layout",
          ],
          donts: [
            "Don't use if you need background, border, or padding on the wrapper (they will be ignored)",
            "Don't overuse as a substitute for good HTML structure",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Accessibility History",
          content: "Historically, some screen readers dropped elements with `display: contents` from the accessible tree. This is largely fixed in modern browsers, but keep it in mind if supporting older environments.",
        },
      },
    ],
  },
};
