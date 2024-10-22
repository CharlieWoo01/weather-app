import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import RadioSlider from "./RadioSlider";

const mockOnChange = vi.fn();

const renderComponent = (value: boolean) => {
  return render(
    <RadioSlider
      value={value}
      onChange={mockOnChange}
      leftLabel="Off"
      rightLabel="On"
    />
  );
};

describe("<RadioSlider />", () => {
  it("renders with the correct labels", () => {
    renderComponent(true);

    expect(screen.getByText("Off")).toBeInTheDocument();
    expect(screen.getByText("On")).toBeInTheDocument();
  });

  it("renders with the checkbox checked when value is true", () => {
    renderComponent(true);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("renders with the checkbox unchecked when value is false", () => {
    renderComponent(false);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("calls onChange when the checkbox is toggled", () => {
    renderComponent(false);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it("calls onChange with false when toggled from true to false", () => {
    renderComponent(true);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledWith(false);
  });
});
