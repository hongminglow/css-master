import type { Topic } from "@/types/topic";

export const maskImageFades: Topic = {
  id: "mask-image-fades",
  name: "Mask Image Creates Better Edge Fades",
  categoryId: "colors",
  description:
    "Instead of painting fake gradient overlays on top of content, fade pixels directly with `mask-image` for cleaner scroll hints and image reveals.",
  tags: ["effects", "mask-image", "fade", "scroll", "gradients", "ui-polish"],
  route: "/topics/mask-image-fades",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Overlay Gradients Are Only Pretending",
          content:
            "A lot of UI fades are built with absolutely positioned gradient overlays. That works, but it is still just another painted layer sitting on top of the content. It can tint the design incorrectly, clash with dynamic backgrounds, and create interaction headaches. `mask-image` is different: it fades the element itself by controlling alpha, which means the effect is cleaner and more adaptable.",
        },
      },
      {
        type: "workflow",
        data: {
          title: "How to Think About `mask-image`",
          steps: [
            {
              number: 1,
              title: "Keep your content real",
              description:
                "Render the chips, image, or scroll container normally without extra decorative cover layers.",
            },
            {
              number: 2,
              title: "Define the visible zone",
              description:
                "Use a gradient mask where opaque areas stay visible and transparent areas gently disappear.",
            },
            {
              number: 3,
              title: "Let the background show through naturally",
              description:
                "Because the pixels are actually being faded out, the surrounding background can be anything without needing a matching overlay color.",
            },
          ],
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Fake Overlay vs Real Pixel Fade",
          subtitle:
            "Both rows are trying to hint that the chip list continues. The right side fades the actual content instead of placing a tinted layer on top.",
          left: {
            label: "❌ Gradient cover layer",
            code: `.scroller::after {
  content: "";
  position: absolute;
  inset: 0 0 0 auto;
  width: 72px;
  background: linear-gradient(to right, transparent, #0f172a);
}`,
            html: `
<div class="shell broken">
  <div class="scroller">
    <div class="track">
      <span>backdrop-filter</span>
      <span>scroll snap</span>
      <span>anchor size</span>
      <span>subgrid</span>
      <span>view timeline</span>
    </div>
    <div class="fade"></div>
  </div>
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 36%),
    linear-gradient(180deg, #0f172a, #111827);
  font-family: Inter, system-ui, sans-serif;
}
.shell {
  width: min(100% - 30px, 360px);
  padding: 18px;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148,163,184,0.18);
}
.scroller {
  position: relative;
  overflow: hidden;
}
.track {
  display: flex;
  gap: 10px;
  width: max-content;
}
span {
  white-space: nowrap;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 14px;
  border: 1px solid rgba(255,255,255,0.12);
}
.fade {
  position: absolute;
  inset: 0 0 0 auto;
  width: 80px;
  background: linear-gradient(to right, rgba(15,23,42,0), #0f172a 72%);
}
`,
            description:
              "The overlay adds another painted layer that visibly darkens the chips instead of truly fading them out.",
          },
          right: {
            label: "✅ `mask-image`",
            code: `.scroller {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 12%,
    black 88%,
    transparent
  );
}`,
            html: `
<div class="shell fixed">
  <div class="scroller">
    <div class="track">
      <span>backdrop-filter</span>
      <span>scroll snap</span>
      <span>anchor size</span>
      <span>subgrid</span>
      <span>view timeline</span>
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
  background:
    radial-gradient(circle at top left, rgba(34,197,94,0.18), transparent 36%),
    linear-gradient(180deg, #0f172a, #111827);
  font-family: Inter, system-ui, sans-serif;
}
.shell {
  width: min(100% - 30px, 360px);
  padding: 18px;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148,163,184,0.18);
}
.scroller {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 12%,
    black 88%,
    transparent
  );
}
.track {
  display: flex;
  gap: 10px;
  width: max-content;
}
span {
  white-space: nowrap;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 14px;
  border: 1px solid rgba(255,255,255,0.12);
}
`,
            description:
              "The chips themselves fade at the edges, so the effect stays crisp without forcing a background-colored overlay into the composition.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Reusable Patterns",
          code: `/* Horizontal scroll hint */
.h-scroll {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 2rem,
    black calc(100% - 2rem),
    transparent
  );
}

/* Top and bottom fade for overflowing lists */
.v-scroll {
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 1.5rem,
    black calc(100% - 1.5rem),
    transparent
  );
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Support note",
          content:
            "Modern browsers handle `mask-image` well, but if the fade is purely decorative, treat it as progressive enhancement. The content should remain usable even when the mask is unavailable.",
        },
      },
    ],
  },
};
