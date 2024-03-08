import { PropsWithChildren } from "react";

type Props = {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Skill = ({
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) => (
  <button
    onClick={onClick}
    className={`px-4 py-2  hover:bg-dark-purple text-white dark:text-dark-skill-text dark:bg-dark-skill-bg rounded-lg ${className}`}
  >
    {children}
  </button>
);
