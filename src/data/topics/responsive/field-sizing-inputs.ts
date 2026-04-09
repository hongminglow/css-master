import type { Topic } from "@/types/topic";

export const fieldSizingInputs: Topic = {
  id: "field-sizing-inputs",
  name: "Field Sizing Helps Inputs Fit Content",
  categoryId: "responsive",
  description:
    "Inputs and textareas usually default to awkward fixed sizing. Field sizing gives them a more content-aware behavior.",
  tags: ["responsive", "forms", "field-sizing", "inputs", "textarea", "ui"],
  route: "/topics/field-sizing-inputs",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Form Controls Often Feel Less Adaptive Than the Rest of the UI",
          content:
            "We spend a lot of time making cards, grids, and type scale intelligently, but inputs often stay stuck with legacy sizing behavior. `field-sizing: content` gives certain form fields a more natural relationship to their content, which can make search bars, tag editors, and compact utility inputs feel much smarter.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Fixed Field Sizing vs Content-Based Field Sizing",
          left: {
            label: "Default field sizing",
            code: `input, textarea {
  width: 100%;
}`,
            description:
              "Controls take the assigned box size even when the interface would benefit from a more content-aware fit.",
          },
          right: {
            label: "Content field sizing",
            code: `input, textarea {
  field-sizing: content;
}`,
            description:
              "Useful for experiences where the field should feel closer to the entered content, especially in compact or utility-driven UI.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Use intentionally, not everywhere",
          content:
            "Most ordinary forms still benefit from predictable full-width controls. Reach for content-based sizing when the control is part of a more dynamic or compact interaction pattern.",
        },
      },
    ],
  },
};
