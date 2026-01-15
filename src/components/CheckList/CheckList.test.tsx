import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CheckList from "./CheckList";

describe("CheckList", () => {
  const defaultProps = {
    items: [
      "Fast approval process",
      "Flexible repayment terms",
      "Competitive interest rates",
    ],
    checkIcon: "/check-icon.png",
  };

  it("renders all items", () => {
    render(<CheckList {...defaultProps} />);
    expect(screen.getByText("Fast approval process")).toBeInTheDocument();
    expect(screen.getByText("Flexible repayment terms")).toBeInTheDocument();
    expect(screen.getByText("Competitive interest rates")).toBeInTheDocument();
  });

  it("renders correct number of list items", () => {
    render(<CheckList {...defaultProps} testId="checklist" />);
    const list = screen.getByTestId("checklist");
    const items = list.querySelectorAll("li");
    expect(items).toHaveLength(3);
  });

  it("applies custom className", () => {
    render(
      <CheckList
        {...defaultProps}
        className="custom-class"
        testId="checklist"
      />
    );
    const list = screen.getByTestId("checklist");
    expect(list).toHaveClass("custom-class");
  });

  it("renders as an unordered list", () => {
    render(<CheckList {...defaultProps} testId="checklist" />);
    const list = screen.getByTestId("checklist");
    expect(list.tagName).toBe("UL");
  });

  it("renders empty list when no items provided", () => {
    render(
      <CheckList items={[]} checkIcon="/check-icon.png" testId="checklist" />
    );
    const list = screen.getByTestId("checklist");
    const items = list.querySelectorAll("li");
    expect(items).toHaveLength(0);
  });

  it("generates unique test ids for each item", () => {
    render(<CheckList {...defaultProps} testId="checklist" />);
    expect(screen.getByTestId("checklist-item-0")).toBeInTheDocument();
    expect(screen.getByTestId("checklist-item-1")).toBeInTheDocument();
    expect(screen.getByTestId("checklist-item-2")).toBeInTheDocument();
  });
});
