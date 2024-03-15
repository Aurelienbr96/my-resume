import { fireEvent, render, screen } from "../../../../../testing";
import { Switch } from "../Switch";

describe("Switch", () => {
  it("renders a switch", () => {
    const mockFn = jest.fn(() => {});
    render(<Switch checked onChange={mockFn} />);

    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("fires an onChange event", () => {
    const mockFn = jest.fn(() => {});
    render(<Switch checked onChange={mockFn} />);
    const checkbox = screen.getByRole("switch");
    expect(checkbox).toHaveAttribute("aria-checked", "true");

    fireEvent.click(checkbox);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
