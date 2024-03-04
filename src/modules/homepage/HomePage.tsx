import classNames from "classnames";
import me from "../../assets/img/me.jpeg";
import useBreakpoints from "../common/hooks/useBreakPoints";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { isXs } = useBreakpoints();
  const { t } = useTranslation();

  const containerClassName = classNames({
    "flex justify-between": !isXs,
    "flex flex-col": isXs,
  });

  const textClassName = classNames("text-3xl", {
    "my-6 text-center": isXs,
  });
  return (
    <div className={containerClassName}>
      <p className={textClassName}>{t("basics.introduction")}</p>
      <img className="rounded-lg" src={me} />
    </div>
  );
};
