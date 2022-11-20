import { useState } from "react";
import { Post } from "../interfaces/Post";
import { FetchState } from "../interfaces/States";
import getPost from "../middleware/libraries/getPost";

const useGetPost = () => {
  const [post, setPost] = useState<Post | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);

  const getOnePost = (postId: string) => {
    setFetchState(FetchState.LOADING);
    return getPost(postId)
      .then(setPost)
      .then(() => setFetchState(FetchState.SUCCESS))
      .catch(() => setFetchState(FetchState.ERROR));
  };

  return [fetchState, post, cards, setCards, setPost, getOnePost] as const;
};

export default useGetPost;
