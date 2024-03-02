import classNames from "classnames";
import { Link } from "react-router-dom";
import { useRetractableMenu } from "../hooks/useRetractableMenu";
import { PropsWithChildren } from "react";

type Props = {
  to: string;
  className?: string;
};

export const ButtonMenu = ({
  children,
  to,
  className,
}: PropsWithChildren<Props>) => {
  const containerClassName = classNames("hover:underline", className);
  const { handleMenuRetracted } = useRetractableMenu();
  return (
    <Link to={to} onClick={handleMenuRetracted} className={containerClassName}>
      {children}
    </Link>
  );
};
