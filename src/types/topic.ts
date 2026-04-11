export interface Topic {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  tags: string[];
  route: string;
  content: TopicContent;
}

export interface TopicContent {
  sections: ContentSection[];
}

export interface ContentSection {
  type: "card" | "workflow" | "code" | "preview" | "comparison" | "timeline" | "tip" | "table" | "list" | "quote" | "dosdонts" | "livecomparison" | "featurecomparison";
  data: CardData | WorkflowData | CodeData | PreviewData | ComparisonData | TimelineData | TipData | TableData | ListData | QuoteData | DosDontsData | LiveComparisonData | FeatureComparisonData;
}

export interface CardData {
  title: string;
  content: string;
}

export interface WorkflowData {
  title: string;
  steps: WorkflowStep[];
}

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

export interface CodeData {
  language: string;
  code: string;
  title?: string;
}

export interface PreviewData {
  html: string;
  css: string;
}

export interface ComparisonData {
  title: string;
  left: {
    label: string;
    code: string;
    description?: string;
  };
  right: {
    label: string;
    code: string;
    description?: string;
  };
}

export interface TimelineData {
  title: string;
  events: TimelineEvent[];
}

export interface TimelineEvent {
  title: string;
  description: string;
  code?: string;
}

export interface TipData {
  variant: "info" | "warning" | "success" | "danger";
  title: string;
  content: string;
}

export interface TableData {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface ListData {
  title: string;
  ordered: boolean;
  items: ListItem[];
}

export interface ListItem {
  text: string;
  subtext?: string;
}

export interface QuoteData {
  quote: string;
  author?: string;
}

export interface DosDontsData {
  title: string;
  dos: string[];
  donts: string[];
}

export interface FeatureComparisonData {
  title: string;
  left: FeatureList;
  right: FeatureList;
}

export interface FeatureList {
  label: string;
  items: string[];
  icon?: "check" | "dot" | "plus";
  variant?: "info" | "success" | "danger" | "warning";
}

/** LiveComparisonCard: two side-by-side panels each with code + live iframe preview */
export interface LiveComparisonData {
  title: string;
  subtitle?: string;
  left: LiveComparisonPanel;
  right: LiveComparisonPanel;
}

export interface LiveComparisonPanel {
  /** Short label shown in the panel header (e.g. "❌ Broken" or "✓ Fixed") */
  label: string;
  /** The CSS snippet shown in the code block */
  code: string;
  /** HTML injected into the iframe preview */
  html: string;
  /** CSS injected into the iframe preview */
  css: string;
  /** Optional caption under the preview */
  description?: string;
}
