import { MutableRefObject, useEffect, useState } from "react";
import { SectionRef } from "../HomePage";

export const useHandleSpyScroll = (
  sectionRefs: MutableRefObject<SectionRef>,
) => {
  const [activeSection, setActiveSection] = useState<string | null>("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4;

      const selectedSection = sectionRefs.current.find((section) => {
        if (section)
          return (
            section.offsetTop <= scrollPosition &&
            section.offsetTop + section.offsetHeight > scrollPosition
          );
      });
      const sectionId = selectedSection ? selectedSection.id : null;
      setActiveSection(sectionId);
    };

    window.addEventListener("scroll", handleScroll);
    // set a timeout so that
    setTimeout(handleScroll, 1500);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return { activeSection };
};
