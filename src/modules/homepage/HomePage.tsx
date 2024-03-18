import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";
import { StickyNav } from "./sections/StickyNav";
import { useCallback, useEffect, useRef, useState } from "react";
import { useHandleSpyScroll } from "./hooks/useHandleSpyScroll";
import { useTranslation } from "react-i18next";
import { MobileAnimatedComponent } from "../common/components/animatedComponents/MobileAnimatedComponent";
import { RecommendationsSection } from "./sections/RecommendationsSection";
import { StickySection } from "./components/StickySection";

export type SectionRef = (HTMLDivElement | null)[];

const scrollYEndExperienceSection = 2084;

export const HomePage = () => {
  const sectionRefs = useRef<SectionRef>([]);
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const { activeSection } = useHandleSpyScroll(sectionRefs);
  const [activeAnimation, setActiveAnimation] = useState(
    screen.width > 640 ? 0 : 50,
  );
  const handleAnimationEnd = useCallback(() => {
    setActiveAnimation((current) => current + 1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPosition(currentScrollPos);

      if (currentScrollPos > scrollYEndExperienceSection) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col mt-6 md:mt-0 lg:pr-64 md:flex-row md:gap-4">
      <div
        className={`${isSticky ? "md:sticky md:top-0" : "md:relative"}  lg:px-32 lg:py-20 md:max-h-screen`}
        style={{
          top: isSticky
            ? undefined
            : scrollPosition >= scrollYEndExperienceSection
              ? scrollYEndExperienceSection
              : `${scrollPosition}px`,
        }}
      >
        <StickyNav
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
          <MobileAnimatedComponent
            animationClass="animate-fade-in-right"
            onAnimationEnd={handleAnimationEnd}
            animationIndex={5}
            activeAnimation={activeAnimation}
          >
            <StickySection>About</StickySection>
            <p className="px-6">{t("basics.summary")}</p>
          </MobileAnimatedComponent>
        </div>
        <div
          className="pt-16"
          id="experiences"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          {activeAnimation >= 5 && (
            <MobileAnimatedComponent
              activeAnimation={activeAnimation}
              animationIndex={5}
              animationClass="animate-fade-in-right "
              onAnimationEnd={handleAnimationEnd}
            >
              <StickySection>Experiences</StickySection>
              <ExperienceSection />
            </MobileAnimatedComponent>
          )}
        </div>
        <div id="recommendations" ref={(el) => (sectionRefs.current[3] = el)}>
          {activeAnimation >= 5 && (
            <>
              <StickySection>Recommendations</StickySection>
              <RecommendationsSection />
            </>
          )}
        </div>
        <div
          id="contact"
          ref={(el) => (sectionRefs.current[2] = el)}
          className="md:relative md:right-[15%] py-16 lg:pb-60 pt-20"
        >
          {activeAnimation >= 5 && (
            <>
              <StickySection>Contact</StickySection>
              <ContactSection />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
