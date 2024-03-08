import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import enData from "../../i18n/locales/en.json";
import { IconLink, IconRedirect } from "../../../assets/icons";
import { useEffect, useRef, useState } from "react";
import { Skill } from "./components/Skill";
import { useHandleFilterClick } from "../../router/hooks/useHandleFilterClick";
import { useAddAnimationOnScroll } from "./hooks/useAddAnimationOnScroll";

export type JSONData = typeof enData;

export const ExperienceSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const animationStateRef = useRef({});

  useAddAnimationOnScroll(
    containerRef,
    animationStateRef,
    ".animate-on-scroll",
  );

  const {
    searchParams,
    handleRemoveFilters,
    handleFilterClick,
    searchParamsValues,
  } = useHandleFilterClick();

  const workData = t("work", { returnObjects: true }) as JSONData["work"];

  const isCurrentlyHovered = (index: number) =>
    hoveredIndex !== null && index === hoveredIndex;

  useEffect(() => {
    if (activeIndex < workData.length) {
      const timer = setTimeout(() => {
        setActiveIndex(activeIndex + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, workData.length]);

  const handleOnNavigateLink = (link: string) => () => {
    window.open(link, "_blank");
  };

  const getFilteredData = () => {
    let results = workData;
    searchParams.forEach((value) => {
      const values = value.split(",");
      results = results.filter((item) =>
        values.every((element) => item.skills.includes(element)),
      );
    });
    return results;
  };

  const filteredData = getFilteredData();

  return (
    <div>
      {Array.from(searchParams).length > 0 && (
        <button onClick={handleRemoveFilters}>remove filters</button>
      )}
      <div ref={containerRef}>
        <Timeline className="mt-6 group border-transparent md:border-l mr-10 md:mr-0">
          {filteredData.map((work, index) => (
            <TimelineItem
              className={`animate-on-scroll opacity-0 p-0 md:p-4 z-50 transition lg:opacity-100 dark:group-hover:opacity-50 lg:hover:!opacity-100  hover:cursor-pointer dark:lg:group-hover:bg-slate-800/50 dark:lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] dark:lg:hover:drop-shadow-lg bg-white dark:bg-dark shadow-strong rounded-lg`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
              onClick={handleOnNavigateLink(work.link)}
              key={work.startDate}
            >
              <TimelinePoint className="hidden md:block relative right-[40.5px]" />
              <TimelineContent>
                <div className="flex items-center">
                  <img src={work.logo} className="h-[40px] w-[40px]" />
                  <Timeline.Title>
                    <p
                      className={`text-base3 ml-[10px] dark:text-dark-highlight ${isCurrentlyHovered(index) ? "text-strong-purple dark:text-dark-skill-text" : ""}`}
                    >
                      {work.role} - {work.name}
                    </p>
                  </Timeline.Title>
                  <IconRedirect
                    height={16}
                    width={16}
                    className={`${isCurrentlyHovered(index) && "fill-strong-purple dark:fill-dark-skill-text animate-right-top"} ml-2`}
                  />
                </div>
                <Timeline.Time>
                  <span className="mt-10">
                    {dayjs(work.startDate).format("MMM. YYYY") +
                      " - " +
                      dayjs(work.endDate).format("MMM. YYYY")}
                  </span>
                </Timeline.Time>
                <Timeline.Body className="my-2">
                  {work.description}
                  <div className="flex flex-wrap">
                    {work.links?.map((link) => (
                      <a
                        key={link}
                        href={link}
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center mt-6 ${isCurrentlyHovered(index) && "text-strong-purple fill-strong-purple dark:fill-dark-skill-text dark:text-dark-skill-text"}`}
                        target="_blank"
                      >
                        <IconLink />
                        <span className="ml-2">ios app</span>
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-wrap">
                    {work.skills.map((skill, id) => (
                      <Skill
                        key={id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFilterClick("name", skill);
                        }}
                        className={`mr-4 mt-6 ${searchParamsValues?.includes(skill) ? "bg-dark-purple" : "bg-strong-purple"}`}
                      >
                        {skill}
                      </Skill>
                    ))}
                  </div>
                </Timeline.Body>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};
