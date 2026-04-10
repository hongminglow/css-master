import type { Topic } from "@/types/topic";

export const animationPlayStateHover: Topic = {
  id: "animation-play-state-hover",
  name: "Pausing Animations on Hover",
  categoryId: "animations",
  description: "A simple user experience trick to pause infinite running animations when users try to interact with them.",
  tags: ["animations", "keyframes", "hover", "play-state", "ux"],
  route: "/topics/animation-play-state-hover",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Moving Target Problem",
          content: "Infinite CSS animations (like auto-scrolling ticker tapes, rotating coins, or bouncing arrows) are visually engaging. But they are terrible for UX if the user actually wants to read the text or click the object because the target keeps moving away from the mouse cursor. `animation-play-state` is an often-forgotten property that elegantly solves this.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.ticker-tape {
  animation: slide-left 20s linear infinite;
}

/* Stop the animation immediately when the user hovers! */
.ticker-tape:hover {
  animation-play-state: paused;
}

/* Also good for accessibility when elements receive keyboard focus */
.ticker-tape:focus-within {
  animation-play-state: paused;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  .spinner {
    width: 60px;
    height: 60px;
    border: 6px solid #334155;
    border-top-color: #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    cursor: pointer;
  }
  .spinner:hover {
    /* The trick! */
    animation-play-state: paused;
    border-top-color: #22c55e;
  }
</style>

<div style="padding: 2rem; background: #0f172a; border-radius: 8px; display: flex; flex-direction: column; align-items: center; gap: 1rem;">
  <p style="color: #cbd5e1; margin: 0;">Hover the spinner to pause its rotation instantly.</p>
  <div class="spinner"></div>
</div>`,
          css: `/* The animation resumes exactly from the spot it paused at when the hover state ends. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Not Just for Hover",
          content: "You can toggle a `.paused` utility class via JavaScript (like when a 'Pause UI' button is clicked) to orchestrate complex playing/pausing of entirely separate timeline animations without math.",
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Accessibility Win",
          dos: [
            "Use it combined with `:focus-within` so keyboard users who tab into your moving carousel can actually read the options without them flying by.",
          ],
          donts: [
            "Don't rely on JS to calculate transforms and pause things manually. Let the browser engine handle it natively.",
          ],
        },
      },
    ],
  },
};
