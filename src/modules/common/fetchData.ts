import data from "../../../public/profil.json";

export type JSONData = typeof data;

 // https://my-resume-sample-3.s3.eu-north-1.amazonaws.com/profil.json

export const fetchData = async (): Promise<JSONData> => {
  const response = await fetch("../../../public/profil.json");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
