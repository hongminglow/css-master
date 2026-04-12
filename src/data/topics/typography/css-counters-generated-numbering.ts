import type { Topic } from "@/types/topic";

export const cssCountersGeneratedNumbering: Topic = {
  id: "css-counters-generated-numbering",
  name: "CSS Counters for Generated Numbering",
  categoryId: "typography",
  description:
    "CSS counters can auto-number headings, steps, and nested sections without hardcoding every label by hand.",
  tags: [
    "typography",
    "counter",
    "generated-content",
    "lists",
    "pseudo-elements",
    "docs",
  ],
  route: "/topics/css-counters-generated-numbering",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Stop Typing 1., 2., 3. by Hand",
          content:
            "Any time a design needs visual numbering outside a plain ordered list, many developers fall back to hardcoded text in the markup. That becomes brittle immediately: insert one step in the middle and every number after it is wrong. CSS counters solve that by letting the browser maintain numbering for you. You reset a counter on a container, increment it on each item, and print the current value with generated content.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Manual Labels vs Auto Numbering",
          left: {
            label: "Manual numbering",
            code: `<article class="step-card">
  <h3>1. Audit the UI</h3>
</article>

<article class="step-card">
  <h3>2. Map the fragile states</h3>
</article>

<!-- Insert one new card above and now every label is wrong. -->`,
            description:
              "This looks harmless until content is reordered, inserted, filtered, or nested.",
          },
          right: {
            label: "CSS counters",
            code: `.guide {
  counter-reset: step;
}

.step-card {
  counter-increment: step;
}

.step-card h3::before {
  content: counter(step, decimal-leading-zero) ". ";
}`,
            description:
              "The browser owns the numbering, so labels stay in sync with the document order automatically.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Counters + Nested counters()",
          code: `.guide {
  counter-reset: section;
}

.chapter {
  counter-increment: section;
  counter-reset: task;
}

.chapter__title::before {
  content: "Step " counter(section, decimal-leading-zero);
}

.task {
  counter-increment: task;
}

.task::before {
  content: counter(section) "." counter(task) " ";
}

/* For deeper hierarchies, counters() joins the stack with a separator */
.subtask::before {
  content: counters(item, ".") " ";
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<section class="guide-demo">
  <article class="chapter">
    <h3 class="chapter__title">Audit the Existing UI</h3>
    <p class="chapter__summary">Start by finding the screens where spacing, hierarchy, or state styling is inconsistent.</p>
    <div class="tasks">
      <p class="task">Catalogue repeated components across the product</p>
      <p class="task">Mark the places where state styling diverges</p>
      <p class="task">Group issues into layout, color, and motion buckets</p>
    </div>
  </article>

  <article class="chapter">
    <h3 class="chapter__title">Build the Design Tokens</h3>
    <p class="chapter__summary">Use the same structural CSS, but let counters keep the numbering synchronized.</p>
    <div class="tasks">
      <p class="task">Define spacing and type scales</p>
      <p class="task">Extract reusable semantic color tokens</p>
      <p class="task">Document the rules in one shared source</p>
    </div>
  </article>

  <article class="chapter">
    <h3 class="chapter__title">Ship the Migration</h3>
    <p class="chapter__summary">Adding, reordering, or removing any chapter above automatically updates every label below.</p>
    <div class="tasks">
      <p class="task">Roll changes through the highest-traffic screens first</p>
      <p class="task">Measure regressions before and after</p>
      <p class="task">Lock the pattern into your component library</p>
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
  padding: 20px;
  background: radial-gradient(circle at top, rgba(37, 99, 235, 0.18), transparent 40%), #020617;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.guide-demo {
  width: min(100%, 640px);
  display: grid;
  gap: 14px;
  counter-reset: section;
}
.chapter {
  counter-increment: section;
  counter-reset: task;
  padding: 18px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.96));
  border: 1px solid rgba(148, 163, 184, 0.2);
  box-shadow: 0 18px 30px rgba(15, 23, 42, 0.22);
  color: #e2e8f0;
}
.chapter__title {
  margin: 0;
  display: grid;
  gap: 8px;
  font-size: 19px;
  line-height: 1.15;
}
.chapter__title::before {
  content: "Step " counter(section, decimal-leading-zero);
  display: inline-flex;
  width: fit-content;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.16);
  color: #bfdbfe;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.chapter__summary {
  margin: 10px 0 0;
  color: #cbd5e1;
  font-size: 13px;
  line-height: 1.55;
}
.tasks {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}
.task {
  counter-increment: task;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  padding: 10px 12px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.6);
  color: #e2e8f0;
  font-size: 13px;
  line-height: 1.45;
}
.task::before {
  content: counter(section) "." counter(task);
  min-width: 34px;
  border-radius: 999px;
  padding: 2px 8px;
  background: rgba(96, 165, 250, 0.18);
  color: #bfdbfe;
  font-size: 11px;
  font-weight: 800;
  text-align: center;
}`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Counter Guidelines",
          dos: [
            "Use counters for generated labels on cards, timelines, tables of contents, FAQs, and structured documentation blocks.",
            "Reset counters intentionally at each new hierarchy level so nested numbering stays predictable.",
            "Combine counters with pseudo-elements so you can style the visual label separately from the main text.",
          ],
          donts: [
            "Don't replace a semantic ordered list with generic divs if the content is truly a list and screen reader order matters.",
            "Don't put important, unique meaning only in generated counter text without checking how the content is announced to assistive technology.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title:
            "Counters are perfect for visual numbering, not semantic truth",
          content:
            "If the numbered structure is genuinely an ordered list of steps, `<ol>` should still be your first choice because the semantics come for free. CSS counters become especially valuable when the UI is not literally a list element, or when you need custom nested numbering styles like badges, chapter labels, or composite section indexes.",
        },
      },
    ],
  },
};
