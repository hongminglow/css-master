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
  aspectRatioPreventsLayoutJumps,
  anchorPositioningPopovers,
  boxSizingBorderBox,
  contentVisibilityLongPages,
  cssLogicalProperties,
  dynamicGalleryGrid,
  flexboxCentering,
  gridAutoFit,
  hasSelectorParent,
  heightVsMinHeight,
  isolationIsolate,
  logicalBorderRadius,
  marginCollapse,
  minWidthZero,
  positionStickyGotchas,
  scrollbarGutterStableLayout,
  stickyFooter,
  subgridAlignment,
  zIndexStackingContext,
  cssColumnsMasonry,
  displayContentsFlattening,
  flexAutoMargins,
  pointerEventsOverlays,
  shapeOutsideTextWrap,
} from "./layout";

import {
  containerQueries,
  containerQueryUnits,
  fieldSizingInputs,
  intrinsicSizingFunctions,
  objectFitImages,
  overscrollBehaviorScrollChaining,
  safeAreaInsetPadding,
  scrollSnapCarousels,
  the100vhTrap,
  touchActionGestures,
} from "./responsive";

import {
  gpuAcceleratedAnimations,
  interpolateSizeAutoDimensions,
  prefersReducedMotionStrategy,
  scrollDrivenAnimations,
  staggeredEntryAnimations,
  startingStyleEntryTransitions,
  transitionBehaviorDiscrete,
  viewTransitionsPageMorphs,
} from "./animations";

import {
  accentColorNativeControls,
  backdropFilterLayering,
  colorSchemeNativeDarkUi,
  dynamicColorMix,
  lightDarkThemeFunction,
  maskImageFades,
  relativeColorSyntax,
  conicGradientsCharts,
  mixBlendModeEffects,
} from "./colors";

import {
  fluidTypeClamp,
  fontSizeAdjustFallbacks,
  hyphensOverflowWrap,
  textWrapBalance,
  textWrapPretty,
  underlineOffsetThickness,
  uncommonUnits,
  fontDisplayStrategies,
  multiLineTruncation,
} from "./typography";

// ── Master list ───────────────────────────────────────────────────────────────
// Order controls the sidebar and the home page quick-links order.
export const topics: Topic[] = [
  // Layout
  aspectRatioPreventsLayoutJumps,
  anchorPositioningPopovers,
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
  logicalBorderRadius,
  heightVsMinHeight,
  minWidthZero,
  subgridAlignment,
  contentVisibilityLongPages,
  scrollbarGutterStableLayout,
  cssColumnsMasonry,
  displayContentsFlattening,
  flexAutoMargins,
  pointerEventsOverlays,
  shapeOutsideTextWrap,

  // Animations
  gpuAcceleratedAnimations,
  interpolateSizeAutoDimensions,
  prefersReducedMotionStrategy,
  scrollDrivenAnimations,
  startingStyleEntryTransitions,
  transitionBehaviorDiscrete,
  staggeredEntryAnimations,
  viewTransitionsPageMorphs,

  // Responsive
  objectFitImages,
  the100vhTrap,
  containerQueries,
  containerQueryUnits,
  fieldSizingInputs,
  intrinsicSizingFunctions,
  scrollSnapCarousels,
  overscrollBehaviorScrollChaining,
  safeAreaInsetPadding,
  touchActionGestures,

  // Colors
  dynamicColorMix,
  maskImageFades,
  accentColorNativeControls,
  backdropFilterLayering,
  lightDarkThemeFunction,
  relativeColorSyntax,
  colorSchemeNativeDarkUi,
  conicGradientsCharts,
  mixBlendModeEffects,

  // Typography
  uncommonUnits,
  textWrapBalance,
  textWrapPretty,
  fluidTypeClamp,
  fontSizeAdjustFallbacks,
  underlineOffsetThickness,
  hyphensOverflowWrap,
  fontDisplayStrategies,
  multiLineTruncation,
];
