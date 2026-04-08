import type { Topic } from "@/types/topic";

export const hasSelectorParent: Topic = {
  id: "has-selector-parent",
  name: "The :has() Parent Selector Revolution",
  categoryId: "layout",
  description: "The CSS holy grail has arrived: styling a parent element based on its children's state.",
  tags: ["selectors", "has", "modern-css", "state", "no-js"],
  route: "/topics/has-selector-parent",
  content: {
    sections: [
      {
        type: "quote",
        data: {
          quote: "The hardest problem in CSS was solved instantly when :has() was shipped.",
          author: "Frontend Community"
        }
      },
      {
        type: "card",
        data: {
          title: "The Historical Struggle",
          content: "Since the inception of CSS, the cascade flowed strictly downwards. If an `<input>` was checked or invalid, you could style the input itself or its sibling (`input:checked + span`), but you **could not** style the parent `<form>` or `<div class=\"card\">` containing it. Developers explicitly had to write JavaScript event listeners to toggle `.is-active` or `.has-error` classes on parents. Not anymore."
        }
      },
      {
        type: "timeline",
        data: {
          title: "The Evolution of State Management",
          events: [
            {
              title: "Pre-2023: JavaScript Heavy",
              description: "Requires JS event listeners on every input to toggle helper classes on the parent DOM containers."
            },
            {
              title: "Early 2023: Experimental",
              description: "Browsers shipped the feature behind feature flags. Developers rejoiced but couldn't use it in production."
            },
            {
              title: "Today: Universally Available",
              description: "Supported in virtually 100% of modern browsers natively without polyfills. The parent selector is the standard."
            }
          ]
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "Interactive Card Highlighting",
          subtitle: "Hover over the image or the button. Notice how we style the ENTIRE card based on hovering its children.",
          left: {
            label: "Old Way (JS Driven)",
            code: "/* Required React/JS State\n   to toggle 'focused' class */\n.card {\n  border: 1px solid #ccc;\n}\n.card.focused {\n  border-color: blue;\n  transform: translateY(-5px);\n}",
            html: `
<div class="card js-demo" onmouseenter="this.classList.add('focused')" onmouseleave="this.classList.remove('focused')">
  <img src="https://via.placeholder.com/150/1e293b/ffffff?text=Image" alt="placeholder">
  <div class="content">
    <h3>Article Title</h3>
    <button>Read More</button>
  </div>
</div>
            `,
            css: `
.card { background: white; border-radius: 8px; overflow: hidden; font-family: sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 250px; margin: 20px auto; transition: all 0.3s ease; border: 2px solid transparent;}
.card img { width: 100%; height: auto; display: block; }
.content { padding: 16px; }
.content h3 { margin: 0 0 12px 0; font-size: 18px; color: #334155; }
button { background: #334155; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;}
.focused { border-color: #ef4444; transform: scale(1.05); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);}
            `
          },
          right: {
            label: "Modern CSS: :has()",
            code: ".card {\n  border: 2px solid transparent;\n  transition: 0.3s ease;\n}\n\n/* If the card HAS ANY hovered child,\n   style the card! */\n.card:has(:hover) {\n  border-color: #3b82f6;\n  transform: scale(1.05);\n}",
            html: `
<div class="card css-demo">
  <img src="https://via.placeholder.com/150/1e293b/ffffff?text=Hover+Me" alt="placeholder">
  <div class="content">
    <h3>Modern Card</h3>
    <button>Read More</button>
  </div>
</div>
            `,
            css: `
.card { background: white; border-radius: 8px; overflow: hidden; font-family: sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 250px; margin: 20px auto; transition: all 0.3s ease; border: 2px solid transparent;}
.card img { width: 100%; height: auto; display: block; }
.content { padding: 16px; }
.content h3 { margin: 0 0 12px 0; font-size: 18px; color: #334155; }
button { background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; transition: 0.2s;}
button:hover { background: #2563eb;}

/* The Magic */
.css-demo:has(:hover) {
  border-color: #3b82f6;
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.2);
}
            `
          }
        }
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Other Amazing Use Cases",
          code: `/* Style a form if it contains invalid inputs */
form:has(input:invalid) {
  background: #fee2e2;
}
form:has(input:invalid) button[type="submit"] {
  opacity: 0.5;
  pointer-events: none;
}

/* Style a layout based on count without JS */
.grid:has(> .item:nth-child(5)) {
  /* Only applies if the grid has at least 5 items */
  grid-template-columns: repeat(3, 1fr);
}`
        }
      }
    ]
  }
};
