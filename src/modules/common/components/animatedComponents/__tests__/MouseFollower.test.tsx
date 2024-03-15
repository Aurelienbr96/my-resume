import "@testing-library/jest-dom";
import { MouseFollower } from "../MouseFollower";
import { fireEvent, render } from "../../../../../testing";

describe("MouseFollower", () => {
  it("updates its gradient position based on mouse movement", () => {
    const { container } = render(<MouseFollower />);

    fireEvent.mouseMove(window, { clientX: 100, clientY: 200 });

    expect(container.firstChild).toHaveStyle(`
      background: radial-gradient(600px at 100px 200px, rgba(29, 78, 216, 0.15), transparent 80%)
    `);

    fireEvent.mouseMove(window, { clientX: 150, clientY: 250 });
    expect(container.firstChild).toHaveStyle(`
      background: radial-gradient(600px at 150px 250px, rgba(29, 78, 216, 0.15), transparent 80%)
    `);
  });
});
