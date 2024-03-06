import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const Skill = ({ children, className }: PropsWithChildren<Props>) => (
  <div className={`px-4 py-2 bg-strong-purple text-white rounded-lg ${className}`}>
    {children}
  </div>
);
