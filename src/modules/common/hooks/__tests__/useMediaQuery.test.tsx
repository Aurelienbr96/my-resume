import { renderHook } from "@testing-library/react";
import useMediaQuery from "../useMediaQuery";

// mocking global property window
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query === "(max-width: 640px)",
      addEventListener: jest.fn((_event, handler) =>
        handler({ matches: query === "(max-width: 640px)" }),
      ),
      removeEventListener: jest.fn(),
    })),
  });
});

describe("useMediaQuery", () => {
  test("returns true for matches", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 640px)"));
    expect(result.current).toBe(true);
  });

  test("returns false for non-matches", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 641px)"));
    expect(result.current).toBe(false);
  });
});
