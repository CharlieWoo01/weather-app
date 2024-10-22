import { screen } from "@testing-library/react";
import DesktopNavigation from "./DesktopMenu";
import { renderComponentWithProviders } from "../../test-utils";

const renderComponent = () =>
  renderComponentWithProviders(<DesktopNavigation />);

describe("<DesktopNavigation />", () => {
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
