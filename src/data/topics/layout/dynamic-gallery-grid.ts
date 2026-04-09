import type {
  CardData,
  CodeData,
  ComparisonData,
  DosDontsData,
  TableData,
  TipData,
  Topic,
} from "@/types/topic";

export const dynamicGalleryGrid: Topic = {
  id: "dynamic-gallery-grid",
  name: "Dynamic Gallery Layouts",
  categoryId: "layout",
  description:
    "Build responsive, gap-filling image galleries like Pinterest using CSS Grid's auto-flow dense",
  tags: ["grid", "gallery", "masonry", "responsive", "images", "auto-flow"],
  route: "/topics/dynamic-gallery-grid",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Social Media Gallery Problem",
          content:
            "Traditional CSS Grid leaves gaps when items have different sizes. Instagram, Pinterest, and modern galleries need a 'masonry' layout that fills empty spaces automatically. CSS Grid's `grid-auto-flow: dense` solves this without JavaScript libraries like Masonry.js.",
        } as CardData,
      },
      {
        type: "comparison",
        data: {
          title: "Old Way vs CSS Grid Dense",
          left: {
            label: "JavaScript Masonry.js",
            code: `// Requires external library
const grid = document.querySelector('.grid');
const masonry = new Masonry(grid, {
  itemSelector: '.item',
  columnWidth: 200,
  gutter: 16
});

// Recalculate on resize
window.addEventListener('resize', () => {
  masonry.layout();
});`,
            description:
              "Heavy dependency, performance overhead, complex setup",
          },
          right: {
            label: "CSS Grid Auto-Flow Dense",
            code: `.gallery {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  gap: 1rem;
}

/* Items span multiple cells */
.item-large { 
  grid-column: span 2;
  grid-row: span 2;
}`,
            description: "Pure CSS, no dependencies, responsive by default",
          },
        } as ComparisonData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Complete Gallery System",
          code: `.gallery {
  display: grid;
  
  /* Responsive columns: min 200px, max 1fr */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  
  /* Fixed row height */
  grid-auto-rows: 200px;
  
  /* Magic: fills gaps automatically */
  grid-auto-flow: dense;
  
  gap: 1rem;
  padding: 1rem;
}

.item {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background: #e2e8f0;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Crop images to fill */
}

/* Dynamic sizing classes */
.item-large {
  grid-column: span 2; /* 2 columns wide */
  grid-row: span 2;    /* 2 rows tall */
}

.item-wide {
  grid-column: span 2;
}

.item-tall {
  grid-row: span 2;
}

/* Responsive: reduce spanning on mobile */
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-auto-rows: 150px;
  }
  
  .item-large {
    grid-column: span 1;
    grid-row: span 1;
  }
}`,
        } as CodeData,
      },
      {
        type: "preview",
        data: {
          html: `<div class="gallery">
  <div class="item item-large">
    <div class="placeholder">Large</div>
  </div>
  <div class="item">
    <div class="placeholder">1</div>
  </div>
  <div class="item item-wide">
    <div class="placeholder">Wide</div>
  </div>
  <div class="item">
    <div class="placeholder">2</div>
  </div>
  <div class="item item-tall">
    <div class="placeholder">Tall</div>
  </div>
  <div class="item">
    <div class="placeholder">3</div>
  </div>
  <div class="item">
    <div class="placeholder">4</div>
  </div>
  <div class="item item-wide">
    <div class="placeholder">Wide</div>
  </div>
  <div class="item">
    <div class="placeholder">5</div>
  </div>
</div>`,
          css: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: 80px;
  grid-auto-flow: dense;
  gap: 8px;
  padding: 12px;
  background: #1e293b;
}
.item {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 12px;
}
.item-large {
  grid-column: span 2;
  grid-row: span 2;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}
.item-wide {
  grid-column: span 2;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}
.item-tall {
  grid-row: span 2;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}
.placeholder {
  text-align: center;
}`,
        },
      },
      {
        type: "card",
        data: {
          title: "Alternative Approaches to Gallery Layouts",
          content:
            "While `grid-auto-flow: dense` is powerful for dynamic content, there are several other CSS Grid techniques for creating gallery layouts. Each has different trade-offs in terms of control, flexibility, and complexity. Let's explore the main approaches.",
        } as CardData,
      },
      {
        type: "table",
        data: {
          title: "Gallery Layout Methods Comparison",
          headers: ["Method", "Control", "Dynamic", "Complexity", "Best For"],
          rows: [
            [
              "grid-auto-flow: dense",
              "Low",
              "✓ Yes",
              "Low",
              "Dynamic content, any item count",
            ],
            [
              "grid-template-areas",
              "High",
              "✗ No",
              "Medium",
              "Fixed layouts, hero sections",
            ],
            [
              "Explicit positioning",
              "High",
              "⚠ Partial",
              "High",
              "Featured items, custom patterns",
            ],
            [
              "Subgrid",
              "Medium",
              "✓ Yes",
              "Medium",
              "Nested galleries, alignment",
            ],
            [
              "CSS Columns",
              "Low",
              "✓ Yes",
              "Low",
              "Vertical masonry (Pinterest)",
            ],
          ],
        } as TableData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Method 1: Grid Template Areas (Designer Control)",
          code: `.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 1rem;
  
  /* Visual layout definition */
  grid-template-areas:
    "hero hero    small1 small2"
    "hero hero    small3 small4"
    "med1 med2    med2   small5";
}

