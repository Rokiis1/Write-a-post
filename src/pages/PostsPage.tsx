import React from "react";
import { useEffect, useState } from "react";
import { useGetPosts } from "../hooks/useGetPosts";
import { FetchState } from "../interfaces/States";
import { deletePost } from "../middleware/libraries/deletePost";
import { createPost } from "../middleware/libraries/createPost";
import "../styles/PostPage.css";
import PostCard from "../components/PostCard";

const PostsPage = () => {
  const [title, setTitle] = useState<string>("");
  const [fetchState, posts, setPosts, getAllPosts] = useGetPosts();

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    const post = await createPost(title);
    setPosts([...posts, post]);
    setTitle("");
  };

  const handleDeletePost = async (postId: string) => {
    await deletePost(postId);
    setPosts(posts.filter((post) => post._id !== postId));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <div>
        <h1>Your posts</h1>
        {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
        {fetchState === FetchState.ERROR && (
          <ul>
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                handleDeletePost={handleDeletePost}
              />
            ))}
          </ul>
        )}
        {fetchState === FetchState.SUCCESS && (
          <ul>
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                handleDeletePost={handleDeletePost}
              />
            ))}
          </ul>
        )}
        <form onSubmit={handleCreatePost}>
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
