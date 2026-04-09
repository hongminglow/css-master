import type { Topic } from "@/types/topic";

export const textWrapBalance: Topic = {
  id: "text-wrap-balance",
  name: "Text Wrap Balance for Cleaner Headlines",
  categoryId: "typography",
  description:
    "Balanced line breaks make headings feel designed instead of accidental, especially in cards, marketing blocks, and editorial layouts.",
  tags: ["typography", "text-wrap", "balance", "headlines", "readability"],
  route: "/topics/text-wrap-balance",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Ragged Headline Problem",
          content:
            "Large headings often wrap badly in exactly the places you do not want: one tiny final word on its own line, or an awkward first line that feels too heavy. Designers usually spot this instantly, but developers often reach for manual `<br>` tags or content edits to fix it. `text-wrap: balance` asks the browser to distribute words more evenly across lines, which is ideal for short multi-line headings.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Default Wrapping vs Balanced Wrapping",
          subtitle:
            "Both cards contain the exact same heading. The only change is how the browser is allowed to break the lines.",
          left: {
            label: "❌ Default wrapping",
            code: `.headline {
  max-inline-size: 16ch;
}`,
            html: `
<article class="card">
  <span class="badge">Case Study</span>
  <h2 class="headline broken">Shipping a faster design system without slowing product teams down</h2>
  <p>The last line looks stranded and the block feels uneven.</p>
</article>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #111827, #1f2937);
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.card {
  width: min(100% - 32px, 320px);
  padding: 22px;
  border-radius: 24px;
  background: rgba(255,255,255,0.95);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.28);
}
.badge {
  display: inline-block;
  margin-bottom: 16px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #fee2e2;
  color: #b91c1c;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.headline {
  margin: 0 0 14px;
  max-inline-size: 16ch;
  font-size: 34px;
  line-height: 0.98;
  color: #0f172a;
}
p {
  margin: 0;
  color: #475569;
  line-height: 1.5;
}
`,
            description:
              "The browser follows normal line-breaking rules, which can create a clumsy final line in short editorial-style headings.",
          },
          right: {
            label: "✅ `text-wrap: balance`",
            code: `.headline {
  max-inline-size: 16ch;
  text-wrap: balance;
}`,
            html: `
<article class="card">
  <span class="badge">Case Study</span>
  <h2 class="headline fixed">Shipping a faster design system without slowing product teams down</h2>
  <p>The heading feels more intentional without adding manual line breaks.</p>
</article>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #082f49, #0f172a);
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.card {
  width: min(100% - 32px, 320px);
  padding: 22px;
  border-radius: 24px;
  background: rgba(255,255,255,0.96);
  box-shadow: 0 24px 60px rgba(8, 47, 73, 0.28);
}
.badge {
  display: inline-block;
  margin-bottom: 16px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.headline {
  margin: 0 0 14px;
  max-inline-size: 16ch;
  text-wrap: balance;
  font-size: 34px;
  line-height: 0.98;
  color: #0f172a;
}
p {
  margin: 0;
  color: #475569;
  line-height: 1.5;
}
`,
            description:
              "The browser redistributes the words for a more balanced silhouette, which makes the heading feel much more polished.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "A Great Pairing: Balance plus a Measure",
          code: `.marketing-heading {
  max-inline-size: 18ch;
  text-wrap: balance;
  line-height: 0.95;
}

.body-copy {
  max-inline-size: 65ch;
  text-wrap: pretty;
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Use it selectively",
          content:
            "Apply `text-wrap: balance` to short headlines, pull quotes, and feature titles. For long paragraphs, prefer `text-wrap: pretty` or standard wrapping instead of trying to balance large bodies of text.",
        },
      },
    ],
  },
};
