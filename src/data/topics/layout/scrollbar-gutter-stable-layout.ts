import type { Topic } from "@/types/topic";

export const scrollbarGutterStableLayout: Topic = {
  id: "scrollbar-gutter-stable-layout",
  name: "Scrollbar Gutter Prevents Layout Shift",
  categoryId: "layout",
  description:
    "Reserve scrollbar space up front so layouts stop nudging sideways when pages or modals toggle scroll state.",
  tags: ["layout", "scrollbar-gutter", "overflow", "modal", "stability", "cls"],
  route: "/topics/scrollbar-gutter-stable-layout",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Sideways Jump Nobody Likes",
          content:
            "A classic polish bug happens when content fits on one page state but overflows on another. The scrollbar appears or disappears, the viewport width changes slightly, and centered layouts jump sideways. `scrollbar-gutter` lets you reserve that space more predictably so the page width stays stable.",
        },
      },
      {
        type: "livecomparison",
        data: {
          title: "Natural Scrollbar Toggle vs Reserved Gutter",
          subtitle: "Hover over each container to expand its content and trigger a vertical scrollbar.",
          left: {
            label: "Without reserved gutter",
            code: `.container {
  overflow-y: auto;
}`,
            html: `<div class="container">
  <div class="centered-box">Centered</div>
  <div class="trigger">Hover to add content &darr;</div>
  <div class="spacer"></div>
</div>`,
            css: `body { margin: 0; }
.container {
  height: 140px;
  overflow-y: auto;
  background: #0f172a;
  color: #f8fafc;
  font-family: system-ui, sans-serif;
  padding-top: 20px;
}
.centered-box {
  background: #ef4444;
  width: 120px;
  margin: 0 auto 20px;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
}
.trigger {
  border: 1px dashed #475569;
  margin: 0 20px;
  padding: 10px;
  text-align: center;
  color: #94a3b8;
  cursor: crosshair;
}
.spacer {
  height: 0;
}
.container:hover .spacer {
  height: 200px;
}
.container:hover .trigger {
  background: #1e293b;
  color: white;
}`,
            description:
              "When the scrollbar appears, the available inline size changes and the red box abruptly shifts left.",
          },
          right: {
            label: "With stable gutter",
            code: `.container {
  overflow-y: auto;
  scrollbar-gutter: stable;
}`,
            html: `<div class="container">
  <div class="centered-box">Centered</div>
  <div class="trigger">Hover to add content &darr;</div>
  <div class="spacer"></div>
</div>`,
            css: `body { margin: 0; }
.container {
  height: 140px;
  overflow-y: auto;
  scrollbar-gutter: stable;
  background: #0f172a;
  color: #f8fafc;
  font-family: system-ui, sans-serif;
  padding-top: 20px;
}
.centered-box {
  background: #10b981;
  width: 120px;
  margin: 0 auto 20px;
  padding: 10px;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
}
.trigger {
  border: 1px dashed #475569;
  margin: 0 20px;
  padding: 10px;
  text-align: center;
  color: #94a3b8;
  cursor: crosshair;
}
.spacer {
  height: 0;
}
.container:hover .spacer {
  height: 200px;
}
.container:hover .trigger {
  background: #1e293b;
  color: white;
}`,
            description:
              "The scrollbar area is already accounted for, so the green box stays perfectly still.",
          },
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Especially useful for modal-heavy apps",
          content:
            "This is a great rule when opening a dialog locks page scroll, or when route changes frequently toggle between short and long pages. It is a tiny property with outsized visual payoff.",
        },
      },
    ],
  },
};
