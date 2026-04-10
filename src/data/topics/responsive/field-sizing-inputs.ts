import type { Topic } from "@/types/topic";

export const fieldSizingInputs: Topic = {
  id: "field-sizing-inputs",
  name: "Field Sizing Helps Inputs Fit Content",
  categoryId: "responsive",
  description:
    "Inputs and textareas usually default to awkward fixed sizing. Field sizing gives them a more content-aware behavior.",
  tags: ["responsive", "forms", "field-sizing", "inputs", "textarea", "ui"],
  route: "/topics/field-sizing-inputs",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Form Controls Often Feel Less Adaptive Than the Rest of the UI",
          content:
            "We spend a lot of time making cards, grids, and type scale intelligently, but inputs often stay stuck with legacy sizing behavior. `field-sizing: content` gives certain form fields a more natural relationship to their content, which can make search bars, tag editors, and compact utility inputs feel much smarter.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Fixed Field Sizing vs Content-Based Field Sizing",
          left: {
            label: "Default field sizing",
            code: `input, textarea {
  width: 100%;
}`,
            description:
              "Controls take the assigned box size even when the interface would benefit from a more content-aware fit.",
          },
          right: {
            label: "Content field sizing",
            code: `input, textarea {
  field-sizing: content;
}`,
            description:
              "Useful for experiences where the field should feel closer to the entered content, especially in compact or utility-driven UI.",
          },
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Full Width Field vs Content-Aware Utility Input",
          subtitle:
            "Both examples show a compact invite control. The right side behaves more like a utility input that grows around the actual content.",
          left: {
            label: "❌ Generic full-width field",
            code: `.invite-input {
  width: 100%;
}`,
            html: `
<div class="panel">
  <label>Email invite</label>
  <input class="invite-input" value="alex@company.com" />
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
  font-family: Inter, system-ui, sans-serif;
}
.panel {
  width: 250px;
  padding: 18px;
  border-radius: 20px;
  background: white;
  border: 1px solid #cbd5e1;
}
label {
  display: block;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #334155;
}
.invite-input {
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 10px 12px;
  font: inherit;
}
`,
            description:
              "This is still correct for most forms, but it feels oversized in compact utility interfaces.",
          },
          right: {
            label: "✅ Content-aware field sizing",
            code: `.invite-input {
  field-sizing: content;
  min-width: 12ch;
  max-width: 100%;
}`,
            html: `
<div class="panel">
  <label>Email invite</label>
  <input class="invite-input" value="alex@company.com" />
</div>`,
            css: `
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #eff6ff;
  font-family: Inter, system-ui, sans-serif;
}
.panel {
  width: 250px;
  padding: 18px;
  border-radius: 20px;
  background: white;
  border: 1px solid #bfdbfe;
}
label {
  display: block;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #334155;
}
.invite-input {
  field-sizing: content;
  min-width: 12ch;
  max-width: 100%;
  border: 1px solid #93c5fd;
  border-radius: 999px;
  padding: 10px 12px;
  font: inherit;
}
`,
            description:
              "This fits utility patterns more naturally because the control feels sized around the entered value instead of around a generic form grid.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Good Constraints Still Matter",
          code: `.token-input {
  field-sizing: content;
  min-width: 10ch;
  max-width: min(100%, 32ch);
}

.comment-box {
  field-sizing: content;
  min-height: 4lh;
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Use intentionally, not everywhere",
          content:
            "Most ordinary forms still benefit from predictable full-width controls. Reach for content-based sizing when the control is part of a more dynamic or compact interaction pattern.",
        },
      },
    ],
  },
};
