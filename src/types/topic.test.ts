/**
 * Property-based tests for content schema validation
 * Feature: css-tricks-platform, Property 8: Content Schema Validation
 * Validates: Requirements 8.5
 */

import * as fc from "fast-check";
import { describe, expect, test } from "vitest";
import { getAllTopics } from "../services/dataService";
import type {
  CardData,
  CodeData,
  ContentSection,
  Topic,
  TopicContent,
  WorkflowData,
  WorkflowStep,
} from "./topic";

describe("Feature: css-tricks-platform, Property 8: Content Schema Validation", () => {
  /**
   * **Validates: Requirements 8.5**
   *
   * Property: For any topic content structure, it SHALL conform to the TopicContent
   * interface schema with valid section types and properly structured data for each section type.
   */

  // Helper function to validate CardData structure
  function isValidCardData(data: unknown): data is CardData {
    if (typeof data !== "object" || data === null) return false;
    const card = data as Record<string, unknown>;

    // Required fields
    if (typeof card.title !== "string" || card.title.length === 0) return false;
    if (typeof card.content !== "string" || card.content.length === 0)
      return false;

    // Optional variant field
    if (card.variant !== undefined) {
      if (
        card.variant !== "default" &&
        card.variant !== "highlight" &&
        card.variant !== "warning"
      ) {
        return false;
      }
    }

    return true;
  }

  // Helper function to validate WorkflowStep structure
  function isValidWorkflowStep(step: unknown): step is WorkflowStep {
    if (typeof step !== "object" || step === null) return false;
    const workflowStep = step as Record<string, unknown>;

    if (typeof workflowStep.number !== "number" || workflowStep.number < 1)
      return false;
    if (
      typeof workflowStep.title !== "string" ||
      workflowStep.title.length === 0
    )
      return false;
    if (
      typeof workflowStep.description !== "string" ||
      workflowStep.description.length === 0
    )
      return false;

    return true;
  }

  // Helper function to validate WorkflowData structure
  function isValidWorkflowData(data: unknown): data is WorkflowData {
    if (typeof data !== "object" || data === null) return false;
    const workflow = data as Record<string, unknown>;

    // Must have steps array
    if (!Array.isArray(workflow.steps) || workflow.steps.length === 0)
      return false;

    // All steps must be valid
    return workflow.steps.every(isValidWorkflowStep);
  }

  // Helper function to validate CodeData structure
  function isValidCodeData(data: unknown): data is CodeData {
    if (typeof data !== "object" || data === null) return false;
    const code = data as Record<string, unknown>;

    // Required fields
    if (typeof code.code !== "string" || code.code.length === 0) return false;
    if (typeof code.language !== "string" || code.language.length === 0)
      return false;

    // Optional title field
    if (code.title !== undefined && typeof code.title !== "string")
      return false;

    return true;
  }

  // Helper function to validate ContentSection structure
  function isValidContentSection(section: unknown): section is ContentSection {
    if (typeof section !== "object" || section === null) return false;
    const contentSection = section as Record<string, unknown>;

    // Must have valid type
    if (
      contentSection.type !== "card" &&
      contentSection.type !== "workflow" &&
      contentSection.type !== "code"
    ) {
      return false;
    }

    // Must have data field
    if (!contentSection.data) return false;

    // Validate data based on type
    switch (contentSection.type) {
      case "card":
        return isValidCardData(contentSection.data);
      case "workflow":
        return isValidWorkflowData(contentSection.data);
      case "code":
        return isValidCodeData(contentSection.data);
      default:
        return false;
    }
  }

  // Helper function to validate TopicContent structure
  function isValidTopicContent(content: unknown): content is TopicContent {
    if (typeof content !== "object" || content === null) return false;
    const topicContent = content as Record<string, unknown>;

    // Must have sections array
    if (!Array.isArray(topicContent.sections)) return false;

    // All sections must be valid
    return topicContent.sections.every(isValidContentSection);
  }

  test("all topics have valid TopicContent structure", () => {
    const allTopics = getAllTopics();

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic: Topic) => {
        // Act: Validate the topic's content structure
        const isValid = isValidTopicContent(topic.content);

        // Assert: Content must conform to TopicContent interface
        expect(isValid).toBe(true);
        expect(topic.content).toBeDefined();
        expect(Array.isArray(topic.content.sections)).toBe(true);
      }),
      { numRuns: 100 },
    );
  });

  test("all content sections have valid type and data structure", () => {
    const allTopics = getAllTopics();
    const allSections = allTopics.flatMap((topic) => topic.content.sections);

    fc.assert(
      fc.property(
        fc.constantFrom(...allSections),
        (section: ContentSection) => {
          // Act: Validate the section structure
          const isValid = isValidContentSection(section);

          // Assert: Section must have valid type and properly structured data
          expect(isValid).toBe(true);
          expect(section.type).toMatch(/^(card|workflow|code)$/);
          expect(section.data).toBeDefined();
        },
      ),
      { numRuns: 100 },
    );
  });

  test("card sections have valid CardData structure", () => {
    const allTopics = getAllTopics();
    const cardSections = allTopics
      .flatMap((topic) => topic.content.sections)
      .filter((section) => section.type === "card");

    if (cardSections.length === 0) {
      // Skip test if no card sections exist
      return;
    }

    fc.assert(
      fc.property(fc.constantFrom(...cardSections), (section) => {
        // Act: Validate CardData structure
        const isValid = isValidCardData(section.data);
        const cardData = section.data as CardData;

        // Assert: CardData must have required fields
        expect(isValid).toBe(true);
        expect(typeof cardData.title).toBe("string");
        expect(cardData.title.length).toBeGreaterThan(0);
        expect(typeof cardData.content).toBe("string");
        expect(cardData.content.length).toBeGreaterThan(0);

        // If variant exists, it must be valid
        if (cardData.variant !== undefined) {
          expect(["default", "highlight", "warning"]).toContain(
            cardData.variant,
          );
        }
      }),
      { numRuns: 100 },
    );
  });

  test("workflow sections have valid WorkflowData structure", () => {
    const allTopics = getAllTopics();
    const workflowSections = allTopics
      .flatMap((topic) => topic.content.sections)
      .filter((section) => section.type === "workflow");

    if (workflowSections.length === 0) {
      // Skip test if no workflow sections exist
      return;
    }

    fc.assert(
      fc.property(fc.constantFrom(...workflowSections), (section) => {
        // Act: Validate WorkflowData structure
        const isValid = isValidWorkflowData(section.data);
        const workflowData = section.data as WorkflowData;

        // Assert: WorkflowData must have valid steps array
        expect(isValid).toBe(true);
        expect(Array.isArray(workflowData.steps)).toBe(true);
        expect(workflowData.steps.length).toBeGreaterThan(0);

        // Each step must have valid structure
        workflowData.steps.forEach((step) => {
          expect(typeof step.number).toBe("number");
          expect(step.number).toBeGreaterThanOrEqual(1);
          expect(typeof step.title).toBe("string");
          expect(step.title.length).toBeGreaterThan(0);
          expect(typeof step.description).toBe("string");
          expect(step.description.length).toBeGreaterThan(0);
        });
      }),
      { numRuns: 100 },
    );
  });

  test("code sections have valid CodeData structure", () => {
    const allTopics = getAllTopics();
    const codeSections = allTopics
      .flatMap((topic) => topic.content.sections)
      .filter((section) => section.type === "code");

    if (codeSections.length === 0) {
      // Skip test if no code sections exist
      return;
    }

    fc.assert(
      fc.property(fc.constantFrom(...codeSections), (section) => {
        // Act: Validate CodeData structure
        const isValid = isValidCodeData(section.data);
        const codeData = section.data as CodeData;

        // Assert: CodeData must have required fields
        expect(isValid).toBe(true);
        expect(typeof codeData.code).toBe("string");
        expect(codeData.code.length).toBeGreaterThan(0);
        expect(typeof codeData.language).toBe("string");
        expect(codeData.language.length).toBeGreaterThan(0);

        // If title exists, it must be a string
        if (codeData.title !== undefined) {
          expect(typeof codeData.title).toBe("string");
        }
      }),
      { numRuns: 100 },
    );
  });

  test("workflow steps are numbered sequentially starting from 1", () => {
    const allTopics = getAllTopics();
    const workflowSections = allTopics
      .flatMap((topic) => topic.content.sections)
      .filter((section) => section.type === "workflow");

    if (workflowSections.length === 0) {
      // Skip test if no workflow sections exist
      return;
    }

    fc.assert(
      fc.property(fc.constantFrom(...workflowSections), (section) => {
        const workflowData = section.data as WorkflowData;

        // Act: Check if steps are numbered sequentially
        const stepNumbers = workflowData.steps.map((step) => step.number);
        const expectedNumbers = Array.from(
          { length: stepNumbers.length },
          (_, i) => i + 1,
        );

        // Assert: Steps should be numbered 1, 2, 3, ...
        expect(stepNumbers).toEqual(expectedNumbers);
      }),
      { numRuns: 100 },
    );
  });

  test("all topics have at least one content section", () => {
    const allTopics = getAllTopics();

    fc.assert(
      fc.property(fc.constantFrom(...allTopics), (topic: Topic) => {
        // Act: Check sections array length
        const sectionCount = topic.content.sections.length;

        // Assert: Every topic must have at least one section
        expect(sectionCount).toBeGreaterThan(0);
      }),
      { numRuns: 100 },
    );
  });

  test("content sections do not have unexpected properties", () => {
    const allTopics = getAllTopics();
    const allSections = allTopics.flatMap((topic) => topic.content.sections);

    fc.assert(
      fc.property(fc.constantFrom(...allSections), (section) => {
        // Act: Check section properties
        const sectionKeys = Object.keys(section);

        // Assert: Section should only have 'type' and 'data' properties
        expect(sectionKeys).toEqual(expect.arrayContaining(["type", "data"]));
        expect(sectionKeys.length).toBe(2);
      }),
      { numRuns: 100 },
    );
  });
});
