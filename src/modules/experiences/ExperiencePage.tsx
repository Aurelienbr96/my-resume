import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../common/fetchData";

export const ExperiencePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["jsonData"],
    queryFn: fetchData,
  });

  if (isLoading || !data) return null;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {data.work.map((work) => (
          <p key={work.startDate} className="my-6">{work.description}</p>
        ))}
      </div>
    </div>
  );
};
