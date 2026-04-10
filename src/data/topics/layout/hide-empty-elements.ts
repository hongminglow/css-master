import type { Topic } from "@/types/topic";

export const hideEmptyElements: Topic = {
  id: "hide-empty-elements",
  name: "Cleaning Up the :empty State",
  categoryId: "layout",
  description: "Using the :empty pseudo-class to automatically hide containers that fail to render content, preventing weird floating padding boxes.",
  tags: ["layout", "selectors", "empty", "styling", "defensive-css"],
  route: "/topics/hide-empty-elements",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Empty Dot Bug",
          content: "You build a beautiful notification pill. It has `padding: 4px 12px`, a red `background`, and a `border-radius`. When the user has 3 notifications, it looks great. When the user has 0 notifications, your React app renders an empty `<span></span>`. But wait! CSS still renders the padding and background, resulting in a weird, tiny floating red dot! Defensive CSS anticipates this using the `:empty` selector.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "The Default Trap vs Defensive CSS",
          left: {
            label: "The Standard Trap",
            code: `.notification-pill {
  background: red;
  padding: 4px 12px;
  border-radius: 99px;
  /* If content is missing, the 
     box still takes up space! */
}`,
          },
          right: {
            label: "Defensive CSS",
            code: `.notification-pill {
  background: red;
  padding: 4px 12px;
  border-radius: 99px;
}

/* If there is no text inside... 
   completely kill the element! */
.notification-pill:empty {
  display: none;
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 3rem; justify-content: center; padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
    <span style="color: #64748b; font-size: 0.8rem;">Without :empty fix</span>
    
    <!-- Has content -->
    <span style="background: #ef4444; color: white; padding: 4px 12px; border-radius: 99px;">3</span>
    
    <!-- Empty (The Bug) -->
    <span style="background: #ef4444; color: white; padding: 4px 12px; border-radius: 99px;"></span>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
    <span style="color: #64748b; font-size: 0.8rem;">With :empty { display: none }</span>
    
    <!-- Has content -->
    <span style="background: #10b981; color: white; padding: 4px 12px; border-radius: 99px;">3</span>
    
    <!-- Empty (Perfectly hidden) -->
    <span style="display: none; background: #10b981; color: white; padding: 4px 12px; border-radius: 99px;"></span>
  </div>

</div>`,
          css: `/* This saves you from having to write complex conditional rendering logic in your JavaScript framework (e.g. {count > 0 && <span>{count}</span>}). */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Whitespace Matters",
          content: "The `:empty` selector is extremely literal. If your HTML contains even a single space or line-break (`<span> </span>`), it is NOT considered empty by CSS! Be sure your HTML renders as entirely flush `<span></span>` for this to work natively.",
        },
      },
    ],
  },
};
