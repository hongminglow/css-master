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
