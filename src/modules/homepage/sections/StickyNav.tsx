import { useTranslation } from "react-i18next";
import { MobileAnimatedComponent } from "../../common/components/animatedComponents/MobileAnimatedComponent";
import { SocialNetworks } from "../components/SocialNetworks";

import { AboutDesktopMenu } from "./components/AboutDesktopMenu";

type Props = {
  activeSection: string | null;
  activeAnimation: number;
  handleAnimationEnd: () => void;
};

export const StickyNav = ({
  activeSection,
  activeAnimation,
  handleAnimationEnd,
}: Props) => {
  const { t } = useTranslation();

  const isAboutActive = activeSection === "about";
  const isExperienceActive = activeSection === "experiences";
  const isProjectsActive = activeSection === "projects";

  return (
    <div className="md:sticky px-6 md:px-0 md:left-0 md:top-0 text-left h-full pb-20 flex flex-1 flex-col justify-between">
      <div>
        <MobileAnimatedComponent
          activeAnimation={activeAnimation}
          animationIndex={0}
          animationClass="animate-fade-in-down "
          onAnimationEnd={handleAnimationEnd}
        >
          <p className="font-bold text-3xl dark:text-dark-highlight">
            Aurelien Brachet
          </p>
        </MobileAnimatedComponent>

        <MobileAnimatedComponent
          activeAnimation={activeAnimation}
          animationIndex={1}
          animationClass="animate-fade-in-left "
          onAnimationEnd={handleAnimationEnd}
        >
          <p className="font-bold text-2xl dark:text-dark-highlight">
            Senior Fullstack engineer
          </p>
        </MobileAnimatedComponent>

        <MobileAnimatedComponent
          activeAnimation={activeAnimation}
          animationIndex={2}
          animationClass="animate-fade-in-left "
          onAnimationEnd={handleAnimationEnd}
        >
          <p className="text-base my-6 md:mt-4 max-w-xs">
            {t("basics.introduction")}
          </p>
        </MobileAnimatedComponent>

        <MobileAnimatedComponent
          activeAnimation={activeAnimation}
          animationIndex={3}
          animationClass="animate-fade-in-left "
          onAnimationEnd={handleAnimationEnd}
        >
          <AboutDesktopMenu
            isAboutActive={isAboutActive}
            isExperienceActive={isExperienceActive}
            isProjectsActive={isProjectsActive}
          />
        </MobileAnimatedComponent>
      </div>
      <SocialNetworks />
    </div>
  );
};
