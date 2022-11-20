import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import createPostCard from "../middleware/libraries/createPostCard";

const PostCard = () => {
  const [text, setText] = useState("");
  const [fetchState, post, cards, setCards, setPost, getOnePost] = useGetPost();
  const { postId } = useParams();

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const { cards: serverCards } = await createPostCard(postId!, text);
    setCards(serverCards);
    setText("");
  }

  // useEffect(() => {
  //   if (!postId) return;
  //   const newCard = getOnePost(postId);
  //   setPost(newCard);
  //   setCards(newCard.cards);
  // }, [postId]);

  return (
    <div>
      <div>Testing</div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="card-text">Card Text</label>
        <input
          id="card-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
};

export default PostCard;
