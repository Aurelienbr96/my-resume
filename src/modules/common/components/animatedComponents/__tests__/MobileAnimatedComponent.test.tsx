import { render, screen } from "../../../../../testing";
import useBreakpoints from "../../../hooks/useBreakPoints";

import { MobileAnimatedComponent } from "../MobileAnimatedComponent";

jest.mock("../../../hooks/useBreakPoints", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../AnimatedComponent", () => ({
  AnimatedComponent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="animated-component">{children}</div>
  ),
}));

describe("MobileAnimatedComponent", () => {
  const testChildren = <div data-testid="test-children">Test</div>;
  const animationClass = "fade-in";
  const onAnimationEnd = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders children directly when isXs is true", () => {
    (useBreakpoints as jest.Mock).mockReturnValue({ isXs: true });
    render(
      <MobileAnimatedComponent
        animationClass={animationClass}
        onAnimationEnd={onAnimationEnd}
        activeAnimation={1}
        animationIndex={0}
      >
        {testChildren}
      </MobileAnimatedComponent>,
    );

    expect(screen.getByTestId("test-children")).toBeInTheDocument();
    expect(screen.queryByTestId("animated-component")).not.toBeInTheDocument();
  });

  it("wraps children with AnimatedComponent when isXs is false and activeAnimation >= animationIndex", () => {
    (useBreakpoints as jest.Mock).mockReturnValue({ isXs: false });
    render(
      <MobileAnimatedComponent
        animationClass={animationClass}
        onAnimationEnd={onAnimationEnd}
        activeAnimation={1}
        animationIndex={0}
      >
        {testChildren}
      </MobileAnimatedComponent>,
    );

    expect(screen.getByTestId("animated-component")).toBeInTheDocument();
    expect(screen.getByTestId("test-children")).toBeInTheDocument();
  });

  it("does not render AnimatedComponent when isXs is false and activeAnimation < animationIndex", () => {
    (useBreakpoints as jest.Mock).mockReturnValue({ isXs: false });
    render(
      <MobileAnimatedComponent
        animationClass={animationClass}
        onAnimationEnd={onAnimationEnd}
        activeAnimation={0}
        animationIndex={1}
      >
        {testChildren}
      </MobileAnimatedComponent>,
    );

    expect(screen.queryByTestId("animated-component")).not.toBeInTheDocument();
    // Depending on the implementation, you might also check if children are not rendered or are rendered differently
  });
});
