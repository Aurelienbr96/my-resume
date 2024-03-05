import classNames from "classnames";
import me from "../../assets/img/me.jpeg";
import useBreakpoints from "../common/hooks/useBreakPoints";
import { useTranslation } from "react-i18next";
import { GITHUB_URL, LEETCODE_URL, LINKEDIN_URL } from "../common/constants/socialNetworks.constants";

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
      <div className="flex flex-col justify-between">
        <p className={textClassName}>{t("basics.introduction")}</p>
        <div className="flex">
          <a href={GITHUB_URL} target="_blank" className="mr-4">
            Github
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            className="mr-4"
          >
            LinkedIn
          </a>
          <a href={LEETCODE_URL} target="_blank">
            LeetCode
          </a>
        </div>
      </div>
      <img className="rounded-lg" src={me} />
    </div>
  );
};
