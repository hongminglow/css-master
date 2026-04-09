import type { Topic } from "@/types/topic";

export const scrollSnapCarousels: Topic = {
  id: "scroll-snap-carousels",
  name: "Scroll Snap Makes Carousels Feel Native",
  categoryId: "responsive",
  description:
    "You can build smooth touch-friendly horizontal scrollers with CSS alone instead of shipping a full carousel library for simple cases.",
  tags: ["responsive", "scroll-snap", "carousel", "touch", "overflow", "mobile"],
  route: "/topics/scroll-snap-carousels",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Carousels Do Not Always Need JavaScript",
          content:
            "Many product strips, story rails, and card galleries only need momentum scrolling plus a pleasant resting position. `scroll-snap-type` and `scroll-snap-align` cover that surprisingly well. The result feels far more native on touch devices than a lot of over-scripted sliders, and the markup stays closer to ordinary overflow content.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Free Scroll vs Snap Points",
          subtitle:
            "The left rail can stop in awkward half-card positions. The right rail defines where each card should naturally settle.",
          left: {
            label: "❌ Plain overflow scrolling",
            code: `.rail {
  display: flex;
  overflow-x: auto;
  gap: 12px;
}`,
            html: `
<div class="phone">
  <div class="rail broken">
    <article class="card offset">A</article>
    <article class="card">B</article>
    <article class="card">C</article>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #e2e8f0; font-family: Inter, system-ui, sans-serif; }
.phone {
  width: 290px;
  padding: 18px 0 18px 18px;
  border-radius: 28px;
  background: #0f172a;
}
.rail {
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-right: 18px;
}
.rail::-webkit-scrollbar { display: none; }
.card {
  flex: 0 0 180px;
  height: 120px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-size: 38px;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, #ef4444, #f97316);
}
.offset { margin-left: -42px; }
`,
            description:
              "Plain overflow scrolling works, but it often lands between cards and feels less intentional on touch devices.",
          },
          right: {
            label: "✅ Add scroll snap",
            code: `.rail {
  display: flex;
  overflow-x: auto;
  gap: 12px;
  scroll-snap-type: x mandatory;
}

.card {
  scroll-snap-align: start;
}`,
            html: `
<div class="phone">
  <div class="rail fixed">
    <article class="card">A</article>
    <article class="card">B</article>
    <article class="card">C</article>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #dbeafe; font-family: Inter, system-ui, sans-serif; }
.phone {
  width: 290px;
  padding: 18px 0 18px 18px;
  border-radius: 28px;
  background: #0f172a;
}
.rail {
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-right: 18px;
  scroll-snap-type: x mandatory;
}
.rail::-webkit-scrollbar { display: none; }
.card {
  flex: 0 0 180px;
  height: 120px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-size: 38px;
  font-weight: 800;
  color: white;
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  scroll-snap-align: start;
}
`,
            description:
              "Each card becomes a defined resting point, so the strip behaves like a lightweight native carousel without extra libraries.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "A strong baseline combo",
          content:
            "Pair `scroll-snap-type` with `scroll-padding-inline` on the container and `scroll-snap-align` on each item. That gives you good resting positions while still letting the user swipe naturally.",
        },
      },
    ],
  },
};
