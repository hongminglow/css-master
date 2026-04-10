import type { Topic } from "@/types/topic";

export const springBounceCubicBezier: Topic = {
  id: "spring-bounce-cubic-bezier",
  name: "Bouncing Cubic Bezier Curves",
  categoryId: "animations",
  description: "Creating physical, spring-like bounce animations by overpowering cubic-bezier values beyond 1.0.",
  tags: ["animations", "cubic-bezier", "spring", "bounce", "physics"],
  route: "/topics/spring-bounce-cubic-bezier",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Escaping the Scale (1.0)",
          content: "Most CSS transitions use `ease` or `ease-in-out`. When you write a hover state that scales an element from `1` to `1.2`, it smoothly interpolates there and stops. However, if you explicitly define a custom `cubic-bezier` timing function using mathematically exaggerated control points—specifically plotting numbers greater than `1` or less than `0`—the animation will literally 'overshoot' its target destination, then snap back, creating a highly realistic physical spring or bounce effect.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.bouncing-card {
  transform: translateY(0);
  
  /* The Magic 1.75! 
     1.0 is the destination. 1.75 means the animation 
     will physically push PAST the destination by 75% 
     before rubber-banding backward. */
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.75);
}

.bouncing-card:hover {
  transform: translateY(-20px);
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .btn-bounce {
    padding: 1rem 3rem;
    font-size: 1.25rem;
    font-weight: 800;
    color: white;
    background: #3b82f6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    
    /* The Overshoot Bezier */
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .btn-bounce:hover {
    transform: scale(1.15) rotate(-3deg);
    background: #ef4444;
  }
</style>

<div style="padding: 3rem; background: #0f172a; border-radius: 8px; text-align: center;">
  <button class="btn-bounce">Hover For Physics</button>
  <p style="color: #64748b; font-size: 0.9rem; margin-top: 1.5rem;">
    The button expands beyond scale(1.15) and rotates past -3deg, then physically springs back to rest without the need for complex multi-step @keyframes!
  </p>
</div>`,
          css: `/* The same effect works in reverse: supplying a negative value (e.g. -0.5) to the initialization curve will briefly pull the animation 'backwards' before launching it forwards, creating an anticipation wind-up effect. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Visualizing the Curves",
          content: "You don't need to guess these math values. The browser DevTools (Chrome/Firefox/Safari) have built-in visualizers. Click the little 'curve' icon next to any timing property in the styles pane, and physically drag the handles above the top bounding box line to generate spring equations on the fly.",
        },
      },
    ],
  },
};
