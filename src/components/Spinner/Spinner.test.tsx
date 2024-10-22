import { screen } from "@testing-library/react";
import Spinner from "./Spinner";
import { renderComponentWithProviders } from "../../test-utils";

const renderComponent = () => renderComponentWithProviders(<Spinner />);

describe("<Spinner />", () => {
  it("renders the Spinner component", () => {
    renderComponent();

    const svgElement = screen.getByTestId("spinner-svg");
    expect(svgElement).toBeInTheDocument();
  });

  it("renders both circle elements", () => {
    renderComponent();

    const circle1 = screen.getByTestId("spinner-circle-1");
    const circle2 = screen.getByTestId("spinner-circle-2");
    expect(circle1).toBeInTheDocument();
    expect(circle2).toBeInTheDocument();
  });

  it("renders the correct number of polylines in the first group", () => {
    renderComponent();

    const polylinesGroup1 = [];
    for (let i = 0; i < 8; i++) {
      polylinesGroup1.push(screen.getByTestId(`polyline-${i}-1`));
    }
    expect(polylinesGroup1).toHaveLength(8);
  });

  it("renders the correct number of polylines in the second group", () => {
    renderComponent();

    const polylinesGroup2 = [];
    for (let i = 0; i < 8; i++) {
      polylinesGroup2.push(screen.getByTestId(`polyline-${i}-2`));
    }
    expect(polylinesGroup2).toHaveLength(8);
  });

  it("renders the arrow elements in the first group", () => {
    renderComponent();

    const arrow1 = screen.getByTestId("arrow-1-1");
    const arrow2 = screen.getByTestId("arrow-1-2");
    expect(arrow1).toBeInTheDocument();
    expect(arrow2).toBeInTheDocument();
  });

  it("renders the arrow elements in the second group", () => {
    renderComponent();

    const arrow1 = screen.getByTestId("arrow-2-1");
    const arrow2 = screen.getByTestId("arrow-2-2");
    expect(arrow1).toBeInTheDocument();
    expect(arrow2).toBeInTheDocument();
  });
});
