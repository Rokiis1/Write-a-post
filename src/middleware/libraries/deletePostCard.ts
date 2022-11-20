import { Post } from "../../interfaces/Post";
import { API_URL } from "../api/api";

const deletePostCard = async (
  postId: string,
  cardId: number
): Promise<Post> => {
  const response = await fetch(
    `${API_URL}/api/v1/posts/${postId}/cards/${cardId}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
};

export default deletePostCard;
