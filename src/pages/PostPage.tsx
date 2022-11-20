import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import { Post } from "../interfaces/Post";
import createPostCard from "../middleware/libraries/createPostCard";
import deletePostCard from "../middleware/libraries/deletePostCard";
import getPost from "../middleware/libraries/getPost";

const PostCard = () => {
  const [post, setPost] = useState<Post | undefined>();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { postId } = useParams();

  async function handleCreateDeck(e: React.FormEvent) {
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

  console.log(cards);
  console.log(post);

  return (
    <div>
      <h1>{post?.title}</h1>
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
