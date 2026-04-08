/**
 * Tag data constants for CSS Tricks Platform
 * Validates: Requirements 8.3
 */

export const tags = [
  "flexbox",
  "grid",
  "centering",
  "layout",
  "positioning",
  "shadow",
  "gradient",
  "glassmorphism",
  "animation",
  "transition",
  "transform",
  "hover",
  "media-query",
  "container-query",
  "responsive",
  "mobile",
  "accessibility",
  "performance",
  "modern-css",
] as const;

export type Tag = (typeof tags)[number];
