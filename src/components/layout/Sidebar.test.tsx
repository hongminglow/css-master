/**
 * Tests for Sidebar component
 * Validates: Requirements 2.1, 2.2, 1.1
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Category } from "../../types/category";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  const mockCategories: Category[] = [
    {
      id: "layout",
      name: "Layout",
      description: "CSS layout techniques",
      order: 1,
    },
    {
      id: "visual-effects",
      name: "Visual Effects",
      description: "Styling tricks",
      order: 2,
    },
    {
      id: "animations",
      name: "Animations",
      description: "CSS animations",
      order: 3,
    },
  ];

  const mockOnTopicSelect = vi.fn();

  it("renders all categories", () => {
    render(
      <Sidebar
        categories={mockCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    expect(screen.getByText("Layout")).toBeInTheDocument();
    expect(screen.getByText("Visual Effects")).toBeInTheDocument();
    expect(screen.getByText("Animations")).toBeInTheDocument();
  });

  it("renders with dark theme styling", () => {
    const { container } = render(
      <Sidebar
        categories={mockCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    const aside = container.querySelector("aside");
    expect(aside).toHaveClass("bg-slate-900");
  });

  it("renders with fixed positioning", () => {
    const { container } = render(
      <Sidebar
        categories={mockCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    const aside = container.querySelector("aside");
    expect(aside).toHaveClass("fixed");
  });

  it("displays platform title and description", () => {
    render(
      <Sidebar
        categories={mockCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    expect(screen.getByText("CSS Tricks")).toBeInTheDocument();
    expect(
      screen.getByText("Discover overlooked CSS techniques"),
    ).toBeInTheDocument();
  });

  it("sorts categories by order property", () => {
    const unsortedCategories: Category[] = [
      {
        id: "animations",
        name: "Animations",
        description: "CSS animations",
        order: 3,
      },
      {
        id: "layout",
        name: "Layout",
        description: "CSS layout techniques",
        order: 1,
      },
      {
        id: "visual-effects",
        name: "Visual Effects",
        description: "Styling tricks",
        order: 2,
      },
    ];

    render(
      <Sidebar
        categories={unsortedCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    const categoryButtons = screen.getAllByRole("button");
    expect(categoryButtons[0]).toHaveTextContent("Layout");
    expect(categoryButtons[1]).toHaveTextContent("Visual Effects");
    expect(categoryButtons[2]).toHaveTextContent("Animations");
  });

  it("expands category on click", () => {
    render(
      <Sidebar
        categories={mockCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    const visualEffectsButton = screen.getByText("Visual Effects");
    fireEvent.click(visualEffectsButton);

    // Check if the chevron icon rotated (expanded state)
    const svg = visualEffectsButton.parentElement?.querySelector("svg");
    expect(svg).toHaveClass("rotate-90");
  });

  it("collapses expanded category on click", () => {
    render(
      <Sidebar
        categories={mockCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    // Layout is expanded by default
    const layoutButton = screen.getByText("Layout");
    const svg = layoutButton.parentElement?.querySelector("svg");
    expect(svg).toHaveClass("rotate-90");

    // Click to collapse
    fireEvent.click(layoutButton);
    expect(svg).not.toHaveClass("rotate-90");
  });

  it("allows multiple categories to be expanded simultaneously", () => {
    render(
      <Sidebar
        categories={mockCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    // Layout is expanded by default
    const layoutSvg = screen
      .getByText("Layout")
      .parentElement?.querySelector("svg");
    expect(layoutSvg).toHaveClass("rotate-90");

    // Expand Visual Effects
    const visualEffectsButton = screen.getByText("Visual Effects");
    fireEvent.click(visualEffectsButton);

    const visualEffectsSvg =
      visualEffectsButton.parentElement?.querySelector("svg");
    expect(visualEffectsSvg).toHaveClass("rotate-90");

    // Both should be expanded
    expect(layoutSvg).toHaveClass("rotate-90");
    expect(visualEffectsSvg).toHaveClass("rotate-90");
  });

  it("has hover states for category buttons", () => {
    render(
      <Sidebar
        categories={mockCategories}
        currentTopicId={null}
        onTopicSelect={mockOnTopicSelect}
      />,
    );

    const layoutButton = screen.getByText("Layout").parentElement;
    expect(layoutButton).toHaveClass("hover:bg-slate-800");
    expect(layoutButton).toHaveClass("hover:text-white");
  });
});
