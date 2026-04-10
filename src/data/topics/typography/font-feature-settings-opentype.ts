import type { Topic } from "@/types/topic";

export const fontFeatureSettingsOpentype: Topic = {
  id: "font-feature-settings-opentype",
  name: "Hidden OpenType Features",
  categoryId: "typography",
  description: "Unlocking disabled ligatures, slashed zeros, and alternate characters intentionally baked into modern fonts.",
  tags: ["typography", "fonts", "opentype", "ligatures", "design"],
  route: "/topics/font-feature-settings-opentype",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Typography Easter Eggs",
          content: "High quality font files (like Inter, Roboto, or bespoke Serif fonts) usually contain dozens of character variations that are disabled by default so normal reading isn't distracting. They might contain variations with swashes, different ampersands (&), explicitly slashed zeros to distinguish them from the letter 'O', or complex 'ffi' ligatures. You can force the browser to unlock these using `font-feature-settings`.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Base Glyph vs Alternate Mapping",
          left: {
            label: "Default Behavior",
            code: `.price-tag {
  font-family: 'Inter', sans-serif;
}
/* A zero '0' might look exactly like 
   a capital 'O' causing confusion in 
   passwords or stock tickers. */`,
          },
          right: {
            label: "OpenType Activation",
            code: `.price-tag {
  font-family: 'Inter', sans-serif;
  
  /* 'zero' usually stands for Slashed Zero.
     The '1' natively activates it! */
  font-feature-settings: 'zero' 1;
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 3rem; justify-content: center; padding: 2rem; background: #0f172a; border-radius: 8px;">
  <style>
    .font-demo {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial;
      color: white;
      font-size: 2rem;
      letter-spacing: 2px;
      font-weight: bold;
    }
  </style>

  <div style="flex: 1; text-align: center;">
    <h4 style="color: #64748b; margin-top: 0; font-size: 0.8rem;">Default (0 vs O)</h4>
    <div class="font-demo">
      B0X-O0O
    </div>
  </div>

  <div style="flex: 1; text-align: center;">
    <h4 style="color: #64748b; margin-top: 0; font-size: 0.8rem;">'zero' 1 (Slashed Zero)</h4>
    <div class="font-demo" style="font-feature-settings: 'zero' 1; color: #3b82f6;">
      B0X-O0O
    </div>
  </div>
</div>`,
          css: `/* OpenType feature codes are 4-letter registry strings. Some other very common ones are 'liga' (ligatures), 'smcp' (small caps), and stylistic sets like 'ss01' or 'ss02' where the font author provides alternate lowercase 'a' or 'g' variants! */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Exploration",
          dos: [
            "Check the documentation of your font. Fonts like 'Inter' have massive webpages dedicated exclusively to documenting their `ss01`-`ss04`, formatting, and tabular numeral settings.",
          ],
          donts: [
            "Don't expect `font-feature-settings: 'zero' 1` to work if the font author didn't physically draw a slashed-zero and embed it in the file. CSS can't magically invent alternate glyphs.",
          ],
        },
      },
    ],
  },
};
