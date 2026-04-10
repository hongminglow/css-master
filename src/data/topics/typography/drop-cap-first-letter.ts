import type { Topic } from "@/types/topic";

export const dropCapFirstLetter: Topic = {
  id: "drop-cap-first-letter",
  name: "Editorial Drop-Caps",
  categoryId: "typography",
  description: "Adding beautiful magazine-style drop caps to article paragraphs using the ::first-letter pseudo-element.",
  tags: ["typography", "editorial", "first-letter", "selectors", "pseudo-element"],
  route: "/topics/drop-cap-first-letter",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Magazine Aesthetic",
          content: "In journalism and editorial design, it's incredibly common to massively enlarge the very first letter of an article (also known as a 'drop cap'). Many developers accomplish this by manually wrapping the first letter in a `<span>` using JavaScript. This breaks screen readers (reading 'O' 'nce upon a time...'). CSS has a built-in `::first-letter` pseudo-element specifically designed for this.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.article-content > p:first-of-type::first-letter {
  /* 1. Target the FIRST letter of the FIRST paragraph */
  color: #3b82f6;      /* Brand color */
  font-size: 4rem;     /* Massive font size */
  font-weight: 900;
  
  /* 2. Float it so the rest of the text wraps around it */
  float: left;
  line-height: 1;      /* Crucial: prevents massive gap above/below */
  margin-right: 0.5rem;
  margin-bottom: -0.2rem;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="padding: 2rem; background: #0f172a; border-radius: 8px;">
  <style>
    .editorial p {
      color: #cbd5e1;
      font-size: 1.1rem;
      line-height: 1.6;
    }
    
    .editorial p::first-letter {
      float: left;
      font-size: 4.5rem;
      line-height: 0.8;
      font-weight: bold;
      color: #3b82f6;
      margin-right: 0.5rem;
      margin-top: 0.2rem;
      font-family: Georgia, serif;
    }
  </style>

  <div class="editorial">
    <p>Yesterday, the new framework was released, bringing with it a tidal wave of feature requests and sweeping documentation changes. By leveraging standard platform features, developers found themselves removing hundreds of lines of legacy code. This marks a turning point in how we approach frontend builds architecture.</p>
  </div>
</div>`,
          css: `/* Keep it accessible! Screen readers will read the whole word 'Yesterday' perfectly, since the letter is not actually separated in the DOM markup. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Managing the Spacing",
          dos: [
            "Always enforce `line-height: 1` or `line-height: 0.8` on the `::first-letter`, otherwise the massive font-size will cause the element to create a massive white-space gap above the paragraph.",
            "Use a different font-family (like a Serif) specifically for the first letter for an elevated, expensive look.",
          ],
          donts: [
            "Don't add this to *every* paragraph! Restrict it to `p:first-of-type::first-letter` so only the introductory paragraph receives the heavy styling.",
          ],
        },
      },
    ],
  },
};
