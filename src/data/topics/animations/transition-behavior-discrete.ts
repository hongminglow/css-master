import type { Topic } from "@/types/topic";

export const transitionBehaviorDiscrete: Topic = {
  id: "transition-behavior-discrete",
  name: "Transition Behavior Handles Discrete State Changes",
  categoryId: "animations",
  description:
    "Properties like display traditionally snapped on and off. `transition-behavior: allow-discrete` opens the door to cleaner open and close states.",
  tags: ["animations", "transitions", "display", "transition-behavior", "ui-state"],
  route: "/topics/transition-behavior-discrete",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Not Every Property Interpolates",
          content:
            "CSS transitions feel easy when a value can blend between two numbers, like opacity or transform. But some properties are discrete: they flip from one state to another with no in-between. That is why hiding and revealing overlays, menus, and drawers has historically required extra wrapper hacks or JavaScript state choreography. `transition-behavior: allow-discrete` gives CSS a better native story for these state changes.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Old Hack vs Native Discrete Transition Support",
          left: {
            label: "Older pattern",
            code: `.menu {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px);
}

.menu.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}`,
            description:
              "Developers often had to keep the element mounted and fake open or closed states with opacity and pointer events alone.",
          },
          right: {
            label: "Modern pattern",
            code: `.menu {
  transition:
    opacity 200ms ease,
    transform 200ms ease,
    display 200ms allow-discrete;
  transition-behavior: allow-discrete;
}
`,
            description:
              "Discrete state changes can participate more cleanly in transition logic, which reduces some of the wrapper-and-class juggling.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Treat it as progressive enhancement",
          content:
            "This area of CSS is still newer than plain opacity and transform transitions. Use it where supported, but keep your component architecture resilient so the UI still behaves correctly when the discrete enhancement is unavailable.",
        },
      },
    ],
  },
};
