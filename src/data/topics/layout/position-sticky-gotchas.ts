import type {
  Topic,
  CardData,
  TipData,
  ListData,
  DosDontsData,
  ComparisonData,
  CodeData,
} from "@/types/topic";

export const positionStickyGotchas: Topic = {
  id: "position-sticky-gotchas",
  name: "Position Sticky Gotchas",
  categoryId: "layout",
  description: "Why position: sticky isn't working and how to fix it",
  tags: ["position", "sticky", "flexbox", "grid", "gotcha"],
  route: "/topics/position-sticky-gotchas",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Sticky Problem",
          content:
            "Position sticky is amazing when it works, but it fails silently in many situations. The most common issue? The element has no room to stick because its container is exactly the same height.",
        } as CardData,
      },
      {
        type: "list",
        data: {
          title: "Common Reasons Sticky Fails",
          ordered: true,
          items: [
            {
              text: "Parent has overflow: hidden, scroll, or auto",
              subtext: "Sticky needs visible overflow on the scroll ancestor",
            },
            {
              text: "Element is stretched in flexbox/grid",
              subtext: "Use align-self: flex-start to give it natural height",
            },
            {
              text: "No top, bottom, left, or right specified",
              subtext: "Sticky needs a threshold value to trigger",
            },
            {
              text: "Parent height equals element height",
              subtext: "No room to scroll = no stickiness",
            },
            {
              text: "Element is inside a table",
              subtext: "Limited cross-browser support for table elements",
            },
          ],
        } as ListData,
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Flexbox & Grid Trap",
          content:
            "In flexbox and grid, items stretch by default (align-items: stretch). This makes them the same height as their container, leaving no room to stick. Always use align-self: flex-start or align-self: start.",
        } as TipData,
      },
      {
        type: "comparison",
        data: {
          title: "Flexbox Sticky Fix",
          left: {
            label: "❌ Doesn't Stick",
            code: `.container {
  display: flex;
}

.sticky {
  position: sticky;
  top: 0;
}

/* Stretched to full height — no room to move */`,
            description: "Element stretches, no room to stick",
          },
          right: {
            label: "✓ Sticks Properly",
            code: `.container {
  display: flex;
}

.sticky {
  position: sticky;
  top: 0;
  align-self: flex-start;
}`,
            description: "Element has natural height, can stick",
          },
        } as ComparisonData,
      },
      {
        type: "dosd\u043e\u043dts",
        data: {
          title: "Sticky Checklist",
          dos: [
            "Always specify top, bottom, left, or right threshold",
            "Use align-self: flex-start in flexbox containers",
            "Use align-self: start in grid containers",
            "Ensure scroll container has overflow-y: auto or scroll",
            "Check for overflow: hidden on ALL ancestors",
          ],
          donts: [
            "Don't use overflow: hidden on any ancestor",
            "Don't forget the threshold (top/bottom/left/right)",
            "Don't rely on default stretch behavior in flex or grid",
            "Don't use on table elements without testing all browsers",
          ],
        } as DosDontsData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Complete Working Example",
          code: `.scroll-container {
  height: 400px;
  overflow-y: auto; /* Scroll here, NOT on the parent */
}

.layout {
  display: flex;
  gap: 24px;
}

.sticky-sidebar {
  position: sticky;
  top: 0;
  align-self: flex-start; /* Critical! */
  width: 240px;
  background: white;
  z-index: 10;
  padding: 16px;
}

.main-content {
  flex: 1;
}`,
        } as CodeData,
      },
    ],
  },
};
