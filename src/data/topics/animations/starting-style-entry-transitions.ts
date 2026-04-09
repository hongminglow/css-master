import type { Topic } from "@/types/topic";

export const startingStyleEntryTransitions: Topic = {
  id: "starting-style-entry-transitions",
  name: "Starting Style Solves Entry Transitions",
  categoryId: "animations",
  description:
    "Mounted elements usually appear in their final state instantly. `@starting-style` gives CSS a true starting point so dialogs, toasts, and popovers can animate in without JS choreography.",
  tags: ["animations", "starting-style", "transitions", "dialogs", "toast", "ui"],
  route: "/topics/starting-style-entry-transitions",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Why Enter Transitions Have Been Awkward",
          content:
            "Classic CSS transitions need a before state and an after state. Newly inserted elements only arrive in their final state, which is why so many apps resort to JavaScript timing tricks like 'mount hidden, wait a tick, then add an active class'. `@starting-style` finally lets CSS define that starting snapshot explicitly, so the browser can animate from it during insertion.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Mounted Instantly vs Transitioned In",
          subtitle:
            "Reloading the preview makes the difference obvious. One toast simply appears. The other enters smoothly on first paint.",
          left: {
            label: "❌ Final state only",
            code: `.toast {
  opacity: 1;
  transform: translateY(0);
  transition: opacity .35s ease, transform .35s ease;
}`,
            html: `
<div class="stage">
  <div class="toast">
    <strong>Saved</strong>
    <span>Your theme settings were synced.</span>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top, rgba(239,68,68,0.18), transparent 30%), #0f172a;
  font-family: Inter, system-ui, sans-serif;
}
.stage {
  width: min(100% - 30px, 320px);
  min-height: 160px;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 18px;
}
.toast {
  width: 100%;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255,255,255,0.95);
  color: #0f172a;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.35);
  opacity: 1;
  transform: translateY(0);
  transition: opacity .35s ease, transform .35s ease;
}
strong {
  display: block;
  margin-bottom: 4px;
  font-size: 15px;
}
span { color: #475569; font-size: 14px; }
`,
            description:
              "The toast has a transition declared, but nothing changes on insertion, so there is no real entry animation.",
          },
          right: {
            label: "✅ Define the starting snapshot",
            code: `.toast {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity .35s ease, transform .35s ease;
}

@starting-style {
  .toast {
    opacity: 0;
    transform: translateY(18px) scale(.96);
  }
}`,
            html: `
<div class="stage">
  <div class="toast">
    <strong>Saved</strong>
    <span>Your theme settings were synced.</span>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top, rgba(37,99,235,0.18), transparent 30%), #0f172a;
  font-family: Inter, system-ui, sans-serif;
}
.stage {
  width: min(100% - 30px, 320px);
  min-height: 160px;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 18px;
}
.toast {
  width: 100%;
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255,255,255,0.96);
  color: #0f172a;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.35);
  opacity: 1;
  transform: translateY(0) scale(1);
  transition: opacity .35s ease, transform .35s ease;
}
@starting-style {
  .toast {
    opacity: 0;
    transform: translateY(18px) scale(.96);
  }
}
strong {
  display: block;
  margin-bottom: 4px;
  font-size: 15px;
}
span { color: #475569; font-size: 14px; }
`,
            description:
              "The browser now has a real starting point for the inserted element, so the entry motion can happen without extra classes or timers.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Great Candidates for `@starting-style`",
          code: `dialog[open],
[popover]:popover-open,
.toast,
.drawer[data-open="true"] {
  opacity: 1;
  transform: none;
  transition: opacity 200ms ease, transform 200ms ease;
}

@starting-style {
  dialog[open],
  [popover]:popover-open,
  .toast,
  .drawer[data-open="true"] {
    opacity: 0;
    transform: translateY(12px);
  }
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Think of it as insertion-state CSS",
          content:
            "Reach for `@starting-style` whenever a component enters the DOM or flips into an open state and you want a normal transition to work immediately. It is especially useful for dialogs, popovers, drawers, and transient notifications.",
        },
      },
    ],
  },
};
