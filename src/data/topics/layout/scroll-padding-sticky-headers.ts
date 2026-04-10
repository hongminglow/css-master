import type { Topic } from "@/types/topic";

export const scrollPaddingStickyHeaders: Topic = {
  id: "scroll-padding-sticky-headers",
  name: "Fix Anchor Jumps with scroll-padding",
  categoryId: "layout",
  description: "Stop internal page links from aggressively hiding under your fixed navigation bars.",
  tags: ["layout", "scroll", "sticky", "anchor", "padding"],
  route: "/topics/scroll-padding-sticky-headers",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Fixed Header Dilemma",
          content: "You build a beautiful `#hash` navigation or table of contents. A user clicks a link, the browser natively scrolls to that ID, but wait—the section title is invisible! It's hiding directly underneath your 80px fixed `<header>`. Historically, devs fixed this with complex JavaScript interception or weird hacks like transparent pseudo-elements. Today, `scroll-padding` fixes this natively.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "JS Hacks vs Native CSS",
          left: {
            label: "The Old Hack",
            code: `.target-section::before {
  content: '';
  display: block;
  height: 80px; 
  margin-top: -80px;
  visibility: hidden;
}`,
          },
          right: {
            label: "Modern CSS",
            code: `html {
  /* Tells the browser's native scroll engine 
     to physically stop 80px early! */
  scroll-padding-top: 80px;
  
  /* Bonus: Add smooth scrolling */
  scroll-behavior: smooth; 
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="height: 200px; width: 100%; border: 2px solid #334155; border-radius: 8px; position: relative; overflow-y: auto; scroll-padding-top: 60px; scroll-behavior: smooth;">
  
  <div style="position: sticky; top: 0; background: rgba(59, 130, 246, 0.9); backdrop-filter: blur(4px); padding: 1rem; color: white; display: flex; justify-content: space-between; z-index: 10;">
    <b>Sticky Nav (60px)</b>
    <a href="#demo-target" style="color: white; text-decoration: underline;">Click to Jump</a>
  </div>
  
  <div style="height: 400px; padding: 1rem; background: #0f172a; color: #94a3b8;">
    Scroll down or click the link above.<br><br>
    Lots of content here to push the target down.<br><br>
    Keep going...
  </div>
  
  <div id="demo-target" style="padding: 1rem; background: #ef4444; color: white;">
    <b>Target Section!</b><br>
    Without scroll-padding-top, this red box would be flush against the top of the container, completely hidden behind the blue Sticky Nav.
  </div>
  
  <div style="height: 300px; background: #1e293b;"></div>
</div>`,
          css: `/* The scroll-padding property is applied to the scroll container (often the <html> element itself). */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Implementation",
          dos: [
            "Apply `scroll-padding-top` directly to the `html` tag for global site headers.",
            "Use CSS variables: `scroll-padding-top: var(--header-height)` so you can update them dynamically if your header changes size on mobile.",
          ],
          donts: [
            "Don't apply it directly to the anchor elements or target sections.",
          ],
        },
      },
    ],
  },
};
