import type { Topic } from "./topic";

export interface SearchResult {
  topic: Topic;
  score: number;
  matchedFields: string[];
}

export interface SearchOptions {
  threshold?: number;
  limit?: number;
}
