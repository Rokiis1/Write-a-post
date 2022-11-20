import NavLink from "./NavLink";
import { Post } from "../interfaces/Post";
import { generatePath } from "react-router-dom";
import { RouteKey } from "../routes/RouteKey";
import "../styles/Card.css";

type Props = {
  post: Post;
  handleDeletePost: (postId: string) => Promise<void>;
};

const PostCards = ({ post, handleDeletePost }: Props) => {
  return (
    <>
      <li className="PostsPage-Card-Content">
        <NavLink
          className="NavLink"
          to={generatePath(RouteKey.Post, {
            postId: post._id,
          })}
        >
          {post.title}
        </NavLink>
        <button onClick={() => handleDeletePost(post._id)}>X</button>
      </li>
    </>
  );
};

export default PostCards;
