import { PropsWithChildren } from "react";
import { useSequentialAnimation } from "../../hooks/useHandleNextAnimation";
import useBreakpoints from "../../hooks/useBreakPoints";

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
