import type { Topic } from "@/types/topic";

export const textWrapPretty: Topic = {
  id: "text-wrap-pretty",
  name: "Text Wrap Pretty Improves Paragraph Rag",
  categoryId: "typography",
  description:
    "Paragraphs and supporting copy can wrap more gracefully with fewer awkward breaks and orphaned words.",
  tags: ["typography", "text-wrap", "pretty", "paragraphs", "readability"],
  route: "/topics/text-wrap-pretty",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Not Every Wrap Improvement Is for Headlines",
          content:
            "`text-wrap: balance` is great for short headings, but body copy and supporting paragraphs need a different kind of help. `text-wrap: pretty` asks the browser to avoid especially awkward line endings and poor wrapping decisions. It is subtle, but in editorial and marketing UI that subtlety adds up fast.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Normal Paragraph Wrapping vs Pretty Wrapping",
          left: {
            label: "Default paragraph wrap",
            code: `.copy {
  max-inline-size: 42ch;
}`,
            description:
              "The browser uses its normal wrapping behavior, which can still produce awkward short last lines or less pleasing breaks.",
          },
          right: {
            label: "Pretty wrapping",
            code: `.copy {
  max-inline-size: 42ch;
  text-wrap: pretty;
}`,
            description:
              "The browser makes slightly better wrapping decisions for body copy without requiring manual editing or hard line breaks.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Use the right wrap tool for the right text",
          content:
            "Think `balance` for headlines, `pretty` for paragraphs. They solve related but different readability problems.",
        },
      },
    ],
  },
};
