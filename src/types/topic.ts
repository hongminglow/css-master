/**
 * Topic type definitions for CSS Tricks Platform
 * Validates: Requirements 7.4, 8.5
 */

export interface Topic {
  id: string; // Unique identifier (kebab-case)
  name: string; // Display name
  categoryId: string; // Parent category ID
  description: string; // Brief description
  tags: string[]; // Associated tags for search
  content: TopicContent; // Content structure
  route: string; // URL path (e.g., "/topics/flexbox-centering")
}

export interface TopicContent {
  sections: ContentSection[];
}

export interface ContentSection {
  type: "card" | "workflow" | "code";
  data: CardData | WorkflowData | CodeData;
}

export interface CardData {
  title: string;
  content: string;
  variant?: "default" | "highlight" | "warning";
}

export interface WorkflowData {
  steps: WorkflowStep[];
}

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
}

export interface CodeData {
  code: string;
  language: string;
  title?: string;
}
