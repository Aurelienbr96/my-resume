import { render, screen } from "../../../../../testing";
import { InputText } from "../InputText";

describe("InputText", () => {
  it("renders an Input test", () => {
    render(<InputText />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
