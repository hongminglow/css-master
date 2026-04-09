import type { Topic } from "@/types/topic";

export const underlineOffsetThickness: Topic = {
  id: "underline-offset-thickness",
  name: "Underline Offset and Thickness Improve Links",
  categoryId: "typography",
  description:
    "Default underlines are often too close to the text and too thin for expressive UI. CSS gives you much better control now.",
  tags: ["typography", "links", "underline", "text-decoration", "offset", "thickness"],
  route: "/topics/underline-offset-thickness",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Browser Default Is Only a Baseline",
          content:
            "Default underlines are functional, but they are rarely ideal for polished UI. They can sit too close to descenders, feel too faint against larger type, and clash with branded link treatments. Modern text-decoration properties let you keep semantic underlines while making them look intentional.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Default Underline vs Tuned Underline",
          subtitle:
            "The words are identical. The difference is purely in underline spacing and weight.",
          left: {
            label: "❌ Browser default",
            code: `.link {
  text-decoration: underline;
}`,
            html: `
<p class="copy">Read the <a class="link broken" href="#">migration guide for design tokens</a> before upgrading.</p>`,
            css: `
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.copy {
  width: min(100% - 32px, 320px);
  margin: 0;
  padding: 22px;
  border-radius: 22px;
  background: white;
  border: 1px solid #cbd5e1;
  color: #334155;
  line-height: 1.6;
  font-size: 20px;
}
.link {
  color: #b91c1c;
  text-decoration: underline;
}
`,
            description:
              "The underline works, but it feels cramped against the text and lacks the weight to match the font size.",
          },
          right: {
            label: "✅ Offset and thickness",
            code: `.link {
  text-decoration-line: underline;
  text-decoration-thickness: 0.12em;
  text-underline-offset: 0.18em;
  text-decoration-skip-ink: auto;
}`,
            html: `
<p class="copy">Read the <a class="link fixed" href="#">migration guide for design tokens</a> before upgrading.</p>`,
            css: `
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #eff6ff;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.copy {
  width: min(100% - 32px, 320px);
  margin: 0;
  padding: 22px;
  border-radius: 22px;
  background: white;
  border: 1px solid #bfdbfe;
  color: #334155;
  line-height: 1.6;
  font-size: 20px;
}
.link {
  color: #1d4ed8;
  text-decoration-line: underline;
  text-decoration-thickness: 0.12em;
  text-underline-offset: 0.18em;
  text-decoration-skip-ink: auto;
}
`,
            description:
              "The underline gets breathing room and stronger presence, while still remaining a true semantic text decoration.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Keep links looking like links",
          content:
            "This is a good middle ground between browser defaults and trendy links that lose all affordance. You preserve accessibility and scannability while still making the typography feel designed.",
        },
      },
    ],
  },
};
