/**
 * Search type definitions for CSS Tricks Platform
 * Validates: Requirements 7.4, 8.5
 */

import type { Topic } from "./topic";

export interface SearchResult {
  topic: Topic;
  matchScore: number; // Fuzzy match score (0-1)
  matchedFields: string[]; // Fields that matched (name, tags)
}
