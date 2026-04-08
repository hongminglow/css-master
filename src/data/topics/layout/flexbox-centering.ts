import type {
  Topic,
  CardData,
  CodeData,
  PreviewData,
  ComparisonData,
} from "@/types/topic";

export const flexboxCentering: Topic = {
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
        type: "comparison",
        data: {
          title: "Old Hack vs Modern Flexbox",
          left: {
            label: "❌ Old Absolute Hack",
            code: `.container {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
            description: "Fragile — breaks easily when layout changes",
          },
          right: {
            label: "✓ Modern Flexbox",
            code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
            description: "Declarative, readable, and robust",
          },
        } as ComparisonData,
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
};
