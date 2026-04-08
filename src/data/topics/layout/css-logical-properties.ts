import type { Topic } from "@/types/topic";

export const cssLogicalProperties: Topic = {
  id: "css-logical-properties",
  name: "Logical Properties (L10n Friendly)",
  categoryId: "layout",
  description: "Stop writing 'margin-left' and 'padding-right'. Start building universally adaptable layouts using logical properties.",
  tags: ["layout", "i18n", "logical-properties", "rtl"],
  route: "/topics/css-logical-properties",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Multilingual Web Dilemma",
          content: "Physical properties like `margin-left` assume the user reads from Left-To-Right (LTR) like English. But if your application is ever translated to Arabic or Hebrew (RTL), that `margin-left` on an icon suddenly breaks the layout because the icon flipped to the right side of the screen, pushing text off the edge.\n\nHistorically, this meant shipping a massive `app-rtl.css` file to override thousands of `-left` and `-right` physical declarations. CSS Logical properties completely eliminate this."
        }
      },
      {
        type: "table",
        data: {
          title: "The Logical Dictionary Translation",
          headers: ["Physical (Old)", "Logical (Modern)"],
          rows: [
            ["margin-left", "margin-inline-start"],
            ["margin-right", "margin-inline-end"],
            ["margin-top", "margin-block-start"],
            ["padding-left", "padding-inline-start"],
            ["width", "inline-size"],
            ["height", "block-size"],
            ["left: 0", "inset-inline-start: 0"]
          ]
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "Adapting to RTL (Arabic Simulation)",
          subtitle: "Watch what happens when the HTML language direction is flipped to 'dir=\"rtl\"'.",
          left: {
            label: "❌ Physical (Breaks in RTL)",
            code: ".avatar {\n  /* Assumes English! */\n  margin-right: 16px;\n}",
            html: `
<div class="mock-device" dir="rtl">
  <div class="system-bar">Arabic Mode (RTL)</div>
  <div class="chat-card">
    <div class="avatar bad"></div>
    <div class="text">مرحبا، كيف حالك؟</div>
  </div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; background: #e2e8f0; border-radius: 8px; font-family: sans-serif; padding: 20px;}
.system-bar { font-size: 11px; margin-bottom: 20px; color: #64748b;}
.chat-card { display: flex; align-items: center; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);}
.avatar { width: 40px; height: 40px; background: #ef4444; border-radius: 50%; flex-shrink:0;}
.text { color: #1e293b; font-weight: bold; }

/* The Flaw: It firmly asserts margin MUST be physical right. So in RTL, where avatar is flipped to the right naturally, it pushes rightwards OUT of the card */
.bad { margin-right: 16px; }
            `
          },
          right: {
            label: "✅ Logical (Self-Adapts)",
            code: ".avatar {\n  /* Adapts to flow direction! */\n  margin-inline-end: 16px;\n}",
            html: `
<div class="mock-device" dir="rtl">
  <div class="system-bar">Arabic Mode (RTL)</div>
  <div class="chat-card">
    <div class="avatar good"></div>
    <div class="text">مرحبا، كيف حالك؟</div>
  </div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; background: #e2e8f0; border-radius: 8px; font-family: sans-serif; padding: 20px;}
.system-bar { font-size: 11px; margin-bottom: 20px; color: #64748b;}
.chat-card { display: flex; align-items: center; background: white; padding: 10px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);}
.avatar { width: 40px; height: 40px; background: #10b981; border-radius: 50%; flex-shrink:0;}
.text { color: #1e293b; font-weight: bold; }

/* The Fix: 'inline-end' implies 'right' in English, but 'left' in Arabic. It pushes away from the text automatically! */
.good { margin-inline-end: 16px; }
            `
          }
        }
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Flexbox and Grid are inherently Logical",
          content: "Properties like `justify-content: flex-start` or `gap` are already logical by default! The switch to logical properties mainly applies to physical box model constraints (margin, padding, border, absolute inset pins)."
        }
      }
    ]
  }
};
