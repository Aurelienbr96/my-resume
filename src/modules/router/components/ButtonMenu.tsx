import classNames from "classnames";
import { Link } from "react-router-dom";
import { PropsWithChildren, useContext } from "react";
import MenuContext from "../contexts/menuContext";

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
  const { toggleMenu } = useContext(MenuContext);
  return (
    <Link to={to} onClick={toggleMenu} className={containerClassName}>
      {children}
    </Link>
  );
};
