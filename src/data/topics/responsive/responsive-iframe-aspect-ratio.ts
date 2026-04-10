import type { Topic } from "@/types/topic";

export const responsiveIframeAspectRatio: Topic = {
  id: "responsive-iframe-aspect-ratio",
  name: "Responsive IFrames via Aspect Ratio",
  categoryId: "responsive",
  description: "Stop using the old padding-bottom percentage hack for YouTube embeds. Native aspect-ratio provides a flawless fix.",
  tags: ["responsive", "iframe", "video", "aspect-ratio", "layout"],
  route: "/topics/responsive-iframe-aspect-ratio",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Video Embed Nightmare",
          content: "When you embed a YouTube video with an `<iframe>`, you must provide a fixed `width` and `height`. If you blindly change `width: 100%` so it fits on mobile phones, the height stays fixed, completely destroying the video's 16:9 1080p proportions and adding massive black letterbox bars. For a decade, developers used a complex wrapper `div` with `padding-bottom: 56.25%`. Today, it's a 1-line CSS solution.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "The Wrapper Hack vs Native CSS",
          left: {
            label: "The Old Wrapper Hack",
            code: `.video-container {
  position: relative;
  width: 100%;
  /* 56.25% is 9 / 16 * 100 */
  padding-bottom: 56.25%; 
}
.video-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}`,
            description: "Required polluting the HTML DOM with wrapper divs purely for layout math.",
          },
          right: {
            label: "Modern Aspect-Ratio",
            code: `iframe {
  width: 100%;
  height: auto;
  
  /* Mathematically scales the height 
     to always perfectly match the 
     width at 16:9 proportions. */
  aspect-ratio: 16 / 9;
}`,
            description: "No HTML wrapper needed. Supported in all modern browsers since 2021.",
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="padding: 2rem; background: #0f172a; border-radius: 8px; resize: horizontal; overflow: auto; width: 100%;">
  <p style="color: #cbd5e1; margin-top: 0;">Drag the bottom-right corner to resize this container and watch the mock iframe scale beautifully.</p>
  
  <div style="
    width: 100%; 
    height: auto; 
    aspect-ratio: 16 / 9; 
    background: #334155; 
    border: 2px dashed #94a3b8; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border-radius: 8px;
  ">
    <span style="color: white; font-weight: bold;">
      &lt;iframe src="youtube"&gt;
    </span>
  </div>
</div>`,
          css: `/* The element naturally calculates its own height to respect the aspect ratio of the inline width. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Universal Support",
          dos: [
            "Use `aspect-ratio` on images, iframes, and objects. You can use standard monitor ratios (`16/9`), square (`1/1`), or even Instagram vertical ratios (`4/5`).",
            "Be sure to set `height: auto` on iframes to override the hardcoded HTML `height=\"315\"` attribute they come with.",
          ],
          donts: [
            "Don't worry about browser support. It sits at >96% global support and is safe for all modern web applications.",
          ],
        },
      },
    ],
  },
};
