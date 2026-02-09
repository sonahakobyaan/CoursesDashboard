import type { Course, CreateCourseData } from "@/types";

const COURSES_API_URL = "https://698641a06964f10bf255e850.mockapi.io/api/courses";

async function getAuthHeaders(): Promise<HeadersInit> {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function getCourses(): Promise<Course[]> {
  const response = await fetch(COURSES_API_URL, {
    headers: await getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch courses. Please try again later.");
  }

  return response.json();
}

export async function getCourseById(id: string): Promise<Course> {
  const response = await fetch(`${COURSES_API_URL}/${id}`, {
    headers: await getAuthHeaders(),
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Course not found");
    }
    throw new Error("Failed to fetch course details. Please try again later.");
  }

  return response.json();
}

export async function createCourse(data: CreateCourseData): Promise<Course> {
  const response = await fetch(COURSES_API_URL, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create course. Please try again later.");
  }

  return response.json();
}

export async function updateCourse(id: string, data: Partial<CreateCourseData>): Promise<Course> {
  const response = await fetch(`${COURSES_API_URL}/${id}`, {
    method: "PUT",
    headers: await getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update course. Please try again later.");
  }

  return response.json();
}

export async function deleteCourse(id: string): Promise<void> {
  const response = await fetch(`${COURSES_API_URL}/${id}`, {
    method: "DELETE",
    headers: await getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete course. Please try again later.");
  }
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
}

