import type { Topic } from "@/types/topic";

export const accentColorNativeControls: Topic = {
  id: "accent-color-native-controls",
  name: "Accent Color Upgrades Native Form Controls",
  categoryId: "colors",
  description:
    "Brand native checkboxes, radios, ranges, and progress controls with one CSS property instead of rebuilding them from scratch.",
  tags: ["colors", "forms", "accent-color", "native-controls", "ui", "theming"],
  route: "/topics/accent-color-native-controls",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Stop Rebuilding the Browser for Basic Controls",
          content:
            "Custom form controls often cost more than they are worth. They add markup, state syncing, accessibility risk, and a lot of edge-case styling. `accent-color` gives you a middle path: keep the browser's native control behavior, but tint its key interactive color so it fits your product theme.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Default Controls vs Branded Native Controls",
          subtitle:
            "The structure is identical. The right side just asks the browser to use the brand accent for supported controls.",
          left: {
            label: "❌ Unthemed defaults",
            code: `.settings {
  color: #0f172a;
}`,
            html: `
<form class="panel">
  <label><input type="checkbox" checked> Enable auto-save</label>
  <label><input type="radio" name="theme" checked> Light</label>
  <label><input type="radio" name="theme"> Dark</label>
  <input type="range" value="65">
</form>`,
            css: `
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
  font-family: Inter, system-ui, sans-serif;
}
.panel {
  width: min(100% - 32px, 300px);
  padding: 20px;
  border-radius: 20px;
  background: white;
  border: 1px solid #cbd5e1;
  display: grid;
  gap: 14px;
  color: #0f172a;
}
label { display: flex; gap: 10px; align-items: center; color: #334155; }
input[type="range"] { width: 100%; }
`,
            description:
              "The controls work, but they still carry the browser's generic accent instead of matching the rest of the interface.",
          },
          right: {
            label: "✅ Add accent color",
            code: `.panel {
  accent-color: #2563eb;
}`,
            html: `
<form class="panel themed">
  <label><input type="checkbox" checked> Enable auto-save</label>
  <label><input type="radio" name="theme" checked> Light</label>
  <label><input type="radio" name="theme"> Dark</label>
  <input type="range" value="65">
</form>`,
            css: `
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #eff6ff;
  font-family: Inter, system-ui, sans-serif;
}
.panel {
  width: min(100% - 32px, 300px);
  padding: 20px;
  border-radius: 20px;
  background: white;
  border: 1px solid #bfdbfe;
  display: grid;
  gap: 14px;
  color: #0f172a;
}
.themed { accent-color: #2563eb; }
label { display: flex; gap: 10px; align-items: center; color: #334155; }
input[type="range"] { width: 100%; }
`,
            description:
              "Native behavior stays intact, but the controls now feel like part of the same product system instead of a browser default island.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Use it before going fully custom",
          content:
            "If your only goal is color alignment, start with `accent-color`. You may find it solves most of the visual gap without the accessibility and maintenance burden of custom controls.",
        },
      },
    ],
  },
};
