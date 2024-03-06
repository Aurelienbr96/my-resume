import { fireEvent, render, screen, waitFor } from "../../../testing";
import { ContactPage } from "../ContactPage";
import { useSendEmail } from "../hooks/useSendEmail";
import {
  requiredMessage,
  wrongEmailFormatMessage,
} from "../validationSchemas/contactSchema";

const returnMock = {
  mutate: jest.fn(() => {}),
  isPending: false,
  isSuccess: false,
};

jest.mock("../hooks/useSendEmail", () => ({
  useSendEmail: jest.fn(() => {
    return returnMock;
  }),
}));

describe("ContactPage", () => {
  it("renders a basic form", () => {
    render(<ContactPage />);

    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("message")).toBeInTheDocument();
  });
  it("renders a submit button", () => {
    render(<ContactPage />);
    expect(screen.getByText("contactPage.submit")).toBeInTheDocument();
  });

  it("renders an error in case sending an email is not successful", () => {
    const useSendEmailMock = {
      ...returnMock,
      error: {
        text: "an error just happened",
      },
    };

    (useSendEmail as jest.Mock).mockReturnValueOnce(useSendEmailMock);
    render(<ContactPage />);
    expect(screen.getByText("an error just happened")).toBeInTheDocument();
  });

  it("renders a success message in case sending an email is successful", () => {
    const useSendEmailMock = {
      ...returnMock,
      isSuccess: true,
    };

    (useSendEmail as jest.Mock).mockReturnValueOnce(useSendEmailMock);
    render(<ContactPage />);
    expect(screen.getByText("contactPage.success")).toBeInTheDocument();
  });

  it("renders a loader when send email is sending", () => {
    const useSendEmailMock = {
      ...returnMock,
      isPending: true,
    };

    (useSendEmail as jest.Mock).mockReturnValueOnce(useSendEmailMock);
    render(<ContactPage />);
    expect(screen.getByTestId("contact-page-loader")).toBeInTheDocument();
  });

  it("renders an error when email is not valid", async () => {
    render(<ContactPage />);
    const input = screen.getByPlaceholderText("email");
    fireEvent.change(input, {
      target: { value: "Please enter a valid email" },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    await waitFor(() =>
      expect(
        expect(screen.getByText(wrongEmailFormatMessage)).toBeInTheDocument(),
      ),
    );
  });

  it("renders an error when email is empty", async () => {
    render(<ContactPage />);
    const input = screen.getByPlaceholderText("email");
    fireEvent.change(input, {
      target: { value: "" },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    await waitFor(() =>
      expect(expect(screen.getAllByText(requiredMessage).length).toBe(2)),
    );
  });

  it("calls mutate on on submit", async () => {
    render(<ContactPage />);
    const emailInput = screen.getByPlaceholderText("email");
    const messageInput = screen.getByPlaceholderText("message");
    fireEvent.change(emailInput, {
      target: { value: "aurelienbrachet123@gmail.com" },
    });

    fireEvent.change(messageInput, {
      target: { value: "This is my message" },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    await waitFor(() => expect(expect(returnMock.mutate).toHaveBeenCalled()));
  });
});
