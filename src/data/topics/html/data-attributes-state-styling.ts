import type { Topic } from "@/types/topic";

export const dataAttributesStateStyling: Topic = {
  id: "data-attributes-state-styling",
  name: "data-* Attributes as a Styling API",
  categoryId: "html",
  description:
    "`data-*` attributes give components a cleaner state and variant surface than modifier class soup, while staying readable to CSS, HTML, and JavaScript.",
  tags: [
    "html",
    "data-*",
    "dataset",
    "attribute-selectors",
    "state",
    "variants",
  ],
  route: "/topics/data-attributes-state-styling",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "State Belongs in the Markup Contract",
          content:
            "A lot of UI code still models variants and state with a pile of modifier classes like `.button--primary`, `.button--danger`, `.is-open`, and `.is-loading`. That works, but it also creates invalid combinations and hides intent in a long class list. `data-*` attributes are often a cleaner contract. They let HTML expose structured state like `data-variant`, `data-size`, or `data-state`, and CSS can respond with plain attribute selectors while JavaScript updates the state with `element.dataset`.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Modifier Classes vs Data Attributes",
          left: {
            label: "Class-heavy state",
            code: `<button class="tab tab--primary is-active is-loading">
  Billing
</button>`,
            description:
              "The intent is there, but class combinations can drift into invalid or redundant states very quickly.",
          },
          right: {
            label: "Attribute-driven state",
            code: `<button
  class="tab"
  data-variant="primary"
  data-state="active"
  data-loading="true">
  Billing
</button>`,
            description:
              "Each piece of state becomes explicit, inspectable, and easier to set from templates or `dataset` updates.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "html",
          title: "HTML + CSS + JS Pattern",
          code: `<!-- HTML -->
<button class="tab" data-state="idle" data-variant="primary">
  Billing
</button>

<!-- CSS -->
.tab[data-state="active"] {
  background: #2563eb;
  color: white;
}

.tab[data-loading="true"] {
  opacity: 0.6;
  pointer-events: none;
}

.tab::after {
  content: attr(data-state);
}

<!-- JavaScript -->
const tab = document.querySelector(".tab");
tab.dataset.state = "active";
tab.dataset.loading = "false";`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<section class="board">
  <div class="tabs">
    <button class="tab" data-state="active" data-count="12">Inbox</button>
    <button class="tab" data-state="idle" data-count="4">Drafts</button>
    <button class="tab" data-state="warning" data-count="2">Blocked</button>
  </div>

  <div class="stack">
    <article class="callout" data-variant="note" data-owner="docs">
      <h3>Note Variant</h3>
      <p>One attribute controls the visual treatment and another prints metadata with <code>attr()</code>.</p>
    </article>

    <article class="callout" data-variant="danger" data-owner="ops">
      <h3>Danger Variant</h3>
      <p>Attribute selectors keep the contract visible in the markup instead of hiding it in class combinations.</p>
    </article>
  </div>
</section>`,
          css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 20px;
  background: radial-gradient(circle at top, rgba(37, 99, 235, 0.18), transparent 38%), #0f172a;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.board {
  width: min(100%, 620px);
  display: grid;
  gap: 16px;
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tab {
  position: relative;
  border: 1px solid #334155;
  border-radius: 999px;
  padding: 10px 44px 10px 14px;
  background: rgba(15, 23, 42, 0.8);
  color: #cbd5e1;
  font-weight: 700;
}
.tab::after {
  content: attr(data-count);
  position: absolute;
  top: 50%;
  right: 10px;
  translate: 0 -50%;
  min-width: 24px;
  height: 24px;
  padding-inline: 6px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(148, 163, 184, 0.18);
  color: #e2e8f0;
  font-size: 11px;
}
.tab[data-state="active"] {
  border-color: #60a5fa;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
}
.tab[data-state="warning"] {
  border-color: #f59e0b;
  background: linear-gradient(135deg, rgba(146, 64, 14, 0.95), rgba(245, 158, 11, 0.75));
  color: #fff7ed;
}
.stack {
  display: grid;
  gap: 12px;
}
.callout {
  position: relative;
  padding: 18px 18px 16px;
  border-radius: 18px;
  border: 1px solid #334155;
  background: rgba(15, 23, 42, 0.92);
  color: #e2e8f0;
}
.callout::before {
  content: attr(data-owner) " • " attr(data-variant);
  display: inline-flex;
  margin-bottom: 10px;
  border-radius: 999px;
  padding: 4px 9px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.callout h3 {
  margin: 0 0 6px;
  font-size: 16px;
}
.callout p {
  margin: 0;
  line-height: 1.5;
  color: #cbd5e1;
}
.callout code {
  color: #f8fafc;
}
.callout[data-variant="note"] {
  border-color: #60a5fa;
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.96), rgba(15, 23, 42, 0.96));
}
.callout[data-variant="note"]::before {
  color: #bfdbfe;
  background: rgba(59, 130, 246, 0.18);
}
.callout[data-variant="danger"] {
  border-color: #f87171;
  background: linear-gradient(180deg, rgba(69, 10, 10, 0.94), rgba(31, 41, 55, 0.94));
}
.callout[data-variant="danger"]::before {
  color: #fecaca;
  background: rgba(239, 68, 68, 0.18);
}`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Practical Data Attribute Rules",
          dos: [
            "Use `data-state`, `data-variant`, and `data-size` for component state that templates and JS both need to understand.",
            'Quote string values in CSS selectors, including numeric-looking values like `[data-columns="3"]`.',
            "Prefer a single semantic class plus a few explicit data attributes over long modifier-class chains.",
          ],
          donts: [
            "Don't store important user-visible content only inside data attributes, because assistive tech and indexing may not treat it as real content.",
            "Don't use data attributes as a substitute for proper semantics like `disabled`, `open`, or `aria-*` when native meaning already exists.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Remember that dataset values are strings",
          content:
            '`element.dataset.columns = 3` becomes the string `"3"`, and CSS attribute selectors match strings too. That is why selectors like `[data-columns="3"]` need quoted values, and why data attributes work especially well for enumerated UI states rather than raw arithmetic.',
        },
      },
    ],
  },
};
