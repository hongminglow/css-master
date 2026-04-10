import type { Topic } from "@/types/topic";

export const flexAutoMargins: Topic = {
  id: "flex-auto-margins",
  name: "Magic Auto Margins in Flexbox",
  categoryId: "layout",
  description: "Using margin: auto within flex containers for powerful, customized item alignment.",
  tags: ["layout", "flexbox", "margin", "alignment", "auto"],
  route: "/topics/flex-auto-margins",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Ultimate Alignment Hack",
          content: "Before Flexbox, `margin: 0 auto` was specifically used for horizontal centering of block elements. Inside a Flexbox container, `margin: auto` gains superpower capabilities. It will consume all available space in its designated direction. This is incredible for creating layouts like a nav bar with logo on the left and links pushed to the right, without needing `justify-content: space-between` across multiple child wrappers.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.nav-container {
  display: flex;
  align-items: center;
}

.logo {
  /* Logo on the left */
}

/* This takes all remaining space, pushing links to the right */
.nav-links {
  margin-left: auto;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; background: #1e293b; padding: 1rem; border-radius: 8px; align-items: center;">
  <div style="font-weight: bold; background: #3b82f6; padding: 0.5rem 1rem; border-radius: 4px;">Brand Logo</div>
  
  <div style="display: flex; gap: 1rem; margin-left: auto;">
    <span style="color: #cbd5e1;">Home</span>
    <span style="color: #cbd5e1;">About</span>
    <span style="color: #cbd5e1;">Contact</span>
  </div>
</div>

<div style="display: flex; height: 150px; background: #0f172a; margin-top: 1rem; padding: 1rem; border-radius: 8px; flex-direction: column;">
  <div style="background: #ef4444; padding: 0.5rem; text-align: center; border-radius: 4px;">Top Item</div>
  <div style="background: #22c55e; padding: 0.5rem; text-align: center; border-radius: 4px; margin-top: auto;">Bottom Item via margin-top: auto</div>
</div>`,
          css: `/* Using auto margins inside flexbox works both horizontally and vertically */`,
        },
      },
      {
        type: "workflow",
        data: {
          title: "Common Margin Auto Patterns",
          steps: [
            {
              number: 1,
              title: "Horizontal Push",
              description: "`margin-left: auto` - Pushes element and trailing siblings to the right.",
            },
            {
              number: 2,
              title: "Sticky Footer",
              description: "`margin-top: auto` - Excellent for sticky footers within a column flex container without hard height calculations.",
            },
            {
              number: 3,
              title: "Dead Centering",
              description: "`margin: auto` - Perfectly centers a single item both horizontally and vertically inside a flex container.",
            },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Overrides Justify-Content",
          content: "Auto margins will eat up all free space, meaning they take precedence over `justify-content` values like `center` or `space-around`. If `margin: auto` is used, `justify-content` essentially does nothing for that space.",
        },
      },
    ],
  },
};
