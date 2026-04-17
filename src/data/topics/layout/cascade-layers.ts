import type {
  Topic,
  CardData,
  CodeData,
  TipData,
  PreviewData,
  DosDontsData,
} from "@/types/topic";

export const cascadeLayers: Topic = {
  id: "cascade-layers",
  name: "CSS Cascade Layers (@layer)",
  categoryId: "layout",
  description:
    "Cascade layers let you control the specificity war between resets, base styles, third-party libraries, and your own code — without !important.",
  tags: ["@layer", "cascade", "specificity", "layers", "css architecture"],
  route: "/topics/cascade-layers",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Specificity Without the War",
          content:
            "@layer defines named layers of CSS. Styles in a later layer always win over earlier layers, regardless of selector specificity. This means you can load a utility library (high specificity) in an early layer and your low-specificity custom styles in a later layer — and your styles will win. No !important needed.",
        } as CardData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "CSS — Defining Layers",
          code: `/* Declare order upfront — later layers win */
@layer reset, base, components, utilities, overrides;

/* Even if reset has high-specificity rules, base wins */
@layer reset {
  * { margin: 0; padding: 0; box-sizing: border-box; }
}

@layer base {
  body { font-family: sans-serif; line-height: 1.5; }
  a { color: #2563eb; }
}

@layer components {
  .btn {
    display: inline-flex;
    padding: 8px 16px;
    border-radius: 6px;
  }
}

/* Utilities win over components regardless of specificity */
@layer utilities {
  .mt-4 { margin-top: 1rem; }
  .text-center { text-align: center; }
}

/* Third-party lib loaded inside its own layer — contained! */
@import "bootstrap.css" layer(bootstrap);`,
        } as CodeData,
      },
      {
        type: "preview",
        data: {
          html: `<div class="layer-demo">
  <p class="layer-a">Layer A (base) — color: red</p>
  <p class="layer-b">Layer B (overrides) — color: blue</p>
  <p class="layer-both">Both layers — blue wins (later layer)</p>
</div>`,
          css: `@layer base, overrides;
@layer base { .layer-a { color: red; font-weight: bold; } .layer-both { color: red; } }
@layer overrides { .layer-b { color: #2563eb; font-weight: bold; } .layer-both { color: #2563eb; } }
.layer-demo { display: flex; flex-direction: column; gap: 8px; padding: 16px; background: #f8fafc; border-radius: 8px; font-family: monospace; font-size: 14px; }
.layer-demo p { padding: 8px 12px; background: white; border-radius: 4px; border: 1px solid #e2e8f0; }`,
        } as PreviewData,
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Unlayered Styles Always Win",
          content:
            "CSS that is NOT inside any @layer is treated as if it's in the highest-priority layer. This means migrating to @layer is safe — any existing CSS outside a layer still wins over all layered styles.",
        } as TipData,
      },
      {
        type: "dosdонts",
        data: {
          title: "Best Practices",
          dos: [
            "Declare layer order at the top of your stylesheet",
            "Import third-party CSS into a named layer to contain its specificity",
            "Use @layer revert-layer to revert to the previous layer's value",
            "Combine with @import to wrangle legacy or library CSS: @import 'lib.css' layer(lib)",
          ],
          donts: [
            "Don't mix layered and unlayered styles carelessly — unlayered always wins",
            "Don't rely on layer ordering if you don't declare it upfront — order of appearance becomes the priority",
            "Don't use @layer as a substitute for fixing bad specificity in your own code",
          ],
        } as DosDontsData,
      },
    ],
  },
};
