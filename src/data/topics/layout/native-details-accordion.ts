import type { Topic } from "@/types/topic";

export const nativeDetailsAccordion: Topic = {
  id: "native-details-accordion",
  name: "Native HTML Accordions",
  categoryId: "layout",
  description: "Building fully accessible FAQ accordions using <details> and styling the ::marker.",
  tags: ["layout", "accordion", "forms", "html5", "marker"],
  route: "/topics/native-details-accordion",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Cost of JS Accordions",
          content: "UI Accordions (like FAQ sections) traditionally require significant JavaScript: calculating dynamic heights, toggling CSS classes, writing ARIA tags for screen readers, and managing arrow rotational states. HTML5 introduced the `<details>` and `<summary>` tags which handle the toggle state and accessibility completely natively.",
        },
      },
      {
        type: "code",
        data: {
          language: "html",
          code: `<!-- The native structure -->
<details class="faq-accordion">
  <summary>How do I reset my password?</summary>
  <div class="faq-content">
    <p>Click the 'forgot password' link on the login page.</p>
  </div>
</details>`,
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `/* 1. Option A: Style the native marker directly */
.faq-accordion summary::marker {
  color: #3b82f6; 
  /* Note: You can only style limited properties on ::marker (like color and font) */
}

/* ---------------------------------------------------- */

/* 2. Option B: Remove it entirely and build a custom animated arrow */
.faq-accordion summary {
  list-style: none; /* Removes default triangle in Chrome/Firefox/Edge */
}
.faq-accordion summary::-webkit-details-marker {
  display: none; /* Removes default triangle in Safari */
}

/* Build a custom chevron using ::before */
.faq-accordion summary::before {
  content: '▶';
  display: inline-block;
  margin-right: 10px;
  transition: transform 0.2s ease;
}

/* Animate it natively by targeting the [open] state */
.faq-accordion[open] summary::before {
  transform: rotate(90deg);
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .modern-details {
    background: #1e293b;
    border-radius: 8px;
    padding: 1rem;
    color: white;
    cursor: pointer;
    border: 1px solid #334155;
    transition: background 0.2s;
  }
  
  .modern-details:hover {
    background: #334155;
  }
  
  /* Style the clickable header */
  .modern-details summary {
    font-weight: bold;
    outline: none;
    /* Important layout trick: remove the default arrow 
       so we can style our own if we want! */
    list-style: none; /* Works in Chrome/Firefox */
  }
  .modern-details summary::-webkit-details-marker {
    display: none; /* Safari requires this specifically */
  }
  
  /* Add our own custom animated arrow using ::before */
  .modern-details summary::before {
    content: '▶';
    display: inline-block;
    margin-right: 10px;
    color: #3b82f6;
    transition: transform 0.2s ease;
  }
  
  /* Select the summary when details is OPEN! */
  .modern-details[open] summary::before {
    transform: rotate(90deg);
  }
  
  .modern-content {
    color: #94a3b8;
    margin-top: 1rem;
    padding-left: 1.5rem;
  }
</style>

<div style="padding: 2rem; background: #0f172a; border-radius: 8px; display: flex; flex-direction: column; gap: 1rem;">
  <details class="modern-details">
    <summary>Can I use this commercially?</summary>
    <div class="modern-content">Yes! All content is available under the MIT license and is completely free for commercial use.</div>
  </details>

  <details class="modern-details" open>
    <summary>Does it require JavaScript?</summary>
    <div class="modern-content">No! Click me to close. The native HTML parser handles the show/hide behavior securely and exposes the correct 'expanded' state to screen readers.</div>
  </details>
</div>`,
          css: `/* We completely removed the default triangle bullet point by targeting 'list-style: none' on the summary tag, and rebuilt a much nicer animated triangle using ::before. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "The Animation Issue",
          content: "While `<details>` handles state, it historically snaps open instantly. CSS cannot easily animate `display: none` to `display: block`. A brand-new feature called CSS `interpolate-size: allow-keywords` (or using modern Grid `1fr` hacks) is required if you want the native element to slide open smoothly.",
        },
      },
    ],
  },
};
