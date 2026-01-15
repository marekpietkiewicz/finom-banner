import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CheckListItem from "./CheckListItem";

describe("CheckListItem", () => {
  const defaultProps = {
    text: "Fast approval process",
    checkIcon: "/check-icon.png",
  };

  it("renders text correctly", () => {
    render(
      <ul>
        <CheckListItem {...defaultProps} />
      </ul>
    );
    expect(screen.getByText("Fast approval process")).toBeInTheDocument();
  });

  it("renders check icon", () => {
    render(
      <ul>
        <CheckListItem {...defaultProps} testId="check-item" />
      </ul>
    );
    const item = screen.getByTestId("check-item");
    const img = item.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/check-icon.png");
  });

  it("check icon is hidden from screen readers", () => {
    render(
      <ul>
        <CheckListItem {...defaultProps} testId="check-item" />
      </ul>
    );
    const item = screen.getByTestId("check-item");
    const img = item.querySelector("img");
    expect(img).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom className", () => {
    render(
      <ul>
        <CheckListItem
          {...defaultProps}
          className="custom-class"
          testId="check-item"
        />
      </ul>
    );
    const item = screen.getByTestId("check-item");
    expect(item).toHaveClass("custom-class");
  });

  it("renders as a list item", () => {
    render(
      <ul>
        <CheckListItem {...defaultProps} testId="check-item" />
      </ul>
    );
    const item = screen.getByTestId("check-item");
    expect(item.tagName).toBe("LI");
  });
});
