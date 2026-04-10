import type { Topic } from "@/types/topic";

export const viewTransitionsPageMorphs: Topic = {
  id: "view-transitions-page-morphs",
  name: "View Transitions Create Smoother Route Changes",
  categoryId: "animations",
  description:
    "The View Transitions API makes route and state changes feel less abrupt by giving the browser a built-in transition model between old and new views.",
  tags: ["animations", "view-transitions", "routing", "page-transition", "ui"],
  route: "/topics/view-transitions-page-morphs",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "State Changes Feel Better When They Have Continuity",
          content:
            "Traditional web navigation tends to swap one tree for another instantly. Even in SPAs, state changes often feel abrupt because the browser does not know how the old and new views relate. The View Transitions API introduces a native model for animating between snapshots of those views, which can make route changes and major UI state changes feel far more cohesive.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Instant Swap vs View Transition",
          left: {
            label: "Instant route change",
            code: `navigate("/details");`,
            description:
              "The next screen replaces the previous one immediately, which is functional but visually abrupt.",
          },
          right: {
            label: "Transitioned route change",
            code: `document.startViewTransition(() => {
  navigate("/details");
});`,
            description:
              "The browser gets a chance to animate between the old and new states, which adds continuity without a full animation framework.",
          },
        },
      },
      {
        type: "workflow",
        data: {
          title: "The Practical Upgrade Path",
          steps: [
            {
              number: 1,
              title: "Wrap the important state change",
              description:
                "Start by placing the route navigation or major UI swap inside `document.startViewTransition(...)` so the browser can coordinate the before and after snapshots.",
            },
            {
              number: 2,
              title: "Name the elements that should persist",
              description:
                "Use `view-transition-name` on cards, thumbnails, or headings that conceptually continue into the next screen.",
            },
            {
              number: 3,
              title: "Keep the motion understated",
              description:
                "The best transitions simply preserve context. If the movement calls attention to itself more than the content, it is doing too much.",
            },
          ],
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Shared Element Example",
          code: `/* Source card and destination hero share a transition identity */
.product-card__image,
.product-page__hero {
  view-transition-name: product-hero;
}

/* Trigger the transition around the route update */
document.startViewTransition(() => {
  navigate("/product/42");
});`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Use motion to preserve context",
          content:
            "The best view transitions are not flashy. They simply help the user understand that the new UI came from the previous one, rather than appearing out of nowhere.",
        },
      },
    ],
  },
};
