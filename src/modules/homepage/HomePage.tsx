import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";
import { AboutSection } from "./sections/AboutSection";
import { PropsWithChildren, useCallback, useRef, useState } from "react";
import { useHandleSpyScroll } from "./hooks/useHandleSpyScroll";
import { useTranslation } from "react-i18next";
import { MobileAnimatedComponent } from "../common/components/AnimatedComponent";

export type SectionRef = (HTMLDivElement | null)[];

const StickySection = ({ children }: PropsWithChildren) => (
  <div className="sticky top-0 z-20 ml-6 mb-4 w-screen bg-slate-900/75 h-12 flex items-center backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      {children}
    </h2>
  </div>
);

export const HomePage = () => {
  const sectionRefs = useRef<SectionRef>([]);
  const { t } = useTranslation();
  const { activeSection } = useHandleSpyScroll(sectionRefs);
  const [activeAnimation, setActiveAnimation] = useState(
    screen.width > 640 ? 0 : 50,
  );
  const handleAnimationEnd = useCallback(() => {
    setActiveAnimation((current) => current + 1);
  }, []);

  return (
    <div className="flex flex-col mt-6 md:mt-0 lg:pr-64 md:flex-row md:gap-4">
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
              <StickySection>About</StickySection>
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
              <StickySection>Experiences</StickySection>
              <ExperienceSection />
            </MobileAnimatedComponent>
          )}
        </div>
        <div
          id="contact"
          ref={(el) => (sectionRefs.current[2] = el)}
          className="md:relative md:right-[15%] py-16 lg:pb-60 pt-20"
        >
          {activeAnimation >= 7 && (
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
