import type { Topic } from "@/types/topic";

export const staggeredEntryAnimations: Topic = {
  id: "staggered-entry-animations",
  name: "Staggered Entry Animations Without JavaScript",
  categoryId: "animations",
  description:
    "A small `animation-delay` pattern can make lists and card grids feel much more intentional without introducing scripting or orchestration libraries.",
  tags: ["animations", "stagger", "delay", "lists", "cards", "no-js"],
  route: "/topics/staggered-entry-animations",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Sequential Motion Changes Perceived Quality",
          content:
            "When every item appears at the exact same instant, interfaces can feel abrupt and mechanical. A subtle stagger adds rhythm and makes a group of cards read as a coordinated system. You do not need JavaScript timelines for simple entrance sequences either. CSS delays, custom properties, and structural selectors are often enough.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "All at Once vs Gentle Stagger",
          subtitle:
            "Even a tiny delay difference makes the grid feel more deliberate and easier for the eye to scan.",
          replayable: true,
          replayLabel: "Play staggered animation",
          left: {
            label: "❌ All cards animate together",
            code: `.card {
  animation: rise 500ms ease both;
}`,
            html: `
<section class="grid">
  <article class="card">1</article>
  <article class="card">2</article>
  <article class="card">3</article>
</section>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f8fafc; font-family: Inter, system-ui, sans-serif; }
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: min(100% - 32px, 320px);
}
.card {
  height: 90px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 28px;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, #ef4444, #f97316);
  animation: rise 500ms ease both;
}
@keyframes rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
`,
            description:
              "The motion works, but it feels abrupt because every item enters at the same time with no visual rhythm.",
          },
          right: {
            label: "✅ Add a stagger",
            code: `.card {
  animation: rise 500ms ease both;
  animation-delay: calc(var(--i) * 90ms);
}`,
            html: `
<section class="grid">
  <article class="card" style="--i:0">1</article>
  <article class="card" style="--i:1">2</article>
  <article class="card" style="--i:2">3</article>
</section>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #eff6ff; font-family: Inter, system-ui, sans-serif; }
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: min(100% - 32px, 320px);
}
.card {
  height: 90px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 28px;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  animation: rise 500ms ease both;
  animation-delay: calc(var(--i) * 90ms);
}
@keyframes rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
`,
            description:
              "A small delay offset creates a clearer entry order and makes the group feel composed instead of dumped onto the screen.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Two Practical Stagger Patterns",
          code: `/* With inline custom properties */
.item {
  animation-delay: calc(var(--i) * 80ms);
}

/* Or with structural selectors for known lengths */
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 80ms; }
.item:nth-child(3) { animation-delay: 160ms; }`,
        },
      },
    ],
  },
};
