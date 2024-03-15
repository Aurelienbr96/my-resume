import classNames from "classnames";
import { LoaderIcon } from "../../../../assets/icons";

type Props = {
  className?: string;
  height?: number;
  width?: number;
  dataTestId?: string;
};

export const Loader = ({
  className,
  height = 60,
  width = 60,
  dataTestId,
}: Props) => {
  const containerClassName = classNames("animate-spin fill-white", className);
  return (
    <LoaderIcon
      data-testid={dataTestId}
      className={containerClassName}
      height={height}
      width={width}
    />
  );
};
