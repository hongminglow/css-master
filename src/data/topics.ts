export interface TopicContent {
  sections: ContentSection[];
}

export interface ContentSection {
  type: "card" | "workflow" | "code" | "preview";
  data: CardData | WorkflowData | CodeData | PreviewData;
}

export interface CardData {
  title: string;
  content: string;
}

export interface WorkflowData {
  title: string;
  steps: WorkflowStep[];
}

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

export interface CodeData {
  language: string;
  code: string;
  title?: string;
}

export interface PreviewData {
  html: string;
  css: string;
}

export interface Topic {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  tags: string[];
  route: string;
  content: TopicContent;
}

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
