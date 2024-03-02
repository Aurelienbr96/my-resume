import classNames from "classnames";
import me from "../../assets/img/me.jpeg";
import useBreakpoints from "../common/hooks/useBreakPoints";

export const HomePage = () => {
  const { isXs } = useBreakpoints();
  console.log("isXs", isXs);
  const containerClassName = classNames({
    "flex justify-between": !isXs,
    "flex flex-col": isXs,
  });

  const textClassName = classNames("text-3xl", {
    "my-6 text-center": isXs,
  });
  return (
    <div className={containerClassName}>
      <p className={textClassName}>
        Hi, I am Aurelien, a senior ReactJS developer
      </p>
      <img className="rounded-lg" src={me} />
    </div>
  );
};
