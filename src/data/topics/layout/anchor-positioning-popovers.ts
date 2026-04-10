import type { Topic } from "@/types/topic";

export const anchorPositioningPopovers: Topic = {
  id: "anchor-positioning-popovers",
  name: "Anchor Positioning Simplifies Popovers",
  categoryId: "layout",
  description:
    "Tooltips, menus, and teaching bubbles no longer need as much manual offset math when CSS can position relative to an anchor element.",
  tags: ["layout", "anchor-positioning", "popover", "tooltip", "ui", "modern-css"],
  route: "/topics/anchor-positioning-popovers",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Position Relative to the Trigger, Not the Viewport Guess",
          content:
            "Floating UI has traditionally meant JavaScript measurements, collision logic, and lots of manual offset bookkeeping. CSS Anchor Positioning moves some of that job into the platform by letting a floating element describe itself relative to a named anchor. This is especially compelling for popovers, contextual help, and lightweight menus where the relationship to the trigger is more important than global page math.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Manual Offsets vs Anchored Positioning",
          left: {
            label: "Manual positioning",
            code: `.menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
}`,
            description:
              "Works until the trigger moves, the writing direction changes, or the surface needs smarter fallback placement.",
          },
          right: {
            label: "Anchor positioning",
            code: `.trigger {
  anchor-name: --menu-button;
}

.menu {
  position-anchor: --menu-button;
  top: anchor(bottom);
  left: anchor(left);
}`,
            description:
              "The floating element references the trigger as an anchor, which makes the relationship far more declarative.",
          },
        },
      },
      {
        type: "workflow",
        data: {
          title: "A Safer Way to Introduce It",
          steps: [
            {
              number: 1,
              title: "Keep your existing absolute fallback",
              description:
                "Start from the ordinary positioned overlay pattern you already trust, especially for menus and help bubbles that need broad support.",
            },
            {
              number: 2,
              title: "Layer anchor positioning behind supports checks",
              description:
                "Use `@supports` so capable browsers can switch to the cleaner anchor-based relationship without breaking older ones.",
            },
            {
              number: 3,
              title: "Use it where the trigger relationship matters most",
              description:
                "Anchor positioning is most compelling for menus, tooltips, callouts, and teaching UI that should stay semantically attached to a specific element.",
            },
          ],
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Progressive Enhancement Pattern",
          code: `.trigger {
  position: relative;
}

.menu {
  position: absolute;
  inset-block-start: calc(100% + 0.5rem);
  inset-inline-start: 0;
}

@supports (anchor-name: --menu-button) {
  .trigger {
    anchor-name: --menu-button;
  }

  .menu {
    position-anchor: --menu-button;
    top: anchor(bottom);
    left: anchor(left);
    inset: auto;
  }
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Progressive enhancement territory",
          content:
            "Anchor Positioning is exciting but still newer than ordinary absolute positioning. Treat it as an enhancement for capable browsers while keeping your overlay system resilient when support is missing.",
        },
      },
    ],
  },
};
