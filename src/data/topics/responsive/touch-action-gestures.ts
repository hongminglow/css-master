import type { Topic } from "@/types/topic";

export const touchActionGestures: Topic = {
  id: "touch-action-gestures",
  name: "Controlling Touch with Touch-Action",
  categoryId: "responsive",
  description: "Fixing gesture conflicts, tap delays, and unwanted zooms on mobile web.",
  tags: ["responsive", "touch", "mobile", "gestures", "zoom"],
  route: "/topics/touch-action-gestures",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Mobile Gesture Problem",
          content: "Mobile browsers implement default gestures: pinching to zoom, double-tapping to zoom, or swiping to navigate. Sometimes these conflict with your custom UI, like a swipeable carousel or a rapid-click game. `touch-action` declares which gestures the browser should handle natively vs pass to your JavaScript, completely eliminating annoying side-effects.",
        },
      },
      {
        type: "table",
        data: {
          title: "Common Touch-Action Values",
          headers: ["Value", "Definition", "Use Case"],
          rows: [
            ["`auto`", "Browser handles everything natively.", "Default behavior."],
            ["`manipulation`", "Allows panning and pinch-zoom, disables double-tap zoom.", "Put this on buttons to remove the dreaded 300ms click delay."],
            ["`pan-x`", "Browser only handles horizontal scrolling.", "Use on custom vertical sliders."],
            ["`pan-y`", "Browser only handles vertical scrolling.", "Use on custom horizontal carousels to prevent diagonal swipe issues."],
            ["`none`", "Disables all native zooming and panning.", "Canvas games or interactive maps (like Google Maps)."],
          ],
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* Fix for custom horizontal carousel wrappers */
.carousel-wrapper {
  overflow-x: auto;
  /* Swiping left/right works natively perfectly */
  /* Swiping up/down will just scroll the page, avoiding "stuck" diagonal drags */
  touch-action: pan-y;
}

/* Fix for buttons that users might tap rapidly */
button.rapid-fire {
  /* Disables double-tap zoom, giving instant click response */
  touch-action: manipulation;
}`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Use it Responsibly",
          dos: [
            "Use `manipulation` on heavily interacted UI elements like calculators or keypads.",
            "Use `pan-y` or `pan-x` on 1-dimensional scrollable zones.",
          ],
          donts: [
            "Don't use `touch-action: none` on the `body` or standard pages. It breaks accessibility and traps users.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "The 300ms Delay Killer",
          content: "Historically, mobile browsers waited 300ms after a tap to see if you were going to tap again to zoom. Applying `touch-action: manipulation` tells the browser 'this won't zoom', instantly firing the click event with zero latency.",
        },
      },
    ],
  },
};
