import React from "react";
import { useEffect, useState } from "react";
import { useGetPosts } from "../hooks/useGetPosts";
import { FetchState } from "../interfaces/States";
import { deletePost } from "../middleware/libraries/deletePost";
import { createPost } from "../middleware/libraries/createPost";
import "../styles/PostPage.css";
import "../styles/Form.css";
import PostCards from "../components/PostsCard";
import Spinner from "../components/Spinner";

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
    <div className="PostPage-Conatiner">
      <h1 className="PostsPage-h1">Your posts</h1>

      {fetchState === FetchState.LOADING && <Spinner />}
      {fetchState === FetchState.ERROR && (
        <ul className="PostsPage-Card">
          {posts.map((post) => (
            <PostCards
              key={post._id}
              post={post}
              handleDeletePost={handleDeletePost}
            />
          ))}
        </ul>
      )}
      {fetchState === FetchState.SUCCESS && (
        <ul className="PostsPage-Card">
          {posts.map((post) => (
            <PostCards
              key={post._id}
              post={post}
              handleDeletePost={handleDeletePost}
            />
          ))}
        </ul>
      )}

      <form className="Form-Group" onSubmit={handleCreatePost}>
        <label className="Form-Label" htmlFor="post-title">
          Post title
        </label>
        <input
          type="text"
          className="Form-Field"
          id="post-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button className="Form-Group-Button">Create post</button>
      </form>
    </div>
  );
};

export default PostsPage;
