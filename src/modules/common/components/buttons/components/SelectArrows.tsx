import classNames from "classnames";
import { FilterDownIcon, FilterUpIcon } from "../../../../../assets/icons";

type Props = {
  isOpen: boolean;
  isLoading?: boolean;
  className?: string;
  height?: number;
  width?: number;
};

export const SelectArrows = ({
  isOpen,
  isLoading,
  className,
  height = 5,
  width = 10,
}: Props) => {
  const containerClassName = classNames(className);
  return isOpen || isLoading ? (
    <FilterUpIcon
      className={containerClassName}
      height={height}
      width={width}
    />
  ) : (
    <FilterDownIcon
      className={containerClassName}
      height={height}
      width={width}
    />
  );
};
