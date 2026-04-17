import type {
  Topic,
  CardData,
  CodeData,
  TipData,
  ComparisonData,
  DosDontsData,
} from "@/types/topic";

export const allUnsetRevert: Topic = {
  id: "all-unset-revert",
  name: "all: unset & all: revert",
  categoryId: "layout",
  description:
    "Reset every CSS property at once with 'all: unset' or restore browser defaults with 'all: revert' — the nuclear option for style isolation.",
  tags: ["all", "unset", "revert", "reset", "specificity", "isolation"],
  route: "/topics/all-unset-revert",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "One Property to Reset Them All",
          content:
            "The all shorthand applies to every CSS property at once. 'all: unset' removes every inherited and non-inherited style — making elements behave as if no stylesheet existed. 'all: revert' is more nuanced: it reverts to the browser's user-agent stylesheet defaults. This is the cleanest way to build isolated component styles that won't be polluted by global CSS.",
        } as CardData,
      },
      {
        type: "comparison",
        data: {
          title: "unset vs revert — The Key Difference",
          left: {
            label: "all: unset",
            code: `/* ALL properties become initial values
   (or inherited if normally inherited) */
button {
  all: unset;
}
/* Result: button looks completely bare
   No border, no background, no cursor,
   no user-agent button padding */`,
            description: "Goes to CSS initial values — below even browser defaults",
          },
          right: {
            label: "all: revert",
            code: `/* ALL properties go back to what the
   browser's user-agent sheet would apply */
button {
  all: revert;
}
/* Result: button looks like a default unstyled
   browser button — not bare, but not your CSS */`,
            description: "Goes back to browser defaults, not bare initial values",
          },
        } as ComparisonData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "CSS — Real-World Use Cases",
          code: `/* 1. Build a button with no inherited clutter */
.clean-button {
  all: unset;
  cursor: pointer; /* add back what you want */
  display: inline-flex;
  padding: 8px 16px;
  background: #2563eb;
  color: white;
  border-radius: 6px;
}

/* 2. Isolate a Web Component or third-party widget */
.widget-root {
  all: revert;
}

/* 3. Reset a specific element inside a CSS layer */
@layer base {
  .prose h1 {
    all: revert;      /* restore browser's h1 style */
    font-size: 2rem;  /* then customise */
  }
}

/* 4. Per-property equivalent (for reference) */
color: unset;       /* inheritable: inherits from parent */
display: unset;     /* non-inheritable: becomes 'inline' (initial) */
color: revert;      /* goes back to browser default text color */`,
        } as CodeData,
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "all: unset Kills Accessibility Defaults Too",
          content:
            "all: unset removes the button's focus ring, the link's visited colour, and the cursor style. Always explicitly add back cursor: pointer, a visible :focus-visible outline, and any other accessibility styles you rely on.",
        } as TipData,
      },
      {
        type: "dosdонts",
        data: {
          title: "Best Practices",
          dos: [
            "Use all: unset to strip inherited styles from custom buttons/inputs",
            "Use all: revert to restore browser defaults inside a reset-heavy stylesheet",
            "Always add cursor: pointer and :focus-visible back after all: unset",
            "Prefer all: revert-layer inside @layer to only revert to the previous layer",
          ],
          donts: [
            "Don't use all: unset on a container — you'll lose display, overflow etc.",
            "Don't forget that all: unset removes focus rings",
            "Don't use all: unset as a lazy way to 'fix' specificity — solve the real issue",
          ],
        } as DosDontsData,
      },
    ],
  },
};
