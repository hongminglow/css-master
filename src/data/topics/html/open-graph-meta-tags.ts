import type {
  Topic,
  CardData,
  CodeData,
  TipData,
  DosDontsData,
} from "@/types/topic";

export const openGraphMetaTags: Topic = {
  id: "open-graph-meta-tags",
  name: "Open Graph & Social Meta Tags",
  categoryId: "html",
  description:
    "Control how your page appears when shared on social media using Open Graph and Twitter Card meta tags.",
  tags: ["meta", "og", "open graph", "social", "seo", "html"],
  route: "/topics/open-graph-meta-tags",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "What Gets Shown When You Share a Link",
          content:
            "When someone shares your URL on Slack, Twitter, LinkedIn, or iMessage, those platforms scrape your page's <meta> tags to build a rich preview card. Without Open Graph tags, platforms guess — often pulling the wrong image or title. With them, you control exactly what appears.",
        } as CardData,
      },
      {
        type: "code",
        data: {
          language: "html",
          title: "HTML — Essential Meta Tags",
          code: `<head>
  <!-- Open Graph (Facebook, LinkedIn, Slack, WhatsApp) -->
  <meta property="og:title" content="CSS Tricks Platform">
  <meta property="og:description"
    content="Discover CSS techniques you might have missed.">
  <meta property="og:image" content="https://example.com/og-image.png">
  <meta property="og:url" content="https://example.com/topics/flexbox">
  <meta property="og:type" content="website">

  <!-- Twitter / X Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="CSS Tricks Platform">
  <meta name="twitter:description"
    content="Discover CSS techniques you might have missed.">
  <meta name="twitter:image" content="https://example.com/og-image.png">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/topics/flexbox">
</head>`,
        } as CodeData,
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "OG Image Size",
          content:
            "The recommended og:image size is 1200×630px (1.91:1 ratio). Keep file size under 1MB. Use an absolute URL — relative paths won't work when the platform fetches your tags.",
        } as TipData,
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Platforms Cache Aggressively",
          content:
            "Once a URL has been shared, platforms cache the preview for days. Use Facebook's Sharing Debugger, LinkedIn's Post Inspector, or Twitter's Card Validator to force a re-scrape after you update your tags.",
        } as TipData,
      },
      {
        type: "dosdонts",
        data: {
          title: "Best Practices",
          dos: [
            "Use absolute URLs for og:image",
            "Keep og:title under 60 characters",
            "Keep og:description under 155 characters",
            "Test with each platform's debug tool before deploying",
            "Use twitter:card=\"summary_large_image\" for maximum visibility",
          ],
          donts: [
            "Don't use relative URLs for images",
            "Don't rely on auto-detection — always be explicit",
            "Don't forget to update tags for dynamic/SPA routes",
            "Don't use images smaller than 600×315px",
          ],
        } as DosDontsData,
      },
    ],
  },
};
