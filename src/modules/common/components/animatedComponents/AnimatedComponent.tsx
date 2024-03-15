import { PropsWithChildren } from "react";
import { useSequentialAnimation } from "../../hooks/useHandleNextAnimation";

type Props = {
  animationClass: string;
  onAnimationEnd: () => void;
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
