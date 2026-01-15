import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { t } from "./i18n";
import App from "./App";

// Mock window.open
const mockOpen = vi.fn();
Object.defineProperty(window, "open", {
  value: mockOpen,
  writable: true,
});

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the banner by default", () => {
    render(<App />);
    expect(screen.getByText(t.banner.title)).toBeInTheDocument();
  });

  it("removes banner from DOM when close button is clicked", () => {
    render(<App />);
    const closeButton = screen.getByLabelText(t.banner.closeButtonAriaLabel);
    fireEvent.click(closeButton);
    expect(screen.queryByText(t.banner.title)).not.toBeInTheDocument();
  });

  it("shows the banner again when Show Again button is clicked", () => {
    render(<App />);

    // Close the banner
    const closeButton = screen.getByLabelText(t.banner.closeButtonAriaLabel);
    fireEvent.click(closeButton);

    // Click Show Again
    const showAgainButton = screen.getByText(t.app.showAgainButton);
    fireEvent.click(showAgainButton);

    expect(screen.getByText(t.banner.title)).toBeInTheDocument();
  });

  it("opens finom.co when Apply Now is clicked", () => {
    render(<App />);
    const applyButton = screen.getByText(t.banner.primaryButtonText);
    fireEvent.click(applyButton);
    expect(mockOpen).toHaveBeenCalledWith(
      "https://finom.co",
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("renders the checklist items", () => {
    render(<App />);
    expect(
      screen.getAllByText(t.banner.checklistItems[0]).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(t.banner.checklistItems[1]).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText(t.banner.checklistItems[2]).length
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders More Information link with correct href", () => {
    render(<App />);
    const links = screen.getAllByText(t.banner.secondaryLinkText);
    expect(links[0]).toHaveAttribute("href", "https://finom.co");
  });
});
