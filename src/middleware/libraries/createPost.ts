import { API_URL } from "../api/api";

export const createPost = async (title: string) => {
  const response = await fetch(`${API_URL}/api/v1/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
