import data from "../../../public/profil.json";

export type JSONData = typeof data;

export const fetchData = async (): Promise<JSONData> => {
  const response = await fetch("https://my-resume-sample-3.s3.eu-north-1.amazonaws.com/profil.json");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
