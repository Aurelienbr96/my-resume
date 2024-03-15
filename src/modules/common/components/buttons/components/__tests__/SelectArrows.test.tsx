import { render, screen } from "../../../../../../testing";
import { SelectArrows } from "../SelectArrows";

describe("SelectArrows", () => {
  it("renders an up icon when isOpen is at true", () => {
    render(<SelectArrows isOpen />);

    expect(screen.getByTestId("filter-up-icon")).toBeInTheDocument();
  });
  it("renders a down icon when isOpen is at true", () => {
    render(<SelectArrows isOpen={false} />);

    expect(screen.getByTestId("filter-down-icon")).toBeInTheDocument();
  });
});
