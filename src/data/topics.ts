import type {
  Topic,
  CardData,
  WorkflowData,
  CodeData,
  PreviewData,
  ComparisonData,
  TimelineData,
  TipData,
  TableData,
  ListData,
  QuoteData,
  DosDontsData
} from "@/types/topic";

export const topics: Topic[] = [
  {
    id: "flexbox-centering",
    name: "Flexbox Centering",
    categoryId: "layout",
    description: "Learn the most reliable way to center elements using Flexbox",
    tags: ["flexbox", "centering", "layout"],
    route: "/topics/flexbox-centering",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Why This Works",
            content:
              "Flexbox's justify-content and align-items properties work on the main and cross axes, making centering straightforward and reliable across all browsers.",
          } as CardData,
        },
        {
          type: "workflow",
          data: {
            title: "Implementation Steps",
            steps: [
              {
                number: 1,
                title: "Set display: flex",
                description: "Apply display: flex to the parent container",
              },
              {
                number: 2,
                title: "Center horizontally",
                description: "Use justify-content: center",
              },
              {
                number: 3,
                title: "Center vertically",
                description: "Use align-items: center",
              },
            ],
          } as WorkflowData,
        },
        {
          type: "code",
          data: {
            language: "css",
            title: "CSS",
            code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
          } as CodeData,
        },
        {
          type: "preview",
          data: {
            html: '<div class="preview-container"><div class="preview-box">Centered</div></div>',
            css: `.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  background: #f8fafc;
}
.preview-box {
  width: 100px;
  height: 100px;
  background: #2563eb;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 600;
}`,
          } as PreviewData,
        },
      ],
    },
  },
  {
    id: "margin-collapse",
    name: "Margin Collapse Mystery",
    categoryId: "layout",
    description: "Understanding why margins collapse and how to prevent it",
    tags: ["margin", "box-model", "gotcha"],
    route: "/topics/margin-collapse",
    content: {
      sections: [
        {
          type: "quote",
          data: {
            quote: "The top and bottom margins of blocks are sometimes combined into a single margin whose size is the largest of the individual margins.",
            author: "MDN Web Docs"
          } as QuoteData
        },
        {
          type: "card",
          data: {
            title: "What is Margin Collapse?",
            content: "Margin collapse is a CSS behavior where vertical margins of adjacent block elements combine into a single margin. Instead of adding together, only the larger margin is applied. This often catches developers off guard."
          } as CardData
        },
        {
          type: "tip",
          data: {
            variant: "warning",
            title: "Common Gotcha",
            content: "Margins of floating and absolutely positioned elements NEVER collapse. Only vertical margins collapse, never horizontal ones."
          } as TipData
        },
        {
          type: "comparison",
          data: {
            title: "Expected vs Actual Behavior",
            left: {
              label: "What You Expect",
              code: `.box1 { margin-bottom: 20px; }
.box2 { margin-top: 30px; }

/* Expected gap: 50px */`,
              description: "You'd think margins add up"
            },
            right: {
              label: "What Actually Happens",
              code: `.box1 { margin-bottom: 20px; }
.box2 { margin-top: 30px; }

/* Actual gap: 30px */`,
              description: "Only the larger margin applies"
            }
          } as ComparisonData
        },
        {
          type: "dosdонts",
          data: {
            title: "How to Prevent Margin Collapse",
            dos: [
              "Use padding instead of margin",
              "Add display: flex or display: grid to parent",
              "Use border or padding on parent",
              "Add overflow: hidden to parent"
            ],
            donts: [
              "Don't rely on margin addition for spacing",
              "Don't forget about parent-child margin collapse",
              "Don't use margins on first/last children without considering collapse"
            ]
          } as DosDontsData
        },
        {
          type: "code",
          data: {
            language: "css",
            title: "Prevention Techniques",
            code: `/* Method 1: Use flexbox */
.parent {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Use gap instead */
}

/* Method 2: Use padding */
.parent {
  padding: 1px 0; /* Prevents collapse */
}

/* Method 3: Use overflow */
.parent {
  overflow: hidden; /* Creates BFC */
}`
          } as CodeData
        }
      ]
    }
  },
  {
    id: "z-index-stacking-context",
    name: "Z-Index Stacking Context",
    categoryId: "layout",
    description: "Why z-index: 999999 doesn't work and how stacking contexts actually work",
    tags: ["z-index", "stacking", "position", "gotcha"],
    route: "/topics/z-index-stacking-context",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "The Z-Index Mystery",
            content: "Ever set z-index: 999999 on an element and it still appears behind another element with z-index: 1? The culprit is stacking contexts. Z-index only works within the same stacking context, not globally."
          } as CardData
        },
        {
          type: "tip",
          data: {
            variant: "danger",
            title: "Critical Rule",
            content: "Z-index only works on positioned elements (position: relative, absolute, fixed, or sticky). It has no effect on position: static (the default)."
          } as TipData
        },
        {
          type: "list",
          data: {
            title: "What Creates a Stacking Context?",
            ordered: false,
            items: [
              { text: "position: absolute or relative with z-index other than auto" },
              { text: "position: fixed or sticky (always)" },
              { text: "opacity less than 1" },
              { text: "transform, filter, perspective, or clip-path" },
              { text: "will-change with certain values" },
              { text: "isolation: isolate" }
            ]
          } as ListData
        },
        {
          type: "comparison",
          data: {
            title: "Why Z-Index Fails",
            left: {
              label: "❌ Doesn't Work",
              code: `.parent { position: relative; z-index: 1; }
.child { position: absolute; z-index: 999; }

.other { position: relative; z-index: 2; }

/* child appears BEHIND other */`,
              description: "Child is trapped in parent's stacking context"
            },
            right: {
              label: "✓ Works",
              code: `.parent { position: relative; }
.child { position: absolute; z-index: 999; }

.other { position: relative; z-index: 2; }

/* child appears in FRONT */`,
              description: "No stacking context traps the child"
            }
          } as ComparisonData
        },
        {
          type: "dosdонts",
          data: {
            title: "Best Practices",
            dos: [
              "Use z-index sparingly and systematically",
              "Create a z-index scale (10, 20, 30) for your project",
              "Use isolation: isolate to create stacking contexts intentionally",
              "Debug with browser DevTools 3D view"
            ],
            donts: [
              "Don't use arbitrary large numbers like 999999",
              "Don't forget position property when using z-index",
              "Don't create unnecessary stacking contexts with opacity/transform"
            ]
          } as DosDontsData
        }
      ]
    }
  },
  {
    id: "position-sticky-gotchas",
    name: "Position Sticky Gotchas",
    categoryId: "layout",
    description: "Why position: sticky isn't working and how to fix it",
    tags: ["position", "sticky", "flexbox", "grid", "gotcha"],
    route: "/topics/position-sticky-gotchas",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "The Sticky Problem",
            content: "Position sticky is amazing when it works, but it fails silently in many situations. The most common issue? The element has no room to stick because its container is exactly the same height."
          } as CardData
        },
        {
          type: "list",
          data: {
            title: "Common Reasons Sticky Fails",
            ordered: true,
            items: [
              { text: "Parent has overflow: hidden, scroll, or auto", subtext: "Sticky needs visible overflow" },
              { text: "Element is stretched in flexbox/grid", subtext: "Use align-self: flex-start" },
              { text: "No top, bottom, left, or right specified", subtext: "Sticky needs a threshold" },
              { text: "Parent height equals element height", subtext: "No room to stick" },
              { text: "Element is inside a table", subtext: "Limited browser support" }
            ]
          } as ListData
        },
        {
          type: "tip",
          data: {
            variant: "warning",
            title: "Flexbox & Grid Trap",
            content: "In flexbox and grid, items stretch by default (align-items: stretch). This makes them the same height as their container, leaving no room to stick. Always use align-self: flex-start or align-self: start."
          } as TipData
        },
        {
          type: "comparison",
          data: {
            title: "Flexbox Sticky Fix",
            left: {
              label: "❌ Doesn't Stick",
              code: `.container {
  display: flex;
}

.sticky {
  position: sticky;
  top: 0;
}

/* Stretched to full height */`,
              description: "Element stretches, no room to stick"
            },
            right: {
              label: "✓ Sticks Properly",
              code: `.container {
  display: flex;
}

.sticky {
  position: sticky;
  top: 0;
  align-self: flex-start;
}`,
              description: "Element has natural height, can stick"
            }
          } as ComparisonData
        },
        {
          type: "dosdонts",
          data: {
            title: "Sticky Checklist",
            dos: [
              "Always specify top, bottom, left, or right",
              "Use align-self: flex-start in flexbox",
              "Use align-self: start in grid",
              "Ensure parent has scrollable height",
              "Check for overflow: hidden on ancestors"
            ],
            donts: [
              "Don't use overflow: hidden on parent",
              "Don't forget the threshold (top/bottom/left/right)",
              "Don't rely on default stretch behavior",
              "Don't use on table elements without checking support"
            ]
          } as DosDontsData
        },
        {
          type: "code",
          data: {
            language: "css",
            title: "Complete Working Example",
            code: `.scroll-container {
  height: 400px;
  overflow-y: auto;
}

.content {
  display: flex;
  flex-direction: column;
}

.sticky-header {
  position: sticky;
  top: 0;
  align-self: flex-start; /* Critical! */
  background: white;
  z-index: 10;
}`
          } as CodeData
        }
      ]
    }
  },
  {
    id: "box-sizing-border-box",
    name: "Box-Sizing: Border-Box",
    categoryId: "layout",
    description: "Why you should always use box-sizing: border-box",
    tags: ["box-model", "sizing", "best-practice"],
    route: "/topics/box-sizing-border-box",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "The Box Model Problem",
            content: "By default, CSS uses content-box sizing where width and height only apply to the content. Padding and border are added on top, making elements larger than expected. This causes constant math headaches."
          } as CardData
        },
        {
          type: "timeline",
          data: {
            title: "Evolution of Box Sizing",
            events: [
              {
                title: "CSS 1 (1996)",
                description: "Only content-box available, developers struggled with sizing",
                code: "/* No box-sizing property */"
              },
              {
                title: "IE 6 Quirks Mode",
                description: "IE accidentally used border-box in quirks mode, developers loved it"
              },
              {
                title: "CSS3 (2011)",
                description: "box-sizing property officially added to spec",
                code: "box-sizing: border-box;"
              },
              {
                title: "Today (2024+)",
                description: "border-box is considered best practice, used in all major CSS frameworks"
              }
            ]
          } as TimelineData
        },
        {
          type: "comparison",
          data: {
            title: "Content-Box vs Border-Box",
            left: {
              label: "content-box (default)",
              code: `.box {
  width: 200px;
  padding: 20px;
  border: 2px solid;
}

/* Actual width: 244px */
/* 200 + 40 + 4 */`,
              description: "Width excludes padding and border"
            },
            right: {
              label: "border-box (better)",
              code: `.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
}

/* Actual width: 200px */`,
              description: "Width includes padding and border"
            }
          } as ComparisonData
        },
        {
          type: "tip",
          data: {
            variant: "success",
            title: "Universal Box Sizing",
            content: "Apply border-box to all elements using the universal selector. This is the first thing you should add to any project."
          } as TipData
        },
        {
          type: "code",
          data: {
            language: "css",
            title: "Universal Box Sizing Reset",
            code: `/* Apply to all elements */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Or use inheritance (better for components) */
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}`
          } as CodeData
        },
        {
          type: "dosdонts",
          data: {
            title: "Best Practices",
            dos: [
              "Always use border-box in your CSS reset",
              "Use the inheritance method for better component isolation",
              "Apply it globally at the start of every project"
            ],
            donts: [
              "Don't use content-box unless you have a specific reason",
              "Don't forget to include ::before and ::after",
              "Don't calculate widths manually when border-box does it for you"
            ]
          } as DosDontsData
        }
      ]
    }
  },
  {
    id: "object-fit-images",
    name: "Object-Fit for Images",
    categoryId: "responsive",
    description: "Control how images fit in containers without distortion",
    tags: ["images", "object-fit", "aspect-ratio", "responsive"],
    route: "/topics/object-fit-images",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "The Image Distortion Problem",
            content: "When you set width and height on an image, it stretches or squashes to fit, distorting the aspect ratio. Object-fit solves this by controlling how the image scales within its container, just like background-size for background images."
          } as CardData
        },
        {
          type: "table",
          data: {
            title: "Object-Fit Values",
            headers: ["Value", "Behavior", "Use Case"],
            rows: [
              ["fill", "Stretches to fill (default)", "Rarely useful, causes distortion"],
              ["contain", "Fits entirely, may have empty space", "Product thumbnails, logos"],
              ["cover", "Fills container, may crop", "Hero images, avatars"],
              ["none", "Original size, may overflow", "Pixel-perfect images"],
              ["scale-down", "Smaller of none or contain", "Flexible sizing"]
            ]
          } as TableData
        },
        {
          type: "comparison",
          data: {
            title: "Contain vs Cover",
            left: {
              label: "object-fit: contain",
              code: `.image {
  width: 300px;
  height: 300px;
  object-fit: contain;
}

/* Shows entire image
   May have empty space */`,
              description: "Perfect for product images"
            },
            right: {
              label: "object-fit: cover",
              code: `.image {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

/* Fills container
   May crop edges */`,
              description: "Perfect for hero images"
            }
          } as ComparisonData
        },
        {
          type: "tip",
          data: {
            variant: "info",
            title: "Object-Position",
            content: "Use object-position to control which part of the image is visible when cropped. Default is center, but you can use top, bottom, left, right, or percentages."
          } as TipData
        },
        {
          type: "code",
          data: {
            language: "css",
            title: "Complete Example",
            code: `/* Avatar with cover */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top; /* Focus on face */
}

/* Product thumbnail with contain */
.product-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  background: #f5f5f5; /* Show empty space */
}

/* Hero image with cover */
.hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
}`
          } as CodeData
        },
        {
          type: "dosdонts",
          data: {
            title: "Best Practices",
            dos: [
              "Use cover for hero images and backgrounds",
              "Use contain for product images and logos",
              "Combine with aspect-ratio for modern layouts",
              "Set explicit width and height for object-fit to work"
            ],
            donts: [
              "Don't use fill (causes distortion)",
              "Don't forget to set container dimensions",
              "Don't use when you need the full image visible (use contain)"
            ]
          } as DosDontsData
        }
      ]
    }
  },
  {
    id: "grid-auto-fit",
    name: "Grid Auto-Fit",
    categoryId: "layout",
    description: "Create responsive grids without media queries",
    tags: ["grid", "responsive", "layout"],
    route: "/topics/grid-auto-fit",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Why This Works",
            content:
              "CSS Grid auto-fit automatically creates as many columns as will fit in the container, making your layout responsive without media queries.",
          } as CardData,
        },
        {
          type: "code",
          data: {
            language: "css",
            title: "CSS",
            code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}`,
          } as CodeData,
        },
      ],
    },
  },
  {
    id: "sticky-footer",
    name: "Sticky Footer",
    categoryId: "layout",
    description: "Keep footer at bottom even with little content",
    tags: ["footer", "layout", "flexbox"],
    route: "/topics/sticky-footer",
    content: {
      sections: [
        {
          type: "card",
          data: {
            title: "Why This Works",
            content:
              "Using flexbox with flex-grow on the main content pushes the footer to the bottom, even when content is short.",
          } as CardData,
        },
        {
          type: "code",
          data: {
            language: "css",
            title: "CSS",
            code: `body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}`,
          } as CodeData,
        },
      ],
    },
  },
];
