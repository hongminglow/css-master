import { Topic } from "@/types/topic";

export const pointerEventsOverlays: Topic = {
  id: "pointer-events-overlays",
  name: "Click-Through Overlays",
  categoryId: "layout",
  description: "Using pointer-events: none to create non-blocking overlays and restoring interactivity on children.",
  tags: ["layout", "pointer-events", "overlay", "clicks", "z-index"],
  route: "/topics/pointer-events-overlays",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Ghost Overlay Trick",
          content: "Often, you need a full-screen overlay (like falling snow, a global gradient vignette, or a toast notification container) that sits on top of everything (`z-index: 9999`). But if it covers the screen, you can't click the things underneath! `pointer-events: none` makes the overlay invisible to the mouse, letting clicks pass right through it.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Blocking vs Non-Blocking",
          description: "Restoring interactivity to specific children.",
          left: {
            label: "The Problem",
            code: `.notification-wrapper {
  position: fixed;
  inset: 0;
  z-index: 50;
  /* Blocks all clicks on the page */
}`,
          },
          right: {
            label: "The Solution",
            code: `.notification-wrapper {
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none; /* Let clicks pass */
}

.notification-toast {
  /* Restore clicks on the actual toast */
  pointer-events: auto; 
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="position: relative; height: 160px; background: #1e293b; border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
  <button style="background: #3b82f6; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer; color: white; border: none; font-weight: bold; position: relative; z-index: 1;" onclick="alert('Button Clicked!')">
    Try to Click Me!
  </button>
  
  <!-- Full wrapper overlay -->
  <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(255,0,0,0.2), rgba(0,0,255,0.2)); z-index: 10; pointer-events: none; display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem;">
    <!-- Child toast restoring events -->
    <div style="background: #0f172a; border: 1px solid #334155; padding: 1rem; border-radius: 6px; pointer-events: auto; color: white;">
      Toast Notification (Hover/Click me too)
    </div>
  </div>
</div>`,
          css: `/* The gradient overlay covers the button visually but pointer-events: none allows the click to pass through to the button */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Implementation Rules",
          dos: [
            "Use for particle effects, floating decorative elements, or large click-catching wrappers.",
            "Always manually apply `pointer-events: auto` or `all` to children inside the overlay that actually need interactions.",
          ],
          donts: [
            "Don't rely on it for security (a user can just inspect and remove it to click things).",
            "Don't forget that it disables hover (`:hover`) and active states as well as clicks.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Browser Support",
          content: "`pointer-events` for HTML elements enjoys excellent cross-browser support (including all modern browsers). Originally, it was only completely supported for SVG.",
        },
      },
    ],
  },
};
