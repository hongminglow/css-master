import type { Topic } from "@/types/topic";

export const customScrollbarStyling: Topic = {
  id: "custom-scrollbar-styling",
  name: "Custom Scrollbar UX",
  categoryId: "layout",
  description: "Theme the native browser scrollbar to match your app's dark mode or color palette.",
  tags: ["layout", "scroll", "scrollbar", "ux", "webkit"],
  route: "/topics/custom-scrollbar-styling",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Ugly System Scrollbar",
          content: "You spend weeks meticulously designing a beautiful dark-mode interface with sleek slate colors. But the moment your user's content overflows, Windows injects a chunky, glaringly bright gray-and-white 1990s scrollbar down the side of your site. While a standard CSS spec (`scrollbar-color`) now exists, the `::-webkit-scrollbar` suite of pseudo-elements gives you absolute control over thickness, borders, and hover states.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* 1. Define the width (or height for horizontal scrolling) */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* 2. The Track (the background groove) */
::-webkit-scrollbar-track {
  background: #0f172a; 
  border-left: 1px solid #1e293b;
}

/* 3. The Thumb (the draggable piece) */
::-webkit-scrollbar-thumb {
  background: #334155; 
  border-radius: 99px; /* Pill shape! */
  border: 2px solid #0f172a; /* Creates padding by matching track color */
}

/* 4. Hover states! */
::-webkit-scrollbar-thumb:hover {
  background: #475569; 
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  /* Local scoped scrollbar for demo purposes */
  .custom-scroll {
    scrollbar-color: #3b82f6 #1e293b; /* Firefox fallback */
    scrollbar-width: auto;
  }
  .custom-scroll::-webkit-scrollbar { width: 14px; }
  .custom-scroll::-webkit-scrollbar-track { background: #0f172a; }
  .custom-scroll::-webkit-scrollbar-thumb {
    background: #3b82f6;
    border-radius: 10px;
    border: 3px solid #0f172a; 
  }
  .custom-scroll::-webkit-scrollbar-thumb:hover { background: #60a5fa; }
</style>

<div class="custom-scroll" style="height: 150px; overflow-y: scroll; padding: 1rem; background: #0f172a; border: 1px solid #334155; border-radius: 8px;">
  <div style="height: 400px; color: #cbd5e1;">
    Scroll down using the custom blue scrollbar! <br><br>
    Notice how it looks incredibly modern because we used a thick border that matches the background color, creating the illusion that the thumb is 'floating' within the track. <br><br>
    This works perfectly on Chrome, Safari, and Edge.
  </div>
</div>`,
          css: `/* By applying pseudo-classes to specific containers (e.g. .sidebar::-webkit-scrollbar), you can have different scrollbars for different panes on your site. */`,
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "Cross-Browser Reality",
          dos: [
            "Use the `::-webkit-` prefixes. They control 95% of the global browser market (Chrome, Edge, Safari, iOS).",
            "Provide the standardized `scrollbar-color: thumb track;` property as a fallback specifically for Firefox users.",
          ],
          donts: [
            "Don't make your scrollbars insanely thin (like 2px). People using physical mice actually need to be able to click and grab them!",
          ],
        },
      },
    ],
  },
};
