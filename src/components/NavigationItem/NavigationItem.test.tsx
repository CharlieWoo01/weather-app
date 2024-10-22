import { render, screen } from "@testing-library/react";
import { FaHome } from "react-icons/fa";
import NavigationItem from "./NavigationItem";

describe("<NavigationItem />", () => {
  it("renders the icon and label correctly", () => {
    render(<NavigationItem icon={<FaHome />} label="Home" />);

    expect(screen.getByText("Home")).toBeInTheDocument();

    const icon = screen.getByTestId("icon-svg");
    expect(icon).toBeInTheDocument();
  });

  it("renders the label with correct class", () => {
    const { container } = render(
      <NavigationItem icon={<FaHome />} label="Home" />
    );

    const label = container.querySelector("p");
    expect(label).toHaveClass("text-gray-400 text-xs mt-1");
  });
});
