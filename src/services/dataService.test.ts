/**
 * Property-based tests for data loading completeness
 * Feature: css-tricks-platform, Property 7: Data Loading Completeness
 * Validates: Requirements 8.1, 8.2, 8.3
 */

import * as fc from "fast-check";
import { describe, expect, test } from "vitest";
import {
  getAllCategories,
  getAllTags,
  getAllTopics,
  getCategoryById,
  getTopicById,
  hasTag,
} from "./dataService";

describe("Feature: css-tricks-platform, Property 7: Data Loading Completeness", () => {
  /**
   * **Validates: Requirements 8.1, 8.2, 8.3**
   *
   * Property: For any topic, category, or tag defined in the constant files,
   * it SHALL be retrievable by its ID through the data access layer without errors.
   */

  test("all topics defined in constants are retrievable by ID", () => {
    const allTopics = getAllTopics();

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic) => {
        // Act: Retrieve the topic by its ID
        const retrievedTopic = getTopicById(topic.id);

        // Assert: The topic should be retrievable and match the original
        expect(retrievedTopic).toBeDefined();
        expect(retrievedTopic).toEqual(topic);
        expect(retrievedTopic?.id).toBe(topic.id);
        expect(retrievedTopic?.name).toBe(topic.name);
        expect(retrievedTopic?.categoryId).toBe(topic.categoryId);
      }),
      { numRuns: 100 },
    );
  });

  test("all categories defined in constants are retrievable by ID", () => {
    const allCategories = getAllCategories();

    fc.assert(
      fc.property(fc.constantFrom(...allCategories), (category) => {
        // Act: Retrieve the category by its ID
        const retrievedCategory = getCategoryById(category.id);

        // Assert: The category should be retrievable and match the original
        expect(retrievedCategory).toBeDefined();
        expect(retrievedCategory).toEqual(category);
        expect(retrievedCategory?.id).toBe(category.id);
        expect(retrievedCategory?.name).toBe(category.name);
        expect(retrievedCategory?.description).toBe(category.description);
      }),
      { numRuns: 100 },
    );
  });

  test("all tags defined in constants are retrievable", () => {
    const allTags = getAllTags();

    fc.assert(
      fc.property(fc.constantFrom(...allTags), (tag) => {
        // Act: Check if the tag exists
        const tagExists = hasTag(tag);

        // Assert: The tag should exist
        expect(tagExists).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  test("data access layer handles all defined topics without errors", () => {
    const allTopics = getAllTopics();

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic) => {
        // Act & Assert: Should not throw any errors
        expect(() => getTopicById(topic.id)).not.toThrow();

        const result = getTopicById(topic.id);
        expect(result).toBeDefined();
        expect(result?.id).toBe(topic.id);
      }),
      { numRuns: 100 },
    );
  });

  test("data access layer handles all defined categories without errors", () => {
    const allCategories = getAllCategories();

    fc.assert(
      fc.property(fc.constantFrom(...allCategories), (category) => {
        // Act & Assert: Should not throw any errors
        expect(() => getCategoryById(category.id)).not.toThrow();

        const result = getCategoryById(category.id);
        expect(result).toBeDefined();
        expect(result?.id).toBe(category.id);
      }),
      { numRuns: 100 },
    );
  });

  test("data access layer handles all defined tags without errors", () => {
    const allTags = getAllTags();

    fc.assert(
      fc.property(fc.constantFrom(...allTags), (tag) => {
        // Act & Assert: Should not throw any errors
        expect(() => hasTag(tag)).not.toThrow();

        const result = hasTag(tag);
        expect(result).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  test("retrieving non-existent topic returns undefined without error", () => {
    fc.assert(
      fc.property(
        fc.string().filter((s) => !getAllTopics().some((t) => t.id === s)),
        (nonExistentId) => {
          // Act & Assert: Should not throw, but return undefined
          expect(() => getTopicById(nonExistentId)).not.toThrow();

          const result = getTopicById(nonExistentId);
          expect(result).toBeUndefined();
        },
      ),
      { numRuns: 100 },
    );
  });

  test("retrieving non-existent category returns undefined without error", () => {
    fc.assert(
      fc.property(
        fc.string().filter((s) => !getAllCategories().some((c) => c.id === s)),
        (nonExistentId) => {
          // Act & Assert: Should not throw, but return undefined
          expect(() => getCategoryById(nonExistentId)).not.toThrow();

          const result = getCategoryById(nonExistentId);
          expect(result).toBeUndefined();
        },
      ),
      { numRuns: 100 },
    );
  });

  test("checking non-existent tag returns false without error", () => {
    fc.assert(
      fc.property(
        fc.string().filter((s) => !getAllTags().includes(s as any)),
        (nonExistentTag) => {
          // Act & Assert: Should not throw, but return false
          expect(() => hasTag(nonExistentTag)).not.toThrow();

          const result = hasTag(nonExistentTag);
          expect(result).toBe(false);
        },
      ),
      { numRuns: 100 },
    );
  });
});
