import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Link from "./Link";

describe("Link", () => {
  it("renders children correctly", () => {
    render(<Link href="/test">Click here</Link>);
    expect(screen.getByText("Click here")).toBeInTheDocument();
  });

  it("applies href attribute", () => {
    render(
      <Link href="https://example.com" testId="link">
        Link
      </Link>
    );
    const link = screen.getByTestId("link");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("opens in new tab when external is true", () => {
    render(
      <Link href="https://example.com" external testId="link">
        External Link
      </Link>
    );
    const link = screen.getByTestId("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not have external attributes when external is false", () => {
    render(
      <Link href="/internal" testId="link">
        Internal Link
      </Link>
    );
    const link = screen.getByTestId("link");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("applies custom className", () => {
    render(
      <Link href="/test" className="custom-class" testId="link">
        Link
      </Link>
    );
    const link = screen.getByTestId("link");
    expect(link).toHaveClass("custom-class");
  });

  it("passes through additional HTML attributes", () => {
    render(
      <Link href="/test" title="Link title" testId="link">
        Link
      </Link>
    );
    const link = screen.getByTestId("link");
    expect(link).toHaveAttribute("title", "Link title");
  });
});
