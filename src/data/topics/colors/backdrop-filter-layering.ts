import type { Topic } from "@/types/topic";

export const backdropFilterLayering: Topic = {
  id: "backdrop-filter-layering",
  name: "Backdrop Filter Needs Contrast and Layering",
  categoryId: "colors",
  description:
    "Blur effects only look good when there is actually something behind them to blur, plus enough transparency and contrast to reveal it.",
  tags: ["colors", "effects", "backdrop-filter", "glassmorphism", "contrast", "layering"],
  route: "/topics/backdrop-filter-layering",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Blur Is Not Magic",
          content:
            "A lot of glassmorphism demos look great, but real implementations often disappoint because the blurred surface sits on a flat opaque background. `backdrop-filter` only has visual value when there is meaningful texture, color, or light behind the element. It also needs enough transparency so the backdrop can show through and enough contrast so the foreground content remains readable.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Opaque Card vs Real Glass Layer",
          subtitle:
            "The right side uses a translucent surface on top of a richer background, so the blur actually has something to work with.",
          left: {
            label: "❌ Blur on a dead backdrop",
            code: `.panel {
  background: white;
  backdrop-filter: blur(18px);
}`,
            html: `
<div class="stage broken">
  <div class="panel">
    <h3>Analytics</h3>
    <p>Blur is declared, but the backdrop is too flat to make the effect meaningful.</p>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: Inter, system-ui, sans-serif; background: #e2e8f0; }
.stage {
  width: min(100% - 32px, 320px);
  padding: 26px;
  border-radius: 28px;
  background: #cbd5e1;
}
.panel {
  padding: 18px;
  border-radius: 20px;
  background: white;
  backdrop-filter: blur(18px);
}
h3 { margin: 0 0 8px; color: #0f172a; }
p { margin: 0; color: #475569; line-height: 1.45; }
`,
            description:
              "The property exists, but the backdrop is too plain and the card too opaque, so the effect barely reads as glass.",
          },
          right: {
            label: "✅ Layer blur with translucency",
            code: `.panel {
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.28);
  backdrop-filter: blur(18px);
}`,
            html: `
<div class="stage fixed">
  <div class="panel">
    <h3>Analytics</h3>
    <p>The background texture, transparency, and border all help the glass effect read clearly.</p>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: Inter, system-ui, sans-serif; }
.stage {
  width: min(100% - 32px, 320px);
  padding: 26px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 20% 20%, rgba(56,189,248,0.9), transparent 35%),
    radial-gradient(circle at 80% 25%, rgba(59,130,246,0.85), transparent 30%),
    radial-gradient(circle at 60% 80%, rgba(16,185,129,0.65), transparent 30%),
    #0f172a;
}
.panel {
  padding: 18px;
  border-radius: 20px;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.28);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 50px rgba(15,23,42,0.2);
}
h3 { margin: 0 0 8px; color: white; }
p { margin: 0; color: rgba(255,255,255,0.84); line-height: 1.45; }
`,
            description:
              "Now the blur has actual color and depth behind it, while transparency and a subtle stroke make the surface feel like glass instead of a plain box.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Keep readability in charge",
          content:
            "Treat `backdrop-filter` as garnish, not structure. If text contrast drops or the UI relies on blur to separate layers, the effect is carrying too much weight.",
        },
      },
    ],
  },
};
