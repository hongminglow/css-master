import type { Topic } from "@/types/topic";

export const placeholderShownFloatingLabels: Topic = {
  id: "placeholder-shown-floating-labels",
  name: "Floating Labels with :placeholder-shown",
  categoryId: "layout",
  description: "A clever CSS-only trick to create Material Design style floating input labels without any JavaScript.",
  tags: ["layout", "forms", "input", "placeholder", "floating-label", "css-trick"],
  route: "/topics/placeholder-shown-floating-labels",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The JavaScript-Free Label",
          content: "The 'floating label' pattern looks great: the label sits inside the input like a placeholder, and when you type, it floats up above it. For years, devs used JS to toggle classes based on `input.value.length > 0`. You can achieve this purely with CSS using the `:placeholder-shown` pseudo-class.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.input-group {
  position: relative;
}

/* 1. We require a placeholder in HTML for this to work, 
      even if it's just a space: placeholder=" " */
.input:placeholder-shown + .label {
  /* When placeholder is visible (input is empty), 
     label sits inside the input */
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: #94a3b8;
}

/* 2. When focused, OR when NOT placeholder-shown (has text),
      label floats to the top */
.input:focus + .label,
.input:not(:placeholder-shown) + .label {
  top: 0;
  transform: translateY(-100%);
  font-size: 0.75rem;
  color: #3b82f6;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="padding: 2rem; background: #0f172a; border-radius: 8px;">
  <style>
    .float-group { position: relative; margin-top: 1.5rem; }
    .float-input { 
      width: 100%; 
      padding: 0.75rem 0.5rem; 
      background: transparent; 
      border: none; 
      border-bottom: 2px solid #334155; 
      color: white; 
      font-size: 1rem; 
      outline: none;
      transition: border-color 0.2s;
    }
    .float-input:focus { border-bottom-color: #3b82f6; }
    
    .float-label { 
      position: absolute; 
      left: 0.5rem; 
      top: 0; 
      transform: translateY(-120%); 
      font-size: 0.75rem; 
      color: #3b82f6; 
      transition: all 0.2s ease; 
      pointer-events: none;
    }
    
    /* The Magic */
    .float-input:placeholder-shown + .float-label {
      top: 50%;
      transform: translateY(-50%);
      font-size: 1rem;
      color: #94a3b8;
    }
    
    /* Override placeholder default rendering so it doesn't double-render */
    .float-input::placeholder { color: transparent; }
  </style>

  <div class="float-group">
    <!-- Notice the placeholder=" " trick -->
    <input type="text" id="email" class="float-input" placeholder=" ">
    <label for="email" class="float-label">Email Address</label>
  </div>
</div>`,
          css: `/* Click into the input and type. Notice how it floats and stays floating without JS! */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "The HTML Requirements",
          dos: [
            "The `<input>` must have a `placeholder` attribute in the HTML. It can literally just be `placeholder=\" \"`.",
            "Hide the actual placeholder text via CSS `.input::placeholder { color: transparent; }` so it doesn't overlap your physical label.",
            "The `<label>` element must come *after* the `<input>` element in the DOM so you can use the adjacent sibling selector `+` or `~`.",
          ],
          donts: [
            "Don't wrap the `<input>` inside the `<label>` for this trick, the sibling selector won't work.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Accessibility Note",
          content: "Because the physical label is still visually associated with the input and still maps via the `for/id` attributes, screen readers process this perfectly normally.",
        },
      },
    ],
  },
};
