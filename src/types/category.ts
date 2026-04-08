/**
 * Category type definitions for CSS Tricks Platform
 * Validates: Requirements 7.4, 8.5
 */

export interface Category {
  id: string; // Unique identifier (kebab-case)
  name: string; // Display name
  description: string; // Brief description
  order: number; // Display order in sidebar
}
