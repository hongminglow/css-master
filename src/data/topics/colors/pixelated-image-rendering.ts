import type { Topic } from "@/types/topic";

export const pixelatedImageRendering: Topic = {
  id: "pixelated-image-rendering",
  name: "Crisp Retro Pixelation",
  categoryId: "colors",
  description: "Disabling browser anti-aliasing to render crisp, pixel-perfect retro art and tiny images.",
  tags: ["colors", "images", "pixel-art", "rendering", "anti-aliasing", "resolution"],
  route: "/topics/pixelated-image-rendering",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Anti-Aliasing Blurriness",
          content: "Browsers try to be helpful. If you upload a tiny 32x32 pixel icon and forcefully scale it up to 500px utilizing `width` or `height`, the browser assumes it's a photograph. It applies complex anti-aliasing and bilinear interpolation to mathematically 'smooth' out the stretch. For pixel art, QRs, or retro aesthetics, this ruins the image, turning a crisp character into a fuzzy, blurry smear. CSS `image-rendering` fixes this.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Interpolated vs Pixelated",
          left: {
            label: "Default Browser Blur",
            code: `.character-sprite {
  width: 400px;
  /* Browser attempts to computationally 
     guess the missing color data. */
}`,
          },
          right: {
            label: "Nearest Neighbor",
            code: `.character-sprite {
  width: 400px;
  
  /* Disables anti-aliasing! 
     1 pixel perfectly scales into 
     a solid block of pixels. */
  image-rendering: pixelated; 
}`,
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* Great utility class for global use */
.pixel-art {
  -ms-interpolation-mode: nearest-neighbor; /* IE Support */
  image-rendering: -webkit-optimize-contrast; /* Webkit Fallback */
  image-rendering: -moz-crisp-edges; /* Firefox Fallback */
  image-rendering: pixelated; /* Modern Standard */
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Perfect for QR Codes",
          content: "This is arguably mandatory if you dynamically generate QR codes on the frontend (often output via low-res `<canvas>` or small images) and need them to scale up for the user to scan. Blurry QR codes fail to scan; pixelated QR codes scan flawlessly.",
        },
      },
    ],
  },
};
