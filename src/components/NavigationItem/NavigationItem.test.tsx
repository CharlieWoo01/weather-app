import { screen } from "@testing-library/react";
import { FaHome, FaCog } from "react-icons/fa";
import NavigationItem, { NavigationItemProps } from "./NavigationItem";
import { renderComponentWithProviders } from "../../test-utils";

const renderComponent = (props: NavigationItemProps) =>
  renderComponentWithProviders(<NavigationItem {...props} />);

describe("<NavigationItem />", () => {
  it("renders the icon and label correctly", () => {
    renderComponent({
      icon: <FaHome />,
      label: "Home",
      link: "/home",
    });

    expect(screen.getByText("Home")).toBeInTheDocument();

    const icon = screen.getByTestId("icon-svg");
    expect(icon).toBeInTheDocument();
  });

  it("renders the label with correct class", () => {
    const { container } = renderComponent({
      icon: <FaHome />,
      label: "Home",
      link: "/home",
    });

    const label = container.querySelector("p");
    expect(label).toHaveClass("text-gray-400 text-xs font-semibold");
  });

  it("renders the correct link with href", () => {
    renderComponent({
      icon: <FaHome />,
      label: "Home",
      link: "/home",
    });

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/home");
  });

  it("renders a different icon and label correctly", () => {
    renderComponent({
      icon: <FaCog />,
      label: "Settings",
      link: "/settings",
    });

    expect(screen.getByText("Settings")).toBeInTheDocument();
    const icon = screen.getByTestId("icon-svg");
    expect(icon).toBeInTheDocument();
  });

  it("does not render an invalid link", () => {
    renderComponent({
      icon: <FaHome />,
      label: "Home",
      link: "",
    });

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
