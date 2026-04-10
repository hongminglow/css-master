import type { Topic } from "@/types/topic";

export const differenceBlendModeText: Topic = {
  id: "difference-blend-mode-text",
  name: "Auto-Invert Text on Scroll",
  categoryId: "colors",
  description: "Using mix-blend-mode: difference to magically invert text colors depending on what section they scroll over.",
  tags: ["colors", "blend-mode", "typography", "scrolling", "sticky"],
  route: "/topics/difference-blend-mode-text",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Sticky Header Color Clash",
          content: "Imagine a gorgeous `position: fixed` header that stays at the top of the screen. If the header text is white, it looks great over dark images. But when the user scrolls down and a white background section slides under the header, the white text becomes entirely invisible! Instead of using JavaScript Intersection Observers to swap classes between `is-dark` and `is-light`, you can use CSS's mathematical blending engines.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.fixed-header {
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  
  /* CRITICAL: The background MUST be entirely transparent 
     or this trick fails. */
  background: transparent;
  
  /* Start with pure white text */
  color: white; 
  
  /* Mathematically subtracts the text's color 
     from the background's pixels! 
     White text over White background = Black text. 
     White text over Black background = White text. */
  mix-blend-mode: difference;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="height: 300px; overflow-y: auto; position: relative; border-radius: 8px;">
  
  <!-- The Sticky Header -->
  <div style="
    position: sticky; 
    top: 0; 
    padding: 1rem; 
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    color: white; 
    mix-blend-mode: difference;
    z-index: 10;
  ">MAGIC TEXT</div>
  
  <!-- Content Blocks -->
  <div style="height: 250px; background: #000; display: flex; align-items: end; padding: 1rem; color: #666;">Dark background</div>
  
  <div style="height: 250px; background: #fff; display: flex; align-items: end; padding: 1rem; color: #999;">Light background - Keep scrolling!</div>
  
  <div style="height: 250px; background: #000; display: flex; align-items: end; padding: 1rem; color: #666;">Back to Dark background</div>
  
</div>`,
          css: `/* Scroll the box above. Notice how the text "MAGIC TEXT" automatically calculates its own inverse color (flashing between White and Black) pixel-by-pixel as the background shifts underneath it! */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "The Math Requirements",
          dos: [
            "Your text color should be `#FFF` or `#000` for this to calculate perfectly. The difference between White and White is Black (0), and the difference between White and Black is White.",
          ],
          donts: [
            "Don't give the text element (or its immediate container) a background color. If the header container has `background: red`, the `difference` blend will blend against the *red* background instead of the webpage scrolling underneath it.",
          ],
        },
      },
    ],
  },
};
