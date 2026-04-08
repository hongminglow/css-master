import type {
  Topic,
  CardData,
  TipData,
  TableData,
  LiveComparisonData,
  DosDontsData,
} from "@/types/topic";

export const uncommonUnits: Topic = {
  id: "uncommon-css-units",
  name: "Uncommon Typography Units (ch, ex)",
  categoryId: "typography",
  description:
    "Beyond pixels and rems: discover how font-relative units like ch and ex can give you ultimate typographic control.",
  tags: ["typography", "units", "ch", "ex", "rem", "em"],
  route: "/topics/uncommon-css-units",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Font-Relative Precision",
          content:
            "Most developers use `rem`, `em`, or `px` for everything. But CSS provides units that are intrinsically tied to the font's actual glyph dimensions: `ch` (the character's width) and `ex` (the character's height). These units allow you to size containers and spacing based precisely on the text itself, creating highly resilient layouts.",
        } as CardData,
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "The Typography Golden Rule",
          content:
            "Optimal readability for long-form text is generally between 60 to 75 characters per line. The `ch` unit makes enforcing this restriction incredibly easy and perfectly accurate.",
        } as TipData,
      },
      {
        type: "livecomparison",
        data: {
          title: "Line Length Control: px vs ch",
          subtitle:
            "Restrict paragraph width using the character unit (ch) to ensure a perfect reading length, regardless of font size or screen width.",
          left: {
            label: "❌ max-width: 100%",
            code: `.article {
  /* No maximum width restriction */
  max-width: 100%;
  padding: 16px;
}`,
            html: `<div class="article bg-slate-200 text-slate-800 rounded">
  <p>If you don't restrict line length, text can span the entire width of the container. On wide screens, this forces the reader's eyes to travel back and forth over a huge distance, which causes fatigue and makes it very easy to lose your place when moving to the next line. This is universally considered poor typography.</p>
</div>`,
            css: `.article { font-family: system-ui; max-width: 100%; padding: 16px; font-size: 14px; line-height: 1.6; }`,
            description: "Lines are too long and difficult to scan on wide layout.",
          },
          right: {
            label: "✅ max-width: 60ch",
            code: `.article {
  /* Exactly 60 '0' characters wide */
  max-width: 60ch;
  margin-inline: auto;
  padding: 16px;
}`,
            html: `<div class="article bg-slate-200 text-slate-800 rounded">
  <p>By restricting the maximum width of paragraph text to around 60ch, you guarantee that lines never exceed a comfortable reading length. It automatically scales with the font size, so your typographic restraint holds true regardless of the device or the user's preferred scaling.</p>
</div>`,
            css: `.article { font-family: system-ui; max-width: 60ch; margin: 0 auto; padding: 16px; font-size: 14px; line-height: 1.6; }`,
            description: "Maintains optimal reading length regardless of screen size.",
          },
        } as LiveComparisonData,
      },
      {
        type: "livecomparison",
        data: {
          title: "Icon Alignment: px vs ex",
          subtitle:
            "The `ex` unit represents the 'x-height' (height of the lowercase letter 'x') of the current font. It is perfect for vertically aligning icons neatly with text.",
          left: {
            label: "❌ Guessing with Pixels",
            code: `.icon {
  width: 14px;
  height: 14px;
  /* Breaks when text resizes */
}`,
            html: `<div class="text-xs font-mono mb-4 text-slate-600">
  <span class="icon"></span> Tiny Text (12px)
</div>
<div class="text-2xl font-mono text-slate-600">
  <span class="icon"></span> Large Text (24px)
</div>`,
            css: `.text-xs { font-size: 12px; } .text-2xl { font-size: 24px; } .icon { display: inline-block; width: 14px; height: 14px; background: #ef4444; border-radius: 50%; vertical-align: middle; margin-right: 4px; }`,
            description: "Fixed pixel icons don't scale when the surrounding font size changes.",
          },
          right: {
            label: "✅ Scaling inherently with 1.5ex",
            code: `.icon-ex {
  /* Scales proportionally to the text's x-height */
  width: 1.5ex;
  height: 1.5ex;
}`,
            html: `<div class="text-xs font-mono mb-4 text-slate-600">
  <span class="icon-ex"></span> Tiny Text (12px)
</div>
<div class="text-2xl font-mono text-slate-600">
  <span class="icon-ex"></span> Large Text (24px)
</div>`,
            css: `.text-xs { font-size: 12px; } .text-2xl { font-size: 24px; } .icon-ex { display: inline-block; width: 1.5ex; height: 1.5ex; background: #22c55e; border-radius: 50%; vertical-align: middle; margin-right: 4px; }`,
            description: "Icons using 'ex' scale perfectly in harmony with the adjacent text.",
          },
        } as LiveComparisonData,
      },
      {
        type: "table",
        data: {
          title: "Typography Units Cheat Sheet",
          headers: ["Unit", "Measurement", "Best Used For"],
          rows: [
            [
              "ch",
              "Width of the '0' (zero) character",
              "Line lengths (max-width: 65ch), monospace grid layouts, and animating typewriter effects.",
            ],
            [
              "ex",
              "Height of the 'x' character",
              "Vertical alignment of sibling icons, badges, or pseudo-elements alongside text.",
            ],
            [
              "rem",
              "Root font-size",
              "Global typography, spacing, and accessibility scaling. The gold standard for general font-sizes.",
            ],
            [
              "em",
              "Parent/Current font-size",
              "Component-level scaling. Perfect for padding that should grow proportionally with a button's text size.",
            ],
            [
              "vw/vh",
              "1% of Viewport Dimension",
              "Fluid typography (but ONLY when wrapped in a clamp() to prevent extreme scaling).",
            ],
          ],
        } as TableData,
      },
      {
        type: "dosd\u043e\u043dts",
        data: {
          title: "Modern Unit Conventions",
          dos: [
            "Use `ch` for text blocks to ensure they do not exceed ~70 characters per line (readability standard).",
            "Use `rem` as your default for all font sizes to respect user browser accessibility settings.",
            "Use `em` or `ex` for modular component padding if you want the element layout to proportionally enlarge with font-size changes.",
          ],
          donts: [
            "Don't use `px` for font-size. It completely breaks users' ability to scale text via OS or browser preferences.",
            "Don't use `vw` straight-up for font-size (e.g., `font-size: 5vw`). On a massive monitor, text will be absurdly huge. Use `clamp()` instead.",
            "Don't mix up `em` and `rem` deeply nested. `em` cascades and compounds, causing exponential runaway scaling if nested.",
          ],
        } as DosDontsData,
      },
    ],
  },
};
