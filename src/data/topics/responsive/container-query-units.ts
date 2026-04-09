import type { Topic } from "@/types/topic";

export const containerQueryUnits: Topic = {
  id: "container-query-units",
  name: "Container Query Units Scale Components Locally",
  categoryId: "responsive",
  description:
    "Units like cqw let typography and spacing respond to the component's container instead of the entire viewport.",
  tags: ["responsive", "container-queries", "cqw", "units", "components", "scaling"],
  route: "/topics/container-query-units",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Viewport Units Are Too Global for Reusable Components",
          content:
            "Viewport units are great when the whole screen is the context, but they are a poor fit for components placed in sidebars, grids, or cards. Container query units like `cqw` and `cqi` fix that by measuring against the nearest query container. That means a component can size its own typography, padding, and decoration based on the room it actually received.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Viewport-Driven Scaling vs Container-Driven Scaling",
          left: {
            label: "Viewport units",
            code: `.title {
  font-size: clamp(1.25rem, 4vw, 2rem);
}`,
            description:
              "The component reacts to the full window, even when it is trapped inside a narrow sidebar or grid column.",
          },
          right: {
            label: "Container units",
            code: `.card {
  container-type: inline-size;
}

.title {
  font-size: clamp(1.25rem, 6cqw, 2rem);
}`,
            description:
              "The component sizes itself against its own container, which is far more reusable across different placements.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "This pairs beautifully with container queries",
          content:
            "Use container query units for continuous scaling and `@container` rules for structural shifts. Together they make components feel truly local instead of screen-dependent.",
        },
      },
    ],
  },
};
