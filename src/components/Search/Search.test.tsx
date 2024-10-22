import { screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Search from "./Search";
import { renderComponentWithProviders } from "../../test-utils";

const mockOnChange = vi.fn();
const mockOnKeyDown = vi.fn();

const renderComponent = (props = {}) =>
  renderComponentWithProviders(
    <Search
      onChange={mockOnChange}
      onKeyDown={mockOnKeyDown}
      value="test"
      placeholder="Search..."
      {...props}
    />
  );

describe("<Search />", () => {
  it("renders the input element with the correct placeholder", () => {
    renderComponent();

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  it("renders the input element with the correct value", () => {
    renderComponent();

    const input = screen.getByDisplayValue("test");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange when typing in the input", () => {
    renderComponent();

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(mockOnChange).toHaveBeenCalled();
  });

  it("calls onKeyDown when a key is pressed", () => {
    renderComponent();

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(mockOnKeyDown).toHaveBeenCalled();
  });

  it("applies the custom className", () => {
    renderComponent({ className: "custom-class" });

    const container = screen.getByRole("textbox").parentElement;
    expect(container).toHaveClass("custom-class");
  });
});
