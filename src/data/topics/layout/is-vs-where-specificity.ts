import type { Topic } from "@/types/topic";

export const isVsWhereSpecificity: Topic = {
  id: "is-vs-where-specificity",
  name: "Specificity Hacks with :is() vs :where()",
  categoryId: "layout",
  description: "Mastering CSS selector specificity using the modern :is() and :where() pseudo-classes.",
  tags: ["layout", "selectors", "specificity", "is", "where"],
  route: "/topics/is-vs-where-specificity",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Formatting Twins",
          content: "The `:is()` and `:where()` pseudo-classes do exactly the same functional thing: they take a list of selectors and match if any of them are true. This greatly reduces repetition (e.g., `:is(h1, h2, h3) > a`). However, they have one massive, crucial difference under the hood: Specificity weight.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "The Specificity Difference",
          left: {
            label: ":is() -> Highest Default",
            code: `/* Specificity of the highest item inside.
   Here, #id has a weight of 1-0-0. 
   Even if it matches the 'header' (0-0-1),
   the whole rule gets 1-0-0 weight! */

:is(header, main, #sidebar) p {
  color: red;
}`,
            description: "Be careful! Adding a heavy selector inside `:is()` boosts the weight of the entire chain.",
          },
          right: {
            label: ":where() -> Zero",
            code: `/* Specificity is ALWAYS 0-0-0! 
   It adds zero weight to the chain.
   Only the 'p' (0-0-1) counts here. */

:where(header, main, #sidebar) p {
  color: blue;
}`,
            description: "Amazing for CSS resets and base styles because they are extremely easy to override later.",
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* Fantastic application for CSS Resets */
/* This targets all lists, but adds ZERO specificity weight! */
:where(ul, ol):where([class]) {
  padding-left: 0;
  list-style: none;
}

/* Because the reset used :where(), this simple class 
   easily overrides it without needing !important */
.nav-list {
  padding-left: 20px;
}`,
        },
      },
      {
        type: "workflow",
        data: {
          title: "When to use which?",
          steps: [
            {
              number: 1,
              title: "Authoring Resets & Base Styles",
              description: "Use `:where()`. Base styles should be as easy to override as possible.",
            },
            {
              number: 2,
              title: "Writing Components & Utilities",
              description: "Use `:is()` for normal grouping, but be very aware of what selectors you put inside it.",
            },
            {
              number: 3,
              title: "Taming Huge Selectors",
              description: "Wrap 3rd-party ID-bloated selectors in `:where()` to flatten their specificity so you can override them with a single class.",
            },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Forgiving Selection",
          content: "Both `:is()` and `:where()` are 'forgiving' selectors. Normally, if you write `h1, h2, :invalid-pseudo { ... }`, the entire block fails if the browser doesn't understand `:invalid-pseudo`. But `:is(h1, h2, :invalid-pseudo)` will silently ignore the invalid part and still successfully style the `h1` and `h2`!",
        },
      },
    ],
  },
};
