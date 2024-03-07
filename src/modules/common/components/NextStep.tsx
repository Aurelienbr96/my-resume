import classNames from "classnames";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const NextStep = ({
  to,
  className,
}: {
  to: string;
  className?: string;
}) => {
  const containerClassName = classNames(
    className,
    "flex items-center animate-bounce",
  );
  return (
    <Link to={to} className={containerClassName}>
      <p>Next step</p>
      <div className="h-[60px] bg-white w-[60px] shadow-lg flex ml-4 justify-center items-center rounded-full border-[1px] border-light-grey">
        <FaArrowRight className="fill-strong-purple" size={25} />
      </div>
    </Link>
  );
};
