import type { Topic } from "@/types/topic";

export const orientationMediaQueries: Topic = {
  id: "orientation-media-queries",
  name: "Device Orientation @Media",
  categoryId: "responsive",
  description: "Adjusting your layout optimally based on whether the user is holding their phone in portrait or landscape.",
  tags: ["responsive", "media-query", "mobile", "orientation", "landscape"],
  route: "/topics/orientation-media-queries",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Rotation Problem",
          content: "A layout that looks perfect on a mobile phone in a vertical (portrait) posture often immediately breaks when the user turns their phone sideways (landscape) to watch a video or view a chart. The height radically shrinks, and fixed bottom navigation bars suddenly swallow half the screen height. While you can trigger media queries by targeting `max-height`, the `orientation` media query allows you to specifically design for device rotation.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.bottom-navigation-bar {
  position: fixed;
  bottom: 0; left: 0;
  width: 100%;
  height: 80px;
}

/* When the phone physically turns sideways... */
@media (orientation: landscape) {
  .bottom-navigation-bar {
    /* Hide the huge bottom bar because screen 
       height is now extremely limited! */
    display: none; 
  }
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .device-preview {
    display: flex; gap: 2rem; justify-content: center;
  }
  .mock-phone {
    border: 4px solid #334155;
    background: #1e293b;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
  }
  .portrait { width: 120px; height: 240px; }
  .landscape { width: 240px; height: 120px; }
  
  .mock-nav {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: #3b82f6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
  }
</style>

<div class="device-preview" style="padding: 2rem; background: #0f172a; border-radius: 8px;">
  <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
    <span style="color: #64748b; font-size: 0.8rem;">Portrait (Has Nav)</span>
    <div class="mock-phone portrait">
      <div class="mock-nav">Bottom Nav</div>
    </div>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
    <span style="color: #64748b; font-size: 0.8rem;">Landscape (Hidden Nav)</span>
    <div class="mock-phone landscape">
       <!-- We physically omit it here to simulate display:none since we can't reliably trigger real media queries inside the inner-preview window size block -->
       <div style="height: 100%; width: 100%; display: flex; align-items: center; justify-content: center; color: #ef4444; font-size: 0.8rem; text-align: center;">Video Content Needs Full Screen!</div>
    </div>
  </div>
</div>`,
          css: `/* The orientation simply evaluates whether the viewport width is mathematically greater than the viewport height. If Width > Height, it evaluates to Landscape. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Desktop Implications",
          dos: [
            "Use it aggressively alongside `max-width: 900px` (or similar). If you don't tether orientation to mobile boundaries, standard widescreen desktop monitors will evaluate as `landscape` because their width is greater than their height!",
          ],
          donts: [
            "Don't assume `landscape` implies it's a mobile device! A 27-inch 4K monitor is also in `landscape` orientation.",
          ],
        },
      },
    ],
  },
};
