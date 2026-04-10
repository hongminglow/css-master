import type { Topic } from "@/types/topic";

export const asymmetricTransitionDelays: Topic = {
  id: "asymmetric-transition-delays",
  name: "Asymmetric Transition Hooks",
  categoryId: "animations",
  description: "Writing two different transitions for hover vs un-hover states to create wildly different entering and exiting animations.",
  tags: ["animations", "transition", "hover", "timing", "delays"],
  route: "/topics/asymmetric-transition-delays",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Breaking Symmetrical Timing",
          content: "When you put `transition: all 0.3s` directly on a `.button` class, hovering the button takes 0.3s. When you pull your mouse away, the 'de-hover' reversal also takes 0.3s. They are perfectly symmetrical. But high-end UI design is almost always asymmetrical. A massive popover error menu should appear instantly to capture attention, but when closed, it should fade away slowly so it isn't jarring. By defining transitions specifically inside the hover state, we gain entirely separate control of the enter vs exit timeline.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.dropdown-menu {
  opacity: 0;
  
  /* 1. The Default Exit State */
  /* This runs when the hover effect ENDS. 
     We give it a long 0.5s fade to ease out. */
  transition: opacity 0.5s ease-in;
}

.dropdown-parent:hover .dropdown-menu {
  opacity: 1;
  
  /* 2. The Active Enter State */
  /* This transitions OVERRIDES the default as soon 
     as the mouse touches the parent. 
     Result: It appears instantly in 0.1s. */
  transition: opacity 0.1s ease-out;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .asy-box {
    width: 100px;
    height: 100px;
    background: #1e293b;
    border: 2px solid #334155;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    
    /* When mouse LEAVES (Exit) -> extremely slow color bleed */
    transition: all 1.5s ease-out;
  }
  
  .asy-box:hover {
    background: #3b82f6;
    border-color: white;
    transform: translateY(-10px);
    
    /* When mouse ENTERS (Enter) -> instant snapping pop */
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>

<div style="padding: 3rem; background: #0f172a; border-radius: 8px; display: flex; justify-content: center;">
  <div class="asy-box">Touch Me</div>
</div>`,
          css: `/* Notice that moving your mouse IN causes an instant snappy reaction. Moving your mouse OUT causes a very slow, drifting return to normal. */`,
        },
      },
      {
        type: "workflow",
        data: {
          title: "The Delay Superpower",
          steps: [
            {
              number: 1,
              title: "Tooltip Anti-Flicker",
              description: "When entering, add a `transition-delay: 0.5s`. This means the tooltip won't even start fading in unless the user hovers for a full half-second, preventing tooltips from flashing visually when the user is just moving their mouse across the screen.",
            },
            {
              number: 2,
              title: "Instant Dismiss",
              description: "On the exit transition, set `transition-delay: 0s` and `transition-duration: 0.1s`. So when they accidentally hover away, it instantly vanishes instead of lingering awkwardly.",
            },
            {
              number: 3,
              title: "Drawer Menus",
              description: "Slide in slowly to feel premium, but slide out quickly when dismissed to feel out-of-the-way.",
            },
          ],
        },
      },
    ],
  },
};
