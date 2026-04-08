/**
 * Category data constants for CSS Tricks Platform
 * Validates: Requirements 8.2
 */

import { Category } from "../types/category";

export const categories: Category[] = [
  {
    id: "layout",
    name: "Layout",
    description:
      "CSS layout techniques including Flexbox, Grid, and positioning",
    order: 1,
  },
  {
    id: "visual-effects",
    name: "Visual Effects",
    description:
      "Styling tricks for shadows, gradients, and visual enhancements",
    order: 2,
  },
  {
    id: "animations",
    name: "Animations",
    description: "CSS animations, transitions, and motion effects",
    order: 3,
  },
  {
    id: "responsive",
    name: "Responsive Design",
    description: "Techniques for building responsive and adaptive layouts",
    order: 4,
  },
];
