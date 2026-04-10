import type { Topic } from "@/types/topic";

export const userInvalidForms: Topic = {
  id: "user-invalid-forms",
  name: "Form Validation: :user-invalid",
  categoryId: "colors",
  description: "Stop form fields from rendering angry red borders the moment the page loads by validating only after interaction.",
  tags: ["colors", "forms", "validation", "user-invalid", "css-ui"],
  route: "/topics/user-invalid-forms",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Premature Red Border",
          content: "HTML5 form validation allows us to instantly highlight errors using the CSS `:invalid` pseudo-class (e.g. `input:invalid { border: red }`). The catastrophic UX issue is that an empty `required` field is mathematically 'invalid'. Meaning the second the user loads your clean page, the entire form is already glaringly outlined in red before they even touched the keyboard! The new `:user-invalid` selector specifically waits for interaction.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Math Invalid vs UX Invalid",
          left: {
            label: "The Premature :invalid",
            code: `input:invalid {
  border-color: red;
  background: #fef2f2;
}
/* If the input is empty & required, it is red 
   before the user even looks at it. */`,
          },
          right: {
            label: "The Polite :user-invalid",
            code: `input:user-invalid {
  border-color: red;
  background: #fef2f2;
}
/* Only turns red AFTER the user types,
   makes a mistake, and moves onto 
   the next input! Validating on blur. */`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 3rem; padding: 2rem; background: #0f172a; border-radius: 8px;">
  <style>
    .demo-input-bad, .demo-input-good {
      padding: 0.5rem;
      width: 100%;
      border-radius: 4px;
      border: 2px solid #334155;
      background: #1e293b;
      color: white;
      outline: none;
    }
    
    /* BAD UX: Instantly highlights all empty required fields */
    .demo-input-bad:invalid {
      border-color: #ef4444; 
    }
    
    /* GOOD UX: Waits until interaction or form submission attempt */
    .demo-input-good:user-invalid {
      border-color: #ef4444;
    }
    .demo-input-good:user-valid {
      border-color: #10b981;
    }
  </style>

  <div style="flex: 1;">
    <h4 style="color: white; margin-top: 0;">:invalid (Bad UX)</h4>
    <label style="color: #94a3b8; font-size: 0.8rem;">Email Address *</label>
    <input type="email" required class="demo-input-bad" placeholder="type@example.com">
    <p style="color: #ef4444; font-size: 0.75rem;">I'm already screaming red and you haven't done anything wrong yet.</p>
  </div>

  <div style="flex: 1;">
    <h4 style="color: white; margin-top: 0;">:user-invalid (Good UX)</h4>
    <label style="color: #94a3b8; font-size: 0.8rem;">Email Address *</label>
    <input type="email" required class="demo-input-good" placeholder="type@example.com">
    <p style="color: #10b981; font-size: 0.75rem;">I stay neutral. Type an invalid email and click away to see me turn red.</p>
  </div>
</div>`,
          css: `/* :user-valid operates under the exact same interaction rules. Giving users a reassuring 'green' checkmark only after they successfully complete the field. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Progressive Enhancement",
          content: "As of late 2023, `:user-invalid` is supported natively in all major browsers including Safari. For older systems, many developers provide a JS fallback applying a `.dirty` class on blur events.",
        },
      },
    ],
  },
};
