import type { Topic } from "@/types/topic";

export const nativeDialogBackdrop: Topic = {
  id: "native-dialog-backdrop",
  name: "Native Modals with <dialog>",
  categoryId: "layout",
  description: "Stop building complex overlay wrappers and z-index wars. The native <dialog> element solves everything.",
  tags: ["layout", "modal", "dialog", "backdrop", "z-index", "html5"],
  route: "/topics/native-dialog-backdrop",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Death of Modal Wrappers",
          content: "Developers have spent a decade building complex modal components: creating overlay backdrops, trapping focus, listening for the Escape key, and fighting `z-index` stacking contexts. The HTML5 `<dialog>` element natively handles all of this out-of-the-box when opened via `dialog.showModal()`.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Traditional Modal vs Native Dialog",
          left: {
            label: "The Old Way",
            code: `<div class="modal-backdrop">
  <div class="modal-content" 
       role="dialog" 
       aria-modal="true">
    <!-- Manual focus trapping JS -->
    <!-- Manual ESC key listeners -->
    <!-- Z-index issues -->
  </div>
</div>`,
          },
          right: {
            label: "The New Way",
            code: `<dialog id="my-modal">
  <!-- Content goes here -->
  <button id="close-btn">Close</button>
</dialog>

<!-- 
dialog.showModal() does all the magic:
- Places it in the top layer (beats z-index)
- Creates ::backdrop
- Traps keyboard focus
- Closes on ESC
-->`,
          },
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `dialog {
  border: none;
  border-radius: 12px;
  padding: 24px;
  background: #1e293b;
  color: white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Style the native dimming overlay! */
dialog::backdrop {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Top Layer Magic",
          content: "When opened with `.showModal()`, the dialog is elevated to the browser's 'Top Layer'. This is outside the normal DOM hierarchy, meaning it will appear on top of EVERYTHING else, completely ignoring `z-index` stacking context traps (like `overflow: hidden` parents).",
        },
      },
      {
        type: "dosdонts",
        data: {
          title: "show() vs showModal()",
          dos: [
            "Always use `dialog.showModal()` and `dialog.close()` if you want modal behavior (dimming, focus trap, blocks interaction with page).",
          ],
          donts: [
            "Don't use `dialog.show()` unless you want a non-modal popup (like a draggable floating tool palette) that allows the user to still interact with the page.",
            "Don't fight the `display` property. Let the browser handle opening and closing display states.",
          ],
        },
      },
    ],
  },
};
