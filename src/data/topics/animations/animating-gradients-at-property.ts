import type { Topic } from "@/types/topic";

export const animatingGradientsAtProperty: Topic = {
  id: "animating-gradients-at-property",
  name: "Animating Gradients with @property",
  categoryId: "animations",
  description: "Bypass the engine restriction strictly preventing gradient transitions by using the modern @property declaration.",
  tags: ["animations", "gradient", "property", "transition", "houdini"],
  route: "/topics/animating-gradients-at-property",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Impossible Gradient Animation",
          content: "You cannot transition or animate a CSS gradient via `background-image: linear-gradient(...)` natively. Browsers only know how to interpolate numbers or solid colors, not full image functions. However, thanks to the CSS Houdini `@property` API natively landing in all browsers, you can strictly type a CSS variable as a `<color>` and animate the *variable* securely inside the gradient.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* 1. Register the variable and STRICTLY type it as a color */
@property --grad-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #3b82f6; /* Blue */
}

.gradient-box {
  /* 2. Feed the variable into the un-animatable gradient */
  background: linear-gradient(135deg, var(--grad-color), #0f172a);
  
  /* 3. Transition the VARIABLE itself! */
  transition: --grad-color 0.5s ease;
}

.gradient-box:hover {
  /* 4. Update the variable. The browser knows it's a color, 
        so it perfectly interpolates the shift. */
  --grad-color: #ef4444; /* Red */
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  @property --demo-color-1 {
    syntax: "<color>";
    inherits: false;
    initial-value: #3b82f6; 
  }
  @property --demo-color-2 {
    syntax: "<color>";
    inherits: false;
    initial-value: #8b5cf6;
  }
  
  .anim-grad-btn {
    padding: 1rem 3rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 99px;
    cursor: pointer;
    background: linear-gradient(90deg, var(--demo-color-1), var(--demo-color-2));
    transition: --demo-color-1 0.5s, --demo-color-2 0.5s;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
  }
  
  .anim-grad-btn:hover {
    --demo-color-1: #ef4444;
    --demo-color-2: #f59e0b;
  }
</style>

<div style="padding: 3rem; background: #0f172a; border-radius: 8px; text-align: center;">
  <button class="anim-grad-btn">Hover Me</button>
  <p style="color: #64748b; margin-top: 1.5rem; font-size: 0.9rem;">
    A silky smooth transition between massive gradient definitions.
  </p>
</div>`,
          css: `/* Not just colors—you can type variables as <angle> to animate spinning conic gradients, or <length> for expanding radials! */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Browser Support",
          content: "As of 2024, `@property` enjoys universal baseline support across all major modern browsers (Chrome, Firefox, Safari). It is totally safe and highly encouraged to use in production.",
        },
      },
    ],
  },
};
