import useGetPosts from "./middleware/libraries/getPosts";
import { FetchState } from "./Types";

const App = () => {
  const [posts, fetchState, getPosts] = useGetPosts();

  return (
    <div>
      <div></div>
    </div>
  );
};

export default App;
