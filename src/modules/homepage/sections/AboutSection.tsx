import { useTranslation } from "react-i18next";
import { MobileAnimatedComponent } from "../../common/components/AnimatedComponent";
import { SocialNetworks } from "../components/SocialNetworks";
import me from "../../../assets/img/me.jpeg";
import { ThemeSwitch } from "../../common/components/ThemeSwitch";
import { LanguageSwitch } from "../../i18n/components/LanguageSwitch";
import { supportedLanguages } from "../../i18n/constants/supportedLanguages";

type Props = {
  activeSection: string | null;
  activeAnimation: number;
  handleAnimationEnd: () => void;
};

const HrefLine = ({ isActive }: { isActive: boolean }) => (
  <span
    className={`w-4 h-px mr-2 bg-black  transition-all duration-250 group-hover:w-8 group-hover:bg-dark-purple dark:group-hover:bg-dark-highlight  ${isActive ? "w-8 dark:bg-dark-highlight" : "dark:bg-dark-text"}`}
  />
);

type MenuTextProps = {
  href: string;
  isActive: boolean;
  children: string;
};

const MenuText = ({ children, isActive, href }: MenuTextProps) => (
  <li>
    <a
      href={href}
      className={`mt-2 group flex items-center dark:hover:text-dark-highlight ${isActive ? "font-bold dark:text-dark-highlight " : ""}`}
    >
      <HrefLine isActive={isActive} />
      {children}
    </a>
  </li>
);

export const AboutSection = ({
  activeSection,
  activeAnimation,
  handleAnimationEnd,
}: Props) => {
  const { t } = useTranslation();

  const isAboutActive = activeSection === "about";
  const isExperienceActive = activeSection === "experiences";
  const isContactActive = activeSection === "contact";

  return (
    <div className="sticky left-0 top-0 text-center md:text-left h-full pb-20 flex flex-1 flex-col justify-between">
      <div>
        {activeAnimation >= 0 && (
          <MobileAnimatedComponent
            animationClass="animate-fade-in-down "
            onAnimationEnd={handleAnimationEnd}
          >
            <p className="font-bold text-3xl dark:text-dark-highlight">
              Aurelien Brachet
            </p>{" "}
          </MobileAnimatedComponent>
        )}
        {activeAnimation >= 1 && (
          <MobileAnimatedComponent
            animationClass="animate-fade-in-left "
            onAnimationEnd={handleAnimationEnd}
          >
            <p className="font-bold text-2xl dark:text-dark-highlight">
              Senior front end engineer
            </p>
          </MobileAnimatedComponent>
        )}

        {activeAnimation >= 2 && (
          <MobileAnimatedComponent
            animationClass="animate-fade-in-left "
            onAnimationEnd={handleAnimationEnd}
          >
            <p className="text-base my-6 md:mt-4 max-w-xs">
              {t("basics.introduction")}
            </p>
          </MobileAnimatedComponent>
        )}
        {activeAnimation >= 4 && (
          <MobileAnimatedComponent
            animationClass="animate-fade-in-left "
            onAnimationEnd={handleAnimationEnd}
          >
            <div className="flex items-center">
              <ThemeSwitch />
              <LanguageSwitch className="ml-4" languages={supportedLanguages} />
            </div>
          </MobileAnimatedComponent>
        )}
        {activeAnimation >= 4 && (
          <MobileAnimatedComponent
            animationClass="animate-fade-in-left "
            onAnimationEnd={handleAnimationEnd}
          >
            <nav className="hidden md:block">
              <ul className="mt-10 w-max">
                <MenuText href="#about" isActive={isAboutActive}>
                  About
                </MenuText>
                <MenuText href="#experiences" isActive={isExperienceActive}>
                  Experiences
                </MenuText>
                <MenuText href="#contact" isActive={isContactActive}>
                  Contact
                </MenuText>
              </ul>
            </nav>
          </MobileAnimatedComponent>
        )}

        {activeAnimation >= 4 && (
          <MobileAnimatedComponent
            animationClass="animate-fade-in-left "
            onAnimationEnd={handleAnimationEnd}
          >
            <img
              src={me}
              alt="me"
              className="rounded-full h-[200px] w-[200px] mt-14 shadow-strong"
            />
          </MobileAnimatedComponent>
        )}
      </div>
      {activeAnimation >= 5 && <SocialNetworks />}
    </div>
  );
};
