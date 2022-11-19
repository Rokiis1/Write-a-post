import { Post } from "../../interfaces/Post";
import { API_URL } from "../api/api";

export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_URL}/api/v1/posts`);
  return response.json();
};
