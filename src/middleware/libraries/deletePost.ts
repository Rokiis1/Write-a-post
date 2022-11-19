import { API_URL } from "../api/api";

export const deletePost = async (postId: string) => {
  const response = await fetch(`${API_URL}/api/v1/card/delete/${postId}`, {
    method: "DELETE",
  });
  return response.json();
};
