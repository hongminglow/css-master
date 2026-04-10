import type { Topic } from "@/types/topic";

export const transitionBehaviorDiscrete: Topic = {
  id: "transition-behavior-discrete",
  name: "Transition Behavior Handles Discrete State Changes",
  categoryId: "animations",
  description:
    "Properties like display traditionally snapped on and off. `transition-behavior: allow-discrete` opens the door to cleaner open and close states.",
  tags: ["animations", "transitions", "display", "transition-behavior", "ui-state"],
  route: "/topics/transition-behavior-discrete",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Not Every Property Interpolates",
          content:
            "CSS transitions feel easy when a value can blend between two numbers, like opacity or transform. But some properties are discrete: they flip from one state to another with no in-between. That is why hiding and revealing overlays, menus, and drawers has historically required extra wrapper hacks or JavaScript state choreography. `transition-behavior: allow-discrete` gives CSS a better native story for these state changes.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Old Hack vs Native Discrete Transition Support",
          left: {
            label: "Older pattern",
            code: `.menu {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-8px);
}

.menu.is-open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}`,
            description:
              "Developers often had to keep the element mounted and fake open or closed states with opacity and pointer events alone.",
          },
          right: {
            label: "Modern pattern",
            code: `.menu {
  transition:
    opacity 200ms ease,
    transform 200ms ease,
    display 200ms allow-discrete;
  transition-behavior: allow-discrete;
}
`,
            description:
              "Discrete state changes can participate more cleanly in transition logic, which reduces some of the wrapper-and-class juggling.",
          },
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Snapping Open vs Transitioning In",
          subtitle:
            "Both previews render the same dropdown panel. The right side layers discrete transition support with an explicit starting state so the panel feels less abrupt.",
          left: {
            label: "❌ Snaps into place",
            code: `.menu {
  display: block;
  opacity: 1;
  transform: translateY(0);
}`,
            html: `
<div class="stage">
  <button class="trigger">Actions</button>
  <div class="menu">
    <a>Edit</a>
    <a>Duplicate</a>
    <a>Archive</a>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
  font-family: Inter, system-ui, sans-serif;
}
.stage {
  position: relative;
  width: 240px;
  height: 170px;
}
.trigger {
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: #ef4444;
  color: white;
  font-weight: 700;
}
.menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 180px;
  display: grid;
  gap: 4px;
  padding: 10px;
  border-radius: 16px;
  background: white;
  border: 1px solid #cbd5e1;
  box-shadow: 0 16px 40px rgba(15,23,42,0.12);
}
.menu a {
  display: block;
  padding: 9px 10px;
  border-radius: 10px;
  color: #0f172a;
  background: #f8fafc;
}
`,
            description:
              "The menu simply exists in its final state. Functional, but visually abrupt.",
          },
          right: {
            label: "✅ Discrete transition path",
            code: `.menu {
  display: block;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    display 180ms allow-discrete;
  transition-behavior: allow-discrete;
}

@starting-style {
  .menu {
    opacity: 0;
    transform: translateY(-8px);
  }
}`,
            html: `
<div class="stage">
  <button class="trigger">Actions</button>
  <div class="menu">
    <a>Edit</a>
    <a>Duplicate</a>
    <a>Archive</a>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #eff6ff;
  font-family: Inter, system-ui, sans-serif;
}
.stage {
  position: relative;
  width: 240px;
  height: 170px;
}
.trigger {
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}
.menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 180px;
  display: grid;
  gap: 4px;
  padding: 10px;
  border-radius: 16px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: 0 18px 42px rgba(37,99,235,0.14);
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    display 180ms allow-discrete;
  transition-behavior: allow-discrete;
}
@starting-style {
  .menu {
    opacity: 0;
    transform: translateY(-8px);
  }
}
.menu a {
  display: block;
  padding: 9px 10px;
  border-radius: 10px;
  color: #0f172a;
  background: #eff6ff;
}
`,
            description:
              "The entry feels more natural because the browser has both a discrete state transition and an explicit starting snapshot to animate from.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Best Paired with Starting Style",
          code: `.popover {
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    display 180ms allow-discrete;
  transition-behavior: allow-discrete;
}

@starting-style {
  .popover {
    opacity: 0;
    transform: translateY(0.5rem);
  }
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Treat it as progressive enhancement",
          content:
            "This area of CSS is still newer than plain opacity and transform transitions. Use it where supported, but keep your component architecture resilient so the UI still behaves correctly when the discrete enhancement is unavailable.",
        },
      },
    ],
  },
};
