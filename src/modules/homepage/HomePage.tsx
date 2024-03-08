import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";
import { AboutSection } from "./sections/AboutSection";
import { useCallback, useRef, useState } from "react";
import { useHandleSpyScroll } from "./hooks/useHandleSpyScroll";
import { useTranslation } from "react-i18next";
import { MobileAnimatedComponent } from "../common/components/AnimatedComponent";

export type SectionRef = (HTMLDivElement | null)[];

export const HomePage = () => {
  const sectionRefs = useRef<SectionRef>([]);
  const { t } = useTranslation();
  const { activeSection } = useHandleSpyScroll(sectionRefs);
  const [activeAnimation, setActiveAnimation] = useState(screen.width > 640 ? 0 : 50);
  const handleAnimationEnd = useCallback(() => {
    setActiveAnimation((current) => current + 1);
  }, []);

  return (
    <div className="flex flex-col  lg:pr-64 md:flex-row md:gap-4">
      <div className="md:sticky md:top-0 lg:px-32 lg:py-20 md:max-h-screen">
        <AboutSection
          activeAnimation={activeAnimation}
          handleAnimationEnd={handleAnimationEnd}
          activeSection={activeSection}
        />
      </div>
      <div className="flex-col flex-1 lg:w-1/2 lg:pt-20">
        <div
          id="about"
          ref={(el) => (sectionRefs.current[0] = el)}
          className="lg:pb-12"
        >
          {activeAnimation >= 5 && (
            <MobileAnimatedComponent
              animationClass="animate-fade-in-right"
              onAnimationEnd={handleAnimationEnd}
            >
              <p className="px-6">{t("basics.summary")}</p>
            </MobileAnimatedComponent>
          )}
        </div>
        <div
          className="pt-16"
          id="experiences"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          {activeAnimation >= 5 && (
            <MobileAnimatedComponent
              animationClass="animate-fade-in-right "
              onAnimationEnd={handleAnimationEnd}
            >
              <ExperienceSection />
            </MobileAnimatedComponent>
          )}
        </div>
        <div
          id="contact"
          ref={(el) => (sectionRefs.current[2] = el)}
          className="md:relative md:right-[15%] py-16 lg:pb-60 pt-20"
        >
          {activeAnimation >= 7 && <ContactSection />}
        </div>
      </div>
    </div>
  );
};