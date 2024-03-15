import { PropsWithChildren } from "react";
import { IconLink } from "../../../../assets/icons";

type Props = {
  link: string;
  animationCondition?: boolean;
};

export const WorkLink = ({
  link,
  animationCondition,
}: PropsWithChildren<Props>) => (
  <a
    key={link}
    href={link}
    onClick={(e) => e.stopPropagation()}
    className={`flex items-center mt-6 ${animationCondition && "text-strong-purple fill-strong-purple dark:fill-dark-skill-text dark:text-dark-skill-text"}`}
    target="_blank"
  >
    <IconLink />
    <span className="ml-2">ios app</span>
  </a>
);
