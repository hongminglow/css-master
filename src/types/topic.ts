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
  type: "card" | "workflow" | "code" | "preview";
  data: CardData | WorkflowData | CodeData | PreviewData;
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
