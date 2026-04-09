import type { Topic } from "@/types/topic";

export const intrinsicSizingFunctions: Topic = {
  id: "intrinsic-sizing-functions",
  name: "Min, Max, and Clamp for Intrinsic Sizing",
  categoryId: "responsive",
  description:
    "Instead of stacking breakpoint after breakpoint, let sizing functions express natural constraints directly in CSS.",
  tags: ["responsive", "min", "max", "clamp", "sizing", "intrinsic-layout"],
  route: "/topics/intrinsic-sizing-functions",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Breakpoints Are Not Always the Best Tool",
          content:
            "A surprising amount of responsive CSS is really just a set of size constraints: 'never exceed this width', 'never shrink below this minimum', or 'grow fluidly but stop at a cap'. Those are not screen-specific decisions. They are intrinsic sizing rules. Functions like `min()`, `max()`, and `clamp()` let you describe those rules directly, which often removes whole blocks of media queries.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Hard-Coded Width vs Intrinsic Constraint",
          subtitle:
            "Both examples render the same promo card inside a narrow device frame. One overflows. The other fits naturally without a breakpoint.",
          left: {
            label: "❌ Fixed dimensions",
            code: `.promo {
  width: 28rem;
  padding: 2rem;
}`,
            html: `
<div class="device">
  <article class="promo broken">
    <span class="eyebrow">Launch Notes</span>
    <h3>Design tokens are now live across every product surface</h3>
    <p>Hard-coded widths feel okay until the component lands in a smaller container.</p>
  </article>
</div>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #e2e8f0; }
.device {
  width: 260px;
  margin: 18px auto;
  padding: 14px;
  border-radius: 24px;
  background: #0f172a;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
}
.promo {
  width: 28rem;
  padding: 2rem;
  border-radius: 22px;
  background: linear-gradient(160deg, #ffffff, #f8fafc);
  color: #0f172a;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.18);
}
.eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #b91c1c;
}
h3 { margin: 0 0 10px; line-height: 1.05; font-size: 28px; }
p { margin: 0; color: #475569; line-height: 1.45; }
`,
            description:
              "The component assumes one exact width, so it simply spills out of the container when space gets tight.",
          },
          right: {
            label: "✅ Use `min()` and `clamp()`",
            code: `.promo {
  width: min(100%, 28rem);
  padding: clamp(1rem, 3vw, 2rem);
}

h3 {
  font-size: clamp(1.5rem, 4vw, 2.2rem);
}`,
            html: `
<div class="device">
  <article class="promo fixed">
    <span class="eyebrow">Launch Notes</span>
    <h3>Design tokens are now live across every product surface</h3>
    <p>The card stretches when it can, shrinks when it must, and caps itself before getting absurdly large.</p>
  </article>
</div>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #dbeafe; }
.device {
  width: 260px;
  margin: 18px auto;
  padding: 14px;
  border-radius: 24px;
  background: #0f172a;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
}
.promo {
  width: min(100%, 28rem);
  padding: clamp(1rem, 3vw, 2rem);
  border-radius: 22px;
  background: linear-gradient(160deg, #ffffff, #eff6ff);
  color: #0f172a;
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.16);
}
.eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
}
h3 {
  margin: 0 0 10px;
  line-height: 1.05;
  font-size: clamp(1.5rem, 4vw, 2.2rem);
}
p { margin: 0; color: #475569; line-height: 1.45; }
`,
            description:
              "The same component now adapts to whatever width it is given while still preserving readable spacing and type scale.",
          },
        },
      },
      {
        type: "table",
        data: {
          title: "Sizing Functions Cheat Sheet",
          headers: ["Function", "Mental Model", "Common Use"],
          rows: [
            [
              "`min(A, B)`",
              "Pick the smaller result",
              "Cap a component to `100%` or a max width, such as `width: min(100%, 42rem)`.",
            ],
            [
              "`max(A, B)`",
              "Pick the larger result",
              "Guarantee a floor, such as `padding-inline: max(1rem, 4vw)`.",
            ],
            [
              "`clamp(min, ideal, max)`",
              "Grow fluidly between two hard stops",
              "Fluid spacing, typography, and widths without media query stair-steps.",
            ],
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "A strong default pattern",
          content:
            "Whenever you catch yourself writing a media query only to change one size value, pause first. There is a good chance that `min()`, `max()`, or `clamp()` can express that constraint more directly and more readably.",
        },
      },
    ],
  },
};
