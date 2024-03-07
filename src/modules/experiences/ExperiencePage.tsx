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

export type JSONData = typeof enData;

export const ExperiencePage = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  return (
    <div>
      <h1 className="text-3xl text-center">Experiences and education</h1>
      <Timeline className="mt-6">
        {workData.map((work, index) => (
          <TimelineItem
            className={`p-4 hover:cursor-pointer ${index <= activeIndex ? "animate-fade-in" : ""} ${index > activeIndex ? "hidden" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            onClick={handleOnNavigateLink(work.link)}
            key={work.startDate}
          >
            <TimelinePoint />
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
                {dayjs(work.startDate).format("MMM. YYYY") +
                  " - " +
                  dayjs(work.endDate).format("MMM. YYYY")}
              </Timeline.Time>
              <Timeline.Body className="my-2">
                {work.description}
                <div className="flex flex-wrap">
                  {work.links?.map((link) => (
                    <a
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
                  {work.skills.map((skill) => (
                    <Skill className="mr-4 mt-6">{skill}</Skill>
                  ))}
                </div>
              </Timeline.Body>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};
