import { Routes, Route } from "react-router-dom";
import { RouteKey } from "./RouteKey";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage";

const Router = () => (
  <Routes>
    <Route path={RouteKey.Index} element={<PostsPage />} />
    <Route path={RouteKey.Post} element={<PostPage />} />
  </Routes>
);

export default Router;
