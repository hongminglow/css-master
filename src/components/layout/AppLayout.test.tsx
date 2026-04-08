import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppLayout } from "./AppLayout";

describe("AppLayout", () => {
  it("renders sidebar and main content", () => {
    const sidebar = <div data-testid="sidebar">Sidebar Content</div>;
    const mainContent = <div data-testid="main-content">Main Content</div>;

    render(<AppLayout sidebar={sidebar} mainContent={mainContent} />);

    expect(screen.getByTestId("sidebar")).toBeDefined();
    expect(screen.getByTestId("main-content")).toBeDefined();
    expect(screen.getByTestId("sidebar").textContent).toBe("Sidebar Content");
    expect(screen.getByTestId("main-content").textContent).toBe("Main Content");
  });

  it("applies dark theme background classes", () => {
    const sidebar = <div>Sidebar</div>;
    const mainContent = <div>Main</div>;

    const { container } = render(
      <AppLayout sidebar={sidebar} mainContent={mainContent} />,
    );

    // Check that the root div has dark theme background
    const rootDiv = container.firstChild as HTMLElement;
    expect(rootDiv.className).toContain("bg-slate-900");
  });

  it("renders sidebar with fixed positioning", () => {
    const sidebar = <div data-testid="sidebar">Sidebar</div>;
    const mainContent = <div>Main</div>;

    const { container } = render(
      <AppLayout sidebar={sidebar} mainContent={mainContent} />,
    );

    const sidebarElement = container.querySelector("aside");
    expect(sidebarElement).toBeDefined();
    expect(sidebarElement?.className).toContain("fixed");
    expect(sidebarElement?.className).toContain("w-64");
    expect(sidebarElement?.className).toContain("h-screen");
  });

  it("renders main content with offset for sidebar", () => {
    const sidebar = <div>Sidebar</div>;
    const mainContent = <div data-testid="main-content">Main</div>;

    const { container } = render(
      <AppLayout sidebar={sidebar} mainContent={mainContent} />,
    );

    const mainElement = container.querySelector("main");
    expect(mainElement).toBeDefined();
    expect(mainElement?.className).toContain("ml-64"); // Offset by sidebar width
    expect(mainElement?.className).toContain("flex-1");
  });

  it("applies border to sidebar", () => {
    const sidebar = <div>Sidebar</div>;
    const mainContent = <div>Main</div>;

    const { container } = render(
      <AppLayout sidebar={sidebar} mainContent={mainContent} />,
    );

    const sidebarElement = container.querySelector("aside");
    expect(sidebarElement).toBeDefined();
    expect(sidebarElement?.className).toContain("border-r");
    expect(sidebarElement?.className).toContain("border-slate-700");
  });
});
