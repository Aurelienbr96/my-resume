import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeResponseInterceptor();
    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        const refreshToken = this.getRefreshToken();
        if (token) {
          config.headers["Authorization"] = `${token}`;
          config.headers["x-refresh"] = refreshToken;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  private initializeResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      this.handleResponse,
      /* async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const refreshToken = this.getRefreshToken();
          const newToken = await this.refreshAccessToken(refreshToken);
          this.saveToken(newToken);
          axios.defaults.headers.common["Authorization"] = `${newToken}`;

          return this.axiosInstance(originalRequest);
        }
        return Promise.reject(error);
      }, */
    );
  }

  public saveToken(token: string): void {
    console.log("save token", token);
    localStorage.setItem("accessToken", token);
  }

  public getToken(): string {
    const accessToken = localStorage.getItem("accessToken") || "";
    return accessToken;
  }

  public getRefreshToken(): string {
    return localStorage.getItem("refreshToken") || "";
  }

  private handleResponse(data: AxiosResponse) {
    return data;
  }

  public saveRefreshToken(refreshToken: string): void {
    localStorage.setItem("refreshToken", refreshToken);
  }

  public get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  // Using generic type parameter T for response, and D for request data
  public post<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  // Similar to post, with generics for response and request data types
  public put<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }
}

export const api = new ApiService(
  import.meta.env.VITE_PRODUCTION_API_KEY + "api/v1",
);
