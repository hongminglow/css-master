import type {
  Topic,
  CardData,
  TipData,
  ComparisonData,
  DosDontsData,
  CodeData,
  QuoteData,
  LiveComparisonData,
} from "@/types/topic";

export const marginCollapse: Topic = {
  id: "margin-collapse",
  name: "Margin Collapse Mystery",
  categoryId: "layout",
  description: "Understanding why margins collapse and how to prevent it",
  tags: ["margin", "box-model", "gotcha"],
  route: "/topics/margin-collapse",
  content: {
    sections: [
      {
        type: "quote",
        data: {
          quote:
            "The top and bottom margins of blocks are sometimes combined into a single margin whose size is the largest of the individual margins.",
          author: "MDN Web Docs",
        } as QuoteData,
      },
      {
        type: "card",
        data: {
          title: "What is Margin Collapse?",
          content:
            "Margin collapse is a CSS behavior where vertical margins of adjacent block elements combine into a single margin. Instead of adding together, only the larger margin is applied. This often catches developers off guard.",
        } as CardData,
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Common Gotcha",
          content:
            "Margins of floating and absolutely positioned elements NEVER collapse. Only vertical margins collapse, never horizontal ones.",
        } as TipData,
      },
      {
        type: "livecomparison",
        data: {
          title: "Expected vs Actual Behavior",
          subtitle: "See the gap between the two boxes in each case",
          left: {
            label: "❌ Expecting 50px gap",
            code: `.box1 { margin-bottom: 20px; }
.box2 { margin-top: 30px; }

/* You'd expect: 20 + 30 = 50px gap */`,
            html: `<div class="box1">Box 1</div>
<div class="box2">Box 2</div>`,
            css: `body { background: #f8fafc; padding: 8px; }
.box1 {
  background: #ef4444;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: system-ui;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}
.box2 {
  background: #3b82f6;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: system-ui;
  font-size: 13px;
  font-weight: 600;
  margin-top: 30px;
}`,
            description: "Actual gap is only 30px — the larger margin wins",
          },
          right: {
            label: "✓ Fix: use flexbox gap",
            code: `.parent {
  display: flex;
  flex-direction: column;
  gap: 50px; /* explicit, no collapse */
}`,
            html: `<div class="parent">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
</div>`,
            css: `body { background: #f8fafc; padding: 8px; }
.parent {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.box1 {
  background: #ef4444;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: system-ui;
  font-size: 13px;
  font-weight: 600;
}
.box2 {
  background: #3b82f6;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-family: system-ui;
  font-size: 13px;
  font-weight: 600;
}`,
            description: "Flexbox gap is predictable and never collapses",
          },
        } as LiveComparisonData,
      },
      {
        type: "comparison",
        data: {
          title: "Other Ways to Prevent Collapse",
          left: {
            label: "Method: Overflow",
            code: `.parent {
  overflow: hidden;
  /* Creates a Block Formatting Context */
}`,
            description: "BFC prevents parent-child margin collapse",
          },
          right: {
            label: "Method: Border/Padding",
            code: `.parent {
  padding: 1px 0;
  /* Separates parent from child margins */
}`,
            description: "Even 1px padding stops collapse",
          },
        } as ComparisonData,
      },
      {
        type: "dosd\u043e\u043dts",
        data: {
          title: "Margin Collapse Rules",
          dos: [
            "Use display: flex / grid with gap for spacing",
            "Use overflow: hidden to create a Block Formatting Context",
            "Add a border or padding on parent to separate margins",
            "Use padding instead of margin for consistent spacing",
          ],
          donts: [
            "Don't rely on margin addition for precise spacing",
            "Don't forget parent-child margin collapse at the top of a container",
            "Don't use margins on first/last children without testing",
          ],
        } as DosDontsData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Prevention Techniques",
          code: `/* Method 1: Use flexbox with gap */
.parent {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Method 2: Create a BFC with overflow */
.parent {
  overflow: hidden;
}

/* Method 3: Tiny padding to separate parent/child margins */
.parent {
  padding: 1px 0;
}`,
        } as CodeData,
      },
    ],
  },
};
