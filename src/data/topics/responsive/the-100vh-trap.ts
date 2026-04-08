import type { Topic } from "@/types/topic";

export const the100vhTrap: Topic = {
  id: "the-100vh-trap",
  name: "The 100vh Mobile Trap",
  categoryId: "responsive",
  description: "Why height: 100vh fails on mobile browsers causing cutoff UI, and how to fix it modernly.",
  tags: ["viewport", "mobile", "ios-safari", "height", "dvh"],
  route: "/topics/the-100vh-trap",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Illusory 100vh Dimension",
          content: "For years, developers reliably used `min-height: 100vh` to force hero sections or modals to perfectly fill the screen height. However, on mobile browsers (most notoriously iOS Safari), `100vh` calculates the height as if the dynamic browser URL bar is fully hidden. As a result, the bottom 10% of your element is swallowed by the browser UI, trapping buttons and critical footers off-screen."
        }
      },
      {
        type: "tip",
        data: {
          variant: "danger",
          title: "The StackOverflow Graveyard",
          content: "The fix for this used to require tracking `window.innerHeight` with JavaScript and assigning `--vh` CSS variables hooked to a `resize` event listener. Today, modern CSS solves this natively."
        }
      },
      {
        type: "workflow",
        data: {
          title: "The Modern Viewport Units",
          steps: [
            {
              number: 1,
              title: "svh (Small Viewport Height)",
              description: "The height of the screen when all browser toolbars are fully expanded and visible. Safest for sticky menus."
            },
            {
              number: 2,
              title: "lvh (Large Viewport Height)",
              description: "The height of the screen assuming all browser toolbars are completely hidden. Essentially acts identically to standard `vh`."
            },
            {
              number: 3,
              title: "dvh (Dynamic Viewport Height)",
              description: "The hero unit. It dynamically updates as the user scrolls and the browser toolbars shrink or expand. Unbelievably useful for full-screen UI."
            }
          ]
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "100vh vs 100dvh (Simulated Frame)",
          subtitle: "Imagine the grey box is the user's mobile browser with the URL bar visible at the bottom.",
          left: {
            label: "❌ 100vh (Button hidden under UI)",
            code: ".hero {\n  height: 100vh;\n}",
            html: `
<div class="mock-device">
  <div class="app bad-vh">
    <div class="hero-content">
      <h2>Welcome Back</h2>
      <p>Scroll down to read</p>
    </div>
    <button class="cta">Start Journey</button>
  </div>
  <div class="browser-ui">Safari URL Bar</div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; overflow: hidden; background: #e2e8f0; border-radius: 8px; }
.app { background: #1e293b; color: white; display: flex; flex-direction: column; justify-content: space-between; align-items: center; padding: 20px; }
.hero-content { text-align: center; margin-top: 40px; }
.cta { background: #3b82f6; color: white; padding: 12px 24px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
.browser-ui { position: absolute; bottom: 0; left: 0; right: 0; height: 60px; background: rgba(248,250,252,0.9); border-top: 1px solid #cbd5e1; display:flex; align-items:center; justify-content:center; font-family:sans-serif; color: #64748b; backdrop-filter: blur(4px); pointer-events: none;}

/* The Trap: Simulating 100vh by going to the literal bottom of the device, ignoring the UI */
.bad-vh { height: 100%; }
            `
          },
          right: {
            label: "✅ 100dvh (Adapts perfectly)",
            code: ".hero {\n  height: 100dvh;\n  /* standard fallback */\n  height: 100vh;\n}",
            html: `
<div class="mock-device">
  <div class="app good-vh">
    <div class="hero-content">
      <h2>Welcome Back</h2>
      <p>Scroll down to read</p>
    </div>
    <button class="cta">Start Journey</button>
  </div>
  <div class="browser-ui">Safari URL Bar</div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; overflow: hidden; background: #e2e8f0; border-radius: 8px; }
.app { background: #1e293b; color: white; display: flex; flex-direction: column; justify-content: space-between; align-items: center; padding: 20px; box-sizing: border-box;}
.hero-content { text-align: center; margin-top: 40px; }
.cta { background: #10b981; color: white; padding: 12px 24px; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
.browser-ui { position: absolute; bottom: 0; left: 0; right: 0; height: 60px; background: rgba(248,250,252,0.9); border-top: 1px solid #cbd5e1; display:flex; align-items:center; justify-content:center; font-family:sans-serif; color: #64748b; backdrop-filter: blur(4px); pointer-events: none;}

/* The Fix: Accounting for the UI bar dynamically (simulated via calc for iframe representation) */
.good-vh { height: calc(100% - 60px); }
            `
          }
        }
      },
      {
        type: "dosdонts",
        data: {
          title: "Viewport Rules of Thumb",
          dos: [
            "Use `min-height: 100dvh` for full-screen hero sections on mobile.",
            "Use `svh` for modals and sticky positioning.",
            "Provide `100vh` as a fallback above your `dvh` style for older browsers."
          ],
          donts: [
            "Avoid relying entirely on `height: 100vh` for anything critical near the bottom edge.",
            "Don't build JS listeners to calculate `--window-height` anymore."
          ]
        }
      }
    ]
  }
};
