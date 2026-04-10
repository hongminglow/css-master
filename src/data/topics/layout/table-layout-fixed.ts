import type { Topic } from "@/types/topic";

export const tableLayoutFixed: Topic = {
  id: "table-layout-fixed",
  name: "Taming Explosive Tables",
  categoryId: "layout",
  description: "How to completely lock HTML table sizing so a single huge column of data doesn't destroy horizontal boundaries.",
  tags: ["layout", "tables", "overflow", "fixed", "grid", "data"],
  route: "/topics/table-layout-fixed",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "The Content Dictatorship",
          content: "Since the internet was created, HTML `<table >` elements run on an algorithm called 'auto layout'. In this mode, the table expands its columns to uniquely fit the exact width of the data inside them. If a user inputs a massive, unbroken URL into a table cell, that cell will ruthlessly force the entire table element to expand incredibly wide, ignoring `width: 100%` entirely and breaking right out of its parent's bounding box. You cure this entirely with one line of CSS.",
        },
      },
      {
        type: "comparison",
        data: {
          title: "Auto vs Fixed Layout",
          left: {
            label: "Auto Layout (Dangerous)",
            code: `table {
  width: 100%;
  table-layout: auto; /* Default */
}

/* Data drives the width. If data is 
   huge, it will push the table boundaries 
   off-screen on mobile. */`,
          },
          right: {
            label: "Fixed Layout (Locked)",
            code: `table {
  width: 100%;

  /* The table width drives the columns!
     Data inside is forced to wrap or
     strictly obey overflow rules. */
  table-layout: fixed;
}`,
          },
        },
      },
      {
        type: "preview",
        data: {
          html: `<style>
  .demo-table {
    width: 100%;
    border-collapse: collapse;
    color: white;
  }
  .demo-table td, .demo-table th {
    border: 1px solid #334155;
    padding: 0.5rem;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .fixed-tbl {
    table-layout: fixed;
  }
</style>

<div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem; background: #0f172a; border-radius: 8px;">
  
  <div>
    <span style="color: #ef4444; font-size: 0.8rem;">Auto Layout (Column 2 hogs 80% spacing)</span>
    <table class="demo-table" style="background: #1e293b; margin-top: 0.5rem;">
      <tr><th>ID</th><th>Email Address</th><th>Status</th></tr>
      <tr><td>1</td><td>user-with-insanely-long-email@domain.com</td><td>Active</td></tr>
    </table>
  </div>
  
  <div>
    <span style="color: #10b981; font-size: 0.8rem;">Fixed Layout (All columns receive exactly 33.3% evenly)</span>
    <table class="demo-table fixed-tbl" style="background: #1e293b; margin-top: 0.5rem;">
      <tr><th>ID</th><th>Email Address</th><th>Status</th></tr>
      <tr><td>1</td><td>user-with-insanely-long-email@domain.com</td><td>Active</td></tr>
    </table>
  </div>

</div>`,
          css: `/* Fixed layout uses the FIRST ROW of the table to determine column widths. If you don't specify explicit column widths, it perfectly distributes them mathematically. */`,
        },
      },
      {
        type: "tip",
        data: {
          variant: "success",
          title: "Performance Boost",
          content: "`table-layout: fixed` is dramatically faster for browsers to render. Auto-layout forces the browser engine to read the *entire* table contents, all the way to the 1000th row, before it can math out the header widths. Fixed-layout reads row 1 and instantly paints the table grid, significantly speeding up First Meaningful Paint.",
        },
      },
    ],
  },
};
