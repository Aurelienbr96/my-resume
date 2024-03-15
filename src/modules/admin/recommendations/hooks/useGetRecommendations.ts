import { useQuery } from "@tanstack/react-query";

import { api } from "../../../api/ApiService";
import { ArrayRecommendationApiType } from "../../../api/types/RecommendationApiType";

type FiltersType = {
  statut?: boolean;
};

const getRecommendations = async (filters?: FiltersType) => {
  const response = await api.get<ArrayRecommendationApiType>(
    "/recommendations",
    { params: filters },
  );
  if (!response) {
    throw new Error("Network response was not ok");
  }

  console.log(response);

  return response.data;
};

export const useGetRecommendations = (filters?: FiltersType) => {
  const queryKey = ["getRecommendations", filters];
  const { data, error, ...others } = useQuery({
    queryKey,
    queryFn: () => getRecommendations(filters),
  });
  const recommendations = data;
  return { recommendations, error, ...others };
};
