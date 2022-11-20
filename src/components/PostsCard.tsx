import NavLink from "./NavLink";
import { Post } from "../interfaces/Post";
import { generatePath } from "react-router-dom";
import { RouteKey } from "../routes/RouteKey";

type Props = {
  post: Post;
  handleDeletePost: (postId: string) => Promise<void>;
};

const PostCards = ({ post, handleDeletePost }: Props) => {
  return (
    <>
      <li>
        <button onClick={() => handleDeletePost(post._id)}>X</button>
        <NavLink
          to={generatePath(RouteKey.Post, {
            postId: post._id,
          })}
        >
          {post.title}
        </NavLink>
      </li>
    </>
  );
};

export default PostCards;
