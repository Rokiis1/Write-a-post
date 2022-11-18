import axios from "axios";
import { useState } from "react";
import { FetchState } from "../../Types";
import { API_URL } from "../api/api";

export const useGetPosts = () => {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const response = await axios.get(`${API_URL}/api/v1/card/get/decks`);
      const responseData = response.data;

      setPosts(responseData);

      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [posts, fetchState, getPosts] as const;
};

export default useGetPosts;
