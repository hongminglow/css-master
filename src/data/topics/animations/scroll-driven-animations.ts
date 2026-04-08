import type { Topic } from "@/types/topic";

export const scrollDrivenAnimations: Topic = {
  id: "scroll-driven-animations",
  name: "Pure CSS Scroll Progress Bars",
  categoryId: "animations",
  description: "Link animations strictly to scroll depth natively in CSS. No heavy JS event listeners required.",
  tags: ["animations", "scroll", "parallax", "performance"],
  route: "/topics/scroll-driven-animations",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Death of 'scroll' Event Listeners",
          content: "Historically, creating a 'Reading Progress Bar' at the top of a blog post or triggering a parallax animation during scroll required attaching a JS `scroll` event listener to track `window.scrollY`. This is notoriously expensive, often choking the main thread and causing jank if not properly throttled. \n\nWith `animation-timeline: scroll()`, CSS can now link native `@keyframes` directly to the scrollbar percentage of a container or the viewport. 100% smooth, 0 JS."
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "Building a Native Scroll Progress Bar",
          subtitle: "Scroll inside the preview boxes. Notice how the top progress bar fills up natively based entirely on the scroll depth.",
          left: {
            label: "❌ The Old Way (Requires JS)",
            code: "/* Needs JS scroll calculations:\n\nwindow.addEventListener('scroll', () => {\n  let p = scrollTop / maxScroll;\n  bar.style.width = p + '%';\n});\n*/",
            html: `
<div class="mock-device">
  <div class="header">
    <div class="progress-bar js-bar" style="width: 30%"></div>
  </div>
  <div class="scroll-content">
    <h3>Article Title</h3>
    <br/><br/><br/><br/>
    <p>Imagine reading heavy text here.</p>
    <br/><br/><br/><br/><br/><br/>
    <p>JS has to fire constantly to update the blue bar above.</p>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; overflow-y: auto; background: #e2e8f0; border-radius: 8px; font-family: sans-serif; }
.header { position: sticky; top: 0; background: white; height: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.progress-bar { height: 4px; background: #ef4444; width: 0; }
.scroll-content { padding: 20px; color: #334155; }
            `
          },
          right: {
            label: "✅ The Modern Way (CSS Scroll Timeline)",
            code: "/* Create standard keyframes */\n@keyframes progress {\n  from { transform: scaleX(0); }\n  to   { transform: scaleX(1); }\n}\n\n.bar {\n  /* Link it to scroll depth! */\n  animation: progress linear;\n  animation-timeline: scroll(nearest block);\n  transform-origin: left;\n}",
            html: `
<div class="mock-device scroller-root">
  <div class="header">
    <div class="progress-bar css-bar"></div>
  </div>
  <div class="scroll-content">
    <h3>Scroll Down Now!</h3>
    <br/><br/><br/><br/>
    <p>Keep scrolling.</p>
    <br/><br/><br/><br/><br/><br/>
    <p>The green bar is growing completely natively.</p>
    <br/><br/><br/><br/><br/><br/>
    <p>Almost there...</p>
    <br/><br/><br/><br/><br/><br/>
    <h3>The End.</h3>
  </div>
</div>`,
            css: `
.mock-device { height: 100%; position: relative; overflow-y: auto; background: #e2e8f0; border-radius: 8px; font-family: sans-serif; }
.header { position: sticky; top: 0; background: white; height: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); z-index: 10; }
.progress-bar { height: 4px; background: #10b981; width: 100%; transform-origin: left; transform: scaleX(0); }
.scroll-content { padding: 20px; color: #334155; }

/* The Magic */
@keyframes native-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.css-bar {
  animation: native-progress linear;
  /* Attach animation to the scroll position of the nearest scrolling ancestor block */
  animation-timeline: scroll(nearest block);
}
            `
          }
        }
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Browser Compatibility",
          content: "As of 2024, Scroll-driven animations are well supported in Chrome/Edge, but Safari and Firefox support is still rolling out or behind flags. Use JS fallbacks for critical mission tasks."
        }
      }
    ]
  }
};
