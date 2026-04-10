import type { Topic } from "@/types/topic";

export const targetPseudoClass: Topic = {
  id: "target-pseudo-class",
  name: "The :target Pseudo-Class",
  categoryId: "layout",
  description: "Creating functioning tabs, accordions, and modals without a single line of JavaScript.",
  tags: ["layout", "target", "ui", "no-js", "tabs", "modals"],
  route: "/topics/target-pseudo-class",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "State Management via URL",
          content: "The `:target` pseudo-class represents a unique element (the target element) with an `id` matching the URL's fragment (the part after the `#`). This allows the browser address bar to act as your application's state engine. By clicking `href=\"#tab2\"`, the element with `id=\"tab2\"` immediately matches the `:target` CSS selector, allowing you to reveal or style it.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.modal-container {
  display: none;
}

/* When the URL ends in #my-modal, this selector activates! */
#my-modal:target {
  display: flex;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="padding: 2rem; background: #0f172a; border-radius: 8px;">
  <style>
    .no-js-tab {
      display: none;
      padding: 1rem;
      background: #1e293b;
      margin-top: 1rem;
      border-radius: 4px;
      color: white;
    }
    
    /* The Magic */
    #tab-a:target, #tab-b:target {
      display: block;
    }
  </style>

  <div style="display: flex; gap: 1rem;">
    <!-- Links that mutate the URL Hash -->
    <a href="#tab-a" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 4px;">Open Tab A</a>
    <a href="#tab-b" style="padding: 0.5rem 1rem; background: #ef4444; color: white; text-decoration: none; border-radius: 4px;">Open Tab B</a>
    <a href="#!" style="padding: 0.5rem 1rem; background: #334155; color: white; text-decoration: none; border-radius: 4px;">Close All</a>
  </div>

  <!-- Intentionally hidden by default -->
  <div id="tab-a" class="no-js-tab">
    <h3>Welcome to Tab A</h3>
    <p>This was revealed because the URL now ends in #tab-a.</p>
  </div>
  
  <div id="tab-b" class="no-js-tab">
    <h3 style="color: #ef4444;">Welcome to Tab B</h3>
    <p>Notice how you didn't need React State to trigger this.</p>
  </div>
</div>`,
          css: `/* Click the links! Since modern browsers handle hash routing perfectly, the :target selector takes care of the visibility. */`,
        },
      },
      {
        type: "workflow",
        data: {
          title: "The URL State Pattern",
          steps: [
            {
              number: 1,
              title: "Create Identifiers",
              description: "Give your hidden sections unique `id` attributes (`id=\"menu\"`).",
            },
            {
              number: 2,
              title: "Create Triggers",
              description: "Use standard anchor tags to point to them (`href=\"#menu\"`).",
            },
            {
              number: 3,
              title: "Create Close Triggers",
              description: "Provide a 'Back' or 'Close' link that points anywhere else (`href=\"#\"` or `href=\"#!\"`).",
            },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "danger",
          title: "The Jump Behavior",
          content: "Because standard `#hash` routing is designed for document anchors, the browser will attempt to physically scroll to the target element. To avoid this jarring page jump, modern developers pair this trick with `overscroll-behavior-y: none;` or use elements positioned physically near the top of the viewport.",
        },
      },
    ],
  },
};
