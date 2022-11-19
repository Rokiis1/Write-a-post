import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouteKey } from "./RouteKey";
import PostsPage from "../pages/PostsPage";

const Router = () => (
  <Routes>
    <Route path={RouteKey.Index} element={<PostsPage />} />
  </Routes>
);
export default Router;
