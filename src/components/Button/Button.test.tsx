import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies primary variant by default", () => {
    render(<Button testId="btn">Click me</Button>);
    const button = screen.getByTestId("btn");
    // CSS modules mangle class names, check for partial match
    expect(button.className).toMatch(/primary/i);
  });

  it("applies icon variant when specified", () => {
    render(
      <Button variant="icon" testId="btn">
        X
      </Button>
    );
    const button = screen.getByTestId("btn");
    // CSS modules mangle class names, check for partial match
    expect(button.className).toMatch(/icon/i);
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(
      <Button className="custom-class" testId="btn">
        Click me
      </Button>
    );
    const button = screen.getByTestId("btn");
    expect(button).toHaveClass("custom-class");
  });

  it("is disabled when disabled prop is passed", () => {
    render(
      <Button disabled testId="btn">
        Click me
      </Button>
    );
    const button = screen.getByTestId("btn");
    expect(button).toBeDisabled();
  });

  it("passes through additional HTML attributes", () => {
    render(
      <Button type="submit" testId="btn">
        Submit
      </Button>
    );
    const button = screen.getByTestId("btn");
    expect(button).toHaveAttribute("type", "submit");
  });
});
