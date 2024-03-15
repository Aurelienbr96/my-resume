import { render, screen } from "../../../../../testing";
import { TextArea } from "../TextArea";

describe("TextArea", () => {
  it("renders an Input test", () => {
    render(<TextArea />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
