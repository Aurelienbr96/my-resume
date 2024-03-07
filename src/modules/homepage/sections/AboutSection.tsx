import { useTranslation } from "react-i18next";
import { AnimatedComponent } from "../../common/components/AnimatedComponent";
import { SocialNetworks } from "../components/SocialNetworks";

type Props = {
  activeSection: string | null;
  activeAnimation: number;
  handleAnimationEnd: () => void;
};

const HrefLine = ({ isActive }: { isActive: boolean }) => (
  <span
    className={`w-4 h-px bg-black mr-2 transition-all duration-250 group-hover:w-8 group-hover:bg-dark-purple ${isActive ? "w-8 bg-dark-purple" : ""}`}
  />
);

export const AboutSection = ({
  activeSection,
  activeAnimation,
  handleAnimationEnd,
}: Props) => {
  const { t } = useTranslation();

  const isAboutActive = activeSection === "about";
  const isExperienceActive = activeSection === "experiences";

  return (
    <div className="sticky left-0 top-0 h-full pb-20 flex flex-1 flex-col justify-between">
      <div>
        {activeAnimation >= 0 && (
          <AnimatedComponent
            animationClass="animate-fade-in-down "
            onAnimationEnd={handleAnimationEnd}
          >
            <p className="font-bold text-3xl">Aurelien Brachet</p>{" "}
          </AnimatedComponent>
        )}
        {activeAnimation >= 1 && (
          <AnimatedComponent
            animationClass="animate-fade-in-left "
            onAnimationEnd={handleAnimationEnd}
          >
            {" "}
            <p className="font-bold text-2xl">Senior front end engineer</p>
          </AnimatedComponent>
        )}

        {activeAnimation >= 2 && (
          <AnimatedComponent
            animationClass="animate-fade-in-left "
            onAnimationEnd={handleAnimationEnd}
          >
            <p className="text-xl my-6 md:mt-4">{t("basics.introduction")}</p>
          </AnimatedComponent>
        )}
        {activeAnimation >= 4 && (
          <AnimatedComponent
            animationClass="animate-fade-in-left "
            onAnimationEnd={handleAnimationEnd}
          >
            <nav className="hidden md:block">
              <ul className="mt-16 w-max">
                <li>
                  <a
                    href="#about"
                    className={`mt-2 group flex items-center ${isAboutActive ? "text-dark-purple font-bold" : ""}`}
                  >
                    <HrefLine isActive={isAboutActive} />
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className={`mt-2 group flex items-center hover:font-bold ${isExperienceActive ? "text-dark-purple font-bold" : ""}`}
                  >
                    <HrefLine isActive={isExperienceActive} />
                    Experiences
                  </a>
                </li>
              </ul>
            </nav>
          </AnimatedComponent>
        )}
      </div>
      <SocialNetworks />
    </div>
  );
};
