import type { Topic } from "@/types/topic";

export const customTextSelection: Topic = {
  id: "custom-text-selection",
  name: "Branded Text Selection",
  categoryId: "colors",
  description: "Ditch the default browser blue and style the text highlight color to match your brand.",
  tags: ["colors", "selection", "highlight", "branding", "pseudo-element"],
  route: "/topics/custom-text-selection",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Ultimate Micro-Interaction",
          content: "By default, when a user highlights text on your website, the browser paints it with a generic system-level blue (or whatever the OS default is). The `::selection` pseudo-element is an incredibly quick and easy way to recolor that highlighted text box, adding an immense level of polish and cohesiveness to your brand's digital presence.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* Global selection style */
::selection {
  /* The background 'highlight' box */
  background: #f59e0b; /* Amber */
  
  /* The color of the text itself while highlighted */
  color: #fffbeb;
  
  /* A subtle text shadow works beautifully here too! */
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

/* You can also scope it! E.g., make selection inside 
   the warning-box red instead of amber. */
.warning-box::selection {
  background: #ef4444;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="padding: 2rem; background: #0f172a; border-radius: 8px;">
  <style>
    /* Default system highlight (for comparison) */
    .default-select p::selection {
      background: inherit; /* Relies on browser default */
    }
    
    /* Custom brand highlight */
    .brand-select p::selection {
      background: #10b981; /* Emerald green */
      color: #022c22;
    }
    
    .demo-txt { color: #cbd5e1; font-size: 1.1rem; line-height: 1.6; }
  </style>

  <div class="default-select" style="margin-bottom: 2rem;">
    <h4 style="color: #64748b; margin-top: 0;">Default Safari/Chrome Blue</h4>
    <p class="demo-txt">Try highlighting this sentence with your mouse. It looks like every other website on the internet.</p>
  </div>
  
  <div class="brand-select">
    <h4 style="color: #64748b; margin-top: 0;">Branded Emerald Highlight</h4>
    <p class="demo-txt">Now highlight this sentence! The emerald glow completely transforms the feeling of the site and aligns with brand colors.</p>
  </div>
</div>`,
          css: `/* Only a tiny subset of CSS properties work inside ::selection: 
color, background-color, cursor, caret-color, outline, text-decoration, text-shadow. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Contrast is King",
          dos: [
            "Ensure the `color` and `background-color` within your `::selection` rule have sufficient contrast (WCAG 4.5:1 minimum). People highlight text specifically to make it easier to read!",
          ],
          donts: [
            "Don't use completely opaque, pitch-black selection backgrounds if your text color is also dark.",
          ],
        },
      },
    ],
  },
};
