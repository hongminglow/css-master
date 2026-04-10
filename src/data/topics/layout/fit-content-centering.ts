import type { Topic } from "@/types/topic";

export const fitContentCentering: Topic = {
  id: "fit-content-centering",
  name: "Centering with fit-content",
  categoryId: "layout",
  description: "A highly elegant way to center dynamically sized elements without using auto-margins on fixed-width boxes.",
  tags: ["layout", "fit-content", "centering", "margin-auto", "width"],
  route: "/topics/fit-content-centering",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Centering Dilemma",
          content: "You have a paragraph of text or a button, and you want to center it. `margin: 0 auto;` only works if the block element has an explicit, hardcoded width (like `width: 300px`). If you leave it default, the block stretches 100% wide, so margin has no empty space to center with. `width: fit-content` is the magic middle-ground: it forces the block to perfectly wrap its children, immediately enabling `margin: 0 auto;` to slide it to the center of the page.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.dynamic-warning-box {
  /* 1. Stop stretching to 100%. 
        Hugs the text tightly instead! */
  width: -moz-fit-content;
  width: fit-content;
  
  /* 2. Because the width is now small, 
        there is math leftover for margin-auto to distribute! */
  margin: 0 auto;
  
  padding: 10px 20px;
  background: #b91c1c; /* Crimson */
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div>
    <span style="color: #64748b; font-size: 0.8rem;">Standard block (Margin does nothing)</span>
    <div style="background: #334155; color: white; padding: 0.5rem; margin: 0 auto; border: 1px solid #94a3b8;">
      I have "margin: 0 auto" but I'm 100% wide so I can't move!
    </div>
  </div>

  <div>
    <span style="color: #64748b; font-size: 0.8rem;">Width: fit-content + margin: 0 auto</span>
    <div style="background: #3b82f6; color: white; padding: 0.5rem; margin: 0 auto; border: 1px solid #94a3b8; width: fit-content; border-radius: 4px;">
      I hug my exact text length and perfectly lock to center!
    </div>
  </div>

</div>`,
          css: `/* This is phenomenally useful for dynamically generated data like "Error: Username Taken" widgets where the text might be 15 or 80 characters long randomly. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Max-Content vs Fit-Content",
          content: "Use `width: fit-content`, NOT `width: max-content`. `max-content` forces the element to stay unbroken on a single line even if it exceeds the screen size. `fit-content` gracefully allows wrapping when hitting the viewport edge, keeping mobile layouts completely safe.",
        },
      },
    ],
  },
};
