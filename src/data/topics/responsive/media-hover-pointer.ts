import type { Topic } from "@/types/topic";

export const mediaHoverPointer: Topic = {
  id: "media-hover-pointer",
  name: "Fix 'Sticky Hover' on Mobile",
  categoryId: "responsive",
  description: "The CSS trick to guarantee that :hover states don't permanently stick to buttons when tapped on touchscreen mobile devices.",
  tags: ["responsive", "hover", "mobile", "touch", "media-query", "pointer"],
  route: "/topics/media-hover-pointer",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Mobile Hover Ghost",
          content: "You've definitely experienced this bug: you design a gorgeous card that turns blue on `:hover`. A mobile user taps the card on their iPhone. The card executes the tap, but gets permanently stuck in the blue `:hover` state until the user physically taps somewhere else on the screen. Mobile browsers emulate hover to prevent menus from breaking, but it ruins UI feedback. We fix this with Interaction Media Queries.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "The Standard Trap vs The Solution",
          left: {
            label: "Causes 'Sticky Hover'",
            code: `.social-button {
  background: white;
}

/* This applies to mice AND fingers 
   that just tapped! */
.social-button:hover {
  background: blue;
}`,
          },
          right: {
            label: "Hardware Aware",
            code: `.social-button {
  background: white;
}

/* ONLY applies if the primary input 
   device supports true hovering! */
@media (hover: hover) {
  .social-button:hover {
    background: blue;
  }
}`,
          },
        },
      },
      {
        type: "workflow",
        data: {
          title: "Interaction Queries Explained",
          steps: [
            {
              number: 1,
              title: "@media (hover: hover)",
              description: "True if the primary input mechanism is a mouse or trackpad. Wrap all your purely decorative `:hover` states in this.",
            },
            {
              number: 2,
              title: "@media (hover: none)",
              description: "True if the primary input is a touchscreen. Good for enlarging tap targets or keeping critical hidden labels permanently visible since users can't hover to reveal them.",
            },
            {
              number: 3,
              title: "@media (pointer: coarse)",
              description: "Detects low-accuracy inputs like human fingers, or Wii Remotes. Excellent for drastically increasing `padding` on lists for fat-finger safety.",
            },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "What about the Active State?",
          content: "If you trap `:hover` inside `@media (hover: hover)`, your mobile users get absolutely zero UI feedback when they tap a button. Remember to define `:active` styles OUTSIDE the media query. `:active` triggers perfectly on mobile taps instantly upon contact.",
        },
      },
    ],
  },
};
