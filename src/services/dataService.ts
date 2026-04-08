/**
 * Data access layer for CSS Tricks Platform
 * Provides functions to retrieve topics, categories, and tags by ID
 * Validates: Requirements 8.1, 8.2, 8.3
 */

import { categories } from "@/data/categories";
import type { Tag } from "@/data/tags";
import { tags } from "@/data/tags";
import { topics } from "@/data/topics";
import type { Category } from "@/types/category";
import type { Topic } from "@/types/topic";

/**
 * Retrieve a topic by its ID
 * @param id - The topic ID to retrieve
 * @returns The topic if found, undefined otherwise
 */
export function getTopicById(id: string): Topic | undefined {
  return topics.find((topic) => topic.id === id);
}

/**
 * Retrieve a category by its ID
 * @param id - The category ID to retrieve
 * @returns The category if found, undefined otherwise
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

/**
 * Retrieve a tag by its value
 * @param tag - The tag value to check
 * @returns True if the tag exists, false otherwise
 */
export function hasTag(tag: string): boolean {
  return tags.includes(tag as Tag);
}

/**
 * Get all topics
 * @returns Array of all topics
 */
export function getAllTopics(): Topic[] {
  return topics;
}

/**
 * Get all categories
 * @returns Array of all categories
 */
export function getAllCategories(): Category[] {
  return categories;
}

/**
 * Get all tags
 * @returns Array of all tags
 */
export function getAllTags(): readonly Tag[] {
  return tags;
}
