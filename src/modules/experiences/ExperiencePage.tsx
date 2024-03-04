import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../common/fetchData";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import enData from "../i18n/locales/en.json";

export type JSONData = typeof enData;

export const ExperiencePage = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["jsonData"],
    queryFn: fetchData,
  });

  if (isLoading || !data) return null;

  
  const workData = t('work', { returnObjects: true }) as JSONData["work"];

  return (
    <div>
      <h1 className="text-3xl text-center">Experiences and education</h1>
      <Timeline className="mt-6">
        {workData.map((work) => (
          <TimelineItem key={work.startDate}>
            <TimelinePoint />
            <TimelineContent>
              <div className="flex items-center">
                <img src={work.logo} className="h-[40px] w-[40px]" />
                <Timeline.Title className="text-xl ml-[10px]">
                  {work.role}
                </Timeline.Title>
              </div>
              <Timeline.Time>
                {dayjs(work.startDate).format("MMM. YYYY") +
                  " - " +
                  dayjs(work.endDate).format("MMM. YYYY")}
              </Timeline.Time>
              <Timeline.Body className="my-6">
                {work.name} - {work.status} <br />
                {work.description}
              </Timeline.Body>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};
