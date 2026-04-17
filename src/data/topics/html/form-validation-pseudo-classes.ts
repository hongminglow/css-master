import type {
  Topic,
  CardData,
  CodeData,
  PreviewData,
  TipData,
  TableData,
} from "@/types/topic";

export const formValidationPseudoClasses: Topic = {
  id: "form-validation-pseudo-classes",
  name: "Form Validation Pseudo-Classes",
  categoryId: "html",
  description:
    "Style form inputs based on their validity state using built-in CSS pseudo-classes — no JavaScript required.",
  tags: ["forms", "validation", ":valid", ":invalid", ":required", "pseudo-class"],
  route: "/topics/form-validation-pseudo-classes",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "CSS Knows Your Form State",
          content:
            "Browsers automatically track whether a form field is valid, required, optional, or out of range. CSS exposes this via pseudo-classes like :valid, :invalid, :required, :optional, :in-range, and :out-of-range. You can style feedback states entirely in CSS without writing a single line of JavaScript validation.",
        } as CardData,
      },
      {
        type: "table",
        data: {
          title: "Form Validation Pseudo-Classes",
          headers: ["Pseudo-Class", "Matches When", "Common Use"],
          rows: [
            [":required", "input has required attribute", "Red asterisk label"],
            [":optional", "input has no required attribute", "Grey label"],
            [":valid", "input value passes its constraint", "Green border"],
            [":invalid", "input value fails its constraint", "Red border"],
            [":in-range", "number/date value is within min/max", "Green state"],
            [":out-of-range", "number/date value is outside min/max", "Red state"],
            [":placeholder-shown", "input shows placeholder text", "Floating label trick"],
            [":user-valid", "valid AND user has interacted", "Avoids flash on load"],
            [":user-invalid", "invalid AND user has interacted", "Avoids flash on load"],
          ],
        } as TableData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "CSS",
          code: `/* Only show error state after user has typed */
input:user-invalid {
  border-color: #ef4444;
  outline: 2px solid #ef4444;
}

input:user-valid {
  border-color: #22c55e;
  outline: 2px solid #22c55e;
}

/* Required fields get a red asterisk via their label */
label:has(+ input:required)::after {
  content: " *";
  color: #ef4444;
}

/* Style number inputs out of range */
input[type="number"]:out-of-range {
  background-color: #fef2f2;
  border-color: #ef4444;
}`,
        } as CodeData,
      },
      {
        type: "preview",
        data: {
          html: `<form class="demo-form">
  <label class="demo-label">Email (required)
    <input type="email" required placeholder="you@example.com" class="demo-input">
  </label>
  <label class="demo-label">Age (1–120)
    <input type="number" min="1" max="120" placeholder="25" class="demo-input">
  </label>
  <p class="demo-hint">Type something to see validation states</p>
</form>`,
          css: `.demo-form { display: flex; flex-direction: column; gap: 12px; padding: 16px; font-family: sans-serif; background: #f8fafc; border-radius: 8px; }
.demo-label { display: flex; flex-direction: column; gap: 4px; font-size: 14px; font-weight: 600; color: #334155; }
.demo-input { padding: 8px 12px; border: 2px solid #cbd5e1; border-radius: 6px; font-size: 14px; outline: none; transition: border-color 0.2s; }
.demo-input:user-invalid { border-color: #ef4444; background: #fef2f2; }
.demo-input:user-valid { border-color: #22c55e; background: #f0fdf4; }
.demo-input[type="number"]:out-of-range { border-color: #f97316; background: #fff7ed; }
.demo-hint { font-size: 12px; color: #94a3b8; margin: 0; }`,
        } as PreviewData,
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Avoid :valid/:invalid on page load",
          content:
            "Using :invalid alone will immediately highlight empty required fields as red when the page loads, before the user has done anything. Prefer :user-invalid and :user-valid (Chrome 119+, Firefox 88+) which only activate after the user has interacted with the field.",
        } as TipData,
      },
    ],
  },
};
