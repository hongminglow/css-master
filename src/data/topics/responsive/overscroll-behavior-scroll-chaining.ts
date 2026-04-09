import type { Topic } from "@/types/topic";

export const overscrollBehaviorScrollChaining: Topic = {
  id: "overscroll-behavior-scroll-chaining",
  name: "Overscroll Behavior Stops Scroll Chaining",
  categoryId: "responsive",
  description:
    "Prevent nested scroll areas like modals and side panels from leaking momentum and dragging the whole page underneath.",
  tags: ["responsive", "overscroll-behavior", "scroll", "modal", "ux", "mobile"],
  route: "/topics/overscroll-behavior-scroll-chaining",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Modal Scroll Leak",
          content:
            "You scroll inside a modal or drawer, hit the top or bottom, and suddenly the page behind it starts moving. That handoff is called scroll chaining, and it makes overlays feel cheap. `overscroll-behavior` lets you contain scroll momentum inside the intended surface so nested scrollers behave like real app panels.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Leaky Scroll vs Contained Scroll",
          left: {
            label: "Default behavior",
            code: `.modal-body {
  overflow-y: auto;
  max-height: 24rem;
}`,
            description:
              "When the inner scroller hits its limit, wheel or touch momentum can bubble into the page behind it.",
          },
          right: {
            label: "Contain overscroll",
            code: `.modal-body {
  overflow-y: auto;
  max-height: 24rem;
  overscroll-behavior: contain;
}`,
            description:
              "The modal keeps the interaction to itself, which feels much more stable on touchpads, wheels, and mobile gestures.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Common Places to Use It",
          code: `.sheet__body,
.modal__content,
.filters-panel,
.chat-messages {
  overflow: auto;
  overscroll-behavior: contain;
}

/* For full-page apps that should suppress browser pull behaviors */
html, body {
  overscroll-behavior-y: none;
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "This is a UX detail users notice",
          content:
            "A contained scroll surface feels more native and more trustworthy. It is one of those tiny CSS rules that makes an app panel stop feeling like a webpage glued on top of another webpage.",
        },
      },
    ],
  },
};
