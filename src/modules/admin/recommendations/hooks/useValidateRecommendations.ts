import { useMutation } from "@tanstack/react-query";

import { api } from "../../../api/ApiService";
import { RecommendationApiType } from "../../../api/types/RecommendationApiType";

const validateRecommendation = async (
  id: string,
  data: RecommendationApiType,
) => {
  let body;
  if (data.id) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id: _id, ...rest } = data;
    body = rest;
  } else body = data;
  const response = await api.put("/recommendations/" + id, body);
  if (!response) {
    throw new Error("Network response was not ok");
  }

  return response.data;
};

export const useValidateRecommendation = () => {
  const { data, error, ...others } = useMutation({
    mutationFn: ({ id, data }: { id: string; data: RecommendationApiType }) =>
      validateRecommendation(id, data),
  });
  return { data, error, ...others };
};
