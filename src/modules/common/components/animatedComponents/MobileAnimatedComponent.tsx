import { PropsWithChildren } from "react";

type Props = {
  animationClass: string;
  onAnimationEnd: () => void;
};

export const MobileAnimatedComponent = ({
  children,
}: PropsWithChildren<
  Props & { activeAnimation: number; animationIndex: number }
>) => {
  return children;
};
