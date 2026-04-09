import type { Topic } from "@/types/topic";

export const prefersReducedMotionStrategy: Topic = {
  id: "prefers-reduced-motion-strategy",
  name: "Prefers Reduced Motion Should Shape Animation Strategy",
  categoryId: "animations",
  description:
    "Motion-sensitive users need more than a token media query. CSS can help you design calmer transitions intentionally.",
  tags: ["animations", "accessibility", "reduced-motion", "ux", "media-query"],
  route: "/topics/prefers-reduced-motion-strategy",
  content: {
    sections: [
      {
        type: "quote",
        data: {
          quote:
            "Reduced motion is not about removing delight. It is about removing unnecessary physical strain.",
          author: "Accessible motion design principle",
        },
      },
      {
        type: "card",
        data: {
          title: "The Goal Is Not Just Animation Off",
          content:
            "A lot of teams add a `prefers-reduced-motion` query late and simply zero out every duration. That is better than nothing, but it is often not enough. The more thoughtful pattern is to replace large transforms, parallax, and springy movement with calmer fades, shorter durations, and fewer chained effects. CSS media queries make that strategy straightforward to encode.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "A More Intentional Reduced Motion Pattern",
          code: `.panel {
  transition:
    opacity 240ms ease,
    transform 240ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .panel {
    transition: opacity 120ms linear;
  }

  .panel--enter,
  .panel--exit {
    transform: none;
  }
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Reduce displacement first",
          content:
            "Large movement across the screen is often more problematic than a small opacity change. Start by removing distance and complexity, not just by setting every animation to zero.",
        },
      },
    ],
  },
};
