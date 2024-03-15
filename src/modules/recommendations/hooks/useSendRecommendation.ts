import { useMutation } from "@tanstack/react-query";

import { RecommendationFormData } from "../RecommendationPage";
import { api } from "../../api/ApiService";

const createItem = async (item: RecommendationFormData) => {
  const response = await api.post("/recommendations", item);
  if (!response) {
    throw new Error("Network response was not ok");
  }

  console.log(response);

  return response.data;
};

export const useSendRecommendation = () => {
  const { data, error, ...others } = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      console.log("Item created successfully");
    },
    onError: () => {
      console.log("error");
    },
  });
  return { data, error, ...others };
};
