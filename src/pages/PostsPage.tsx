import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPosts } from "../hooks/useGetPosts";
import { FetchState } from "../interfaces/States";
import { deletePost } from "../middleware/libraries/deletePost";
import "../styles/PostPage.css";

const PostsPage = () => {
  const [title, setTitle] = useState("");
  const [fetchState, posts, setPosts, getAllPosts] = useGetPosts();

  const handleDeletePost = async (postId: string) => {
    await deletePost(postId);
    setPosts(posts.filter((post) => post._id !== postId));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="container">
      <div className="PostsPage">
        <h1>Your posts</h1>
        {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
        {fetchState === FetchState.ERROR && (
          <ul className="post">
            {posts.map((post) => (
              <li key={post._id}>
                <button onClick={() => handleDeletePost(post._id)}>X</button>
                <Link to={`post/${post._id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        )}
        {fetchState === FetchState.SUCCESS && (
          <ul className="post">
            {posts.map((post) => (
              <li key={post._id}>
                <button onClick={() => handleDeletePost(post._id)}>X</button>
                <Link to={`post/${post._id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        )}
        <form>
          <label htmlFor="post-title">Post title</label>
          <input
            id="post-title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          <button>Create post</button>
        </form>
      </div>
    </div>
  );
};

export default PostsPage;
