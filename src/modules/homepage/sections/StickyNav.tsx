import { useTranslation } from "react-i18next";
import { MobileAnimatedComponent } from "../../common/components/animatedComponents/MobileAnimatedComponent";
import { SocialNetworks } from "../components/SocialNetworks";
import me from "../../../assets/img/me.jpeg";
import { ThemeSwitch } from "../../common/components/buttons/ThemeSwitch";
import { LanguageSwitch } from "../../i18n/components/LanguageSwitch";
import { supportedLanguages } from "../../i18n/constants/supportedLanguages";
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
  const isContactActive = activeSection === "contact";
  const isRecommendationsActive = activeSection === "recommendations";

  return (
    <div
      className={`px-6 md:px-0 md:left-0 md:top-0 text-left h-full pb-20 flex flex-1 flex-col justify-between`}
    >
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
            Senior front end engineer
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
          animationIndex={4}
          animationClass="animate-fade-in-left "
          onAnimationEnd={handleAnimationEnd}
        >
          <div className=" hidden md:flex items-center">
            <ThemeSwitch />
            <LanguageSwitch className="ml-4" languages={supportedLanguages} />
          </div>
        </MobileAnimatedComponent>

        <MobileAnimatedComponent
          activeAnimation={activeAnimation}
          animationIndex={4}
          animationClass="animate-fade-in-left "
          onAnimationEnd={handleAnimationEnd}
        >
          <AboutDesktopMenu
            isAboutActive={isAboutActive}
            isExperienceActive={isExperienceActive}
            isContactActive={isContactActive}
            isRecommendationsActive={isRecommendationsActive}
          />
        </MobileAnimatedComponent>

        <MobileAnimatedComponent
          activeAnimation={activeAnimation}
          animationIndex={4}
          animationClass="animate-fade-in-left "
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="flex w-full justify-center md:justify-start">
            <img
              src={me}
              alt="me"
              className="rounded-full h-[200px] w-[200px] mt-14 shadow-strong"
            />
          </div>
        </MobileAnimatedComponent>
      </div>
      {activeAnimation >= 5 && <SocialNetworks />}
    </div>
  );
};
