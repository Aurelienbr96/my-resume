import { useMutation } from "@tanstack/react-query";
import { LoginFormData } from "../LoginPage";
import { api } from "../../api/ApiService";
import { useNavigate } from "react-router-dom";

const login = async (item: LoginFormData) => {
  const response = await api.post<{
    refreshToken: string;
    accessToken: string;
  }>("/sessions", item);
  if (!response) {
    throw new Error("Network response was not ok");
  }

  console.log("response", response.data);

  api.saveRefreshToken(response.data.refreshToken);
  api.saveToken(response.data.accessToken);

  return response;
};

export const useLogin = () => {
  const navigate = useNavigate();
  const { data, error, ...others } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/admin/recommendations");
    },
    onError: (e) => {
      console.log(e);
    },
  });
  return { data, error, ...others };
};
