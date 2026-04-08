import type { Topic } from "@/types/topic";

export const dynamicColorMix: Topic = {
  id: "dynamic-color-mix",
  name: "Dynamic Theming with color-mix()",
  categoryId: "colors",
  description: "Mute, darken, and blend your CSS variables natively. Avoid heavy JS hex conversions or duplicating hundreds of CSS variables.",
  tags: ["color", "theme", "mix", "opacity", "variables"],
  route: "/topics/dynamic-color-mix",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The CSS Variable Nightmare",
          content: "When building Dark Mode systems, you generally define global CSS variables like `--primary: #3b82f6;`. But for hover states, transparent button backgrounds, or muted borders, you usually have to declare extra variables like `--primary-hover` or `--primary-muted`, or resort to SASS preprocessors which can't read native CSS variables dynamically."
        }
      },
      {
        type: "workflow",
        data: {
          title: "The color-mix() Solution",
          steps: [
            {
              number: 1,
              title: "Define pure roots",
              description: "Declare a strictly raw `--brand` CSS hex natively as normal."
            },
            {
              number: 2,
              title: "Mix for Opacity",
              description: "Use `color-mix(in srgb, var(--brand) 20%, transparent)` to create a perfect glassmorphism shade for a button background without redefining the color."
            },
            {
              number: 3,
              title: "Mix for Shade",
              description: "Mix with `black` or `white` directly to create a hover state: `color-mix(in srgb, var(--brand), black 15%)`"
            }
          ]
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "Generating Palettes on the Fly",
          subtitle: "By simply declaring ONE brand color variable, color-mix builds the button hover state, the transparent soft-background, and the active ring.",
          left: {
            label: "❌ The Old SCSS Route (Static)",
            code: "/* Cannot use live CSS variables */\n$brand: #3b82f6;\n\n.btn {\n  background: rgba($brand, 0.1);\n}\n.btn:hover {\n  background: darken($brand, 10%);\n}",
            html: `
<div class="mock-device">
  <p class="desc">A lot of code overhead to maintain palettes.</p>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; background: #e2e8f0; border-radius: 8px; font-family: sans-serif; display:flex; align-items:center; justify-content:center; }
.desc { color: #64748b; font-style: italic; }
            `
          },
          right: {
            label: "✅ Native color-mix()",
            code: ":root {\n  --brand: #8b5cf6; /* Switch once, updates everything */\n}\n\n.soft-btn {\n  color: var(--brand);\n  background: color-mix(in srgb, var(--brand) 15%, transparent);\n}\n\n.soft-btn:hover {\n  /* Mix with black to darken */\n  background: color-mix(in srgb, var(--brand) 25%, transparent);\n}",
            html: `
<div class="mock-device" style="--brand: #8b5cf6;">
  <button class="soft-btn">Dynamic Brand Button</button>
  <button class="soft-btn secondary" style="--brand: #10b981;">Secondary Button</button>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; background: #0f172a; border-radius: 8px; font-family: sans-serif; display:flex; flex-direction:column; align-items:center; justify-content:center; gap: 15px;}
.soft-btn { 
  font-weight: bold; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; transition: 0.2s;
  color: var(--brand);
  background: color-mix(in srgb, var(--brand) 15%, transparent);
}
.soft-btn:hover {
  background: color-mix(in srgb, var(--brand) 25%, transparent);
  transform: translateY(-1px);
}
            `
          }
        }
      }
    ]
  }
};
