import type { Topic } from "@/types/topic";

export const customCheckboxCheckedSibling: Topic = {
  id: "custom-checkbox-checked-sibling",
  name: "Totally Custom Checkboxes",
  categoryId: "layout",
  description: "The classic CSS design pattern that allows developers to completely rewrite ugly browser checkboxes into modern toggles.",
  tags: ["layout", "forms", "checkbox", "sibling", "pseudo-element", "ui"],
  route: "/topics/custom-checkbox-checked-sibling",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Hiding and Tricking the OS",
          content: "While CSS `accent-color` is great for tinting native checkboxes, if you want to build a completely custom iOS-style toggle switch or a heavily padded box toggle, native styling is too rigid. The industry-standard pattern involves explicitly hiding the actual `<input>` element with CSS, rendering a custom `::before` pseudo-element on the `<label>`, and using the `:checked + label` adjacent sibling selector to mutate the design perfectly.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* 1. Hide the ugly native checkbox offscreen 
   (Don't use display: none, it kills keyboard tabbing!) */
.sr-only-input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}

/* 2. Style the label as the new interactive box */
.custom-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.custom-toggle::before {
  content: '';
  width: 24px; height: 24px;
  background: #1e293b;
  border: 2px solid #334155;
  border-radius: 4px;
  transition: 0.2s;
}

/* 3. THE MAGIC TRICK */
/* When the hidden input is checked, edit the adjacent label! */
.sr-only-input:checked + .custom-toggle::before {
  background: #3b82f6; 
  border-color: #3b82f6;
  /* Add a custom checkmark using SVG backgrounds, etc! */
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .custom-checkbox { position: absolute; opacity: 0; width: 0; height: 0; }
  
  .retro-switch {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background: #1e293b;
    border-radius: 8px;
    border: 2px solid #334155;
    color: #94a3b8;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .custom-checkbox:checked + .retro-switch {
    background: #10b981; /* Green when checked */
    color: white;
    border-color: #059669;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
  }
  
  /* Outline the physical label so keyboard tab still works beautifully */
  .custom-checkbox:focus-visible + .retro-switch {
    outline: 3px solid white;
    outline-offset: 4px;
  }
</style>

<div style="padding: 2rem; background: #0f172a; border-radius: 8px;">
  <!-- Notice the ID and FOR attributes connect them natively! -->
  <input type="checkbox" id="toggle-1" class="custom-checkbox">
  <label for="toggle-1" class="retro-switch">Enable Feature</label>
</div>`,
          css: `/* Clicking a <label> physically triggers its paired <input> automatically via HTML spec logic. You don't ever need to click the physical checkbox input itself! */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Accessibility Guardrails",
          dos: [
            "Use `opacity: 0; position: absolute; width: 1px;` to hide the checkbox. This allows screen readers to still find and read it, and keyboard users can still tab onto it.",
          ],
          donts: [
            "Don't use `display: none;` on the `<input>`. Browsers will strip the element entirely from the accessibility tree, making your form utterly impossible for keyboard or screen reader users to access or check.",
          ],
        },
      },
    ],
  },
};
