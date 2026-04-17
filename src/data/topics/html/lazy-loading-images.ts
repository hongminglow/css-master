import type {
  Topic,
  CardData,
  CodeData,
  TipData,
  ComparisonData,
  DosDontsData,
} from "@/types/topic";

export const lazyLoadingImages: Topic = {
  id: "lazy-loading-images",
  name: "Native Lazy Loading",
  categoryId: "html",
  description:
    "Use the browser-native loading attribute to defer off-screen images and iframes without JavaScript.",
  tags: ["loading", "lazy", "performance", "images", "iframe"],
  route: "/topics/lazy-loading-images",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "One Attribute, Free Performance",
          content:
            "Adding loading=\"lazy\" to <img> or <iframe> tells the browser to skip loading that resource until the user scrolls near it. No IntersectionObserver, no JS library — the browser handles everything natively. Use loading=\"eager\" (the default) for above-the-fold hero images so they load immediately.",
        } as CardData,
      },
      {
        type: "comparison",
        data: {
          title: "JS IntersectionObserver vs Native",
          left: {
            label: "❌ Old JS Approach",
            code: `<img data-src="photo.jpg" class="lazy">

<script>
const observer = new IntersectionObserver(els => {
  els.forEach(el => {
    if (el.isIntersecting) {
      el.target.src = el.target.dataset.src;
      observer.unobserve(el.target);
    }
  });
});
document.querySelectorAll('.lazy')
  .forEach(img => observer.observe(img));
</script>`,
            description: "Extra JS, extra complexity, extra bytes",
          },
          right: {
            label: "✓ Native HTML",
            code: `<!-- Off-screen image: defer it -->
<img src="photo.jpg" loading="lazy"
     alt="A photo" width="800" height="600">

<!-- Above-the-fold: load immediately -->
<img src="hero.jpg" loading="eager"
     alt="Hero" width="1200" height="600">

<!-- Iframes too! -->
<iframe src="map.html" loading="lazy"></iframe>`,
            description: "Zero JS, same result, better DX",
          },
        } as ComparisonData,
      },
      {
        type: "code",
        data: {
          language: "html",
          title: "HTML",
          code: `<!-- Always set width + height to prevent layout shifts -->
<img
  src="product.jpg"
  alt="Product photo"
  width="400"
  height="300"
  loading="lazy"
  decoding="async"
>

<!-- fetchpriority for the LCP image -->
<img
  src="hero.jpg"
  alt="Hero"
  fetchpriority="high"
  loading="eager"
>`,
        } as CodeData,
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Don't lazy-load above-the-fold content",
          content:
            "Never use loading=\"lazy\" on the first visible image (especially your LCP image). The browser would delay it, hurting your Largest Contentful Paint score. Only apply lazy loading to images below the fold.",
        } as TipData,
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Browser Support",
          content:
            "Supported in all modern browsers (Chrome 77+, Firefox 75+, Safari 15.4+). For older Safari, it gracefully degrades: the attribute is ignored and images load normally.",
        } as TipData,
      },
      {
        type: "dosdонts",
        data: {
          title: "Best Practices",
          dos: [
            "Always set explicit width and height on lazy-loaded images",
            "Use loading=\"eager\" for above-the-fold / LCP images",
            "Combine with decoding=\"async\" for non-blocking image decode",
            "Use fetchpriority=\"high\" on your most important image",
          ],
          donts: [
            "Don't lazy-load your hero / LCP image",
            "Don't omit width/height — it causes CLS layout jumps",
            "Don't rely on lazy loading as a substitute for proper image sizing",
          ],
        } as DosDontsData,
      },
    ],
  },
};
