import { Post } from "../../interfaces/Post";
import { API_URL } from "../api/api";

const createPostCard = async (postId: string, text: string): Promise<Post> => {
  const response = await fetch(`${API_URL}/posts/${postId}/cards`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default createPostCard;
