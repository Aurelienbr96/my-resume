type Props = {
  children?: React.ReactNode;
};

export const ErrorComp = ({ children = "This field is required" }: Props) => (
  <span className="text-error mt-2">{children}</span>
);
