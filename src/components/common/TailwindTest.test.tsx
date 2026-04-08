import { TailwindTest } from "@/components/common/TailwindTest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("TailwindTest Component", () => {
  it("should render the component", () => {
    render(<TailwindTest />);

    expect(screen.getByText("Tailwind 4 Dark Theme Test")).toBeDefined();
  });

  it("should display color palette section", () => {
    render(<TailwindTest />);

    expect(screen.getByText("Color Palette")).toBeDefined();
    expect(screen.getByText("slate-900")).toBeDefined();
    expect(screen.getByText("blue-600")).toBeDefined();
  });

  it("should display typography section", () => {
    render(<TailwindTest />);

    expect(screen.getByText("Typography")).toBeDefined();
    expect(screen.getByText(/Body text using IBM Plex Sans/)).toBeDefined();
    expect(screen.getByText(/Code text using JetBrains Mono/)).toBeDefined();
  });

  it("should display interactive elements", () => {
    render(<TailwindTest />);

    expect(screen.getByText("Interactive Elements")).toBeDefined();
    expect(screen.getByText("Primary Button")).toBeDefined();
    expect(screen.getByText("Secondary Button")).toBeDefined();
  });

  it("should display code block section", () => {
    render(<TailwindTest />);

    expect(screen.getByText("Code Block")).toBeDefined();
    expect(screen.getByText(/display: flex/)).toBeDefined();
  });

  it("should display shadow depths section", () => {
    render(<TailwindTest />);

    expect(screen.getByText("Shadow Depths")).toBeDefined();
    expect(screen.getByText("shadow-sm")).toBeDefined();
    expect(screen.getByText("shadow-xl")).toBeDefined();
  });
});
