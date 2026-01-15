import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import IconButton from "./IconButton";

describe("IconButton", () => {
  const defaultProps = {
    icon: "/test-icon.png",
    ariaLabel: "Close",
  };

  it("renders with correct aria-label", () => {
    render(<IconButton {...defaultProps} />);
    expect(screen.getByLabelText("Close")).toBeInTheDocument();
  });

  it("renders icon image", () => {
    render(<IconButton {...defaultProps} testId="icon-btn" />);
    const button = screen.getByTestId("icon-btn");
    const img = button.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test-icon.png");
  });

  it("icon image is hidden from screen readers", () => {
    render(<IconButton {...defaultProps} testId="icon-btn" />);
    const button = screen.getByTestId("icon-btn");
    const img = button.querySelector("img");
    expect(img).toHaveAttribute("aria-hidden", "true");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<IconButton {...defaultProps} onClick={handleClick} />);
    fireEvent.click(screen.getByLabelText("Close"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(
      <IconButton
        {...defaultProps}
        className="custom-class"
        testId="icon-btn"
      />
    );
    const button = screen.getByTestId("icon-btn");
    expect(button).toHaveClass("custom-class");
  });

  it("is disabled when disabled prop is passed", () => {
    render(<IconButton {...defaultProps} disabled testId="icon-btn" />);
    const button = screen.getByTestId("icon-btn");
    expect(button).toBeDisabled();
  });

  it('has type="button" by default', () => {
    render(<IconButton {...defaultProps} testId="icon-btn" />);
    const button = screen.getByTestId("icon-btn");
    expect(button).toHaveAttribute("type", "button");
  });
});
