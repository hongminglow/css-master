import type { Topic } from "@/types/topic";

export const animateVariableFonts: Topic = {
  id: "animate-variable-fonts",
  name: "Animating Variable Fonts",
  categoryId: "typography",
  description: "Create buttery-smooth hover states by animating font-weight instead of relying on discrete jumps.",
  tags: ["typography", "animation", "font-weight", "variable-fonts", "hover"],
  route: "/topics/animate-variable-fonts",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Font Weight Problem",
          content: "Historically, attempting to transition `font-weight` on hover resulted in a jarring, instant snap. This is because traditional web fonts load separate files for weight 400 and weight 700, and CSS cannot interpolate between two entirely different physical font files. Modern 'Variable Fonts' contain an entire continuous axis of weight variations in a single file, allowing you to animate weight as smoothly as you animate opacity.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* 1. You MUST be using a Variable Font! 
   Standard fonts like default Roboto won't work.
   'Inter Variable', 'Roboto Flex', 'Manrope' all word. */
.nav-link {
  font-family: 'Inter Variable', sans-serif;
  font-weight: 400; /* Standard */
  
  /* 2. Transition the weight property */
  transition: font-weight 0.3s ease-out;
  color: #94a3b8;
}

.nav-link:hover {
  /* 3. The magic! It slides smoothly to 700 
        instead of instantly 'popping'. */
  font-weight: 700;
  color: white;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  /* We use system fonts that are usually variable on modern OS */
  .fluid-weight-btn {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI Variable", "San Francisco", sans-serif;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    color: #cbd5e1;
    background: transparent;
    border: 2px solid #334155;
    border-radius: 8px;
    cursor: pointer;
    
    font-weight: 300;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .fluid-weight-btn:hover {
    font-weight: 900;
    color: white;
    border-color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
  }
</style>

<div style="padding: 3rem; background: #0f172a; border-radius: 8px; display: flex; justify-content: center;">
  <button class="fluid-weight-btn">Hover over me</button>
</div>`,
          css: `/* If the button above 'snaps' instead of transitioning smoothly, your current operating system/browser combo isn't exposing a variable system font, but it works flawlessly with custom web-loaded variable fonts like Inter! */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "danger",
          title: "The Layout Shift",
          content: "As font-weight increases, words physically get wider. If this is a button or a navigation list, hovering will cause all neighboring elements to shift sideways as the word expands! To fix this, developers often use the `width` fixing trick, or only use this on center-aligned standalone elements.",
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Axes of Animation",
          dos: [
            "Use `font-variation-settings` to animate other custom axes if the font author provides them! Some fonts provide a 'slant' axis, or an 'optical size' axis that can also be animated.",
          ],
          donts: [
            "Don't try this with standard Google Fonts imports. You specifically need to select the 'Variable' version of the font in Google Fonts for these interpolations to work.",
          ],
        },
      },
    ],
  },
};
