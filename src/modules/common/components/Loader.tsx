import classNames from "classnames";
import { LoaderIcon } from "../../../assets/icons";

type Props = {
  className?: string;
  height?: number;
  width?: number;
};

export const Loader = ({ className, height = 60, width = 60}: Props) => {
  const containerClassName = classNames("animate-spin fill-white", className);
  return <LoaderIcon className={containerClassName} height={height} width={width} />;
};
