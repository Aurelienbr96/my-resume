import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import { IconRedirect } from "../../../assets/icons";
import { Skill } from "../sections/components/Skill";
import { WorkLink } from "../sections/components/WorkLink";
import dayjs from "dayjs";
import { JSONData } from "../sections/ExperienceSection";
import { useState } from "react";

type Props = {
  work: JSONData["work"][number];
  index: number;
  handleFilterClick: (filterType: string, filterValue: string) => void;
  searchParamsValues: string[];
};

export const ExperienceBlock = ({
  work,
  index,
  handleFilterClick,
  searchParamsValues,
}: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isCurrentlyHovered = (index: number) =>
    hoveredIndex !== null && index === hoveredIndex;

  const handleOnNavigateLink = (link: string) => () => {
    window.open(link, "_blank");
  };
  return (
    <TimelineItem
      className={`animate-on-scroll opacity-0 p-0 md:p-4 z-50 transition lg:opacity-100 lg:dark:group-hover:opacity-50 lg:hover:!opacity-100  hover:cursor-pointer dark:lg:group-hover:bg-slate-800/50 dark:lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] dark:lg:hover:drop-shadow-lg bg-white dark:bg-dark shadow-strong rounded-lg`}
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
              <WorkLink
                link={link}
                animationCondition={isCurrentlyHovered(index)}
              >
                ios app
              </WorkLink>
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
  );
};
