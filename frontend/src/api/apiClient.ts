import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error)  => {
    const isLoginRequest = error.config?.url?.includes("/auth/login");

    if (error.response?.status == 401 && !isLoginRequest) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href=("login");
    }

    return Promise.reject(error);
  }
);