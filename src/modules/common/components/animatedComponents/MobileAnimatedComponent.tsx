import { PropsWithChildren } from "react";
import useBreakpoints from "../../hooks/useBreakPoints";
import { AnimatedComponent } from "./AnimatedComponent";

type Props = {
  animationClass: string;
  onAnimationEnd: () => void;
};

export const MobileAnimatedComponent = ({
  animationClass,
  children,
  onAnimationEnd,
  activeAnimation,
  animationIndex,
}: PropsWithChildren<
  Props & { activeAnimation: number; animationIndex: number }
>) => {
  const { isXs } = useBreakpoints();
  if (isXs) return children;

  return (
    <>
      {activeAnimation >= animationIndex && (
        <AnimatedComponent
          animationClass={animationClass}
          onAnimationEnd={onAnimationEnd}
        >
          {children}
        </AnimatedComponent>
      )}
    </>
  );
};
