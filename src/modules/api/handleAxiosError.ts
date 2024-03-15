import { AxiosError } from "axios";

export const handleAxiosError = (e: AxiosError) => {
  if (e.response) {
    const errorMessage =
      (e.response.data as string) || "An unknown error occurred";
    return { type: "manual", message: errorMessage };
  } else {
    return {
      type: "manual",
      message: "Network error or no response was received.",
    };
  }
};
