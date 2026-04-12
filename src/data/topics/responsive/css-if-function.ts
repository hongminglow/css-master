import type { Topic } from "@/types/topic";

export const cssIfFunction: Topic = {
  id: "css-if-function",
  name: "CSS if(): Native Conditional Values",
  categoryId: "responsive",
  description:
    "CSS now has an `if()` value function for media, style, and support tests. It is powerful, real, and still experimental enough that you need fallback-first thinking.",
  tags: [
    "responsive",
    "if()",
    "conditional",
    "style-query",
    "experimental",
    "fallbacks",
  ],
  route: "/topics/css-if-function",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Conditional Logic Has Finally Reached Property Values",
          content:
            "For years, CSS conditionals lived mostly in wrapper at-rules like `@media` and `@supports`. That worked well when an entire block of declarations needed to change, but it felt heavy when only a single value needed branching. The new `if()` function fills that gap. It lets one property value react to media queries, style queries, or support queries inline, much closer to how developers mentally model simple if/else logic in code.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Separate Rule Blocks vs Inline Value Logic",
          left: {
            label: "Older pattern",
            code: `.card {
  padding: 0.875rem;
  border-color: #64748b;
}

.card[data-density="roomy"] {
  padding: 1.25rem;
}

.card[data-tone="success"] {
  border-color: #34d399;
}

@media (width > 48rem) {
  .card {
    box-shadow: 0 18px 30px rgba(15, 23, 42, 0.18);
  }
}`,
            description:
              "Still valid, but a lot of conditional intent gets spread across multiple selectors and rule blocks.",
          },
          right: {
            label: "Newer pattern",
            code: `.card {
  padding: 0.875rem;
  padding: if(style(--density: roomy): 1.25rem; else: 0.875rem);

  border-color: #64748b;
  border-color: if(
    style(--tone: success): #34d399;
    else: #64748b;
  );

  box-shadow: if(
    media(width > 48rem): 0 18px 30px rgba(15, 23, 42, 0.18);
    else: 0 10px 18px rgba(15, 23, 42, 0.12);
  );
}`,
            description:
              "`if()` shines when one declaration needs branching without introducing whole extra rule sets.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Fallback-First if()",
          code: `.notice {
  /* 1. Write a safe fallback first for non-supporting browsers */
  padding: 0.875rem 1rem;
  border: 1px solid #64748b;
  background: linear-gradient(180deg, #0f172a, #1e293b);

  /* 2. Then override with if() where supported */
  padding: if(style(--density: roomy): 1.125rem 1.25rem; else: 0.875rem 1rem);
  border-color: if(
    style(--tone: success): #34d399;
    style(--tone: warning): #fbbf24;
    else: #64748b;
  );
  background: if(
    style(--tone: success): linear-gradient(180deg, #052e2b, #065f46);
    style(--tone: warning): linear-gradient(180deg, #3f1d10, #92400e);
    else: linear-gradient(180deg, #0f172a, #1e293b);
  );
}

.notice__title {
  font-size: if(media(width > 42rem): 1.05rem; else: 0.95rem);
}

/* if() is for value branching, not for replacing whole rule blocks. */`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<section class="demo">
  <article class="panel" style="--tone: success; --density: roomy;">
    <p class="eyebrow">tone=success</p>
    <h3>Deploy Complete</h3>
    <p>Spacing, border, and surface all branch from inline value logic.</p>
  </article>

  <article class="panel" style="--tone: warning;">
    <p class="eyebrow">tone=warning</p>
    <h3>Quota Near Limit</h3>
    <p>The same CSS block can swap only the values that actually differ.</p>
  </article>

  <article class="panel">
    <p class="eyebrow">fallback</p>
    <h3>Default Branch</h3>
    <p>If your browser lacks support, all three panels fall back to the neutral declarations.</p>
  </article>
</section>`,
          css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 22px;
  background: radial-gradient(circle at top, rgba(59, 130, 246, 0.18), transparent 45%), #020617;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.demo {
  width: min(100%, 620px);
  display: grid;
  gap: 12px;
}
.panel {
  padding: 14px 16px;
  border-radius: 20px;
  border: 1px solid #64748b;
  color: #e2e8f0;
  background: linear-gradient(180deg, #0f172a, #1e293b);
  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.14);

  padding: if(style(--density: roomy): 20px 22px; else: 14px 16px);
  border-color: if(
    style(--tone: success): #34d399;
    style(--tone: warning): #fbbf24;
    else: #64748b;
  );
  background: if(
    style(--tone: success): linear-gradient(180deg, #052e2b, #065f46);
    style(--tone: warning): linear-gradient(180deg, #3f1d10, #92400e);
    else: linear-gradient(180deg, #0f172a, #1e293b);
  );
  box-shadow: if(
    media(width > 420px): 0 18px 30px rgba(15, 23, 42, 0.18);
    else: 0 10px 18px rgba(15, 23, 42, 0.14);
  );
}
.eyebrow {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #cbd5e1;
}
.panel h3 {
  margin: 0 0 6px;
  font-size: if(media(width > 420px): 18px; else: 16px);
}
.panel p:last-child {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.5;
  font-size: 14px;
}`,
        },
      },
      {
        type: "table",
        data: {
          title: "When if() Is the Right Tool",
          headers: ["Need", "Best Tool", "Why"],
          rows: [
            [
              "One property value branches",
              "if()",
              "Keeps the conditional next to the value it changes",
            ],
            [
              "Several declarations change together",
              "@media / @supports / @container",
              "Whole rule blocks stay easier to read",
            ],
            [
              "Theme token flips on one element",
              "if() + custom properties",
              "Style queries can react to element-local tokens",
            ],
            [
              "Component responds to parent width",
              "@container",
              "Container queries can switch multiple rules at once",
            ],
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Treat it as progressive enhancement for now",
          content:
            "MDN currently marks `if()` as limited availability and experimental. Chrome and Edge ship it in recent versions, while Safari and Firefox still lag. Write a safe fallback declaration first, then layer `if()` on top so the UI remains correct even when the conditional branch is ignored.",
        },
      },
    ],
  },
};
