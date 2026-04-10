import { Topic } from "@/types/topic";

export const fontDisplayStrategies: Topic = {
  id: "font-display-strategies",
  name: "Font Display Loading Strategies",
  categoryId: "typography",
  description: "Optimizing web font loading using the font-display property to prevent layout shifts and invisible text.",
  tags: ["typography", "performance", "font-display", "loading", "fonts"],
  route: "/topics/font-display-strategies",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Invisible Text Problem",
          content: "When a browser encounters a custom web font (`@font-face`), it usually hides the text while downloading the font file to avoid the 'Flash of Unstyled Text' (FOUT). However, on slow networks, this means users stare at a blank page (Flash of Invisible Text or FOIT). `font-display` gives you explicit control over this behavior for massive core web vital improvements.",
        },
      },
      {
        type: "table",
        data: {
          title: "Values and Behaviors",
          headers: ["Value", "Behavior", "Best Use Case"],
          rows: [
            ["`auto`", "Browser's default (usually blocks text indefinitely).", "Don't use it."],
            ["`block`", "Hides text for ~3 seconds, then swaps. If font finishes later, it swaps again.", "Rare, maybe strict branding requirements where fallback is unacceptable."],
            ["`swap`", "Shows fallback text immediately (0s block), swaps when custom font is ready.", "Body text, articles. Prevents FOIT perfectly but causes Layout Shifts."],
            ["`optional`", "Extremely short block period (100ms). If font isn't ready, it Abandons the custom font entirely and uses the fallback.", "The most performant option. Good when the custom font is a 'nice to have' but not strictly necessary."],
            ["`fallback`", "In between swap and optional. Short block (100ms), short swap period (3s).", "A good compromise for UI elements."],
          ],
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `@font-face {
  font-family: 'MyCustomFont';
  src: url('mycustomfont.woff2') format('woff2');
  
  /* Show system fonts immediately, swap when this file is downloaded */
  font-display: swap; 
}`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Implementation",
          dos: [
            "Use `swap` for Google Fonts (it's often the default URL parameter `&display=swap`).",
            "Combine with `<link rel=\"preload\">` for critical fonts to reduce the layout shift in `swap`.",
          ],
          donts: [
            "Don't use `swap` for icon fonts (like FontAwesome)—if the fallback renders, users just see random unicode letters. Use `block` for icons.",
          ],
        },
      },
    ],
  },
};
