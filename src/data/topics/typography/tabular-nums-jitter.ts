import type { Topic } from "@/types/topic";

export const tabularNumsJitter: Topic = {
  id: "tabular-nums-jitter",
  name: "Curing Jitter with Tabular Nums",
  categoryId: "typography",
  description: "Preventing numbers from violently shaking in timers, countdowns, and data tables by enabling monospaced digits in standard fonts.",
  tags: ["typography", "numbers", "performance", "font-variant", "data"],
  route: "/topics/tabular-nums-jitter",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Jittering Numbers Problem",
          content: "Most modern fonts use 'proportional' figures. This means a '1' is much narrower than an '8'. If you build a countdown timer or a rapidly updating stock price, the changing width of the numbers will cause the entire text block (and surrounding layout) to constantly jitter back and forth. You don't need to switch to an ugly Courier monospace font to fix this; you just need to activate a specific font feature.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Proportional vs Tabular",
          left: {
            label: "Proportional (Default)",
            code: `.timer {
  font-family: 'Inter', sans-serif;
  /* Width changes depending on the digit */
}`,
          },
          right: {
            label: "Tabular (Fixed Width)",
            code: `.timer {
  font-family: 'Inter', sans-serif;
  /* Forces all numbers to equal width 
     without changing the font itself! */
  font-variant-numeric: tabular-nums;
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 2rem; justify-content: center; padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div style="display: flex; flex-direction: column; align-items: center;">
    <span style="color: #64748b; font-size: 0.8rem; margin-bottom: 0.5rem;">Default (Will Jitter)</span>
    <div style="font-size: 2rem; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial; color: #ef4444; background: #1e293b; padding: 0.5rem;">
      10:11:11
    </div>
    <div style="font-size: 2rem; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial; color: #ef4444; background: #1e293b; padding: 0.5rem;">
      10:88:88
    </div>
  </div>

  <div style="display: flex; flex-direction: column; align-items: center;">
    <span style="color: #64748b; font-size: 0.8rem; margin-bottom: 0.5rem;">Tabular (Perfectly Aligned)</span>
    <div style="font-variant-numeric: tabular-nums; font-size: 2rem; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial; color: #10b981; background: #1e293b; padding: 0.5rem;">
      10:11:11
    </div>
    <div style="font-variant-numeric: tabular-nums; font-size: 2rem; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial; color: #10b981; background: #1e293b; padding: 0.5rem;">
      10:88:88
    </div>
  </div>

</div>`,
          css: `/* Notice how the tabular numbers perfectly align horizontally, regardless of whether a thin '1' or wide '8' is written. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "When to use it",
          dos: [
            "Use it in `<time>` elements, live dashboards, loading percentages, scoreboards, and pricing tables.",
            "Use it to align columns of numbers (like financial reports) so the decimal points line up.",
          ],
          donts: [
            "Don't use it on standard article body text. Proportional numbers look much more natural and pleasing when mixed inline with standard letters.",
          ],
        },
      },
    ],
  },
};
