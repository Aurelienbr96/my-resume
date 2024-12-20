import { ExperienceSection } from "./sections/ExperienceSection";

import { StickyNav } from "./sections/StickyNav";
import { useCallback, useRef, useState } from "react";
import { useHandleSpyScroll } from "./hooks/useHandleSpyScroll";

import { MobileAnimatedComponent } from "../common/components/animatedComponents/MobileAnimatedComponent";
import { StickySection } from "./components/StickySection";
import { ProjectSection } from "./sections/ProjectSection";
import { useScreenWidth } from "../common/hooks/useScreenWidth";

export type SectionRef = (HTMLDivElement | null)[];

export const HomePage = () => {
  const [screenWidth] = useScreenWidth();
  const sectionRefs = useRef<SectionRef>([]);

  const { activeSection } = useHandleSpyScroll(sectionRefs);
  const [activeAnimation, setActiveAnimation] = useState(
    screenWidth > 640 ? 0 : 50,
  );
  const handleAnimationEnd = useCallback(() => {
    setActiveAnimation((current) => current + 1);
  }, []);

  return (
    <div className="flex flex-col mt-6 md:mt-0 lg:pr-64 md:flex-row md:gap-4">
      <div className="md:sticky md:top-0 lg:px-32 lg:py-20 md:max-h-screen">
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
            <div className="px-6 lg:px-0">
              <p>
                Back in 2014, I decided to try my hand at creating simple
                websites using{" "}
                <span className="text-light-grey">
                  HTML, CSS JQuery and PHP
                </span>{" "}
                (good old WAMP server) . Before I knew it, I was learning more
                about web development every day.
              </p>
              <br />
              <p>
                Fast forward to 2016, after the days of jQuery were behind us, I
                decided to dive into{" "}
                <span className="text-light-grey">ReactJS and Node</span>,
                building my career around the JavaScript ecosystem.
              </p>
              <br />
              <p>
                Since then, I've had the opportunity to work in various types of
                companies, from large{" "}
                <span className="text-light-grey">
                  corporations to startups
                </span>
                . These days, my main focus is continuing to learn about web
                development and exploring new technologies. Recently, I've
                fallen in love with{" "}
                <span className="text-light-grey">Golang</span>.
              </p>
              <br />
              <p>
                I enjoy building software where{" "}
                <span className="text-light-grey">
                  quality and scalable code
                </span>{" "}
                are the standard.
              </p>
            </div>
          </MobileAnimatedComponent>
        </div>
        <div
          className="pt-8"
          id="experiences"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <MobileAnimatedComponent
            activeAnimation={activeAnimation}
            animationIndex={5}
            animationClass="animate-fade-in-right "
            onAnimationEnd={handleAnimationEnd}
          >
            <StickySection>Experiences</StickySection>
            <ExperienceSection />
          </MobileAnimatedComponent>
        </div>

        <div
          className="pt-16"
          id="projects"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <>
            <StickySection>Feature projects</StickySection>
            <ProjectSection />
          </>
        </div>

        {/* <div
          id="contact"
          ref={(el) => (sectionRefs.current[3] = el)}
          className="self-center py-16 lg:pb-60 pt-20"
        >
          {activeAnimation >= 5 && (
            <>
              <StickySection>Contact</StickySection>
              <ContactSection />
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};
