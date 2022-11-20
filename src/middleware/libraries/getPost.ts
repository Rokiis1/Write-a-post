import { Post } from "../../interfaces/Post";
import { API_URL } from "../api/api";

const getPost = async (postId: string): Promise<Post> => {
  const response = await fetch(`${API_URL}/posts/${postId}`);
  return response.json();
};

export default getPost;
