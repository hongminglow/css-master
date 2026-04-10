import type { Topic } from "@/types/topic";

export const fileSelectorButton: Topic = {
  id: "file-selector-button",
  name: "Styling the File Input Button",
  categoryId: "layout",
  description: "Ditch the horrific hidden-label hacks and style the ugly native file upload button directly with CSS.",
  tags: ["layout", "forms", "input", "file", "buttons", "pseudo-element"],
  route: "/topics/file-selector-button",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Ultimate Form Hack is Dead",
          content: "Historically, `<input type=\"file\">` was considered totally unstylable. It locked you into an ugly native grey 'Choose File' button. For decades, developers built complex hacks involving `display: none` on the input, binding it to a custom `<label>`, and using JS to update the label text when a file was chosen. Thanks to the `::file-selector-button` pseudo-element, we can now style the actual button directly.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* 1. Style the outer container (the 'No file chosen' text area) */
input[type="file"] {
  color: #94a3b8; /* The default text color */
  font-family: inherit;
}

/* 2. Style the actual 'Choose File' button! */
input[type="file"]::file-selector-button {
  padding: 0.5rem 1rem;
  background: #3b82f6;     /* Beautiful blue */
  color: white;            /* White text */
  border: none;            /* Remove ugly OS borders */
  border-radius: 99px;     /* Pill shape */
  font-weight: bold;
  cursor: pointer;
  margin-right: 1rem;
  transition: background 0.2s;
}

/* Yes, it even supports hover states! */
input[type="file"]::file-selector-button:hover {
  background: #2563eb;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .modern-file-upload {
    padding: 0.5rem;
    border: 2px dashed #334155;
    border-radius: 8px;
    background: transparent;
    color: #cbd5e1;
    width: 100%;
    cursor: pointer;
  }
  
  .modern-file-upload::file-selector-button {
    background: #10b981;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    font-weight: 600;
    margin-right: 1rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .modern-file-upload::file-selector-button:hover {
    background: #059669;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);
  }
</style>

<div style="padding: 2rem; background: #0f172a; border-radius: 8px;">
  <label style="display: block; color: white; margin-bottom: 0.5rem; font-weight: bold;">Upload Avatar</label>
  <input type="file" class="modern-file-upload" accept="image/*">
</div>`,
          css: `/* The entire process is now natively handled by the browser, including displaying the filename or '1 file selected' when the user picks something. Zero JS. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Browser Support",
          content: "`::file-selector-button` has baseline support across all major modern browsers. If you need to support critically old versions of WebKit, you can comfortably chain `::-webkit-file-upload-button` alongside it.",
        },
      },
    ],
  },
};
