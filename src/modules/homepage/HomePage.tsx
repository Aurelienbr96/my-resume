import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";
import { AboutSection } from "./sections/AboutSection";
import { useCallback, useRef, useState } from "react";
import { useHandleSpyScroll } from "./hooks/useHandleSpyScroll";
import { useTranslation } from "react-i18next";

export type SectionRef = (HTMLDivElement | null)[];

export const HomePage = () => {
  const sectionRefs = useRef<SectionRef>([]);

  const { t } = useTranslation();
  const { activeSection } = useHandleSpyScroll(sectionRefs);
  const [activeAnimation, setActiveAnimation] = useState(0);
  const handleAnimationEnd = useCallback(() => {
    setActiveAnimation((current) => current + 1);
  }, []);

  return (
    <div className="flex flex-col md:px-12 lg:px-64 pb-20 md:flex-row md:gap-4">
      <div className="md:sticky md:top-0 lg:w-1/2 lg:py-10 md:max-h-screen">
        <AboutSection
          activeAnimation={activeAnimation}
          handleAnimationEnd={handleAnimationEnd}
          activeSection={activeSection}
        />
      </div>
      <div className="flex-col flex-1 lg:w-1/2">
        <div
          id="about"
          ref={(el) => (sectionRefs.current[0] = el)}
          className="lg:py-10"
        >
          <p className="px-6">{t("basics.summary")}</p>
        </div>
        <div
          className="mt-6"
          id="experiences"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <ExperienceSection />
        </div>
        <div className="md:relative md:right-[50%] my-16">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};
