import { render, screen } from "../../../../testing";
import { Menu } from "../Menu";
import useBreakpoints from "../../../common/hooks/useBreakPoints";

jest.mock("../../../common/hooks/useBreakPoints", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    isXs: false,
  })),
}));

describe("Menu", () => {
  it("renders a desktop menu when isXs is at false", () => {
    render(<Menu />);

    expect(screen.getByTestId("desktop-menu-container")).toBeInTheDocument();
  });

  it("renders a mobile menu when isXs is at true", () => {
    const useBreakPointsMock = {
      isXs: true,
    };

    (useBreakpoints as jest.Mock).mockReturnValueOnce(useBreakPointsMock);
    render(<Menu />);

    expect(screen.getByTestId("mobile-menu-container")).toBeInTheDocument();
  });
});
