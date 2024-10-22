import { screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import RadioGroup from "./RadioGroup";
import { renderComponentWithProviders } from "../../test-utils";

const options = [
  { labelLeft: "Option 1", labelRight: "Choice 1" },
  { labelLeft: "Option 2", labelRight: "Choice 2" },
];
const values = [true, false];
const mockOnChange = vi.fn();

const renderComponent = (props = {}) =>
  renderComponentWithProviders(
    <RadioGroup
      options={options}
      values={values}
      onChange={mockOnChange}
      {...props}
    />
  );

describe("<RadioGroup />", () => {
  it("renders the correct number of <RadioSlider/> components", () => {
    renderComponent();
    const radioSliders = screen.getAllByRole("checkbox");
    expect(radioSliders).toHaveLength(options.length);
  });

  it("passes the correct values to each <RadioSlider/>", () => {
    renderComponent();

    const inputs = screen.getAllByRole("checkbox");
    expect(inputs[0]).toBeChecked();
    expect(inputs[1]).not.toBeChecked();
  });

  it("calls onChange with the correct index and value", () => {
    renderComponent();

    const inputs = screen.getAllByRole("checkbox");

    fireEvent.click(inputs[1]);

    expect(mockOnChange).toHaveBeenCalledWith(1, true);
  });

  it("displays correct labels for each <RadioSlider />", () => {
    renderComponent();

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Choice 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Choice 2")).toBeInTheDocument();
  });
});
