import type {
  Topic,
  CardData,
  TipData,
  TableData,
  ComparisonData,
  DosDontsData,
  CodeData,
} from "@/types/topic";

export const objectFitImages: Topic = {
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
          content:
            "When you set width and height on an image, it stretches or squashes to fit, distorting the aspect ratio. Object-fit solves this by controlling how the image scales within its container — just like background-size but for img elements.",
        } as CardData,
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
            ["scale-down", "Smaller of none or contain", "Flexible sizing"],
          ],
        } as TableData,
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
   May have letterboxing */`,
            description: "Perfect for product images and logos",
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
            description: "Perfect for hero images and avatars",
          },
        } as ComparisonData,
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Object-Position",
          content:
            "Use object-position to control which part of the image is visible when cropped. Default is center, but you can use top, bottom, left, right, or percentages (e.g., object-position: center top for faces in avatars).",
        } as TipData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Complete Example",
          code: `/* Avatar — focus on face */
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
}

/* Product thumbnail — show full item */
.product-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  background: #f5f5f5;
}

/* Hero image — fill the container */
.hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
}`,
        } as CodeData,
      },
      {
        type: "dosd\u043e\u043dts",
        data: {
          title: "Best Practices",
          dos: [
            "Use cover for hero images and avatar photos",
            "Use contain for product images and logos",
            "Combine with aspect-ratio for modern layouts",
            "Set explicit width and height for object-fit to work",
            "Use object-position: center top for portrait photos",
          ],
          donts: [
            "Don't use fill — it causes distortion",
            "Don't forget to set container dimensions",
            "Don't use cover when the full image must be visible",
          ],
        } as DosDontsData,
      },
    ],
  },
};
