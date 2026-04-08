import type { Topic } from "@/types/topic";

export const containerQueries: Topic = {
  id: "container-queries",
  name: "@container: The Real Modular Design",
  categoryId: "responsive",
  description: "Media queries respond to the screen. Container queries respond to the component's parent container. Say goodbye to ResizeObservers.",
  tags: ["responsive", "container", "architecture", "modular"],
  route: "/topics/container-queries",
  content: {
    sections: [
      {
        type: "quote",
        data: {
          quote: "A true reusable component shouldn't care how wide the screen is; it should only care how much room it was given to draw itself.",
          author: "Modern UI Architects"
        }
      },
      {
        type: "card",
        data: {
          title: "The Death of `@media` for Components",
          content: "Historically, if you had a 'Profile Card', you used `@media (max-width: 768px)` to switch from a horizontal split to a stacked layout. But what if you put that same card inside a narrow Sidebar on a 1440px desktop screen? The card would stay horizontal, squash itself, and break, because the *screen* is wide, even though its *container* is narrow. \n\nContainer queries (`@container`) solve this by allowing UI components to adapt completely based on the available width of their direct parent container, removing the need for fragile screen breakpoints."
        }
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "Setup: Defining the Container",
          code: `/* 1. First, tell the parent container to track its inline size (width) */
.sidebar, .main-content {
  container-type: inline-size;
  /* Optional: give it a name to query specifically */
  container-name: layout-zone;
}`
        }
      },
      {
        type: "livecomparison",
        data: {
          title: "Media Query vs Container Query",
          subtitle: "Imagine this grid is viewed on a giant desktop screen (Media query says wide). But notice how the Container Query component elegantly collapses because it's trapped in a tight grid column, while the Media Query component breaks.",
          left: {
            label: "❌ Media Query (Breaks in tight grid)",
            code: ".card {\n  display: flex;\n}\n\n/* Desktop screen = Wide! \n   Card stays flexed & squashes */\n@media (max-width: 600px) {\n  .card {\n    flex-direction: column;\n  }\n}",
            html: `
<div class="grid-layout">
  <div class="narrow-column">
    <div class="card mq-card">
      <div class="img">Avatar</div>
      <div class="text">
        <h4>User Profile</h4>
        <p>I am squashed.</p>
      </div>
    </div>
  </div>
</div>`,
            css: `
.grid-layout { display: grid; grid-template-columns: 200px; gap: 20px; padding: 20px; height: 100%; font-family: sans-serif; background: #0f172a;}
.narrow-column { border: 2px dashed #475569; padding: 10px; }
.card { background: white; border-radius: 8px; overflow: hidden; padding: 10px;}
.img { width: 100px; height: 80px; background: #3b82f6; color: white; display:flex; align-items:center; justify-content:center; border-radius: 4px; font-weight: bold;}
.text { padding: 0 10px; color: #1e293b; }
.text h4 { margin: 0 0 5px 0; font-size: 14px;}
.text p { margin: 0; font-size: 12px; color: #64748b; }

/* The Flaw: The iframe behaves like a "desktop" width generally, so flex remains horizontally squashed */
.mq-card {
  display: flex;
  gap: 10px;
}
@media (max-width: 400px) {
  .mq-card { flex-direction: column; }
}
            `
          },
          right: {
            label: "✅ Container Query (Adapts perfectly)",
            code: "/* The parent tracks size */\n.narrow-column {\n  container-type: inline-size;\n}\n\n/* The child asks: Are you < 300px? */\n@container (max-width: 300px) {\n  .card {\n    flex-direction: column;\n  }\n}",
            html: `
<div class="grid-layout">
  <div class="narrow-column container-zone">
    <div class="card cq-card">
      <div class="img">Avatar</div>
      <div class="text">
        <h4>User Profile</h4>
        <p>I stacked!</p>
      </div>
    </div>
  </div>
</div>`,
            css: `
.grid-layout { display: grid; grid-template-columns: 200px; gap: 20px; padding: 20px; height: 100%; font-family: sans-serif; background: #0f172a;}
.narrow-column { border: 2px dashed #475569; padding: 10px; }
.card { background: white; border-radius: 8px; overflow: hidden; padding: 10px;}
.img { width: 100%; height: 80px; background: #10b981; color: white; display:flex; align-items:center; justify-content:center; border-radius: 4px; font-weight: bold;}
.text { padding: 10px 0 0 0; color: #1e293b; }
.text h4 { margin: 0 0 5px 0; font-size: 14px;}
.text p { margin: 0; font-size: 12px; color: #64748b; }

/* Container Tracking */
.container-zone {
  container-type: inline-size;
}

/* Base style (assumes wide) */
.cq-card {
  display: flex;
  gap: 10px;
}

/* CQ overrides base style when trapped in small container */
@container (max-width: 300px) {
  .cq-card {
    flex-direction: column;
  }
}
            `
          }
        }
      },
      {
        type: "dosdонts",
        data: {
          title: "Responsive Best Practices",
          dos: [
            "Use `@container` for UI components (Cards, Forms, Lists).",
            "Use `container-type: inline-size` on structural elements (Sidebar, Grid column).",
            "Use `@media` queries exclusively for macro-layout changes (e.g. converting a Grid to a Column for devices)."
          ],
          donts: [
            "Don't define `container-type` on the exact same element that is being queried; you query the parent.",
            "Don't overuse `@media` for nested component logic anymore."
          ]
        }
      }
    ]
  }
};
