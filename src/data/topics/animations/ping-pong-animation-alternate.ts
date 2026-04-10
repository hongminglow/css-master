import type { Topic } from "@/types/topic";

export const pingPongAnimationAlternate: Topic = {
  id: "ping-pong-animation-alternate",
  name: "Ping-Pong Animations (Alternate)",
  categoryId: "animations",
  description: "Using animation-direction: alternate to create smooth, seamless looping animations without writing bloated keyframes.",
  tags: ["animations", "keyframes", "looping", "alternate", "direction"],
  route: "/topics/ping-pong-animation-alternate",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Return Trip",
          content: "A very common animation requirement is a 'pulsing' glow, or a bouncing ball, or a sliding element going left and right indefinitely. Beginners will manually write keyframes targeting `0%`, `50%`, and `100%` trying to perfectly mirror the return journey. This requires duplicate code and annoying math. CSS has `animation-direction: alternate`, which automatically plays the animation forwards, and then immediately plays it backwards natively.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Bloated Keyframes vs Native Reversal",
          left: {
            label: "Manual Math (Bloated)",
            code: `@keyframes float {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.icon {
  animation: float 2s ease-in-out infinite;
}`,
          },
          right: {
            label: "Alternate Direction (Clean)",
            code: `@keyframes float {
  /* Only define the start and end! */
  from { transform: translateY(0); }
  to   { transform: translateY(-20px); }
}

.icon {
  /* Play forward, then reverse! */
  animation: float 1s ease-in-out infinite alternate;
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  @keyframes heartbeat {
    from { transform: scale(1); filter: drop-shadow(0 0 0 rgba(239, 68, 68, 0)); }
    to { transform: scale(1.3); filter: drop-shadow(0 0 15px rgba(239, 68, 68, 0.8)); }
  }
  
  .heart {
    font-size: 3rem;
    /* 1. Plays forward in 0.5s (expands)
       2. Hits 'alternate' ruleset
       3. Reverses in 0.5s natively! (shrinks) */
    animation: heartbeat 0.5s ease-in-out infinite alternate;
  }
</style>

<div style="padding: 3rem; background: #0f172a; border-radius: 8px; display: flex; justify-content: center; align-items: center;">
  <div class="heart">❤️</div>
</div>`,
          css: `/* Not only is the code cleaner, but standard easing functions (like ease-in-out) are smoothly flipped during the return trip automatically! */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Timing Adjustments",
          content: "Remember that `alternate` completes ONE iteration on the way up, and ONE iteration on the way down. So if your old `0% 50% 100%` keyframe took `2s` total, your new `alternate` animation only needs to take `1s` because a full round-trip will take `2s`.",
        },
      },
    ],
  },
};
