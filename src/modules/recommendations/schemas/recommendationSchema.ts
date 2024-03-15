import * as Yup from "yup";

export const requiredMessage = "This field is required";
export const wrongEmailFormatMessage = "Please enter a valid email";

export type AuthorStatusType =
  | "colleague"
  | "lead"
  | "CTO"
  | "CEO"
  | "project_leader";

export const AuthorStatus = [
  "colleague",
  "lead",
  "CTO",
  "CEO",
  "project_leader",
] as Array<AuthorStatusType>;

export const recommendationSchema = Yup.object().shape({
  name: Yup.string().required(requiredMessage),
  linkedinProfile: Yup.string().required(requiredMessage),
  message: Yup.string().required(requiredMessage),
  fromDate: Yup.date().required(requiredMessage),
  toDate: Yup.date().required(requiredMessage),
  companyName: Yup.string().required(requiredMessage),
  authorStatus: Yup.string()
    .oneOf(["colleague", "lead", "CTO", "CEO", "project_leader"])
    .required(requiredMessage),
});
