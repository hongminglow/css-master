import type { Topic } from "@/types/topic";

export const gpuAcceleratedAnimations: Topic = {
  id: "gpu-accelerated-animations",
  name: "CPU vs GPU Animation (Layout Thrashing)",
  categoryId: "animations",
  description: "Stop animating margins and widths! Learn how to achieve 60fps buttery smooth UI by leveraging the GPU compositor.",
  tags: ["performance", "gpu", "transform", "opacity", "jank"],
  route: "/topics/gpu-accelerated-animations",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Golden Rule of Performance",
          content: "The single biggest mistake developers make when building interactive web applications is animating dimensional properties like `width`, `height`, `margin`, `top`, or `left`. Changing any of these forces the browser's CPU to recalculate the layout tree and repaint the pixel structure for the entire page frame-by-frame. This is computationally agonizing and results in stuttering (jank)."
        }
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "The Compositor Thread",
          content: "Modern browsers have a dedicated graphics thread (the compositor) running on your computer's GPU. It is hyper-optimized to animate exactly two properties virtually instantly: `transform` and `opacity`."
        }
      },
      {
        type: "table",
        data: {
          title: "The Animation Hierarchy",
          headers: ["Property Animating", "Browser Action", "Cost", "FPS"],
          rows: [
            ["margin, top, width", "Forces Layout & Repaint", "Extremely High (CPU)", "Often < 30fps"],
            ["color, background", "Forces Repaint Only", "Moderate", "Solid"],
            ["transform, opacity", "Compositor only (GPU)", "Extremely Low", "Butter 60fps+"]
          ]
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "Layout Thrashing vs GPU Layer Acceleration",
          subtitle: "Hover over the green boxes to trigger the animation. Notice how translating X leaves the original layout intact.",
          left: {
            label: "❌ Animating Margin (CPU Hurt)",
            code: ".box {\n  margin-left: 0;\n  transition: margin-left 0.5s ease;\n}\n\n.box:hover {\n  margin-left: 100px;\n}",
            html: `
<div class="container">
  <div class="box cpu-bad text">Hover ME</div>
  <div class="box sibling">Sibling (Pushed!)</div>
</div>
            `,
            css: `
.container { background: #0f172a; padding: 20px; height: 100%; font-family: monospace; }
.box { width: 100%; padding: 15px; color: white; border-radius: 8px; font-weight: bold; }
.cpu-bad { background: #ef4444; margin-left: 0; transition: margin-left 0.4s ease; margin-bottom: 20px;}
.cpu-bad:hover { margin-left: 50%; }
.sibling { background: #334155; transition: 0.4s ease; border: 1px dashed #94a3b8;}
            `
          },
          right: {
            label: "✅ Animating Transform (GPU Butter)",
            code: ".box {\n  transform: translateX(0);\n  transition: transform 0.5s ease;\n}\n\n.box:hover {\n  transform: translateX(100px);\n}",
            html: `
<div class="container">
  <div class="box gpu-good text">Hover ME</div>
  <div class="box sibling">Sibling (Safe)</div>
</div>
            `,
            css: `
.container { background: #0f172a; padding: 20px; height: 100%; font-family: monospace; }
.box { width: 100%; padding: 15px; color: white; border-radius: 8px; font-weight: bold; }
.gpu-good { background: #10b981; transform: translateX(0); transition: transform 0.4s ease; margin-bottom: 20px;}
.gpu-good:hover { transform: translateX(50%); }
.sibling { background: #334155; border: 1px dashed #94a3b8;}
            `
          }
        }
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
}`
        }
      }
    ]
  }
};
