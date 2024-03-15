import { useMutation } from "@tanstack/react-query";
import { LoginFormData } from "../LoginPage";
import { api } from "../../api/ApiService";
import { useNavigate } from "react-router-dom";
import { UseFormSetError } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { handleAxiosError } from "../../api/handleAxiosError";

const login = async (item: LoginFormData) => {
  try {
    const response = await api.post<{
      refreshToken: string;
      accessToken: string;
    }>("/sessions", item);
    if (!response) {
      throw new Error("Network response was not ok");
    }

    api.saveRefreshToken(response.data.refreshToken);
    api.saveToken(response.data.accessToken);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const useLogin = (setError: UseFormSetError<LoginFormData>) => {
  const navigate = useNavigate();
  const { data, error, ...others } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/admin/recommendations");
    },
    onError: (e: AxiosError) => {
      setError("password", handleAxiosError(e));
    },
  });
  return { data, error, ...others };
};
