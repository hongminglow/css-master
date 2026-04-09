/**
 * Topics Index
 *
 * This is the single source of truth for all topics.
 *
 * ## How to add a new topic
 * 1. Create a file under the relevant category folder:
 *    src/data/topics/<category>/<topic-id>.ts
 * 2. Export the Topic object from that file
 * 3. Re-export it from the category's index.ts
 * 4. Add it to the `topics` array below (import from the category barrel)
 *
 * ## Folder structure
 * src/data/topics/
 * ├── index.ts              ← you are here (the master list)
 * ├── layout/
 * │   ├── index.ts          ← barrel for layout topics
 * │   ├── flexbox-centering.ts
 * │   ├── margin-collapse.ts
 * │   ├── z-index-stacking.ts
 * │   ├── position-sticky-gotchas.ts
 * │   ├── box-sizing-border-box.ts
 * │   ├── grid-auto-fit.ts
 * │   └── sticky-footer.ts
 * └── responsive/
 *     ├── index.ts          ← barrel for responsive topics
 *     └── object-fit-images.ts
 */

import type { Topic } from "@/types/topic";

// ── Category imports ──────────────────────────────────────────────────────────
import {
  boxSizingBorderBox,
  cssLogicalProperties,
  dynamicGalleryGrid,
  flexboxCentering,
  gridAutoFit,
  hasSelectorParent,
  heightVsMinHeight,
  isolationIsolate,
  marginCollapse,
  minWidthZero,
  positionStickyGotchas,
  stickyFooter,
  subgridAlignment,
  zIndexStackingContext,
} from "./layout";

import {
  containerQueries,
  intrinsicSizingFunctions,
  objectFitImages,
  the100vhTrap,
} from "./responsive";

import {
  gpuAcceleratedAnimations,
  scrollDrivenAnimations,
  startingStyleEntryTransitions,
} from "./animations";

import { dynamicColorMix, maskImageFades } from "./colors";

import { textWrapBalance, uncommonUnits } from "./typography";

// ── Master list ───────────────────────────────────────────────────────────────
// Order controls the sidebar and the home page quick-links order.
export const topics: Topic[] = [
  // Layout
  flexboxCentering,
  marginCollapse,
  zIndexStackingContext,
  positionStickyGotchas,
  boxSizingBorderBox,
  gridAutoFit,
  dynamicGalleryGrid,
  stickyFooter,
  hasSelectorParent,
  cssLogicalProperties,
  isolationIsolate,
  heightVsMinHeight,
  minWidthZero,
  subgridAlignment,

  // Animations
  gpuAcceleratedAnimations,
  scrollDrivenAnimations,
  startingStyleEntryTransitions,

  // Responsive
  objectFitImages,
  the100vhTrap,
  containerQueries,
  intrinsicSizingFunctions,

  // Colors
  dynamicColorMix,
  maskImageFades,

  // Typography
  uncommonUnits,
  textWrapBalance,
];
