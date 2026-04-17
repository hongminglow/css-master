import type {
  Topic,
  CardData,
  CodeData,
  TipData,
  ComparisonData,
  DosDontsData,
} from "@/types/topic";

export const printMediaQueries: Topic = {
  id: "print-media-queries",
  name: "Print Media Queries",
  categoryId: "responsive",
  description:
    "Style your page specifically for printing — hiding nav bars, forcing page breaks, and making content print-readable.",
  tags: ["print", "media query", "@media print", "page break", "responsive"],
  route: "/topics/print-media-queries",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Print is a Valid Responsive Target",
          content:
            "Most developers think of responsive design as screen sizes. But @media print is just as real a breakpoint. Users still print invoices, articles, and receipts. Without print styles, sidebars, nav bars, cookie banners, and sticky headers all clutter the printed page. A few targeted rules make a huge difference.",
        } as CardData,
      },
      {
        type: "code",
        data: {
          language: "css",
          title: "CSS — Print Stylesheet Essentials",
          code: `@media print {
  /* Hide non-essential chrome */
  nav, aside, footer, .cookie-banner,
  .ad, button, .sidebar {
    display: none !important;
  }

  /* Reset background and force dark text */
  body {
    background: white;
    color: black;
    font-size: 12pt;
    font-family: Georgia, serif;
  }

  /* Expand links to show their URL */
  a::after {
    content: " (" attr(href) ")";
    font-size: 0.85em;
    color: #555;
  }

  /* Don't show URL for internal / icon links */
  a[href^="#"]::after,
  a[href^="javascript"]::after {
    content: "";
  }

  /* Control page breaks */
  h1, h2, h3 {
    page-break-after: avoid;
    break-after: avoid;
  }

  img, table, pre {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Force a page break before a section */
  .chapter {
    page-break-before: always;
    break-before: page;
  }
}`,
        } as CodeData,
      },
      {
        type: "comparison",
        data: {
          title: "Background Colors in Print",
          left: {
            label: "❌ Problem",
            code: `/* Browser strips background colors by default */
.badge {
  background: #2563eb;
  color: white;
  padding: 4px 8px;
}

/* On print: black text on white — unreadable */`,
            description: "Browsers strip backgrounds for ink saving",
          },
          right: {
            label: "✓ Force-print backgrounds",
            code: `/* Use print-color-adjust to preserve colour */
.badge {
  background: #2563eb;
  color: white;
  padding: 4px 8px;
  /* Modern standard */
  print-color-adjust: exact;
  /* Legacy WebKit */
  -webkit-print-color-adjust: exact;
}`,
            description: "Explicitly opt-in to colour printing",
          },
        } as ComparisonData,
      },
      {
        type: "tip",
        data: {
          variant: "info",
          title: "Test Without a Printer",
          content:
            "In Chrome DevTools, open the Rendering panel (⋮ → More tools → Rendering) and set 'Emulate CSS media type' to 'print'. You can see exactly how your page will look when printed without wasting paper.",
        } as TipData,
      },
      {
        type: "dosdонts",
        data: {
          title: "Print CSS Best Practices",
          dos: [
            "Hide nav, sidebars, ads, and sticky headers",
            "Show full href URLs after links with ::after + attr(href)",
            "Use break-inside: avoid on tables and figures",
            "Use print-color-adjust: exact for intentional colour",
            "Set font-size in pt units for print (12pt body is standard)",
          ],
          donts: [
            "Don't forget that @media print exists",
            "Don't rely on screen layout for print — it looks terrible",
            "Don't use pixel units for print (use pt, cm, mm instead)",
            "Don't make users print backgrounds they didn't ask for",
          ],
        } as DosDontsData,
      },
    ],
  },
};
