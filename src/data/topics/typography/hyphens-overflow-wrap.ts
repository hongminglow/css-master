import type { Topic } from "@/types/topic";

export const hyphensOverflowWrap: Topic = {
  id: "hyphens-overflow-wrap",
  name: "Hyphens and Overflow Wrap Save Long Content",
  categoryId: "typography",
  description:
    "Long URLs, product names, and unbroken strings can destroy layouts unless text is allowed to wrap intelligently.",
  tags: ["typography", "hyphens", "overflow-wrap", "word-break", "content"],
  route: "/topics/hyphens-overflow-wrap",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Real Content Is Messier Than Mock Content",
          content:
            "Design mockups love tidy copy, but production content includes long URLs, compound words, product identifiers, tokens, and filenames. Those strings can easily blow up cards or tables. CSS gives you several tools for damage control, and knowing the difference between them matters a lot.",
        },
      },
      {
        type: "table",
        data: {
          title: "Wrapping Tools for Difficult Text",
          headers: ["Property", "What It Does", "Best Use"],
          rows: [
            [
              "`overflow-wrap: anywhere`",
              "Allows unbreakable strings to wrap when needed",
              "Long URLs, hashes, filenames, and machine-generated identifiers.",
            ],
            [
              "`hyphens: auto`",
              "Uses language-aware hyphenation where supported",
              "Readable prose or editorial text in languages with hyphenation dictionaries.",
            ],
            [
              "`word-break: break-all`",
              "Breaks almost anywhere, often harshly",
              "Emergency fallback only when preserving layout matters more than readability.",
            ],
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Do not default to break-all",
          content:
            "It is usually the harshest option and can make normal words ugly or hard to scan. Prefer `overflow-wrap` first, then layer more aggressive rules only when the content truly demands it.",
        },
      },
    ],
  },
};
