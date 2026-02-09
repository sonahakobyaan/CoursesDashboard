export interface Author {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

export interface CreateCourseData {
  title: string;
  description: string;
  duration: number;
  authors: string[];
  creationDate: string;
}

export interface CreateAuthorData {
  name: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  username: string;
}

export interface User {
  username: string;
  token: string;
  refreshToken: string;
}

export type CourseFormMode = "create" | "edit";

export interface ApiError {
  message: string;
  status?: number;
}

