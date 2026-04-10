import { Topic } from "@/types/topic";

export const conicGradientsCharts: Topic = {
  id: "conic-gradients-charts",
  name: "Conic Gradients for Charts & Borders",
  categoryId: "colors",
  description: "Using conic-gradient() to create CSS-only pie charts, color wheels, and animated borders.",
  tags: ["colors", "gradient", "conic", "charts", "border"],
  route: "/topics/conic-gradients-charts",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Circular Gradient",
          content: "While `linear-gradient` operates on an axis and `radial-gradient` radiates from a center, `conic-gradient` sweeps around a center point (like a radar sweep). This makes it the absolute perfect tool for basic pie charts and color wheels in pure CSS.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Soft vs Hard Stops",
          description: "How to turn a smooth gradient into a sharp pie chart.",
          left: {
            label: "Smooth (Color Wheel)",
            code: `.wheel {
  background: conic-gradient(
    red, 
    yellow, 
    lime, 
    aqua, 
    blue, 
    magenta, 
    red
  );
  border-radius: 50%;
}`,
          },
          right: {
            label: "Hard (Pie Chart)",
            code: `.pie {
  background: conic-gradient(
    #ef4444 0% 30%, 
    #3b82f6 30% 70%, 
    #10b981 70% 100%
  );
  border-radius: 50%;
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 2rem; justify-content: center; padding: 2rem; background: #0f172a; border-radius: 8px;">
  <!-- Smooth -->
  <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);"></div>
  
  <!-- Hard Stops (Pie) -->
  <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#ef4444 0deg 110deg, #3b82f6 110deg 250deg, #10b981 250deg 360deg);"></div>
</div>`,
          css: `/* Using hard stops (where one color ends at the exact degree/percentage the next begins) creates solid sectors */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Animated Glowing Borders",
          content: "A very popular modern trick is applying a conic-gradient to a slightly larger pseudo element behind a dark card, then rotating it via `@keyframes`. This creates a beautiful sweeping glow effect on the border.",
        },
      },
    ],
  },
};
