import type { Topic } from "@/types/topic";

export const wordBreakLongUrls: Topic = {
  id: "word-break-long-urls",
  name: "Taming Long URLs & Text",
  categoryId: "typography",
  description: "Preventing unbroken strings of text (like long URLs) from destroying your mobile layouts and pushing containers off-screen.",
  tags: ["typography", "responsive", "word-break", "wrap", "overflow"],
  route: "/topics/word-break-long-urls",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Unbreakable String",
          content: "CSS inherently wraps text when it hits the edge of a container. But it only does this at 'soft wrap opportunities', normally spaces or hyphens. If a user pastes a massive 150-character URL into a comment section, there are no spaces. The string becomes 'unbreakable', forcing its parent container to explode past the viewport width, breaking the entire mobile layout. You explicitly have to tell CSS how to handle it.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Breaking the Unbreakable",
          left: {
            label: "Overflow Bug",
            code: `.comment-box {
  width: 100%;
}
/* If content is "http://reallylong.com/123456789...", 
   the box will push past 100% width! */`,
          },
          right: {
            label: "overflow-wrap: anywhere",
            code: `.comment-box {
  width: 100%;
  
  /* Tells CSS: if there are no spaces, 
     just snap the word in half to 
     protect the layout width. */
  overflow-wrap: anywhere;
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 2rem; padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div style="flex: 1; max-width: 200px;">
    <span style="color: #64748b; font-size: 0.8rem;">Without Fix (Overflows)</span>
    <div style="background: #1e293b; padding: 1rem; border: 1px solid #ef4444; color: white;">
      Normal text wraps fine. But look:
      <div style="color: #ef4444;">https://verylongwebsite.com/index.php?id=99999999999999999999</div>
    </div>
  </div>

  <div style="flex: 1; max-width: 200px;">
    <span style="color: #64748b; font-size: 0.8rem;">overflow-wrap: anywhere</span>
    <div style="background: #1e293b; padding: 1rem; border: 1px solid #10b981; color: white;">
      Normal text wraps fine. But look:
      <div style="color: #10b981; overflow-wrap: anywhere;">https://verylongwebsite.com/index.php?id=99999999999999999999</div>
    </div>
  </div>

</div>`,
          css: `/* overflow-wrap used to be known historically as word-wrap. Modern CSS utilizes overflow-wrap as the standard property. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Available Values",
          dos: [
            "Use `overflow-wrap: anywhere` or `overflow-wrap: break-word` for user-selected content blocks (comments, messages, descriptions).",
          ],
          donts: [
            "Don't confuse it with `word-break: break-all`. Using `break-all` will violently slice regular words in half even if there is plenty of room for a space wrap, making paragraphs horrific to read. `overflow-wrap: anywhere` protects actual words and only breaks them if there's no other choice.",
          ],
        },
      },
    ],
  },
};
