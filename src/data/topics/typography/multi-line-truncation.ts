import type { Topic } from "@/types/topic";

export const multiLineTruncation: Topic = {
  id: "multi-line-truncation",
  name: "Multi-line Text Truncation",
  categoryId: "typography",
  description: "How to reliably truncate paragraph text with an ellipsis after a specific number of lines.",
  tags: ["typography", "line-clamp", "truncation", "ellipsis", "text"],
  route: "/topics/multi-line-truncation",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Line Clamp Magic",
          content: "One line of truncated text is easy (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`), but what if you want to show exactly 3 lines of an article snippet and then show the ellipsis? The `-webkit-line-clamp` property solves exactly this.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.card-excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* The magic number */
  -webkit-box-orient: vertical;  
  overflow: hidden;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="background: #1e293b; padding: 1.5rem; border-radius: 8px; width: 300px;">
  <h3 style="margin-top: 0; color: white;">Article Title</h3>
  <p style="
    color: #cbd5e1;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  ">
    This is a very long paragraph that simulates an article excerpt or summary. 
    It goes on and on, detailing very important things. 
    But we don't have space on this dashboard widget to show the entire thing! 
    It just needs to cut off perfectly at the end of the third line. 
    Watch the ellipsis magically appear.
  </p>
</div>`,
          css: `/* The -webkit prefix is required, but it is supported perfectly in all modern browsers (Firefox, Safari, Chrome). */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Requirements",
          dos: [
            "You MUST include `display: -webkit-box`, `-webkit-box-orient: vertical`, and `overflow: hidden` for this to work.",
          ],
          donts: [
            "Don't set a hard `height` on the element, let the line-clamp dictate the cut-off height.",
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "What about standard line-clamp?",
          content: "A standard, unprefixed `line-clamp` property exists in modern specifications, but the `-webkit-` prefixed version has had 98%+ global support for years because other browser engines implemented it to match WebKit's behavior. Standard `line-clamp` is still making its way into full support.",
        },
      },
    ],
  },
};
