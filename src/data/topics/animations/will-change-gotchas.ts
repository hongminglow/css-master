import type { Topic, CardData, CodeData, TipData, ComparisonData, DosDontsData } from "@/types/topic";

export const willChangeGotchas: Topic = {
	id: "will-change-gotchas",
	name: "Will-change Gotchas",
	categoryId: "animations",
	description:
		"will-change is a performance hint — but misusing it wastes GPU memory, creates unintended stacking contexts, and can make things slower.",
	tags: ["will-change", "performance", "GPU", "animation", "stacking context"],
	route: "/topics/will-change-gotchas",
	content: {
		sections: [
			{
				type: "card",
				data: {
					title: "A Hint, Not a Command",
					content:
						"will-change tells the browser to promote an element to its own GPU compositor layer before an animation starts. This prevents jank from the initial layer-creation cost. But it comes with real costs: GPU memory is consumed for every promoted element, even when they're not animated. Apply it on-demand (e.g. on :hover), remove it after animation ends, and never apply it globally.",
				} as CardData,
			},
			{
				type: "comparison",
				data: {
					title: "Overuse vs Targeted Use",
					left: {
						label: "❌ Applied Globally",
						code: `/* DON'T do this — wastes memory on every element */
* {
  will-change: transform;
}

/* Or applying it to many static elements */
.card {
  will-change: transform;
}`,
						description: "GPU memory wasted on idle elements",
					},
					right: {
						label: "✓ Applied on Demand",
						code: `/* Apply only when animation is imminent */
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  will-change: transform;
  transform: translateY(-4px);
}

/* Or via JS: add before, remove after */
el.style.willChange = 'transform';
el.addEventListener('transitionend', () => {
  el.style.willChange = 'auto';
}, { once: true });`,
						description: "Promoted only when actually needed",
					},
				} as ComparisonData,
			},
			{
				type: "code",
				data: {
					language: "css",
					title: "CSS — The Stacking Context Trap",
					code: `/*
  TRAP: will-change creates a new stacking context!
  This means z-index becomes scoped to this element.
  A child with z-index: 9999 can't escape its parent
  if the parent has will-change: transform.
*/

.modal-overlay {
  position: fixed;
  z-index: 100;
  will-change: opacity; /* ← creates stacking context! */
}

.tooltip {
  position: absolute;
  z-index: 9999; /* ← TRAPPED inside .modal-overlay's context */
}

/* Fix: remove will-change, or restructure the DOM */
.modal-overlay {
  position: fixed;
  z-index: 100;
  /* will-change removed — tooltip can now escape */
}`,
				} as CodeData,
			},
			{
				type: "tip",
				data: {
					variant: "warning",
					title: "The 4 Properties That Promote Layers",
					content:
						"Only a few values actually promote elements to GPU layers: will-change: transform, opacity, filter, and left/top (for position: fixed). Using will-change: color or will-change: background-color gives the browser a hint but won't create a compositor layer — good to know so you don't misuse it.",
				} as TipData,
			},
			{
				type: "dosdонts",
				data: {
					title: "will-change Best Practices",
					dos: [
						"Apply it on :hover or just before animation starts",
						"Remove it (set to 'auto') when animation is complete",
						"Limit usage to transform and opacity for GPU animation",
						"Use only on elements that truly need it (10 or fewer at a time)",
					],
					donts: [
						"Don't apply will-change globally or to every card",
						"Don't forget it creates a new stacking context",
						"Don't use it as a fix for jank — profile first",
						"Don't leave it permanently set on static elements",
						"Don't use it for properties that can't be composited (color, margin)",
					],
				} as DosDontsData,
			},
		],
	},
};
