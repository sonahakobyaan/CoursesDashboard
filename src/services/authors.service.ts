import type { Author, CreateAuthorData } from "@/types";

const AUTHORS_API_URL = "https://698641a06964f10bf255e850.mockapi.io/api/authors";

async function getAuthHeaders(): Promise<HeadersInit> {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function getAuthors(): Promise<Author[]> {
  const response = await fetch(AUTHORS_API_URL, {
    headers: await getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch authors. Please try again later.");
  }

  return response.json();
}

export async function getAuthorById(id: string): Promise<Author> {
  const response = await fetch(`${AUTHORS_API_URL}/${id}`, {
    headers: await getAuthHeaders(),
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Author not found");
    }
    throw new Error("Failed to fetch author details. Please try again later.");
  }

  return response.json();
}

export async function createAuthor(data: CreateAuthorData): Promise<Author> {
  const response = await fetch(AUTHORS_API_URL, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create author. Please try again later.");
  }

  return response.json();
}

export async function deleteAuthor(id: string): Promise<void> {
  const response = await fetch(`${AUTHORS_API_URL}/${id}`, {
    method: "DELETE",
    headers: await getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete author. Please try again later.");
  }
}

