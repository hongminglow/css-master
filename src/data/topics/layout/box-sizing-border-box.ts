import type {
  Topic,
  CardData,
  TipData,
  TimelineData,
  ComparisonData,
  DosDontsData,
  CodeData,
} from "@/types/topic";

export const boxSizingBorderBox: Topic = {
  id: "box-sizing-border-box",
  name: "Box-Sizing: Border-Box",
  categoryId: "layout",
  description: "Why you should always use box-sizing: border-box",
  tags: ["box-model", "sizing", "best-practice"],
  route: "/topics/box-sizing-border-box",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Box Model Problem",
          content:
            "By default, CSS uses content-box sizing where width and height only apply to the content. Padding and border are added on top, making elements larger than expected. This causes constant math headaches.",
        } as CardData,
      },
      {
        type: "timeline",
        data: {
          title: "Evolution of Box Sizing",
          events: [
            {
              title: "CSS 1 (1996)",
              description:
                "Only content-box available, developers struggled with sizing",
              code: "/* No box-sizing property */",
            },
            {
              title: "IE 6 Quirks Mode",
              description:
                "IE accidentally used border-box in quirks mode — developers loved it",
            },
            {
              title: "CSS3 (2011)",
              description: "box-sizing property officially added to spec",
              code: "box-sizing: border-box;",
            },
            {
              title: "Today (2024+)",
              description:
                "border-box is considered best practice, used in all major CSS frameworks",
            },
          ],
        } as TimelineData,
      },
      {
        type: "comparison",
        data: {
          title: "Content-Box vs Border-Box",
          left: {
            label: "content-box (default)",
            code: `.box {
  width: 200px;
  padding: 20px;
  border: 2px solid;
}

/* Actual width: 244px */
/* 200 + 40 padding + 4 border */`,
            description: "Width excludes padding and border — surprises guaranteed",
          },
          right: {
            label: "border-box (better)",
            code: `.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
}

/* Actual width: 200px */`,
            description: "Width includes padding and border — what you expect",
          },
        } as ComparisonData,
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Universal Box Sizing",
          content:
            "Apply border-box to all elements using the universal selector. This is the first thing you should add to any project.",
        } as TipData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Universal Box Sizing Reset",
          code: `/* Apply to all elements */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Or use inheritance (better for third-party components) */
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}`,
        } as CodeData,
      },
      {
        type: "dosd\u043e\u043dts",
        data: {
          title: "Best Practices",
          dos: [
            "Always use border-box in your CSS reset",
            "Use the inheritance method for better component isolation",
            "Apply it globally at the start of every project",
          ],
          donts: [
            "Don't use content-box unless you have a specific reason",
            "Don't forget to include ::before and ::after pseudo-elements",
            "Don't calculate widths manually when border-box does it for you",
          ],
        } as DosDontsData,
      },
    ],
  },
};
