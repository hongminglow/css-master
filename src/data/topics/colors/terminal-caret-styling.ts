import type { Topic } from "@/types/topic";

export const terminalCaretStyling: Topic = {
  id: "terminal-caret-styling",
  name: "Bespoke Input Carets",
  categoryId: "colors",
  description: "Styling the flashing text cursor inside of inputs to build terminal-style boxes or branded typers.",
  tags: ["colors", "forms", "caret", "input", "cursor", "terminal"],
  route: "/topics/terminal-caret-styling",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Immutable Cursor",
          content: "Historically, the thin, blinking vertical line inside an `<input>` or `<textarea>` was locked by the user's operating system. If you were building a retro hacker terminal interface, that modern thin line absolutely ruined the illusion of an old-school MS-DOS block cursor. Today, CSS allows you to alter both the `caret-color` and the brand-new `caret-shape` properties.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.terminal-input {
  background: black;
  color: #10b981; /* Hacker Green text */
  font-family: monospace;
  
  /* Colors the blinking cursor cursor green! */
  caret-color: #10b981;
  
  /* Transforms the blinking line into a block! 
     Other options: 'underscore' */
  caret-shape: block; 
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="display: flex; gap: 2rem; padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div style="flex: 1;">
    <label style="color: #64748b; display: block; margin-bottom: 0.5rem; font-size: 0.8rem;">Brand Integrated (Color)</label>
    <input type="text" value="Hover and click me" style="
      width: 100%; padding: 0.75rem; 
      border-radius: 4px; border: 2px solid #3b82f6; 
      background: #1e293b; color: white;
      caret-color: #3b82f6; /* Blue cursor! */
      outline: none;
    ">
  </div>
  
  <div style="flex: 1;">
    <label style="color: #64748b; display: block; margin-bottom: 0.5rem; font-size: 0.8rem;">Retro Terminal (Shape/Color)</label>
    <input type="text" value="sudo update --all" style="
      width: 100%; padding: 0.75rem; 
      border-radius: 4px; border: 2px solid #065f46; 
      background: #000; color: #10b981;
      font-family: monospace; font-weight: bold;
      caret-color: #10b981; 
      caret-shape: block;
      outline: none;
    ">
  </div>

</div>`,
          css: `/* Support for caret-shape is currently bleeding-edge (mostly Safari and Firefox natively). caret-color, however, is universally supported across all browsers. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "Hiding the Caret",
          content: "You can set `caret-color: transparent` to completely hide the cursor. Many developers did this to build complex JS-driven inputs (like OTP digit squares) where they drew their own fake cursor. You can now use `caret-color` instead of hacking together fake divs.",
        },
      },
    ],
  },
};
