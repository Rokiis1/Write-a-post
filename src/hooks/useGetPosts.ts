import { useState } from "react";
import { Post } from "../interfaces/Post";
import { FetchState } from "../interfaces/States";
import { getPosts } from "../middleware/libraries/getPosts";

export const useGetPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);

  const getAllPosts = () => {
    setFetchState(FetchState.LOADING);
    return getPosts()
      .then(setPosts)
      .then(() => setFetchState(FetchState.SUCCESS))
      .catch(() => setFetchState(FetchState.ERROR));
  };

  return [fetchState, posts, setPosts, getAllPosts] as const;
};
