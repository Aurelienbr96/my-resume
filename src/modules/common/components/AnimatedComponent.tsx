import { PropsWithChildren } from "react";
import { useSequentialAnimation } from "../hooks/useHandleNextAnimation";
import useBreakpoints from "../hooks/useBreakPoints";

type Props = {
  animationClass: string;
  onAnimationEnd: () => void;
};

export const MobileAnimatedComponent = ({
  animationClass,
  children,
  onAnimationEnd,
}: PropsWithChildren<Props>) => {
  const { isXs } = useBreakpoints();
  if (isXs) return children;

  return (
    <AnimatedComponent
      animationClass={animationClass}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </AnimatedComponent>
  );
};

export const AnimatedComponent = ({
  animationClass,
  children,
  onAnimationEnd,
}: PropsWithChildren<Props>) => {
  const { ref } = useSequentialAnimation(onAnimationEnd, 1000);

  return (
    <div ref={ref} className={`${animationClass}`}>
      {children}
    </div>
  );
};
