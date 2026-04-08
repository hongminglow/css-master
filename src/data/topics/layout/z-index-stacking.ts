import type {
  Topic,
  CardData,
  TipData,
  ListData,
  DosDontsData,
  LiveComparisonData,
} from "@/types/topic";

export const zIndexStackingContext: Topic = {
  id: "z-index-stacking-context",
  name: "Z-Index Stacking Context",
  categoryId: "layout",
  description:
    "Why z-index: 999999 doesn't work and how stacking contexts actually work",
  tags: ["z-index", "stacking", "position", "gotcha"],
  route: "/topics/z-index-stacking-context",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Z-Index Mystery",
          content:
            "Ever set z-index: 999999 on an element and it still appears behind another element with z-index: 1? The culprit is stacking contexts. Z-index only competes within the same stacking context — not globally across the page.",
        } as CardData,
      },
      {
        type: "tip",
        data: {
          variant: "danger",
          title: "Critical Rule",
          content:
            "Z-index only works on positioned elements (position: relative, absolute, fixed, or sticky). It has no effect on position: static — the default.",
        } as TipData,
      },
      {
        type: "livecomparison",
        data: {
          title: "Why z-index: 999 Still Loses",
          subtitle:
            "The child has a huge z-index but its parent creates a stacking context that traps it",
          left: {
            label: "❌ Child trapped inside parent context",
            code: `.parent {
  position: relative;
  z-index: 1;      /* creates stacking context */
}
.child {
  position: absolute;
  z-index: 999;   /* only wins within parent */
}
.rival {
  position: relative;
  z-index: 2;     /* beats parent → beats child */
}`,
            html: `<div class="parent">
  <div class="child">z-index: 999<br><small>but BEHIND rival!</small></div>
</div>
<div class="rival">z-index: 2<br><small>wins despite lower value</small></div>`,
            css: `body { background: #f8fafc; padding: 16px; font-family: system-ui; }
.parent {
  position: relative;
  z-index: 1;
  width: 160px;
  height: 60px;
  background: #e2e8f0;
  border: 2px dashed #94a3b8;
  border-radius: 6px;
  padding: 4px;
  font-size: 11px;
  color: #64748b;
}
.child {
  position: absolute;
  z-index: 999;
  top: 10px;
  left: 20px;
  background: #ef4444;
  color: white;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
}
.child small { font-weight: 400; opacity: 0.85; }
.rival {
  position: relative;
  z-index: 2;
  margin-top: -20px;
  margin-left: 60px;
  width: 160px;
  background: #3b82f6;
  color: white;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
}
.rival small { font-weight: 400; opacity: 0.85; }`,
            description: "Parent z-index: 1 loses to rival z-index: 2 → child is buried",
          },
          right: {
            label: "✓ Remove parent z-index to free the child",
            code: `.parent {
  position: relative;
  /* no z-index → no stacking context */
}
.child {
  position: absolute;
  z-index: 999;   /* now truly global */
}
.rival {
  position: relative;
  z-index: 2;     /* loses to child's 999 */
}`,
            html: `<div class="parent">
  <div class="child">z-index: 999<br><small>now truly on top!</small></div>
</div>
<div class="rival">z-index: 2<br><small>now correctly behind</small></div>`,
            css: `body { background: #f8fafc; padding: 16px; font-family: system-ui; }
.parent {
  position: relative;
  width: 160px;
  height: 60px;
  background: #e2e8f0;
  border: 2px dashed #94a3b8;
  border-radius: 6px;
  padding: 4px;
  font-size: 11px;
  color: #64748b;
}
.child {
  position: absolute;
  z-index: 999;
  top: 10px;
  left: 20px;
  background: #22c55e;
  color: white;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
}
.child small { font-weight: 400; opacity: 0.85; }
.rival {
  position: relative;
  z-index: 2;
  margin-top: -20px;
  margin-left: 60px;
  width: 160px;
  background: #64748b;
  color: white;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  line-height: 1.4;
}
.rival small { font-weight: 400; opacity: 0.85; }`,
            description: "No z-index on parent → child escapes the context and wins",
          },
        } as LiveComparisonData,
      },
      {
        type: "list",
        data: {
          title: "What Creates a Stacking Context?",
          ordered: false,
          items: [
            { text: "position: absolute or relative with z-index other than auto" },
            { text: "position: fixed or sticky (always creates one)" },
            { text: "opacity less than 1", subtext: "Even opacity: 0.99 traps children!" },
            {
              text: "transform, filter, perspective, or clip-path",
              subtext: "Very common surprise with CSS animations",
            },
            { text: "will-change with certain values" },
            {
              text: "isolation: isolate",
              subtext: "Use this intentionally to contain z-index scope",
            },
          ],
        } as ListData,
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Use isolation: isolate Intentionally",
          content:
            "If you want a component to contain its own z-index scope (like a modal or tooltip system), add isolation: isolate to the root element. This is the clean, intentional way to manage stacking contexts.",
        } as TipData,
      },
      {
        type: "dosd\u043e\u043dts",
        data: {
          title: "Z-Index Best Practices",
          dos: [
            "Use a z-index scale (10, 20, 30, 100) documented in your design system",
            "Use isolation: isolate on component roots to scope stacking",
            "Debug with browser DevTools → Layers panel (3D view)",
            "Check all ancestors for accidental stacking context creators",
          ],
          donts: [
            "Don't use arbitrary large values like 999999",
            "Don't add position + z-index to a parent unless necessary",
            "Don't forget that opacity, transform, filter create stacking contexts",
            "Don't use z-index on position: static elements (it's ignored)",
          ],
        } as DosDontsData,
      },
    ],
  },
};
