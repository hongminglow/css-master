import type { Topic } from "@/types/topic";

export const aspectRatioPreventsLayoutJumps: Topic = {
  id: "aspect-ratio-prevents-layout-jumps",
  name: "Aspect Ratio Prevents Layout Jumps",
  categoryId: "layout",
  description:
    "Reserve media space before images load so cards, galleries, and embeds stop jumping around during rendering.",
  tags: ["layout", "aspect-ratio", "images", "cls", "media", "stability"],
  route: "/topics/aspect-ratio-prevents-layout-jumps",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Reserve Space Before the Asset Arrives",
          content:
            "A lot of layout shift comes from media that has no known size at first paint. The browser lays out the page, then the image or video arrives and suddenly pushes everything downward. `aspect-ratio` solves that by letting CSS declare the expected relationship between width and height up front. That means skeletons, cards, embeds, and galleries can stay stable before the real content finishes loading.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Unknown Media Height vs Reserved Media Slot",
          subtitle:
            "Both cards contain the same content. The right side keeps a stable media slot, so the text and button start in the correct place immediately.",
          left: {
            label: "❌ No reserved ratio",
            code: `.media {
  width: 100%;
  background: #cbd5e1;
}`,
            html: `
<article class="card">
  <div class="media empty"></div>
  <h3>Product Preview</h3>
  <p>The image area has no intrinsic height, so the content starts too high and shifts later.</p>
  <button>View Details</button>
</article>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; display: grid; place-items: center; min-height: 100vh; background: #f8fafc; font-family: Inter, system-ui, sans-serif; }
.card {
  width: min(100% - 32px, 300px);
  padding: 18px;
  border-radius: 20px;
  background: white;
  border: 1px solid #cbd5e1;
  box-shadow: 0 18px 40px rgba(15,23,42,0.08);
}
.media {
  width: 100%;
  border-radius: 16px;
  background:
    linear-gradient(135deg, #e2e8f0, #cbd5e1);
}
.empty { height: 12px; margin-bottom: 14px; }
h3 { margin: 0 0 8px; color: #0f172a; font-size: 20px; }
p { margin: 0 0 14px; color: #475569; line-height: 1.45; font-size: 14px; }
button {
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: #ef4444;
  color: white;
  font-weight: 700;
}
`,
            description:
              "Without a ratio, the browser cannot reserve a realistic height. The media slot collapses and the rest of the card shifts later.",
          },
          right: {
            label: "✅ Add aspect ratio",
            code: `.media {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`,
            html: `
<article class="card">
  <div class="media filled"></div>
  <h3>Product Preview</h3>
  <p>The media slot is reserved immediately, so nothing below it needs to jump when content arrives.</p>
  <button>View Details</button>
</article>`,
            css: `
* { box-sizing: border-box; }
body { margin: 0; display: grid; place-items: center; min-height: 100vh; background: #eff6ff; font-family: Inter, system-ui, sans-serif; }
.card {
  width: min(100% - 32px, 300px);
  padding: 18px;
  border-radius: 20px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: 0 18px 40px rgba(37,99,235,0.12);
}
.media {
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 14px;
  border-radius: 16px;
  background:
    linear-gradient(135deg, #1d4ed8, #38bdf8 60%, #dbeafe);
}
h3 { margin: 0 0 8px; color: #0f172a; font-size: 20px; }
p { margin: 0 0 14px; color: #475569; line-height: 1.45; font-size: 14px; }
button {
  border: none;
  border-radius: 999px;
  padding: 10px 14px;
  background: #2563eb;
  color: white;
  font-weight: 700;
}
`,
            description:
              "The browser knows the box ratio before the asset exists, so the whole card stays stable from the first render.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Where it helps most",
          content:
            "Use `aspect-ratio` for image cards, video frames, avatars, ad slots, map embeds, and any skeleton state that will later swap to media. It is one of the easiest ways to reduce visual instability without JavaScript.",
        },
      },
    ],
  },
};
