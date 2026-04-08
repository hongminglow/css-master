import type {
  Topic,
  CardData,
  CodeData,
  PreviewData,
} from "@/types/topic";

export const stickyFooter: Topic = {
  id: "sticky-footer",
  name: "Sticky Footer",
  categoryId: "layout",
  description: "Keep footer at the bottom even when content is short",
  tags: ["footer", "layout", "flexbox", "min-height"],
  route: "/topics/sticky-footer",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Problem",
          content:
            "When a page has little content, the footer floats up from the bottom leaving an ugly gap. The flexbox + flex-grow pattern solves this elegantly — without hacks like absolute positioning or fixed height.",
        } as CardData,
      },
      {
        type: "comparison",
        data: {
          title: "Old Hack vs Flexbox Approach",
          left: {
            label: "❌ Old Hack (fragile)",
            code: `body { min-height: 100vh; }
.content {
  min-height: calc(100vh - 80px);
  /* hardcoded footer height */
}`,
            description: "Breaks if footer height changes",
          },
          right: {
            label: "✓ Flexbox (clean)",
            code: `body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main { flex: 1; }`,
            description: "Footer naturally pushed to bottom, no math",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Sticky Footer CSS",
          code: `body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* Takes all remaining space */
}

footer {
  /* Just a normal footer — no special CSS needed */
}`,
        } as CodeData,
      },
      {
        type: "preview",
        data: {
          html: `<div class="page">
  <header>Header</header>
  <main>
    <p>Short content — but footer stays put!</p>
  </main>
  <footer>Footer</footer>
</div>`,
          css: `.page {
  display: flex;
  flex-direction: column;
  min-height: 160px;
  background: #f8fafc;
  font-family: system-ui;
  font-size: 13px;
}
header {
  background: #2563eb;
  color: white;
  padding: 10px 16px;
  font-weight: 600;
}
main {
  flex: 1;
  padding: 12px 16px;
  color: #475569;
}
footer {
  background: #1e293b;
  color: #94a3b8;
  padding: 10px 16px;
  font-size: 12px;
}`,
        } as PreviewData,
      },
    ],
  },
};
