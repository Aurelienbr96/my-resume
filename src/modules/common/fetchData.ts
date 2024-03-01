import data from "../../assets/profil.json";

export type JSONData = typeof data;

export const fetchData = async (): Promise<JSONData> => {
  const response = await fetch("/src/assets/profil.json");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
