import type { LoginResponse } from "@/types";

const AUTH_BASE_URL = "https://dummyjson.com/auth";

export async function login(username: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${AUTH_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 60,
    }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Invalid username or password");
    }
    throw new Error("Login failed. Please try again.");
  }

  const data: LoginResponse = await response.json();

  localStorage.setItem("token", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  localStorage.setItem("username", data.username);

  return data;
}

export function logout(): void {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("username");
}

export function getToken(): string | null {
  return localStorage.getItem("token");
}

export function getUsername(): string | null {
  return localStorage.getItem("username");
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

