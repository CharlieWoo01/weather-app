import { render, screen } from "@testing-library/react";
import { DesktopNavigation } from "./DesktopMenu";

describe("<DesktopNavigation />", () => {
  it("renders the correct navigation items with labels", () => {
    render(<DesktopNavigation />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Weather")).toBeInTheDocument();
    expect(screen.getByText("Favourites")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders the icons", () => {
    const { container } = render(<DesktopNavigation />);

    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(4);
  });
});
