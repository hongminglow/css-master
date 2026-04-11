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
  paddingPercentageTrap,
  nativeDialogBackdrop,
  isVsWhereSpecificity,
  placeholderShownFloatingLabels,
  focusWithinParent,
  scrollPaddingStickyHeaders,
  targetPseudoClass,
  resizePropertyElements,
  nativeDetailsAccordion,
  hideEmptyElements,
  customScrollbarStyling,
  fileSelectorButton,
  customCheckboxCheckedSibling,
  fitContentCentering,
  tableLayoutFixed,
  displayProperties,
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
  clampFluidSpacing,
  mediaHoverPointer,
  responsiveIframeAspectRatio,
  orientationMediaQueries,
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
  animationPlayStateHover,
  animatingGradientsAtProperty,
  pingPongAnimationAlternate,
  stepsTimingFunction,
  asymmetricTransitionDelays,
  springBounceCubicBezier,
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
  currentcolorKeyword,
  outlineVsBoxShadowFocus,
  gradientTextBackgroundClip,
  dropShadowVsBoxShadow,
  customTextSelection,
  pixelatedImageRendering,
  differenceBlendModeText,
  terminalCaretStyling,
  userInvalidForms,
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
  tabularNumsJitter,
  verticalWritingMode,
  animateVariableFonts,
  dropCapFirstLetter,
  fontFeatureSettingsOpentype,
  wordBreakLongUrls,
} from "./typography";

import { pictureVsSrcset } from "./html";

// ── Master list ───────────────────────────────────────────────────────────────
// Order controls the sidebar and the home page quick-links order.
export const topics: Topic[] = [
  // Layout
  displayProperties,
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
  paddingPercentageTrap,
  nativeDialogBackdrop,
  isVsWhereSpecificity,
  placeholderShownFloatingLabels,
  focusWithinParent,
  scrollPaddingStickyHeaders,
  targetPseudoClass,
  resizePropertyElements,
  nativeDetailsAccordion,
  hideEmptyElements,
  customScrollbarStyling,
  fileSelectorButton,
  customCheckboxCheckedSibling,
  fitContentCentering,
  tableLayoutFixed,

  // Animations
  gpuAcceleratedAnimations,
  interpolateSizeAutoDimensions,
  prefersReducedMotionStrategy,
  scrollDrivenAnimations,
  startingStyleEntryTransitions,
  transitionBehaviorDiscrete,
  staggeredEntryAnimations,
  viewTransitionsPageMorphs,
  animationPlayStateHover,
  animatingGradientsAtProperty,
  pingPongAnimationAlternate,
  stepsTimingFunction,
  asymmetricTransitionDelays,
  springBounceCubicBezier,

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
  clampFluidSpacing,
  mediaHoverPointer,
  responsiveIframeAspectRatio,
  orientationMediaQueries,

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
  currentcolorKeyword,
  outlineVsBoxShadowFocus,
  gradientTextBackgroundClip,
  dropShadowVsBoxShadow,
  customTextSelection,
  pixelatedImageRendering,
  differenceBlendModeText,
  terminalCaretStyling,
  userInvalidForms,

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
  tabularNumsJitter,
  verticalWritingMode,
  animateVariableFonts,
  dropCapFirstLetter,
  fontFeatureSettingsOpentype,
  wordBreakLongUrls,

  // HTML & Media
  pictureVsSrcset,
];
