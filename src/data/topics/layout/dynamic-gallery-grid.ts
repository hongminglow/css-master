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
        type: "table",
        data: {
          title: "Grid Auto-Flow Options Comparison",
          headers: ["Property Value", "Behavior", "Use Case"],
          rows: [
            [
              "row (default)",
              "Fills row by row, leaves gaps",
              "Standard grids with uniform items",
            ],
            [
              "column",
              "Fills column by column, leaves gaps",
              "Vertical-first layouts",
            ],
            [
              "dense",
              "Fills gaps with smaller items",
              "Galleries, Pinterest-style layouts",
            ],
            [
              "row dense",
              "Row-first, then fills gaps",
              "Horizontal galleries with gap filling",
            ],
            [
              "column dense",
              "Column-first, then fills gaps",
              "Vertical galleries with gap filling",
            ],
          ],
        } as TableData,
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
