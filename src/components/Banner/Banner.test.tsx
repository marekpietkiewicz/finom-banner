import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { t } from "../../i18n";
import Banner from "./Banner";

describe("Banner", () => {
  const defaultProps = {
    title: t.banner.title,
    description: t.banner.description,
    checklistItems: t.banner.checklistItems,
    primaryButtonText: t.banner.primaryButtonText,
    secondaryLinkText: t.banner.secondaryLinkText,
    secondaryLinkHref: "https://finom.co",
    coinImageSrc: "/coins.png",
    onClose: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders title correctly", () => {
    render(<Banner {...defaultProps} />);
    expect(screen.getByText(t.banner.title)).toBeInTheDocument();
  });

  it("renders description correctly", () => {
    render(<Banner {...defaultProps} />);
    expect(screen.getByText(t.banner.description)).toBeInTheDocument();
  });

  it("renders primary button with correct text", () => {
    render(<Banner {...defaultProps} />);
    expect(screen.getByText(t.banner.primaryButtonText)).toBeInTheDocument();
  });

  it("renders secondary link with correct text and href", () => {
    render(<Banner {...defaultProps} testId="banner" />);
    const link = screen.getByTestId("banner-secondary-link");
    expect(link).toHaveTextContent(t.banner.secondaryLinkText);
    expect(link).toHaveAttribute("href", "https://finom.co");
  });

  it("secondary link opens in new tab", () => {
    render(<Banner {...defaultProps} testId="banner" />);
    const link = screen.getByTestId("banner-secondary-link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(<Banner {...defaultProps} onClose={onClose} testId="banner" />);
    const closeButton = screen.getByTestId("banner-close");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onPrimaryClick when primary button is clicked", () => {
    const onPrimaryClick = vi.fn();
    render(
      <Banner
        {...defaultProps}
        onPrimaryClick={onPrimaryClick}
        testId="banner"
      />
    );
    const primaryButton = screen.getByTestId("banner-primary-btn");
    fireEvent.click(primaryButton);
    expect(onPrimaryClick).toHaveBeenCalledTimes(1);
  });

  it("renders coin image with correct alt text", () => {
    render(<Banner {...defaultProps} />);
    const image = screen.getByAltText("Coins illustration");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/coins.png");
  });

  it("renders checklist items (desktop version)", () => {
    render(<Banner {...defaultProps} testId="banner" />);
    // Check for the items in the desktop checklist
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

  it("has banner role", () => {
    render(<Banner {...defaultProps} testId="banner" />);
    const banner = screen.getByTestId("banner");
    expect(banner).toHaveAttribute("role", "banner");
  });

  it("close button has accessible label", () => {
    render(<Banner {...defaultProps} />);
    expect(
      screen.getByLabelText(t.banner.closeButtonAriaLabel)
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Banner {...defaultProps} className="custom-class" testId="banner" />
    );
    const banner = screen.getByTestId("banner");
    expect(banner).toHaveClass("custom-class");
  });
});
