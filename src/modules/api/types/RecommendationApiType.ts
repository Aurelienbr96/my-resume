import { AuthorStatusType } from "../../recommendations/schemas/recommendationSchema";

export type RecommendationApiType = {
  id: string;
  date: number;
  linkedinProfile: string;
  name: string;
  statut: boolean;
  message: string;
  fromDate: string;
  toDate: string;
  companyName: string;
  authorStatus: AuthorStatusType;
};
export type ArrayRecommendationApiType = Array<RecommendationApiType>;
