import type { Topic } from "@/types/topic";

export const the100vhTrap: Topic = {
  id: "the-100vh-trap",
  name: "The 100vh Mobile Trap",
  categoryId: "responsive",
  description:
    "Why height: 100vh fails on mobile browsers causing cutoff UI, and how to fix it modernly.",
  tags: ["viewport", "mobile", "ios-safari", "height", "dvh"],
  route: "/topics/the-100vh-trap",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Illusory 100vh Dimension",
          content:
            "For years, developers reliably used `min-height: 100vh` to force hero sections or modals to perfectly fill the screen height. However, on mobile browsers (most notoriously iOS Safari), `100vh` calculates the height as if the dynamic browser URL bar is fully hidden. As a result, the bottom 10% of your element is swallowed by the browser UI, trapping buttons and critical footers off-screen.",
        },
      },
      {
        type: "tip",
        data: {
          variant: "danger",
          title: "The StackOverflow Graveyard",
          content:
            "The fix for this used to require tracking `window.innerHeight` with JavaScript and assigning `--vh` CSS variables hooked to a `resize` event listener. Today, modern CSS solves this natively.",
        },
      },
      {
        type: "workflow",
        data: {
          title: "The Modern Viewport Units",
          steps: [
            {
              number: 1,
              title: "svh (Small Viewport Height)",
              description:
                "The height of the screen when all browser toolbars are fully expanded and visible. Safest for sticky menus.",
            },
            {
              number: 2,
              title: "lvh (Large Viewport Height)",
              description:
                "The height of the screen assuming all browser toolbars are completely hidden. Essentially acts identically to standard `vh`.",
            },
            {
              number: 3,
              title: "dvh (Dynamic Viewport Height)",
              description:
                "The hero unit. It dynamically updates as the user scrolls and the browser toolbars shrink or expand. Unbelievably useful for full-screen UI.",
            },
          ],
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "100vh vs 100dvh (Simulated Frame)",
          subtitle:
            "Both panels contain the exact same hero and bottom action dock. The only difference is where that dock gets anchored. `100vh` anchors it to the full device height, while `100dvh` anchors it to the visible viewport height.",
          left: {
            label: "❌ 100vh (CTA buried under chrome)",
            code: ".hero {\n  min-height: 100vh;\n}",
            html: `
<div class="device bad-device">
  <div class="phone-frame">
    <div class="status-pill">layout height = full device</div>
    <div class="app bad-vh">
      <div class="hero-content">
        <p class="eyebrow">Mobile hero</p>
        <h2>Welcome Back</h2>
        <p>The card stack fits, but the sticky bottom action is still laid out behind the visible browser UI.</p>
        <div class="mock-card primary-card">
          <span>Trip summary</span>
          <strong>4 cities planned</strong>
        </div>
        <div class="mock-card secondary-card">
          <span>Next checkpoint</span>
          <strong>Night market at 7:30 PM</strong>
        </div>
      </div>
      <div class="cta-wrap">
        <div class="dock-note">Bottom sheet area</div>
        <button class="cta">Start Journey</button>
        <p class="cta-note">The CTA is still positioned at the device bottom, not the visible viewport bottom.</p>
      </div>
    </div>
    <div class="safe-line">visible viewport ends here</div>
    <div class="browser-ui">Browser chrome is covering the CTA</div>
  </div>
</div>`,
            css: `
.device {
  height: 100%;
  padding: 8px;
  background: linear-gradient(180deg, #dbeafe, #bfdbfe);
}
.phone-frame {
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  background: #0f172a;
  border: 2px solid #1e293b;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}
.status-pill {
  position: absolute;
  top: 10px;
  left: 50%;
  translate: -50% 0;
  z-index: 3;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(239, 68, 68, 0.18);
  color: #fecaca;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 60%, #334155 100%);
  color: white;
  display: block;
  padding: 44px 16px 14px;
  box-sizing: border-box;
}
.hero-content {
  display: grid;
  gap: 10px;
  text-align: left;
}
.eyebrow {
  margin: 0;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fda4af;
}
.hero-content h2 {
  margin: 0;
  font-size: 22px;
  line-height: 1.05;
}
.hero-content p:last-child {
  margin: 0;
  color: #cbd5e1;
  font-size: 12px;
  line-height: 1.45;
}
.mock-card {
  display: grid;
  gap: 4px;
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.22);
}
.mock-card span {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #cbd5e1;
}
.mock-card strong {
  font-size: 13px;
  line-height: 1.3;
}
.primary-card {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.22), rgba(30, 41, 59, 0.7));
}
.secondary-card {
  background: rgba(15, 23, 42, 0.52);
}
.cta-wrap {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 14px;
  display: grid;
  gap: 8px;
  padding: 10px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(248, 113, 113, 0.18);
  box-shadow: 0 14px 24px rgba(15, 23, 42, 0.28);
}
.dock-note {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fecaca;
  text-align: center;
}
.cta {
  width: 100%;
  min-height: 46px;
  border: none;
  border-radius: 999px;
  font-weight: 800;
  letter-spacing: 0.02em;
  font-size: 14px;
}
.cta-note {
  margin: 0;
  text-align: center;
  font-size: 11px;
  line-height: 1.4;
  color: #cbd5e1;
}
.safe-line {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 76px;
  z-index: 2;
  border-top: 2px dashed rgba(248, 113, 113, 0.95);
  padding-top: 4px;
  text-align: right;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fecaca;
}
.browser-ui {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  height: 76px;
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
  color: #7f1d1d;
  background: linear-gradient(180deg, rgba(254, 202, 202, 0.96), rgba(252, 165, 165, 0.98));
  border-top: 1px solid rgba(248, 113, 113, 0.9);
  box-shadow: 0 -18px 30px rgba(15, 23, 42, 0.35);
}

.bad-vh { height: 100%; }
.bad-vh::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 76px;
  height: 28px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0), rgba(15, 23, 42, 0.85));
}
.bad-vh .cta {
  background: linear-gradient(135deg, #60a5fa, #2563eb);
  color: white;
}
            `,
            description:
              "`100vh` measures the whole device, so the bottom action slides into the area now occupied by browser chrome.",
          },
          right: {
            label: "✅ 100dvh (CTA stays visible)",
            code: ".hero {\n  min-height: 100vh;\n  min-height: 100dvh;\n}",
            html: `
<div class="device good-device">
  <div class="phone-frame">
    <div class="status-pill">layout height = visible viewport</div>
    <div class="app good-vh">
      <div class="hero-content">
        <p class="eyebrow">Mobile hero</p>
        <h2>Welcome Back</h2>
        <p>The same content still fits, but the bottom dock is now anchored to the visible viewport instead of disappearing behind chrome.</p>
        <div class="mock-card primary-card">
          <span>Trip summary</span>
          <strong>4 cities planned</strong>
        </div>
        <div class="mock-card secondary-card">
          <span>Next checkpoint</span>
          <strong>Night market at 7:30 PM</strong>
        </div>
      </div>
      <div class="cta-wrap">
        <div class="dock-note">Bottom sheet area</div>
        <button class="cta">Start Journey</button>
        <p class="cta-note">The CTA stays fully above the browser chrome and remains tappable.</p>
      </div>
    </div>
    <div class="safe-line">visible viewport ends here</div>
    <div class="browser-ui">Browser chrome</div>
  </div>
</div>`,
            css: `
.device {
  height: 100%;
  padding: 8px;
  background: linear-gradient(180deg, #dcfce7, #bbf7d0);
}
.phone-frame {
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  background: #0f172a;
  border: 2px solid #1e293b;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}
.status-pill {
  position: absolute;
  top: 10px;
  left: 50%;
  translate: -50% 0;
  z-index: 3;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.18);
  color: #bbf7d0;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 60%, #334155 100%);
  color: white;
  display: block;
  padding: 44px 16px 14px;
  box-sizing: border-box;
}
.hero-content {
  display: grid;
  gap: 10px;
  text-align: left;
}
.eyebrow {
  margin: 0;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #86efac;
}
.hero-content h2 {
  margin: 0;
  font-size: 22px;
  line-height: 1.05;
}
.hero-content p:last-child {
  margin: 0;
  color: #cbd5e1;
  font-size: 12px;
  line-height: 1.45;
}
.mock-card {
  display: grid;
  gap: 4px;
  padding: 10px 12px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.22);
}
.mock-card span {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #cbd5e1;
}
.mock-card strong {
  font-size: 13px;
  line-height: 1.3;
}
.primary-card {
  background: linear-gradient(135deg, rgba(52, 211, 153, 0.22), rgba(30, 41, 59, 0.7));
}
.secondary-card {
  background: rgba(15, 23, 42, 0.52);
}
.cta-wrap {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 14px;
  display: grid;
  gap: 8px;
  padding: 10px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(74, 222, 128, 0.18);
  box-shadow: 0 14px 24px rgba(15, 23, 42, 0.24);
}
.dock-note {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bbf7d0;
  text-align: center;
}
.cta {
  width: 100%;
  min-height: 46px;
  border: none;
  border-radius: 999px;
  font-weight: 800;
  letter-spacing: 0.02em;
  font-size: 14px;
}
.cta-note {
  margin: 0;
  text-align: center;
  font-size: 11px;
  line-height: 1.4;
  color: #cbd5e1;
}
.safe-line {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 76px;
  z-index: 2;
  border-top: 2px dashed rgba(74, 222, 128, 0.95);
  padding-top: 4px;
  text-align: right;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #bbf7d0;
}
.browser-ui {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  height: 76px;
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 700;
  color: #14532d;
  background: linear-gradient(180deg, rgba(220, 252, 231, 0.96), rgba(187, 247, 208, 0.98));
  border-top: 1px solid rgba(74, 222, 128, 0.85);
  box-shadow: 0 -18px 30px rgba(15, 23, 42, 0.28);
}

.good-vh { height: calc(100% - 76px); }
.good-vh .cta {
  background: linear-gradient(135deg, #34d399, #059669);
  color: white;
}
            `,
            description:
              "`100dvh` tracks the visible viewport, so the bottom action ends before the browser UI starts.",
          },
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Viewport Rules of Thumb",
          dos: [
            "Use `min-height: 100dvh` for full-screen hero sections on mobile.",
            "Use `svh` for modals and sticky positioning.",
            "Provide `100vh` as a fallback above your `dvh` style for older browsers.",
          ],
          donts: [
            "Avoid relying entirely on `height: 100vh` for anything critical near the bottom edge.",
            "Don't build JS listeners to calculate `--window-height` anymore.",
          ],
        },
      },
    ],
  },
};
