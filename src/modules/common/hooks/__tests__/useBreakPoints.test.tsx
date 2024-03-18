import { renderHook } from "@testing-library/react";
import useMediaQuery from "../useMediaQuery";
import useBreakpoints from "../useBreakPoints";

jest.mock("../useMediaQuery", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("useBreakpoints", () => {
  // Test for isXs
  it("returns isXs as true when width is <= 640px", () => {
    (useMediaQuery as jest.Mock).mockImplementation(
      (query) => query === "(max-width: 640px)",
    );
    const { result } = renderHook(() => useBreakpoints());
    expect(result.current.isXs).toBe(true);
    expect(result.current.active).toBe("xs");
  });

  it("returns isSm as true when width is between 641px and 768px", () => {
    (useMediaQuery as jest.Mock).mockImplementation(
      (query) => query === "(min-width: 641px) and (max-width: 768px)",
    );
    const { result } = renderHook(() => useBreakpoints());
    expect(result.current.isSm).toBe(true);
    expect(result.current.active).toBe("sm");
  });

  it("returns isMd as true when width is between 769px and 1024px", () => {
    (useMediaQuery as jest.Mock).mockImplementation(
      (query) => query === "(min-width: 769px) and (max-width: 1024px)",
    );
    const { result } = renderHook(() => useBreakpoints());
    expect(result.current.isMd).toBe(true);
    expect(result.current.active).toBe("md");
  });

  it("returns isLg as true when width is >= 1024px", () => {
    (useMediaQuery as jest.Mock).mockImplementation(
      (query) => query === "(min-width: 1025px)",
    );
    const { result } = renderHook(() => useBreakpoints());
    expect(result.current.isLg).toBe(true);
    expect(result.current.active).toBe("lg");
  });
});
