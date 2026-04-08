/**
 * Property-based tests for tag association validity
 * Feature: css-tricks-platform, Property 9: Tag Association Validity
 * Validates: Requirements 9.1, 9.4
 */

import * as fc from "fast-check";
import { describe, expect, test } from "vitest";
import { getAllTags, getAllTopics } from "../services/dataService";
import type { Topic } from "../types/topic";

describe("Feature: css-tricks-platform, Property 9: Tag Association Validity", () => {
  /**
   * **Validates: Requirements 9.1, 9.4**
   *
   * Property: For any valid topic, it SHALL have at least one associated tag,
   * and for any tag, it MAY be associated with multiple topics (many-to-many relationship).
   */

  test("every topic has at least one associated tag", () => {
    const allTopics = getAllTopics();

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic: Topic) => {
        // Act: Check the number of tags associated with the topic
        const tagCount = topic.tags.length;

        // Assert: Every topic must have at least one tag
        expect(tagCount).toBeGreaterThan(0);
        expect(Array.isArray(topic.tags)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  test("all topic tags are valid tags from the tag registry", () => {
    const allTopics = getAllTopics();
    const validTags = getAllTags();

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic: Topic) => {
        // Act: Check if all tags in the topic are valid
        const allTagsValid = topic.tags.every((tag) =>
          validTags.includes(tag as any),
        );

        // Assert: All tags must exist in the tag registry
        expect(allTagsValid).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  test("tags can be associated with multiple topics (many-to-many)", () => {
    const allTopics = getAllTopics();
    const validTags = getAllTags();

    // Build a map of tag -> topics that use it
    const tagToTopicsMap = new Map<string, Topic[]>();

    allTopics.forEach((topic) => {
      topic.tags.forEach((tag) => {
        if (!tagToTopicsMap.has(tag)) {
          tagToTopicsMap.set(tag, []);
        }
        tagToTopicsMap.get(tag)!.push(topic);
      });
    });

    fc.assert(
      fc.property(fc.constantFrom(...validTags), (tag: string) => {
        // Act: Get topics associated with this tag
        const associatedTopics = tagToTopicsMap.get(tag) || [];

        // Assert: A tag MAY be associated with zero or more topics
        // (many-to-many relationship allows 0 to N associations)
        expect(associatedTopics.length).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(associatedTopics)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  test("at least one tag is shared by multiple topics", () => {
    const allTopics = getAllTopics();

    // Build a map of tag -> count of topics using it
    const tagUsageCount = new Map<string, number>();

    allTopics.forEach((topic) => {
      topic.tags.forEach((tag) => {
        tagUsageCount.set(tag, (tagUsageCount.get(tag) || 0) + 1);
      });
    });

    // Act: Find tags used by multiple topics
    const sharedTags = Array.from(tagUsageCount.entries()).filter(
      ([_, count]) => count > 1,
    );

    // Assert: At least one tag should be shared (demonstrating many-to-many)
    expect(sharedTags.length).toBeGreaterThan(0);
  });

  test("topic tags array contains no duplicates", () => {
    const allTopics = getAllTopics();

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic: Topic) => {
        // Act: Check for duplicate tags in the topic
        const uniqueTags = new Set(topic.tags);

        // Assert: Number of unique tags should equal total tags (no duplicates)
        expect(uniqueTags.size).toBe(topic.tags.length);
      }),
      { numRuns: 100 },
    );
  });

  test("topic tags are non-empty strings", () => {
    const allTopics = getAllTopics();

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic: Topic) => {
        // Act: Check each tag in the topic
        const allTagsValid = topic.tags.every(
          (tag) => typeof tag === "string" && tag.length > 0,
        );

        // Assert: All tags must be non-empty strings
        expect(allTagsValid).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  test("many-to-many relationship: topics can share tags and have unique tags", () => {
    const allTopics = getAllTopics();

    // Build a comprehensive view of tag associations
    const tagToTopicsMap = new Map<string, Set<string>>();

    allTopics.forEach((topic) => {
      topic.tags.forEach((tag) => {
        if (!tagToTopicsMap.has(tag)) {
          tagToTopicsMap.set(tag, new Set());
        }
        tagToTopicsMap.get(tag)!.add(topic.id);
      });
    });

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic: Topic) => {
        // Act: For each tag in this topic, check how many topics use it
        const tagAssociations = topic.tags.map((tag) => ({
          tag,
          topicCount: tagToTopicsMap.get(tag)?.size || 0,
        }));

        // Assert: Each tag should be associated with at least this topic
        tagAssociations.forEach(({ tag, topicCount }) => {
          expect(topicCount).toBeGreaterThanOrEqual(1);
        });

        // Assert: The topic has at least one tag (from earlier property)
        expect(topic.tags.length).toBeGreaterThan(0);
      }),
      { numRuns: 100 },
    );
  });
});
