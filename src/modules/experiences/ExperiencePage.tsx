import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import enData from "../i18n/locales/en.json";
import { IconLink, IconRedirect } from "../../assets/icons";
import { useEffect, useState } from "react";
import { Skill } from "./components/Skill";
import { useHandleFilterClick } from "../router/hooks/useHandleFilterClick";
import { NextStep } from "../common/components/NextStep";

export type JSONData = typeof enData;

export const ExperiencePage = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      <h1 className="text-3xl text-center">Experiences and education</h1>
      {Array.from(searchParams).length > 0 && (
        <button onClick={handleRemoveFilters}>remove filters</button>
      )}
      <Timeline className="mt-6">
        {filteredData.map((work, index) => (
          <TimelineItem
            className={`p-4 hover:cursor-pointer bg-white shadow-lg rounded-lg ${index <= activeIndex ? "animate-fade-in" : ""} ${index > activeIndex ? "hidden" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            onClick={handleOnNavigateLink(work.link)}
            key={work.startDate}
          >
            <TimelinePoint className="relative right-10" />
            <TimelineContent>
              <div className="flex items-center">
                <img src={work.logo} className="h-[40px] w-[40px]" />
                <Timeline.Title
                  className={`text-xl ml-[10px] ${isCurrentlyHovered(index) && "text-strong-purple"}`}
                >
                  {work.role} - {work.name}
                </Timeline.Title>
                <IconRedirect
                  className={`${isCurrentlyHovered(index) && "fill-strong-purple animate-right-top"} ml-2 h-4 w-4`}
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
                      className={`flex items-center mt-6 ${isCurrentlyHovered(index) && "text-strong-purple fill-strong-purple"}`}
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
      {activeIndex === workData.length && (
        <div className="flex my-6 justify-center">
          <NextStep to="/contacts" />
        </div>
      )}
    </div>
  );
};
