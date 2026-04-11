import type { Topic } from "@/types/topic";

export const textWrapPretty: Topic = {
  id: "text-wrap-pretty",
  name: "Text Wrap Pretty Improves Paragraph Rag",
  categoryId: "typography",
  description:
    "Paragraphs and supporting copy can wrap more gracefully with fewer awkward breaks and orphaned words.",
  tags: ["typography", "text-wrap", "pretty", "paragraphs", "readability"],
  route: "/topics/text-wrap-pretty",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Not Every Wrap Improvement Is for Headlines",
          content:
            "`text-wrap: balance` is great for short headings, but body copy and supporting paragraphs need a different kind of help. `text-wrap: pretty` asks the browser to avoid especially awkward line endings and poor wrapping decisions. It is subtle, but in editorial and marketing UI that subtlety adds up fast.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Default Paragraph Wrapping vs Pretty Wrapping",
          subtitle:
            "Both blocks contain identical text. text-wrap: pretty prevents orphans (single words alone on the last line) in longer paragraphs.",
          left: {
            label: "❌ Default wrapping",
            code: `.copy {
  max-inline-size: 38ch;
}`,
            html: `
<article class="card">
  <p class="copy">
    This sentence is specifically designed to end with an orphan now.
  </p>
</article>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0f172a;
  font-family: system-ui, sans-serif;
}
.card {
  width: 155px; /* Forced narrow width to trigger orphan */
  padding: 16px;
  border-radius: 12px;
  background: #1e293b;
  border: 1px solid #334155;
}
.copy {
  margin: 0;
  color: #f8fafc;
  line-height: 1.5;
  font-size: 16px;
  /* text-wrap: wrap is default */
}`,
            description:
              "Default wrapping may leave a single word (orphan) on the last line, which creates visual awkwardness in editorial content.",
          },
          right: {
            label: "✅ `text-wrap: pretty`",
            code: `.copy {
  max-inline-size: 38ch;
  text-wrap: pretty;
}`,
            html: `
<article class="card">
  <p class="copy">
    This sentence is specifically designed to end with an orphan now.
  </p>
</article>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0f172a;
  font-family: system-ui, sans-serif;
}
.card {
  width: 155px;
  padding: 16px;
  border-radius: 12px;
  background: #1e293b;
  border: 1px solid #334155;
}
.copy {
  margin: 0;
  color: #f8fafc;
  line-height: 1.5;
  font-size: 16px;
  text-wrap: pretty;
}`,
            description:
              "Pretty wrapping avoids orphans by redistributing words across lines, creating a more polished paragraph shape for body copy.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Use the right wrap tool for the right text",
          content:
            "Think `balance` for headlines, `pretty` for paragraphs. They solve related but different readability problems.",
        },
      },
    ],
  },
};
