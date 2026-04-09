import type { Topic } from "@/types/topic";

export const fluidTypeClamp: Topic = {
  id: "fluid-type-clamp",
  name: "Fluid Type with Clamp",
  categoryId: "typography",
  description:
    "Make text scale smoothly across screen sizes without giant desktop headlines or microscopic mobile copy.",
  tags: ["typography", "clamp", "fluid-type", "responsive", "readability"],
  route: "/topics/fluid-type-clamp",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Fluid Does Not Mean Unbounded",
          content:
            "A lot of developers discovered viewport-based typography with `vw`, then immediately hit the downside: huge displays produce absurdly large text, and tiny screens can still become too small to read. `clamp()` solves that by setting a minimum, an ideal fluid value, and a maximum. You get continuous scaling without surrendering control.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Raw Viewport Type vs Bounded Fluid Type",
          subtitle:
            "The headline on the right still grows fluidly, but it stays within sensible reading limits.",
          left: {
            label: "❌ Pure viewport units",
            code: `.hero-title {
  font-size: 7vw;
}`,
            html: `
<section class="hero broken">
  <p class="eyebrow">Design Systems</p>
  <h1 class="hero-title">Scale One Interface Across Every Screen</h1>
</section>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.hero {
  width: min(100% - 32px, 360px);
  padding: 22px;
  border-radius: 24px;
  background: white;
  border: 1px solid #cbd5e1;
}
.eyebrow {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 11px;
  font-weight: 700;
  color: #b91c1c;
}
.hero-title {
  margin: 0;
  font-size: 7vw;
  line-height: 0.95;
  color: #0f172a;
}
`,
            description:
              "Viewport-only text feels clever at first, but it has no guardrails, so it can become too small or too large very quickly.",
          },
          right: {
            label: "✅ Use clamp",
            code: `.hero-title {
  font-size: clamp(2rem, 6vw, 4.5rem);
}`,
            html: `
<section class="hero fixed">
  <p class="eyebrow">Design Systems</p>
  <h1 class="hero-title">Scale One Interface Across Every Screen</h1>
</section>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #eff6ff;
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.hero {
  width: min(100% - 32px, 360px);
  padding: 22px;
  border-radius: 24px;
  background: white;
  border: 1px solid #bfdbfe;
}
.eyebrow {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 11px;
  font-weight: 700;
  color: #2563eb;
}
.hero-title {
  margin: 0;
  font-size: clamp(2rem, 6vw, 4.5rem);
  line-height: 0.95;
  color: #0f172a;
}
`,
            description:
              "The title still scales smoothly, but it never drops below a readable floor or exceeds a sensible maximum.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Start with type, then spacing",
          content:
            "Once `clamp()` works well for headings, extend the same idea to gaps, padding, and section spacing. A lot of responsive polish comes from making rhythm fluid too, not just font sizes.",
        },
      },
    ],
  },
};
