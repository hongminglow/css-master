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
        type: "comparison",
        data: {
          title: "Natural Scrollbar Toggle vs Reserved Gutter",
          left: {
            label: "Without reserved gutter",
            code: `html {
  overflow-y: auto;
}`,
            description:
              "When the scrollbar appears or disappears, the available inline size changes and centered UI can shift.",
          },
          right: {
            label: "With stable gutter",
            code: `html {
  overflow-y: auto;
  scrollbar-gutter: stable;
}`,
            description:
              "The scrollbar area is accounted for, reducing those small but noticeable horizontal layout jumps.",
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
