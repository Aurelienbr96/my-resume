import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../common/fetchData";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import dayjs from "dayjs";

export const ExperiencePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["jsonData"],
    queryFn: fetchData,
  });

  if (isLoading || !data) return null;

  return (
    <Timeline>
      {data.work.map((work) => (
        <TimelineItem key={work.startDate}>
          <TimelinePoint/>
          <TimelineContent >
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
              {work.companyName} - {work.status} <br />
              {work.description}
            </Timeline.Body>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
