import { Topic } from "@/types/topic";

export const shapeOutsideTextWrap: Topic = {
  id: "shape-outside-text-wrap",
  name: "Creative Text Wrap with Shapes",
  categoryId: "layout",
  description: "Wrapping text organically around irregular images and paths using shape-outside.",
  tags: ["layout", "shape-outside", "clip-path", "text-wrap", "float"],
  route: "/topics/shape-outside-text-wrap",
  content: {
    sections: [
      {
        type: "card",
        data: {
          title: "Breaking Out of the Box",
          content: "Web design is infamously boxy. Even an image with a transparent background or `border-radius: 50%` has an invisible rectangular bounding box that text avoids. `shape-outside` changes the geometry applied to floated elements, letting inline text flow into the negative space.",
        },
      },
      {
        type: "code",
        data: {
          language: "css",
          code: `.floated-image {
  float: left;
  border-radius: 50%;
  
  /* Forces text to flow around a circle */
  shape-outside: circle(50% at 50% 50%);
  shape-margin: 1rem; /* Adds padding to the shape */
  
  width: 150px;
  height: 150px;
  margin-right: 1rem;
}`,
        },
      },
      {
        type: "preview",
        data: {
          html: `<div style="background: #1e293b; padding: 1.5rem; border-radius: 8px; color: #cbd5e1; font-size: 0.9rem; line-height: 1.6;">
  <div style="
    float: left; 
    width: 120px; 
    height: 120px; 
    border-radius: 50%; 
    background: linear-gradient(135deg, #3b82f6, #8b5cf6); 
    shape-outside: circle(); 
    shape-margin: 15px; 
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
  ">Circle</div>
  <p>Notice how this text organically wraps around the curvature of the circle on the left. Without the shape-outside property, this paragraph would follow an invisible straight line cutting straight down on the right side of the circle, completely ruining the illusion of a non-rectangular object. By combining float, shape-outside, and shape-margin, we achieve beautiful magazine-like editorial layouts right on the web. It reads beautifully and looks highly bespoke.</p>
</div>`,
          css: `/* shape-outside ONLY works on floated elements */`,
        },
      },
      {
        type: "list",
        data: {
          title: "Available Shape Functions",
          ordered: false,
          items: [
            { text: "`circle()`", subtext: "Wraps text around a perfect circle" },
            { text: "`ellipse()`", subtext: "For oval shapes" },
            { text: "`polygon()`", subtext: "For complex vector points (triangles, stars, etc.)" },
            { text: "`url()`", subtext: "Generates the shape based on the alpha channel of an image (PNG transparency)" },
          ],
        },
      },
      {
        type: "tip",
        data: {
          variant: "warning",
          title: "The Float Requirement",
          content: "`shape-outside` currently ONLY works if the element is floated (`float: left` or `float: right`). It will do absolutely nothing on positioned elements or Grid/Flexbox items.",
        },
      },
    ],
  },
};
