import type { Topic } from "@/types/topic";

export const logicalBorderRadius: Topic = {
  id: "logical-border-radius",
  name: "Logical Border Radius Respects Writing Modes",
  categoryId: "layout",
  description:
    "Physical corner properties like top-left break down in RTL and vertical layouts. Logical corner properties keep UI intent intact.",
  tags: ["layout", "logical-properties", "border-radius", "rtl", "writing-mode"],
  route: "/topics/logical-border-radius",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Corners Have Direction Too",
          content:
            "Most teams learn logical padding and margin first, then forget that corners have the same problem. A badge, tooltip, or chat bubble with a 'leading edge' corner shape should adapt when the writing direction changes. Physical properties like `border-top-left-radius` freeze the design to one document direction. Logical corner properties keep the shape attached to the right semantic edge instead.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Physical Corner vs Logical Corner",
          left: {
            label: "Physical radius",
            code: `.bubble {
  border-top-left-radius: 0;
}`,
            description:
              "Looks correct only for one direction because the chosen corner is tied to a fixed physical side.",
          },
          right: {
            label: "Logical radius",
            code: `.bubble {
  border-start-start-radius: 0;
}`,
            description:
              "The intended corner stays attached to the start side of the content flow, including RTL and vertical writing modes.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "A small change that future-proofs components",
          content:
            "If a component already uses logical spacing and logical borders, finish the job with logical corner radii too. It keeps directional UI patterns much more robust.",
        },
      },
    ],
  },
};
