import { render, screen } from "../../../../../testing";
import { ErrorComp } from "../ErrorComp";

describe("ErrorComp", () => {
  it("renders a default text", () => {
    render(<ErrorComp />);

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });
  it("renders a text", () => {
    render(<ErrorComp>error</ErrorComp>);

    expect(screen.getByText("error")).toBeInTheDocument();
  });
});
