import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import { Post } from "../interfaces/Post";
import createPostCard from "../middleware/libraries/createPostCard";
import deletePostCard from "../middleware/libraries/deletePostCard";
import getPost from "../middleware/libraries/getPost";
import "../styles/Card.css";

const PostCard = () => {
  const [post, setPost] = useState<Post | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { postId } = useParams();

  async function handleCreatePost(e: React.FormEvent) {
    e.preventDefault();
    const { cards: serverCards } = await createPostCard(postId!, text);
    setCards(serverCards);
    setText("");
  }

  async function handleDeleteCard(cardId: number) {
    if (!postId) return;
    const newDeck = await deletePostCard(postId, cardId);
    setCards(newDeck.cards);
  }

  useEffect(() => {
    async function fetchPost() {
      if (!postId) return;
      const newPost = await getPost(postId);
      setPost(newPost);
      setCards(newPost.cards);
    }
    fetchPost();
  }, [postId]);

  return (
    <div className="PostPage-Conatiner">
      <h1 className="PostsPage-h1">{post?.title}</h1>

      <ul className="PostsPage-Card">
        {cards.map((card, cardId) => (
          <li className="PostsPage-Card-Content" key={cardId}>
            {card}
            <button
              PostsPage-Card-button
              onClick={() => handleDeleteCard(cardId)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <form className="Form-Group" onSubmit={handleCreatePost}>
        <label className="Form-Label" htmlFor="card-text">
          Card Text
        </label>
        <input
          type="text"
          id="card-text"
          className="Form-Field"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button className="Form-Group-Button">Create Card</button>
      </form>
    </div>
  );
};

export default PostCard;
