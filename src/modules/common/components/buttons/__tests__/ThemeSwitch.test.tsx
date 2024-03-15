import { fireEvent, render, screen } from "../../../../../testing";
import { ThemeSwitch } from "../ThemeSwitch";

describe("ThemeSwitch", () => {
  it("toggles theme from light to dark", () => {
    const handleOnChange = jest.fn();

    render(<ThemeSwitch />, { isDarkMode: false, handleOnChange });

    const switchButton = screen.getByRole("switch");
    expect(switchButton).not.toBeChecked();

    fireEvent.click(switchButton);

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });

  it("renders the correct icons", () => {
    const handleOnChange = jest.fn();
    render(<ThemeSwitch />, { isDarkMode: false, handleOnChange });

    expect(screen.getByTestId("io-sunny")).toBeInTheDocument();
    expect(screen.getByTestId("io-moon")).toBeInTheDocument();
  });
});
