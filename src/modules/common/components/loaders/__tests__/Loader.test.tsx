import { render, screen } from "../../../../../testing";
import { Loader } from "../Loader";

describe("Loader", () => {
  it("renders a loader", () => {
    render(<Loader dataTestId="loader" />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
