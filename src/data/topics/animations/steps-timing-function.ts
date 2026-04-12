import type { Topic } from "@/types/topic";

export const stepsTimingFunction: Topic = {
  id: "steps-timing-function",
  name: "Retro Sprite Animations with steps()",
  categoryId: "animations",
  description:
    "Use the steps() CSS timing function to create frame-by-frame sprite animations, blinking cursors, and typing effects.",
  tags: ["animations", "keyframes", "steps", "sprite", "pixel-art"],
  route: "/topics/steps-timing-function",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Unsung Timing Function",
          content:
            "When we write animations, we usually rely on `ease`, `linear`, or `cubic-bezier`. These create fluid interpolations from point A to point B. But what if you explicitly *don't* want fluid interpolation? What if you're animating a 2D RPG character walking, and you want to jump explicitly from Frame 1 to Frame 2 to Frame 3 without any smoothing? The `steps()` timing function slices an animation into distinct hardware-level 'jumps'.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

.typewriter-text {
  overflow: hidden; /* Hide the overflowed letters */
  border-right: 2px solid white; /* The cursor */
  white-space: nowrap;

  /* If this 20-character sentence used 'linear',
     the letters would get sliced in half as they grew!
     With steps(20), it perfectly pops
     one character onto screen at a time. */
  animation: typing 2s steps(20, end) forwards;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  @keyframes blink-cursor {
    from, to { border-color: transparent }
    50% { border-color: #3b82f6; }
  }

  @keyframes type-demo {
    0% { width: 0; }
    to { width: 14ch; }
  }

  .typing-demo {
    width: 14ch;
    font-family: monospace;
    font-size: 1.5rem;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid #3b82f6;
    margin: 0 auto;

    /* 14 steps perfectly matches the 14 characters in 'Hello, World!' */
    animation:
      type-demo 2.8s steps(14) 1 forwards,
      blink-cursor .5s step-end infinite alternate;
  }
</style>

<div style="padding: 3rem; background: #0f172a; border-radius: 8px; text-align: center;">
  <div class="typing-demo">Hello, World!</div>
  <p style="color: #64748b; font-size: 0.8rem; margin-top: 2rem;">Smooth linear transitions would painfully cut characters in half during animation.</p>
</div>`,
          replayable: true,
          replayLabel: "Replay Typing",
          css: `/* Ensure you use a monospace font or 'ch' (character width) units so that every step is exactly equal to one letter's width. */`,
        },
      },
      {
        type: "workflow",
        data: {
          title: "Common Applications",
          steps: [
            {
              number: 1,
              title: "Typing Effects",
              description:
                "Combine with `overflow: hidden` and monospace fonts to simulate a terminal.",
            },
            {
              number: 2,
              title: "Video Game Sprite Sheets",
              description:
                "Moving a background-image's `background-position` explicitly in `steps(8)` across an 8-frame walk cycle loaded as a single PNG image.",
            },
            {
              number: 3,
              title: "Blinking Cursors",
              description:
                "Using `steps(1)` or `step-end` to make a cursor instantly toggle between transparent and visible without fading in or out.",
            },
          ],
        },
      },
    ],
  },
};
