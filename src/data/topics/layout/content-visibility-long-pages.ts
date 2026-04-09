import type { Topic } from "@/types/topic";

export const contentVisibilityLongPages: Topic = {
  id: "content-visibility-long-pages",
  name: "Content Visibility Renders Long Pages Faster",
  categoryId: "layout",
  description:
    "Tell the browser not to fully render offscreen sections yet, which can dramatically reduce initial work on long pages.",
  tags: ["layout", "performance", "content-visibility", "rendering", "contain"],
  route: "/topics/content-visibility-long-pages",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Stop Paying for Below-the-Fold Content Up Front",
          content:
            "Long dashboards, docs, and marketing pages often mount dozens of sections immediately, even though the user can only see the first viewport. `content-visibility: auto` lets the browser skip a big chunk of rendering work for offscreen content until it becomes relevant. It is not a replacement for good architecture, but it is a powerful native optimization for large document-like layouts.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Default Rendering vs Deferred Offscreen Rendering",
          left: {
            label: "Without Content Visibility",
            code: `.section {
  padding: 2rem;
  border-block-end: 1px solid #334155;
}`,
            description:
              "Every section participates fully in layout, paint, and rendering work as soon as the page loads.",
          },
          right: {
            label: "With Content Visibility",
            code: `.section {
  content-visibility: auto;
  contain-intrinsic-size: 600px;
  padding: 2rem;
}`,
            description:
              "Offscreen sections can be skipped initially, while `contain-intrinsic-size` preserves a predictable placeholder size in the flow.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "A Safe Starting Pattern",
          code: `.doc-section {
  content-visibility: auto;
  contain-intrinsic-size: auto 48rem;
}

/* Use on repeated blocks, not tiny inline pieces */
.faq-item,
.report-module,
.landing-section {
  content-visibility: auto;
  contain-intrinsic-size: auto 36rem;
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Do not use it blindly",
          content:
            "This works best on large, repeated, block-level sections. Avoid putting it on tiny elements or critical above-the-fold UI. Always give the browser a sensible intrinsic placeholder size so scrollbars and jumpiness stay predictable.",
        },
      },
    ],
  },
};
