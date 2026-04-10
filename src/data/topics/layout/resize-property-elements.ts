import type { Topic } from "@/types/topic";

export const resizePropertyElements: Topic = {
  id: "resize-property-elements",
  name: "Draggable Resizing with CSS",
  categoryId: "layout",
  description: "Adding the beloved textarea corner-resize handle to absolutely any div or container.",
  tags: ["layout", "resize", "textarea", "ui", "interactive", "css-trick"],
  route: "/topics/resize-property-elements",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Breaking Out of the Textarea",
          content: "We are all familiar with the little draggable corner handle on `<textarea>` elements that allows users to resize the box. But what if you want to allow a user to resize a sidebar pane, a chat widget, or a data-table column? While JavaScript libraries exist for complex multi-handle dragging, basic bi-directional resizing is a natively supported CSS property that you can throw onto any normal `<div>`.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.resizeable-sidebar {
  width: 250px;       /* Initial width */
  min-width: 150px;   /* Safe minimums! */
  max-width: 500px;   /* Safe maximums! */
  
  /* 1. Add the CSS property */
  resize: horizontal; 
  
  /* 2. CRITICAL: Resize completely fails/ignores you 
        unless overflow is set to something other 
        than 'visible'. */
  overflow: hidden;   
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div style="
    resize: horizontal; 
    overflow: hidden; 
    width: 250px; 
    min-width: 100px;
    max-width: 100%;
    background: #1e293b; 
    border: 1px solid #334155; 
    border-radius: 8px;
    padding: 1.5rem;
    position: relative;
  ">
    <h4 style="color: white; margin-top: 0;">Drag My Corner!</h4>
    <p style="color: #94a3b8; font-size: 0.9rem;">Look at the bottom right corner of this box. Click and drag it to the right.</p>
    
    <!-- Decorative handle icon to make it more obvious -->
    <svg style="position: absolute; bottom: 0; right: 0; pointer-events: none; opacity: 0.5; color: white;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="21 15 15 21"></polyline>
      <polyline points="21 8 8 21"></polyline>
      <polyline points="21 1 1 21"></polyline>
    </svg>
  </div>
  
</div>`,
          css: `/* The native browser handle can be quite small and hard to see depending on the OS. Developers often overlay a transparent, pointer-events-none SVG icon in the corner to make it explicitly obvious for users. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "The Resize Options",
          dos: [
            "`resize: horizontal` is perfect for adjustable sidebars or split-view panes.",
            "`resize: vertical` is great for console logs or code editors.",
            "`resize: both` allows full fluid resizing.",
          ],
          donts: [
            "Don't forget to set `overflow: auto/hidden/scroll`. That's the #1 reason developers think the `resize` property is broken.",
            "Don't forget to set `min-width` and `max-width`, otherwise users can accidentally shrink the box to 0px or break your layout by dragging too far.",
          ],
        },
      },
    ],
  },
};