/* Assign items to named areas */
.item-1 { grid-area: hero; }
.item-2 { grid-area: small1; }
.item-3 { grid-area: small2; }
.item-4 { grid-area: small3; }
.item-5 { grid-area: small4; }
.item-6 { grid-area: med1; }
.item-7 { grid-area: med2; }
.item-8 { grid-area: small5; }

/* Pros: Visual layout in code, precise control
   Cons: Not dynamic, requires manual class assignment */`,
        } as CodeData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Method 2: Explicit Grid Positioning (Hybrid Approach)",
          code: `.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}

/* Position specific featured items */
.item:nth-child(1) {
  grid-column: 1 / 3;  /* span columns 1-2 */
  grid-row: 1 / 3;     /* span rows 1-2 */
}

.item:nth-child(5) {
  grid-column: 3 / 5;  /* span columns 3-4 */
  grid-row: 2 / 3;
}

/* Or use span syntax */
.item:nth-child(8) {
  grid-column: span 2;
  grid-row: span 2;
}

/* Regular items auto-place in remaining space
   Pros: Mix of control and flexibility
   Cons: Need to calculate positions manually */`,
        } as CodeData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Method 3: CSS Multi-Column (True Masonry)",
          code: `.gallery {
  /* Vertical masonry like Pinterest */
  column-count: 4;
  column-gap: 1rem;
}

.item {
  /* Prevent items from breaking across columns */
  break-inside: avoid;
  margin-bottom: 1rem;
}

/* Responsive columns */
@media (max-width: 1200px) {
  .gallery { column-count: 3; }
}

@media (max-width: 768px) {
  .gallery { column-count: 2; }
}

@media (max-width: 480px) {
  .gallery { column-count: 1; }
}

/* Pros: True masonry, items flow naturally
   Cons: Fills vertically (not horizontally), harder to control order */`,
        } as CodeData,
      },
      {
        type: "preview",
        data: {
          html: `<div class="gallery-areas">
  <div class="item i-hero">Hero</div>
  <div class="item i-s1">1</div>
  <div class="item i-s2">2</div>
  <div class="item i-s3">3</div>
  <div class="item i-s4">4</div>
  <div class="item i-m1">Med</div>
  <div class="item i-m2">Medium</div>
  <div class="item i-s5">5</div>
