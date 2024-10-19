import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card/>", () => {
  it("renders the title and children", () => {
    render(
      <Card title="Test Title">
        <p>Test Content</p>
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom class names", () => {
    const { container } = render(
      <Card title="Test Title" className="custom-class">
        <p>Test Content</p>
      </Card>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
