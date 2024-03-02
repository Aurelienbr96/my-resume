import classNames from "classnames";
import { Link } from "react-router-dom";
import { useRetractableMenu } from "../hooks/useRetractableMenu";

export const ButtonMenu = ({
  children,
  to,
  className,
}: {
  children: any;
  to: string;
  className?: string;
}) => {
  const containerClassName = classNames("hover:underline", className);
  const { handleMenuRetracted } = useRetractableMenu();
  return (
    <Link to={to} onClick={handleMenuRetracted} className={containerClassName}>
      {children}
    </Link>
  );
};
