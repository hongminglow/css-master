import type { Topic } from "@/types/topic";

export const gpuAcceleratedAnimations: Topic = {
  id: "gpu-accelerated-animations",
  name: "CPU vs GPU Animation (Layout Thrashing)",
  categoryId: "animations",
  description:
    "Stop animating margins and widths! Learn how to achieve 60fps buttery smooth UI by leveraging the GPU compositor.",
  tags: ["performance", "gpu", "transform", "opacity", "jank"],
  route: "/topics/gpu-accelerated-animations",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Golden Rule of Performance",
          content:
            "The single biggest mistake developers make when building interactive web applications is animating dimensional properties like `width`, `height`, `margin`, `top`, or `left`. Changing any of these forces the browser's CPU to recalculate the layout tree and repaint the pixel structure for the entire page frame-by-frame. This is computationally agonizing and results in stuttering (jank).",
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "The Compositor Thread",
          content:
            "Modern browsers have a dedicated graphics thread (the compositor) running on your computer's GPU. It is hyper-optimized to animate exactly two properties virtually instantly: `transform` and `opacity`.",
        },
      },
      {
        type: "table",
        data: {
          title: "The Animation Hierarchy",
          headers: ["Property Animating", "Browser Action", "Cost", "FPS"],
          rows: [
            [
              "margin, top, width",
              "Forces Layout & Repaint",
              "Extremely High (CPU)",
              "Often < 30fps",
            ],
            ["color, background", "Forces Repaint Only", "Moderate", "Solid"],
            [
              "transform, opacity",
              "Compositor only (GPU)",
              "Extremely Low",
              "Butter 60fps+",
            ],
          ],
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Layout Thrashing vs GPU Layer Acceleration",
          subtitle:
            "Hover the lane. The red example changes real layout and pushes the sibling off its anchor. The green example only moves pixels, so the sibling stays locked to the same anchor point.",
          left: {
            label: "❌ Animating Layout (Sibling Shifts)",
            code: ".lane {\n  display: grid;\n  grid-template-columns: auto auto 1fr;\n  align-items: center;\n  gap: 12px;\n}\n\n.box {\n  margin-right: 0;\n  transition: margin-right 0.4s ease;\n}\n\n.lane:hover .box {\n  margin-right: 92px;\n}",
            html: `
<div class="stage bad-stage">
  <p class="label">Hover anywhere in the lane</p>
  <div class="lane">
    <div class="box cpu-bad">Layout Box</div>
    <div class="sibling-slot">
      <div class="anchor">anchor</div>
      <div class="sibling">Sibling chip</div>
    </div>
    <div class="trail"></div>
  </div>
  <div class="guide">The sibling starts at the anchor, then gets shoved to the right because margin participates in layout.</div>
</div>
            `,
            css: `
.stage {
  height: 100%;
  padding: 18px;
  border-radius: 16px;
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: #e2e8f0;
  font-family: "JetBrains Mono", monospace;
}
.label {
  margin: 0 0 12px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fca5a5;
}
.lane {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: 12px;
  min-height: 58px;
  padding: 10px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(248, 113, 113, 0.28);
  overflow: hidden;
}
.box,
.sibling {
  display: grid;
  place-items: center;
  height: 38px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}
.cpu-bad {
  width: 92px;
  margin-right: 0;
  color: white;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  transition: margin-right 0.4s ease;
}
.lane:hover .cpu-bad {
  margin-right: 92px;
}
.sibling-slot {
  position: relative;
  display: grid;
  align-items: center;
}
.anchor {
  position: absolute;
  left: -2px;
  top: -18px;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fda4af;
}
.anchor::after {
  content: "";
  position: absolute;
  left: 0;
  top: 11px;
  width: 1px;
  height: 44px;
  background: rgba(253, 164, 175, 0.75);
}
.sibling {
  min-width: 94px;
  padding: 0 14px;
  color: #cbd5e1;
  background: #334155;
  border: 1px dashed #94a3b8;
}
.trail {
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(248, 113, 113, 0.55), rgba(248, 113, 113, 0));
}
.guide {
  margin-top: 12px;
  font-size: 11px;
  line-height: 1.45;
  color: #fecaca;
}
            `,
            description:
              "The sibling is part of the layout flow, so increasing margin moves its actual computed position away from the anchor.",
          },
          right: {
            label: "✅ Animating Transform (Sibling Stable)",
            code: ".lane {\n  display: grid;\n  grid-template-columns: auto auto 1fr;\n  align-items: center;\n  gap: 12px;\n}\n\n.box {\n  transform: translateX(0);\n  transition: transform 0.4s ease;\n}\n\n.lane:hover .box {\n  transform: translateX(92px);\n}",
            html: `
<div class="stage good-stage">
  <p class="label">Hover anywhere in the lane</p>
  <div class="lane">
    <div class="box gpu-good">GPU Box</div>
    <div class="sibling-slot">
      <div class="anchor">anchor</div>
      <div class="sibling">Sibling chip</div>
    </div>
    <div class="trail"></div>
  </div>
  <div class="guide">The sibling stays attached to the anchor because transform happens after layout is already done.</div>
</div>
            `,
            css: `
.stage {
  height: 100%;
  padding: 18px;
  border-radius: 16px;
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: #e2e8f0;
  font-family: "JetBrains Mono", monospace;
}
.label {
  margin: 0 0 12px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #86efac;
}
.lane {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: 12px;
  min-height: 58px;
  padding: 10px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(16, 185, 129, 0.32);
  overflow: visible;
}
.box,
.sibling {
  display: grid;
  place-items: center;
  height: 38px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}
.gpu-good {
  width: 92px;
  color: white;
  background: linear-gradient(135deg, #10b981, #059669);
  transform: translateX(0);
  transition: transform 0.4s ease;
  position: relative;
  z-index: 2;
}
.lane:hover .gpu-good {
  transform: translateX(92px);
}
.sibling-slot {
  position: relative;
  display: grid;
  align-items: center;
  z-index: 1;
}
.anchor {
  position: absolute;
  left: -2px;
  top: -18px;
  font-size: 9px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #86efac;
}
.anchor::after {
  content: "";
  position: absolute;
  left: 0;
  top: 11px;
  width: 1px;
  height: 44px;
  background: rgba(134, 239, 172, 0.8);
}
.sibling {
  min-width: 94px;
  padding: 0 14px;
  color: #cbd5e1;
  background: #334155;
  border: 1px dashed #94a3b8;
}
.trail {
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(16, 185, 129, 0.65), rgba(16, 185, 129, 0));
}
.guide {
  margin-top: 12px;
  font-size: 11px;
  line-height: 1.45;
  color: #bbf7d0;
}
            `,
            description:
              "Transform shifts only the painted layer, so the sibling remains on the same anchored layout coordinates.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "The will-change Hint (Use Sparingly)",
          code: `/* Creates a dedicated compositor layer ahead of time */
.heavy-element {
  will-change: transform;
}

/* ⚠️ WARNING: DO NOT apply to everything.
   Layers consume VRAM cache! */
* {
  will-change: auto; /* Always keep this default */
}`,
        },
      },
    ],
  },
};
