import type { Topic } from "@/types/topic";

export const pictureVsSrcset: Topic = {
  id: "picture-vs-srcset",
  name: "picture vs srcset: Responsive Images",
  categoryId: "html",
  description:
    "Two HTML tools that solve different responsive image problems — srcset for resolution switching, picture for art direction.",
  tags: ["html", "images", "responsive", "srcset", "picture", "performance", "art-direction"],
  route: "/topics/picture-vs-srcset",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Problem: One Image Can't Do Everything",
          content:
            "Serving a 2400px hero image to a mobile device is wasteful. Serving a wide landscape crop to a portrait phone is ugly. HTML gives us two distinct tools to solve these two distinct problems: `srcset` for **resolution switching** (same image, different file sizes) and `<picture>` for **art direction** (different image crops/compositions for different contexts).",
        },
      },
      {
        type: "comparison",
        data: {
          title: "srcset vs picture Syntax",
          left: {
            label: "srcset",
            code: `<img 
  srcset="800.jpg 800w, 1600.jpg 1600w" 
  sizes="100vw" src="800.jpg"
/>`,
          },
          right: {
            label: "<picture>",
            code: `<picture>
  <source media="(max-width: 600px)" srcset="mob.jpg" />
  <img src="desk.jpg" />
</picture>`,
          },
        },
      },
      {
        type: "featurecomparison",
        data: {
          title: "srcset vs picture: Pick the Right Tool",
          left: {
            label: "srcset — Resolution Switching",
            variant: "info",
            icon: "dot",
            items: [
              "Same image content, just different file sizes",
              "Browser chooses the most appropriate resolution",
              "Combine with sizes to give layout hints",
              "Best for: hero images, thumbnails, avatars",
              "Browser can ignore hint if cached version exists",
            ],
          },
          right: {
            label: "<picture> — Art Direction",
            variant: "success",
            icon: "check",
            items: [
              "Different image crops or compositions per breakpoint",
              "You control exactly which source is used",
              "Uses media queries inside <source> elements",
              "Best for: hero banners with different focal points",
              "Requires maintaining multiple cropped assets",
            ],
          },
        },
      },
      {
        type: "code",
        data: {
          language: "html",
          code: `<!-- ✅ srcset: Resolution switching -->
<!-- Browser picks the best size for the device pixel ratio + layout width -->
<img
  src="hero-800.jpg"
  srcset="
    hero-400.jpg   400w,
    hero-800.jpg   800w,
    hero-1600.jpg 1600w
  "
  sizes="
    (max-width: 600px) 100vw,
    (max-width: 1200px) 50vw,
    800px
  "
  alt="Team photo"
  width="800"
  height="600"
/>

<!-- The browser maths:
  On a 375px phone at 3x DPR → needs ~1125px → picks hero-1600.jpg
  On a 1440px desktop at 1x  → needs ~800px  → picks hero-800.jpg  ✓ -->`,
        },
      },
      {
        type: "code",
        data: {
          language: "html",
          code: `<!-- ✅ <picture>: Art direction -->
<!-- YOU decide exactly which image shows at each breakpoint -->
<picture>
  <!-- Portrait crop for small screens -->
  <source
    media="(max-width: 600px)"
    srcset="hero-portrait-400.jpg 400w, hero-portrait-800.jpg 800w"
  />

  <!-- Square crop for medium screens -->
  <source
    media="(max-width: 1024px)"
    srcset="hero-square-600.jpg 600w, hero-square-1200.jpg 1200w"
  />

  <!-- Wide landscape for large screens — also the fallback -->
  <img
    src="hero-landscape-1600.jpg"
    srcset="hero-landscape-800.jpg 800w, hero-landscape-1600.jpg 1600w"
    sizes="100vw"
    alt="Team photo"
    width="1600"
    height="900"
  />
</picture>`,
        },
      },
      {
        type: "table",
        data: {
          title: "Decision Matrix",
          headers: ["Scenario", "Use", "Why"],
          rows: [
            ["Avatar circle that stays circular", "srcset", "Same content, just smaller files"],
            ["Banner that zooms to face on mobile", "<picture>", "Different crop = art direction"],
            ["Blog thumbnail at various sizes", "srcset + sizes", "Browser picks optimal resolution"],
            ["Logo that swaps dark/light version", "<picture>", "Different image = art direction"],
            ["Gallery grid images", "srcset", "Same composition, different resolutions"],
            ["Hero with text overlay that repositions", "<picture>", "Different composition per viewport"],
          ],
        },
      },
      {
        type: "code",
        data: {
          language: "html",
          code: `<!-- ✅ Bonus: <picture> for next-gen format switching -->
<!-- Serve WebP/AVIF where supported, JPEG as fallback -->
<picture>
  <source type="image/avif" srcset="photo.avif" />
  <source type="image/webp" srcset="photo.webp" />
  <img src="photo.jpg" alt="Landscape" width="800" height="600" />
</picture>

<!-- Browser checks support top-to-bottom, uses first match.
  Chrome/Firefox → photo.avif (smallest file!)
  Safari 14+     → photo.webp
  IE 11          → photo.jpg (graceful fallback) -->`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Always include width & height attributes",
          content:
            "Even with srcset and picture, always include explicit `width` and `height` attributes on the `<img>` tag. This lets the browser reserve the correct layout space before the image loads, preventing Cumulative Layout Shift (CLS) — a Core Web Vitals metric that directly impacts SEO rankings.",
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "srcset is a hint, <picture> is a command",
          content:
            "The critical mental model: `srcset` lets the **browser** choose the best image (it can even ignore your hint if a higher-res version is already cached). `<picture>` with `<source media>` is an **instruction** — the browser MUST use the matching source. Use `srcset` for performance hints, `<picture>` when visual accuracy is non-negotiable.",
        },
      },
    ],
  },
};
