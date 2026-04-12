import type { Topic } from "@/types/topic";

export const scopeAtRule: Topic = {
  id: "scope-at-rule",
  name: "Scoped CSS Without Selector Bloat",
  categoryId: "layout",
  description:
    "`@scope` lets selectors operate inside a deliberate DOM subtree, which keeps component styles easier to override and reduces accidental leakage across nested UI.",
  tags: [
    "layout",
    "@scope",
    "cascade",
    "selectors",
    "component-css",
    "specificity",
  ],
  route: "/topics/scope-at-rule",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Scoped Styling Solves a Real Component Problem",
          content:
            "As UI trees get deeper, selectors tend to grow in one of two bad directions: either they become overly specific and hard to override, or they become broad enough to leak into places you did not intend. `@scope` introduces a middle path. You define a root subtree, optionally define a lower limit, and then write normal selectors that only operate inside that boundary. The result feels closer to component-local styling without giving up the cascade entirely.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Long Descendant Chains vs Scoped Rules",
          left: {
            label: "Without @scope",
            code: `.feature-card .article-body a {
  color: #2563eb;
}

.feature-card .article-body img {
  border-radius: 1rem;
}

.feature-card .article-body figure img {
  border-radius: 0;
}`,
            description:
              "The selector works, but it is tightly coupled to the markup shape and gets harder to reason about as the tree grows.",
          },
          right: {
            label: "With @scope",
            code: `@scope (.article-body) to (figure) {
  a {
    color: #2563eb;
  }

  img {
    border-radius: 1rem;
  }
}`,
            description:
              "The DOM boundary is declared once, then the internal rules stay short and low-friction.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Theme Cards with Scoping Proximity",
          code: `@scope (.theme-card.light) {
  :scope {
    background: #f8fafc;
    color: #0f172a;
  }

  a {
    color: #1d4ed8;
  }
}

@scope (.theme-card.dark) {
  :scope {
    background: #0f172a;
    color: #e2e8f0;
  }

  a {
    color: #93c5fd;
  }
}

/* Nested cards resolve by scoping proximity rather than awkward source-order fights. */`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<section class="scene">
  <article class="theme-card light">
    <h3>Outer Light Theme</h3>
    <p>Outer links stay blue. <a href="#">Read docs</a></p>

    <div class="theme-card dark">
      <h3>Nested Dark Theme</h3>
      <p>Inside the dark card, link styling flips locally. <a href="#">Inspect nested styles</a></p>

      <div class="theme-card light inner">
        <h3>Inner Light Theme</h3>
        <p>The innermost light card wins again because it is closer to its own scope root. <a href="#">Scoping proximity</a></p>
      </div>
    </div>
  </article>
</section>`,
          css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 18px;
  background: radial-gradient(circle at top, rgba(168, 85, 247, 0.18), transparent 40%), #020617;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.scene {
  width: min(100%, 640px);
}
.theme-card {
  display: grid;
  gap: 10px;
  padding: 16px;
  border-radius: 22px;
  border: 1px solid #334155;
  background: rgba(15, 23, 42, 0.9);
  color: #e2e8f0;
  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.22);
}
.theme-card + .theme-card,
.theme-card .theme-card {
  margin-top: 12px;
}
.theme-card h3 {
  margin: 0;
  font-size: 16px;
}
.theme-card p {
  margin: 0;
  line-height: 1.5;
}
.theme-card a {
  color: #38bdf8;
}
.inner {
  border-style: dashed;
}

@scope (.theme-card.light) {
  :scope {
    background: linear-gradient(180deg, #f8fafc, #e2e8f0);
    color: #0f172a;
    border-color: #cbd5e1;
  }

  a {
    color: #1d4ed8;
  }
}

@scope (.theme-card.dark) {
  :scope {
    background: linear-gradient(180deg, #0f172a, #111827);
    color: #e2e8f0;
    border-color: #334155;
  }

  a {
    color: #93c5fd;
  }
}`,
        },
      },
      {
        type: "list",
        data: {
          title: "Where @scope Earns Its Keep",
          ordered: false,
          items: [
            {
              text: "Nested themed components",
              subtext:
                "Scoping proximity reduces the need for source-order hacks when similar patterns are nested inside each other.",
            },
            {
              text: "CMS or rich-text regions",
              subtext:
                "You can style links, lists, and media inside one subtree without making broad selectors for the whole page.",
            },
            {
              text: "Donut scopes with limits",
              subtext:
                "A limit like `to (figure)` lets you stop styling before a specific nested area that should keep its own rules.",
            },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Support is much healthier than people assume",
          content:
            "MDN now lists `@scope` as broadly supported across current Chrome, Edge, Safari, and modern Firefox. The main nuance is not basic support anymore, but understanding how `:scope`, bare selectors, and nested `&` behave inside the block so you do not accidentally change specificity.",
        },
      },
    ],
  },
};
