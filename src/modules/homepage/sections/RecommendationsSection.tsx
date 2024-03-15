import dayjs from "dayjs";
import { useGetRecommendations } from "../../admin/recommendations/hooks/useGetRecommendations";

export const RecommendationsSection = () => {
  const { recommendations, isLoading } = useGetRecommendations({
    statut: true,
  });
  if (recommendations?.length === 0 || isLoading) return null;
  return (
    <div className="mt-6">
      <h1 className="dark:text-dark-highlight text-2xl">Recommendations</h1>
      {recommendations?.map((recommendation) => (
        <a
          className="flex flex-col mt-6"
          href={recommendation.linkedinProfile}
          target="_blank"
        >
          <h1 className="dark:text-dark-highlight text-xl">
            {recommendation.name} {recommendation.authorStatus} at{" "}
            {recommendation.companyName}
          </h1>
          <p className="text-l dark:text-dark-highlight">
            Worked with me from{" "}
            {dayjs(recommendation.fromDate).format("MM/YYYY")} -{" "}
            {dayjs(recommendation.toDate).format("MM/YYYY")}
          </p>
          <h1>{recommendation.message}</h1>
        </a>
      ))}
    </div>
  );
};
