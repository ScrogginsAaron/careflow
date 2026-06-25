import { apiClient } from "./apiClient";

export type AuthUser = {
  id: string;
  name:string
  email: string;
  role: string;
  createdAt: string;
};

type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
    token: string;
  };
};

export async function login(email: string, password: string) {
  const response = await apiClient.post<LoginResponse>("/auth/login", {
    email,
    password,
  });

  return response.data.data;
}