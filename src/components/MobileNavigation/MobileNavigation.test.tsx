import { screen } from "@testing-library/react";
import MobileNavigation from "./MobileNavigation";
import { renderComponentWithProviders } from "../../test-utils";

const renderComponent = () =>
  renderComponentWithProviders(<MobileNavigation />);

describe("<MobileNavigation />", () => {
  it("renders the correct navigation items with labels", () => {
    renderComponent();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders the icons", () => {
    const { container } = renderComponent();

    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(2);
  });
});