</div>`,
          css: `.gallery-areas {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 60px);
  gap: 6px;
  padding: 12px;
  background: #1e293b;
  grid-template-areas:
    "hero hero s1 s2"
    "hero hero s3 s4"
    "m1 m2 m2 s5";
}
.item {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 11px;
}
.i-hero { grid-area: hero; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
.i-s1 { grid-area: s1; }
.i-s2 { grid-area: s2; }
.i-s3 { grid-area: s3; }
.i-s4 { grid-area: s4; }
.i-m1 { grid-area: m1; background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
.i-m2 { grid-area: m2; background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
.i-s5 { grid-area: s5; }`,
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Method 4: Subgrid (Modern Nested Galleries)",
          code: `.main-gallery {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}

/* Nested gallery inherits parent columns */
.gallery-section {
  display: grid;
  grid-column: span 3;  /* Take 3 columns */
  grid-template-columns: subgrid;  /* Inherit parent's 3 columns */
  gap: 1rem;
}

.gallery-section .item:first-child {
  grid-column: span 2;  /* Span 2 of the inherited columns */
}

/* Pros: Perfect alignment across nested grids
   Cons: Limited browser support (Safari 16+, Chrome 117+) */`,
        } as CodeData,
      },
      {
        type: "comparison",
        data: {
          title: "Dynamic vs Fixed Layouts",
          left: {
            label: "Dynamic (Auto-Flow Dense)",
            code: `.gallery {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  gap: 1rem;
}

/* Items can have size classes */
.large { 
  grid-column: span 2;
  grid-row: span 2;
}`,
            description:
              "Works with any number of items, responsive, fills gaps automatically",
          },
          right: {
            label: "Fixed (Template Areas)",
            code: `.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 1rem;
  grid-template-areas:
    "a a b c"
    "a a d e"
    "f g g h";
}

.item-1 { grid-area: a; }`,
            description:
              "Precise control, visual layout definition, requires exact item count",
          },
        } as ComparisonData,
      },
      {
        type: "dosdонts",
        data: {
          title: "Choosing the Right Method",
          dos: [
            "Use `auto-flow dense` for dynamic content (blogs, feeds, CMS)",
            "Use `grid-template-areas` for fixed hero sections or landing pages",
            "Use explicit positioning for featured items in otherwise dynamic grids",
            "Use CSS columns for true vertical masonry (Pinterest-style)",
            "Use subgrid for nested galleries that need perfect alignment",
            "Combine methods: explicit positioning for hero + auto-flow for rest",
          ],
          donts: [
            "Don't use `grid-template-areas` for user-generated content",
            "Don't use `auto-flow dense` when visual order matters (articles, forms)",
            "Don't use CSS columns if you need horizontal flow control",
            "Don't use subgrid yet if you need broad browser support",
            "Don't over-engineer: start simple, add complexity only when needed",
            "Don't forget responsive breakpoints for all methods",
          ],
        } as DosDontsData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Hybrid Approach: Best of Both Worlds",
          code: `.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  gap: 1rem;
}

/* Explicitly position hero item */
.item:first-child {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

/* Let other items auto-place with dense packing */
.item-large {
  grid-column: span 2;
  grid-row: span 2;
}

.item-wide {
  grid-column: span 2;
}

/* Pros: Control where it matters, flexibility everywhere else
   Use case: Featured content + dynamic feed */`,
        } as CodeData,
      },
      {
        type: "dosdонts",
        data: {
          title: "Best Practices",
          dos: [
            "Use `object-fit: cover` on images to fill containers",
            "Set explicit `grid-auto-rows` height for consistent sizing",
            "Use `repeat(auto-fill, minmax())` for responsive columns",
            "Add `overflow: hidden` to prevent content overflow",
            "Test with different item counts (3, 7, 15 items)",
            "Use semantic HTML (`<figure>`, `<img>`, `alt` text)",
          ],
          donts: [
            "Don't rely on visual order for important content (dense changes order)",
            "Don't use `dense` for forms or sequential content",
            "Don't forget `aspect-ratio` for consistent image proportions",
            "Don't use fixed pixel widths (breaks responsiveness)",
            "Don't span more cells than available columns",
            "Don't forget to handle empty states",
          ],
        } as DosDontsData,
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Accessibility Warning",
          content:
            "`grid-auto-flow: dense` changes the visual order of items to fill gaps, but the DOM order stays the same. Screen readers and keyboard navigation follow DOM order, not visual order. Only use `dense` for decorative galleries where order doesn't matter. For sequential content (articles, forms), use standard `row` flow.",
        } as TipData,
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Dynamic Sizing with JavaScript",
          content:
            "You can dynamically assign size classes based on image dimensions or aspect ratios. For example, portrait images get `.item-tall`, landscape get `.item-wide`, and featured content gets `.item-large`. This creates organic, Pinterest-like layouts.",
        } as TipData,
      },
      {
        type: "code",
        data: {
          language: "javascript",
          title: "Dynamic Size Assignment (Optional)",
          code: `// Assign size classes based on image aspect ratio
const items = document.querySelectorAll('.gallery .item');

items.forEach(item => {
  const img = item.querySelector('img');
  
  img.addEventListener('load', () => {
    const ratio = img.naturalWidth / img.naturalHeight;
    
    if (ratio > 1.5) {
      item.classList.add('item-wide'); // Landscape
    } else if (ratio < 0.7) {
      item.classList.add('item-tall'); // Portrait
    } else if (item.dataset.featured) {
      item.classList.add('item-large'); // Featured
    }
  });
});`,
        } as CodeData,
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Browser Support",
          content:
            "`grid-auto-flow: dense` is supported in all modern browsers: Chrome 57+, Firefox 52+, Safari 10.1+, Edge 16+. No polyfills needed for 99%+ of users.",
        } as TipData,
      },
    ],
  },
};
