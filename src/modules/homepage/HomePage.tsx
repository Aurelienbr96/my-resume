/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import me from "../../assets/img/me.jpeg";
import useBreakpoints from "../common/hooks/useBreakPoints";
import { useTranslation } from "react-i18next";
import { NextStep } from "../common/components/NextStep";
import { useRef, useState } from "react";
import { AnimatedComponent } from "../common/components/AnimatedComponent";


export const HomePage = () => {
  const { isXs } = useBreakpoints();
  const { t } = useTranslation();
  const arrayOfRefs = useRef<any>([]);
  const [activeAnimation, setActiveAnimation] = useState(0);

  const handleAnimationEnd = () => {
    setActiveAnimation((current) => current + 1);
  };

  const containerClassName = classNames({
    "flex justify-between": !isXs,
    "flex flex-col": isXs,
  });

  const textClassName = classNames("text-2xl delay-1", {
    "my-6": isXs,
  });
  return (
    <div className={containerClassName}>
      <div className="flex flex-1 flex-col pt-6 justify-between items-center">
        {activeAnimation >= 0 && (
          <AnimatedComponent
            animationClass="animate-fade-in-left"
            onAnimationEnd={handleAnimationEnd}
          >
            <p className={textClassName}>{t("basics.introduction")}</p>
          </AnimatedComponent>
        )}
        {activeAnimation >= 2 && (
          <AnimatedComponent
            animationClass="animate-fade-in-left"
            onAnimationEnd={handleAnimationEnd}
          >
            <NextStep to="/experiences" />
          </AnimatedComponent>
        )}
        <div />
      </div>
      <div className="flex-1 flex justify-center">
        {activeAnimation >= 1 && (
          <AnimatedComponent
            animationClass="animate-fade-in-left"
            onAnimationEnd={handleAnimationEnd}
          >
            <img
              ref={(el) => (arrayOfRefs.current[1] = el)}
              className="rounded-lg shadow-lg"
              src={me}
            />
          </AnimatedComponent>
        )}
      </div>
    </div>
  );
};
