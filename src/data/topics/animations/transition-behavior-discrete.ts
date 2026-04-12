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
            "Hover each preview. The left menu pops into existence because `display` flips instantly. The right menu starts from `display: none` too, but `allow-discrete` plus `@starting-style` gives it a visible entry transition.",
          left: {
            label: "❌ Snaps into place",
            code: `.menu {
  display: none;
}

.stage:hover .menu {
  display: grid;
}`,
            html: `
<div class="stage bad-stage">
  <div class="toolbar">
    <button class="trigger">Hover to open</button>
    <span class="state">snap</span>
  </div>
  <div class="slot">
    <div class="ghost">menu mount area</div>
    <div class="menu">
      <a>Edit</a>
      <a>Duplicate</a>
      <a>Archive</a>
    </div>
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
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.stage {
  width: 240px;
  padding: 16px;
  border-radius: 20px;
  background: white;
  border: 1px solid #fecaca;
  box-shadow: 0 18px 40px rgba(239, 68, 68, 0.12);
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.trigger {
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: #ef4444;
  color: white;
  font-weight: 700;
}
.state {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #b91c1c;
  background: #fee2e2;
}
.slot {
  position: relative;
  margin-top: 14px;
  min-height: 106px;
}
.ghost {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 18px;
  border: 1px dashed #fda4af;
  background: repeating-linear-gradient(
    -45deg,
    rgba(254, 226, 226, 0.9),
    rgba(254, 226, 226, 0.9) 10px,
    rgba(255, 255, 255, 0.95) 10px,
    rgba(255, 255, 255, 0.95) 20px
  );
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #b91c1c;
}
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  gap: 4px;
  padding: 10px;
  border-radius: 16px;
  background: white;
  border: 1px solid #fecaca;
  box-shadow: 0 16px 40px rgba(15,23,42,0.12);
}
.stage:hover .menu {
  display: grid;
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
              "Hovering flips `display` from none to grid, so the menu simply teleports into the mount area with no in-between state.",
          },
          right: {
            label: "✅ Discrete transition path",
            code: `.menu {
  display: none;
  opacity: 0;
  transform: translateY(-12px);
  transition:
    opacity 220ms ease,
    transform 220ms ease,
    display 220ms allow-discrete;
  transition-behavior: allow-discrete;
}

.stage:hover .menu {
  display: grid;
  opacity: 1;
  transform: translateY(0);
}

@starting-style {
  .stage:hover .menu {
    opacity: 0;
    transform: translateY(-12px);
  }
}`,
            html: `
<div class="stage good-stage">
  <div class="toolbar">
    <button class="trigger">Hover to open</button>
    <span class="state">eases in</span>
  </div>
  <div class="slot">
    <div class="ghost">menu mount area</div>
    <div class="menu">
      <a>Edit</a>
      <a>Duplicate</a>
      <a>Archive</a>
    </div>
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
  font-family: "IBM Plex Sans", system-ui, sans-serif;
}
.stage {
  width: 240px;
  padding: 16px;
  border-radius: 20px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: 0 18px 42px rgba(37,99,235,0.14);
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.trigger {
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}
.state {
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #1d4ed8;
  background: #dbeafe;
}
.slot {
  position: relative;
  margin-top: 14px;
  min-height: 106px;
}
.ghost {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 18px;
  border: 1px dashed #93c5fd;
  background: repeating-linear-gradient(
    -45deg,
    rgba(219, 234, 254, 0.92),
    rgba(219, 234, 254, 0.92) 10px,
    rgba(255, 255, 255, 0.96) 10px,
    rgba(255, 255, 255, 0.96) 20px
  );
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1d4ed8;
}
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  gap: 4px;
  padding: 10px;
  border-radius: 16px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: 0 18px 42px rgba(37,99,235,0.14);
  opacity: 0;
  transform: translateY(-12px);
  transition:
    opacity 220ms ease,
    transform 220ms ease,
    display 220ms allow-discrete;
  transition-behavior: allow-discrete;
}
.stage:hover .menu {
  display: grid;
  opacity: 1;
  transform: translateY(0);
}
@starting-style {
  .stage:hover .menu {
    opacity: 0;
    transform: translateY(-12px);
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
              "The menu still mounts from `display: none`, but the browser now has a starting snapshot and permission to transition that discrete state instead of snapping.",
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
